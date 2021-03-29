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
    <h2 class="full">Pročitali ste sve besplatne članke ovaj mjesec.</h2>
    <p class="full center-text">
      Za neograničeno čitanje Telegrama i podršku istraživačkim serijalima,
      odaberite jedan od paketa.
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
      show: false,
    }
  },
  mounted() {
    window.addEventListener('piano_intext', this.load)
  },
  destroyed() {
    window.removeEventListener('piano_intext', this.load)
  },
  methods: {
    load() {
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
          _that.$store.dispatch('user/setUser', data)
          window.location.reload()
        },
      })
    },
  },
}
</script>
