<template>
  <div>
    <komentar v-for="post in posts" :key="post.id" :post="post"></komentar>
  </div>
</template>
<script>
export default {
  name: 'Commentary',
  props: {
    comments: {
      type: Array,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    if (!this.$storageAvailable) {
      return
    }
    if (this.comments) {
      this.posts = this.comments
      return
    }
    this.$axios
      .get('/api/commentary')
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
