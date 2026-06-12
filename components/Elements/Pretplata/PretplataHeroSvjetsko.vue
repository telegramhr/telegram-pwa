<template>
  <div class="main-container-svjetsko">
    <div class="overlay"></div>
    <div class="wrapper">
      <img
        class="hero-logo"
        src="@/assets/img/telegram_logo_white.svg"
        alt="Telegram"
      />
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PretplataHeroSvjetsko',
  props: {
    title: {
      type: String,
      default:
        'Od prvog zvižduka do finala - pratite prvenstvo uz Telegram i Telesport!',
    },
  },
}
</script>

<style scoped>
.main-container-svjetsko {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 392px;
  background-color: #000;
  background-image: url('@/assets/img/pretplata/telesport/bg_telesport_svjetsko_mob.png');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}
.overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 56%, #000 87%);
}
.wrapper {
  position: relative;
  z-index: 20;
  min-height: 392px;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 56px 24px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.wrapper .hero-logo {
  width: 100%;
  max-width: 156px;
}
.wrapper h1 {
  font-family: 'Lora', sans-serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 28px;
  color: white;
  max-width: 265px;
}
@media (min-width: 1024px) {
  .main-container-svjetsko {
    min-height: 272px;
    max-height: 272px;
    background-image: url('@/assets/img/pretplata/telesport/bg_telesport_svjetsko.png');
    background-position: center;
  }
  .overlay {
    background: none;
  }
  .wrapper {
    min-height: 272px;
    max-width: 448px;
    padding: 42px 0;
    justify-content: center;
    gap: 32px;
  }
  .wrapper h1 {
    font-size: 24px;
    line-height: 28px;
    max-width: 448px;
  }
}
</style>
