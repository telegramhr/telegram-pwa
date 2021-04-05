<template>
  <div class="full flex desktop-only">
    <h2 class="full flex section-title">Najnovije</h2>
    <mini
      v-for="post in $store.state.latest.posts[1]"
      :key="post.id"
      :post="post"
    ></mini>
  </div>
</template>

<script>
export default {
  name: 'Latest',
  props: {
    portal: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  async fetch() {
    await this.$store.dispatch('latest/pullPosts')
  },
  computed: {
    posts() {
      return this.$store.state.latest.posts[this.portal]
    },
  },
}
</script>
