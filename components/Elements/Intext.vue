<template>
  <app-link
    v-show="show"
    to="/pretplata"
    class="full flex relative pretplata-intext"
  >
    <div class="full center">
      <img
        src="@/assets/img/tg_neue_favicon.png"
        aria-hidden="true"
        class="pretplata-avatar"
      />
    </div>
    <h2 class="full">{{ title }}</h2>
    <p class="full center-text">
      Za neograničeno čitanje Telegrama i podršku istraživačkim serijalima,
      pretplatite se na Telegram.
    </p>
    <div class="full center">
      <div class="btn">Pretplatite se</div>
      <div class="login-sidebtn animate" @click.prevent="login">
        Već imate pretplatu? Prijavite se
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'Intext',
  data() {
    return {
      show: true,
      title: 'Pročitali ste sve besplatne članke u ovom mjesecu.',
    }
  },
  mounted() {
    window.addEventListener('piano_intext', this.load)
    window.addEventListener('piano_intext_paywall', this.paywall)
  },
  destroyed() {
    window.removeEventListener('piano_intext', this.load)
    window.removeEventListener('piano_intext_paywall', this.paywall)
  },
  methods: {
    paywall() {
      this.title = 'Ovaj članak dostupan je samo pretplatnicima.'
      const el = document.getElementById('piano-content')
      if (el) {
        this.show = true
        el.parentNode.removeChild(el)
      } else {
        setTimeout(this.paywall, 500)
      }
    },
    load() {
      this.title = 'Pročitali ste sve besplatne članke u ovom mjesecu.'
      const el = document.getElementById('piano-content')
      if (el) {
        this.show = true
        el.parentNode.removeChild(el)
      } else {
        setTimeout(this.load, 500)
      }
    },
    login() {
      const _that = this
      window.tp.pianoId.show({
        screen: 'login',
        loggedIn(data) {
          _that.$store.dispatch('user/setUser', data.user)
          _that.$store.commit('user/setToken', data.token)
          window.tp.api.callApi('/access/list', {}, function (response) {
            _that.$store.dispatch('user/setAccess', response).then(() => {
              window.location.reload()
            })
          })
        },
      })
    },
  },
}
</script>
