<template>
  <div class="full flex relative mobile-bottom-pad">
    <div class="full hide column-horizontal-pad column-top-pad">
      <div class="full cantha-separator"></div>
    </div>
    <h3 class="full hide center-text column-full-pad subsection-title">
      Najnovije
    </h3>
    <div class="full flex latest-articles-header mobile-only stretch">
      <div class="third flex center active-latest-header animate">
        <span>Vijesti</span>
      </div>
      <div class="third flex center animate"><span>Sport</span></div>
      <div class="third flex center animate"><span>Lifestyle</span></div>
    </div>
    <div class="full flex relative column-left-border stretch">
      <mini-alt
        v-for="post in posts.slice(0, 4)"
        :key="post.id"
        :post="post"
      ></mini-alt>
      <div
        class="eighth latest-feed-btn flex-responsive flex relative mobile-side-pad"
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
