<template>
  <div class="main">
    <div class="content">
      <div class="logo">
        <a href="/">
          <img src="@/assets/img/telegram_logo_red.svg" alt="" />
        </a>
        <span>|</span>
        <p>Telegram @ 2025</p>
      </div>
      <div class="socials">
        <a href="https://www.facebook.com/Telegram.hr/" class="animate center">
          <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon
        ></a>
        <a href="https://www.instagram.com/telegram.hr/" class="animate center">
          <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon
        ></a>
        <a href="https://x.com/TelegramHR" class="animate center">
          <font-awesome-icon :icon="['fab', 'x-twitter']"></font-awesome-icon
        ></a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  background-color: white;
  width: 100%;
  padding: 0 16px;
}
.content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  gap: 24px;
  margin: 0 auto;
}
.socials {
  display: flex;
  flex-direction: row;
  gap: 14px;
}
.socials a {
  background-color: #faf4f0;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  transition: background-color 0.2s;
}
.socials a:hover {
  background-color: #efe5de;
}
.logo {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
}
.logo p {
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  font-family: 'Inter', sans-serif;
  white-space: nowrap;
}
.logo img,
.logo span {
  display: none;
}
@media screen and (min-width: 768px) {
  .content {
    flex-direction: row;
    padding: 26px 0;
  }
  .logo img,
  .logo span {
    display: block;
  }
  .logo span {
    color: #b5b5b5;
    font-size: 24px;
  }
  .logo img {
    width: 110px;
    cursor: pointer;
  }
}
</style>
