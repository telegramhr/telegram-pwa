<template>
  <div>
    <div
      v-show="show"
      class="full center flex-wrap relative new-pretplata-intext"
      data-nosnippet
    >
      <div class="full relative center-text element-title shoo-top">
        {{ title }}
      </div>
      <p class="full relative center-text">
        {{ subtitle }}
      </p>
      <div class="full center">
        <a
          v-if="termId"
          class="newbtn huge-newbtn"
          @click.prevent="checkout(termId)"
        >
          Pretplatite se
        </a>
        <app-link v-else :id="id" to="/pretplata" class="newbtn huge-newbtn"
          >Pretplatite se</app-link
        >
      </div>
      <p
        v-if="!$store.state.user.token"
        class="full center-text relative italic smaller-text faded secondary-cta clickable"
        @click.prevent="$store.dispatch('user/login')"
      >
        Već imam pretplatu
      </p>
      <div class="full flex-responsive flex pretplata-benefits">
        <p class="full animate">
          <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
          neograničen pristup svim člancima
          <span class="ib">najkvalitetnijih novinara u Hrvatskoj</span>
        </p>
        <p class="full animate">
          <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
          premium iskustvo čitanja s manje
          <span class="ib">oglasa i specijalnim newsletterima</span>
        </p>
        <p class="full animate">
          <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
          posebni popusti na top knjige,
          <span class="ib">predstave, muzeje i streaminge</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intext',
  data() {
    return {
      termId: null,
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
        if (e.detail.termId) {
          this.termId = e.detail.termId
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
        if (document.getElementById('new_pretplata')) {
          document.getElementById('new_pretplata').classList.add('hide')
        }
      } else {
        if (this.type === 'load') {
          setTimeout(this.load, 500)
        }
        if (this.type === 'paywall') {
          setTimeout(this.paywall, 500)
        }
      }
    },
    checkout(termId) {},
  },
}
</script>
