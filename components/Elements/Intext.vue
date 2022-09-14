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
      <app-link :id="id" to="/pretplata" class="btn">Pretplatite se</app-link>
      <div
        v-if="!$store.state.user.token"
        class="btn altbtn"
        @click.prevent="$store.dispatch('user/login')"
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
      id: 'pretplatite se - article - svi besplatni članci',
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
    paywall(e) {
      if (e.detail) {
        this.title = e.detail.title
        this.subtitle = e.detail.subtitle
        this.id = e.detail.id
        if (this.$store.state.user.token) {
          this.title = e.detail.title_user
          this.subtitle = e.detail.subtitle_user
          this.id = e.detail.id_user
        }
      } else {
        this.id = 'pretplatite se - article - samo za pretplatnike'
        this.title = 'Ovaj članak dostupan je samo pretplatnicima.'
        this.subtitle =
          'Iskoristite božićnu akciju i čitajte prvi mjesec bez limita za samo 1 kunu.'
        if (this.$store.state.user.token) {
          this.title = 'Vaš korisnički račun nema aktivnu pretplatu.'
          this.subtitle =
            'Iskoristite božićnu akciju i čitajte prvi mjesec bez limita za samo 1 kunu.'
        }
      }
      this.triggerShow('paywall')
    },
    load(e) {
      if (e.detail) {
        this.title = e.detail.title
        this.subtitle = e.detail.subtitle
        this.id = e.detail.id
        if (this.$store.state.user.token) {
          this.title = e.detail.title_user
          this.subtitle = e.detail.subtitle_user
          this.id = e.detail.id
          this.id = e.detail.id_user
        }
      } else {
        this.id = 'pretplatite se - article - svi besplatni članci'
        this.title = 'Pročitali ste sve besplatne članke u ovom mjesecu.'
        this.subtitle =
          'Iskoristite božićnu akciju i čitajte prvi mjesec bez limita za samo 1 kunu.'
        if (this.$store.state.user.token) {
          this.id = 'pretplatite se - article - nema aktivnu pretplatu'
          this.title = 'Vaš korisnički račun nema aktivnu pretplatu.'
          this.subtitle =
            'Iskoristite božićnu akciju i čitajte prvi mjesec bez limita za samo 1 kunu.'
        }
      }
      this.triggerShow('load')
    },
    triggerShow(type) {
      if (this.show) {
        return
      }
      const el = document.getElementById('piano-content')
      if (el) {
        this.show = true
        el.parentNode.removeChild(el)
        document
          .querySelector('#article-content p:last-child')
          .classList.add('premium-fade-out')
        document.getElementById('new_pretplata').classList.add('hide')
      } else {
        if (this.type === 'load') {
          setTimeout(this.load, 500)
        }
        if (this.type === 'paywall') {
          setTimeout(this.paywall, 500)
        }
      }
    },
  },
}
</script>
