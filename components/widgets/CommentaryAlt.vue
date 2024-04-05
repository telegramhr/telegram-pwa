<template>
  <div
    class="full relative darkened-bg column-top-margin column-bottom-margin column-bottom-pad mobile-vertical-pad"
  >
    <div class="container flex relative column-vertical-pad">
      <div class="full flex column-horizontal-pad mobile-side-pad">
        <div
          v-if="type == 'tg'"
          class="noththree full center-text column-vertical-pad subsection-title"
        >
          Telegram komentari
        </div>
        <div
          v-if="type == 'ts'"
          class="noththree full center-text column-vertical-pad subsection-title"
        >
          Telesport komentari
        </div>
      </div>
      <div
        v-if="posts.length"
        class="three-fourths flex-responsive column-horizontal-pad flex split-articles big-split no-mobile-stretch-split alt-big-break center-text column-right-border mobile-side-pad"
      >
        <standard :key="posts[0].id" :post="posts[0]"></standard>
      </div>
      <div class="full column-full-pad tablet-only">
        <div class="full column-bottom-border"></div>
      </div>
      <div
        class="fourth flex-responsive column-horizontal-pad mini-article-list mobile-side-pad"
      >
        <komentar
          v-for="post in posts.slice(1, 5)"
          :key="post.id"
          :post="post"
        ></komentar>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommentaryAlt',
  props: {
    type: {
      type: String,
      default() {
        return 'tg'
      },
    },
  },
  async fetch() {
    if (this.type === 'tg') {
      this.posts = await this.$axios.$get('/api/commentary')
    }
    if (this.type === 'ts') {
      this.$axios
        .get('https://telesport.telegram.hr/wp-json/telegram/pwa2/v1/portal/2')
        .then((res) => {
          this.posts = res.data.comments
        })
    }
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>
