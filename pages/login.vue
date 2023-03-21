<template>
  <div>
    <Theader></Theader>
    <div class="main-container flex single-article">
      <div class="full flex">
        <div class="full flex column-full-pad mobile-side-pad donation-form">
          <label for="name">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            name="email"
            placeholder="Email"
          />
          <label for="address">Lozinka</label>
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            required
          />
          <button @click="login">Prijava</button>
        </div>
      </div>
    </div>
    <Tfooter></Tfooter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      api_token: 'KWnqgtqMFjyU3l5NXhvfDTsHWp0NY2ceQF8R5Cb9',
      aid: 'QuTHmVhFpu',
    }
  },
  methods: {
    login() {
      this.$axios
        .post('https://api.piano.io/id/api/v1/publisher/login', null, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          params: {
            api_token: this.api_token,
            aid: this.aid,
            email: this.email,
            password: this.password,
          },
        })
        .then((res) => {
          // save access token
          this.$store.commit('user/setToken', res.data.access_token)
          // request data about user
          this.$axios
            .post('https://api.piano.io/id/api/v1/publisher/users/get', null, {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              params: {
                api_token: this.api_token,
                aid: this.aid,
                email: this.email,
              },
            })
            .then((res) => {
              this.$store.dispatch('user/setUser', res.data)
              this.$axios
                .get('https://pretplate.telegram.hr/check/' + res.data.uid)
                .then((res) => {
                  if (res.data.rid) {
                    this.$store.commit('user/setTerm', res.data)
                    this.$router.push('/')
                  }
                  // TODO: popup for user with no access
                })
            })
        })
    },
  },
}
</script>
