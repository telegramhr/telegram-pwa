<template>
  <div v-show="shown" class="full pretplata-ticker relative">
    <div class="close-ticker-btn center animate" @click="shown = !shown">
      <i class="fas fa-times"></i>
    </div>
    <div class="container flex relative">
      <h2 class="full center-text">{{ messages[page].title }}</h2>
      <p class="full center-text">
        Za neograničeno čitanje Telegrama i podršku istraživačkim serijalima,
        pretplatite se na Telegram.
      </p>
      <div class="full center">
        <app-link to="/pretplata" class="btn animate">Pretplatite se</app-link>
        <div class="btn animate" @click="login">Već imam pretplatu</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ticker',
  data() {
    return {
      shown: false,
      page: 1,
      messages: {
        1: {
          title: 'Bespoštedno novinarstvo koje gura društvo naprijed.',
        },
        6: {
          title: 'Bespoštedno novinarstvo koje gura društvo naprijed.',
        },
        9: {
          title: 'Ostao vam je još 1 besplatni članak u ovom mjesecu.',
        },
        10: {
          title: 'Ovo vam je posljednji besplatni članak u ovom mjesecu.',
        },
      },
    }
  },
  mounted() {
    window.addEventListener('piano_ticker', this.load)
  },
  destroyed() {
    window.removeEventListener('piano_ticker', this.load)
  },
  methods: {
    load(e) {
      this.shown = true
      if (e.detail) {
        this.page = e.detail
      }
    },
    login() {
      const _that = this
      window.tp.pianoId.show({
        screen: 'login',
        loggedIn(data) {
          _that.$store.dispatch('user/setUser', data)
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
