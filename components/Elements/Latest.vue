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
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      this.$axios.get('/latest/' + this.portal).then((res) => {
        this.posts = res.data
      })
    },
  },
}
</script>
