<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Pretplatite se i podržite naše bespoštedno novinarstvo."
      ></theader>
    </div>
    <!-- Above header banner -->
    <div id="pretplata-selector" class="full flex">
      <div class="full flex relative">
        <div
          class="container relative flex mobile-side-pad stretch column-full-pad"
        >
          <h1 class="full center-text">Nažalost, ova akcija je istekla.</h1>
          <p class="full center-text pretplata-tagline">
            Čini se da ste kliknuli na link promocije ili akcije koja više nije
            važeća. Ne brinite, redovno imamo nove ponude! Posjetite Telegram
            kako biste otkrili najnovije popuste i pogodnosti.
          </p>
          <div
            class="full center column-full-pad column-bottom-margin mobile-vertical-pad"
          >
            <app-link to="/" class="newbtn huge-newbtn gigantic-newbtn"
              >Nastavite čitati</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="full flex pretplata-faq">
      <div
        class="container relative flex mobile-side-pad column-full-pad single-article-body"
      >
        <h2 class="full">Često postavljana pitanja</h2>
        <details class="full flex relative">
          <summary class="full relative">Što je pretplata na Telegram?</summary>
          <p>
            Pretplata na Telegram omogućuje Vam, ovisno o paketu, neograničeno
            čitanje Telegrama i Telesporta, ali i brojne druge benefite i
            funkcionalnosti poput surfanja bez oglasa, popust na knjige i
            ekskluzivnih
            <app-link to="/newsletters">newslettera</app-link>.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Zašto postoji pretplata na Telegramu?
          </summary>
          <p>
            Bespoštedno i neovisno novinarstvo, istraživački specijali i velike
            priče nisu jeftini. Svake godine stotine tisuća eura odlaze nam na
            sudske borbe protiv moćnika koji, nakon što smo ih uhvatili u
            nedjelima, pokušavaju takvim pritiskom financijski devastirati
            Telegram. Nerijetko za tužbe i odmazde koriste javni novac, odnosno
            neograničena sredstva institucija na čijem su čelu, a protiv
            neograničenih sredstava nije se lako boriti. Upravo zato odlučili
            smo pitati vas, naše čitatelje, za podršku u ovome što radimo.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Kako da se pretplatim na Telegram?
          </summary>
          <p>
            Vrlo jednostavno, samo odaberite jedan od gore ponuđenih mjesečnih
            ili godišnjih paketa, a sustav će Vas dalje sam voditi kroz vrlo
            kratak i jednostavan proces registracije i kupnje.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">Koliko košta pretplata?</summary>
          <p>
            Cijena pretplate ovisi o paketu koji odaberete. Možete se
            pretplatiti na mjesečnoj ili godišnjoj bazi i to na samo jedan ili
            više naših portala. Kako bismo Vam izašli u susret, pripremili smo
            povoljnu premium opciju mjesečne pretplate, kao i još povoljnije
            godišnje pretplate.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Koja mi se opcija pretplate najviše isplati?
          </summary>
          <p>
            Najisplativija opcija je godišnja premium pretplata: u njoj za samo
            6,50 eura mjesečno (godišnji iznos naplaćuje se jednokratno)
            dobivate godinu dana neograničenog čitanja Telegrama i Telesporta
            bez oglasa, nove funkcionalnosti koje ćemo uvoditi i popust na
            knjigu jednog od naših autora.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">Kako mogu platiti pretplatu?</summary>
          <p>
            Pretplatu možete sigurno platiti svim Maestro, Mastercard, Visa i
            Diners karticama.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Mogu li nekome pokloniti pretplatu?
          </summary>
          <p>
            Dapače, upravo je u tijeku Božićna akcija darivanja. Samo posjetite
            <app-link to="/pretplata/poklon">ovu stranicu</app-link> i pratite
            korake za jedan od najoriginalnijih poklona ovog Božića.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Mogu li čitati Telegram sa svih uređaja jednom kad se pretplatim?
          </summary>
          <p>
            Da, svaki pretplatnik može čitati Telegram na svakom uređaju, bio to
            mobitel, računalo ili tablet.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Mogu li dijeliti svoju pretplatu s drugima?
          </summary>
          <p>
            Ne, dijeljenje pretplate nije dopušteno, a u slučaju sumnje u
            dijeljenje pretplate zadržavamo pravo zatvoriti korisnički račun.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Mi smo tvrtka/škola/knjižnica/fakultet, postoji li opcija grupne
            pretplate?
          </summary>
          <p>
            Za opcije grupne pretplate pravnim osobama javite se na
            <a href="mailto:pretplata@telegram.hr">pretplata@telegram.hr</a>.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Hoću li moći čitati Telegram i ako se ne pretplatim?
          </summary>
          <p>
            Sve naše članke, pa i najbolje kolumne i istraživačke serijale, i
            dalje ćete moći nesmetano i besplatno čitati, ali do određene
            količine mjesečno. Nakon što potrošite svoju količinu besplatnih
            članaka u mjesecu, da bi ste nastavili čitati bit će Vam potrebna
            pretplata.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Mogu li se pretplatiti samo na Telesport?
          </summary>
          <p>
            Naravno, možete se pretplatiti samo na Telegram, samo na Telesport
            ili na oba portala zajedno, kako Vama najbolje odgovara.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Mogu li otkazati pretplatu jednom kad se pretplatim?
          </summary>
          <p>
            Naravno, pretplatu možete samostalno i jednostavno otkazati u bilo
            kojem trenutku kroz korisničko sučelje.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Kako se obnavlja jednom kupljena pretplata?
          </summary>
          <p>
            Sve mjesečne i godišnje pretplate automatski se obnavljaju po svom
            isteku na isti vremenski period kako Vi ne biste morali brinuti o
            tome. Ukoliko želite isključiti automatsku obnovu, to možete
            jednostavno napraviti jednim klikom u korisničkom sučelju.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Imam pretplatu, no i dalje ne mogu čitati tekstove?
          </summary>
          <p>
            Najvjerojatnije niste prijavljeni u svoj korisnički račun. Kada
            posjetite Telegram, u gornjem desnom kutu ekrana nalazi se gumb
            "PRIJAVA", odnosno ikona čovječuljka ako ste na mobilnom uređaju.
            Klikom na gumb otvorit će Vam se prozor u kojemu se možete prijaviti
            sa svojom e-mail adresom i lozinkom koju ste postavili, a
            prepručujemo da ostavite označenom opciju "ostanite prijavljeni"
            kako se ne biste morali opet prijavljivati pri sljedećem čitanju u
            istom internetskom pregledniku. Ukoliko ste se prijavljeni, no i
            dalje ne možete čitati tekstove, javite nam se na
            <a href="mailto:pretplata@telegram.hr">pretplata@telegram.hr</a>
            kako bismo što brže riješili problem.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Ne mogu pronaći odgovor na svoje pitanje.
          </summary>
          <p>
            Javite nam se na
            <a href="mailto:pretplata@telegram.hr">pretplata@telegram.hr</a>
            i odgovorit ćemo vam u najkraćem roku.
          </p>
        </details>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'LjetnaAkcija',
  data() {
    return {
      promo_code: '',
      subscription_package: 'pretplata-special',
    }
  },
  computed: {
    one() {
      return 'TMU7ZSVF7C88'
    },
    two() {
      return 'TMOSMZDQAQFW'
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.promo_code = this.$route.query.promo_code
      window.tp.push([
        'addHandler',
        'checkoutComplete',
        function (conversion) {
          if (conversion.rid === '') {
            this.$store.commit('user/setTerm', true)
          }
        },
      ])
    })
  },
  methods: {
    canLogIn() {
      return this.$store.state.user.exp * 1000 < new Date().getTime()
    },
    checkout(termId, upgrade) {
      this.$piano.start(termId)
    },
  },
  head() {
    return {
      title: 'Telegram.hr Pretplata',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Odaberite jedan od paketa i podržite nas',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Odaberite jedan od paketa i podržite nas',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telegram.hr Pretplata',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2021/01/tg-background.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/ljetna/akcija/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/ljetna-akcija/',
        },
      ],
      script: [
        {
          vmid: 'schema-ld',
          hid: 'schema-ld',
          type: 'application/ld+json',
          json: [
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Telegram.hr Pretplata',
              description: 'Odaberite jedan od paketa i podržite nas',
              image:
                'https://www.telegram.hr/wp-content/uploads/2021/01/tg-background.jpg',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@type': 'Product',
                    name: 'Telegram Mjesečna Pretplata',
                    description: 'Mjesečna pretplata na Telegram.hr',
                    sku: 'TMJHR6Y8K4QA',
                    mpn: 'TMJHR6Y8K4QA',
                    image:
                      'https://www.telegram.hr/wp-content/uploads/2021/01/tg-background.jpg',
                    offers: {
                      '@type': 'Offer',
                      url: 'https://www.telegram.hr/pretplata',
                      priceCurrency: 'EUR',
                      price: 6.49,
                      itemCondition: 'https://schema.org/NewCondition',
                      availability: 'https://schema.org/InStock',
                      seller: this.$store.state.header.publisher,
                    },
                    aggregateRating: {
                      '@type': 'AggregateRating',
                      ratingValue: '4.9',
                      reviewCount: '100',
                    },
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  item: {
                    '@type': 'Product',
                    name: 'Telegram Premium Mjesečna Pretplata',
                    description: 'Mjesečna premium pretplata na Telegram.hr',
                    sku: 'TMY8ORHQG44A',
                    mpn: 'TMY8ORHQG44A',
                    image:
                      'https://www.telegram.hr/wp-content/uploads/2021/01/tg-background.jpg',
                    offers: {
                      '@type': 'Offer',
                      url: 'https://www.telegram.hr/pretplata',
                      priceCurrency: 'EUR',
                      price: 9.16,
                      itemCondition: 'https://schema.org/NewCondition',
                      availability: 'https://schema.org/InStock',
                      seller: this.$store.state.header.publisher,
                    },
                    aggregateRating: {
                      '@type': 'AggregateRating',
                      ratingValue: '4.9',
                      reviewCount: '100',
                    },
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  item: {
                    '@type': 'Product',
                    name: 'Telegram Godišnja Pretplata',
                    description: 'Godišnja pretplata na Telegram.hr',
                    sku: 'TM8RZKGESM1T',
                    mpn: 'TM8RZKGESM1T',
                    image:
                      'https://www.telegram.hr/wp-content/uploads/2021/01/tg-background.jpg',
                    offers: {
                      '@type': 'Offer',
                      url: 'https://www.telegram.hr/pretplata',
                      priceCurrency: 'EUR',
                      price: 62,
                      itemCondition: 'https://schema.org/NewCondition',
                      availability: 'https://schema.org/InStock',
                      seller: this.$store.state.header.publisher,
                    },
                    aggregateRating: {
                      '@type': 'AggregateRating',
                      ratingValue: '4.9',
                      reviewCount: '100',
                    },
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  item: {
                    '@type': 'Product',
                    name: 'Telegram Premium Godišnja Pretplata',
                    description: 'Godišnja premium pretplata na Telegram.hr',
                    sku: 'TMQDTT4IEHY0',
                    mpn: 'TMQDTT4IEHY0',
                    image:
                      'https://www.telegram.hr/wp-content/uploads/2021/01/tg-background.jpg',
                    offers: {
                      '@type': 'Offer',
                      url: 'https://www.telegram.hr/pretplata',
                      priceCurrency: 'EUR',
                      price: 78,
                      itemCondition: 'https://schema.org/NewCondition',
                      availability: 'https://schema.org/InStock',
                      seller: this.$store.state.header.publisher,
                    },
                    aggregateRating: {
                      '@type': 'AggregateRating',
                      ratingValue: '4.9',
                      reviewCount: '100',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>
