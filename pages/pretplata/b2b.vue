<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Telegram Premium pretplata za poslovne korisnike"
      ></theader>
    </div>
    <!-- Above header banner -->
    <div id="pretplata-selector" class="full flex">
      <div class="full flex relative">
        <div
          class="container smaller-container relative flex mobile-side-pad stretch column-full-pad"
        >
          <h1 class="full center-text">
            Telegram Premium pretplata za poslovne korisnike
          </h1>
          <p class="full center-text pretplata-tagline">
            Ne propustite priliku unaprijediti svoje poslovanje uz Telegram za
            čitav tim
          </p>
        </div>
      </div>
    </div>
    <div class="full flex">
      <div
        class="container single-article-body column-full-pad relative center mobile-side-pad"
      >
        <div class="half animate flex-responsive flex relative">
          <p class="full column-mini-bottom-pad bold column-top-margin">
            Odaberite veličinu svog tima koji će imati pristup pretplati:
          </p>
          <select
            id="velicina-tima"
            v-model="teamSize"
            class="full remp-select"
            name="velicina-tima"
          >
            <option value="0" selected disabled>Veličina tima</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4-5</option>
            <option value="5">6-7</option>
            <option value="6">8-10</option>
            <option value="7">11-15</option>
            <option value="8">16-20</option>
            <option value="9">21-30</option>
            <option value="10">31-40</option>
            <option value="11">41-50</option>
          </select>
          <div v-if="teamSize" class="full flex relative">
            <div class="full flex pretplata-packbox chill-packbox relative">
              <div
                v-if="discount > 0"
                class="best-price-sticker alt-bigger-sticcer animate"
              >
                Uštedite<br />{{ discount }}%
              </div>
              <div class="full sub-price bold">{{ price }}€ za 12 mjeseci</div>
              <div class="full remp-special-note column-mini-top-pad">
                Cijena je izrađena s PDV-om.
              </div>
            </div>
          </div>
          <div
            class="nothtwo full pretplata-subtitle column-top-pad mobile-top-pad"
          >
            Prednosti za poslovne korisnike
          </div>
          <div class="full pretplata-benefits bigger-pretplata-benefits">
            <p class="full animate">
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              Pristup istraživačkom novinarstvu i ekskluzivnim člancima
            </p>
            <p class="full animate">
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              Dubinske analize i uvide u aktualne poslovne i društvene teme
            </p>
            <p class="full animate">
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              Bez oglasa za nesmetano korisničko iskustvo
            </p>
            <p class="full animate">
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              Neograničen pristup Telegramu i Telesportu
            </p>
            <p class="full animate">
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              Dostupnost cijelog sadržaja 24/7 za vaše djelatnike
            </p>
          </div>
          <div class="full center column-bottom-pad mobile-bottom-pad">
            <div
              v-if="!expandForm && teamSize"
              class="full newbtn huge-newbtn center-text clickable"
              @click="expandForm = true"
            >
              Zatražite ponudu
            </div>
          </div>
          <form
            v-if="expandForm && !submitted"
            class="full flex relative column-vertical-pad column-bottom-margin"
            @submit.prevent="submit"
          >
            <p class="full bold column-top-margin">
              Ispunite informacije o svojem poduzeću:
            </p>
            <div class="full remp-special-note">
              Ime vašeg poslovnog subjekta:
            </div>
            <input
              id="subjekt-ime"
              v-model="company"
              type="text"
              class="full remp-new-input"
              placeholder="Ime subjekta"
              required
              oninvalid="this.setCustomValidity('Polje je obavezno')"
              oninput="this.setCustomValidity('')"
            />
            <div class="full remp-special-note column-mini-top-pad">
              Adresa subjekta:
            </div>
            <input
              id="subjekt-adresa"
              v-model="address"
              type="text"
              class="full remp-new-input"
              placeholder="Adresa"
              required
              oninvalid="this.setCustomValidity('Polje je obavezno')"
              oninput="this.setCustomValidity('')"
            />
            <div class="full remp-special-note column-mini-top-pad">
              OIB subjekta:
            </div>
            <input
              id="subjekt-oib"
              v-model="oib"
              type="text"
              class="full remp-new-input"
              placeholder="OIB"
              required
              pattern="[0-9]{11}"
              oninvalid="this.setCustomValidity('Polje je obavezno i samo brojke')"
              oninput="this.setCustomValidity('')"
            />
            <div class="full remp-special-note column-mini-top-pad">
              Veličina tima:
            </div>
            <select
              id="velicina-tima-2"
              v-model="teamSize"
              class="full remp-select"
              name="velicina-tima-2"
            >
              <option value="0" selected disabled>Odaberite</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4-5</option>
              <option value="5">6-7</option>
              <option value="6">8-10</option>
              <option value="7">11-15</option>
              <option value="8">16-20</option>
              <option value="9">21-30</option>
              <option value="10">31-40</option>
              <option value="11">41-50</option>
            </select>
            <div class="full remp-special-note column-mini-top-pad">
              E-mail kontakt:
            </div>
            <input
              id="subjekt-email"
              v-model="email"
              type="email"
              class="full remp-new-input"
              placeholder="E-mail"
              required
              oninvalid="this.setCustomValidity('Polje je obavezno')"
              oninput="this.setCustomValidity('')"
            />
            <div class="full remp-special-note column-mini-top-pad">
              Telefonski kontakt:
            </div>
            <input
              id="subjekt-email"
              v-model="phone"
              type="text"
              class="full remp-new-input"
              placeholder="Telefonski broj"
              required
              pattern="[0-9]+"
              oninvalid="this.setCustomValidity('Polje je obavezno i samo brojke')"
              oninput="this.setCustomValidity('')"
            />
            <div class="full flex relative mobile-top-pad column-top-pad">
              <button
                type="submit"
                class="full newbtn huge-newbtn center-text clickable"
              >
                Pošalji upit za ponudu
              </button>
            </div>
          </form>
          <div
            v-if="submitted"
            class="full flex relative column-vertical-pad column-bottom-margin center"
          >
            <p>Hvala vam!</p>
            <p>Vaš upit je uspješno proslijeđen! Javit ćemo vam se povratno.</p>
            <p>
              U slučaju dodatnih pitanja stojimo na raspolaganju putem e-mail
              adrese pretplata@telegram.hr.
            </p>
            <p>Vaš Telegram!</p>
          </div>
          <div
            class="full flex relative pretplata-faq column-top-pad mobile-top-pad hide"
          >
            <div
              class="nothtwo full pretplata-subtitle column-top-pad mobile-top-pad"
            >
              Često postavljana pitanja
            </div>
            <details class="full flex relative">
              <summary class="full relative">
                Što je pretplata na Telegram?
              </summary>
              <p>
                Pretplata na Telegram omogućuje Vam, ovisno o paketu,
                neograničeno čitanje Telegrama i Telesporta, ali i brojne druge
                benefite i funkcionalnosti poput surfanja bez oglasa, popust na
                knjige i ekskluzivnih
                <app-link to="/newsletters">newslettera</app-link>.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Zašto postoji pretplata na Telegramu?
              </summary>
              <p>
                Bespoštedno i neovisno novinarstvo, istraživački specijali i
                velike priče nisu jeftini. Svake godine stotine tisuća eura
                odlaze nam na sudske borbe protiv moćnika koji, nakon što smo ih
                uhvatili u nedjelima, pokušavaju takvim pritiskom financijski
                devastirati Telegram. Nerijetko za tužbe i odmazde koriste javni
                novac, odnosno neograničena sredstva institucija na čijem su
                čelu, a protiv neograničenih sredstava nije se lako boriti.
                Upravo zato odlučili smo pitati vas, naše čitatelje, za podršku
                u ovome što radimo.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Kako da se pretplatim na Telegram?
              </summary>
              <p>
                Vrlo jednostavno, samo odaberite jedan od gore ponuđenih
                mjesečnih ili godišnjih paketa, a sustav će Vas dalje sam voditi
                kroz vrlo kratak i jednostavan proces registracije i kupnje.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">Koliko košta pretplata?</summary>
              <p>
                Cijena pretplate ovisi o paketu koji odaberete. Možete se
                pretplatiti na mjesečnoj ili godišnjoj bazi i to na samo jedan
                ili više naših portala.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Koja mi se opcija pretplate najviše isplati?
              </summary>
              <p>
                Najisplativija opcija je godišnja premium pretplata: u njoj za
                samo 8,25 eura mjesečno (godišnji iznos naplaćuje se
                jednokratno) dobivate godinu dana neograničenog čitanja
                Telegrama i Telesporta bez oglasa, nove funkcionalnosti koje
                ćemo uvoditi i popust na knjigu jednog od naših autora.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Kako mogu platiti pretplatu?
              </summary>
              <p>
                Pretplatu možete sigurno platiti svim Maestro, Mastercard, Visa
                i Diners karticama.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Mogu li nekome pokloniti pretplatu?
              </summary>
              <p>
                Naravno, na
                <app-link to="/pretplata/poklon">ovoj stranici</app-link> možete
                svojim najmilijima pokloniti punu godinu čitanja
                najkvalitetnijih Telegram članaka.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Mogu li čitati Telegram sa svih uređaja jednom kad se
                pretplatim?
              </summary>
              <p>
                Da, svaki pretplatnik može čitati Telegram na svakom uređaju,
                bio to mobitel, računalo ili tablet.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Mogu li dijeliti svoju pretplatu s drugima?
              </summary>
              <p>
                Ne, dijeljenje pretplate nije dopušteno, a u slučaju sumnje u
                dijeljenje pretplate zadržavamo pravo zatvoriti korisnički
                račun.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Mi smo tvrtka/škola/knjižnica/fakultet, postoji li opcija grupne
                pretplate?
              </summary>
              <p>
                Za opcije grupne pretplate pravnim osobama javite se na
                <a href="mailto:pretplata@telegram.hr">pretplata@telegram.hr</a
                >.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Hoću li moći čitati Telegram i ako se ne pretplatim?
              </summary>
              <p>
                Sve naše članke, pa i najbolje kolumne i istraživačke serijale,
                i dalje ćete moći nesmetano i besplatno čitati, ali do određene
                količine mjesečno. Nakon što potrošite svoju količinu besplatnih
                članaka u mjesecu, da bi ste nastavili čitati bit će Vam
                potrebna pretplata.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Mogu li se pretplatiti samo na Telesport?
              </summary>
              <p>
                Naravno, možete se pretplatiti samo na Telegram, samo na
                Telesport ili na oba portala zajedno, kako Vama najbolje
                odgovara.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Mogu li otkazati pretplatu jednom kad se pretplatim?
              </summary>
              <p>
                Naravno, pretplatu možete samostalno i jednostavno otkazati u
                bilo kojem trenutku kroz korisničko sučelje.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Kako se obnavlja jednom kupljena pretplata?
              </summary>
              <p>
                Sve mjesečne i godišnje pretplate automatski se obnavljaju po
                svom isteku na isti vremenski period kako Vi ne biste morali
                brinuti o tome. Ukoliko želite isključiti automatsku obnovu, to
                možete jednostavno napraviti jednim klikom u korisničkom
                sučelju.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Imam pretplatu, no i dalje ne mogu čitati tekstove?
              </summary>
              <p>
                Najvjerojatnije niste prijavljeni u svoj korisnički račun. Kada
                posjetite Telegram, u gornjem desnom kutu ekrana nalazi se gumb
                "PRIJAVA", odnosno ikona čovječuljka ako ste na mobilnom
                uređaju. Klikom na gumb otvorit će Vam se prozor u kojemu se
                možete prijaviti sa svojom e-mail adresom i lozinkom koju ste
                postavili, a prepručujemo da ostavite označenom opciju "ostanite
                prijavljeni" kako se ne biste morali opet prijavljivati pri
                sljedećem čitanju u istom internetskom pregledniku. Ukoliko ste
                se prijavljeni, no i dalje ne možete čitati tekstove, javite nam
                se na
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
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'B2BPretplata',
  data() {
    return {
      teamSize: 0,
      expandForm: false,
      email: '',
      company: '',
      address: '',
      oib: '',
      phone: '',
      submitted: false,
    }
  },
  computed: {
    discount() {
      switch (parseInt(this.teamSize)) {
        case 1:
          return 0
        case 2:
          return 6
        case 3:
          return 10
        case 4:
          return 12
        case 5:
          return 15
        case 6:
          return 20
        case 7:
          return 25
        case 8:
          return 25
        case 9:
          return 30
        case 10:
          return 35
        case 11:
          return 40
        default:
          return 0
      }
    },
    price() {
      switch (parseInt(this.teamSize)) {
        case 1:
          return 99
        case 2:
          return 186
        case 3:
          return 267
        case 4:
          return 392
        case 5:
          return 547
        case 6:
          return 713
        case 7:
          return 999
        case 8:
          return 1337
        case 9:
          return 1767
        case 10:
          return 2284
        case 11:
          return 2702
        default:
          return 99
      }
    },
    label() {
      switch (parseInt(this.teamSize)) {
        case 1:
          return '1-član'
        case 2:
          return '2-člana'
        case 3:
          return '3-člana'
        case 4:
          return '4-5 članova'
        case 5:
          return '6-7 članova'
        case 6:
          return '8-10 članova'
        case 7:
          return '11-15 članova'
        case 8:
          return '16-20 članova'
        case 9:
          return '21-30 članova'
        case 10:
          return '31-40 članova'
        case 11:
          return '41-50 članova'
        default:
          return '1-član'
      }
    },
  },
  methods: {
    submit() {
      if (
        !this.email ||
        !this.company ||
        !this.address ||
        !this.oib ||
        !this.phone
      ) {
        return
      }
      this.$axios
        .$post('/pretplate/api/b2b', {
          email: this.email,
          company: this.company,
          address: this.address,
          oib: this.oib,
          phone: this.phone,
          teamSize: this.label,
        })
        .then(() => {
          this.submitted = true
        })
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
          content: 'https://www.telegram.hr/pretplata/b2b',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/b2b',
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
