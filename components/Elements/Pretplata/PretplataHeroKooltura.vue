<script>
export default {
  name: 'PretplataHeroKooltura',
  props: {
    title: {
      type: String,
      default: 'Scrollaš svaki dan, ali koliko toga stvarno vrijedi pročitati?',
    },
    text: {
      type: String,
      default:
        'Pretplata na Telegram donosi ti sadržaj koji informira i educira.',
    },
    buttonText: {
      type: String,
      default: 'Aktiviraj pretplatu',
    },
    buttonLink: {
      type: String,
      default: '#paymentBoxes',
    },
    disclaimer: {
      type: String,
      default:
        'Ponuda vrijedi za osobe koje ostvaruju pravo na Kulturnu iskaznicu, koje imaju 18 godina.',
    },
  },
}
</script>

<template>
  <div class="hero">
    <img
      class="visual visual-desktop"
      src="@/assets/img/pretplata/kooltura/kooltura_bg.png"
      alt="Kooltura - Kulturna iskaznica"
    />
    <div class="wrapper">
      <div class="content">
        <a href="https://www.telegram.hr/">
          <img
            class="logo"
            src="@/assets/img/telegram_logo_white.svg"
            alt="Telegram logo"
          />
        </a>
        <div class="text-block">
          <h1>{{ title }}</h1>
          <p class="lead">{{ text }}</p>
        </div>
        <a class="cta" :href="buttonLink">{{ buttonText }}</a>
        <p class="disclaimer">{{ disclaimer }}</p>
      </div>
      <img
        class="visual visual-mobile"
        src="@/assets/img/pretplata/kooltura/kooltura_bg_mob.png"
        alt="Kooltura - Kulturna iskaznica"
      />
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #000000;
}
.wrapper {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 16px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 26px 0 0 0;
}
.logo {
  width: 126px;
}
.text-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.content h1 {
  color: #ffffff;
  font-family: 'Lora', serif;
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
}
.content .lead {
  color: #cacaca;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
}
.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 12px 16px;
  border-radius: 10px;
  background-color: #217613;
  color: #ffffff;
  font-family: 'Barlow', sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  text-decoration: none;
  box-shadow: 0px 0px 8px -2px rgba(255, 255, 255, 0.48) inset,
    0px 3px 4px -3px rgba(255, 255, 255, 0.56) inset,
    0px 3px 3px -1.5px rgba(0, 0, 0, 0.03),
    0px 1px 1px -0.5px rgba(0, 0, 0, 0.03);
  transition: background-color 0.25s ease;
}
.cta:hover {
  background-color: #1a5e0f;
}
.disclaimer {
  display: none;
  color: #f9f9fa;
  font-family: 'Barlow', sans-serif;
  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
  max-width: 381px;
}
.visual {
  display: block;
  width: 100%;
}
.visual-desktop {
  display: none;
}
.visual-mobile {
  margin-top: 24px;
}
@media (min-width: 1024px) {
  .wrapper {
    min-height: 400px;
  }
  .content {
    align-items: flex-start;
    text-align: left;
    max-width: 460px;
    gap: 24px;
    padding: 53px 0;
  }
  .content h1 {
    font-size: 28px;
    line-height: 36px;
  }
  .content .lead {
    font-size: 18px;
    line-height: 24px;
  }
  .text-block {
    gap: 16px;
  }
  .disclaimer {
    display: block;
  }
  .visual-mobile {
    display: none;
  }
  .visual-desktop {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 52%;
    object-fit: cover;
    object-position: left center;
  }
}
</style>
