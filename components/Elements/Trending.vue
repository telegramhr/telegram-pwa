<template>
  <div>
    <div class="noththree full overtitle column-bottom-pad">Upravo se čita</div>
    <div class="full flex" data-mrf-recirculation="homepage-upravo">
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
