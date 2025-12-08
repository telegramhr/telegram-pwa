<template>
  <div class="main">
    <div class="login-wrapper">
      <div class="login">
        <div class="email-wrapper">
          <span> Upišite e-mail kome poklanjate pretplatu</span>
          <input
            type="email"
            autocomplete="off"
            :value="giftEmail"
            placeholder="Upišite e-mail kome poklanjate pretplatu"
            class="login-input"
            @input="handleUpdateEmail"
          />
        </div>
        <div class="date-wrapper">
          <span>Datum slanja poklona</span>
          <input
            id="date-field"
            v-model="date"
            type="date"
            :style="{ color: dateColor }"
            placeholder="Datum slanja poklona"
            class="login-input"
            @input="handleUpdateDate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'PretplataLoginGiftData',
  props: {
    giftEmail: {
      type: String,
      required: true,
    },
    giftDate: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedType: 'individual',
      date: '',
      showPassword: false,
      show_msg: '',
    }
  },
  computed: {
    dateColor() {
      return this.date ? '#000000' : '#5F5F5F'
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
  mounted() {},
  methods: {
    handleUpdateEmail(event) {
      this.$emit('updateGiftEmail', event.target.value)
    },
    handleUpdateDate(event) {
      this.$emit('updateGiftDate', event.target.value)
    },
  },
}
function isValidEmail(value) {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return regex.test(value)
}
</script>
<style scoped>
.loginError {
  text-align: center;
  width: 100%;
  font-family: 'Barlow';
  color: red;
  font-weight: bold;
}
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
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}
.email-wrapper {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}
.date-wrapper {
  flex: 1 1 0%;
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
.socials a {
  height: fit-content;
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
    gap: 16px;
  }
  #password-field {
    display: block;
  }
  .email-wrapper p {
    font-size: 12px;
    line-height: 16px;
  }
  .login {
    gap: 95px;
    flex-direction: row;
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
