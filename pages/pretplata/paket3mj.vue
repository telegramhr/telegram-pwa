<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Pretplatite se i podržite naše bespoštedno novinarstvo."
      ></theader>
    </div>
    <div
      class="full center relative dark-mode pretplata-bf pretplata-blue pretplata-pres"
    >
      <div
        class="container smaller-container column-horizontal-pad mobile-side-pad flex relative"
      >
        <div
          class="full column-vertical-pad flex relative stretch mobile-top-pad"
        >
          <p class="two-thirds flex-responsive nothtwo smaller-nothtwo">
            3 mjeseca ekskluzivnih vijesti uz Telegram – već od 5€ mjesečno!
          </p>
          <div class="half flex-responsive flex relative">
            <p class="full column-top-pad">
              Budite u toku s najvažnijim političkim trenucima.
            </p>
            <div class="full flex relative column-top-pad mobile-top-pad">
              <div
                class="flex newbtn huge-newbtn animate clickable"
                @click="submit"
              >
                Iskoristite ponudu
              </div>
            </div>
          </div>
        </div>
        <img
          src="@/assets/img/pretplata/3month.png"
          alt="3 mjeseca ekskluzivnih vijesti uz Telegram"
          class="absolute-half-img"
        />
      </div>
    </div>
    <div id="pretplata-choices" class="full flex">
      <div
        class="container relative flex pretplata-packs mobile-side-pad column-horizontal-pad smaller-container"
      >
        <div class="full flex center pretplata-packboxes full-width-packs">
          <div class="full center">
            <input
              id="pretplata-month"
              v-model="subscription_type"
              type="radio"
              name="pretplata-month"
              class="hide"
              value="telegram_standard_pretplata_3_mjeseca"
            />
            <label
              for="pretplata-month"
              class="full animate flex-responsive flex relative pretplata-packbox smaller-packbox stretch fix-sticker"
            >
              <div class="best-price-sticker alt-bigger-sticcer animate">
                Popust<br />37%
              </div>
              <div class="smaller-packbox-radio">
                <div class="remp-radio-indicator center"><div></div></div>
              </div>
              <div class="full sub-price bold">
                Standard: 14,99€<span> za tri mjeseca</span>
              </div>
              <div class="full barlow faded">
                neograničeno čitanje Telegrama, specijalni newsletteri i dodatne
                informacije o predsjedničkim izborima, posebni popusti u sklopu
                Telegram kluba
              </div>
            </label>
          </div>
          <div class="full center">
            <input
              id="pretplata-special"
              v-model="subscription_type"
              type="radio"
              name="pretplata-special"
              class="hide"
              value="telegram_premium_pretplata_3_mjeseca"
            />
            <label
              for="pretplata-special"
              class="full animate flex-responsive flex relative pretplata-packbox smaller-packbox stretch fix-sticker"
            >
              <div class="best-price-sticker alt-bigger-sticcer animate">
                Popust<br />37%
              </div>
              <div class="smaller-packbox-radio">
                <div class="remp-radio-indicator center"><div></div></div>
              </div>
              <div class="full sub-price bold">
                Premium: 18,89€<span> za tri mjeseca</span>
              </div>
              <div class="full barlow faded">
                neograničeno čitanje Telegrama i Telesporta bez reklama,
                specijalni newsletteri i dodatne informacije o predsjedničkim
                izborima, posebni popusti u sklopu Telegram kluba
              </div>
            </label>
          </div>
          <client-only>
            <form
              id="payment-form"
              class="full flex column-horizontal-pad column-top-pad mobile-top-pad"
              method="post"
              :action="`/crm/sales-funnel/sales-funnel-frontend/submit?referer=${$store.getters['pretplata/link']}`"
            >
              <input type="hidden" name="allow_redirect" value="1" />
              <input type="hidden" name="funnel_url_key" :value="url_key" />
              <input
                type="hidden"
                name="subscription_type"
                :value="subscription_type"
              />
              <input type="hidden" name="payment_gateway" :value="payment" />
              <input type="hidden" name="price" :value="price" />
              <input type="hidden" name="auth" value="1" />
              <div class="full center" @click="submit">
                <div class="newbtn clickable huge-newbtn animate">
                  Kupite pretplatu
                  <font-awesome-icon
                    :icon="['fab', 'cc-visa']"
                  ></font-awesome-icon>
                  <font-awesome-icon
                    :icon="['fab', 'cc-mastercard']"
                  ></font-awesome-icon>
                  <font-awesome-icon
                    :icon="['fab', 'cc-diners-club']"
                  ></font-awesome-icon>
                </div>
              </div>
              <p
                v-if="show_msg"
                class="full remp-mini-text center-text red-text"
              >
                {{ show_msg }}
              </p>
            </form>
          </client-only>
          <div
            class="full center-text barlow faded column-mini-top-pad mobile-bottom-pad"
          >
            Nakon tri mjeseca, pretplata se nastavlja obnavljati kvartalno po
            istoj cijeni
          </div>
        </div>
      </div>
    </div>
    <iframe id="TrustPayFrame" :src="iframeUrl"></iframe>
    <div class="full flex">
      <div class="container relative flex column-full-pad smaller-container">
        <div
          class="full nothtwo pretplata-subtitle mobile-side-pad mobile-top-pad"
        >
          Testimonijali
        </div>
        <div class="full column-vertical-pad mobile-full-pad flex">
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
          >
            <img
              src="@/assets/img/extras/pretplatnici/emil.jpg"
              alt="Emil Tedeschi - pretplatnik i poduzetnik"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
          >
            <img
              src="@/assets/img/extras/pretplatnici/maja.jpg"
              alt="Maja Sever - pretplatnica i novinarka"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
          >
            <img
              src="@/assets/img/extras/pretplatnici/rade.jpg"
              alt="Rade Šerbedžija - pretplatnik i umjetnik"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
          >
            <img
              src="@/assets/img/extras/pretplatnici/ivana.jpg"
              alt="Ivana Gadžić - pretplatnica i predsjednica Zagrebačke burze"
            />
          </div>
        </div>
        <div class="full center relative">
          <a
            href="#pretplata-choices"
            class="newbtn huge-newbtn clickable animate"
            >Iskoristite ponudu</a
          >
        </div>
      </div>
    </div>
    <div class="full flex pretplata-faq">
      <div
        class="container relative flex mobile-side-pad mobile-top-pad column-full-pad smaller-container"
      >
        <div class="full nothtwo pretplata-subtitle mobile-top-pad">
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
    <tfooter></tfooter>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'LjetnaAkcija',
  data() {
    return {
      show_msg: '',
      subscription_type: 'telegram_standard_pretplata_3_mjeseca',
      payment: 'trustpay_recurrent',
      showPassword: false,
      loading: false,
      url_key: 'paket3mj',
      iframeUrl: '',
    }
  },
  computed: {
    price() {
      if (this.subscription_type === 'telegram_standard_pretplata_3_mjeseca') {
        return 14.99
      } else if (
        this.subscription_type === 'telegram_premium_pretplata_3_mjeseca'
      ) {
        return 18.89
      }
      return 0
    },
  },
  watch: {
    email: _.debounce(function (value) {
      const _this = this
      const formData = new FormData()
      formData.append('email', value)
      this.$axios
        .$post('/crm/api/v2/users/email', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then((data) => {
          if (data.status && data.status === 'taken') {
            _this.showPassword = true
          } else if (data.status === 'error') {
            if (data.code === 'email_missing') {
              return
            }
            _this.show_msg = 'Prijavite se kako biste dovršili kupnju.'
          } else {
            _this.showPassword = false
          }
        })
        .catch(() => {
          _this.showPassword = false
        })
    }, 1000),
  },
  methods: {
    canLogIn() {
      return !this.$store.state.user.id
    },
    login() {
      this.$store.dispatch('user/login', {
        shouldReload: false,
        callback: this.submit,
      })
    },
    submit() {
      if (this.canLogIn()) {
        this.login()
        return
      }
      this.loading = true
      const form = document.getElementById('payment-form')
      const formData = new FormData(form)
      const actionUrl = form.action
      fetch(actionUrl, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })
        .then((data) => {
          return response.json()
        })
        .then((data) => {
          if (data.status === 'ok') {
            const trustpayIframe = document.getElementById('TrustPayFrame')
            if (trustpayIframe) {
              trustpayIframe.src = data.url + '&Localization=hr'
            }
            // Open TrustPay Popup
            /* global openPopup */
            openPopup()
          } else {
            this.show_msg = 'Došlo je do greške s plaćanjem.'
          }
        })
        .catch(() => {
          this.show_msg = 'Došlo je do greške prilikom slanja podataka.'
        })
    },
  },
  head() {
    return {
      title:
        '3 mjeseca ekskluzivnih vijesti uz Telegram – već od 5 EUR mjesečno!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Budite u toku s najvažnijim političkim trenucima.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Budite u toku s najvažnijim političkim trenucima.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content:
            '3 mjeseca ekskluzivnih vijesti uz Telegram – već od 5 EUR mjesečno!',
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
          content: 'https://www.telegram.hr/pretplata/paket3mj/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/paket3mj/',
        },
      ],
      script: [
        {
          hid: 'jquery',
          src: 'https://code.jquery.com/jquery-3.7.1.min.js',
        },
        {
          hid: 'trustpay-popup',
          src: 'https://mapi.trustpay.eu/mapi5/Scripts/TrustPay/popup.js',
        },
      ],
    }
  },
}
</script>
