<template>
  <div class="container flex relative native-block stretch mobile-side-pad">
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <h3 class="full center-text column-full-pad subsection-title">openspace</h3>
    <div
      v-for="post in posts"
      :key="post.id"
      class="fourth flex-responsive column-full-pad"
    >
      <standard :post="post"></standard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  async fetch() {
    this.posts = await this.$axios
      .get('/api/category/openspace?pure=1')
      .then((res) => res.data.posts.slice(0, 4))
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>
