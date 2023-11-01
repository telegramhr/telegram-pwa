<template>
  <div
    v-if="id"
    class="container flex relative block-related cantha-related standard-block stretch"
    data-nosnippet
  >
    <div
      v-if="title"
      class="full column-horizontal-pad column-top-pad mobile-side-pad"
    >
      <div class="full cantha-separator"></div>
    </div>
    <div class="full flex column-horizontal-pad">
      <div
        v-if="title"
        class="noththree full center-text column-vertical-pad subsection-title mobile-side-pad"
      >
        {{ title }}
      </div>
    </div>
    <div class="full flex mobile-side-pad">
      <template v-if="type === 'keep-reading' && id !== 659">
        <div
          :id="`linker-${id}`"
          class="lwdgt lwdgt-load"
          :data-wid="id"
          data-infinite="true"
          data-cycles="20"
        ></div>
      </template>
      <template v-else>
        <div v-if="id" :data-wid="id" class="lwdgt column-full-pad"></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Linker',
  props: {
    type: {
      type: String,
      required: true,
      default: 'category',
    },
  },
  data() {
    return {
      body: '',
    }
  },
  computed: {
    title() {
      switch (this.type) {
        case 'footer':
          return 'Oglasi'
        case 'keep-reading':
          return 'Ostanite uz Telegram'
        case 'category':
          return 'Više s weba'
        default:
          return false
      }
    },
    id() {
      if (this.$store.getters['user/hasPremium']) {
        return 0
      }
      if (this.type === 'keep-reading') {
        if (this.$route.name.includes('super1')) {
          return 659
        }
        return 542
      }
      if (!this.$mobile && this.type === 'mobile') {
        return 660
      }
      if (this.type === 'intext') {
        return 476
      }
      if (this.type === 'shop') {
        return 526
      }
      if (this.type === 'footer') {
        return 503
      }
      if (this.type === 'naslovnica' && this.$mobile) {
        return 519
      }
      const ids = {
        'politika-kriminal': {
          category: 486,
          mobile: 495,
        },
        kultura: {
          category: 488,
          mobile: 497,
        },
        'biznis-tech': {
          category: 487,
          mobile: 496,
        },
        komentari: {
          category: 490,
          mobile: 499,
        },
        zivot: {
          category: 489,
          mobile: 498,
        },
        'velike-price': {
          category: 491,
          mobile: 500,
        },
      }
      return ids[this.$route.params.category]
        ? ids[this.$route.params.category][this.type]
        : 0
    },
  },
}
</script>

<style>
.linker-widget-title {
  display: none !important;
}
</style>
