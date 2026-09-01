<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full main paywall"
      :class="{ 'paywall--telesport': isTelesport }"
      data-nosnippet
    >
      <div class="paywall-divider">
        <span class="paywall-chip">{{ topBar }}</span>
      </div>

      <div class="paywall-inner">
        <div class="paywall-message">
          <h3 class="paywall-title">{{ displayTitle }}</h3>
          <p class="paywall-subtitle">{{ displaySubtitle }}</p>
        </div>

        <img
          class="paywall-mockup"
          :src="mockupImage"
          :width="mockupSize.width"
          :height="mockupSize.height"
          alt=""
        />

        <div class="paywall-actions">
          <a :href="cta_link" class="paywall-action" @click.prevent="start">
            <button class="paywall-btn paywall-btn--primary">
              {{ cta_text }}
            </button>
          </a>
          <a
            v-if="canLogIn"
            href="https://pretplata.telegram.hr/sign/in"
            class="paywall-action"
            @click.prevent="login"
          >
            <button class="paywall-btn paywall-btn--secondary">
              {{ cta2_text }}
            </button>
          </a>
        </div>

        <div class="paywall-payments">
          <span class="paywall-card">
            <img src="@/assets/img/mastercard.svg" alt="Mastercard" />
          </span>
          <span class="paywall-card">
            <img src="@/assets/img/visa.svg" alt="Visa" />
          </span>
          <span class="paywall-card">
            <img src="@/assets/img/apple-pay.svg" alt="Apple Pay" />
          </span>
          <span class="paywall-card">
            <img src="@/assets/img/google-pay.svg" alt="Google Pay" />
          </span>
          <span class="paywall-card">
            <img src="@/assets/img/bank-transfer.svg" alt="Bankovna uplata" />
          </span>
        </div>

        <div v-if="showSms" class="paywall-sms">
          <span class="paywall-sms-badge">
            <img src="@/assets/img/paywall/sms-icon.svg" alt="" />
            {{ sms_badge }}
          </span>
          <p class="paywall-sms-text">
            <strong>{{ sms_text }}</strong>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="sms_instruction"></span>
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextRempNew',
  props: {
    // QA/preview only: forces the "logged in, no subscription" variant
    // (alternate subtitle, no "Imam pretplatu" button) without touching
    // real auth state. Never set in production usage.
    previewNoLogin: { type: Boolean, default: false },
  },
  data() {
    return {
      show: false,
      termId: false,
      title: null,
      subtitle: null,
      subtitle_user: null,
      topBar: 'Premium članak',
      feature1: null,
      feature2: null,
      feature3: null,
      feature4: null,
      telesport: false,
      softwall: false,
      cta_text: 'Pretplatite se',
      cta_link: 'https://telegram.hr/pretplata',
      // Only the label is campaign-editable; the login button always points
      // at sign-in (hardcoded in the template).
      cta2_text: 'Imam pretplatu',
      sms_show: null,
      sms_badge: 'Nova opcija plaćanja',
      sms_text: 'Pretplatite se putem SMS-a za 12,99€ mjesečno.',
      sms_instruction:
        'Pošaljite SMS s tekstom <strong>STANDARD</strong> na broj <strong>860866</strong>.',
    }
  },
  computed: {
    canLogIn() {
      if (this.previewNoLogin) {
        return false
      }
      return this.$store.getters['user/canLogIn']
    },
    isTelesport() {
      return this.telesport || this.$route.path.includes('telesport')
    },
    displayTitle() {
      if (this.title) {
        return this.title
      }
      return this.isTelesport
        ? 'Ovaj članak je dio pretplatničkog sadržaja Telesporta.'
        : 'Ovaj članak je dio pretplatničkog sadržaja Telegrama.'
    },
    displaySubtitle() {
      // Logged in without an active subscription gets its own copy and,
      // via canLogIn, loses the "Imam pretplatu" button.
      if (!this.canLogIn) {
        return (
          this.subtitle_user ||
          'Prijavljeni ste u korisnički račun bez aktivne pretplate. Otključajte neograničen pristup člancima i analizama, čitajte bez reklama i podržite neovisno novinarstvo.'
        )
      }
      return (
        this.subtitle ||
        'Otključajte neograničen pristup člancima i analizama, čitajte bez reklama i podržite neovisno novinarstvo.'
      )
    },
    showSms() {
      return this.sms_show === null ? !this.isTelesport : this.sms_show
    },
    mockupImage() {
      return this.isTelesport
        ? require('@/assets/img/paywall/ts-devices.webp')
        : require('@/assets/img/paywall/tg-devices.webp')
    },
    mockupSize() {
      return this.isTelesport
        ? { width: 621, height: 336 }
        : { width: 602, height: 354 }
    },
  },
  mounted() {
    window.addEventListener('remp_intext', this.load)
  },
  destroyed() {
    window.removeEventListener('remp_intext', this.load)
  },
  methods: {
    login() {
      this.$store.dispatch('user/login')
    },
    start() {
      this.$store.commit('pretplata/setLastArticle', this.$route.path)
      if (this.termId) {
        if (this.termId.includes('pretplata')) {
          this.$router.push(this.termId)
        } else {
          this.checkout(this.termId)
        }
      } else if (this.cta_link) {
        window.open(this.cta_link, '_blank')
      } else if (this.$route.path.includes('telesport')) {
        this.$router.push('/pretplata/telesport')
      } else {
        this.$router.push('/pretplata')
      }
    },
    load(e) {
      // Two campaigns (Telegram / Telesport) can overlap if their targeting
      // rules aren't mutually exclusive. Once the wall is up, ignore further
      // events so a late one can't swap the copy under the reader.
      if (this.show) {
        return
      }
      // Check if user has access to this specific content type
      if (this.$store.getters['user/hasContentAccess'](this.$route.path)) {
        return
      }
      if (e.detail) {
        // Every field falls back to its design default when the campaign
        // omits it, so an unedited payload still renders the Figma design.
        this.title = e.detail.title ?? this.title
        this.subtitle = e.detail.subtitle ?? this.subtitle
        this.subtitle_user = e.detail.subtitle_user ?? this.subtitle_user
        this.topBar = e.detail.topBar ?? this.topBar
        this.feature1 = e.detail.feature1 ?? this.feature1
        this.feature2 = e.detail.feature2 ?? this.feature2
        this.feature3 = e.detail.feature3 ?? this.feature3
        this.feature4 = e.detail.feature4 ?? this.feature4
        this.telesport = e.detail.telesport ?? this.telesport
        // cta1_* are the legacy names the live campaign still sends.
        this.cta_text = e.detail.cta_text ?? e.detail.cta1_text ?? this.cta_text
        this.cta_link = e.detail.cta_link ?? e.detail.cta1_link ?? this.cta_link
        this.cta2_text = e.detail.cta2_text ?? this.cta2_text
        this.sms_show = e.detail.sms_show ?? this.sms_show
        this.sms_badge = e.detail.sms_badge ?? this.sms_badge
        this.sms_text = e.detail.sms_text ?? this.sms_text
        this.sms_instruction = e.detail.sms_instruction ?? this.sms_instruction
      }
      this.triggerShow()
    },
    triggerShow() {
      if (this.show) {
        return
      }
      if (this.$route.query.gift_token) {
        return
      }
      const el = document.getElementById('piano-content')
      if (this.softwall) {
        this.show = true
        this.$emit('show')
      }
      if (el) {
        this.show = true
        if (!this.softwall) {
          el.parentNode.removeChild(el)
          document
            .querySelector('#article-content p:last-child')
            .classList.add('premium-fade-out')
        }
      }
    },
  },
}
</script>

<style scoped>
a {
  cursor: pointer;
}
.paywall {
  z-index: 20;
  display: block;
  max-width: none !important;
  position: relative;
  overflow: hidden;
  background: #fbefe4;
  border-bottom: 1px solid #efded0;
  padding: 0 0 40px 0;
}
.dark-mode .paywall {
  background: #212121;
  border-bottom-color: #373737;
}

/* Divider line with the centered "Premium članak" chip */
.paywall-divider {
  display: flex;
  align-items: center;
  margin: 0 16px 40px 16px;
}
.paywall-divider::before,
.paywall-divider::after {
  content: '';
  flex: 1 1 auto;
  height: 1px;
  background: #e4d5c6;
}
.dark-mode .paywall-divider::before,
.dark-mode .paywall-divider::after {
  background: #4a4a4a;
}
.paywall-chip {
  flex: 0 0 auto;
  background: #fbefe4;
  color: #747474;
  padding: 8px 14px;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.72px;
  text-transform: uppercase;
}
.dark-mode .paywall-chip {
  background: #212121;
  color: #b5b5b5;
}

.paywall-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 16px;
}
.paywall-message {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
  max-width: 703px;
}
.paywall-title {
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: black;
  margin: 0;
}
.dark-mode .paywall-title {
  color: white;
}
.paywall-subtitle {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #494949;
  margin: 0;
}
.dark-mode .paywall-subtitle {
  color: #b5b5b5;
}

.paywall-mockup {
  display: block;
  width: 100%;
  max-width: 390px;
  height: auto;
}

/* Buttons */
.paywall-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 357px;
}
.paywall-action {
  display: block;
  flex: 1 1 0;
  min-width: 0;
}
.paywall-btn {
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border-radius: 12px;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  cursor: pointer;
  box-shadow: inset 0px 3px 4px -3px rgba(255, 255, 255, 0.56),
    inset 0px 0px 8px -2px rgba(255, 255, 255, 0.48),
    0px 1px 1px -0.5px rgba(0, 0, 0, 0.03),
    0px 3px 3px -1.5px rgba(0, 0, 0, 0.03);
}
.paywall-btn--primary {
  background-color: #217613;
  color: white;
  border: none;
}
.paywall-btn--primary:hover {
  background-color: #1b5f0f;
}
.paywall-btn--secondary {
  background-color: white;
  color: black;
  border: 1px solid white;
}
.paywall-btn--secondary:hover {
  background-color: #f4f4f4;
}

/* Payment methods */
.paywall-payments {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.paywall-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38.5px;
  height: 26.4px;
  background: white;
  border: 0.55px solid #d9d9d9;
  border-radius: 6px;
  filter: drop-shadow(0px 0px 2.079px rgba(0, 0, 0, 0.07));
}

/* SMS payment block */
.paywall-sms {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 357px;
  padding: 16px 22px;
  margin-top: 4px;
  background: rgba(224, 204, 161, 0.23);
  border-radius: 12px;
  text-align: center;
}
.paywall-sms-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #fff3d9;
  border-radius: 4px;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.18px;
  color: #a27a06;
}
.paywall-sms-badge img {
  width: 16px;
  height: 16px;
}
.paywall-sms-text {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.12px;
  color: #212121;
  margin: 0;
}
.paywall-sms-text strong {
  font-weight: 600;
}
.dark-mode .paywall-sms-text {
  color: #ededed;
}

@media screen and (min-width: 1024px) {
  .paywall {
    background: linear-gradient(
      180deg,
      rgba(239, 222, 208, 0) 0%,
      #efded0 100%
    );
    padding-bottom: 56px;
  }
  .dark-mode .paywall {
    background: #212121;
  }
  .paywall-divider {
    max-width: 1172px;
    margin: 0 auto 44px auto;
  }
  .paywall-chip {
    background: #fbefe4;
    line-height: 28px;
  }
  .paywall-inner {
    gap: 20px;
  }
  .paywall-message {
    gap: 24px;
  }
  .paywall-title {
    font-size: 28px;
    line-height: 1.26;
  }
  .paywall-subtitle {
    font-size: 18px;
    line-height: 1.42;
  }
  .paywall-mockup {
    max-width: 597px;
  }
  .paywall-actions {
    flex-direction: row;
    gap: 22px;
    max-width: 733px;
  }
  .paywall-sms {
    max-width: 733px;
    flex-direction: column;
    margin-top: 8px;
  }
}
</style>
