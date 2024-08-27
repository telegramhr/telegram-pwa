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
                <newsletter-subscribe :mlid="2128" free></newsletter-subscribe>
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
                <newsletter-subscribe :mlid="2554" free></newsletter-subscribe>
              </div>
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative column-bottom-margin"
              >
                <img
                  src="@/assets/img/tg_newsletter_avatars_vikend.jpg"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Vikend na Telegramu</div>
                <div class="full minicard-text">
                  izvrsno štivo tijekom vikenda
                </div>

                <newsletter-subscribe :mlid="2555" free></newsletter-subscribe>
              </div>
              <div
                v-if="!onlyTS"
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
                <newsletter-subscribe :mlid="2596"></newsletter-subscribe>
              </div>
              <div
                v-if="!onlyTS"
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
                <newsletter-subscribe :mlid="2566"></newsletter-subscribe>
              </div>
              <div
                v-if="!onlyTS"
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
                <newsletter-subscribe :mlid="2564"></newsletter-subscribe>
              </div>
              <app-link
                v-if="!onlyTS"
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
                    name="price"
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
                    name="price"
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
                    name="price"
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
                    name="price"
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
                <p v-if="number">Model plaćanja: 00</p>
                <p v-if="number">Poziv na broj: {{ number }}</p>
                <p>Opis plaćanja: Donacija - {{ name }}</p>
                <p v-if="code">
                  <img :src="'data:image/png;base64,' + code" />
                </p>
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
import braintree from 'braintree-web'

export default {
  name: 'PretplataUspjeh',
  data() {
    return {
      price: 0,
      nacinPlacanja: 'none',
      access: {},
      thankyou: false,
      error: false,
      name:
        this.$store.state.user.first_name +
        ' ' +
        this.$store.state.user.last_name,
      email: this.$store.state.user.email,
      note: '',
      token: '',
      deviceData: null,
      hostedInstance: null,
      threeDS: null,
      number: false,
      code: false,
    }
  },
  computed: {
    onlyTS() {
      if (
        this.$store.state.user.access === 'TMI0ZHT4IEYE' ||
        this.$store.state.user.access === 'TM823EJ8Z8O5' ||
        this.$store.state.user.access === 'TM9H28SXGG2N'
      ) {
        return true
      }
      return false
    },
  },
  watch: {
    nacinPlacanja(val) {
      if (val === 'kreditna-kartica' && !this.hostedInstance) {
        this.getToken()
      }
      if (val === 'bankovna-uplata' && !this.number) {
        this.submitBank()
      }
    },
  },
  mounted() {
    this.$store.dispatch('newsletters/checkAccess', this.$route.query.email)
  },
  methods: {
    submitBank() {
      this.$axios
        .get('/pretplate/sanctum/csrf-cookie', {
          withCredentials: true,
        })
        .then(() => {
          this.$axios
            .post(
              '/pretplate/donation',
              {
                name: this.name,
                email: this.email,
                note: this.note,
                amount: this.price,
                type: 'bank',
              },
              { withCredentials: true }
            )
            .then((res) => {
              this.number = res.data.number
              this.code = res.data.code
            })
        })
    },
    getToken() {
      if (this.price) {
        this.$axios.get('/pretplate/braintree/client/1').then((res) => {
          this.token = res.data.token
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
                      'font-family': '"Barlow", sans-serif',
                      'font-size': '20px',
                      'font-weight': '700',
                      height: '38px',
                      color: '#111',
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
                      placeholder: '1111 1111 1111 1111',
                    },
                    cvv: {
                      selector: '#cvv',
                      placeholder: '111',
                    },
                    expirationDate: {
                      selector: '#expiration-date',
                      placeholder: 'MM/YYYY',
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
              this.hostedInstance = instances[0]
              this.threeDS = instances[1]
              this.deviceData = instances[2].deviceData
            })
        })
      }
    },
    close() {
      this.error = false
      this.$emit('close')
    },
    submit() {
      this.hostedInstance
        .tokenize({
          cardholderName: this.name,
          billingAddress: {
            postalCode: this.postal_code,
            streetAddress: this.address,
            locality: this.city,
          },
        })
        .then((payload) => {
          return this.threeDS.verifyCard({
            onLookupComplete: (data, next) => {
              next()
            },
            amount: this.price,
            nonce: payload.nonce,
            bin: payload.details.bin,
            email: this.$store.state.user.email,
            challengeRequested: true,
            billingAddress: {
              streetAddress: this.address,
              postalCode: this.postal_code,
            },
          })
        })
        .then((payload) => {
          if (!payload.liabilityShifted) {
            this.error =
              '3DS autorizacija kartice nije prošla. Probajte ponovo.'
          } else {
            this.nonce = payload.nonce
            this.submitToServer()
          }
        })
    },
    order() {
      if (!(this.name && this.address && this.city && this.postal_code)) {
        return
      }
      if (this.token) {
        this.submit()
      } else {
        this.submitToServer()
      }
    },
    submitToServer() {
      this.$axios
        .get('/pretplate/sanctum/csrf-cookie', {
          withCredentials: true,
        })
        .then(() => {
          this.$axios
            .post(
              '/pretplate/donation',
              {
                name: this.name,
                email: this.email,
                uid: this.$store.state.user.uid,
                nonce: this.nonce,
                amount: this.price,
                deviceData: this.deviceData,
                note: this.note,
                type: 'credit',
              },
              { withCredentials: true }
            )
            .then(() => {
              this.thankyou = true
            })
            .catch(() => {
              this.error = 'Plaćanje nije uspjelo. Probajte ponovo.'
            })
        })
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/pretplata/pogodnosti/',
      },
    ]
    return {
      title: 'Telegram Pretplata - Pogodnosti',
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
          content: 'Telegram Pretplata - Pogodnosti',
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
          content: 'https://www.telegram.hr/pretplata/pogodnosti/',
        },
      ],
      link,
    }
  },
}
</script>
