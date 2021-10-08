<template>
  <div v-show="show" class="full flex relative pretplata-intext">
    <div class="full center">
      <img
        src="@/assets/img/tg_neue_favicon.png"
        aria-hidden="true"
        class="pretplata-avatar"
      />
    </div>
    <h2 class="full">{{ title }}</h2>
    <p class="full center-text">
      {{ subtitle }}
    </p>
    <div class="full center">
      <app-link to="/pretplata" class="btn">Pretplatite se</app-link>
      <div
        v-if="!$store.state.user.token"
        class="btn altbtn"
        @click.prevent="login"
      >
        Već imam pretplatu
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intext',
  data() {
    return {
      show: false,
      title: 'Pročitali ste sve besplatne članke u ovom mjesecu.',
      subtitle:
        'Za neograničeno čitanje Telegrama i podršku istraživačkim serijalima, pretplatite se na Telegram.',
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
      this.subtitle =
        'Za neograničeno čitanje Telegrama i podršku istraživačkim serijalima, pretplatite se na Telegram.'
      if (this.$store.state.user.token) {
        this.title = 'Vaš korisnički račun nema aktivnu pretplatu.'
        this.subtitle =
          'Pretplatite se odmah kako biste imali neograničen pristup svim sadržajima.'
      }
      this.triggerShow()
    },
    load() {
      this.title = 'Pročitali ste sve besplatne članke u ovom mjesecu.'
      this.subtitle =
        'Za neograničeno čitanje Telegrama i podršku istraživačkim serijalima, pretplatite se na Telegram.'
      if (this.$store.state.user.token) {
        this.title = 'Vaš korisnički račun nema aktivnu pretplatu.'
        this.subtitle =
          'Pretplatite se odmah kako biste imali neograničen pristup svim sadržajima.'
      }
      this.triggerShow()
    },
    triggerShow() {
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
