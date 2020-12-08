<template>
  <div class="main-container flex single-article">
    <client-only>
      <theader></theader>
    </client-only>
    <div class="full flex tg-red">
      <h1 class="full center-text page-title">{{ post.title }}</h1>
      <div class="full header-filler"></div>
    </div>
    <div class="full flex">
      <article class="container column-full-pad flex relative mobile-side-pad">
        <div
          class="full relative single-article-body"
          v-html="post.content"
        ></div>
      </article>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Page',
  async fetch() {
    await this.$axios
      .get('single/' + this.$route.params.page)
      .then((res) => {
        this.post = res.data
      })
      .catch(() => {
        if (process.server) {
          this.$nuxt.context.res.statusCode = 404
        }
      })
  },
  data() {
    return {
      post: {
        title: '',
        content: '',
      },
    }
  },
}
</script>
