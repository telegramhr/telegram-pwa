<template>
  <div class="container flex relative native-block stretch mobile-side-pad">
    <div class="full column-horizontal-pad flex">
      <h2 class="full flex section-title">Partneri</h2>
    </div>
    <div
      v-for="post in posts"
      :key="post.id"
      class="fourth flex-responsive column-full-pad"
    >
      <standard :post="post"></standard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
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
      this.$axios.get('promos').then((res) => {
        this.posts = res.data
      })
    },
  },
}
</script>
