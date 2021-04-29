<template>
  <div>
    <app-link to="/komentari">
      <h2 class="full flex section-title">Komentari</h2>
    </app-link>
    <komentar v-for="post in posts" :key="post.id" :post="post"></komentar>
  </div>
</template>
<script>
export default {
  name: 'Commentary',
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.$axios
      .get('commentary')
      .then((res) => {
        this.posts = res.data
      })
      .catch(() => {
        // TODO: error logging
      })
  },
}
</script>
