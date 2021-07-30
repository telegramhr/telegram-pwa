<template>
  <div class="container flex relative stretch">
    <div class="full column-full-pad mobile-side-pad">
      <h2 class="full section-title">Autori</h2>
    </div>
    <div class="full flex fancy-authors-widget stretch">
      <div
        v-for="post in posts"
        :key="'authors-' + post.id"
        class="fourth flex column-horizontal-pad mobile-side-pad stretch"
      >
        <app-link :to="post.permalink" class="full flex fancy-author-tile">
          <img :src="post.authors[0].image" :alt="post.authors[0].name" />
          <div class="full flex fancy-author-content">
            <h2 class="fancy-author-name">{{ post.authors[0].name }}</h2>
            <h3 class="fancy-author-title faded">
              {{ post.authors[0].byline }}
            </h3>
            <p class="fancy-article-preview">
              {{ post.portal_title }}
            </p>
            <h5 class="article-meta">
              <span class="meta-date">{{ post.time | parseTime }}</span>
              <span v-if="post.recommendations" class="meta-preporuke"
                >{{ post.recommendations }} preporuka</span
              >
            </h5>
          </div>
        </app-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Authors',
  computed: {
    posts() {
      const array = this.$store.state.authors.posts
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
    },
  },
  mounted() {
    this.$store.dispatch('authors/pullPosts')
  },
}
</script>
