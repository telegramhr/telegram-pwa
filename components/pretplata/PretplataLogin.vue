<template>
  <div class="main">
    <span>Unesite podatke</span>

    <div class="login-wrapper">
      <div class="login">
        <div class="email-wrapper">
          <input
            type="email"
            placeholder="Vaša e-mail adresa"
            class="login-input"
          />
          <p>
            Ukoliko niste registrirani korisnik, na navedenu email adresu ćete
            zaprimiti pristupne podatke.
          </p>
        </div>
        <input
          id="password-field"
          type="password"
          placeholder="Lozinka"
          class="login-input"
        />
        <button class="login-btn">Prijavite se</button>
      </div>

      <span class="divider">ili</span>
      <div class="socials">
        <button>
          <img src="@/assets/img/google-logo.svg" alt="" /> Google
        </button>
        <button><img src="@/assets/img/facebook.svg" alt="" />Facebook</button>
      </div>
    </div>
  </div>
</template>

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
