<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Telegram Premium. Doživotni pristup za samo 399 EUR"
      ></theader>
    </div>
    <div class="full flex relative pretplata-page">
      <div class="container relative flex mobile-side-pad stretch">
        <div
          class="half center flex-responsive relative column-full-pad m-order-2"
        >
          <div class="full flex relative">
            <h1 class="full center-text">
              Samo danas na Telegramu – doživotna pretplata za samo 399 €!
            </h1>
            <p class="full center-text pretplata-tagline">
              Iskoristite ovu ekskluzivnu priliku i osigurajte neograničen
              pristup zauvijek.
            </p>
            <div class="full center column-vertical-pad mobile-vertical-pad">
              <div
                class="newbtn gigantic-newbtn animate green-newbtn clickable"
              >
                Kupite za 399€. Zauvijek
              </div>
            </div>
          </div>
        </div>
        <div
          class="half center flex-responsive relative column-full-pad m-order-1"
        >
          <img
            src="@/assets/img/tg_mockup_lifetime.png"
            alt="Mockup Telegram portala s tekstom LIFETIME u pozadini"
          />
        </div>
      </div>
    </div>
    <div class="full flex darkened-bg relative pretplata-page">
      <div
        class="container relative flex mobile-side-pad stretch column-full-pad smallest-container mobile-top-pad"
      >
        <div class="full flex relative align-children-end">
          <p class="full center-text column-vertical-pad barlow faded">
            Ponuda istječe za:
          </p>
          <div class="full center countdown-element relative mobile-top-pad">
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-day-2" class="countdown-tile">0</div>
                <div id="cd-day-3" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">dana</div>
            </div>
            <div class="countdown-day-divider center">:</div>
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-hour-1" class="countdown-tile">0</div>
                <div id="cd-hour-2" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">sati</div>
            </div>
            <div class="countdown-day-divider center">:</div>
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-min-1" class="countdown-tile">0</div>
                <div id="cd-min-2" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">minuta</div>
            </div>
            <div class="countdown-day-divider center">:</div>
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-sec-1" class="countdown-tile">0</div>
                <div id="cd-sec-2" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">sekundi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full flex relative pretplata-page">
      <div
        class="container smaller-container relative flex mobile-side-pad stretch column-full-pad"
      >
        <div class="full flex relative column-top-pad mobile-top-pad">
          <h2 class="full center-text">Zajedno gradimo ovu zajednicu</h2>
          <p class="full center-text pretplata-tagline">
            Vi ste razlog zašto ovo radimo. Hvala vam na svakom shareu, poruci i
            povjerenju. Ova ponuda je način da vam zahvalimo i omogućimo da nas
            podržite — jednom, zauvijek.
          </p>
          <div class="full center column-top-pad mobile-top-pad">
            <div class="full pretplata-benefits" style="max-width: 20rem">
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                neograničeno čitanje Telegrama doživotno
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                neograničeno čitanje Telesporta doživotno
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                čitanje bez oglasa
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                posebni popusti I pogodnosti unutar Telegram kluba
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                specijalni newsletter
              </p>
            </div>
          </div>
          <p class="full center-text pretplata-tagline">
            Zauvijek ćemo se boriti protiv kriminala i korupcije ali ova prilika
            se neće ponoviti
          </p>
          <div class="full center column-top-pad mobile-top-pad">
            <div
              class="newbtn gigantic-newbtn animate green-newbtn clickable center-text"
            >
              Kupite za 399€. Zauvijek
            </div>
          </div>
          <p
            class="full remp-mini-text column-mini-top-pad column-bottom-pad center-text faded"
          >
            Ponuda vrijedi još samo danas — iskoristite je dok traje
          </p>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Dozivotna',
  data() {
    return {
      counter: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.createCounter()
    })
  },
  destroyed() {
    this.counter = null
  },
  methods: {
    createCounter() {
      // Countdown
      const countDownDate = new Date('May 07, 2025 23:59:59').getTime()
      this.counter = setInterval(function () {
        const now = new Date().getTime()
        const distance = countDownDate - now

        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        const day2 = Math.floor((days % 100) / 10)
        const day3 = Math.floor(days % 10)

        const hour1 = Math.floor(hours / 10)
        const hour2 = Math.floor(hours % 10)

        const min1 = Math.floor(minutes / 10)
        const min2 = Math.floor(minutes % 10)

        const sec1 = Math.floor(seconds / 10)
        const sec2 = Math.floor(seconds % 10)

        document.getElementById('cd-day-2').innerHTML = day2
        document.getElementById('cd-day-3').innerHTML = day3

        document.getElementById('cd-hour-1').innerHTML = hour1
        document.getElementById('cd-hour-2').innerHTML = hour2

        document.getElementById('cd-min-1').innerHTML = min1
        document.getElementById('cd-min-2').innerHTML = min2

        document.getElementById('cd-sec-1').innerHTML = sec1
        document.getElementById('cd-sec-2').innerHTML = sec2
        if (distance < 0) {
          clearInterval(this.counter)
        }
      }, 1000)
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/pretplata/dozivotna',
      },
    ]
    return {
      title: 'Doživotna pretplata',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '10 godina Telegrama',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '10 godina Telegrama',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '10 godina Telegrama',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content:
            'https://www.telegram.hr/pretplata/10-godina-telegrama-ekskluzivna-ponuda',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/img/Telegram_10_godina_feed_7-2.jpg',
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '1383786971938581',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@TelegramHR',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow',
        },
      ],
      link,
    }
  },
}
</script>
