<template>
  <div
    class="main-container"
    :class="{ 'has-custom-bg': mobileImage }"
    :style="cssVars"
  >
    <div class="wrapper">
      <a href="https://www.telegram.hr/"
        ><img src="@/assets/img/telegram_logo_white.svg" alt="Hero logo"
      /></a>
      <h1 v-html="title"></h1>
    </div>
  </div>
</template>
<style scoped>
.main-container {
  width: 100%;
  padding: 0 16px;
  background-image: url('@/assets/img/family-hero-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.main-container.has-custom-bg {
  min-height: 390px;
  max-height: 400px;
  aspect-ratio: 1.2;
  background-image: var(--bg-mobile);
}
.wrapper {
  width: 100%;
  max-width: 576px;
  margin: 0 auto;
  padding: 56px 0px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  text-align: center;
}
.wrapper h1 {
  font-family: 'Lora', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: white;
}
.wrapper img {
  width: 100%;
  max-width: 130px;
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .main-container.has-custom-bg {
    aspect-ratio: unset;
    min-height: 100px;
    background-image: var(--bg-desktop, var(--bg-mobile));
  }
  .wrapper {
    padding: 80px 0px;
  }
  .wrapper img {
    max-width: 180px;
  }
  .wrapper h1 {
    font-size: 24px;
    line-height: 36px;
  }
}
</style>

<script>
export default {
  name: 'PretplataHeroOld',
  props: {
    title: { type: String, default: '' },
    mobileImage: { type: String, default: '' },
    desktopImage: { type: String, default: '' },
  },
  computed: {
    cssVars() {
      if (!this.mobileImage) return {}
      const vars = { '--bg-mobile': `url(${this.mobileImage})` }
      if (this.desktopImage) {
        vars['--bg-desktop'] = `url(${this.desktopImage})`
      }
      return vars
    },
  },
}
</script>
