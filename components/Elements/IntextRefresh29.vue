<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full center"
      :class="[softwall ? 'softwall' : '']"
      data-nosnippet
    >
      <div class="main-wrapper">
        <!-- Clipped stage: everything that may overflow the popup lives here,
             so the close button (outside it) stays visible. -->
        <div class="stage">
          <picture class="clanci">
            <source
              media="(min-width: 768px)"
              :srcset="
                require('@/assets/img/pretplata/refresh29/clanci-desktop.webp')
              "
            />
            <img
              :src="
                require('@/assets/img/pretplata/refresh29/clanci-mobile.webp')
              "
              alt=""
              class="clanci-img"
            />
          </picture>

          <div class="content">
            <div class="text-wrapper">
              <span class="tag">
                <img
                  src="@/assets/img/pretplata/refresh29/percent.svg"
                  alt=""
                  class="tag-icon"
                />
                <span class="tag-text">{{ tag }}</span>
              </span>
              <p class="title">{{ title }}</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p class="subtitle" v-html="subtitleHtml"></p>
            </div>
            <TgButton class="cta" :href="ctaLink" @click.native.prevent="start">
              {{ cta }}
            </TgButton>
          </div>
        </div>

        <div
          v-if="softwall"
          class="getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextRefresh29',
  data() {
    return {
      softwall: true,
      show: false,
      termId: false,
      tag: 'Popust 63%',
      title: 'Zbog naših otkrića, ponovno nas pokušavaju ušutkati.',
      subtitle: 'Podržite najvažniji i najneovisniji medij u Hrvatskoj',
      ctaLink: '/pretplata/podrska-telegramu/',
      cta: 'Podržite Telegram',
    }
  },
  computed: {
    /**
     * Subtitle supports lightweight inline markup so the campaign payload can
     * emphasise prices without sending HTML:
     *   **29€**  -> <strong>29€</strong>
     *   ~~79€~~  -> <s>79€</s>
     *   \n or |  -> line break
     * Raw <strong>/<b>/<s>/<br> tags are passed through as well.
     */
    subtitleHtml() {
      return String(this.subtitle || '')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/~~(.+?)~~/g, '<s>$1</s>')
        .replace(/\s*(?:\n|\|)\s*/g, '<br />')
    },
  },
  mounted() {
    window.addEventListener('intext-refresh-29', this.load)
  },
  destroyed() {
    window.removeEventListener('intext-refresh-29', this.load)
  },
  methods: {
    load(e) {
      if (e.detail) {
        this.show = e.detail.show
        this.tag = e.detail.tag ?? this.tag
        this.title = e.detail.title ?? this.title
        this.subtitle = e.detail.subtitle ?? this.subtitle
        this.cta = e.detail.ctaText ?? e.detail.cta ?? this.cta
        this.ctaLink = e.detail.ctaLink ?? this.ctaLink
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
  max-width: 320px;
  max-height: 480px;
  background-color: #0c3655;
}
.stage {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Article collage backdrop (exports already carry Figma's layer opacity, the
   left fade on desktop and the bottom fade on mobile). */
.clanci {
  position: relative;
  display: block;
  width: 100%;
  flex-shrink: 0;
  pointer-events: none;
}
.clanci-img {
  display: block;
  width: 100%;
  height: auto;
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

/* Mobile (Figma 320x480): collage on top, text block starts 33px below it,
   43px bottom margin. */
.content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 33px 16px 43px;
  padding-top: 10px;
  text-align: center;
  color: white;
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}
/* Tag sits tighter to the title than the rest of the stack, as in the design */
.text-wrapper .tag {
  margin-bottom: -5px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 8px;
  border: 1.2px solid #2f5e81;
  border-radius: 5px;
  background: #0c3655;
  box-shadow: inset 0 0.8px 2.4px 0 rgba(255, 255, 255, 0.03),
    inset 0 -0.8px 2.4px 0 rgba(0, 0, 0, 0.03);
}
.tag-icon {
  width: 12px;
  height: 12px;
  display: block;
}
.tag-text {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: white;
}

.title {
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 23px;
  line-height: 28px;
  color: white;
  margin: 0 !important;
}
.subtitle {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: white;
  margin: 0 !important;
}
.subtitle ::v-deep strong,
.subtitle ::v-deep b {
  font-weight: 600;
}
.subtitle ::v-deep s,
.subtitle ::v-deep del {
  font-weight: 600;
  text-decoration: line-through;
}

/* TgButton already carries the design-system fill, inset highlights and hover
   state — only the campaign sizing is overridden here. */
.content .cta {
  height: 34px;
  padding: 0 11px;
  border-radius: 6px;
  font-size: 12px;
  line-height: 16px;
}
.content .cta ::v-deep .tg-button__label {
  padding: 0 3px;
}

/* Desktop (Figma 900x600): text block from the top, collage strip in flow
   30px under the CTA and clipped by the stage. */
@media screen and (min-width: 768px) {
  .main-wrapper {
    flex-direction: column;
    height: min(85vh, 600px);
    max-height: 85vh;
    max-width: 900px;
  }
  .clanci {
    order: 2;
    margin-top: 30px;
  }
  /* Figma: Clanci layer at 60% opacity with "lighten" blend */
  .clanci-img {
    mix-blend-mode: lighten;
    opacity: 0.6;
  }
  /* Figma "Overlay": bg-colour band fading the top edge of the strip into the
     background under the CTA. */
  .clanci::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8.6%;
    background: linear-gradient(
      180deg,
      #0c3655 0%,
      #0c3655 25%,
      rgba(12, 54, 85, 0) 100%
    );
  }
  .getmeouttahere-btn {
    right: -1rem;
  }
  .content {
    order: 1;
    flex: none;
    max-width: 578px;
    padding: 60px 0 0;
    padding-top: 60px;
    gap: 28px;
  }
  .text-wrapper {
    gap: 13px;
  }
  .text-wrapper .tag {
    margin-bottom: -3px;
  }
  .tag {
    gap: 5px;
    padding: 5px 10px;
    border-width: 1.9px;
    border-radius: 8px;
    box-shadow: inset 0 1.3px 3.8px 0 rgba(255, 255, 255, 0.03),
      inset 0 -1.3px 3.8px -2.5px rgba(0, 0, 0, 0.03);
  }
  .tag-icon {
    width: 20px;
    height: 20px;
  }
  .tag-text {
    font-size: 15px;
    line-height: 20px;
  }
  .title {
    font-size: 35px;
    line-height: 43px;
  }
  .subtitle {
    font-size: 23px;
    line-height: 30px;
  }
  .content .cta {
    height: 50px;
    padding: 0 15px;
    border-radius: 10px;
    font-size: 21px;
    line-height: 38px;
  }
  .content .cta ::v-deep .tg-button__label {
    padding: 0 5px;
  }
}
</style>
