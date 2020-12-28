<template>
  <div :class="['full', 'flex', desktop ? 'desktop-only' : '']">
    <h2 class="full flex section-title">Najnovije</h2>
    <mini v-for="post in posts" :key="post.id" :post="post"></mini>
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
    desktop: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    posts() {
      return this.$store.state.latest.posts[this.portal]
    },
  },
  mounted() {
    if (this.portal === 1) {
      this.$store.dispatch('latest/pullPosts')
    }
  },
}
</script>
