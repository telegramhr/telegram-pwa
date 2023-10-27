<template>
  <div class="full flex relative mobile-bottom-pad">
    <div class="full flex latest-articles-header mobile-only stretch">
      <div class="half flex center animate">
        <span>Najnovije</span>
      </div>
      <div class="half flex center active-latest-header animate">
        <span>Najčitanije</span>
      </div>
    </div>
    <div class="full flex relative mini-article-list stretch mobile-only">
      <mini
        v-for="post in posts.slice(0, 4)"
        :key="post.id"
        :post="post"
      ></mini>
      <div class="full mobile-top-pad flex-responsive flex relative">
        <app-link to="/uzivo" class="flex newbtn">Još vijesti</app-link>
      </div>
    </div>
    <div
      class="full flex relative column-left-border stretch latest-line-feed desktop-only"
    >
      <mini-alt
        v-for="post in posts.slice(0, 3)"
        :key="post.id"
        :post="post"
      ></mini-alt>
      <div
        class="full latest-feed-btn flex-responsive flex relative mobile-side-pad"
      >
        <app-link to="/uzivo" class="flex newbtn">Još vijesti</app-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Latest',
  props: {
    portal: {
      type: Number,
      required: true,
      default: 1,
    },
    category: {
      type: String,
      required: false,
      default: '',
    },
  },
  async fetch() {
    await this.$axios
      .$get('/api/latest/1/' + this.category)
      .then((res) => {
        this.posts = res
      })
      .catch(() => {
        // error logging
      })
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>
