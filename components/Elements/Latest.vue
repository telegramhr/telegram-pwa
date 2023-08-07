<template>
  <div class="full flex relative latest-articles mobile-side-pad">
    <div class="full hide column-horizontal-pad column-top-pad">
      <div class="full cantha-separator"></div>
    </div>
    <h3 class="full center hide column-full-pad subsection-title">Najnovije</h3>
    <div class="full flex relative mini-article-list stretch">
      <div class="eighth flex-responsive center flex-wrap relative">
        <span class="full center mobile-only">Najnovije</span>
        <span class="full center-text big-number">10:45</span
        ><span class="full center-text">zadnja objava</span>
      </div>
      <mini-alt
        v-for="post in posts.slice(0, 3)"
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
