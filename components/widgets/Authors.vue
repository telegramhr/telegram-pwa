<template>
  <div class="container flex relative stretch">
    <div class="full column-full-pad mobile-side-pad">
      <h2 class="full section-title">Autori</h2>
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
      if (this.$mobile) {
        let currentIndex = array.length
        let randomIndex

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex--

          // And swap it with the current element.
          ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ]
        }

        return array
      } else {
        return [...array]
          .sort((a, b) => {
            return b.time - a.time
          })
          .filter((item) => {
            let keep = true
            this.$store.state.category.categories.commentary.posts.forEach(
              (i) => {
                if (i.id === item.id) {
                  keep = false
                }
              }
            )
            return keep
          })
          .slice(0, 4)
      }
    },
  },
  mounted() {
    this.$store.dispatch('authors/pullPosts')
  },
}
</script>
