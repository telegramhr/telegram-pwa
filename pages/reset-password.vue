<template>
  <div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div id="content" class="container full relative"></div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  mounted() {
    const _that = this
    window.tp.push([
      'init',
      function () {
        // Password can be reset only if user is anonymous
        if (!window.tp.user.isUserValid()) {
          // If URL has reset_token parameter
          const tokenMatch = location.search.match(/reset_token=([A-Za-z0-9]+)/)
          if (tokenMatch) {
            // Get value of the token
            const token = tokenMatch[1]
            // Present password reset form with the found token
            window.tp.pianoId.show({
              displayMode: 'inline',
              containerSelector: '#content',
              resetPasswordToken: token,
              loggedIn(data) {
                _that.$store.dispatch('user/setUser', data)
                this.$router.push('/')
              },
            })
          }
        }
      },
    ])
  },
}
</script>
