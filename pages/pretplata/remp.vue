<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article remp-pretplata"
  >
    <div class="full flex tg-red">
      <theader
        headline="Pretplatite se i podržite naše bespoštedno novinarstvo."
      ></theader>
    </div>
    <div class="full flex">
      <div class="full flex relative">
        <div class="full flex">
          <div
            class="container relative flex pretplata-packs mobile-side-pad column-horizontal-pad"
          >
            <p class="full bold remp-subtitle faded">1) Odaberite pretplatu</p>
            <div class="full flex center pretplata-packboxes remp-halfpad">
              <div
                class="half flex-responsive flex relative stretch mobile-bottom-pad"
              >
                <input
                  id="pretplata-standard"
                  v-model="pack"
                  type="radio"
                  value="pretplata-standard"
                  name="pretplata-paket"
                  class="hide"
                />
                <label
                  for="pretplata-standard"
                  class="full flex relative pretplata-packbox animate clickable"
                >
                  <div class="full flex overtitle-parent">
                    <div class="noththree overtitle">Standard</div>
                  </div>
                  <div class="full sub-price bold">6,49€</div>
                  <div class="nothfour full center-text undertitle">
                    Mjesečno
                  </div>
                  <div class="full pretplata-benefits">
                    <p class="full animate">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      neograničeno čitanje Telegrama
                    </p>
                    <p class="full animate">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      posebni popusti i pogodnosti
                    </p>
                    <p class="full animate">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      specijalni newsletteri
                    </p>
                    <p class="full animate">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      verificirani profil u komentarima
                    </p>
                    <p class="full animate">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      surfanje s manje oglasa
                    </p>
                  </div>
                  <div class="full center btn-parent">
                    <div class="btn animate">
                      <span class="input-reverse">Odaberi</span
                      ><span class="input-expand">Odabrano</span>
                    </div>
                  </div>
                </label>
              </div>
              <div
                class="half flex-responsive flex relative stretch mobile-bottom-pad"
              >
                <input
                  id="pretplata-premium"
                  v-model="pack"
                  type="radio"
                  name="pretplata-paket"
                  class="hide"
                  value="pretplata-premium"
                />
                <label
                  for="pretplata-premium"
                  class="full flex relative pretplata-packbox animate clickable"
                >
                  <div class="full flex overtitle-parent">
                    <div class="noththree overtitle">Premium (bez oglasa)</div>
                  </div>
                  <div class="full sub-price bold">9,10€</div>
                  <div class="nothfour full center-text undertitle">
                    Mjesečno
                  </div>
                  <div class="full pretplata-benefits">
                    <p class="full animate">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      neograničeno čitanje Telegrama
                    </p>
                    <p class="full animate">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      neograničeno čitanje Telesporta
                    </p>
                    <p class="full animate">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      posebni popusti i pogodnosti
                    </p>
                    <p class="full animate">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      specijalni newsletteri
                    </p>
                    <p class="full animate">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      verificirani profil u komentarima
                    </p>
                    <p class="full animate">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      surfanje bez oglasa
                    </p>
                  </div>
                  <div class="full center btn-parent">
                    <div class="btn animate">
                      <span class="input-reverse">Odaberi</span
                      ><span class="input-expand">Odabrano</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="full flex relative remp-halfpad pretplata-packboxes">
              <div class="half flex flex-responsive remp-miniboxes">
                <p class="full remp-subtitle bold faded">
                  2) Odaberite termin plaćanja
                </p>
                <div class="full relative flex">
                  <input
                    id="pretplata-mjesecno"
                    v-model="term"
                    type="radio"
                    name="pretplata-termin"
                    class="hide"
                    value="pretplata-mjesecno"
                  />
                  <label
                    for="pretplata-mjesecno"
                    class="full flex relative remp-minibox animate clickable"
                  >
                    <div class="remp-radio-indicator center"><div></div></div>
                    <div class="full">Mjesečno</div>
                    <div class="full remp-special-note">
                      {{ interimMonthPrice }}€/mj, možete otkazati kad god
                    </div>
                  </label>
                </div>
                <div class="full relative flex">
                  <input
                    id="pretplata-godisnje"
                    v-model="term"
                    type="radio"
                    name="pretplata-termin"
                    class="hide"
                    value="pretplata-godisnje"
                  />
                  <label
                    for="pretplata-godisnje"
                    class="full center relative remp-minibox animate clickable"
                  >
                    <div class="remp-radio-indicator center"><div></div></div>
                    <div class="full">
                      Godišnje <span class="highlight-text">20% jeftinije</span>
                    </div>
                    <div class="full remp-special-note">
                      {{ interimYearPrice }}€ za godinu dana unaprijed
                    </div>
                  </label>
                </div>
              </div>
              <div class="half flex flex-responsive remp-miniboxes">
                <div class="full relative flex">
                  <p class="full bold remp-subtitle faded">
                    3) Odaberite način plaćanja
                  </p>
                  <input
                    id="pretplata-kartica"
                    v-model="payment"
                    type="radio"
                    name="pretplata-placanje"
                    class="hide"
                    value="pretplata-kartica"
                  />
                  <label
                    for="pretplata-kartica"
                    class="full flex relative remp-minibox animate clickable"
                  >
                    <div class="remp-radio-indicator center"><div></div></div>
                    <div>Kartica</div>
                    <div class="flex remp-icon-list">
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
                    <div class="full remp-special-note">
                      Visa, Mastercard ili Diners
                    </div>
                  </label>
                </div>
                <div class="full relative flex">
                  <input
                    id="pretplata-uplata"
                    v-model="payment"
                    type="radio"
                    name="pretplata-placanje"
                    class="hide"
                    value="pretplata-uplata"
                  />
                  <label
                    for="pretplata-uplata"
                    class="full flex relative remp-minibox animate clickable"
                  >
                    <div class="remp-radio-indicator center"><div></div></div>
                    <div class="full">Bankovna uplata</div>
                    <div class="full remp-special-note">
                      Izdat ćemo vam uplatnicu
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <p class="full bold remp-subtitle faded">4) Unesite podatke</p>
            <div class="full flex relative remp-halfpad">
              <div class="half flex flex-responsive remp-miniboxes">
                <input
                  id="pretplata-email"
                  type="text"
                  class="full remp-new-input"
                  placeholder="Upišite email"
                />
                <p class="full remp-mini-text center-text faded">ili</p>
                <div class="full flex relative">
                  <div class="half flex column-mini-right-pad">
                    <div class="full center remp-social-logbtn animate">
                      <font-awesome-icon
                        :icon="['fab', 'google']"
                      ></font-awesome-icon>
                      Google
                    </div>
                  </div>
                  <div class="half flex column-mini-left-pad">
                    <div class="full center remp-social-logbtn animate">
                      <font-awesome-icon
                        :icon="['fab', 'facebook-f']"
                      ></font-awesome-icon>
                      Facebook
                    </div>
                  </div>
                  <p class="full remp-mini-text center-text faded">
                    Privremeno ćemo vas preusmjeriti na stranicu odabranog
                    davatelja usluga kako bi povezali račune.
                  </p>
                </div>
                <div
                  class="full flex column-top-pad mobile-bottom-pad mobile-top-pad"
                >
                  <input id="terms" type="checkbox" class="cbx" />
                  <label for="terms" class="check flex full">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                    <span
                      >Prihvaćam
                      <a
                        target="_blank"
                        href="https://www.telegram.hr/stranica/uvjeti-koristenja/"
                        class="highlight-text"
                        >uvjete korištenja</a
                      ></span
                    >
                  </label>
                </div>
              </div>
              <div class="half flex flex-responsive remp-miniboxes">
                <div
                  v-if="payment === 'pretplata-kartica'"
                  id="pretplata-kartica-broj"
                  class="full flex relative"
                >
                  <input
                    type="text"
                    class="full remp-new-input"
                    placeholder="Upišite broj kartice"
                  />
                  <div class="full flex column-mini-top-pad">
                    <input
                      id="pretplata-kartica-security"
                      type="text"
                      class="full remp-new-input"
                      placeholder="Upišite sigurnosni kod"
                    />
                    <div class="full flex column-mini-top-pad">
                      <div class="half flex column-mini-right-pad">
                        <select
                          id="card-month"
                          class="full remp-select"
                          name="card-month"
                        >
                          <option selected disabled>Mjesec isteka</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </div>
                      <div class="half flex column-mini-left-pad">
                        <select
                          id="card-year"
                          class="full remp-select"
                          name="card-year"
                        >
                          <option selected disabled>Godina isteka</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029">2029</option>
                          <option value="2030">2030</option>
                          <option value="2031">2031</option>
                          <option value="2032">2032</option>
                          <option value="2033">2033</option>
                          <option value="2034">2034</option>
                          <option value="2035">2035</option>
                          <option value="2036">2036</option>
                          <option value="2037">2037</option>
                          <option value="2038">2038</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <p class="full remp-mini-text center-text faded">
                    Vaši podaci za plaćanje biti će enkriptirani i sigurno
                    spremljeni po najvišim sigurnosnim standardima.
                  </p>
                </div>
                <div
                  v-if="payment === 'pretplata-uplata'"
                  class="full flex relative"
                >
                  <p class="full smaller-text faded">
                    Tekst za bankovnu uplatu.
                  </p>
                </div>
                <div v-if="payment === null" class="full flex relative">
                  <p class="full smaller-text faded">
                    Odaberite način plaćanja i prikazati ćemo vam potrebne
                    podatke.
                  </p>
                </div>
              </div>
            </div>
            <div class="full flex relative column-top-pad mobile-top-pad">
              <div class="full flex column-mini-bottom-pad">
                <div
                  v-if="term != null && pack != null && payment != null"
                  class="full newbtn huge-newbtn center-text clickable green-newbtn"
                >
                  Pretplatite se za {{ totalPrice }}€
                </div>
                <div
                  v-else
                  class="full newbtn huge-newbtn center-text clickable locked-newbtn"
                >
                  Odaberite svoje opcije pretplate za nastavak
                </div>
              </div>
              <div
                v-if="term != null && pack != null"
                class="full flex remp-final-calc column-mini-bottom-pad"
              >
                Naplatiti ćemo vam <b>{{ totalPrice }}€</b> za
                {{ packTermText }} dana {{ packText }} pretplate, što je
                {{ monthlyPrice }}€ za svaki mjesec pretplate.
              </div>
              <div
                v-if="term != null && pack != null"
                class="full flex remp-final-calc column-mini-bottom-pad"
              >
                Slijedeća naplata biti će 05.01.2025. za {{ totalPrice }}€.
                Pretplatu možete otkazati u bilo kojem trenutku.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full flex pretplata-faq">
      <div
        class="container relative flex mobile-side-pad column-full-pad mobile-top-pad"
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
  name: 'Pretplata',
  data() {
    return {
      pack: null,
      term: null,
      payment: null,
      promo_code: '',
    }
  },
  computed: {
    interimMonthPrice() {
      if (this.pack === 'pretplata-premium') {
        return '9,10'
      } else {
        return '6,49'
      }
    },
    interimYearPrice() {
      if (this.pack === 'pretplata-premium') {
        return '78'
      } else {
        return '62'
      }
    },
    totalPrice() {
      if (this.pack === 'pretplata-standard') {
        if (this.term === 'pretplata-mjesecno') {
          return '6,49'
        } else {
          return '62'
        }
      } else if (this.term === 'pretplata-mjesecno') {
        return '9,10'
      } else {
        return '78'
      }
    },
    monthlyPrice() {
      if (this.pack === 'pretplata-standard') {
        if (this.term === 'pretplata-mjesecno') {
          return '6,49'
        } else {
          return '5,16'
        }
      } else if (this.term === 'pretplata-mjesecno') {
        return '9,10'
      } else {
        return '6,50'
      }
    },
    packText() {
      if (this.pack === 'pretplata-premium') {
        return 'Premium'
      } else {
        return 'Standard'
      }
    },
    packTermText() {
      if (this.pack === 'pretplata-godisnje') {
        return 'godinu'
      } else {
        return 'mjesec'
      }
    },
  },
  methods: {
    canLogIn() {
      return this.$store.state.user.exp * 1000 < new Date().getTime()
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
          content: 'https://www.telegram.hr/pretplata/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/',
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
