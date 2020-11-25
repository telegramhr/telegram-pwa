<template>
  <div>
    <h2 class="full flex section-title">Upravo se čita</h2>
    <div class="full flex">
      <mini v-for="post in posts" :key="post.id" :post="post"></mini>
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
      this.$axios.get('trending/' + this.id).then((res) => {
        this.posts = res.data
      })
    },
  },
}
</script>
