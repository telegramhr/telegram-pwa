<template>
  <div class="main" :class="{ dark }">
    <div class="content">
      <div class="logo">
        <a href="/">
          <img v-if="dark" src="@/assets/img/telegram_logo_white.svg" alt="" />
          <img v-else src="@/assets/img/telegram_logo_red.svg" alt="" />
        </a>
        <span>|</span>
        <p>Telegram @ {{ new Date().getFullYear() }}</p>
      </div>
      <div class="socials">
        <a
          href="https://www.facebook.com/Telegram.hr/"
          class="animate center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon
        ></a>
        <a
          href="https://www.instagram.com/telegram.hr/"
          class="animate center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon
        ></a>
        <a
          href="https://x.com/TelegramHR"
          class="animate center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'x-twitter']"></font-awesome-icon
        ></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PretplataFooter',
  props: {
    // black footer with white social buttons (Figma node 2328:3453)
    dark: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
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

/* dark variant */
.main.dark {
  background-color: #000;
}
.main.dark .content {
  padding: 32px 0 27px; /* Figma mobile footer: 32 / 24 / 13 / 40 / 27 = 136 */
  gap: 13px;
}
.main.dark .logo img,
.main.dark .logo span {
  display: block;
}
.main.dark .logo img {
  width: 110px;
}
.main.dark .logo span {
  color: #3a3a3a;
  font-size: 24px;
  line-height: 24px; /* keeps the logo row 24px tall like Figma */
}
.main.dark .logo p {
  color: #fff;
}
.main.dark .socials {
  gap: 15px;
}
.main.dark .socials a {
  width: 40px;
  height: 40px;
  background-color: #fff;
  color: #000;
}
.main.dark .socials a:hover {
  background-color: #e5e5e5;
}
@media screen and (min-width: 768px) {
  .main.dark .content {
    padding: 26px 0;
  }
  .main.dark .socials {
    gap: 16px;
  }
  .main.dark .socials a {
    width: 48px;
    height: 48px;
  }
}
</style>
