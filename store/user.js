import { Capacitor } from '@capacitor/core'

export const state = () => ({
  id: 0,
  uid: '',
  first_name: '',
  last_name: '',
  email: '',
  token: '',
  exp: 0,
  access: [],
  updated: null,
  admin: false,
  type: 'not-registered',
  coral_token: false,
  coral_update: null,
  showModal: false,
  error: '',
  screen: 'login',
  shouldReload: true,
  callback: null,
})

export const mutations = {
  setUser(state, data) {
    state.id = data.user.id
    state.first_name = data.user.first_name
    state.last_name = data.user.last_name
    state.email = data.user.email
    state.uid = data.user.uuid
    state.type = 'registered'
    if (data.access) {
      state.token = data.access.token
    }
    state.error = ''
  },
  logout(state) {
    state.id = 0
    state.uid = 0
    state.first_name = ''
    state.last_name = ''
    state.email = ''
    state.token = ''
    state.exp = 0
    state.access = []
    state.coral_token = false
    state.type = 'not-registered'
    state.token = ''
    state.updated = null
    state.error = ''
  },
  setTerm(state, data) {
    let access = []
    if (state.access) {
      access = [...state.access]
    }
    state.access = [...access, ...data]
    state.updated = new Date().getTime()
  },
  setToken(state, token) {
    state.token = token
  },
  setAdmin(state) {
    state.admin = true
  },
  setCoral(state, token) {
    state.coral_token = token
    state.coral_update = new Date().getTime()
  },
  openModal(state, payload) {
    state.showModal = !state.showModal
    state.screen = payload?.screen || 'login'
    if (payload && Object.keys(payload).includes('shouldReload')) {
      state.shouldReload = payload.shouldReload
    } else {
      state.shouldReload = true
    }
    if (payload && Object.keys(payload).includes('callback')) {
      state.callback = payload.callback
    } else {
      state.callback = null
    }
  },
  closeModal(state) {
    state.showModal = false
  },
  setError(state, error) {
    state.error = error
  },
  shouldReload(state, value) {
    state.shouldReload = value
  },
}

export const actions = {
  setUser({ commit, dispatch }, data) {
    return new Promise((resolve) => {
      commit('setUser', data)
    })
  },
  getCoralToken({ commit, state }) {
    return new Promise((resolve) => {
      if (
        state.coral_token &&
        state.coral_update &&
        state.coral_update > new Date().getTime() - 3600000
      ) {
        resolve(state.coral_token)
        return
      }
      this.$axios.get(`/pretplate/coral/token/${state.token}`).then((res) => {
        commit('setCoral', res.data)
        resolve(res.data)
      })
    })
  },
  setAccess({ commit, dispatch, state }, data) {
    return new Promise((resolve) => {
      if (data) {
        commit('setTerm', data.data.access)
        if (window.fbq) {
          window.fbq('trackCustom', 'HasSubscription', { value: 1 })
        }
        if (window.marfeel) {
          let id = 3
          if (state.email.includes('@telegram')) {
            id = 4
          }
          window.marfeel.cmd.push([
            'compass',
            function (compass) {
              compass.setUserType(id)
              compass.setSiteUserId(state.uid)
            },
          ])
        }
        resolve()
      } else {
        if (window.fbq) {
          window.fbq &&
            window.fbq('trackCustom', 'HasSubscription', { value: 0 })
          resolve()
        }
        if (window.marfeel) {
          window.marfeel.cmd.push([
            'compass',
            function (compass) {
              compass.setUserType(2)
              compass.setSiteUserId(state.uid)
            },
          ])
        }
      }
    })
  },
  checkAccess({ state, dispatch, commit }, token) {
    if (!token) {
      const cookie = this.$cookies.get('n_token')
      if (cookie) {
        commit('setToken', cookie)
        token = cookie
      } else {
        commit('logout')
        return
      }
    }
    if (state.updated && state.updated > new Date().getTime() - 600 * 1000) {
      return
    }
    this.$axios
      .$get('/crm/api/v1/user/info', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        commit('setUser', res)
      })
      .catch(() => {
        commit('logout')
      })
    this.$axios
      .$get('/crm/api/v1/users/subscriptions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 'ok') {
          res.subscriptions.forEach((sub) => {
            const end = new Date(sub.end_at)
            if (end > new Date()) {
              dispatch('setAccess', { data: sub })
            }
          })
        }
      })
  },
  checkAdmin({ commit }) {
    if (this.$cookies.get('wp-settings-1')) {
      commit('setAdmin')
    }
  },
  logout({ commit, dispatch, state }) {
    this.$cookies.remove('n_token', {
      domain: '.telegram.hr',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    })
    if (state.uid) {
      dispatch('newsletters/clearAccess', null, { root: true })
    }
    commit('logout')
    // this.$router.push('/')
  },
  login({ commit, dispatch }, payload) {
    commit('openModal', payload)
  },
  loginSubmit({ commit, dispatch, state }, payload) {
    const data = new FormData()
    data.append('email', payload.email)
    data.append('password', payload.password)
    data.append('source', 'api')
    if (Object.keys(payload).includes('reload')) {
      commit('shouldReload', payload.reload)
    }
    this.$axios
      .$post('/crm/api/v1/users/login', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => {
        commit('setUser', res)
        this.$cookies.set('n_token', res.access.token, {
          // domain: '.telegram.hr',
          path: '/',
          maxAge: 60 * 60 * 24 * 365,
          sameSite: 'lax',
        })
        dispatch('checkAccess', res.access.token)
        commit('closeModal')
        if (state.callback) {
          state.callback()
        }
        if (state.shouldReload) {
          setTimeout(() => {
            window.location.reload()
          }, 2000)
        }
      })
      .catch(() => {
        dispatch('loginPiano', payload)
      })
  },
  registerSubmit({ commit, dispatch, state }, payload) {
    const data = new FormData()
    data.append('email', payload.email)
    data.append('password', payload.password)
    data.append('source', 'api')
    this.$axios
      .$post('/crm/api/v1/users/create', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ff4a16187c0fc0cc0267b95410c4f55a`,
        },
      })
      .then((res) => {
        commit('setUser', res)
        this.$cookies.set('n_token', res.access.token, {
          // domain: '.telegram.hr',
          path: '/',
          maxAge: 60 * 60 * 24 * 365,
          sameSite: 'lax',
        })
        commit('closeModal')
        if (state.callback) {
          state.callback()
        }
        if (state.shouldReload) {
          setTimeout(() => {
            window.location.reload()
          }, 2000)
        }
      })
  },
  loginPiano({ commit, dispatch }, payload) {
    this.$axios
      .post(
        '/piano/id/api/v1/publisher/identity/login',
        {
          email: payload.email,
          password: payload.password,
          aid: 'QuTHmVhFpu',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'KWnqgtqMFjyU3l5NXhvfDTsHWp0NY2ceQF8R5Cb9',
          },
        }
      )
      .then(() => {
        // update user in remp
        // get user
        const data = new FormData()
        data.append('email', payload.email)
        this.$axios
          .post('/crm/api/v2/users/email', data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })
          .then((res) => {
            if (res.data.id) {
              const data2 = new FormData()
              data2.append('user_id', res.data.id)
              data2.append('password', payload.password)
              this.$axios
                .post('/crm/api/v1/users/update', data2, {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ff4a16187c0fc0cc0267b95410c4f55a`,
                  },
                })
                .then((res) => {
                  dispatch('loginSubmit', payload)
                })
            }
          })
      })
      .catch(() => {
        commit('setError', 'Email i/ili lozinka nisu ispravni')
      })
  },
}

export const getters = {
  hasPremium(state) {
    if (Capacitor.isNativePlatform()) {
      return true
    }
    if (!state.access) {
      return false
    }
    return (
      state.access === 'BR92VTWM' || state.access.includes('telegram_premium')
    )
  },
  canLogIn(state) {
    return !state.token
  },
}
