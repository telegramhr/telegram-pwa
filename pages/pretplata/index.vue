<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Pretplatite se i podržite naše bespoštedno novinarstvo."
      ></theader>
    </div>
    <div class="full flex relative dark-mode pretplata-bf">
      <img
        src="@/assets/img/tg_black_friday_bg.jpg"
        alt="Kolaž naslovnih fotografija raznih istraživačkih specijala Telegrama"
        class="img-as-bg"
      />
      <div
        class="container center relative mobile-side-pad pretplata-packs pretplata-packboxes"
      >
        <div class="full center relative">
          <img
            src="@/assets/img/tg_blackfriday_logo.png"
            class="bf-logo"
            alt="Kolaž naslovnih fotografija raznih istraživačkih specijala Telegrama"
          />
        </div>
        <div
          class="full flex-responsive flex relative pretplata-packbox bf-packbox stretch"
        >
          <div class="best-price-sticker animate">Najbolja <br />cijena</div>
          <div class="full flex overtitle-parent">
            <h3 class="overtitle">Premium</h3>
          </div>
          <h2 class="full">1+1 gratis</h2>
          <h4 class="full center-text undertitle">
            platite samo 588 kn za 24 mjeseca čitanja (78,04€)
          </h4>
          <div class="full pretplata-benefits">
            <p class="full animate">
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              dvije godine za cijenu jedne
            </p>
            <p class="full animate">
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              neograničeno čitanje Telegrama
            </p>
            <p class="full animate">
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              neograničeno čitanje Telesporta
            </p>
            <p class="full animate">
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              posebni popusti i pogodnosti
            </p>
            <p class="full animate">
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              specijalni newsletteri
            </p>
            <p class="full animate">
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              surfanje bez oglasa
            </p>
            <h4 class="full center-text undertitle">
              *ponuda vrijedi samo za nove korisnike
            </h4>
          </div>
          <div class="full center btn-parent" @click="checkout(four)">
            <div class="btn animate">Odaberi</div>
          </div>
        </div>
      </div>
    </div>
    <div id="pretplata-selector" class="full flex pretplata-page-content">
      <div class="full flex relative">
        <div
          class="container relative flex mobile-side-pad stretch column-full-pad"
        >
          <h1 class="full center-text">Priče koje guraju društvo naprijed.</h1>
          <p class="full center-text pretplata-tagline">
            Pretplatite se i podržite naše bespoštedno novinarstvo.
          </p>
        </div>
        <div class="full flex">
          <div class="container relative flex pretplata-packs mobile-side-pad">
            <input
              id="yeartoggle"
              type="checkbox"
              class="yeartoggle"
              name="yeartoggle"
            />
            <div class="full center yeartoggle-parent">
              <label class="relative">
                <div class="best-price-sticker animate hide">
                  Najbolja <br />vrijednost
                </div>
                <div
                  class="togglemonth"
                  onclick="document.getElementById('yeartoggle').checked = false;"
                >
                  Mjesečno
                </div>
                <div
                  class="toggleyear"
                  onclick="document.getElementById('yeartoggle').checked = true;"
                >
                  Godišnje
                </div>
              </label>
            </div>
            <div class="full flex center pretplata-packboxes">
              <div
                class="half flex-responsive flex relative pretplata-packbox stretch"
              >
                <div class="full flex overtitle-parent">
                  <h3 class="overtitle">Standard</h3>
                </div>
                <h2 class="full">49kn</h2>
                <h4 class="full center-text undertitle">Mjesečno (6,50€)</h4>
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
                    surfanje s manje oglasa
                  </p>
                </div>
                <div class="full center btn-parent" @click="checkout(one)">
                  <div class="btn animate">Odaberi</div>
                </div>
              </div>
              <div
                class="half flex-responsive flex relative pretplata-packbox stretch"
              >
                <div class="full flex overtitle-parent">
                  <h3 class="overtitle">Premium</h3>
                </div>
                <h2 class="full">69kn</h2>
                <h4 class="full center-text undertitle">Mjesečno (9,16€)</h4>
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
                    surfanje bez oglasa
                  </p>
                </div>
                <div class="full center btn-parent" @click="checkout(two)">
                  <div class="btn animate">Odaberi</div>
                </div>
              </div>
              <div
                class="half flex-responsive flex relative pretplata-packbox stretch"
              >
                <div class="full flex overtitle-parent">
                  <h3 class="overtitle">Standard</h3>
                </div>
                <h2 class="full">39kn</h2>
                <h4 class="full center-text undertitle">
                  mjesečno (5,18€), za cijelu godinu 468kn (62,11€)
                </h4>
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
                    surfanje s manje oglasa
                  </p>
                </div>
                <div class="full center btn-parent" @click="checkout(three)">
                  <div class="btn animate">Odaberi</div>
                </div>
              </div>
              <div
                class="half flex-responsive flex relative pretplata-packbox stretch"
              >
                <div class="full flex overtitle-parent">
                  <h3 class="overtitle">Premium</h3>
                </div>
                <h2 class="full">49kn</h2>
                <h4 class="full center-text undertitle">
                  mjesečno (6,50€), za cijelu godinu 588kn (78,04€)
                </h4>
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
                    surfanje bez oglasa
                  </p>
                </div>
                <div class="full center btn-parent" @click="checkout(four)">
                  <div class="btn animate">Odaberi</div>
                </div>
              </div>
              <a
                href="mailto:pretplata@telegram.hr"
                class="full center-text undertitle"
                >Trebat će vam R1 račun ili želite ponudu za pravne osobe?
                Javite nam se.</a
              >
              <div class="full column-horizontal-pad">
                <app-link
                  to="/pretplata/poklon"
                  class="full flex stretch relative mini-pretplata column-top-pad column-top-border"
                >
                  <h2 class="full center-text">
                    Poklonite pretplatu na Telegram.
                  </h2>
                  <div class="full center-text">
                    Poklon koji se otvara svaki dan, 365 dana
                    <div class="btn">Pokloni</div>
                  </div>
                </app-link>
              </div>
            </div>
          </div>
        </div>
        <app-link
          to="/klub"
          class="full dark-element bottom-pretplata-promo relative"
        >
          <div class="container relative flex align-children-end">
            <div class="three-fourths flex-responsive">
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
                <h4 class="full small-top-margin">
                  Klub ekskluzivnih ponuda, pogodnosti i popusta, <br />
                  samo za pretplatnike Telegrama.
                </h4>
                <div class="full flex small-top-margin">
                  <div class="newbtn huge-newbtn">Saznajte više</div>
                </div>
              </div>
            </div>
          </div>
        </app-link>
        <div class="full flex relative small-top-margin">
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
                  <h3>Vrhunski autori</h3>
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
                  <h3>Otkrivanje korupcije</h3>
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
                  <h3>Istraživački specijali</h3>
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
                  <h3>Inspirativne reportaže</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
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
                  kao što su Drago Hedl, Sanja Modrić, Andrej Dimitrijević, Ana
                  Raić Knežević, Jasmin Klarić, Marko Repecki, Dora Kršul,
                  Goranko Fižulić, Aleksandar Holiga, Mladen Pleše, Vjekoslav
                  Skledar, Đivo Đurović i mnogi drugi. A želimo se, naravno, i
                  pojačati.
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
                  Telegramova otkrića zataškanih kvadrata, nesrazmjera primanja
                  i imovine i drugih sumnjivih radnji dovela su do smjene
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
                  Otkrili smo i otvorili stotine priča i tema, a među
                  najvažnijima bio je istraživački serijal o zataškanom
                  seksualnom uznemiravanju na Sveučilištu u Zagrebu, nakon čega
                  nas je rektor Boras optužio da izmišljamo iskaze žrtava. A ima
                  još puno tema koje želimo otvoriti.
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
                  pojedinca koji su nadvladali teške životne okolnosti i
                  poslovnim uspjesima domaćih genija koji marljivo prkose
                  močvarnom tlu hrvatske ekonomije. To su priče na kakve želimo
                  stavljati sve više fokusa.
                </p>
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
              <summary class="full relative">
                Što je pretplata na Telegram?
              </summary>
              <p>
                Pretplata na Telegram omogućuje Vam, ovisno o paketu,
                neograničeno čitanje Telegrama i Telesporta, ali i brojne druge
                benefite i funkcionalnosti poput surfanja bez oglasa, popust na
                knjige i ekskluzivnih
                <nuxt-link to="/newsletters">newslettera</nuxt-link>.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Zašto postoji pretplata na Telegramu?
              </summary>
              <p>
                Bespoštedno i neovisno novinarstvo, istraživački specijali i
                velike priče nisu jeftini. Svake godine stotine tisuća kuna
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
                ili više naših portala. Kako bismo Vam izašli u susret,
                pripremili smo povoljnu premium opciju mjesečne pretplate, kao i
                još povoljnije godišnje pretplate.
              </p>
            </details>
            <details class="full flex relative">
              <summary class="full relative">
                Koja mi se opcija pretplate najviše isplati?
              </summary>
              <p>
                Najisplativija opcija je godišnja premium pretplata: u njoj za
                samo 49 kuna mjesečno (godišnji iznos naplaćuje se jednokratno)
                dobivate godinu dana neograničenog čitanja Telegrama i
                Telesporta bez oglasa, nove funkcionalnosti koje ćemo uvoditi i
                popust na knjigu jednog od naših autora.
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
                Dapače, upravo je u tijeku Božićna akcija darivanja. Samo
                posjetite
                <app-link to="/pretplata/poklon">ovu stranicu</app-link> i
                pratite korake za jedan od najoriginalnijih poklona ovog Božića.
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
      <tfooter></tfooter>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pretplata',
  data() {
    return {
      terms: {
        TM0FMYURHRA3: {
          title: 'Telegram Mjesečna Pretplata',
          price: 49,
          gtm: 'standard-monthly',
        },
        TMXKYJUN5YN5: {
          title: 'Telegram Premium Mjesečna Pretplata',
          price: 69,
          gtm: 'premium-monthly',
        },
        TMVUCFM94OA7: {
          title: 'Telegram Godišnja Pretplata',
          price: 468,
          gtm: 'standard-annual',
        },
        TM8R9U7RK5B1: {
          title: 'Telegram Premium Godišnja Pretplata',
          price: 588,
          gtm: 'premium-annual',
        },
        TMBXUSHKJZZ0: {
          title: 'Telegram Mjesečna Pretplata - Božićna akcija',
          price: 1,
        },
      },
    }
  },
  computed: {
    one() {
      if (process.client) {
        if (window.tp.sandbox) {
          return 'TMC561I3C1ZT'
        }
        return 'TM0FMYURHRA3'
      }
      return ''
    },
    two() {
      if (process.client) {
        if (window.tp.sandbox) {
          return 'TM68H8RUQ7VJ'
        }
        return 'TMXKYJUN5YN5'
      }
      return ''
    },
    three() {
      if (process.client) {
        if (window.tp.sandbox) {
          return 'TMA44DJRTT2A'
        }
        return 'TMVUCFM94OA7'
      }
      return ''
    },
    four() {
      if (process.client) {
        if (window.tp.sandbox) {
          return 'TM6MUK1A0QU6'
        }
        return 'TM8R9U7RK5B1'
      }
      return ''
    },
    promo() {
      return 'TMBXUSHKJZZ0'
    },
  },
  mounted() {
    window.fbq = window.fbq || function () {}
    window.fbq('track', 'ViewContent', {
      content_ids: [
        'TM0FMYURHRA3',
        'TMXKYJUN5YN5',
        'TMVUCFM94OA7',
        'TM8R9U7RK5B1',
        'TMBXUSHKJZZ0',
      ],
    })
    window.tp.push([
      'addHandler',
      'checkoutComplete',
      function (conversion) {
        if (conversion.rid === '') {
          this.$store.commit('user/setTerm', true)
        }
      },
    ])
    this.$gtm.push({
      event: 'subscription-funnel',
      'subscription-category': 'subscription-new',
      'subscription-action': 'viewed',
      'article-title': this.$store.state.history.title,
      'article-category': this.$store.state.history.category,
      'article-author': this.$store.state.history.author,
      'user-type': this.$store.state.user.type,
    })
    if (this.$route.query.black_friday === '2022') {
      this.checkout(this.four)
    }
  },
  methods: {
    checkout(termId) {
      this.$gtm.push({ ecommerce: null }) // Clear the previous ecommerce object.
      this.$gtm.push({
        event: 'productClick',
        ecommerce: {
          click: {
            products: [
              {
                name: this.terms[termId].title,
                id: termId,
                price: this.terms[termId].price,
              },
            ],
          },
        },
      })
      this.$gtm.push({
        event: 'subscription-funnel',
        'subscription-category': 'subscription-new',
        'subscription-action': 'selected',
        'subscription-type': this.terms[termId].gtm,
        'subscription-value': this.terms[termId].price,
        'article-title': this.$store.state.history.title,
        'article-category': this.$store.state.history.category,
        'article-author': this.$store.state.history.author,
        'user-type': this.$store.state.user.type,
      })
      if (this.$store.state.user.token) {
        this.checkout2(termId, -1)
      } else {
        const _that = this
        window.tp.pianoId.show({
          screen: 'register',
          width: window.innerWidth > 720 ? 600 : 375,
          loggedIn(data) {
            _that.$store.dispatch('user/setUser', data.user)
            // window.location.reload()
            _that.checkout2(termId, -2)
          },
        })
      }
    },
    checkout2(termId, back) {
      const _that = this
      window.fbq = window.fbq || function () {}
      window.fbq('track', 'InitiateCheckout', {
        content_ids: [termId],
        currency: 'HRK',
        value: this.terms[termId].price,
      })
      const promo = this.$route.query.promo_code
      window.tp.push([
        'init',
        () => {
          window.tp.offer.show({
            offerId: window.tp.sandbox ? 'OFVZ3BQ00JLQ' : 'OF5JVPQYFLE1',
            termId,
            templateId: window.tp.sandbox ? 'OTTXZFQ6FGFC' : 'OTXWXSOL0WWS',
            checkoutFlowId: window.tp.sandbox ? 'CF8Q59Z3RJ5G' : 'CF65KTMVQXXX',
            promoCode: promo,
            closeOnLogout: true,
            complete: (data) => {
              _that.$store.dispatch('user/checkAccess')
              window.fbq('track', 'Purchase', {
                content_ids: data.termId,
                currency: data.chargeCurrency,
                value: data.chargeAmount,
              })
              _that.$gtm.push({
                event: 'subscription-funnel',
                'subscription-category': 'subscription-new',
                'subscription-action': data.promotionId
                  ? 'purchased-with-coupon'
                  : 'purchased',
                'subscription-type': _that.terms[data.termId].gtm,
                'subscription-value': data.chargeAmount,
                'article-title': this.$store.state.history.title,
                'article-category': this.$store.state.history.category,
                'article-author': this.$store.state.history.author,
                'user-type': this.$store.state.user.type,
              })
              _that.$gtm.push({ ecommerce: null })
              _that.$gtm.push({
                ecommerce: {
                  purchase: {
                    actionField: {
                      id: data.termConversionId,
                      affiliation: 'Telegram.hr',
                      revenue: data.chargeAmount,
                      tax: data.chargeAmount - data.chargeAmount / 1.05,
                    },
                    products: [
                      {
                        id: data.termId,
                        name: _that.terms[data.termId].title,
                        quantity: 1,
                        price: _that.terms[data.termId].price,
                      },
                    ],
                  },
                },
              })
              window.marfeel.cmd.push([
                'compass',
                function (compass) {
                  compass.trackConversion('subscribe')
                },
              ])
              window.fbq('track', 'Subscribe', {
                currency: data.chargeCurrency,
                value: data.chargeAmount,
              })
              window.PianoESP &&
                typeof window.PianoESP.handleUserDataPromise === 'function' &&
                window.PianoESP.handleUserDataPromise({
                  email: _that.$store.state.user.email,
                  squads: [2128, 2555, 2554],
                }).then(() => {
                  _that.$router.go(back)
                })
            },
          })
        },
      ])
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
          content: 'https://www.telegram.hr/pretplata',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata',
        },
      ],
    }
  },
}
</script>
