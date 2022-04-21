<template>
  <div class="full flex relative latest-articles">
    <h3 class="full overtitle column-bottom-pad">Najnovije</h3>
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
