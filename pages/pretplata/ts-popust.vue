<template>
  <div>
    <div class="hero">
      <div class="hero-inner">
        <div class="hero-left">
          <img
            class="hero-logo"
            src="@/assets/img/telesport_logo_white.svg"
            alt="Telesport"
          />
          <h1 class="hero-title">
            Pratite Svjetsko prvenstvo uz ekskluzivnu ponudu Telesport
            pretplate!
          </h1>
        </div>
        <img
          class="hero-image"
          src="@/assets/img/pretplata/telesport/svjetsko.png"
          alt=""
        />
      </div>
    </div>
    <div class="content">
      <div class="plan-info">
        <div class="plan-heading">
          <h2>Telesport pretplata</h2>
          <p class="plan-price">
            <span class="old-price">39,00€</span>
            <span class="new-price">9,99€</span>
            <span class="price-suffix">/godišnje</span>
          </p>
        </div>
        <ul class="plan-features">
          <li v-for="(feature, index) in features" :key="index">
            <span class="check-icon">
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            </span>
            <span>{{ feature }}</span>
          </li>
        </ul>
      </div>
      <div class="plan-payment">
        <PaymentFlow
          subscription-code="telesport_svjetsko_prvenstvo"
          plan-name="Telesport pretplata"
          :amount="9.99"
          funnel-url-key="telesport-svjetsko-2"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import PaymentFlow from '~/components/Elements/Pretplata/PaymentFlow.vue'
import Footer from '~/components/Elements/Pretplata/Footer.vue'

export default {
  name: 'SvjetskoPage',
  components: { PaymentFlow, Footer },
  data() {
    return {
      features: [
        'Neograničeno čitanje Telesporta i pristup arhivi svih članaka',
        'Ekskluzivni newsletteri s posebnim analizama nagrađivanih autora',
        '10 poklon članaka mjesečno',
        'Posebni popusti i pogodnost Telegram Kluba',
      ],
    }
  },
  head() {
    return {
      title: 'Telesport Svjetsko - Pretplata',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Pratite Svjetsko prvenstvo uz ekskluzivnu ponudu Telesport pretplate.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Pratite Svjetsko prvenstvo uz ekskluzivnu ponudu Telesport pretplate.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telesport Svjetsko - Pretplata',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/ts-popust',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/telesport_svjetsko_share.png',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/ts-popust',
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
.hero {
  width: 100%;
  background: #000 url('@/assets/img/pretplata/telesport/bg-svjetsko.png')
    no-repeat center center;
  background-size: cover;
  padding: 40px 16px 0;
}
.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}
.hero-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  text-align: center;
  order: 1;
}
.hero-logo {
  height: 50px;
}
.hero-title {
  margin: 0;
  max-width: 300px;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  color: #f9f9fa;
}
.hero-image {
  order: 2;
  width: 100%;
  max-width: 438px;
  height: auto;
}

@media (min-width: 1024px) {
  .hero {
    padding: 0px 32px;
  }
  .hero-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
  .hero-left {
    align-items: flex-start;
    text-align: left;
    gap: 70px;
    max-width: 447px;
    order: initial;
  }
  .hero-title {
    max-width: none;
    font-size: 36px;
  }
  .hero-image {
    order: initial;
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 100%;
  padding: 32px 16px 60px;
  margin: 0 auto;
  margin-top: -85px;
  z-index: 2;
  position: relative;
  background: #fcf1e7;
}

.plan-info {
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  max-width: 340px;
}
.plan-heading {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
}
.plan-heading h2 {
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 24px;
  color: #000;
  margin: 0;
}
.plan-price {
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: 20px;
  color: #000;
  margin: 0;
}
.old-price {
  text-decoration: line-through;
  color: #9f9f9f;
}
.new-price {
  font-size: 24px;
  font-weight: 700;
}

.plan-features {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.plan-features li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  color: #000;
  line-height: 24px;
}
.check-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #8d5b31;
  color: #fff;
  font-size: 10px;
}

.plan-payment {
  display: flex;
  justify-content: center;
  width: 100%;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .content {
    gap: 60px;
    padding: 32px 32px 60px;
  }
}

@media (min-width: 1024px) {
  .content {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 80px;
    max-width: 1000px;
    padding: 60px 32px 80px;
    margin-top: 0;
  }
  .plan-info {
    align-items: flex-start;
    text-align: left;
    padding-top: 20px;
    max-width: 415px;
  }
  .plan-heading {
    align-items: flex-start;
    text-align: left;
    width: 340px;
  }
  .plan-heading h2 {
    font-size: 32px;
  }
  .plan-price {
    font-size: 24px;
  }
}
</style>
