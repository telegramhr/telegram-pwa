<script>
export default {
  name: 'HeroMinistrica',
}
</script>
<template>
  <div class="main">
    <img
      class="bg-image"
      src="@/assets/img/razotkrili-plenkija.jpg"
      alt="Papir"
    />
    <div class="wrapper">
      <div class="left-container">
        <img src="@/assets/img/plenki-vizual.png" :alt="`Plenki Vizual`" />
      </div>
      <div class="right-container" :class="leftContainerClass">
        <img
          class="tg-logo"
          src="@/assets/img/telegram_logo_white.svg"
          :alt="`Telegram Logo`"
        />
        <div class="content">
          <h1>Podržite Telegram!</h1>
          <p>
            Razotkrili smo HDZ-ovu pljačku stoljeća, a Plenković i Obuljen nas
            pokušavaju ušutkati. Podržite najvažniji i najneovisniji medij u
            Hrvatskoj.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 480px;
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
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  padding: 48px 0px 0px 0px;
  justify-content: center;
}
.left-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-container {
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 442px;
  width: 100%;
  margin: 0 auto;
}
.right-container .content {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.right-container h1 {
  text-align: center;
  color: #ffffff;
  font-family: 'Lora', serif;
  font-size: 28px;
  line-height: 26px;
  font-weight: 700;
}
.right-container p {
  text-align: center;
  color: #ffffff;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
}

.tg-logo {
  width: 100px;
  max-width: 126px;
  margin: 0 auto;
}
.left-container img {
  width: 100%;
}
@media (min-width: 1024px) {
  .main {
    min-height: 400px;
  }
  .wrapper {
    flex-direction: row;
    align-items: stretch;
    min-height: 400px;
    padding: 0;
  }
  .right-container {
    justify-content: center;
    align-self: center;
    gap: 58px;
    margin: 0;
  }
  .left-container {
    align-items: flex-end;
    padding-top: 22px;
  }
  .left-container img {
    display: block;
    width: 100%;
    height: auto;
  }
  .tg-logo {
    margin: 0;
  }
  .right-container .content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .right-container h1 {
    text-align: left;
    font-size: 40px;
    line-height: 36px;
  }
  .right-container p {
    text-align: left;
    font-size: 20px;
    line-height: 26px;
  }
  .left-container {
    padding-right: 90px;
  }
}
</style>
