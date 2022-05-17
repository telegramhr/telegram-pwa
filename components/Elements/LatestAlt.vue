<template>
  <div class="full flex relative">
    <mini v-for="post in posts.slice(0, 8)" :key="post.id" :post="post"></mini>
  </div>
</template>

<script>
export default {
  name: 'LatestAlt',
  props: {
    portal: {
      type: Number,
      required: true,
      default: 1,
    },
    category: {
      type: String,
      required: false,
      default: '',
    },
  },
  async fetch() {
    await this.$axios
      .$get('/api/latest/1/' + this.category)
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
