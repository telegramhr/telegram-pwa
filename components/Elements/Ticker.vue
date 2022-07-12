<template>
  <div v-show="shown" class="full pretplata-ticker relative">
    <div class="close-ticker-btn center animate" @click="shown = !shown">
      <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
    </div>
    <div class="container flex relative">
      <h2 class="full center-text">{{ title }}</h2>
      <p class="full center-text">
        {{ subtitle }}
      </p>
      <div class="full center">
        <app-link :id="id" to="/pretplata" class="btn animate"
          >Pretplatite se</app-link
        >
        <div
          v-show="$store.state.user.access"
          class="btn animate"
          @click="$store.dispatch('user/login')"
        >
          Već imam pretplatu
        </div>
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
      id: '',
      title: 'Bespoštedno novinarstvo koje gura društvo naprijed.',
      subtitle:
        'Za neograničeno čitanje Telegrama i podršku istraživačkim serijalima, pretplatite se na Telegram.',
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
      if (e.detail) {
        this.id = e.detail.id
        this.title = e.detail.title
        this.subtitle = e.detail.subtitle
      }
      this.shown = true
    },
  },
}
</script>
