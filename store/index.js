export const actions = {
  async nuxtServerInit({ commit, dispatch }, { $cookies, $axios }) {
    const token = $cookies && $cookies.get('n_token')
    if (!token) return
    commit('user/setToken', token)
    try {
      const res = await $axios.$get('/crm/api/v1/user/info', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (res && res.user) {
        commit('user/setUser', res)
      }
    } catch (e) {}
    try {
      const subs = await $axios.$get('/crm/api/v1/users/subscriptions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (subs && subs.status === 'ok' && Array.isArray(subs.subscriptions)) {
        subs.subscriptions.forEach((sub) => {
          const end = new Date(sub.end_at)
          if (end > new Date() && sub.access) {
            commit('user/setTerm', sub.access)
          }
        })
      }
    } catch (e) {}
  },
}
