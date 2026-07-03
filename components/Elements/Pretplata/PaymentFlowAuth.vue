<template>
  <div class="pf-card">
    <div class="pf-heading">
      <h2>Molimo ispunite podatke</h2>
      <p>za dovršavanje kupnje</p>
    </div>

    <div class="pf-switcher">
      <button
        type="button"
        class="pf-switcher-item"
        :class="{ active: mode === 'login' }"
        @click="setMode('login')"
      >
        Prijava
      </button>
      <button
        type="button"
        class="pf-switcher-item"
        :class="{ active: mode === 'register' }"
        @click="setMode('register')"
      >
        Registracija
      </button>
    </div>

    <form class="pf-form" @submit.prevent="submit">
      <div class="pf-fields">
        <input
          v-model="email"
          type="email"
          class="pf-input"
          placeholder="Vaša e-mail adresa"
          required
        />
        <input
          v-model="password"
          type="password"
          class="pf-input"
          placeholder="Lozinka"
          required
        />
        <input
          v-if="mode === 'register'"
          v-model="passwordConfirm"
          type="password"
          class="pf-input"
          placeholder="Potvrdite lozinku"
          required
        />

        <div class="pf-divider">
          <span></span>
          <p>ili</p>
          <span></span>
        </div>

        <div class="pf-social">
          <a
            :href="`https://pretplata.telegram.hr/users/google/sign?url=${redirectPath}`"
            class="pf-social-btn"
          >
            <img src="@/assets/img/google-logo.svg" alt="" />
            Google
          </a>
          <a
            :href="`https://pretplata.telegram.hr/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=${redirectPath}`"
            class="pf-social-btn"
          >
            <img src="@/assets/img/facebook.svg" alt="" />
            Facebook
          </a>
        </div>
      </div>

      <label v-if="mode === 'register'" class="checkbox pf-terms">
        <input
          v-model="acceptsTerms"
          autocomplete="off"
          class="checkbox-input"
          type="checkbox"
          required
        />
        <span class="checkmark"></span>
        <p class="checkbox-label">
          Prijavom na Telegram.hr izjavljujem da sam pročitao/la i da sam u
          cjelosti suglasna/a s
          <span
            ><a
              href="https://www.telegram.hr/stranica/uvjeti-koristenja/"
              target="_blank"
              >Uvjetima korištenja</a
            ></span
          >
          portala Telegram.hr
        </p>
      </label>

      <p v-if="localError" class="pf-error">{{ localError }}</p>
      <p v-if="storeError" class="pf-error">{{ storeError }}</p>

      <TgButton type="submit" block :disabled="loading">
        <span v-if="loading">Molimo pričekajte...</span>
        <span v-else>{{
          mode === 'login' ? 'Nastavite' : 'Registrirajte se'
        }}</span>
      </TgButton>
    </form>

    <div class="pf-footer">
      <p>Ispunite sve korake kako bi dovršili kupnju.</p>
      <p>
        Pretplatu možete otkazati u bilo kojem trenutku. Pretplata se automatski
        obnavlja.
      </p>
      <div class="pf-ssl">
        <svg
          class="pf-lock-icon"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 7V5a4 4 0 0 1 8 0v2m-9 0h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Sigurno plaćanje — 256-bit SSL enkripcija</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentFlowAuth',
  props: {
    initialMode: {
      type: String,
      default: 'login',
    },
  },
  data() {
    return {
      mode: this.initialMode,
      email: '',
      password: '',
      passwordConfirm: '',
      acceptsTerms: false,
      loading: false,
      localError: '',
    }
  },
  computed: {
    storeError() {
      return this.$store.state.user.error
    },
    redirectPath() {
      return encodeURI(`https://www.telegram.hr${this.$route.fullPath}`)
    },
    isLoggedIn() {
      return !!this.$store.state.user.id
    },
  },
  watch: {
    isLoggedIn(value) {
      if (value) {
        this.loading = false
        this.$emit('authenticated')
      }
    },
    storeError(value) {
      if (value) {
        this.loading = false
      }
    },
  },
  methods: {
    setMode(mode) {
      this.mode = mode
      this.localError = ''
      this.$store.commit('user/setError', '')
    },
    async submit() {
      this.localError = ''
      this.$store.commit('user/setError', '')

      if (this.mode === 'register') {
        if (this.password !== this.passwordConfirm) {
          this.localError = 'Lozinke se ne podudaraju.'
          return
        }
        if (this.password.length < 6) {
          this.localError = 'Lozinka mora imati najmanje 6 znakova.'
          return
        }
      }

      this.loading = true

      if (this.mode === 'login') {
        this.$store.dispatch('user/loginSubmit', {
          email: this.email,
          password: this.password,
          reload: false,
        })
        return
      }

      const emailTaken = await this.checkEmailTaken(this.email)
      if (emailTaken) {
        this.loading = false
        this.setMode('login')
        this.localError = 'Ovaj e-mail je već registriran.'
        return
      }

      this.$store.dispatch('user/registerSubmit', {
        email: this.email,
        password: this.password,
      })
    },
    async checkEmailTaken(email) {
      try {
        const data = new FormData()
        data.append('email', email)
        const res = await this.$axios.$post('/crm/api/v2/users/email', data, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        return res.status === 'taken' || !!res.id
      } catch (e) {
        return false
      }
    },
  },
}
</script>

<style scoped>
.pf-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 480px;
  padding: 32px 28px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.09);
  font-family: 'Inter', sans-serif;
}

.pf-heading {
  text-align: center;
}
.pf-heading h2 {
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin: 0 0 12px;
}
.pf-heading p {
  font-size: 16px;
  color: #666;
  margin: 0;
}

.pf-switcher {
  display: flex;
  gap: 8px;
  width: 100%;
  padding: 12px;
  background: #f9f9fa;
  border: 1px solid rgba(106, 72, 72, 0.03);
  border-radius: 12px;
}
.pf-switcher-item {
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  color: #747474;
  cursor: pointer;
}
.pf-switcher-item.active {
  background: #fff;
  color: #000;
  font-weight: 600;
  box-shadow: 0px 1px 1px -0.5px rgba(0, 0, 0, 0.03),
    0px 3px 3px -1.5px rgba(0, 0, 0, 0.03);
}

.pf-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pf-fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pf-input {
  width: 100%;
  height: 48px;
  padding: 0 15px;
  border: 1px solid #ebecf0;
  border-radius: 6px;
  font-size: 16px;
  color: #000;
  background: #fff;
}
.pf-input::placeholder {
  color: #666;
}

.pf-divider {
  display: flex;
  align-items: center;
  gap: 14px;
}
.pf-divider span {
  flex: 1;
  height: 1px;
  background: #ebecf0;
}
.pf-divider p {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  color: #5f5f5f;
  white-space: nowrap;
}

.pf-social {
  display: flex;
  gap: 12px;
}
.pf-social-btn img {
  width: 18px;
  height: 18px;
}
.pf-social-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 50px;
  border: 1px solid #ebecf0;
  border-radius: 8px;
  color: #000;
  font-size: 16px;
  text-decoration: none;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
}
.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  width: 20px;
  height: 20px;
  border: 1.25px solid #b5b5b5;
  border-radius: 2px;
  background-color: white;
  flex-shrink: 0;
  transition: all 0.2s ease;
}
.checkbox-input:checked + .checkmark {
  background-color: black;
  border-color: black;
}
.checkbox-input:checked + .checkmark::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.pf-terms {
  align-items: flex-start;
}
.pf-terms .checkbox-label {
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  color: #666;
}
.pf-terms .checkbox-label span a {
  font-weight: 600;
  color: #666;
}

.pf-error {
  margin: 0;
  padding: 10px 14px;
  background: #fdecea;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  color: #b3261e;
  font-size: 14px;
  text-align: center;
}

.pf-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}
.pf-footer p {
  margin: 0;
  font-size: 12px;
  color: #666;
}
.pf-lock-icon {
  width: 16px;
  height: 16px;
  color: #666;
  flex-shrink: 0;
}
.pf-ssl {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
}

@media (max-width: 640px) {
  .pf-card {
    max-width: 358px;
    padding: 32px 24px;
  }
  .pf-heading h2 {
    margin: 0 0 12px;
    font-size: 22px;
  }
}
</style>
