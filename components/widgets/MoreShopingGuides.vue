<template>
  <div class="full flex">
    <div class="container flex relative native-block stretch mobile-side-pad">
      <div class="full column-horizontal-pad flex">
        <h2 class="full flex section-title">Još šoping vodiča</h2>
      </div>
      <div
        v-for="p in posts"
        :key="p.id"
        class="fourth flex-responsive column-full-pad"
      >
        <standard :post="p"></standard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoreShopingGuides',
  props: {
    post: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  async fetch() {
    this.posts = await this.$axios.$get('/api/shop-guide/related/' + this.post)
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>
