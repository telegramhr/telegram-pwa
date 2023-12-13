<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Pretplatite se i podržite naše bespoštedno novinarstvo."
      ></theader>
    </div>
    <client-only>
      <div
        class="full flex relative center mobile-side-pad newbook-xmas newbook-gifting column-full-pad dark-mode"
      >
        <img
          src="@/assets/img/tg_visual_2023_xmasbg_green.jpg"
          class="img-as-bg"
          aria-hidden="true"
        />
        <img
          class="ps-xmas1"
          src="@/assets/img/tg_xmas_1.png"
          aria-hidden="true"
        />
        <img
          class="ps-xmas2"
          src="@/assets/img/tg_xmas_2.png"
          aria-hidden="true"
        />
        <div class="container relative flex stretch">
          <div class="half tablet-full flex flex-responsive center m-order-2">
            <div class="full flex overtitle-parent">
              <div class="overtitle noththree">
                <span>Božićna akcija</span>
              </div>
            </div>
            <div class="full newbook-title all-caps">
              <span class="ib">Darujte si</span>
              <span class="ib">Telegram!</span>
            </div>
            <p class="full newbook-intro">
              Ovih praznika počastite se pretplatom, po najboljoj božićnoj
              cijeni
            </p>
            <div class="full relative newbook-price">
              <span class="faded strikethrough">6,49€</span> 1,99€ mjesečno
            </div>
            <p class="full smaller-text faded">
              prva 3 mjeseca, nakon toga 6,49€
            </p>
            <div class="full flex btn-parent newbook-btn">
              <div class="newbtn clickable huge-newbtn animate" @click="checkout(bozic)">Kupite</div>
            </div>
            <div class="full pretplata-benefits">
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                senzacionalna cijena za vrhunski sadržaj
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                neograničeno čitanje Telegrama i Telesporta
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                pristup najboljim autorima u Hrvatskoj
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                popusti na top knjige, predstave i izložbe
              </p>
            </div>
          </div>
          <div class="half tablet-full flex flex-responsive center m-order-1">
            <img
              src="@/assets/img/tg_visual_xmas_pretplata_alt.png"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </client-only>
    <div id="pretplata-selector" class="full flex">
      <div class="full flex relative">
        <div
          class="container relative flex mobile-side-pad stretch column-full-pad"
        >
          <h1 class="full center-text">Nekad je nužno odabrati stranu</h1>
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
                  <div class="noththree overtitle">Standard</div>
                </div>
                <div class="full sub-price bold">6,49€</div>
                <div class="nothfour full center-text undertitle">
                  Mjesečno (49kn)
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
                <div class="full center btn-parent" @click="checkout(one)">
                  <div class="btn animate">Odaberi</div>
                </div>
              </div>
              <div
                class="half flex-responsive flex relative pretplata-packbox stretch"
              >
                <div class="full flex overtitle-parent">
                  <div class="noththree overtitle">Premium</div>
                </div>
                <div class="full sub-price bold">9,10€</div>
                <div class="nothfour full center-text undertitle">
                  Mjesečno (69kn)
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
                <div class="full center btn-parent" @click="checkout(two)">
                  <div class="btn animate">Odaberi</div>
                </div>
              </div>
              <div
                class="half flex-responsive flex relative pretplata-packbox stretch"
              >
                <div class="full flex overtitle-parent">
                  <div class="noththree overtitle">Standard</div>
                </div>
                <div class="full sub-price bold">5,16€</div>
                <div class="nothfour full center-text undertitle">
                  mjesečno (39kn), za cijelu godinu 62€ (467kn)
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
                <div class="full center btn-parent" @click="checkout(three)">
                  <div class="btn animate">Odaberi</div>
                </div>
              </div>
              <div
                class="half flex-responsive flex relative pretplata-packbox stretch"
              >
                <div class="full flex overtitle-parent">
                  <div class="noththree overtitle">Premium</div>
                </div>
                <div class="full sub-price bold">6,50€</div>
                <div class="nothfour full center-text undertitle">
                  mjesečno (49kn), za cijelu godinu 78€ (588kn)
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
            </div>
          </div>
        </div>
      </div>
    </div>
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
      promo_code: '',
      terms: {
        TMJHR6Y8K4QA: {
          title: 'Telegram Mjesečna Pretplata',
          price: 6.49,
          gtm: 'standard-monthly',
        },
        TMY8ORHQG44A: {
          title: 'Telegram Premium Mjesečna Pretplata',
          price: 9.16,
          gtm: 'premium-monthly',
        },
        TM8RZKGESM1T: {
          title: 'Telegram Godišnja Pretplata',
          price: 62.11,
          gtm: 'standard-annual',
        },
        TMQDTT4IEHY0: {
          title: 'Telegram Premium Godišnja Pretplata',
          price: 78.04,
          gtm: 'premium-annual',
        },
        TMWPGMUCMX45: {
          title: 'Telegram Mjesečna Pretplata (Trial)',
          price: 6.49,
          gtm: 'standard-monthly-trial',
        },
        TM15W5K9EVY4: {
          title: 'Telegram Mjesečna Pretplat (PBF)',
          price: 6.49,
          gtm: 'standard-monthly-pbf',
        },
        TMWKY7BX6TFX: {
          title: 'Telegram Standard pretplata (BF)',
          price: 62,
          gtm: 'standard-annual-bf',
        },
        TML20R6ZYA0X: {
          title: 'Telegram Godišnja Pretplata (2 godine)',
          price: 158,
          gtm: 'standard-annual-2y',
        },
        TMYNBHMX6JBL: {
          title: 'Akcija u sprezi',
          price: 1,
          gtm: 'akcija-sprega',
        },
        TMYTVOS7AU82: {
          title: 'Božićna akcija',
          price: 1.99,
          gtm: 'bozicna-akcija',
        },
      },
    }
  },
  computed: {
    one() {
      if (process.client) {
        return 'TMJHR6Y8K4QA'
      }
      return ''
    },
    two() {
      if (process.client) {
        return 'TMY8ORHQG44A'
      }
      return ''
    },
    three() {
      if (process.client) {
        return 'TM8RZKGESM1T'
      }
      return ''
    },
    four() {
      if (process.client) {
        return 'TMQDTT4IEHY0'
      }
      return ''
    },
    five() {
      return 'TM15W5K9EVY4'
    },
    bozic() {
      return 'TMYTVOS7AU82'
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.promo_code = this.$route.query.promo_code
      window.fbq = window.fbq || function () {}
      window.fbq('track', 'ViewContent', {
        content_ids: [
          'TMJHR6Y8K4QA',
          'TMY8ORHQG44A',
          'TM8RZKGESM1T',
          'TMQDTT4IEHY0',
          'TMWPGMUCMX45',
          'TM15W5K9EVY4',
          'TMWKY7BX6TFX',
          'TMYNBHMX6JBL',
          'TMYTVOS7AU82',
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

      if (this.$route.query.promo_code === 'XUETUP3') {
        this.checkout(this.three)
      }
      if (this.$route.query.promo_code === 'RHXAYAVF') {
        this.checkout(this.three)
      }
      if (this.$route.query.checkout) {
        switch (this.$route.query.checkout) {
          case 'sm':
            this.checkout(this.one)
            break
          case 'sy':
            this.checkout(this.two)
            break
          case 'pm':
            this.checkout(this.three)
            break
          case 'py':
            this.checkout(this.four)
            break
          case 'two-year':
            this.checkout('TML20R6ZYA0X')
            break
          case 'plenkovic':
            this.checkout('TMYNBHMX6JBL')
            break
          case 'bozic':
            this.checkout(this.bozic)
            break
        }
      }
    })
  },
  methods: {
    canLogIn() {
      return this.$store.state.user.exp * 1000 < new Date().getTime()
    },
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
        window.tp.push([
          'init',
          () => {
            window.tp.pianoId.show({
              screen: 'register',
              width: window.innerWidth > 720 ? 600 : 375,
              loggedIn(data) {
                _that.$store.dispatch('user/setUser', data.user)
                // window.location.reload()
                _that.checkout2(termId, -2)
              },
            })
          },
        ])
      }
    },
    checkout2(termId, back) {
      const _that = this
      window.fbq = window.fbq || function () {}
      window.fbq('track', 'InitiateCheckout', {
        content_ids: [termId],
        currency: 'EUR',
        value: this.terms[termId].price,
      })
      window.tp.push([
        'init',
        () => {
          window.tp.offer.show({
            offerId: 'OF5JVPQYFLE1',
            termId,
            templateId: 'OTXWXSOL0WWS',
            checkoutFlowId: 'CF65KTMVQXXX',
            promoCode: this.promo_code,
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
