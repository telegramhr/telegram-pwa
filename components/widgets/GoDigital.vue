<script>
export default {
  name: 'GoDigital',
  async fetch() {
    await this.getPosts()
  },
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    async getPosts() {
      this.posts = await this.$axios.$get('/api/widgets/godigital/')
    },
  },
}
</script>

<template>
  <div v-if="posts">
    <a href="https://godigital.hrvatskitelekom.hr/" target="_blank">
      <img
        src="~/assets/img/extras/partner_widgets/go-digital-2.png"
        alt="GoDigital"
      />
    </a>
    <medium v-for="post in posts" :key="post.id" :post="post"></medium>
  </div>
</template>
