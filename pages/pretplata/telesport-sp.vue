<template>
  <div>
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <PretplataHeroSvjetskoTelesport />
    <div class="content">
      <div class="text-wrapper">
        <div class="top-text">
          <h3>Telesport pretplata</h3>
          <div class="price-row">
            <span class="old-price">39€</span>
            <span>9,99€ /godišnje</span>
          </div>
        </div>
        <div class="features">
          <span v-for="(feature, index) in features" :key="index">
            <img
              class="check-icon"
              src="@/assets/img/brown-checkbox.png"
              alt=""
            />
            {{ feature }}
          </span>
        </div>
      </div>
      <NewLoginPayment
        class="newLoginPayment"
        :pack="pack"
        :url-key="urlKey"
        :price="price"
        @updateLoading="handleUpdateLoading"
      ></NewLoginPayment>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      features: [
        'Neograničeno čitanje Telesporta i pristup arhivi svih članaka',
        'Ekskluzivni newsletteri s posebnim analizama nagrađivanih autora',
        '10 poklon članaka mjesečno',
        'Posebni popusti i pogodnost Telegram Kluba',
      ],
      price: '9.99',
      pack: 'telesport_svjetsko_prvenstvo',
      promo_code: '',
      email: this.$store.state.user.email,
      password: '',
      showPassword: false,
      terms: false,
      privacy: false,
      auth: 0,
      urlKey: 'telesport-svjetsko',
      instance: null,
      customerId: null,
      iframeUrl: '',
      canLogIn: true,
      voucher_log_id: null,
      discount: 0,
      loadingPromo: false,
      promo_error: '',
    }
  },
  computed: {
    loggedIn() {
      return !!this.$store.state.user.id
    },
  },
  methods: {
    handleUpdateLoading(state) {
      this.loading = state
    },
  },

  head() {
    return {
      title: 'Telesport Svjetsko – Pretplata',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Od prvog zvižduka do finala - pratite prvenstvo uz Telegram i Telesport. Odaberite paket i iskoristite popust.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Od prvog zvižduka do finala - pratite prvenstvo uz Telegram i Telesport. Odaberite paket i iskoristite popust.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telesport Svjetsko – Pretplata',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/telesport_svjetsko_share.png',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/telesport-svjetsko',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/telesport-svjetsko',
        },
      ],
      script: [
        {
          hid: 'jquery',
          src: 'https://code.jquery.com/jquery-3.7.1.min.js',
        },
        {
          hid: 'trustpay-popup',
          src: 'https://mapi.trustpay.eu/mapi5/Scripts/TrustPay/popup.js',
        },
      ],
    }
  },
}
</script>

<style scoped>
.telegram-overlay {
  position: fixed;
  top: 0;
  z-index: 101;
  height: 100%;
  width: 100%;
  text-align: center;
  align-content: center;
  background: rgb(0, 0, 0, 0.5);
}

.telegram-loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 10px solid;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    border-color: #ae3737 rgba(255, 255, 255, 0) rgba(255, 255, 255, 0)
      rgba(255, 255, 255, 0);
  }

  33% {
    border-color: #ae3737 #ae3737 rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  }

  66% {
    border-color: #ae3737 #ae3737 #ae3737 rgba(255, 255, 255, 0);
  }

  100% {
    border-color: #ae3737 #ae3737 #ae3737 #ae3737;
  }
}

.content {
  display: flex;
  flex-direction: column;
  padding: 24px 16px 60px 16px;
  margin: 0 auto;
  gap: 40px;
  max-width: 986px;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 415px;
  width: 100%;
}
.top-text {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.features {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.features span {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 16px;
  line-height: 22px;
}
.features .check-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 4px;
}
.top-text h3 {
  font-family: 'Lora', sans-serif;
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
}
.price-row {
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: #000000;
}
.old-price {
  color: #aaaaaa;
  text-decoration: line-through;
}
.features span {
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  gap: 12px;
}

@media screen and (min-width: 1024px) {
  .content {
    flex-direction: row;
    justify-content: space-between;
    padding: 52px 0px 194px 0px;
  }

  .text-wrapper {
    gap: 36px;
    flex: 1 1 0;
  }
  .newLoginPayment {
    flex: 1 1 0;
  }
  .top-text {
    gap: 12px;
  }
  .top-text h3 {
    font-size: 32px;
    line-height: 52px;
  }
  .price-row {
    font-size: 24px;
    line-height: 26px;
  }
}
</style>
