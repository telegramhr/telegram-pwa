@ -1,427 +0,0 @@
<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red dark-mode">
      <theader
        headline="Pretplatite se i podržite naše bespoštedno novinarstvo."
      ></theader>
    </div>
    <div
      class="full center relative dark-mode pretplata-bf column-full-pad mobile-full-pad"
    >
      <img
        src="@/assets/img/tg_black_friday_bg.jpg"
        alt="Kolaž naslovnih fotografija raznih istraživačkih specijala Telegrama"
        class="img-as-bg"
      />
      <div
        class="container smallest-container flex relative column-vertical-pad mobile-side-pad"
      >
        <h1 class="full center-text hide">Black Friday na Telegramu</h1>
        <div
          class="full center relative mobile-bottom-pad column-bottom-pad column-top-pad"
        >
          <img
            src="@/assets/img/tg_visual_bf_logo.png"
            alt="Logo Black Friday akcije na Telegramu: 2 za 1"
            class="two-thirds flex-responsive"
          />
        </div>
        <div class="full nothtwo center-text">
          <span class="ib"
            >Nažalost, Black Friday ponuda je istekla. No, za vas smo dostupni
            putem e mail adrese: pretplata@telegram.hr. Vaš Telegram</span
          >
        </div>
      </div>
    </div>
    <div class="full flex pretplata-faq">
      <div
        class="container relative flex mobile-side-pad column-full-pad single-article-body"
      >
        <div class="nothtwo full pretplata-subtitle">
          Često postavljana pitanja
        </div>
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
    <div class="full flex">
      <div
        class="container relative flex mobile-side-pad column-full-pad single-article-body"
      >
        <div class="full darkened-bg column-full-pad mobile-full-pad">
          <div class="nothtwo full center-text pretplata-subtitle">
            Pretplati se sada i iskoristite 2 za 1 ponudu!
          </div>
          <div class="full center">
            <div
              class="flex newbtn huge-newbtn animate clickable"
              @click="checkout('TMH4A5EB08L8')"
            >
              Iskoristite ponudu!
            </div>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      reloadInterval: null,
    }
  },
  computed: {
    hasPremium() {
      return this.$store.getters['user/hasPremium']
    },
    canLogIn() {
      return this.$store.getters['user/canLogIn']
    },
    jsonld() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Website',
        url: 'https://www.telegram.hr',
        name: 'Telegram.hr',
        headline: 'Telegram.hr',
        description: 'Dvije godine premium pretplate za cijenu jedne! ',
        publisher: this.$store.state.header.publisher,
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: 'https://www.telegram.hr/search/{search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        ],
      }
    },
  },
  methods: {
    checkout(termId) {
      // this.$piano.start(termId)
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/pretplata/black-friday/',
      },
    ]
    return {
      title: 'Dvije godine premium pretplate za cijenu jedne! ',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Black Friday na Telegramu: 2 za 1',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Black Friday na Telegramu: 2 za 1',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2023/11/tg-naslovna-2023-11-17-bf.jpg',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Dvije godine premium pretplate za cijenu jedne! ',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/black-friday/',
        },
      ],
      link,
    }
  },
}
</script>
