<template>
  <div class="main-container-telesport">
    <div class="overlay"></div>
    <div class="wrapper">
      <img src="@/assets/img/telesport_logo_white.svg" alt="Hero logo" />
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>
<style scoped>
.main-container-telesport {
  position: relative;
  overflow: hidden;
  max-height: 220px;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(23, 43, 133, 0.5), rgba(23, 43, 133, 0.5)),
    url('@/assets/img/telesport-family-hero.jpg') no-repeat bottom;
  background-size: cover;
  background-position: center 30%;
  background-repeat: no-repeat;
}
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(23, 43, 133, 0) 33.55%,
    #172b85 85.39%
  );
}
.wrapper {
  width: 100%;
  max-width: 576px;
  margin: 0 auto;
  padding: 46px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  position: relative;
  z-index: 20;
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
  max-width: 80px;
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .main-container-telesport {
    max-height: 200px;
    background-position: center 80%;
  }
  .wrapper {
    padding: 42px 0px;
  }
  .wrapper img {
    max-width: 100px;
  }
  .wrapper h1 {
    font-size: 24px;
    line-height: 28px;
  }
}
</style>

<script>
export default {
  name: 'PretplataHeroTelesport',
  props: {
    title: { type: String, default: '' },
  },
}
</script>
