<template>
  <div class="gift-popup center">
    <div
      ref="dialog"
      class="gift-popup-box flex"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gift-popup-title"
    >
      <div class="gift-popup-main flex">
        <img
          src="/img/gift/gift-icon.svg"
          width="80"
          height="80"
          alt=""
          class="gift-popup-icon"
        />
        <div class="gift-popup-text full">
          <h2 id="gift-popup-title" class="gift-popup-title">
            <span v-if="gifterName" class="gift-popup-line">
              Korisnik <b>{{ gifterName }}</b>
            </span>
            <b v-else class="gift-popup-line">{{ fallbackName }}</b>
            <span class="gift-popup-line">Vam poklanja ovaj članak</span>
          </h2>
          <p class="gift-popup-subtitle">
            Besplatno se registrirajte za čitanje
          </p>
        </div>
        <button
          type="button"
          class="gift-popup-button clickable"
          @click="openLogin('register')"
        >
          Registrirajte se
        </button>
      </div>
      <p class="gift-popup-login full">
        Već imate račun?
        <button
          type="button"
          class="gift-popup-login-link clickable"
          @click="openLogin('login')"
        >
          Prijava
        </button>
      </p>
    </div>
  </div>
</template>

<script>
/*
 * Shown to a logged-out recipient of a valid gift link. It cannot be
 * dismissed: the only way past it is logging in or registering, after
 * which the parent stops rendering it and the article is readable in place.
 */
export default {
  name: 'GiftPopup',
  data() {
    return { previousOverflow: null }
  },
  computed: {
    gifterName() {
      return this.$store.getters['gifts/gifterName'](this.$route)
    },
    fallbackName() {
      return this.$route.path.includes('telesport')
        ? 'Pretplatnik Telesporta'
        : 'Pretplatnik Telegrama'
    },
  },
  mounted() {
    this.lockScroll()
    // Move focus into the dialog without a visible ring on load.
    this.$refs.dialog.focus({ preventScroll: true })
  },
  beforeDestroy() {
    this.unlockScroll()
  },
  methods: {
    openLogin(screen) {
      // No reload: the article unlocks in place once the user is set.
      this.$store.dispatch('user/login', { screen, shouldReload: false })
    },
    lockScroll() {
      const html = document.documentElement
      this.previousOverflow = {
        html: html.style.overflow,
        body: document.body.style.overflow,
      }
      html.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    },
    unlockScroll() {
      if (!this.previousOverflow) {
        return
      }
      document.documentElement.style.overflow = this.previousOverflow.html
      document.body.style.overflow = this.previousOverflow.body
      this.previousOverflow = null
    },
  },
}
</script>

<style scoped>
.gift-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Above the sticky article bars; the login modal sits above this. */
  z-index: 10010;
  background-color: rgba(128, 128, 128, 0.5);
  padding: 24px;
}
.gift-popup-box {
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 546px;
  max-height: 100%;
  overflow-y: auto;
  padding: 28px 64px 40px;
  border-radius: 8px;
  background-color: #fdf6ef;
  color: #111;
  outline: none;
}
.gift-popup-main {
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}
.gift-popup-icon {
  display: block;
  flex-shrink: 0;
}
.gift-popup-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  word-break: break-word;
}
.gift-popup-title {
  margin: 0;
  font-family: 'Lora', serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  color: inherit;
}
.gift-popup-title b {
  font-weight: 700;
}
.gift-popup-line {
  display: block;
}
.gift-popup-subtitle {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #555;
}
.gift-popup-button {
  height: 48px;
  padding: 12px 20px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 12px;
  background-color: #217613;
  box-shadow: inset 0 3px 4px -3px rgba(255, 255, 255, 0.56),
    inset 0 0 8px -2px rgba(255, 255, 255, 0.48),
    0 1px 1px -0.5px rgba(0, 0, 0, 0.03), 0 3px 3px -1.5px rgba(0, 0, 0, 0.03);
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #fff;
  white-space: nowrap;
  transition: background-color 0.15s ease;
}
.gift-popup-button:hover {
  background-color: #1b6310;
}
.gift-popup-button:focus-visible,
.gift-popup-login-link:focus-visible {
  outline: 2px solid #217613;
  outline-offset: 2px;
}
.gift-popup-login {
  margin: 0;
  /* Trim to cap height / baseline, as in the design (where supported). */
  text-box: trim-both cap alphabetic;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #555;
}
.gift-popup-login-link {
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-weight: 600;
  color: inherit;
  text-decoration: underline;
}

.dark-mode .gift-popup-box {
  border: 1px solid #c8c8c8;
  background-color: #121212;
  color: #fff;
}
.dark-mode .gift-popup-subtitle,
.dark-mode .gift-popup-login {
  color: #c8c8c8;
}

@media screen and (max-width: 767px) {
  .gift-popup-box {
    max-width: 342px;
    padding: 28px 24px;
  }
  .gift-popup-title {
    font-size: 20px;
    line-height: 28px;
  }
  .gift-popup-subtitle {
    font-size: 16px;
    line-height: 24px;
  }
  .gift-popup-login {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
