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
    if (!this.$storageAvailable) {
      return
    }
    this.$axios
      .get('https://www.telegram.hr/wp-json/telegram/pwa/v1/commentary')
      .then((res) => {
        this.posts = res.data
        this.$store.commit('category/setPosts', {
          slug: 'commentary',
          posts: res.data,
        })
      })
      .catch(() => {
        // TODO: error logging
      })
  },
}
</script>
