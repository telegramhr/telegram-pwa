<template>
  <div
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
  >
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <div class="full flex column-horizontal-pad">
      <div
        class="noththree full center-text column-vertical-pad subsection-title"
      >
        Telegram Klub
      </div>
    </div>
    <div class="full flex stretch column-bottom-pad book-offers-widget">
      <klub-item
        v-for="offer in list"
        :key="offer.title"
        :offer="offer"
        @select="select"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'KlubOffers',
  async fetch() {
    await this.$store.dispatch('club/pullPosts')
  },
  computed: {
    list() {
      return this.$store.getters['club/getPosts']
    },
  },
  methods: {
    select(offer) {
      this.$router.push(`/klub/#${offer.category}_list`)
    },
  },
}
</script>
