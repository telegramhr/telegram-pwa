<template>
  <a
    class="full center relative dark-mode pretplata-bf pretplata-blue"
    @click.prevent="checkout('TMGTX339375P')"
  >
    <div class="container flex relative">
      <img
        src="@/assets/img/tg_visual_2024_05_pretplata.jpg"
        alt="Premijer Andrej Plenković"
        class="absolute-half-img"
      />
      <div
        class="third tablet-two-thirds third-forced-size mobile-side-pad column-full-pad column-top-margin column-bottom-margin flex-responsive flex relative stretch mobile-top-pad pb-topover"
      >
        <p class="full nothtwo">Podržite Telegram i Doru Kršul</p>
        <div class="full mobile-half center pb-stickerbox flex-wrap">
          <div>2 za 1</div>
          <div class="full center-text">Akcija traje do 15.5.</div>
        </div>
        <div class="full mobile-half center flex-wrap pb-combo">
          <div class="nothtwo">99€</div>
          <p>
            <span class="ib">2 godine Premium </span
            ><span class="ib">pretplate bez oglasa</span>
            <span class="ib">za cijenu 1 godine!</span>
          </p>
        </div>
        <!--<div class="full pretplata-benefits">
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            Neograničeno čitanje Telegrama i Telesporta
          </p>
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            Premium iskustvo korištenja bez oglasa
          </p>
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            Živciranje Plenkovića i podrška novinarstvu
          </p>
        </div>-->
        <div class="full center relative">
          <div class="flex newbtn huge-newbtn animate clickable">
            Pretplatite se
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'HometopBlue',
  methods: {
    checkout(termId) {
      if (this.$store.state.user.token) {
        this.checkout2(termId, -1)
      } else {
        const _that = this
        window.tp.pianoId.show({
          screen: 'register',
          width: window.innerWidth > 720 ? 600 : 375,
          loggedIn(data) {
            _that.$store.dispatch('user/setUser', data.user)
            // window.location.reload()
            _that.checkout2(termId, -2)
          },
        })
      }
    },
    checkout2(termId, back) {
      const _that = this
      window.fbq = window.fbq || function () {}
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
              window.marfeel.cmd.push([
                'compass',
                function (compass) {
                  compass.trackConversion('subscribe')
                },
              ])
              window.fbq('track', 'Purchase', {
                content_ids: data.termId,
                currency: data.chargeCurrency,
                value: data.chargeAmount,
              })
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
                  _that.$router.go(back)
                })
            },
          })
        },
      ])
    },
  },
}
</script>
