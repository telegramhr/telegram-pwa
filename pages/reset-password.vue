<template>
  <div></div>
</template>

<script>
export default {
  name: 'ResetPassword',
  mounted() {
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
              resetPasswordToken: token,
              loggedIn() {
                // Once user logs in - refresh the page
                location.reload()
              },
            })
          }
        }
      },
    ])
  },
}
</script>
