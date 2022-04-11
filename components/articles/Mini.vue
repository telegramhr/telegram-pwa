<template>
  <app-link
    class="full flex article-mini article relative"
    :to="post.permalink"
    role="article"
    :aria-labelledby="'mini-' + post.id"
  >
    <div class="full flex article-pad">
      <div class="full flex mobile-only">
        <h3 class="overtitle">{{ post.category | parseCat }}</h3>
      </div>
      <h2 :id="'mini-' + post.id" class="full animate">
        {{ post.portal_title }}
      </h2>
      <h4 class="full mobile-only">{{ post.subtitle }}</h4>
      <h5 class="full flex article-meta">
        <span class="meta-author">
          {{ post.authors.length ? 'Piše ' + post.authors[0].name : '' }}</span
        >
        <span v-if="post.time" class="meta-date">{{
          post.time | parseTime
        }}</span>
      </h5>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'Mini',
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
}
</script>
