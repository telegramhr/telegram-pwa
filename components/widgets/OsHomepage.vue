<template>
  <div class="container flex relative native-block stretch mobile-side-pad">
    <div class="full column-horizontal-pad flex">
      <h2 class="full flex section-title">
        <app-link to="/openspace">openspace</app-link>
      </h2>
    </div>
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
