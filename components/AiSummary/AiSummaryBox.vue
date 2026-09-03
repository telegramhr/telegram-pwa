<template>
  <!--
    AI summary box at the end of the article: white "toast" header with the
    Samsung / Galaxy Z Fold8 logos, then exactly three bullets.
    Figma: Samsung-Fold-8, nodes 49-681 (desktop 710 wide) / 52-541 (mobile 360 wide).
    Colors are the design's own in every theme by decision (2026-09-03).
  -->
  <section
    :id="id"
    ref="box"
    class="ai-box"
    aria-labelledby="ai-summary-heading"
  >
    <div class="ai-box__toast">
      <div class="ai-box__text">
        <h2 id="ai-summary-heading" class="ai-box__heading">
          Nemaš vremena za čitanje?
        </h2>
        <p class="ai-box__sub">Ovo su najbitnije stavke u članku</p>
      </div>
      <div class="ai-box__logos">
        <img
          class="ai-box__samsung"
          :src="samsungLogo"
          alt="Samsung"
          width="96"
          height="15"
        />
        <img
          class="ai-box__fold"
          :src="foldLogo"
          alt="Galaxy Z Fold8"
          width="120"
          height="16"
        />
      </div>
    </div>
    <ul class="ai-box__list">
      <li v-for="(bullet, i) in bullets" :key="i" class="ai-box__item">
        {{ bullet }}
      </li>
    </ul>
  </section>
</template>

<script>
import samsungLogo from '~/assets/img/ai-summary/samsung.svg'
import foldLogo from '~/assets/img/ai-summary/galaxy-z-fold8.svg'

export default {
  name: 'AiSummaryBox',
  props: {
    bullets: { type: Array, required: true },
    id: { type: String, default: 'ai-summary' },
    postId: { type: Number, default: 0 },
    category: { type: String, default: '' },
    subscriber: { type: Boolean, default: false },
  },
  data() {
    return { samsungLogo, foldLogo, observer: null, viewed: false }
  },
  watch: {
    // The article page component is reused between articles: re-arm per post.
    postId() {
      this.viewed = false
      this.observe()
    },
  },
  mounted() {
    this.observe()
  },
  beforeDestroy() {
    this.disconnect()
  },
  methods: {
    observe() {
      this.disconnect()
      if (typeof IntersectionObserver === 'undefined' || !this.$refs.box) {
        return
      }
      this.observer = new IntersectionObserver(
        (entries) => {
          if (this.viewed || !entries.some((e) => e.isIntersecting)) return
          this.viewed = true
          this.disconnect()
          if (!this.$gtm) return
          this.$gtm.push({
            event: 'ai-summary-view',
            ai_summary_post_id: this.postId,
            ai_summary_category: this.category,
            ai_summary_subscriber: this.subscriber,
          })
        },
        { threshold: 0.5 }
      )
      this.observer.observe(this.$refs.box)
    },
    disconnect() {
      if (this.observer) {
        this.observer.disconnect()
        this.observer = null
      }
    },
  },
}
</script>

<style scoped>
.ai-box {
  box-sizing: border-box;
  width: 100%;
  max-width: 710px;
  margin: 30px auto 8px;
  padding: 24px 40px;
  background: #f7f7f7;
  border-radius: 12px;
  scroll-margin-top: 80px;
  font-family: 'Geist', 'Barlow', sans-serif;
  font-weight: 500;
  color: #000;
}
.ai-box__toast {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-sizing: border-box;
  min-height: 84px;
  padding: 18px 45px 18px 19px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  box-shadow: 0 1px 1px -0.5px rgba(0, 0, 0, 0.03),
    0 3px 3px -1.5px rgba(0, 0, 0, 0.03), 0 6px 6px -3px rgba(0, 0, 0, 0.03),
    0 12px 12px -6px rgba(0, 0, 0, 0.03), 0 32px 32px -16px rgba(0, 0, 0, 0.03),
    0 64px 64px -32px rgba(0, 0, 0, 0.03);
}
.ai-box__text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}
.ai-box__heading {
  margin: 0;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0a0c11;
}
.ai-box__sub {
  margin: 0 !important;
  font-size: 14px;
  line-height: 20px;
  color: #8c929c;
}
.ai-box__logos {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  flex-shrink: 0;
}
.ai-box__samsung {
  display: block;
  width: 96px;
  height: auto;
}
.ai-box__fold {
  display: block;
  width: 120px;
  height: auto;
}
/* !important: the article body's global list rules (.single-article-body ul li,
   .single-article .single-article-body ul) outrank scoped selectors and were adding
   margins that broke the 24px rhythm and the bottom padding. */
.ai-box__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0 0 !important;
  padding: 0 0 0 24px !important;
  list-style: disc outside !important;
}
.ai-box__item {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 16px;
  line-height: 24px !important;
  color: #000;
  list-style: disc outside !important;
}
.ai-box__item::marker {
  color: #000;
}

@media screen and (max-width: 767px) {
  .ai-box {
    padding: 24px 25px;
    margin: 24px auto 8px;
  }
  .ai-box__toast {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 22px;
    padding: 16px 20px;
  }
  .ai-box__text {
    gap: 10px;
  }
  .ai-box__logos {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
  .ai-box__samsung {
    height: 11px;
    width: auto;
    margin-top: 1px;
  }
  .ai-box__fold {
    height: 15px;
    width: auto;
  }
}
</style>
