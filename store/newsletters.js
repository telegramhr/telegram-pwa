import Vue from 'vue'

export const state = () => ({
  api_key: 'V2rR5WTQbQyHEqCMvFEaUGU3ZNVkt4s6hnvmCz9dXt9aUwzMaUmXAhVzmv83',
  lists: {
    2128: false,
    2554: false,
    2555: false,
    2559: false,
    2560: false,
    2561: false,
    2562: false,
    2563: false,
    2564: false,
    2565: false,
    2566: false,
    2567: false,
    2568: false,
    2596: false,
    2597: false,
    2598: false,
    2599: false,
    2600: false,
    2626: false,
    2627: false,
    2628: false,
    2629: false,
    2630: false,
    2631: false,
    2642: false,
  },
  updated: null,
})

export const mutations = {
  hasSub(state, data) {
    Vue.set(state.lists, data, true)
    state.updated = new Date().getTime()
  },
  updated(state) {
    state.updated = new Date().getTime()
  },
  unSub(state, mlid) {
    state.lists[mlid] = false
    state.updated = new Date().getTime()
  },
  clearAccess(state) {
    Object.keys(state.lists).forEach((i) => {
      state.lists[i] = false
    })
    state.updated = null
  },
}

export const actions = {
  checkAccess({ rootState, state, commit }, queryEmail) {
    if (state.updated + 60 * 60 * 1000 > new Date().getTime()) {
      return
    }
    let email = rootState.user.email
    if (!email && queryEmail) {
      email = queryEmail
    }
    if (!email) {
      return
    }
    // const a = this.$axios.create()
    commit('updated')
    Object.keys(state.lists).forEach((key) => {
      if (email && key) {
        this.$axios
          .get(`/esp_sub/email/${email}/ml/${key}`)
          .then(() => {
            commit('hasSub', key)
          })
          .catch(() => {})
      }
    })
  },
  subscribe({ rootState, commit, state, dispatch }, payload) {
    if (!rootState.user.email) {
      // no user, prompt to login
      window.tp.pianoId.show({
        screen: 'register',
        width: window.innerWidth > 720 ? 600 : 375,
        loggedIn(data) {
          dispatch('user/setUser', data.user, { root: true })
          dispatch('subscribe', payload)
        },
      })
    } else if (payload.free || rootState.user.access) {
      this.$axios
        .post('/esp_sub/', {
          email: rootState.user.email,
          mlids: [payload.mlid],
        })
        .then(() => {
          commit('hasSub', payload.mlid)
          this.$gtm.push({})
          this.$gtm.push({
            event: 'newsletterSubscribe',
            location: payload.location,
            href: this.$router.fullPath,
            title: payload.title,
            mlid: payload.mlid,
          })
        })
    }
  },
  unsubscribe({ state, commit, rootState }, payload) {
    let email = rootState.user.email
    if (!email && payload.email) {
      email = payload.email
    }
    if (!email) {
      return
    }
    this.$axios
      .delete('/esp_sub/', {
        data: {
          email,
          mlids: [payload.mlid],
        },
      })
      .then(() => {
        commit('unSub', payload.mlid)
        this.$gtm.push({})
        this.$gtm.push({
          event: 'newsletterUnSubscribe',
          location: payload.location,
          href: this.$router.fullPath,
          title: payload.title,
          mlid: payload.mlid,
        })
      })
  },
  clearAccess({ commit }) {
    commit('clearAccess')
  },
}
