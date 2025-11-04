<template>
  <div class="login-container">
    <div class="login-wrapper">
      <p v-show="!loggedIn" class="">Unesite podatke</p>
      <div id="login" class="login-content">
        <div
          v-show="!loggedIn"
          class="full flex flex-responsive remp-miniboxes"
        >
          <div class="full flex loginContainer">
            <div class="emailInput">
              <input
                id="pretplata-email"
                v-model="internalEmail"
                type="text"
                class="full remp"
                placeholder="Vaša email adresa"
                name="email"
              />
              <p v-show="!showPassword" class="under-pretplata-email">
                Ukoliko niste registrirani korisnik, na navedenu email adresu
                ćete zaprimiti pristupne podatke.
              </p>
              <input
                v-if="showPassword"
                id="pretplata-password"
                v-model="internalPassword"
                type="password"
                class="full remp-new-input"
                placeholder="Upišite lozinku"
                name="password"
              />
            </div>
            <p class="remp-mini-text center-text faded iliText">ili</p>
            <div class="flex relative loginBtns">
              <div class="btnContainer google">
                <a
                  href="http://pretplata.telegram.hr/users/google/sign?url=https://www.telegram.hr/pretplata/black-friday"
                  class="full center remp-social-logbtn animate"
                >
                  <!-- <font-awesome-icon :icon="['fab', 'google']" /> -->
                  <img
                    src="@/assets/img/google-logo.svg"
                    alt="Google Logo"
                    class="google-logo"
                    width="25"
                    height="8"
                  />
                  <i class="fa-brands fa-google"></i>
                  Google
                </a>
              </div>
              <div class="btnContainer facebook">
                <a
                  href="https://pretplata.telegram.hr/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=https://www.telegram.hr/pretplata/black-friday"
                  class="full center remp-social-logbtn animate"
                >
                  <font-awesome-icon
                    :icon="['fab', 'facebook-f']"
                    class="fb-fill"
                  />
                  <i class="fa-brands fa-facebook-f"></i>
                  Facebook
                </a>
              </div>

              <p class="full remp-mini-text center-text faded hide">
                Privremeno ćemo vas preusmjeriti na stranicu odabranog davatelja
                usluga kako bi povezali račune.
              </p>
            </div>
            <button
              v-if="showPassword"
              class="full newbtn huge-newbtn center-text clickable"
              @click="$emit('login')"
            >
              Prijavite se
            </button>
          </div>
        </div>
        <div class="flex termsContainer">
          <div class="promo-and-terms-wrapper">
            <div style="display: none" class="promo-wrapper">
              <span>Imate li promo kod?</span>
              <div class="toggle-container">
                <span>Ne</span>

                <button
                  type="button"
                  class="toggle"
                  :class="{ 'is-on': promo }"
                  @click="promo = !promo"
                >
                  <span class="thumb" />
                </button>

                <span>Da</span>
              </div>
              <div v-if="promo" class="promo-input-wrapper">
                <input
                  type="text"
                  placeholder="Promo kod"
                  class="promo-input"
                  v-model="promoCode"
                />
                <button class="apply-btn" @click="applyPromo">Primijeni</button>
              </div>
            </div>
            <div class="terms-wrapper">
              <div class="">
                <input
                  id="terms"
                  v-model="internalTerms"
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
              <div class="">
                <input
                  id="privacy"
                  v-model="internalPrivacy"
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
          </div>
          <div class="pack-duration">
            <h3 class="pack-duration-title">Odaberite način plaćanja</h3>
            <div class="duration-options">
              <div class="full relative flex">
                <input
                  id="pretplata-kartica"
                  v-model="internalPayment"
                  type="radio"
                  name="pretplata-placanje"
                  class="hide"
                  value="trustpay_recurrent"
                />
                <label for="pretplata-kartica" class="animate clickable">
                  <div class="remp-radio-indicator center">
                    <div class="outer-circle">
                      <div
                        v-if="payment === 'trustpay_recurrent'"
                        class="inner-circle"
                      ></div>
                    </div>
                  </div>
                  <div class="radio-label">
                    <div class="card-wrapper">
                      <span>Kartica</span>
                      <div class="card-icons">
                        <img src="@/assets/img/mastercard.svg" alt="" />
                        <img src="@/assets/img/visa.svg" alt="" />
                        <img src="@/assets/img/apple-pay.svg" alt="" />
                        <img src="@/assets/img/google-pay.svg" alt="" />
                      </div>
                    </div>
                    <p class="description">
                      Visa, Mastercard, Apple Pay i Google Pay
                    </p>
                  </div>
                </label>
              </div>

              <div class="full relative flex">
                <input
                  id="pretplata-uplata"
                  v-model="internalPayment"
                  type="radio"
                  name="pretplata-placanje"
                  class="hide"
                  value="bank_transfer"
                />
                <label for="pretplata-uplata" class="animate clickable">
                  <div class="remp-radio-indicator center">
                    <div class="outer-circle">
                      <div
                        v-if="payment === 'bank_transfer'"
                        class="inner-circle"
                      ></div>
                    </div>
                  </div>
                  <div class="radio-label">
                    <div class="card-wrapper">
                      <span>Bankovna uplata</span>
                      <div class="card-icons">
                        <img src="@/assets/img/bank-transfer.svg" alt="" />
                      </div>
                    </div>
                    <p class="description">
                      Generirat ćemo uplatnicu s podacima za plaćanje
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <client-only>
      <form
        id="payment-form"
        class="full flex"
        method="post"
        :action="`/crm/sales-funnel/sales-funnel-frontend/submit?referer=${$store.getters['pretplata/link']}`"
      >
        <input type="hidden" name="allow_redirect" value="1" />
        <input type="hidden" name="funnel_url_key" :value="url_key" />
        <input
          type="hidden"
          name="subscription_type"
          :value="subscription_type"
        />
        <input type="hidden" name="payment_gateway" :value="payment" />
        <input type="hidden" name="price" :value="price" />
        <input type="hidden" name="auth" value="1" />
        <input type="hidden" name="email" :value="email" />
        <input
          id="voucher_log_id"
          type="hidden"
          name="payment_metadata[voucher_log_id]"
          :value="voucher_log_id"
        />
        <input
          id="voucher_code"
          type="hidden"
          name="payment_metadata[voucher_code]"
          :value="promo_code"
        />
        <p
          v-if="discount"
          class="full barlow remp-mini-text smaller-text center-text column-mini-top-pad column-mini-bottom-pad"
        >
          Ostvarili ste {{ discount }}€ popusta
        </p>
        <div
          v-if="!buyableComputed"
          class="full newbtn huge-newbtn center-text clickable locked-newbtn"
        >
          Dovršite kupnju
          {{ totalPrice ? 'za ' + totalPrice + '€' : '' }}
        </div>
        <div
          v-if="!loggedIn && canLogIn"
          class="full barlow remp-mini-text center-text"
        >
          Molimo da se prijavite kako bi dovršili kupnju
        </div>
        <template v-else>
          <div
            v-if="!buyableComputed"
            class="full barlow remp-mini-text center-text"
          >
            Ispunite sve korake iznad kako bi dovršili kupnju.
          </div>
          <button
            v-if="buyableComputed"
            class=""
            @click.prevent="$emit('submit')"
          >
            Dovršite kupnju
            {{ totalPrice ? 'za ' + totalPrice + '€' : '' }}
          </button>
        </template>
        <!--
        <p class="full remp-mini-text center-text">
          Pretplatu možete otkazati u bilo kojem trenutku. Pretplata se
          automatski obnavlja.
        </p>
        -->
        <p v-if="show_msg" class="full remp-mini-text center-text red-text">
          {{ show_msg }}
        </p>
      </form>
    </client-only>
    <client-only>
      <!-- Chatbot Component -->
      <Chatbot />
    </client-only>
    <iframe id="TrustPayFrame" :src="iframeUrl"></iframe>
  </div>
</template>

<script>
export default {
  name: 'PretplataCheckoutBlackFriday',
  props: {
    period: String,
    payment: String,
    pack: String,
    email: String,
    password: String,
    loggedIn: Boolean,
    showPassword: Boolean,
    terms: Boolean,
    privacy: Boolean,
    promo_code: String,
    promo_error: String,
    discount: [String, Number],
    totalPrice: String,
    buyable: Boolean,
    canLogIn: Boolean,
    voucher_log_id: [String, Number],
    url_key: String,
    subscription_type: String,
    price: [String, Number],
  },
  data() {
    return {
      promo: false,
      promoCode: this.promo_code || '',
      show_msg: '',
      loading: false,
      iframeUrl: '',
    }
  },
  computed: {
    internalPassword: {
      get() {
        return this.password
      },
      set(val) {
        this.$emit('update:password', val)
      },
    },
    buyableComputed() {
      return (
        this.internalEmail &&
        this.internalPayment &&
        this.internalPrivacy &&
        this.internalTerms
      )
    },
    durationOptions() {
      return [
        {
          value: 'pretplata-godisnje',
          title: 'Godišnja pretplata (42% popusta)',
          description:
            this.pack === 'pretplata-premium'
              ? '208€ za godinu dana unaprijed'
              : '166€ za godinu dana unaprijed',
        },
        {
          value: 'pretplata-mjesecno',
          title: '4 tjedna (30% popusta)',
          description:
            this.pack === 'pretplata-premium' ? '20,99€/mj' : '16,79€/mj',
        },
      ]
    },
    paymentMethods() {
      return [
        {
          value: 'trustpay_recurrent',
          title: 'Kartica',
          note: 'Visa, Mastercard, Apple Pay i Google Pay',
        },
        {
          value: 'bank_transfer',
          title: 'Bankovna uplata',
          note: 'Generirat ćemo uplatnicu s podacima za plaćanje',
        },
      ]
    },

    internalEmail: {
      get() {
        return this.email
      },
      set(val) {
        this.$emit('update:email', val)
      },
    },
    internalPeriod: {
      get() {
        return this.period
      },
      set(val) {
        this.$emit('update:period', val)
      },
    },
    internalTerms: {
      get() {
        return this.terms
      },
      set(val) {
        this.$emit('update:terms', val)
      },
    },
    internalPrivacy: {
      get() {
        return this.privacy
      },
      set(val) {
        this.$emit('update:privacy', val)
      },
    },
    internalPayment: {
      get() {
        return this.payment
      },
      set(val) {
        this.$emit('update:payment', val)
      },
    },
    internalPromo: {
      get() {
        return this.promo_code
      },
      set(val) {
        this.$emit('update:promo_code', val)
      },
    },
  },
  methods: {
    applyPromo() {
      if (this.promoCode.trim()) {
        this.$emit('apply-promo', this.promoCode.trim())
      }
    },
  },
}
</script>

<style scoped>
#TrustPayFrame {
  height: 0;
}
.loginBtns {
  flex-direction: row;
  gap: 8px;
  width: 100%;
}
.loginBtns .btnContainer {
  flex: 1;
}
.loginBtns .remp-social-logbtn {
  width: 100%;
}
.pretplata-checkout > div {
  gap: 28px;
  display: flex;
  flex-direction: column;
}
.check > svg {
  fill: white;
}
/* PAYMENT WRAPPER */
.pack-payment-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  border-top: 1px solid #b5b5b5;
  border-bottom: 1px solid #b5b5b5;
}
.pack-duration {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.pack-duration .duration-options {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.pack-duration-title {
  font-family: Barlow, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #cacaca;
}
.radio-label {
  width: 100%;
  margin-left: 36px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.card-wrapper {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
}
.card-icons {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}
.card-icons img {
  max-width: 26px;
}

.card-wrapper span {
  font-family: 'Barlow', serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: white;
}
.radio-label .title > span {
  font-weight: 600;
  color: #ae3737;
}
.radio-label .description {
  font-family: 'Barlow';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #cacaca;
}
.outer-circle {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner-circle {
  background-color: white !important;
  border: 6px solid black !important;
  width: 9px !important;
  height: 9px !important;
}

.iliText {
  margin: 0px;
}
/* LOGIN WRAPPER */
.login-container {
  font-family: 'Barlow', sans-serif;
  border-top: 1px solid #8a8a8a;
  display: flex;
  flex-direction: column;
  gap: 44px;
}
.login-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 28px;
}
.login-wrapper p {
  font-weight: 500;
  color: #cacaca;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
}
.login-subtitle {
  display: none;
}
.emailInput {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.emailInput p {
  font-size: 12px;
  display: block;
  line-height: 16px;
}

.loginContainer {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.loginContainer input {
  align-items: center;
  padding: 14px 16px 14px 20px;
  background: white;
  border: 1px solid #dfdfdf;
  border-radius: 6px;
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5f5f5f;
}
.remp-new-input {
  margin-bottom: 0px;
}
.remp-social-logbtn {
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  background: white;
  border-radius: 8px;
  padding: 14px;
  font-size: 16px;
  line-height: 24px;
  height: 52px;
}
.termsContainer {
  flex-direction: column-reverse;
  align-items: center;
  gap: 22px;
  padding-top: 22px;
}
.termsContainer > div {
  width: 100% !important;
}
.promo-and-terms-wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  gap: 24px;
  width: 100%;
  border-top: 1px solid #8a8a8a;
}
.promo-and-terms-wrapper span {
  font-family: 'Barlow';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: white;
}
.termsContainer span .highlight-text {
  color: white;
  font-weight: 600;
}
.terms-wrapper {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.promo-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.promo-wrapper span {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #cacaca;
}
.promo-input {
  padding: 11px 16px 11px 20px;
  width: 100%;
  max-width: 222px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 8px;
}
.apply-btn {
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #902e2e;
  padding: 0px;
  position: relative;
  left: -86px;
}
.toggle-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.toggle {
  width: 48px;
  height: 25px;
  border: none;
  border-radius: 999px;
  background-color: #d9d9d9;
  position: relative;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.toggle.is-on {
  background-color: #ae3737;
}

.thumb {
  width: 19px;
  height: 19px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: left 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.toggle.is-on .thumb {
  left: 26px;
}
#payment-form button,
#payment-form .locked-newbtn {
  width: 100%;
  padding: 14px;
  color: white;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 600;
  background-color: #37ae37;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  border: none;
  margin-bottom: 20px;
}
#payment-form .locked-newbtn {
  background-color: #b5b5b5;
}
#login .remp-miniboxes {
  border-bottom: 1px solid #b5b5b5;
  padding-bottom: 28px;
}
.remp-mini-text {
  font-family: 'Barlow';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #5f5f5f;
}
.promo-input-wrapper {
  display: flex;
}
.huge-newbtn {
  padding: 14px;
  border-radius: 6px;
  display: none;
  margin-top: 6px;
  display: block;
}

.promo-input-wrapper input[type='text'] {
  width: 100%;
  padding: 12px 100px 12px 15px;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  font-size: 15px;
  background-color: white;
  color: #333;
  outline: none;
  transition: border-color 0.2s;
}

.promo-input-wrapper input[type='text']::placeholder {
  color: #999;
}
.telegram-overlay {
  position: fixed;
  top: 0;
  z-index: 100;
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
@media (min-width: 1024px) {
  .huge-newbtn {
    margin-top: 0px;
  }

  .termsContainer {
    flex-direction: column-reverse;
    gap: 28px;
    padding-top: 28px;
    justify-content: space-between;
  }

  .terms-wrapper {
    gap: 20px;
  }
  .promo-input-wrapper {
    max-width: 300px;
  }
  .login-container {
    gap: 28px;
  }
  .loginContainer .emailInput {
    flex-direction: row;
    flex: 1;
    width: 100%;
  }
  .pack-payment-wrapper {
    flex-direction: row;
  }
  .pack-duration {
    padding-right: 50px;
    gap: 24px;
  }
  .pack-options {
    gap: 28px;
  }
  .loginBtns {
    gap: 16px;
  }
  .login-container {
    padding: 0px;
  }
}
</style>
