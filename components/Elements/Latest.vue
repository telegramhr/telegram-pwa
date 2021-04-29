<template>
  <div class="full flex desktop-only">
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
  },
  async fetch() {
    await this.$axios
      .$get('/latest/1')
      .then((res) => {
        this.posts = res
      })
      .catch(() => {
        // error logging
      })
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>
