<script>
export default {
  name: 'PretplataHero',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    highlightedText: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
    logo: {
      type: Boolean,
      default: false,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
}
</script>
<template>
  <div class="main" :style="{ backgroundColor: backgroundColor }">
    <img class="bg-image" src="@/assets/img/pretplata/paper.png" alt="Papir" />
    <div class="wrapper">
      <div class="left-container">
        <a v-if="logo" href="https://www.telegram.hr/">
          <img
            class="logo"
            src="@/assets/img/telegram_logo_white.svg"
            alt="Telegram logo"
          />
        </a>
        <h1>{{ title }}</h1>
        <p>
          {{ text }}
          <span>{{ highlightedText }}</span>
        </p>
      </div>
      <div class="right-container">
        <img
          :src="require(`@/assets/img/pretplata/landing/${imageSrc}`)"
          alt="Hero image"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0 16px;
}
.bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  /* opacity: 0.6; */
}
.wrapper {
  position: relative;
  width: 100%;
  max-width: 865px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
}
.left-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  gap: 24px;
  padding: 26px 0px 0px 0px;
}
.logo {
  width: 130px;
  margin: 0 auto;
}
.right-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.left-container h1 {
  text-align: center;
  color: #ffffff;
  font-family: 'Lora', serif;
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
}
.left-container p {
  text-align: center;
  color: #ffffff;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
}
.left-container p span {
  color: #fed1a7;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
}
.right-container img {
  width: 100%;
  max-width: 324px;
}
@media (min-width: 1024px) {
  .wrapper {
    flex-direction: row;
    align-items: flex-end;
    gap: 32px;
  }
  .left-container {
    gap: 40px;
    padding: 45px 0px;
    max-width: 450px;
    flex-shrink: 0;
  }
  .right-container {
    flex: 1;
  }
  .right-container img {
    max-width: 100%;
  }
  .logo {
    width: 130px;
    margin: 0;
  }
  .left-container h1 {
    text-align: left;
    font-size: 32px;
    line-height: 36px;
  }
  .left-container p {
    text-align: left;
    font-size: 18px;
    line-height: 24px;
  }
  .left-container p span {
    color: #fed1a7;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
  }
}
</style>
