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
        <input type="password" placeholder="Lozinka" class="login-input" />
        <button class="login-btn">Prijavite se</button>
      </div>

      <span class="divider">ili</span>
      <div class="socials">
        <button>Google</button>
        <button>Facebook</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  padding: 24px 0px;
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
  flex-direction: row;
  gap: 40px;
  width: 100%;
  justify-content: space-between;
}
.login {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 352px;
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
  font-size: 14px;
  line-height: 20px;
}
.email-wrapper p {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  line-height: 16px;
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

.divider {
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  padding-top: 12px;
  color: #888;
}
.socials {
  display: flex;
  flex-direction: row;
  gap: 12px;
}
.socials button {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  width: 100%;
  height: fit-content;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #5f5f5f;
  background-color: white;
  border: none;
  border-radius: 8px;
  padding: 11px 65px;
  max-width: 205px;
}
</style>
