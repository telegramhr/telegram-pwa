<template>
  <transition name="fade">
    <div v-show="show" :class="softwall ? 'softwall' : ''" data-nosnippet>
      <div class="main-wrapper">
        <div class="close-btn" v-if="softwall" @click="show = false">
          <font-awesome-icon :icon="['fas', 'times']" />
        </div>
        <div class="wrapper">
          <div class="background-gradient-image"></div>
          <div class="background-image"></div>
          <div class="linear-gradient"></div>
          <div class="players">
            <img src="@/assets/img/rukometasi.png" alt="Rukomet Igraci" />
          </div>

          <div class="content">
            <img
              src="@/assets/img/telesport_logo_white.svg"
              class="logo"
              alt="Telesport Bijeli Logo"
            />
            <div class="text-content">
              <h2 class="title">
                {{ title }}
                <span>{{ popust }}</span>
              </h2>
              <a
                :href="cta_link"
                class="cta-button"
                target="_blank"
                rel="noopener noreferrer"
                >{{ cta }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextTelesportRukomet',
  data() {
    return {
      show: true,
      termId: false,
      title: 'Europsko prvenstvo prati se uz Telesport uz čak',
      popust: '50% popusta',
      softwall: true,
      cta: 'Iskoristi ponudu',
      cta_link: '',
    }
  },
  mounted() {
    window.addEventListener('intext_telesport-rukomet', this.load)
  },
  destroyed() {
    window.removeEventListener('intext_telesport-rukomet', this.load)
  },
  methods: {
    load(e) {
      if (e.detail) {
        this.title = e.detail.title
        this.popust = e.detail.popust ?? ''
        this.cta = e.detail.cta ?? ''
        this.cta_link = e.detail.cta_link ?? ''
        this.softwall = e.detail.softwall ?? false
        this.termId = e.detail.termId
      }
      this.triggerShow()
    },
  },
}
</script>

<style scoped>
.softwall {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
  max-width: 100% !important;
}
.main-wrapper {
  width: 100%;
  max-width: 900px;
  position: relative;
  height: 600px;
  background: #0b1272;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('@/assets/img/rukomet-pozadina.jpg');
  opacity: 30%;
  z-index: 1;
}
.background-gradient-image {
  position: absolute;
  bottom: 130px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/rukomet-gradient.jpg');
  background-size: cover;
  background-position: center;
  opacity: 50%;
  z-index: 1;
  scale: 1.8;
  mix-blend-mode: hard-light;
}
.linear-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(23, 43, 133, 0) 26.11%,
    #172b85 58.72%
  );
  opacity: 41%;
  z-index: 2;
}
.close-btn {
  position: absolute;
  top: -1rem;
  right: -10px;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  z-index: 10;
}
.content {
  padding: 80px 24px 0px 24px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 20;
  position: relative;
}
.logo {
  max-width: 160px;
}
.players {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  z-index: 1;
  align-content: end;
}
.text-content {
  display: flex;
  flex-direction: column;
  gap: 38px;
}
.title {
  font-family: 'Lora', serif;
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
  color: #ffffff;
  width: 100%;
  margin: 0px;
  max-width: 334px;
}
.title span {
  text-decoration: underline;
}
.cta-button {
  display: flex;
  width: fit-content;
  background-color: #297529;
  color: #ffffff;
  font-family: 'Barlow';
  padding: 12px 18px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  border-top: 1.4px solid;
  box-shadow: 0px -1.4px 4.21px -1.4px var(--neutralinversewhitealpha12) inset;
  box-shadow: 0px 2.81px 4.21px 0px var(--colorwhite12) inset;
  box-shadow: 0px 4.21px 4.21px -2.1px var(--elevationshadow);
  border-radius: 12px;
  box-shadow: 0px 1.4px 1.4px -0.7px var(--elevationshadow);
  border-image-source: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.04) 8%,
    rgba(0, 0, 0, 0.07) 100%
  );
}
.cta-button:hover {
  background-color: #256925;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .content {
    padding: 80px 42px 0px 42px;
  }
}

@media screen and (min-width: 1024px) {
  .close-btn {
    top: -1rem;
    right: -1rem;
  }

  .title {
    font-size: 32px;
    line-height: 42px;
  }

  .cta-button {
    padding: 16px 24px;
    font-size: 24px;
    margin-left: -6px;
  }
  .content {
    padding: 80px 0px 0px 64px;
  }
}
</style>
