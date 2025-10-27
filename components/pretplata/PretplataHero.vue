<template>
  <div class="main-container">
    <div class="wrapper">
      <img src="@/assets/img/telegram_logo_white.svg" alt="Hero logo" />
      <h1>{{ title }}</h1>
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
.wrapper {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 52px 0px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  text-align: center;
}
.wrapper h1 {
  font-family: 'Lora', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: white;
}
.wrapper img {
  width: 100%;
  max-width: 180px;
  margin: 0 auto;
}
</style>

<script>
export default {
  name: 'PretplataHero',
  props: {
    title: { type: String, default: '' },
  },
}
</script>
