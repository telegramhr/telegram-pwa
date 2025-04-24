<template>
  <div v-show="show" id="login-popup" class="center">
    <div class="flex relative">
      <div id="close-book-popup" class="center center-text" @click="close">
        <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
      </div>
      <div class="full flex book-popup-content">
        <div class="full center book-popup-header">
          <img :src="$icon(144)" alt="Telegram Logo" />
        </div>
        <form
          class="full flex column-full-pad mobile-side-pad"
          @submit.prevent="login"
        >
          <h2 class="full center-text column-top-pad">Prijava</h2>
          <p
            class="full infotext center-text"
            style="margin-top: 4vw; margin-bottom: 4vw"
          >
            Prijavite se kako biste nastavili s radom.
          </p>
          <div class="full flex column-mini-left-pad">
            <a
              :href="`https://pretplata.telegram.hr/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=${path}`"
              class="full center remp-social-logbtn animate"
              @click="close"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook-f']"
              ></font-awesome-icon>
              Facebook
            </a>
          </div>
          <div class="full flex column-mini-left-pad column-mini-top-pad">
            <a
              :href="`http://pretplata.telegram.hr/users/google/sign?url=${path}`"
              class="full center remp-social-logbtn animate"
              @click="close"
            >
              <font-awesome-icon :icon="['fab', 'google']"></font-awesome-icon>
              Google
            </a>
          </div>
          <label for="name">Email adresa</label>
          <input id="email" v-model="email" type="email" name="name" />
          <label for="address">Lozinka</label>
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
          />
          <p class="full infotext center-text">
            {{ error }}
          </p>
          <div class="full center relative clickable">
            <button v-show="!loading" class="newbtn clickable" type="submit">
              Prijava
            </button>
            <div v-show="loading" class="full center cool-loader">
              <div class="loader-square">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <small class="full center-text">
            <a
              href="https://pretplata.telegram.hr/social-login/social-sign/request-password"
              class="clickable"
              style="color: #ae3737"
              >Zatražite novu lozinku ovdje</a
            >
          </small>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      loading: false,
    }
  },
  computed: {
    show() {
      return this.$store.state.user.showModal
    },
    path() {
      return encodeURI(`https://www.telegram.hr${this.$route.fullPath}`)
    },
    error() {
      return this.$store.state.user.error
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.show) {
        this.close()
      }
    })
    document.addEventListener('click', (e) => {
      if (e.target.id === 'login-popup') {
        this.close()
      }
    })
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        this.$store.commit('user/setError', 'Molimo unesite email i lozinku.')
        return
      }
      this.loading = true
      try {
        this.$store.dispatch('user/loginSubmit', {
          email: this.email,
          password: this.password,
        })
      } finally {
        this.loading = false
      }
    },
    close() {
      this.$store.dispatch('user/login')
    },
  },
}
</script>

<style>
#login-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px;
}
#login-popup h2 {
  letter-spacing: -0.05em;
  font-size: 36px;
  font-size: 1.8rem;
}
#login-popup > div {
  border: 1px solid #c8c8c8;
  background-color: #fcf1e7;
  width: 100%;
  max-width: 480px;
}
.dark-mode #login-popup > div {
  border: 1px solid #c8c8c8;
  background-color: #121212;
  color: white;
}
.book-popup-header {
  padding-top: 50px;
  margin-bottom: 50px;
  background-color: #ae3737;
}
.book-popup-header img {
  width: 100px;
  height: 100px;
  margin-bottom: -50px;
}
#login-popup input {
  width: 100%;
  font-size: 16px;
  background: none;
  outline: none;
  border: none;
  padding: 0px;
  height: 24px;
  color: #666;
  padding-bottom: 4px;
  border-bottom: 1px solid #c8c8c8;
}
.dark-mode #login-popup input {
  border-color: #555;
  color: #efefef;
}
#login-popup label {
  opacity: 0.7;
  font-size: 14px;
  font-size: 0.7rem;
  font-family: 'Barlow', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 8px;
}
.hosted-field {
  height: 24px;
  padding-bottom: 4px;
  border-bottom: 1px solid #c8c8c8;
  width: 100%;
}
.dark-mode .hosted-field {
  border-color: #555;
  color: #efefef;
}
#login-popup button {
  padding: 8px 32px;
  text-align: center;
  display: block;
  margin: 16px auto;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  font-size: 20px;
  font-size: 1rem;
  background-color: #ae3737;
  position: relative;
  z-index: 200;
  cursor: pointer;
}
#login-popup textarea {
  width: 100%;
  height: 80px;
  border: 1px solid #c8c8c8;
  margin-top: 16px;
  background: none;
  outline: none;
  font-family: 'Barlow', sans-serif;
  color: #666;
  font-size: 16px;
}
.dark-mode #login-popup textarea {
  border-color: #555;
  color: #efefef;
}
#login-popup small {
  margin-top: 16px;
}
#close-book-popup {
  position: absolute;
  top: -16px;
  right: -16px;
  width: 36px;
  height: 36px;
  background-color: white;
  border: 1px solid #c8c8c8;
  border-radius: 18px;
  color: #666;
  font-size: 24px;
  z-index: 501;
  cursor: pointer;
}

@media screen and (max-height: 1100px) {
  #login-popup .book-popup-content {
    max-height: 90vh;
    overflow-y: scroll;
  }
}
@media screen and (max-width: 1024px) {
  #login-popup {
    padding: 4vw;
  }
  #close-book-popup {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>
