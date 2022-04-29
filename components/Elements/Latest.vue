<template>
  <div class="full flex desktop-only" data-mrf-recirculation="latest-widget">
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
