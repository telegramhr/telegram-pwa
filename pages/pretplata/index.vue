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
    <div class="full flex remp-pretplata">
      <div class="full flex remp-pretplata">
        <div class="full flex relative">
          <div class="full flex">
            <div
              class="container relative flex pretplata-packs mobile-side-pad column-horizontal-pad"
            >
              <h1 class="full center-text">
                Pridružite se tisućama pretplatnika i podržite neovisno
                novinarstvo - odaberite Telegram
              </h1>
              <p class="full bold remp-subtitle faded">
                1) Odaberite pretplatu
              </p>
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
                    <div class="full flex mobile-third relative">
                      <div class="full flex overtitle-parent">
                        <div class="noththree overtitle">Standard</div>
                      </div>
                      <div class="full sub-price bold">
                        {{ standardPrice }}€
                      </div>
                      <div class="nothfour full center-text undertitle">
                        Mjesečno
                      </div>
                    </div>
                    <div class="full pretplata-benefits mobile-two-thirds">
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        neograničeno čitanje Telegrama
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        posebni popusti i pogodnosti
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        specijalni newsletteri
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
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
                    <div class="full flex mobile-third relative">
                      <div class="full flex overtitle-parent">
                        <div class="noththree overtitle">
                          Premium <span class="ib">(bez oglasa)</span>
                        </div>
                      </div>
                      <div class="full sub-price bold">{{ premiumPrice }}€</div>
                      <div class="nothfour full center-text undertitle">
                        Mjesečno
                      </div>
                    </div>
                    <div class="full pretplata-benefits mobile-two-thirds">
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        neograničeno čitanje Telegrama
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        neograničeno čitanje Telesporta
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        posebni popusti i pogodnosti
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        specijalni newsletteri
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
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
                    2) Odaberite trajanje pretplate
                  </p>
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
                      <div class="remp-radio-indicator center">
                        <div></div>
                      </div>
                      <div class="full">
                        Godišnje
                        <span class="highlight-text">24% popusta</span>
                      </div>
                      <div class="full remp-special-note">
                        {{ interimYearPrice }}€ za godinu dana unaprijed
                      </div>
                    </label>
                  </div>
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
                      <div class="remp-radio-indicator center">
                        <div></div>
                      </div>
                      <div class="full">4 tjedna</div>
                      <div class="full remp-special-note">
                        {{ interimMonthPrice }}€/mj, možete otkazati kad god
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
                      value="braintree_default_recurrent"
                    />
                    <label
                      for="pretplata-kartica"
                      class="full flex relative remp-minibox animate clickable"
                    >
                      <div class="remp-radio-indicator center">
                        <div></div>
                      </div>
                      <div>Kartica</div>
                      <div class="flex remp-icon-list">
                        <i class="fa-brands fa-cc-visa"></i>
                        <i class="fa-brands fa-cc-mastercard"></i>
                        <i class="fa-brands fa-cc-diners-club"></i>
                      </div>
                      <div class="full remp-special-note">
                        Visa, Mastercard ili Diners
                      </div>
                    </label>
                  </div>
                  <!--<div class="full relative flex">
                    <input
                      id="pretplata-uplata"
                      v-model="payment"
                      type="radio"
                      name="pretplata-placanje"
                      class="hide"
                      value="bank_transfer"
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
                  </div>-->
                </div>
              </div>
              <p v-show="!loggedIn" class="full bold remp-subtitle faded">
                4) Unesite podatke
              </p>
              <div id="login" class="full flex relative remp-halfpad">
                <div class="half flex flex-responsive remp-miniboxes">
                  <div v-show="!loggedIn">
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
                    <small v-show="!showPassword"
                      >Ukoliko niste registrirani korisnik, na navedenu email
                      adresu ćete zaprimiti pristupne podatke.</small
                    >
                    <button
                      v-if="showPassword"
                      class="full newbtn huge-newbtn center-text clickable"
                      @click="login"
                    >
                      Prijavi se
                    </button>
                    <p class="full remp-mini-text center-text faded">ili</p>
                    <div class="full flex relative">
                      <div
                        v-show="false"
                        class="half flex column-mini-right-pad"
                      >
                        <div class="full center remp-social-logbtn animate">
                          <i class="fa-brands fa-google"></i>
                          Google
                        </div>
                      </div>
                      <div class="half flex column-mini-left-pad">
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
                  </div>
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
                          href="https://www.telegram.hr/stranica/pravila-privantnosti/"
                          class="highlight-text"
                          >pravila privatnosti</a
                        ></span
                      >
                    </label>
                  </div>
                </div>
                <div class="half flex flex-responsive remp-miniboxes">
                  <div
                    v-if="payment === 'braintree_default_recurrent'"
                    id="pretplata-kartica-broj"
                    class="full flex relative"
                  >
                    <div
                      v-show="token"
                      id="credit-card"
                      class="full remp-new-input hosted-field"
                    ></div>
                    <div
                      v-show="token"
                      id="cvv"
                      class="full remp-new-input hosted-field"
                    ></div>
                    <div
                      v-show="token"
                      id="expiration-date"
                      class="full remp-new-input hosted-field"
                    ></div>
                    <p class="full remp-mini-text center-text faded hide">
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
                </div>
              </div>
              <form
                id="payment-form"
                class="full flex column-horizontal-pad column-top-pad mobile-top-pad"
                method="post"
                action="https://pretplata.telegram.hr/sales-funnel/sales-funnel-frontend/submit"
              >
                <input type="hidden" name="funnel_url_key" :value="url_key" />
                <input
                  type="hidden"
                  name="payment_metadata[payment_method_nonce]"
                  :value="nonce"
                />
                <input
                  type="hidden"
                  name="payment_metadata[device_data]"
                  :value="deviceData"
                />
                <input
                  type="hidden"
                  name="subscription_type"
                  :value="subscription_type"
                />
                <input type="hidden" name="payment_gateway" :value="payment" />
                <input type="hidden" name="price" :value="price" />
                <input type="hidden" name="email" :value="email" />
                <div
                  v-if="!buyable"
                  class="full newbtn huge-newbtn center-text clickable locked-newbtn"
                >
                  Dovršite kupnju
                  {{ totalPrice ? 'za ' + totalPrice + '€' : '' }}
                </div>
                <div
                  v-if="!buyable"
                  class="full barlow smaller-text faded center-text column-mini-top-pad"
                >
                  Ispunite sve korake iznad kako bi dovršili kupnju.
                </div>
                <button
                  v-if="buyable"
                  class="full newbtn huge-newbtn center-text clickable green-newbtn"
                  @click.prevent="submit"
                >
                  Dovršite kupnju
                  {{ totalPrice ? 'za ' + totalPrice + '€' : '' }}
                </button>
                <p class="full remp-mini-text center-text faded">
                  Pretplatu možete otkazati u bilo kojem trenutku. Pretplata se
                  automatski obnavlja.
                </p>
              </form>
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
import _ from 'lodash'
import braintree from 'braintree-web'
export default {
  name: 'Pretplata',
  data() {
    return {
      show_msg: '',
      payment: 'braintree_default_recurrent',
      pack: null,
      term: 'pretplata-godisnje',
      promo_code: '',
      email: this.$store.state.user.email,
      password: '',
      showPassword: false,
      hostedInstance: null,
      threeDS: null,
      deviceData: null,
      nonce: null,
      token: null,
      dropin: null,
      terms: false,
      privacy: false,
      funnel_url_key: 'main',
      auth: 0,
      url_key: 'main',
      creditCard: false,
      cvv: false,
      expirationDate: false,
      instance: null,
    }
  },
  computed: {
    buyable() {
      if (
        this.email &&
        this.terms &&
        this.privacy &&
        this.token &&
        this.creditCard &&
        this.cvv &&
        this.expirationDate
      ) {
        return true
      }
      return false
    },
    interimMonthPrice() {
      if (this.pack === 'pretplata-premium') {
        return '9,99'
      } else {
        return '7,99'
      }
    },
    interimYearPrice() {
      if (this.pack === 'pretplata-premium') {
        return '99'
      } else {
        return '79'
      }
    },
    standardPrice() {
      if (this.term === 'pretplata-mjesecno') {
        return '7,99'
      } else {
        return '79'
      }
    },
    premiumPrice() {
      if (this.term === 'pretplata-mjesecno') {
        return '9,99'
      } else {
        return '99'
      }
    },
    price() {
      if (this.term === 'pretplata-mjesecno') {
        if (this.pack === 'pretplata-standard') {
          return 7.99
        } else {
          return 9.99
        }
      }
      if (this.pack === 'pretplata-standard') {
        return 79
      } else {
        return 99
      }
    },
    totalPrice() {
      if (!this.pack || !this.term) {
        return 0
      }
      if (this.pack === 'pretplata-standard') {
        if (this.term === 'pretplata-mjesecno') {
          return '7,99'
        } else {
          return '79'
        }
      } else if (this.term === 'pretplata-mjesecno') {
        return '9,99'
      } else {
        return '99'
      }
    },
    subscription_type() {
      if (this.pack === 'pretplata-standard') {
        if (this.term === 'pretplata-mjesecno') {
          return 'telegram_standard_mjesecna_pretplata_2024'
        } else {
          return 'telegram_standard_godisnja_pretplata_2024'
        }
      } else if (this.term === 'pretplata-mjesecno') {
        return 'telegram_premium_mjesecna_pretplata_2024'
      } else {
        return 'telegram_premium_godisnja_pretplata_2024'
      }
    },
    loggedIn() {
      return !!this.$store.state.user.id
    },
    canLogIn() {
      return this.$store.getters['user/canLogIn']
    },
  },
  watch: {
    email: _.debounce(function (value) {
      const _this = this
      const formData = new FormData()
      formData.append('email', value)
      this.$axios
        .post('/crm/api/v2/users/email', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then((response) => {
          if (response.data.status && response.data.status === 'taken') {
            _this.showPassword = true
          } else if (response.data.status === 'error') {
            if (response.data.code === 'email_missing') {
              return
            }
            _this.show_msg = 'error-not-finished'
          } else {
            _this.showPassword = false
            this.getToken()
          }
        })
        .catch(() => {
          _this.showPassword = false
          this.getToken()
        })
    }, 1000),
    term(value) {
      if (this.$store.state.user.email) {
        this.getToken()
      }
    },
  },
  methods: {
    login() {
      if (!this.showPassword) {
        return
      }
      this.$store.dispatch('user/loginSubmit', {
        email: this.email,
        password: this.password,
      })
    },
    getToken() {
      const _this = this
      this.$axios
        .get('/crm/api/v1/braintree/token', {
          params: {
            email: _this.email,
          },
        })
        .then((res) => {
          _this.token = res.data.token
          braintree.client
            .create({
              authorization: res.data.token,
            })
            .then((clientInstance) => {
              return Promise.all([
                braintree.hostedFields.create({
                  client: clientInstance,
                  styles: {
                    input: {
                      'font-size': '16px',
                      color: '#666',
                    },
                    'input.invalid': {
                      color: '#ae3737',
                    },
                    'input.valid': {
                      color: '#35a843',
                    },
                  },
                  fields: {
                    number: {
                      selector: '#credit-card',
                      placeholder: 'Broj kartice',
                    },
                    cvv: {
                      selector: '#cvv',
                      placeholder: 'CVV sigurnosni kod',
                    },
                    expirationDate: {
                      selector: '#expiration-date',
                      placeholder: 'MM/GGGG',
                    },
                  },
                }),
                braintree.threeDSecure.create({
                  authorization: res.data.token,
                  version: 2,
                }),
                braintree.dataCollector.create({
                  client: clientInstance,
                }),
              ])
            })
            .then((instances) => {
              _this.instance = instances[0]
              _this.instance.on('validityChange', function (event) {
                const field = event.fields[event.emittedBy]

                if (field.isValid || field.isPotentiallyValid) {
                  switch (event.emittedBy) {
                    case 'number':
                      _this.creditCard = true
                      break
                    case 'cvv':
                      _this.cvv = true
                      break
                    case 'expirationDate':
                      _this.expirationDate = true
                      break
                    default:
                      break
                  }
                } else {
                  switch (event.emittedBy) {
                    case 'number':
                      _this.creditCard = false
                      break
                    case 'cvv':
                      _this.cvv = false
                      break
                    case 'expirationDate':
                      _this.expirationDate = false
                      break
                    default:
                      break
                  }
                }
              })
              _this.threeDS = instances[1]
              _this.deviceData = instances[2].deviceData
            })
        })
    },
    submit() {
      this.loading = true
      this.instance
        .tokenize()
        .then((payload) => {
          return this.threeDS.verifyCard({
            onLookupComplete: (data, next) => {
              next()
            },
            amount: this.price,
            nonce: payload.nonce,
            bin: payload.details.bin,
            email: this.email,
          })
        })
        .then((payload) => {
          this.loading = false
          if (!payload.liabilityShifted) {
            this.error =
              '3DS autorizacija kartice nije prošla. Probajte ponovo.'
          } else {
            this.nonce = payload.nonce
            setTimeout(
              () => document.getElementById('payment-form').submit(),
              500
            )
          }
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
    }
  },
}
</script>
