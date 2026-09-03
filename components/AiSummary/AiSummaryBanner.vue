<template>
  <!--
    "Unfoldaj sažetak ispod članka" banner shown directly above the article
    body. Clicking it smooth-scrolls to the AiSummaryBox (#ai-summary).
    Figma: Samsung-Fold-8, nodes 49-581 (desktop 710x139) / 52-488 (mobile 360x180).
    Samsung branding is hard-coded by decision (2026-09-03); swap the logo,
    heading and phone images below when the campaign changes.
  -->
  <button
    type="button"
    class="ai-banner"
    :aria-controls="targetId"
    aria-label="Unfoldaj sažetak ispod članka"
    @click="go"
  >
    <img
      class="ai-banner__phone ai-banner__phone--left"
      :src="phoneLeft"
      alt=""
      aria-hidden="true"
      loading="lazy"
      width="105"
      height="135"
    />
    <img
      class="ai-banner__phone ai-banner__phone--right"
      :src="phoneRight"
      alt=""
      aria-hidden="true"
      loading="lazy"
      width="114"
      height="132"
    />
    <img
      class="ai-banner__logo"
      :src="samsungLogo"
      alt="Samsung"
      width="122"
      height="25"
    />
    <span class="ai-banner__content">
      <span class="ai-banner__heading">Unfoldaj sažetak<br />ispod članka</span>
      <img
        class="ai-banner__chevron"
        :src="chevron"
        alt=""
        aria-hidden="true"
        width="22"
        height="22"
      />
    </span>
  </button>
</template>

<script>
import samsungLogo from '~/assets/img/ai-summary/samsung.svg'
import chevron from '~/assets/img/ai-summary/circle-chevron-down.svg'
import phoneLeft from '~/assets/img/ai-summary/phone-left.png'
import phoneRight from '~/assets/img/ai-summary/phone-right.png'

const SCROLL_OFFSET_VH = 0.1 // same 10vh offset the article page uses for live/summary jumps

export default {
  name: 'AiSummaryBanner',
  props: {
    targetId: { type: String, default: 'ai-summary' },
    postId: { type: Number, default: 0 },
    category: { type: String, default: '' },
    subscriber: { type: Boolean, default: false },
  },
  data() {
    return { samsungLogo, chevron, phoneLeft, phoneRight }
  },
  methods: {
    go() {
      this.track()
      const el = document.getElementById(this.targetId)
      if (!el) return
      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        window.innerHeight * SCROLL_OFFSET_VH
      window.scrollTo({ top, behavior: 'smooth' })
    },
    track() {
      if (!this.$gtm) return
      this.$gtm.push({
        event: 'ai-summary-click',
        ai_summary_post_id: this.postId,
        ai_summary_category: this.category,
        ai_summary_subscriber: this.subscriber,
      })
    },
  },
}
</script>

<style scoped>
.ai-banner {
  position: relative;
  display: block;
  width: 100%;
  max-width: 710px;
  height: 139px;
  margin: 24px auto;
  padding: 0;
  overflow: hidden;
  background: #000;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
}
.ai-banner:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
.ai-banner__phone {
  position: absolute;
  display: block;
  pointer-events: none;
  user-select: none;
}
.ai-banner__phone--left {
  left: 168px;
  top: -1px;
  width: 105px;
  height: 135px;
}
.ai-banner__phone--right {
  right: 38px;
  top: 17px;
  width: 114px;
  height: 132px;
}
.ai-banner__logo {
  position: absolute;
  left: 32px;
  top: 24px;
  width: 122px;
  height: auto;
  /* The exported wordmark is black (it sits on the white toast in the box); the banner needs it white. */
  filter: brightness(0) invert(1);
}
.ai-banner__content {
  position: absolute;
  left: calc(50% - 123px + 55px);
  top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 246px;
}
.ai-banner__heading {
  display: block;
  width: 100%;
  font-family: 'Geist', 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #fff;
  text-align: center;
}
.ai-banner__chevron {
  display: block;
  width: 22px;
  height: 22px;
  transition: transform 0.2s ease;
}
.ai-banner:hover .ai-banner__chevron {
  transform: translateY(2px);
}

@media screen and (max-width: 767px) {
  .ai-banner {
    height: 180px;
    margin: 16px auto;
  }
  .ai-banner__phone--left {
    left: 9px;
    top: 0;
    width: 74px;
    height: 95px;
  }
  .ai-banner__phone--right {
    right: 0;
    top: 79px;
    width: 88px;
    height: 102px;
  }
  .ai-banner__logo {
    left: 50%;
    top: 26px;
    width: 86px;
    transform: translateX(-50%);
  }
  .ai-banner__content {
    left: calc(50% - 123px);
    top: 74px;
  }
  .ai-banner__heading {
    font-size: 20px;
    line-height: 24px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .ai-banner__chevron {
    transition: none;
  }
}
</style>
