<template>
  <div data-mrf-recirculation="most-read-widget">
    <h2 class="full flex section-title">Najčitanije</h2>
    <mini v-for="post in posts" :key="post.id" :post="post"></mini>
  </div>
</template>

<script>
export default {
  name: 'MostReadDesktop',
  fetch() {
    this.$store.dispatch('mostread/pullPosts')
  },
  computed: {
    posts() {
      return this.$store.state.mostread.posts
    },
  },
}
</script>
