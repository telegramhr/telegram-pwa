<template>
  <app-link
    class="full flex article-mini article relative"
    :to="post.permalink"
    role="article"
    :aria-labelledby="'mini-' + post.id"
  >
    <div class="full flex article-pad">
      <div class="full time-overtitle">
        <span>{{ post.time | parseTimeOnly }}</span
        ><span>{{ parsedOvertitle }}</span>
      </div>
      <h2 :id="'mini-' + post.id" class="full animate">
        {{ post.portal_title | parseCat }}
      </h2>
      <div class="nothfive full flex article-meta">
        <span class="meta-author">
          {{ post.authors.length ? 'Piše ' + post.authors[0].name : '' }}</span
        >
        <span v-if="post.time" class="meta-date">{{
          post.time | parseTime
        }}</span>
      </div>
    </div>
    <span class="mini-big-time">{{ post.time | parseRecentTime }}</span>
  </app-link>
</template>

<script>
export default {
  name: 'MiniAlt',
  props: {
    post: {
      required: true,
      type: Object,
      default() {
        return {
          id: '',
          image: '',
          permalink: '',
          title: '',
          overtitle: '',
          subtitle: '',
          category: '',
          authors: [],
          recommendations: 1,
          alt: '',
          time: 0,
        }
      },
    },
  },
  computed: {
    parsedOvertitle() {
      return this.$options.filters.parseCat(
        this.post.overtitle ? this.post.overtitle : this.post.category
      )
    },
  },
}
</script>
