<template>
  <div>
    <komentar v-for="post in posts" :key="post.id" :post="post"></komentar>
  </div>
</template>
<script>
export default {
  name: 'Commentary',
  props: {
    type: {
      type: String,
      default() {
        return 'tg'
      },
    },
    outposts: {
      type: Array,
      default() {
        return []
      },
    },
  },
  async fetch() {
    if (this.type === 'tg') {
      this.posts = await this.$axios.$get(`${this.$config.baseURL}commentary`)
    }
  },
  data() {
    return {
      posts: this.outposts,
    }
  },
}
</script>
