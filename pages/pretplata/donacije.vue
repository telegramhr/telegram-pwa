<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Poklonite Telegram pretplatu, poklon koji se otvara svaki dan"
      ></theader>
    </div>
    <div class="full flex pretplata-page-content donation-page">
      <div class="full flex">
        <div class="container flex relative sub-point alt-sub-point stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_korupcija.jpg"
              aria-hidden="true"
              class="light-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_korupcija_dark.jpg"
              aria-hidden="true"
              class="dark-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_korupcija_white.jpg"
              aria-hidden="true"
              class="contrast-mode-only"
            />
          </div>
          <div
            class="half mobile-side-pad center flex-responsive column-full-pad"
          >
            <div class="full flex">
              <h3 class="full overtitle">Telegram donacije</h3>
              <h2 class="full">Zajedno možemo <br />više. Puno više.</h2>
              <p>
                Naša otkrića dovela su do uhićenja Gabrijele Žalac, zatvora za
                Franju Lucića i smjene brojnih ministara. Zbog bespoštednog
                istraživanja moćnika, Telegram je na stalnom udaru pritisaka i
                tužbi. No, ne mislimo stati. Uz vašu pomoć, slobodno novinarstvo
                ide dalje.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex">
        <div class="container flex relative">
          <braintree-donation></braintree-donation>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>
<script>
import BraintreeDonation from '../../components/Elements/BraintreeDonation.vue'
export default {
  name: 'Pretplata',
  components: { BraintreeDonation },
  head() {
    return {
      title: 'Telegram donacije - Zajedno možemo više. Puno više.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Zajedno možemo više. Puno više.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Zajedno možemo više. Puno više.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telegram donacije - Zajedno možemo više. Puno više.',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/pretplata_poklon.png',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/donacije',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/donacije',
        },
      ],
    }
  },
}
</script>
