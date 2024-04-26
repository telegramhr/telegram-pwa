<template>
  <a
    v-if="show"
    class="full relative darkened-bg birati-stranu-widget"
    @click.prevent="start"
  >
    <div class="container column-full-pad mobile-full-pad flex relative">
      <p
        class="full center-text column-top-pad mobile-top-pad birati-stranu-title"
      >
        {{ title }}
      </p>
      <p class="full center-text birati-stranu-subtitle">
        <span v-if="secondarySubtitle" class="strikethrough faded">{{
          secondarySubtitle
        }}</span
        >{{ subtitle }}
      </p>
      <div class="full center column-vertical-pad mobile-vertical-pad">
        <div class="newbtn huge-newbtn">{{ cta }}</div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'HometopSimple',
  data() {
    return {
      title: 'Posebna akcija',
      secondarySubtitle: '7.99€',
      subtitle: '12.99€ plati više dobij isto',
      cta: 'Pretplatite se',
      show: false,
    }
  },
  mounted() {
    window.addEventListener('piano_header', this.load)
  },
  destroyed() {
    window.removeEventListener('piano_header', this.load)
  },
  methods: {
    start() {
      if (this.termId) {
        this.checkout(this.termId)
      } else {
        this.$router.push('/pretplata')
      }
    },
    load(e) {
      if (e.detail) {
        this.title = e.detail.title
        this.subtitle = e.detail.subtitle
        this.secondarySubtitle = e.detail.secondarySubtitle
        this.cta = e.detail.cta
        this.termId = e.detail.termId
        this.show = true
      }
    },
    checkout(termId) {
      if (this.$store.state.user.token) {
        this.checkout2(termId, -1)
      } else {
        const _that = this
        window.tp.push([
          'init',
          () => {
            window.tp.pianoId.show({
              screen: 'register',
              width: window.innerWidth > 720 ? 600 : 375,
              loggedIn(data) {
                _that.$store.dispatch('user/setUser', data.user)
                _that.checkout2(termId)
              },
            })
          },
        ])
      }
    },
    checkout2(termId) {
      const _that = this
      window.fbq = window.fbq || function () {}
      window.fbq('track', 'InitiateCheckout', {
        content_ids: [termId],
        currency: 'EUR',
        value: this.newPrice,
      })
      window.tp.push([
        'init',
        () => {
          window.tp.offer.show({
            offerId: 'OFFY1ZO333EV',
            termId,
            templateId: 'OTXWXSOL0WWS',
            checkoutFlowId: 'CF65KTMVQXXX',
            closeOnLogout: true,
            complete: (data) => {
              _that.$store.dispatch('user/checkAccess')
              window.fbq('track', 'Purchase', {
                content_ids: data.termId,
                currency: data.chargeCurrency,
                value: data.chargeAmount,
              })
              window.marfeel.cmd.push([
                'compass',
                function (compass) {
                  compass.trackConversion('subscribe')
                },
              ])
              window.fbq('track', 'Subscribe', {
                currency: data.chargeCurrency,
                value: data.chargeAmount,
              })
              window.PianoESP &&
                typeof window.PianoESP.handleUserDataPromise === 'function' &&
                window.PianoESP.handleUserDataPromise({
                  email: _that.$store.state.user.email,
                  squads: [2128, 2555, 2554, 10670, 10671],
                }).then(() => {
                  _that.$router.refresh()
                })
            },
          })
        },
      ])
    },
  },
}
</script>
