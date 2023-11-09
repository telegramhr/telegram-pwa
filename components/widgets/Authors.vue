<template>
  <div class="container flex relative stretch mobile-side-pad">
    <div class="full column-horizontal-pad column-top-pad">
      <div class="full cantha-separator"></div>
    </div>
    <div class="full flex column-horizontal-pad">
      <div
        class="noththree full center-text column-vertical-pad subsection-title"
      >
        Telegram komentari
      </div>
    </div>
    <div class="full flex fancy-authors-widget stretch">
      <author
        v-for="post in posts"
        :key="'authors-' + post.id"
        :post="post"
      ></author>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Authors',
  computed: {
    posts() {
      const array = this.$store.state.authors.posts
      let count = 4
      if (process.client && window.innerWidth < 640) {
        count = 10
      }
      return [...array]
        .sort((a, b) => {
          return b.time - a.time
        })
        .slice(0, count)
    },
  },
  mounted() {
    this.$store.dispatch('authors/pullPosts')
  },
}
</script>
