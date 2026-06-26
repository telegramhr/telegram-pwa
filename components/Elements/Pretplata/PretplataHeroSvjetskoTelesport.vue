<template>
  <div class="main-container-svjetsko">
    <div class="gradient"></div>
    <div class="wrapper">
      <div class="content">
        <img
          class="hero-logo"
          src="@/assets/img/telesport_logo_white.svg"
          alt="Telesport"
        />
        <h1>{{ title }}</h1>
      </div>
      <div class="image">
        <img src="@/assets/img/pretplata/macbook-mockup.webp" alt="Telesport" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PretplataHeroSvjetskoTelesport',
  props: {
    title: {
      type: String,
      default:
        'Pratite Svjetsko prvenstvo uz ekskluzivnu ponudu Telesport pretplate!',
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
  background-image: url('@/assets/img/pretplata/telesport-hero-svjetsko.webp');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}

.gradient {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);

}

.wrapper {
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 360px;
  min-height: 392px;
  margin: 0 auto;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 32px 16px;
}

.content .hero-logo {
  width: 100%;
  max-width: 100px;
}

.content h1 {
  font-family: 'Lora', sans-serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 28px;
  text-align: center;
  color: white;
  max-width: 265px;
}
.image{
    width: 100%;
}

@media (min-width: 1024px) {

  .wrapper {
    flex-direction: row;
    align-items: center;
    text-align: center;
    max-width: 894px;
  }

  .content {
    align-items: flex-start;
    gap: 70px;
    width: 50%;
    min-height: auto;
    padding: 67px 0 90px 0px;
  }

  .content .hero-logo {
    max-width: 124px;
  }

  .content h1 {
    font-size: 36px;
    line-height: 48px;
    text-align: left;
    max-width: none;
  }

  .image {
    display: block;
    width: 50%;
  }
}
</style>
