<template>
  <div class="full flex desktop-only">
    <h2 class="full flex section-title">Najnovije</h2>
    <mini
      v-for="post in $store.state.latest.posts"
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
  mounted() {
    this.updateCache()
  },
  methods: {
    updateCache() {
      if (!process.server) {
        this.$store.dispatch('latest/pullPosts')
      }
    },
  },
}
</script>
