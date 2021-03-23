<template>
  <div class="main-container flex red-header-page pretplata-page">
    <div class="full flex tg-red">
      <theader></theader>
    </div>
    <div
      class="block-title news-block-title header-block-title full mobile-side-pad desktop-only"
    >
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative center">
        <nuxt-link to="/" class="logo"
          ><img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo"
        /></nuxt-link>
      </div>
    </div>
    <div class="full flex pretplata-page-content">
      <div class="full flex relative">
        <div
          class="container relative flex mobile-side-pad stretch elevate-over-section"
        >
          <div class="half flex-responsive center column-full-pad">
            <div class="full flex">
              <h1 class="full">
                Bespoštedno novinarstvo koje gura društvo naprijed.
              </h1>
              <p class="full">
                Za neograničeno čitanje Telegrama i podršku istraživačkim
                serijalima, odaberite jedan od paketa.
              </p>
            </div>
          </div>
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_main_vizual.jpg"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div class="full flex">
        <div class="container relative flex">
          <div id="landing" class="full flex relative"></div>
        </div>
      </div>
      <div class="full flex relative">
        <div class="container relative flex">
          <div
            class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
          >
            <h3>Vrhunski autori</h3>
          </div>
          <div
            class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
          >
            <h3>Otkrivanje korupcije</h3>
          </div>
          <div
            class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
          >
            <h3>Istraživački specijali</h3>
          </div>
          <div
            class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
          >
            <h3>Inspirativne reportaže</h3>
          </div>
        </div>
      </div>
      <div class="full flex relative sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_autori.jpg"
              aria-hidden="true"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Vrhunski autori nagrađeni globalnim priznanjima
              </h2>
              <p>
                Vestibulum erat urna, gravida at turpis quis, luctus consequat
                mauris. Fusce consectetur nisi ut est ornare dapibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative sub-point alt-sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_korupcija.jpg"
              aria-hidden="true"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Otkrivanje korupcije na svim razinama društva
              </h2>
              <p>
                Vestibulum erat urna, gravida at turpis quis, luctus consequat
                mauris. Fusce consectetur nisi ut est ornare dapibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_istrazivacki.jpg"
              aria-hidden="true"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Istraživački specijali koji ne zapostavljaju ključne detalje
              </h2>
              <p>
                Vestibulum erat urna, gravida at turpis quis, luctus consequat
                mauris. Fusce consectetur nisi ut est ornare dapibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative sub-point alt-sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_inspiracija.jpg"
              aria-hidden="true"
              class="light-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_inspiracija_dark.jpg"
              aria-hidden="true"
              class="dark-mode-only"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Inspirativne reportaže iz raznih sfera života
              </h2>
              <p>
                Vestibulum erat urna, gravida at turpis quis, luctus consequat
                mauris. Fusce consectetur nisi ut est ornare dapibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex pretplata-faq single-article">
        <div
          class="container relative flex mobile-side-pad column-full-pad single-article-body"
        >
          <h2 class="full">Često postavljana pitanja</h2>
          <details class="full flex relative">
            <summary class="full flex relative">
              Što je pretplata na Telegram?
            </summary>
            <p>
              Pretplata na Telegram omogućuje Vam, ovisno o paketu, neograničeno
              čitanje Telegrama, Telesporta i Super1, ali i brojne druge
              benefite i funkcionalnosti poput surfanja bez oglasa ili
              ekskluzivnih newslettera koje ćemo uskoro pokrenuti.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Zašto postoji pretplata na Telegramu?
            </summary>
            <p>
              Bespoštedno i neovisno novinarstvo, istraživački specijali i
              velike priče nisu jeftini. Svake godine stotine tisuća kuna odlaze
              nam na sudske borbe protiv moćnika koji, nakon što smo ih uhvatili
              u nedjelima, pokušavaju takvim pritiskom financijski devastirati
              Telegram. Nerijetko za tužbe i odmazde koriste javni novac,
              odnosno neograničena sredstva institucija na čijem su čelu, a
              protiv neograničenih sredstava nije se lako boriti. Upravo zato
              odlučili smo pitati vas, naše čitatelje, za podršku u ovome što
              radimo.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Kako da se pretplatim na Telegram?
            </summary>
            <p>
              Vrlo jednostavno, samo odaberite jedan od gore ponuđenih mjesečnih
              ili godišnjih paketa, a sustav će Vas dalje sam voditi kroz vrlo
              kratak i jednostavan proces.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Koliko košta pretplata?
            </summary>
            <p>
              Cijena pretplate ovisi o paketu koji odaberete. Možete se
              pretplatiti na mjesečnoj ili godišnjoj bazi i to na samo jedan ili
              više naših portala. Kako bismo Vam izašli u susret, pripremili smo
              povoljnu premium opciju mjesečne pretplate, kao i još povoljnije
              godišnje pretplate.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Koja mi se opcija pretplate najviše isplati?
            </summary>
            <p>
              Najisplativija opcija je godišnja premium pretplata koja Vam za 49
              kuna mjesečno omogućuje dvanaest mjeseci neograničenog čitanja
              Telegrama, Telesporta i Super1 bez oglasa, nove funkcionalnosti
              koje ćemo uvoditi i knjigu jednog od naših autora kao poseban
              poklon.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Kako mogu dobiti knjigu na poklon?
            </summary>
            <p>
              Ubrzo ćemo izdati knjigu jednog od naših autora, ali detalje još
              čuvamo u tajnosti. Kada knjiga bude predstavljena, poklonit ćemo
              ju našim najvjernijim pretplatnicima, a pravo na poklon knjigu
              ostvarujete pretplatom na Premium paket za cijelu godinu, ili
              nakon 3 mjeseca Premium mjesečnog paketa.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Kako mogu platiti pretplatu?
            </summary>
            <p>
              Pretplatu možete sigurno platiti svim Maestro, Mastercard i Visa
              karticama.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Mogu li nekome pokloniti pretplatu?
            </summary>
            <p>
              Trenutno ne, ali radimo na tome i uskoro ćemo to uvesti kao
              mogućnost.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Mogu li čitati Telegram sa svih uređaja jednom kad se pretplatim?
            </summary>
            <p>
              Da, svaki pretplatnik može čitati Telegram na svakom uređaju, bio
              to mobitel, računalo ili tablet.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Mi smo tvrtka/škola/knjižnica/fakultet, postoji li opcija grupne
              pretplate?
            </summary>
            <p>
              Za opcije grupne pretplate pravnim osobama javite se na
              pretplata@telegram.hr.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
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
            <summary class="full flex relative">
              Mogu li se pretplatiti samo na Telesport ili Super1?
            </summary>
            <p>
              Naravno, možete se pretplatiti samo na neki od naših portala ili
              na sve portale zajedno, kako Vama više odgovara.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Ne mogu pronaći odgovor na svoje pitanje.
            </summary>
            <p>
              Javite nam se na
              <a href="mailto:pretplata@telegram.hr">pretplata@telegram.hr</a> i
              odgovorit ćemo vam u najkraćem roku.
            </p>
          </details>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Pretplata',
}
</script>

<style scoped>
.pretplata-page h1 {
  font-size: 72px;
  font-size: 3.6rem;
  margin-top: 24px;
  line-height: 1em;
  letter-spacing: -0.05em;
  margin-bottom: 16px;
}
.pretplata-page h2 {
  font-size: 60px;
  font-size: 3rem;
  line-height: 1em;
  letter-spacing: -0.05em;
  margin-bottom: 16px;
}
.pretplata-page p {
  font-size: 20px;
  font-size: 1rem;
}
.pretplata-keypoint {
  position: relative;
  padding-top: 24px;
  margin-bottom: 48px;
}
.pretplata-keypoint::before {
  content: ' ';
  background-color: #ae3737;
  width: 30%;
  height: 8px;
  position: absolute;
  top: 0;
  left: 35%;
}
.pretplata-keypoint h3 {
  font-size: 54px;
  font-size: 2.7rem;
  text-transform: uppercase;
  text-align: center;
  font-family: neuzeit-grotesk-extra-conden, sans-serif;
  font-weight: 900;
  font-style: normal;
  letter-spacing: -0.05em;
}
.pretplata-page-content {
  padding-top: 36px;
}
.pretplata-page .header-block-title {
  padding-bottom: 72px;
}
.pretplata-page .header-block-title img {
  height: 36px;
}
.dark-mode-only {
  display: none;
}
.dark-mode .light-mode-only {
  display: none;
}
.dark-mode .dark-mode-only {
  display: block;
}
#landing {
  margin-bottom: 64px;
}

/* FAQ */

.pretplata-faq h2 {
  margin-bottom: 24px;
}
.pretplata-faq summary:focus {
  outline: none;
}
.pretplata-faq summary {
  font-size: 2.4px;
  font-size: 1.2rem;
  margin-bottom: 24px;
  font-weight: bold;
  cursor: pointer;
}
.pretplata-faq details {
  margin-top: 24px;
  border-bottom: 1px solid #c8c8c8;
}
.pretplata-faq details:last-child {
  border-bottom: none;
}
.pretplata-faq details p {
  margin-bottom: 24px;
}

@media screen and (min-width: 1025px) {
  .alt-sub-point .half {
    order: 1;
  }
  .alt-sub-point .half:first-child {
    order: 2;
  }
}
@media screen and (max-width: 1024px) {
  .pretplata-keypoint {
    width: 49.99%;
  }
  .pretplata-keypoint h3 {
    font-size: 30px;
  }
  .pretplata-page .flex-responsive img {
    margin-top: 16px;
  }
  .pretplata-page h1 {
    font-size: 48px;
    font-size: 2.4rem;
  }
  .pretplata-page h2 {
    font-size: 36px;
    font-size: 1.8rem;
  }
}
</style>
