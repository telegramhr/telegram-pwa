<template>
  <div class="main-container flex single-article alternative-single">
    <div class="full flex tg-red">
      <theader
        headline="Pretplatite se i podržite naše bespoštedno novinarstvo."
      ></theader>
    </div>
    <div class="full flex">
      <div class="full flex relative pretplata-page-content">
        <div
          class="container relative flex mobile-side-pad stretch column-full-pad"
        >
          <div class="full flex single-article-body">
            <h1 class="full center-text column-bottom-pad">
              Pogodnosti za Telegram pretplatnike
            </h1>
            <p
              class="full center-text pretplata-tagline column-bottom-pad column-bottom-border column-bottom-margin mobile-vertical-pad mobile-bottom-border"
            >
              Hvala Vam što podržavate naše bespoštedno novinarstvo.
            </p>
            <h2 class="full">Odaberite što želite primati na mail</h2>
            <p class="full">
              Vaša pretplata uključuje ove popularne newslettere:
            </p>
            <div class="full flex relative">
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative"
              >
                <img
                  src="@/assets/img/tg_newsletter_avatars_dnevni.jpg"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Dnevni Telegram</div>
                <div class="full minicard-text">
                  pregled najvažnijih vijesti, analiza i tema
                </div>
                <div class="minicard-input center">
                  <input id="dnevni" type="checkbox" class="cbx" checked />
                  <label class="check" for="dnevni">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                </div>
              </div>
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative"
              >
                <img
                  src="@/assets/img/tg_newsletter_avatars_propustili.jpg"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Možda ste propustili</div>
                <div class="full minicard-text">
                  naši najbolji tekstovi, personalizirani za Vas
                </div>
                <div class="minicard-input center">
                  <input id="propustili" type="checkbox" class="cbx" checked />
                  <label class="check" for="propustili">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                </div>
              </div>
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative"
              >
                <img
                  src="@/assets/img/tg_newsletter_avatars_vikend.jpg"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Vikend na Telegramu</div>
                <div class="full minicard-text">
                  izvrsno štivo tijekom vikenda
                </div>

                <div class="minicard-input center">
                  <input id="vikend" type="checkbox" class="cbx" checked />
                  <label class="check" for="vikend">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                </div>
              </div>
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative"
              >
                <img
                  src="https://www.telegram.hr/wp-content/uploads/2018/07/tg_klaric.png"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Jasmin Klarić</div>
                <div class="full minicard-text">
                  Puni članci Telegramovog političkog analitičara
                </div>
                <div class="minicard-input center">
                  <input id="klaric" type="checkbox" class="cbx" />
                  <label class="check" for="klaric">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                </div>
              </div>
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative"
              >
                <img
                  src="https://www.telegram.hr/wp-content/uploads/2019/09/dora-krsul.png"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Dora Kršul</div>
                <div class="full minicard-text">
                  Puni članci specijalizirani za školstvo i akademsku zajednicu
                </div>
                <div class="minicard-input center">
                  <input id="krsul" type="checkbox" class="cbx" />
                  <label class="check" for="krsul">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                </div>
              </div>
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative"
              >
                <img
                  src="https://www.telegram.hr/wp-content/uploads/2017/09/drago_hedl-1.png"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Drago Hedl</div>
                <div class="full minicard-text">
                  Puni članci jednog od najnagrađivanijih hrvatskih novinara
                </div>
                <div class="minicard-input center">
                  <input id="hedl" type="checkbox" class="cbx" />
                  <label class="check" for="hedl">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                </div>
              </div>
              <app-link
                target="_blank"
                to="/newsletters"
                class="full darkened-bg center column-mini-vertical-pad"
              >
                <div class="full center-text minicard-text">
                  Pogledajte sve newslettere
                </div>
              </app-link>
            </div>
            <h2 class="full">
              Želite li još snažnije podržati redakciju Telegrama?
            </h2>
            <p class="full">
              Donirajte iznos po vašem odabiru, ako ste u mogućnosti:
            </p>
            <div class="full flex donation-select">
              <div class="full flex relative">
                <div class="fourth flex">
                  <input
                    id="price-10"
                    v-model="price"
                    value="10"
                    name="price-10"
                    type="radio"
                    class="hide"
                  />
                  <label class="center darkened-bg" for="price-10">10€</label>
                </div>
                <div class="fourth flex">
                  <input
                    id="price-25"
                    v-model="price"
                    value="25"
                    name="price-25"
                    type="radio"
                    class="hide"
                  />
                  <label class="center darkened-bg" for="price-25">25€</label>
                </div>
                <div class="fourth flex">
                  <input
                    id="price-50"
                    v-model="price"
                    value="50"
                    name="price-50"
                    type="radio"
                    class="hide"
                  />
                  <label class="center darkened-bg" for="price-50">50€</label>
                </div>
                <div class="fourth flex">
                  <input
                    id="price-100"
                    v-model="price"
                    value="100"
                    name="price-100"
                    type="radio"
                    class="hide"
                  />
                  <label class="center darkened-bg" for="price-100">100€</label>
                </div>
              </div>
              <div
                v-show="price"
                class="full flex column-top-pad mobile-top-pad"
              >
                <div class="half flex flex-responsive alternating-padding">
                  <input
                    id="kreditna-kartica"
                    v-model="nacinPlacanja"
                    value="kreditna-kartica"
                    name="nacinPlacanja"
                    type="radio"
                    class="hide"
                  />
                  <label for="kreditna-kartica" class="center darkened-bg"
                    ><font-awesome-icon
                      icon="fa-duotone fa-credit-card"
                    />Kreditna kartica</label
                  >
                </div>
                <div class="half flex flex-responsive alternating-padding">
                  <input
                    id="bankovna-uplata"
                    v-model="nacinPlacanja"
                    value="bankovna-uplata"
                    name="nacinPlacanja"
                    type="radio"
                    class="hide"
                  />
                  <label for="bankovna-uplata" class="center darkened-bg"
                    ><font-awesome-icon
                      icon="fa-duotone fa-university"
                    />Bankovna uplata</label
                  >
                </div>
              </div>
              <div
                v-show="nacinPlacanja === 'kreditna-kartica'"
                class="full flex column-top-pad mobile-top-pad"
              >
                <label>Broj kartice:</label>
                <div id="credit-card" class="hosted-field"></div>
                <div class="half flex flex-responsive column-right-pad">
                  <label>CVV (kontrolni broj):</label>
                  <div id="cvv" class="hosted-field"></div>
                </div>
                <div class="half flex flex-responsive">
                  <label>Datum isteka:</label>
                  <div id="expiration-date" class="hosted-field"></div>
                </div>
                <button class="newbtn huge-newbtn clickable" @click="submit">
                  Platite {{ price }} €
                </button>
              </div>
              <div
                v-show="nacinPlacanja === 'bankovna-uplata'"
                class="full contains-code-image column-top-pad mobile-top-pad"
              >
                <p class="small-top-margin">IBAN: HR4723600001503346846</p>
                <p>Telegram Media Grupa d.o.o.</p>
                <p>Iznos: {{ price }},00 €</p>
                <!--<p v-if="number">Model plaćanja: 00</p>
                <p v-if="number">Poziv na broj: {{ number }}</p>
                <p>Opis plaćanja: Donacija - {{ name }}</p>
                <p v-if="code"><img :src="'data:image/png;base64,' + code" /></p>
                <button @click="submitBank">Generiraj kod za plaćanje</button>-->
              </div>
            </div>
            <p class="full small-top-margin">
              Ili nekome poklonite Telegram pretplatu:
            </p>
            <!-- Poklon -->
            <app-link
              to="/pretplata/poklon"
              target="_blank"
              class="full cantha-break break-dezulovic mobile-side-pad flex relative stretch"
            >
              <div class="container flex stretch relative">
                <div class="two-thirds column-full-pad center flex-responsive">
                  <div class="full flex article">
                    <h2 class="full">
                      <span class="ib">Poklon koji se otvara </span>
                      <span class="ib">svaki dan</span>
                    </h2>
                    <p class="full">
                      Najbolji poklon za vaše prijatelje, partnere ili ukućane:
                      365 dana neograničenog čitanja Telegrama
                    </p>
                  </div>
                </div>
                <div
                  class="third stretch center flex-responsive column-horizontal-pad"
                >
                  <img
                    src="@/assets/img/tg_gifts_pretplata_clean.png"
                    alt="Kartice Telegram pretplate"
                  />
                </div>
              </div>
            </app-link>
            <h2 class="nothtwo full">
              Želite li naručiti neki od Telegramovih bestsellera?
            </h2>
            <p class="full">Publicistički hitovi naših najboljih autora:</p>
            <div class="full flex relative">
              <app-link
                target="_blank"
                to="/knjiga/boris-dezulovic-bili-libar-2"
                class="half flex flex-responsive alternating-padding"
              >
                <div class="full minicard darkened-bg flex relative">
                  <img
                    src="@/assets/img/tg_book_clean_dezulovic2.png"
                    alt="Naslovnica knjige Borisa Dežulovića 'Bili libar 2'"
                    loading="lazy"
                  />
                  <div class="full minicard-title">Bili libar 2</div>
                  <div class="full minicard-text">Boris Dežulović</div>

                  <div class="minicard-input center column-mini-horizontal-pad">
                    <font-awesome-icon
                      :icon="['far', 'angle-right']"
                      class="animate"
                    ></font-awesome-icon>
                  </div>
                </div>
              </app-link>
              <app-link
                target="_blank"
                to="/knjiga/aleksandar-stankovic-depra"
                class="half flex flex-responsive alternating-padding"
              >
                <div class="full minicard darkened-bg flex relative">
                  <img
                    src="@/assets/img/tg_book_clean_stankovic.png"
                    alt="Naslovnica nove knjige Aleksandra Stankovića 'Depra'"
                    loading="lazy"
                  />
                  <div class="full minicard-title">Depra</div>
                  <div class="full minicard-text">Aleksandar Stanković</div>

                  <div class="minicard-input center column-mini-horizontal-pad">
                    <font-awesome-icon
                      :icon="['far', 'angle-right']"
                      class="animate"
                    ></font-awesome-icon>
                  </div>
                </div>
              </app-link>
              <app-link
                target="_blank"
                to="/knjiga/rajko-grlic-neispricane-price"
                class="half flex flex-responsive alternating-padding"
              >
                <div class="full minicard darkened-bg flex relative">
                  <img
                    src="@/assets/img/tg_book_clean_grlic.png"
                    alt="Naslovnica knjige Rajka Grlića 'Neispričane priče'"
                    loading="lazy"
                  />
                  <div class="full minicard-title">Neispričane priče</div>
                  <div class="full minicard-text">Rajko Grlić</div>

                  <div class="minicard-input center column-mini-horizontal-pad">
                    <font-awesome-icon
                      :icon="['far', 'angle-right']"
                      class="animate"
                    ></font-awesome-icon>
                  </div>
                </div>
              </app-link>
              <app-link
                target="_blank"
                to="/knjiga/boris-dezulovic-bili-libar"
                class="half flex flex-responsive alternating-padding"
              >
                <div class="full minicard darkened-bg flex relative">
                  <img
                    src="@/assets/img/tg_book_clean_dezulovic.png"
                    alt="Naslovnica knjige Borisa Dežulovića 'Bili libar'"
                    loading="lazy"
                  />
                  <div class="full minicard-title">Bili libar</div>
                  <div class="full minicard-text">Boris Dežulović</div>

                  <div class="minicard-input center column-mini-horizontal-pad">
                    <font-awesome-icon
                      :icon="['far', 'angle-right']"
                      class="animate"
                    ></font-awesome-icon>
                  </div>
                </div>
              </app-link>
              <app-link
                to="/knjige"
                target="_blank"
                class="full darkened-bg center column-mini-vertical-pad"
              >
                <div class="full center-text minicard-text">
                  Pogledajte sve knjige
                </div>
              </app-link>
            </div>
            <div class="full flex">
              <h2 class="full">
                Znate li za ove pogodnosti uključene u vašu pretplatu?
              </h2>
              <p class="full">Uključeno uz vašu Telegram pretplatu:</p>
              <!-- Klub widget -->
              <app-link
                to="/klub"
                target="_blank"
                class="full dark-element bottom-pretplata-promo bigger-bottom-pretplata-promo relative"
              >
                <div class="full flex relative">
                  <div class="container relative flex align-children-end">
                    <div
                      class="three-fourths flex flex-responsive align-children-end"
                    >
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
                      class="two-thirds klub-header mobile-side-pad column-full-pad center flex-responsive"
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
                          Klub ekskluzivnih ponuda, pogodnosti i popusta, samo
                          za pretplatnike Telegrama.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </app-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full center column-full-pad column-bottom-margin">
      <app-link to="/" class="newbtn huge-newbtn gigantic-newbtn"
        >Počnite koristiti Telegram</app-link
      >
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'PretplataUspjeh',
  data() {
    return {
      price: 0,
      nacinPlacanja: 'none',
    }
  },
  mounted() {
    this.$store.dispatch('newsletters/checkAccess', this.$route.query.email)
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/pretplata/uspjeh/',
      },
    ]
    return {
      title: 'Telegram Pretplata - Uspjeh',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Vaša pretplata je aktivna. Hvala Vam što podržavate naše bespoštedno novinarstvo.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Vaša pretplata je aktivna. Hvala Vam što podržavate naše bespoštedno novinarstvo.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telegram Pretplata - Uspjeh',
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
          content: 'https://www.telegram.hr/pretplata/uspjeh/',
        },
      ],
      link,
    }
  },
}
</script>
