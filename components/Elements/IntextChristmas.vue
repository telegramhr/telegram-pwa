<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full center"
      :class="[softwall ? 'softwall' : '']"
      data-nosnippet
    >
      <div class="main-wrapper">
        <img
          src="@/assets/img/pretplata/paper.png"
          alt="Green Christmas Rectangle"
          class="bg-paper"
        />
        <img
          src="@/assets/img/green-christmas-rectangle.png"
          alt="Green Christmas Rectangle"
          class="bg-rectangle"
        />
        <div
          v-if="softwall"
          class="getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>
        <div class="header">
          <img
            src="@/assets/img/christmas-banner.gif"
            alt="Christmas banner gif"
          />
        </div>
        <div class="content">
          <div class="text">
            <p class="title">
              {{ title }} <span>{{ titleHighlight }}</span>
            </p>
            <p class="description">{{ description }}</p>
          </div>
          <a :href="ctaLink" @click.prevent="start">
            <button>{{ cta }}</button>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextChristmas',
  data() {
    return {
      softwall: true,
      show: false,
      termId: false,
      title: 'Poklonite pretplatu svojim najmilijima uz ',
      titleHighlight: '50% popusta',
      description: 'Telegram - poklon koji se otvara svaki dan.',
      ctaLink: '#',
      cta: 'Iskoristite ponudu',
    }
  },
  mounted() {
    window.addEventListener('intext-christmas', this.load)
  },
  destroyed() {
    window.removeEventListener('intext-christmas', this.load)
  },
  methods: {
    load(e) {
      if (e.detail) {
        this.show = e.detail.show
        this.title = e.detail.title
        this.titleHighlight = e.detail.titleHighlight
        this.description = e.detail.description
        this.ctaText = e.detail.ctaText
        this.ctaLink = e.detail.ctaLink
      }
    },
    start() {
      this.$store.commit('pretplata/setLastArticle', this.$route.path)
      if (this.termId) {
        if (this.termId.includes('pretplata')) {
          this.$router.push(this.termId)
        }
      } else if (this.ctaLink) {
        window.open(this.ctaLink, '_blank')
      } else if (this.$route.path.includes('telesport')) {
        this.$router.push('/pretplata/telesport')
      } else {
        this.$router.push('/pretplata')
      }
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  height: 100%;
  max-height: 600px;
  gap: 40px;
  padding: 40px 16px 80px 16px;
  background-color: #1b491f;
}
.bg-paper {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  inset: 0;
  opacity: 0.6;
  mix-blend-mode: multiply;
}
.bg-rectangle {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  inset: 0;
  mix-blend-mode: overlay;
}
.getmeouttahere-btn {
  width: 2rem;
  height: 2rem;
  background-color: #999;
  color: white;
  z-index: 6;
  border-radius: 1rem;
  position: absolute;
  top: -1rem;
  right: -10px;
}
.header {
  max-width: 278px;
  margin: 0 auto;
}
.header img {
  width: 100%;
}

.content {
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
}
.text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.text .title {
  display: block;
  font-family: 'Lora', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  text-align: center;
  color: white;
  margin: 0px;
}
.title span {
  color: #fed1a7;
}
.text .description {
  font-family: 'Barlow';
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin: 0px;
}
.content button {
  font-family: 'Barlow', sans-serif;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
  padding: 12px 16px;
  border-radius: 10px;
  background: #38b038;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-top: 1.21px solid;
  border-image-source: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.04) 8%,
    rgba(0, 0, 0, 0.07) 100%
  );
  box-shadow: 0px -1.21px 3.63px -1.21px #0000001f inset;
  box-shadow: 0px 2.42px 3.63px 0px #ffffff1f inset;
  box-shadow: 0px 3.63px 3.63px -1.82px #0000000a;
  box-shadow: 0px 1.21px 1.21px -0.61px #0000000a;
}
.content button:hover {
  background-color: #2e922e;
}
@media screen and (min-width: 1024px) {
  .main-wrapper {
    padding: 40px 0px 80px 0px;
  }
  .text {
    gap: 28px;
  }
  .text .title {
    font-size: 36px;
    line-height: 40px;
  }

  .text .description {
    font-size: 24px;
    line-height: 32px;
  }
  .getmeouttahere-btn {
    right: -1rem;
  }
}
</style>
