<template>
  <section class="full mobile-only flex mobile-side-pad">
    <div class="full">
      <div class="full cantha-separator"></div>
    </div>
    <div class="noththree full center-text column-full-pad subsection-title">
      Najčitanije
    </div>
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
