<template>
  <div>
    <Theader></Theader>
    <div id="login"></div>
    <div>{{ cookies }}</div>
    <Tfooter></Tfooter>
  </div>
</template>

<script>
export default {
  computed: {
    cookies() {
      return document.cookie
    },
  },
  mounted() {
    window.tp.pianoId.show({
      screen: 'login',
      displayMode: 'inline',
      containerSelector: '#login',
      loggedIn(data) {
        console.log('data', data)
        this.$store.dispatch('user/setUser', data.user)
        this.$store.commit('user/setToken', data.token)
        window.tp.api.callApi('/access/list', {}, function (response) {
          console.log(response)
          this.$store
            .dispatch('user/setAccess', {
              data: response.data,
              user: data.user,
            })
            .then(() => {
              this.$router.go(-1)
            })
        })
      },
    })
  },
}
</script>
