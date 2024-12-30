<template>
  <div id="book-pay-popup" class="center">
    <div class="flex relative">
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
            Samo pretplatnici imaju pristup aplikaciji. Kliknite
            <a href="https://www.telegram.hr/pretplata" target="_blank"
              >ovdje</a
            >
            ako nemate pretplatu.
          </p>
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
          <button class="newbtn clickable" @click="login">Prijava</button>
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
      error: '',
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('user/login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$emit('close')
        })
        .catch(() => {
          this.error = 'Neispravni podaci za prijavu.'
        })
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style>
#book-pay-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px;
}
#book-pay-popup h2 {
  letter-spacing: -0.05em;
  font-size: 36px;
  font-size: 1.8rem;
}
#book-pay-popup > div {
  border: 1px solid #c8c8c8;
  background-color: #fcf1e7;
  width: 100%;
  max-width: 480px;
}
.dark-mode #book-pay-popup > div {
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
#book-pay-popup input {
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
.dark-mode #book-pay-popup input {
  border-color: #555;
  color: #efefef;
}
#book-pay-popup label {
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
#book-pay-popup button {
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
#book-pay-popup textarea {
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
.dark-mode #book-pay-popup textarea {
  border-color: #555;
  color: #efefef;
}
#book-pay-popup small {
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
  #book-pay-popup .book-popup-content {
    max-height: 90vh;
    overflow-y: scroll;
  }
}
@media screen and (max-width: 1024px) {
  #book-pay-popup {
    padding: 4vw;
  }
  #close-book-popup {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>
