<template>
  <div class="container flex relative native-block stretch mobile-side-pad">
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <h3 class="full center-text column-full-pad subsection-title">Partneri</h3>
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
      this.$axios
        .get('/api/promos')
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
