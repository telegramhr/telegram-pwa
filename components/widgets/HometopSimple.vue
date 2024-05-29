<template>
  <a
    v-if="show"
    class="full relative darkened-bg birati-stranu-widget"
    @click.prevent="start"
  >
    <div class="container column-full-pad mobile-full-pad flex relative">
      <p
        class="full center-text column-top-pad mobile-top-pad birati-stranu-title"
      >
        {{ title }}
      </p>
      <p class="full center-text birati-stranu-subtitle">
        <span v-if="secondarySubtitle" class="strikethrough faded">{{
          secondarySubtitle
        }}</span
        >{{ subtitle }}
      </p>
      <div class="full center column-vertical-pad mobile-vertical-pad">
        <div class="newbtn huge-newbtn">{{ cta }}</div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'HometopSimple',
  data() {
    return {
      title: 'Posebna akcija',
      secondarySubtitle: '7.99€',
      subtitle: '12.99€ plati više dobij isto',
      cta: 'Pretplatite se',
      show: false,
    }
  },
  mounted() {
    window.addEventListener('piano_header', this.load)
  },
  destroyed() {
    window.removeEventListener('piano_header', this.load)
  },
  methods: {
    start() {
      if (this.termId) {
        this.checkout(this.termId)
      } else {
        this.$router.push('/pretplata')
      }
    },
    load(e) {
      if (e.detail) {
        this.title = e.detail.title
        this.subtitle = e.detail.subtitle
        this.secondarySubtitle = e.detail.secondarySubtitle
        this.cta = e.detail.cta
        this.termId = e.detail.termId
        this.show = true
      }
    },
    checkout(termId) {
      this.$piano.start(termId)
    },
  },
}
</script>
