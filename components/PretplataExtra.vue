<script>
export default {
  name: 'PretplataExtra',
}
</script>

<template>
  <div>
    <!-- Klub widget -->
    <app-link
      to="/klub"
      class="full dark-element bottom-pretplata-promo relative"
    >
      <div class="container relative flex align-children-end">
        <div class="three-fourths flex flex-responsive align-children-end">
          <img
            src="@/assets/img/tg_vizual_klub_mini.jpg"
            class="desktop-only"
            alt="Telegram Klub kolaž"
          />
          <img
            src="@/assets/img/tg_klub_header_vizual_mobile.jpg"
            class="mobile-only"
            alt="Telegram Klub kolaž"
          />
        </div>
        <div
          class="half klub-header mobile-side-pad column-full-pad center flex-responsive"
        >
          <div class="full flex">
            <img
              src="@/assets/img/tg_klub_logo_negative.svg"
              alt="Telegram Klub logo"
            />
            <p class="full small-top-margin desktop-only">
              Klub ekskluzivnih ponuda, pogodnosti i popusta, <br />
              samo za pretplatnike Telegrama.
            </p>
            <p class="full small-top-margin mobile-only">
              Klub ekskluzivnih ponuda, pogodnosti i popusta, samo za
              pretplatnike Telegrama.
            </p>
            <div class="full flex small-top-margin">
              <div class="newbtn huge-newbtn">Saznajte više</div>
            </div>
          </div>
        </div>
      </div>
    </app-link>
    <!-- Knjige widget -->
    <div class="full flex relative">
      <app-link
        to="/knjiga/"
        class="full cantha-break break-dezulovic mobile-side-pad flex relative stretch"
      >
        <div class="container flex stretch relative">
          <div class="half column-full-pad center flex-responsive">
            <div class="full flex article">
              <h2 class="full">
                Telegramove hit knjige po posebnoj cijeni za pretplatnike
              </h2>
              <p class="full">
                Depra Aleksandra Stankovića, Igla, pila, ravnalo Sanje Modrić,
                Bili libar Borisa Dežulovića, O Zagrebu Zrinke Paladino i
                Neispričane priče Rajka Grlića.
              </p>
              <div class="full flex">
                <div class="newbtn huge-newbtn">Pogledajte ponudu</div>
              </div>
            </div>
          </div>
          <div
            class="half stretch flex flex-responsive column-horizontal-pad all-books-effect"
          >
            <img
              src="@/assets/img/tg_book_front_all.png"
              alt="Bili libar Borisa Dežulovića, O Zagrebu Zrinke Paladino i Neispričane priče Rajka Grlića"
            />
          </div>
        </div>
      </app-link>
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
    <!-- Pretplata keypoints -->
    <div class="full flex relative mobile-bottom-pad">
      <div id="keypoint-autori" class="full flex relative sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_autori.jpg"
              aria-hidden="true"
              class="light-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_autori_dark.jpg"
              aria-hidden="true"
              class="dark-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_autori_white.jpg"
              aria-hidden="true"
              class="contrast-mode-only"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Autorski pristup i dublji uvid u ključne društvene teme
              </h2>
              <p>
                Telegramovu ekipu čine renomirana imena i nagrađivani novinari
                kao što su Drago Hedl, Sanja Modrić, Andrej Dimitrijević, Jagoda
                Marić, Jasmin Klarić, Silvana Menđušić, Dora Kršul, Goranko
                Fižulić, Aleksandar Holiga, Mladen Pleše, Đivo Đurović i mnogi
                drugi. A želimo se, naravno, i pojačati.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="keypoint-korupcija"
        class="full flex relative sub-point alt-sub-point"
      >
        <div class="container relative flex mobile-side-pad stretch">
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
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Bespoštedne istrage koje moćnici ne mogu ignorirati.
              </h2>
              <p>
                Telegramova otkrića zataškanih kvadrata, nesrazmjera primanja i
                imovine i drugih sumnjivih radnji dovela su do smjene
                potpredsjednika Vlade Tomislava Tolušića, ministra Kuščevića i
                ministra Kujundžića, kao i velikog broja lokalnih moćnika. No,
                ne mislimo stati.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="keypoint-istrazivacki" class="full flex relative sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_istrazivacki.jpg"
              aria-hidden="true"
              class="light-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_istrazivacki_dark.jpg"
              aria-hidden="true"
              class="dark-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_istrazivacki_white.jpg"
              aria-hidden="true"
              class="contrast-mode-only"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Istraživački serijali i otvaranje tema o kojima se šuti.
              </h2>
              <p>
                Otkrili smo i otvorili stotine priča i tema, a među najvažnijima
                bio je istraživački serijal o zataškanom seksualnom
                uznemiravanju na Sveučilištu u Zagrebu, nakon čega nas je rektor
                Boras optužio da izmišljamo iskaze žrtava. A ima još puno tema
                koje želimo otvoriti.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="keypoint-inspiracija"
        class="full flex relative sub-point alt-sub-point"
      >
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
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_inspiracija_white.jpg"
              aria-hidden="true"
              class="contrast-mode-only"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Inspirativne priče o ljudima koji guraju Hrvatsku naprijed.
              </h2>
              <p>
                Pozitivne priče o nevjerojatnim postignućima marginaliziranih
                pojedinca koji su nadvladali teške životne okolnosti i poslovnim
                uspjesima domaćih genija koji marljivo prkose močvarnom tlu
                hrvatske ekonomije. To su priče na kakve želimo stavljati sve
                više fokusa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Newsletteri -->
    <app-link
      to="/newsletters"
      class="full cantha-break mobile-side-pad center relative stretch"
      style="margin-bottom: 0px"
    >
      <div class="container flex stretch relative">
        <div class="half column-full-pad center flex-responsive">
          <div class="full flex article">
            <h2 class="full">
              Specijalni newsletteri za Telegramove pretplatnike.
            </h2>
            <p class="full">Najbolje od Telegrama, svaki dan u vašem inboxu.</p>
            <div class="newbtn huge-newbtn animate">Saznajte više</div>
          </div>
        </div>
        <div class="half column-full-pad center flex-responsive">
          <img
            src="@/assets/img/tg_newsletter_visual.png"
            alt="Kolekcija Telegramovih newslettera"
          />
        </div>
      </div>
    </app-link>
    <!-- Donacije -->
    <div
      class="full pretplata-ticker special-ticker no-sticky-ticker relative column-vertical-pad"
    >
      <div class="container center relative">
        <img
          src="@/assets/img/tg_ticker_special_bg_mobile.jpg"
          class="mobile-only"
          aria-hidden="true"
        />
        <img
          src="@/assets/img/tg_ticker_special_bg_desktop.jpg"
          class="desktop-only"
          aria-hidden="true"
        />
        <img
          src="@/assets/img/tg_ticker_special_bg_mobile_dark.jpg"
          class="mobile-only dark-mode-only"
          aria-hidden="true"
        />
        <img
          src="@/assets/img/tg_ticker_special_bg_desktop_dark.jpg"
          class="desktop-only dark-mode-only"
          aria-hidden="true"
        />
        <div
          class="half mobile-side-pad column-full-pad flex-responsive flex mobile-bottom-pad"
        >
          <h2 class="full">
            Želite pomoći još više? Donirajte za rad Telegrama
          </h2>
          <p class="full">
            Za čitatelje koji žele dati još veći doprinos našem istraživačkom
            radu, otvorili smo mogućnost donacija.
          </p>
          <div
            v-show="canLogIn"
            class="full center many-btns mobile-bottom-pad"
          >
            <app-link
              v-show="canLogIn"
              to="/pretplata"
              class="newbtn huge-newbtn animate"
              >Pretplatite se</app-link
            >
            <app-link to="/donacije" class="newbtn huge-newbtn animate"
              >Donirajte</app-link
            >
          </div>
          <div v-show="!canLogIn" class="full center">
            <app-link to="/donacije" class="newbtn huge-newbtn animate"
              >Donirajte</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Poklon -->
    <app-link
      to="/pretplata/poklon"
      class="full cantha-break break-dezulovic mobile-side-pad flex relative stretch"
    >
      <div class="container flex stretch relative">
        <div class="half column-full-pad center flex-responsive">
          <div class="full flex article">
            <h2 class="full">
              Poklonite Telegram pretplatu, poklon koji se otvara svaki dan
            </h2>
            <p class="full">
              Najbolji poklon za vaše prijatelje, partnere ili ukućane: 365 dana
              neograničenog čitanja Telegrama
            </p>
            <div class="full flex">
              <div class="newbtn huge-newbtn">Poklonite pretplatu</div>
            </div>
          </div>
        </div>
        <div
          class="half stretch flex flex-responsive column-horizontal-pad all-books-effect"
        >
          <img
            src="@/assets/img/tg_gifts_pretplata_clean.png"
            alt="Kartice Telegram pretplate"
          />
        </div>
      </div>
    </app-link>
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
  </div>
</template>

<style scoped></style>
