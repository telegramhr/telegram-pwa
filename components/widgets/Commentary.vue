<template>
  <div>
    <komentar v-for="post in posts" :key="post.id" :post="post"></komentar>
  </div>
</template>
<script>
export default {
  name: 'Commentary',
  props: {
    type: {
      type: String,
      default() {
        return 'tg'
      },
    },
  },
  async fetch() {
    if (this.type === 'tg') {
      this.posts = await this.$axios.$get('/api/commentary')
    }
    if (this.type === 'ts') {
      this.$axios
        .$get('https://telesport.telegram.hr/wp-json/telegram/pwa2/v1/portal/2')
        .then((data) => {
          this.posts = data.comments
        })
    }
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>
