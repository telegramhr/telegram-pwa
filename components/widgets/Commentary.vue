<template>
  <app-link to="/komentari">
    <div>
      <h2 class="full flex section-title">Komentari</h2>
      <komentar v-for="post in posts" :key="post.id" :post="post"></komentar>
    </div>
  </app-link>
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
    this.$axios.get('commentary').then((res) => {
      this.posts = res.data
    })
  },
}
</script>
