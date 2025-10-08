<template>
  <div>
    <div class="pack-payment-wrapper">
      <!-- Trajanje pretplate -->
      <div class="pack-duration">
        <span class="pack-duration-title">Odaberite trajanje pretplate</span>
        <div class="duration-options">
          <div class="full relative flex">
            <input
              id="pretplata-godisnje"
              v-model="term"
              type="radio"
              name="pretplata-termin"
              class="hide"
              value="pretplata-godisnje"
            />
            <label for="pretplata-godisnje" class="animate clickable">
              <div class="remp-radio-indicator center">
                <div class="outer-circle">
                  <div
                    v-if="term === 'pretplata-godisnje'"
                    class="inner-circle"
                  ></div>
                </div>
              </div>
              <div class="radio-label">
                <p class="title">
                  Godišnja pretplata (<span class="highlight-text">42% </span
                  >popusta)
                </p>
                <p class="full description">
                  {{ interimYearPrice }}€ za godinu dana unaprijed
                </p>
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
            <label for="pretplata-mjesecno" class="animate clickable">
              <div class="remp-radio-indicator center">
                <div class="outer-circle">
                  <div
                    v-if="term === 'pretplata-mjesecno'"
                    class="inner-circle"
                  ></div>
                </div>
              </div>
              <div class="radio-label">
                <p class="title">
                  4 tjedna (<span class="highlight-text">30% </span>popusta)
                </p>

                <p class="description">
                  {{ interimMonthPrice }}€/mj, možete otkazati u bilo kojem
                  trenutku
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- Načini plaćanja -->
      <div class="pack-duration">
        <span class="pack-duration-title">Odaberite način plaćanja</span>
        <div class="duration-options">
          <div class="full relative flex">
            <input
              id="pretplata-kartica"
              v-model="payment"
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
                <p class="title">Kartica</p>
                <p class="remp-special-note">
                  Visa, Mastercard, Apple Pay i Google Pay
                </p>
              </div>
            </label>
          </div>

          <div class="full relative flex">
            <input
              id="pretplata-uplata"
              v-model="payment"
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
                <p class="title">Bankovna uplata</p>
                <p class="remp-special-note">
                  Generirat ćemo uplatnicu s podacima za plaćanje
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!loggedIn" class="login-wrapper">
      <p class="login-subtitle">Unesite podatke</p>
      <div id="login" class="login-content">
        <div class="full flex flex-responsive remp-miniboxes">
          <div v-show="!loggedIn" class="full flex loginContainer">
            <div class="emailInput">
              <input
                id="pretplata-email"
                v-model="email"
                type="text"
                class="full remp"
                placeholder="Vaša email adresa"
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
              <small v-show="!showPassword" class="under-pretplata-email"
                >Ukoliko niste registrirani korisnik, na navedenu email adresu
                ćete zaprimiti pristupne podatke.</small
              >
              <button
                v-if="showPassword"
                class="full newbtn huge-newbtn center-text clickable"
                @click="login"
              >
                Prijavite se
              </button>
            </div>
            <p class="remp-mini-text center-text faded iliText">ili</p>
            <div class="flex relative loginBtns">
              <div class="btnContainer google">
                <a
                  href="http://pretplata.telegram.hr/users/google/sign?url=https://www.telegram.hr/pretplata/telegram-family"
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
                  href="https://pretplata.telegram.hr/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=https://www.telegram.hr/pretplata/telegram-family"
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
          </div>
        </div>
        <div class="flex termsContainer">
          <div class="">
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
          <div class="">
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
          <div class="promo-input-wrapper">
            <input type="text" placeholder="Promo kod" />
            <button type="button" @click.prevent="checkPromo">Primjeni</button>

            <p v-show="promo_error" class="">
              {{ promo_error }}
            </p>
          </div>
        </div>
      </div>
      <div class="half flex flex-responsive remp-miniboxes">
        <div
          v-if="payment === 'trustpay_recurrent'"
          id="pretplata-kartica-broj"
          class="full flex relative"
        >
          <p class="full remp-mini-text center-text faded hide">
            Vaši podaci za plaćanje biti će enkriptirani i sigurno spremljeni po
            najvišim sigurnosnim standardima.
          </p>
        </div>
        <div v-if="payment === 'pretplata-uplata'" class="full flex relative">
          <p class="full smaller-text faded">Tekst za bankovnu uplatu.</p>
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
          class="full barlow remp-mini-text smaller-text center-text column-mini-top-pad"
        >
          Ostvarili ste {{ price - discount }}€ popusta
        </p>
        <div
          v-if="!buyable"
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
          <div v-if="!buyable" class="full barlow remp-mini-text center-text">
            Ispunite sve korake iznad kako bi dovršili kupnju.
          </div>
          <button v-if="buyable" class="" @click.prevent="submit">
            Dovršite kupnju
            {{ totalPrice ? 'za ' + totalPrice + '€' : '' }}
          </button>
        </template>
        <p class="full remp-mini-text center-text">
          Pretplatu možete otkazati u bilo kojem trenutku. Pretplata se
          automatski obnavlja.
        </p>
        <p v-if="show_msg" class="full remp-mini-text center-text red-text">
          {{ show_msg }}
        </p>
      </form>
    </client-only>
    <client-only>
      <!-- Chatbot Component -->
      <Chatbot />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'CheckoutWrapper',
  props: {
    term: String,
    payment: String,
    pack: String,
    email: String,
    password: String,
    showPassword: Boolean,
    loggedIn: Boolean,
    terms: Boolean,
    privacy: Boolean,
    promo_code: String,
    promo_error: String,
    discount: [String, Number],
    interimMonthPrice: String,
    interimYearPrice: String,
    totalPrice: String,
  },
  data() {
    return {
      show_msg: '',
      loading: false,
      iframeUrl: '',
    }
  },
  computed: {
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
  },
}
</script>

<style scoped>
#TrustPayFrame {
  height: 0;
}
.loginBtns {
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.loginBtns .btnContainer {
  width: 100%;
}
.loginBtns .remp-social-logbtn {
  width: 100%;
}
.pretplata-checkout > div {
  gap: 28px;
  display: flex;
  flex-direction: column;
}
/* PAYMENT WRAPPER */
.pack-payment-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 28px 0px;
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
  font-size: 14px;
  line-height: 22px;
  color: #5f5f5f;
}
.radio-label {
  width: 100%;
  margin-left: 36px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.radio-label .title {
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: black;
}
.radio-label .title > span {
  font-weight: 600;
  color: #ae3737;
}
.radio-label .description {
  font-family: 'Barlow';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #5f5f5f;
}
.outer-circle {
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

/* LOGIN WRAPPER */
.login-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.login-subtitle {
  display: none;
}

.loginContainer {
  display: flex;
  flex-direction: column;
}
.loginContainer input {
  align-items: center;
  padding: 12px 16px 12px 20px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #dfdfdf;
  border-radius: 6px;
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5f5f5f;
  margin-bottom: 12px;
}
.loginContainer p {
  margin-top: 14px;
}
.remp-social-logbtn {
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  background: rgba(249, 244, 239, 1);
  border-radius: 4px;
  padding: 10px 14px;
  width: 200px;
  height: 48px;
}
.termsContainer {
  flex-direction: column-reverse;
  align-items: center;
  gap: 22px;
}
.termsContainer > div {
  width: 100% !important;
}
.termsContainer span {
  font-family: 'Barlow';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}
.termsContainer span .highlight-text {
  color: #000000;
  font-weight: 600;
}
.promo-input-wrapper button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background-color: transparent;
  color: #902e2e;
  font-family: 'Barlow', sans-serif;
  border: none;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;
}
.promo-input-wrapper {
  position: relative;
}
.promo-input-wrapper p {
  position: absolute;
}
#payment-form button,
#payment-form .locked-newbtn {
  width: 100%;
  padding: 14px;
  color: white;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 600;
  background-color: #ae3737;
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
  margin-bottom: 28px;
  padding-bottom: 32px;
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
.promo-input-wrapper input[type='text'] {
  width: 100%;
  padding: 12px 100px 12px 15px;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.6);
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
  .iliText {
    margin-top: -30px;
  }

  .termsContainer {
    flex-direction: row;
    gap: 36px;
    justify-content: space-between;
  }
  .termsContainer > div {
    width: unset !important;
  }
  .promo-input-wrapper {
    max-width: 300px;
  }
  .loginContainer {
    flex-direction: row;
    gap: 40px;
  }
  .loginContainer .emailInput {
    flex: 1;
    max-width: 350px;
  }
  .pack-payment-wrapper {
    flex-direction: row;
  }
  .pack-duration {
    padding-right: 50px;
  }
  .loginBtns {
    width: 50%;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
</style>
