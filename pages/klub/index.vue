<template>
  <div
    class="main-container flex red-header-page single-article hide-billboard newsletter-page hide-bottom-pretplata"
  >
    <div class="full flex tg-red dark-mode">
      <client-only>
        <theader
          headline="Telegram Klub - popusti i ponude za pretplatnike"
        ></theader>
      </client-only>
    </div>
    <!-- Header -->
    <div class="full flex relative klub-header">
      <div class="container relative flex stretch">
        <div
          class="forty flex-responsive center column-full-pad mobile-side-pad"
        >
          <div class="full flex">
            <img
              src="@/assets/img/tg_klub_logo_negative.svg"
              alt="Telegram Klub logo"
              loading="lazy"
            />
            <div class="nothfour full flex small-top-margin">
              Postoje klubovi koji nisu za sve. <br />Ali su sve onima, koji im
              pripadaju.
            </div>
            <div class="nothfour full flex small-top-margin">
              Klub ekskluzivnih ponuda, pogodnosti i popusta, samo za
              pretplatnike Telegrama.
            </div>
          </div>
        </div>
        <div class="three-fourths flex-responsive">
          <img
            src="@/assets/img/tg_klub_header_vizual.jpg"
            class="desktop-only"
            alt="Telegram Klub kolaž"
            loading="lazy"
          />
          <img
            src="@/assets/img/tg_klub_header_vizual_mobile.jpg"
            class="mobile-only"
            alt="Telegram Klub kolaž"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div class="full flex darkened-bg">
      <div class="container flex relative stretch">
        <div
          class="three-fourths center flex-wrap mobile-half article column-full-pad mobile-full-pad"
        >
          <div class="noththree full overtitle">Specijalna ponuda</div>
          <h2 class="full">Uzmite Pickbox sa 10% popusta</h2>
          <div class="full flex">
            <a
              href="#streaming"
              class="newbtn huge-newbtn simple-btn-margin flex"
              >Pogledajte ponudu</a
            >
          </div>
        </div>
        <div class="fourth mobile-half flex-responsive center">
          <img
            src="@/assets/img/extras/klub/tg_klub_pickbox.png"
            alt="Pickbox ponuda"
          />
        </div>
      </div>
    </div>
    <!-- Intro -->
    <div class="full flex relative mobile-side-pad klub-intro">
      <div class="container flex relative">
        <h2 class="full flex column-horizontal-pad">
          Kako iskoristiti ponude Kluba?
        </h2>
        <div class="full flex relative stretch">
          <div
            v-show="canLogIn"
            class="third flex flex-responsive column-horizontal-pad column-right-border"
          >
            <div class="nothfour full bold">1. Pretplatite se.</div>
            <p>
              Posebne ponude Telegram Kluba dostupne su našim pretplatnicima.
              <app-link to="/pretplata">Pretplatite se</app-link> ili, ako već
              imate račun, <a @click.prevent="login">prijavite se.</a>
            </p>
          </div>
          <div
            v-show="!canLogIn"
            class="third flex flex-responsive column-horizontal-pad column-right-border"
          >
            <div class="nothfour full bold">1. Aktivna pretplata.</div>
            <p>
              Posebne ponude dostupne su samo pretplatnicima poput Vas. Možete
              ih koristiti sve dok imate pretplatu na Telegram.
            </p>
          </div>
          <div
            class="third flex flex-responsive column-horizontal-pad column-right-border"
          >
            <div class="nothfour full bold">2. Odaberite ponudu.</div>
            <p>
              Odaberite neke od predstava, izložbi, knjiga ili koncerata naših
              partnera na ovoj stranici, te slijedite upute za daljnje korake.
            </p>
          </div>
          <div class="third flex flex-responsive column-horizontal-pad">
            <div class="nothfour full bold">3. Kupite uz popust.</div>
            <p>
              Za kupnju na prodajnom mjestu, pokažite
              <a href="#iskaznica">digitalnu iskaznicu.</a> Za kupnju na webu,
              iskoristite promo-kod naveden uz ponudu.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Kazalista -->
    <div id="konferencije_list" class="full flex relative mobile-side-pad">
      <div class="container flex relative">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Događanja i konferencije
          </div>
        </div>
        <div class="full flex relative stretch mobile-native-slider">
          <KlubItem
            v-for="offer in offers.konferencije"
            :key="offer.title"
            :offer="offer"
            @select="selectOffer"
          />
        </div>
      </div>
    </div>
    <div id="konferencije" class="full flex fake-inpage-anchor"></div>
    <div class="full flex relative">
      <div
        v-if="selected_offer && selected_offer.category === 'konferencije'"
        id="msu"
        class="full flex relative klub-expanded"
      >
        <div class="container flex relative stretch mobile-side-pad">
          <div class="close-klub-expand" @click="selected_offer = null">x</div>
          <div class="third center flex-responsive column-left-pad">
            <img :src="selected_offer.image" aria-hidden="true" />
          </div>
          <div class="two-thirds center flex-responsive article">
            <div class="noththree full overtitle">
              {{ selected_offer.overtitle }}
            </div>
            <h2 class="full">{{ selected_offer.title }}</h2>
            <div class="nothfour full">
              {{ selected_offer.subtitle }}
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div
              v-show="!canLogIn"
              class="full flex"
              v-html="selected_offer.text"
            ></div>
            <!-- eslint-enable vue/no-v-html -->
            <div v-show="canLogIn" class="full flex">
              <p class="full bold">
                Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
                pretplatnicima.
              </p>
              <app-link to="/pretplata" class="newbtn huge-newbtn"
                >Pretplatite se</app-link
              >
              <a class="newbtn newbtn-empty huge-newbtn" @click.prevent="login"
                >Prijava</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Kazalista -->
    <div id="kazalista_list" class="full flex relative mobile-side-pad">
      <div class="container flex relative">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Kazališta
          </div>
        </div>
        <div class="full flex relative stretch mobile-native-slider">
          <KlubItem
            v-for="offer in offers.kazalista"
            :key="offer.title"
            :offer="offer"
            @select="selectOffer"
          />
        </div>
      </div>
    </div>
    <!-- Kazalista expandables -->
    <div id="kazalista" class="full flex fake-inpage-anchor"></div>
    <div class="full flex relative">
      <div
        v-if="selected_offer && selected_offer.category === 'kazalista'"
        id="msu"
        class="full flex relative klub-expanded"
      >
        <div class="container flex relative stretch mobile-side-pad">
          <div class="close-klub-expand" @click="selected_offer = null">x</div>
          <div class="third center flex-responsive column-left-pad">
            <img :src="selected_offer.image" aria-hidden="true" />
          </div>
          <div class="two-thirds center flex-responsive article">
            <div class="noththree full overtitle">
              {{ selected_offer.overtitle }}
            </div>
            <h2 class="full">{{ selected_offer.title }}</h2>
            <div class="nothfour full">
              {{ selected_offer.subtitle }}
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div
              v-show="!canLogIn"
              class="full flex"
              v-html="selected_offer.text"
            ></div>
            <!-- eslint-enable vue/no-v-html -->
            <div v-show="canLogIn" class="full flex">
              <p class="full bold">
                Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
                pretplatnicima.
              </p>
              <app-link to="/pretplata" class="newbtn huge-newbtn"
                >Pretplatite se</app-link
              >
              <a class="newbtn newbtn-empty huge-newbtn" @click.prevent="login"
                >Prijava</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Streaming -->
    <div id="streaming_list" class="full flex relative mobile-side-pad">
      <div class="container flex relative">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Streaming
          </div>
        </div>
        <div class="full flex relative stretch mobile-native-slider">
          <KlubItem
            v-for="offer in offers.streaming"
            :key="offer.title"
            :offer="offer"
            @select="selectOffer"
          />
        </div>
      </div>
    </div>
    <!-- Streaming expendables -->
    <div id="streaming" class="full flex fake-inpage-anchor"></div>
    <div class="full flex relative">
      <div
        v-if="selected_offer && selected_offer.category === 'streaming'"
        id="msu"
        class="full flex relative klub-expanded"
      >
        <div class="container flex relative stretch mobile-side-pad">
          <div class="close-klub-expand" @click="selected_offer = null">x</div>
          <div class="third center flex-responsive column-left-pad">
            <img :src="selected_offer.image" aria-hidden="true" />
          </div>
          <div class="two-thirds center flex-responsive article">
            <div class="noththree full overtitle">
              {{ selected_offer.overtitle }}
            </div>
            <h2 class="full">{{ selected_offer.title }}</h2>
            <div class="nothfour full">
              {{ selected_offer.subtitle }}
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div
              v-show="!canLogIn"
              class="full flex"
              v-html="selected_offer.text"
            ></div>
            <!-- eslint-enable vue/no-v-html -->
            <div v-show="canLogIn" class="full flex">
              <p class="full bold">
                Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
                pretplatnicima.
              </p>
              <app-link to="/pretplata" class="newbtn huge-newbtn"
                >Pretplatite se</app-link
              >
              <a class="newbtn newbtn-empty huge-newbtn" @click.prevent="login"
                >Prijava</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Knjizare -->
    <div id="knjige_list" class="full flex relative mobile-side-pad">
      <div class="container flex relative">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Knjige
          </div>
        </div>
        <div class="full flex relative stretch mobile-native-slider">
          <KlubItem
            v-for="offer in offers.knjige"
            :key="offer.title"
            :offer="offer"
            @select="selectOffer"
          />
        </div>
      </div>
    </div>
    <!-- Knjizare expandables -->
    <div id="knjige" class="full flex fake-inpage-anchor"></div>
    <div class="full flex relative">
      <div
        v-if="selected_offer && selected_offer.category === 'knjige'"
        id="msu"
        class="full flex relative klub-expanded"
      >
        <div class="container flex relative stretch mobile-side-pad">
          <div class="close-klub-expand" @click="selected_offer = null">x</div>
          <div class="third center flex-responsive column-left-pad">
            <img :src="selected_offer.image" aria-hidden="true" />
          </div>
          <div class="two-thirds center flex-responsive article">
            <div class="noththree full overtitle">
              {{ selected_offer.overtitle }}
            </div>
            <h2 class="full">{{ selected_offer.title }}</h2>
            <div class="nothfour full">
              {{ selected_offer.subtitle }}
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div
              v-show="!canLogIn"
              class="full flex"
              v-html="selected_offer.text"
            ></div>
            <!-- eslint-enable vue/no-v-html -->
            <div v-show="canLogIn" class="full flex">
              <p class="full bold">
                Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
                pretplatnicima.
              </p>
              <app-link to="/pretplata" class="newbtn huge-newbtn"
                >Pretplatite se</app-link
              >
              <a class="newbtn newbtn-empty huge-newbtn" @click.prevent="login"
                >Prijava</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Muzeji -->
    <div id="muzeji_list" class="full flex relative mobile-side-pad">
      <div class="container flex relative">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Muzeji
          </div>
        </div>
        <div class="full flex relative stretch mobile-native-slider">
          <KlubItem
            v-for="offer in offers.muzeji"
            :key="offer.title"
            :offer="offer"
            @select="selectOffer"
          />
        </div>
      </div>
    </div>
    <!-- Muzeji expendables -->
    <div id="muzeji" class="full flex fake-inpage-anchor"></div>
    <div class="full flex relative">
      <div
        v-if="selected_offer && selected_offer.category === 'muzeji'"
        id="msu"
        class="full flex relative klub-expanded"
      >
        <div class="container flex relative stretch mobile-side-pad">
          <div class="close-klub-expand" @click="selected_offer = null">x</div>
          <div class="third center flex-responsive column-left-pad">
            <img :src="selected_offer.image" aria-hidden="true" />
          </div>
          <div class="two-thirds center flex-responsive article">
            <div class="noththree full overtitle">
              {{ selected_offer.overtitle }}
            </div>
            <h2 class="full">{{ selected_offer.title }}</h2>
            <div class="nothfour full">
              {{ selected_offer.subtitle }}
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div
              v-show="!canLogIn"
              class="full flex"
              v-html="selected_offer.text"
            ></div>
            <!-- eslint-enable vue/no-v-html -->
            <div v-show="canLogIn" class="full flex">
              <p class="full bold">
                Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
                pretplatnicima.
              </p>
              <app-link to="/pretplata" class="newbtn huge-newbtn"
                >Pretplatite se</app-link
              >
              <a class="newbtn newbtn-empty huge-newbtn" @click.prevent="login"
                >Prijava</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Ostalo -->
    <div id="ostalo_list" class="full flex relative mobile-side-pad">
      <div class="container flex relative">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Ostalo
          </div>
        </div>
        <div class="full flex relative stretch mobile-native-slider">
          <KlubItem
            v-for="offer in offers.ostalo"
            :key="offer.title"
            :offer="offer"
            @select="selectOffer"
          />
        </div>
      </div>
    </div>
    <!-- Ostalo expendables -->
    <div id="ostalo" class="full flex fake-inpage-anchor"></div>
    <div class="full flex relative">
      <div
        v-if="selected_offer && selected_offer.category === 'ostalo'"
        id="msu"
        class="full flex relative klub-expanded"
      >
        <div class="container flex relative stretch mobile-side-pad">
          <div class="close-klub-expand" @click="selected_offer = null">x</div>
          <div class="third center flex-responsive column-left-pad">
            <img :src="selected_offer.image" aria-hidden="true" />
          </div>
          <div class="two-thirds center flex-responsive article">
            <div class="noththree full overtitle">
              {{ selected_offer.overtitle }}
            </div>
            <h2 class="full">{{ selected_offer.title }}</h2>
            <div class="nothfour full">
              {{ selected_offer.subtitle }}
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div
              v-show="!canLogIn"
              class="full flex"
              v-html="selected_offer.text"
            ></div>
            <!-- eslint-enable vue/no-v-html -->
            <div v-show="canLogIn" class="full flex">
              <p class="full bold">
                Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
                pretplatnicima.
              </p>
              <app-link to="/pretplata" class="newbtn huge-newbtn"
                >Pretplatite se</app-link
              >
              <a class="newbtn newbtn-empty huge-newbtn" @click.prevent="login"
                >Prijava</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Iskaznica -->
    <client-only>
      <div id="iskaznica" class="full flex fake-inpage-anchor"></div>
      <div v-show="user.expiry_date" class="full flex relative mobile-side-pad">
        <div class="container flex relative column-bottom-pad">
          <div class="full column-horizontal-pad column-top-pad">
            <div class="full cantha-separator"></div>
          </div>
          <div class="full flex column-horizontal-pad">
            <div
              class="noththree full center-text column-vertical-pad subsection-title"
            >
              Vaša klub iskaznica
            </div>
          </div>
          <div class="full center relative">
            <client-only>
              <div class="klub-card flex stretch relative">
                <div class="full flex center">
                  <img
                    src="@/assets/img/telegram_logo_white.svg"
                    alt="Telegram logo"
                  />
                  <div class="full flex klub-card-content">
                    <p class="full center-text">
                      {{ user.first_name }} {{ user.last_name }}
                    </p>
                    <p class="full center-text">ID {{ user.uid }}</p>
                    <p class="full center-text">
                      Datum isteka:
                      {{
                        user.expiry_date
                          ? new Date(
                              user.expiry_date * 1000 + 24 * 3600000
                            ).toLocaleDateString('hr-hr')
                          : 'Neograničeno'
                      }}
                    </p>
                  </div>
                </div>
                <div class="full flex center klub-qr">
                  <img
                    v-if="user.id"
                    :src="`https://pretplate.telegram.hr/qrcode/${$store.state.user.token}`"
                  />
                </div>
                <img
                  src="@/assets/img/tg_bg_fancyarc.jpg"
                  aria-hidden="true"
                  class="img-as-bg"
                />
              </div>
            </client-only>
          </div>
          <div class="full center">
            <p class="full faded center-text klub-disclaimer">
              Ovo je digitalna iskaznica koja vas identificira kao pretplatnika
              Telegrama. Nije prenosiva i vrijedi samo dok vam traje pretplata.
            </p>
          </div>
        </div>
      </div>
    </client-only>
    <div class="full flex small-top-margin"></div>
    <!-- Footer -->
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'TelegramKlub',
  async fetch() {
    this.offers = await this.$axios.$get('/api/klub')
  },
  data() {
    return {
      offers: [],
      selected_kazaliste: '',
      selected_knjizara: '',
      selected_muzej: '',
      selected_koncert: '',
      selected_streaming: '',
      selected_ostalo: '',
      selected_offer: null,
      selected_category: null,
      user: {
        access: false,
        expiry_date: '',
        first_name: '',
        last_name: '',
        token: '',
        uid: '',
      },
    }
  },
  computed: {
    canLogIn() {
      return this.$store.getters['user/canLogIn']
    },
    qr() {
      const img = this.$axios.$get(
        `/pretplate/qrcode/${this.$store.state.user.token}`
      )
      return img.img
    },
  },
  async mounted() {
    if (this.$store.state.user.token) {
      this.user = await this.$axios.$get(
        `/pretplate/check/${this.$store.state.user.token}`
      )
    }
  },
  methods: {
    login() {
      this.$store.dispatch('user/login')
    },
    selectOffer(offer) {
      this.selected_offer = offer
      window.location.href = `#${offer.category}`
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/klub/',
      },
    ]
    return {
      title: 'Telegram Klub - popusti i ponude za pretplatnike',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'cXenseParse:image',
          name: 'cXenseParse:image',
          content: require('~/assets/img/tg_klub_share.jpg'),
        },
        {
          hid: 'cXenseParse:title',
          name: 'cXenseParse:title',
          content: 'Telegram Klub - popusti i ponude za pretplatnike',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Popusti i posebne akcije u kazalištima, knjižarama i muzejima.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Popusti i posebne akcije u kazalištima, knjižarama i muzejima.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article klub-ponuda',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Telegram Klub - popusti i ponude za pretplatnike',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require('~/assets/img/tg_klub_share.jpg'),
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '1920',
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '1080',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/klub/',
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
