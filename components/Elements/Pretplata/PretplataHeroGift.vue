<template>
  <div class="main-container">
    <div class="wrapper">
      <div class="main-text">
        <a href="https://www.telegram.hr/"
          ><img src="@/assets/img/telegram_logo_white.svg" alt="Hero logo"
        /></a>
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
        <button class="activate-btn" @click="scrollToBoxes">
          Aktivirajte pretplatu
        </button>
      </div>
      <img
        class="images"
        src="@/assets/img/pretplata/knjige_poklon.webp"
        alt="Knjige"
      />
    </div>
  </div>
</template>
<style scoped>
.main-container {
  width: 100%;
  padding: 0 16px;
  background-image: url('@/assets/img/pretplata/bg-mob.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.wrapper {
  width: 100%;
  max-width: 865px;
  margin: 0 auto;
  padding: 56px 0px;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: hidden;
  position: relative;
}
.main-text {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}
.main-text img {
  width: 100%;
  max-width: 130px;
  margin: 0 auto;
}
.wrapper h1 {
  font-family: 'Lora', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: white;
  margin-top: 24px;
  margin-bottom: 20px;
}
.wrapper p {
  display: none;
  font-family: 'Barlow';
  font-weight: 400;
  font-size: 14px;
  line-height: 32.07px;
  color: white;
  letter-spacing: 0px;
}
.activate-btn {
  margin-top: 16px;
  padding: 12px 24px;
  background-color: #1b981b;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.activate-btn:hover {
  background-color: #8c2c2c;
}
.activate-btn:active {
  background-color: #702323;
}
.wrapper .images {
  margin-bottom: -60px;
}
@media (min-width: 1024px) {
  .main-text img {
    margin: unset;
  }
  .main-container {
    background-image: url('@/assets/img/pretplata/tg_pretplata_bg.webp');
  }
  .wrapper .images {
    position: absolute;
    right: 0;
    width: 330px;
    max-width: unset;
    margin-bottom: 0;
  }
  .wrapper p {
    display: inline-block;
  }
  .activate-btn {
    display: none;
  }
  .main-text {
    margin: unset;
    text-align: left;
  }
  .wrapper {
    padding: 40px 0px;
    gap: 28px;
    flex-direction: row;
  }
  .wrapper img {
    max-width: 180px;
  }
  .wrapper h1 {
    font-size: 24px;
    line-height: 28px;
  }
}
</style>

<script>
export default {
  name: 'PretplataHero',
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
  },
  methods: {
    scrollToBoxes() {
      const boxesElement = document.querySelector('.boxes')
      if (boxesElement) {
        boxesElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    },
  },
}
</script>
