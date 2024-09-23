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
    <div id="pretplata-selector" class="full flex">
      <div class="full flex relative">
        <div
          class="container relative flex mobile-full-pad stretch column-full-pad"
        >
          <div class="full just-overtitle center-text">
            Vremenski ograničena ponuda!
          </div>
          <h1 class="full center-text">
            Propuštate vijesti koje čine razliku? Otključajte ih za samo 2,29€
            mjesečno!
          </h1>
          <p class="full center-text pretplata-tagline">
            Isprobajte Telegram uz popust prva 3 mjeseca i postanite dio
            informirane zajednice!
          </p>
        </div>
        <div class="full flex">
          <div class="container relative flex pretplata-packs mobile-side-pad">
            <div class="full flex center pretplata-packboxes">
              <div class="full center">
                <input
                  id="pretplata-month"
                  v-model="subscription_package"
                  type="radio"
                  name="pretplata-month"
                  class="hide"
                  value="pretplata-month"
                />
                <label
                  for="pretplata-month"
                  class="half animate faded flex-responsive flex relative pretplata-packbox smaller-packbox stretch monochrome-highlight-color"
                >
                  <div class="smaller-packbox-radio">
                    <div class="remp-radio-indicator center">
                      <div class="monochrome-highlight-color"></div>
                    </div>
                  </div>
                  <div class="full sub-price bold">
                    7,99€<span> mjesečno</span>
                  </div>
                  <div class="full remp-special-note column-mini-top-pad">
                    standardna cijena Telegram pretplate
                  </div>
                </label>
              </div>
              <div class="full center">
                <input
                  id="pretplata-special"
                  v-model="subscription_package"
                  type="radio"
                  name="pretplata-special"
                  class="hide"
                  value="pretplata-special"
                />
                <label
                  for="pretplata-special"
                  class="half animate flex-responsive flex relative pretplata-packbox smaller-packbox stretch monochrome-highlight-color"
                >
                  <div class="best-price-sticker alt-bigger-sticcer animate">
                    Uštedite<br />71%
                  </div>
                  <div class="smaller-packbox-radio">
                    <div class="remp-radio-indicator center">
                      <div class="monochrome-highlight-color"></div>
                    </div>
                  </div>
                  <div class="full sub-price bold">
                    2,29€<span> mjesečno</span>
                  </div>
                  <div class="full remp-special-note column-mini-top-pad">
                    prva tri mjeseca, nakon toga 7,99€ mjesečno
                  </div>
                </label>
              </div>
              <div
                v-if="subscription_package === 'pretplata-month'"
                class="full center"
              >
                <div
                  class="newbtn clickable huge-newbtn animate"
                  @click="checkout(one)"
                >
                  Kupite pretplatu
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
              </div>
              <div
                v-if="subscription_package === 'pretplata-special'"
                class="full center"
                @click="checkout(two)"
              >
                <div class="newbtn clickable huge-newbtn green-newbtn animate">
                  Kupite pretplatu
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
              </div>
              <div class="full center hide">
                <div class="flex remp-icon-list column-bottom-pad">
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
              </div>
              <div class="full center">
                <div
                  class="half flex-responsive flex relative stretch pretplata-packbox noborder-packbox"
                >
                  <div class="full pretplata-benefits">
                    <p class="full animate bold">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      možete otkazati u bilo kojem trenutku
                    </p>
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
                      najbolji autori i tekstovi u Hrvatskoj
                    </p>
                    <p class="full animate">
                      <font-awesome-icon
                        :icon="['fas', 'check']"
                      ></font-awesome-icon>
                      limitirana ponuda, uskoro ističe
                    </p>
                  </div>
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
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'LjetnaAkcija',
  data() {
    return {
      promo_code: '',
      subscription_package: 'pretplata-special',
    }
  },
  computed: {
    one() {
      return 'TMU7ZSVF7C88'
    },
    two() {
      return 'TMIF8PGPXVWC'
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.promo_code = this.$route.query.promo_code
      window.tp.push([
        'addHandler',
        'checkoutComplete',
        function (conversion) {
          if (conversion.rid === '') {
            this.$store.commit('user/setTerm', true)
          }
        },
      ])
    })
  },
  methods: {
    canLogIn() {
      return this.$store.state.user.exp * 1000 < new Date().getTime()
    },
    checkout(termId, upgrade) {
      this.$piano.start(termId)
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
          content: 'https://www.telegram.hr/pretplata/ljetna/akcija/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/ljetna-akcija/',
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
