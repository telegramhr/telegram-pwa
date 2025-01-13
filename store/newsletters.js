import Vue from 'vue'

export const state = () => ({
  api_key: '97a55449-2b35-4a24-865b-9e608a9eca0f',
  lists: {},
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
    console.log(state.api_key)
    this.$axios
      .$post(
        '/mailer/api/v1/users/user-preferences',
        {
          user_id: rootState.user.id,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${state.api_key}`,
          },
        }
      )
      .then((res) => {
        res.forEach((item) => {
          if (item.is_subscribed) {
            commit('hasSub', item.code)
          }
        })
      })
  },
  subscribe({ rootState, commit, state, dispatch }, payload) {
    if (payload.free || rootState.user.access) {
      this.$axios
        .post(
          '/mailer/api/v1/users/subscribe',
          {
            email: rootState.user.email,
            user_id: rootState.user.id,
            list_code: payload.mlid,
          },
          { headers: { Authorization: `Bearer ${state.api_key}` } }
        )
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
      .post(
        '/mailer/api/v1/users/un-subscribe',
        {
          data: {
            email,
            user_id: rootState.user.id,
            list_code: payload.mlid,
          },
        },
        { headers: { Authorization: `Bearer ${state.api_key}` } }
      )
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
    this.$cookies.remove('n_token')
    commit('clearAccess')
  },
}
