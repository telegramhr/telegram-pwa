<script>
export default {
  name: 'HeroChristmas',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    highlighted: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
<template>
  <div class="main">
    <img class="bg-image" src="@/assets/img/pretplata/paper.webp" alt="Papir" />
    <div class="wrapper">
      <div class="left-container">
        <h1>{{ title }}</h1>
        <p>
          {{ subtitle }}
          <span>{{ highlighted }}</span>
        </p>
      </div>
      <div class="right-container">
        <img
          src="@/assets/img/pretplata/christmas-hero.png"
          alt="Hero Christmas Logo"
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
  background-color: #703838;
}
.bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  opacity: 0.6;
}
.wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  padding: 22px 0px 42px 0px;
  gap: 24px;
  justify-content: space-between;
}
.left-container {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;

  gap: 24px;
}
.right-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-container h1 {
  text-align: center;
  color: #ffffff;
  font-family: 'Lora', serif;
  font-size: 22px;
  line-height: 26px;
  font-weight: 700;
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
  color: #ffffff;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
}
.right-container img {
  width: 100%;
  max-width: 324px;
}
@media (min-width: 1024px) {
  .wrapper {
    flex-direction: row;
    align-items: center;
    gap: 32px;
    padding: 22px 0px;
  }
  .left-container {
    gap: 32px;
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
