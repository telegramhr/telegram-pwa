<template>
  <div data-mrf-recirculation="trending-widget">
    <h3 class="full overtitle column-bottom-pad">Upravo se čita</h3>
    <div class="full flex">
      <mini
        v-for="post in posts.slice(0, 4)"
        :key="post.id"
        :post="post"
      ></mini>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trending',
  props: {
    id: {
      type: Number,
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
      this.$axios
        .get('/api/trending/' + this.id)
        .then((res) => {
          this.posts = res.data
        })
        .catch(() => {
          // TODO: error logging
        })
    },
  },
}
</script>
