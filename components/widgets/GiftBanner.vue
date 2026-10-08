<template>
  <aside
    class="gift-banner full relative"
    :class="`gift-banner--${brand.key}`"
    aria-labelledby="gift-banner-title"
  >
    <div
      class="gift-banner-collage gift-banner-collage--desktop"
      :style="{ backgroundImage: `url(${collage('desktop')})` }"
    ></div>
    <div
      class="gift-banner-collage gift-banner-collage--mobile"
      :style="{ backgroundImage: `url(${collage('mobile')})` }"
    ></div>
    <div class="gift-banner-content relative">
      <div class="gift-banner-text">
        <p id="gift-banner-title" class="gift-banner-title">
          Svidio Vam se članak?
        </p>
        <p class="gift-banner-body">
          Čitajte sve {{ brand.adjective }} članke bez<br />
          ograničenja za samo {{ brand.price }} mjesečno
        </p>
      </div>
      <app-link :to="brand.link" class="gift-banner-button">
        Pretplatite se
      </app-link>
    </div>
  </aside>
</template>

<script>
/*
 * Subscription pitch after a gifted article (see CONTEXT.md "Gift banner"),
 * for logged-in readers without access. Brand follows the route.
 */
const BRANDS = {
  telegram: {
    key: 'telegram',
    adjective: 'Telegramove',
    price: '7,99€',
    link: '/pretplata',
  },
  telesport: {
    key: 'telesport',
    adjective: 'Telesportove',
    price: '3,99€',
    link: '/pretplata/telesport',
  },
}

export default {
  name: 'GiftBanner',
  computed: {
    brand() {
      return this.$route.path.includes('telesport')
        ? BRANDS.telesport
        : BRANDS.telegram
    },
  },
  methods: {
    collage(layout) {
      return `/img/gift/gift-banner-${this.brand.key}-${layout}.webp`
    },
  },
}
</script>

<style scoped>
.gift-banner {
  max-width: 705px;
  height: 194px;
  margin: 32px auto 0;
  overflow: hidden;
  border-radius: 8px;
  color: #fff;
  /* Keep the collage's screen blend inside the banner. */
  isolation: isolate;
}
.gift-banner--telegram {
  background-color: #491717;
}
.gift-banner--telesport {
  background-color: #171749;
}
.gift-banner-collage {
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  /* Figma: the cover collage is screen-blended over the brand colour. */
  mix-blend-mode: screen;
  pointer-events: none;
}
.gift-banner-collage--desktop {
  top: 0;
  right: 0;
  bottom: 0;
  width: 297px;
  background-position: left center;
}
.gift-banner-collage--mobile {
  display: none;
}
.gift-banner-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  height: 100%;
  padding-left: 60px;
}
.gift-banner-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
/* Scoped under .gift-banner to beat the article's own `p` margins. */
.gift-banner .gift-banner-title,
.gift-banner .gift-banner-body {
  margin: 0;
  /* Trim to cap height / baseline, as in the design (where supported). */
  text-box: trim-both cap alphabetic;
  color: inherit;
}
.gift-banner-title {
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
}
.gift-banner-body {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 20px;
}
.gift-banner-button {
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  background-color: #fff;
  box-shadow: inset 0 3px 4px -3px rgba(255, 255, 255, 0.56),
    inset 0 0 8px -2px rgba(255, 255, 255, 0.48),
    0 1px 1px -0.5px rgba(0, 0, 0, 0.03), 0 3px 3px -1.5px rgba(0, 0, 0, 0.03);
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #111;
  white-space: nowrap;
  transition: background-color 0.15s ease;
}
.gift-banner-button:hover {
  background-color: #f1f1f1;
}
.gift-banner-button:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

@media screen and (max-width: 767px) {
  .gift-banner {
    max-width: 350px;
    height: 300px;
  }
  .gift-banner-collage--desktop {
    display: none;
  }
  .gift-banner-collage--mobile {
    display: block;
    left: 0;
    right: 0;
    bottom: 0;
    height: 143px;
    background-position: center top;
  }
  .gift-banner-content {
    justify-content: flex-start;
    height: auto;
    padding: 28px 24px 0;
  }
}
</style>
