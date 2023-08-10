<template>
  <div class="full flex relative latest-articles mobile-side-pad">
    <div class="full flex latest-articles-header mobile-only stretch">
      <div class="third flex center active-latest-header animate">
        <span>Vijesti</span>
      </div>
      <div class="third flex center animate"><span>Sport</span></div>
      <div class="third flex center animate"><span>Lifestyle</span></div>
    </div>
    <div class="full flex relative mini-article-list stretch">
      <mini-alt
        v-for="post in posts.slice(0, 4)"
        :key="post.id"
        :post="post"
      ></mini-alt>
      <div class="eighth flex-responsive center relative mobile-vertical-pad">
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
