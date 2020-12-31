<template>
  <section class="full mobile-only flex mobile-side-pad">
    <h2 class="full flex section-title">Najčitanije</h2>
    <top
      v-for="(post, index) in posts"
      :key="post.id"
      :post="post"
      :i="index + 1"
    ></top>
  </section>
</template>

<script>
export default {
  name: 'MostRead',
  async fetch() {
    await this.$store.dispatch('mostread/pullPosts')
  },
  computed: {
    posts() {
      return this.$store.state.mostread.posts
    },
  },
}
</script>
