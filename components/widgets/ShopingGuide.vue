<template>
  <div class="container flex relative native-block stretch mobile-side-pad">
    <div class="full column-horizontal-pad column-top-pad">
      <div class="full cantha-separator"></div>
    </div>
    <div class="noththree full center-text column-full-pad subsection-title">
      Pokloni za Božić
    </div>
    <div
      v-for="post in posts"
      :key="post.id"
      class="fourth flex-responsive column-horizontal-pad"
    >
      <standard :post="post"></standard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopingGuide',
  async fetch() {
    this.posts = await this.$axios
      .get('/api/shop-guide/related/1347241')
      .then((res) => {
        const shuffled = res.data.sort(() => 0.5 - Math.random())
        return shuffled.slice(0, 4)
      })
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>
