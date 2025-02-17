<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Pretplatite se i podržite naše bespoštedno novinarstvo."
      ></theader>
    </div>
    <!-- Special half element -->
    <div class="full flex relative stretch pretplata-duo">
      <div
        class="half flex flex-responsive relative center pretplata-blue column-full-pad mobile-full-pad"
      >
        <div
          class="full flex center pretplata-packboxes full-width-packs column-vertical-pad"
        >
          <div
            class="full center-text relative column-bottom-pad mobile-bottom-pad pretplata-duo-title"
          >
            Vremenski ograničena ponuda
          </div>
          <div class="full center">
            <input
              id="pretplata-regular"
              v-model="subscription_package"
              type="radio"
              name="pretplata-pack"
              class="hide"
              value="pretplata-regular"
            />
            <label
              for="pretplata-regular"
              class="full animate flex-responsive flex relative pretplata-packbox smaller-packbox stretch fix-sticker"
            >
              <div class="best-price-sticker alt-bigger-sticcer animate">
                Popust<br />50%
              </div>
              <div class="smaller-packbox-radio">
                <div class="remp-radio-indicator center"><div></div></div>
              </div>
              <div class="full sub-price bold">
                Standard: 39€<span> u prvoj godini</span>
              </div>
              <div class="full barlow faded">
                neograničeno čitanje Telegrama, specijalni newsletteri i posebni
                popusti u sklopu Telegram kluba
              </div>
            </label>
          </div>
          <div class="full center">
            <input
              id="pretplata-premium"
              v-model="subscription_package"
              type="radio"
              name="pretplata-pack"
              class="hide"
              value="pretplata-premium"
            />
            <label
              for="pretplata-premium"
              class="full animate flex-responsive flex relative pretplata-packbox smaller-packbox stretch fix-sticker"
            >
              <div class="best-price-sticker alt-bigger-sticcer animate">
                Popust<br />50%
              </div>
              <div class="smaller-packbox-radio">
                <div class="remp-radio-indicator center"><div></div></div>
              </div>
              <div class="full sub-price bold">
                Premium: 49€<span> u prvoj godini</span>
              </div>
              <div class="full barlow faded">
                neograničeno čitanje Telegrama i Telesporta bez reklama,
                specijalni newsletteri i posebni popusti u sklopu Telegram kluba
              </div>
            </label>
          </div>
        </div>
      </div>
      <div
        class="half flex flex-responsive relative center darkened-bg column-full-pad mobile-full-pad"
      >
        <div class="full flex relative column-full-pad pretplata-duo-text">
          <div class="full barlow center-text relative column-mini-bottom-pad">
            Pridružite se tisućama pretplatnika koji su prepoznali kvalitetu
            informacija
          </div>
          <div
            class="full barlow center-text bold relative column-bottom-pad mobile-bottom-pad"
          >
            Ne propustite 50% popusta za cijelu godinu
          </div>
          <div
            v-if="!subscription_package"
            class="full barlow smaller-text faded center-text"
          >
            Odaberite paket za nastavak
          </div>
          <div
            v-if="subscription_package"
            class="full center flex-wrap relative column-top-pad force-stretch"
          >
            <div
              class="half flex flex-responsive remp-miniboxes column-horizontal-pad mobile-bottom-pad"
            >
              <template>
                <input
                  id="pretplata-email"
                  v-model="email"
                  type="text"
                  class="full remp-new-input"
                  placeholder="Upišite email"
                  name="email"
                />
                <input
                  v-if="showPassword"
                  id="pretplata-password"
                  v-model="password"
                  type="password"
                  class="full remp-new-input"
                  placeholder="Upišite lozinku"
                  name="password"
                />
                <p
                  class="full remp-mini-text center-text faded column-mini-vertical-pad"
                >
                  ili
                </p>
                <div class="full flex relative">
                  <div v-show="false" class="full flex">
                    <div class="full center remp-social-logbtn animate">
                      <i class="fa-brands fa-google"></i>
                      Google
                    </div>
                  </div>
                  <div class="full flex">
                    <a
                      href="https://pretplata.telegram.hr/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=https://www.telegram.hr/pretplata/"
                      class="full center remp-social-logbtn animate"
                    >
                      <i class="fa-brands fa-facebook-f"></i>
                      Facebook
                    </a>
                  </div>
                  <p class="full remp-mini-text center-text faded hide">
                    Privremeno ćemo vas preusmjeriti na stranicu odabranog
                    davatelja usluga kako bi povezali račune.
                  </p>
                </div>
              </template>
              <div
                class="full flex column-top-pad mobile-bottom-pad mobile-top-pad"
              >
                <input
                  id="terms"
                  v-model="terms"
                  type="checkbox"
                  class="cbx"
                  name="terms"
                />
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
              <div
                class="full flex column-top-pad mobile-bottom-pad mobile-top-pad"
              >
                <input
                  id="privacy"
                  v-model="privacy"
                  type="checkbox"
                  class="cbx"
                  name="privacy"
                />
                <label for="privacy" class="check flex full">
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
                      href="https://www.telegram.hr/stranica/pravila-privatnosti/"
                      class="highlight-text"
                      >pravila privatnosti</a
                    ></span
                  >
                </label>
              </div>
            </div>
            <div
              class="half flex flex-responsive remp-miniboxes column-horizontal-pad mobile-bottom-pad"
            >
              <input
                id="kartica"
                type="text"
                class="full remp-new-input"
                placeholder="Broj kartice"
                name="kartica"
              />
              <div
                class="full barlow smaller-text faded center-text column-mini-top-pad"
              >
                i ostalo itd. itd.
              </div>
            </div>
            <div
              class="full flex column-horizontal-pad column-top-pad mobile-top-pad"
            >
              <div
                class="full newbtn huge-newbtn center-text clickable locked-newbtn"
              >
                Dovršite kupnju
              </div>
              <div
                class="full barlow smaller-text faded center-text column-mini-top-pad"
              >
                Ispunite sve korake iznad kako bi dovršili kupnju.
              </div>
              <div
                class="full newbtn huge-newbtn center-text clickable green-newbtn hide"
              >
                Dovršite kupnju
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pretplata keypoints submenu -->
    <!--<div class="full flex relative">
      <div class="container relative flex">
        <div
          class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
        >
          <a class="full flex relative" href="#keypoint-autori">
            <img
              src="@/assets/img/tg_pretplata_mini_vizual_autori.jpg"
              aria-hidden="true"
            />
            <div class="keypoint-text full center">
              <div class="noththree">Vrhunski autori</div>
            </div>
          </a>
        </div>
        <div
          class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
        >
          <a class="full flex relative" href="#keypoint-korupcija">
            <img
              src="@/assets/img/tg_pretplata_mini_vizual_korupcija.jpg"
              aria-hidden="true"
            />
            <div class="keypoint-text full center">
              <div class="noththree">Otkrivanje korupcije</div>
            </div>
          </a>
        </div>
        <div
          class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
        >
          <a class="full flex relative" href="#keypoint-istrazivacki">
            <img
              src="@/assets/img/tg_pretplata_mini_vizual_istrazivacki.jpg"
              aria-hidden="true"
            />
            <div class="keypoint-text full center">
              <div class="noththree">Istraživački specijali</div>
            </div>
          </a>
        </div>
        <div
          class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
        >
          <a class="full flex relative" href="#keypoint-inspiracija">
            <img
              src="@/assets/img/tg_pretplata_mini_vizual_inspiracija.jpg"
              aria-hidden="true"
            />
            <div class="keypoint-text full center">
              <div class="noththree">Inspirativne reportaže</div>
            </div>
          </a>
        </div>
      </div>
    </div>-->
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
            više naših portala.
          </p>
        </details>
        <details class="full flex relative">
          <summary class="full relative">
            Koja mi se opcija pretplate najviše isplati?
          </summary>
          <p>
            Najisplativija opcija je godišnja premium pretplata: u njoj za samo
            8,25 eura mjesečno (godišnji iznos naplaćuje se jednokratno)
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
            Naravno, na
            <app-link to="/pretplata/poklon">ovoj stranici</app-link> možete
            svojim najmilijima pokloniti punu godinu čitanja najkvalitetnijih
            Telegram članaka.
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
      subscription_package: null,
    }
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/',
      },
    ]
    return {
      title: 'Telegram',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Checkout',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Checkout',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Telegram',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/',
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
