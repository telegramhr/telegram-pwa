<template>
  <div class="full flex relative latest-articles">
    <div class="full column-horizontal-pad column-top-pad">
      <div class="full cantha-separator"></div>
    </div>
    <h3 class="full center-text column-full-pad subsection-title">Najnovije</h3>
    <div class="full flex relative mini-article-list">
      <mini
        v-for="post in posts.slice(0, 4)"
        :key="post.id"
        :post="post"
      ></mini>
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
