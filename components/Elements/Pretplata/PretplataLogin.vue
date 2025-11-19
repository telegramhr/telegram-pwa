<template>
  <div v-show="!loggedIn" class="main">
    <span>Unesite podatke</span>

    <div class="login-wrapper">
      <div class="login">
        <div class="email-wrapper">
          <input
            type="email"
            autocomplete="off"
            :value="email"
            placeholder="Vaša e-mail adresa"
            class="login-input"
            @change="handleUpdateEmail"
          />
          <p v-if="showPassword">
            Ukoliko niste registrirani korisnik, na navedenu email adresu ćete
            zaprimiti pristupne podatke.
          </p>
        </div>
        <input
          v-if="showPassword"
          id="password-field"
          v-model="password"
          type="password"
          placeholder="Lozinka"
          class="login-input"
        />
        <button v-if="showPassword" class="login-btn" @click="login">
          Prijavite se
        </button>
      </div>
      <span class="divider">ili</span>
      <div class="socials">
        <a :href="googleUrl" class="full center animate">
          <button>
            <img src="@/assets/img/google-logo.svg" alt="" /> Google
          </button>
        </a>
        <a :href="facebookUrl" class="full center animate">
          <button>
            <img src="@/assets/img/facebook.svg" alt="" />Facebook
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'PretplataLogin',
  props: {
    email: {
      type: String,
      required: true,
    },
    canLogIn: {
      type: Boolean,
      required: true,
    },
    loginUrl: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      selectedType: 'individual',
      password: '',
      showPassword: false,
      show_msg: '',
    }
  },
  computed: {
    loggedIn() {
      return !!this.$store.state.user.id
    },
    googleUrl() {
      return `http://pretplata.telegram.hr/users/google/sign?url=https://www.telegram.hr/pretplata/${encodeURIComponent(
        this.loginUrl
      )}`
    },
    facebookUrl() {
      return `https://pretplata.telegram.hr/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=https://www.telegram.hr/pretplata/${encodeURIComponent(
        this.loginUrl
      )}`
    },
  },
  watch: {
    email: _.debounce(function (value) {
      if (isValidEmail(value) === false) {
        this.showPassword = false
        this.handleUpdateCanlogin(false)
        return
      }
      this.emailSubmit(value)
    }, 1000),
  },
  mounted() {
    if (isValidEmail(this.email)) {
      this.emailSubmit(this.email)
    }
    if (isValidEmail(this.email) && this.canLogIn) {
      this.showPassword = true
    }
  },
  methods: {
    handleUpdateEmail(event) {
      this.$emit('updateEmail', event.target.value)
    },
    handleUpdateCanlogin(value) {
      this.$emit('updateCanLogIn', value)
    },
    login() {
      if (!this.showPassword) {
        return
      }
      this.$store.dispatch('user/loginSubmit', {
        email: this.email,
        password: this.password,
        reload: false,
      })
    },
    emailSubmit(value) {
      const _this = this
      const formData = new FormData()
      formData.append('email', value)
      this.$axios
        .post('/crm/api/v2/users/email', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then((response) => {
          if (response.data.status && response.data.status === 'taken') {
            _this.showPassword = true
            this.handleUpdateCanlogin(true)
          } else if (response.data.status === 'error') {
            if (response.data.code === 'email_missing') {
              return
            }
            _this.show_msg = 'Prijavite se kako biste dovršili kupnju.'
            this.handleUpdateCanlogin(true)
          } else {
            _this.showPassword = false
            this.handleUpdateCanlogin(false)
          }
        })
        .catch(() => {
          _this.showPassword = false
          this.handleUpdateCanlogin(false)
        })
    },
  },
}
function isValidEmail(value) {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return regex.test(value)
}
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 28px;
  padding: 28px 0px;
  border-top: 1px solid #b5b5b5;
}

.main span {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #5f5f5f;
  font-weight: 500;
}

.login-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  justify-content: space-between;
}
.login {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}
#password-field {
  display: none;
}
.login-btn {
  display: none;
}
.email-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.login-input {
  background-color: #ffffff;
  width: 100%;
  padding: 11px 20px;
  border: 1px solid white;
  border-radius: 6px;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 24px;
}
.email-wrapper p {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #5f5f5f;
}
.login-btn {
  width: 100%;
  padding: 11px 20px;
  background-color: #ae3737;
  color: white;
  border: none;
  border-radius: 6px;
  font-family: 'Barlow';
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
}
.login-btn:active {
  background-color: #702323;
}

.divider {
  margin: 0 auto;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  color: #888;
}
.socials {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
}
.socials img {
  width: 18px;
  height: 18px;
}
button {
  cursor: pointer;
}
.socials button {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  width: 100%;
  height: fit-content;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 24px;
  color: #5f5f5f;
  background-color: white;
  border: none;
  border-radius: 4px;
  padding: 14px 65px;
  justify-content: center;
}

@media screen and (min-width: 1024px) {
  .main {
    padding: 24px 0px;
    gap: 16x;
  }
  #password-field {
    display: block;
  }
  .email-wrapper p {
    font-size: 12px;
    line-height: 16px;
  }
  .login {
    max-width: 352px;
    margin: 0 auto;
  }
  .login-input {
    font-size: 16px;
    line-height: 24px;
  }
  .login-btn {
    display: block;
  }
  .login-wrapper {
    flex-direction: row;
    gap: 40px;
  }

  .divider {
    padding-top: 12px;
    margin: 0;
  }
  .socials {
    gap: 12px;
    flex-direction: row;
  }
  .socials button {
    font-size: 16px;
    max-width: 205px;
    border-radius: 8px;
  }
}
</style>
