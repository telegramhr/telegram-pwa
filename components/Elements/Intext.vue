<template>
  <div>
    <div
      v-show="show"
      class="full flex-wrap relative new-pretplata-intext blue-intext"
      data-nosnippet
    >
      <img
        src="@/assets/img/tg_visual_pretplata_hrvatskimrak.jpg"
        alt="Premijer Andrej Plenković i sudac Ivan Tudurić"
        class="absolute-half-img"
      />
      <div class="two-thirds flex relative">
        <div class="full relative element-title">
          Otključate cijeli Telegram za 1,99€/mj
        </div>
        <p class="full relative">
          Dok Hrvatska tone u mrak, informirajte se na Telegramu. Neograničeno
          čitanje po akcijskoj cijeni
        </p>
        <div class="full flex">
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
          <div
            v-if="!$store.state.user.token"
            class="relative italic smaller-text faded secondary-cta clickable"
            @click.prevent="$store.dispatch('user/login')"
          >
            Već imam pretplatu
          </div>
        </div>
        <div class="full pretplata-benefits desktop-only">
          <p class="full animate bold">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            Posebna cijena prva 3 mjeseca, zatim 6,49 EUR
          </p>
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            Neograničeno čitanje Telegrama
          </p>
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            Možete otkazati u svakom trenutku
          </p>
        </div>
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
    checkout(termId) {
      if (this.$store.state.user.token) {
        this.checkout2(termId)
      } else {
        const _that = this
        window.tp.pianoId.show({
          screen: 'register',
          width: window.innerWidth > 720 ? 600 : 375,
          loggedIn(data) {
            _that.$store.dispatch('user/setUser', data.user)
            // window.location.reload()
            _that.checkout2(termId)
          },
        })
      }
    },
    checkout2(termId) {
      const _that = this
      window.tp.push([
        'init',
        () => {
          window.tp.offer.show({
            offerId: 'OF5JVPQYFLE1',
            termId,
            templateId: 'OTXWXSOL0WWS',
            checkoutFlowId: 'CF65KTMVQXXX',
            promoCode: this.promo_code,
            closeOnLogout: true,
            complete: (data) => {
              _that.$store.dispatch('user/checkAccess')
              window.PianoESP &&
                typeof window.PianoESP.handleUserDataPromise === 'function' &&
                window.PianoESP.handleUserDataPromise({
                  email: _that.$store.state.user.email,
                  squads: [2128, 2555, 2554],
                }).then(() => {
                  window.location.reload()
                })
            },
          })
        },
      ])
    },
  },
}
</script>
