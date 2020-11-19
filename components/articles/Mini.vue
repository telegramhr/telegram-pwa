<template>
  <nuxt-link
    class="full flex article-mini article relative"
    :to="post.permalink"
  >
    <div class="full flex article-pad">
      <h2 class="full animate">{{ post.title }}</h2>
      <h5 class="full flex article-meta">
        <span v-if="post.authors.length" class="meta-author"
          ><i>Piše</i> {{ post.authors[0].name }}</span
        >
        <span class="meta-date">{{ post.time | parseTime }}</span>
      </h5>
    </div>
  </nuxt-link>
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

<style scoped></style>
