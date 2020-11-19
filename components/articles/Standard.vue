<template>
  <nuxt-link class="full flex article-standard article relative" to="permalink">
    <img :src="post.image.url" :alt="post.image.alt" loading="lazy" />
    <div class="full flex article-pad">
      <div class="full flex desktop-only">
        <h3 class="overtitle">{{ post.overtitle }}</h3>
      </div>
      <h2 class="full">{{ post.title }}</h2>
      <h4 class="full">{{ post.subtitle }}</h4>
      <h5 class="full flex article-meta">
        <span v-if="post.authors.length" class="meta-author"
          ><i>Piše</i> {{ post.authors[0].name }}</span
        >
        <span class="meta-preporuke">{{ post.recommendations }} preporuka</span>
        <span class="meta-date">{{ post.time | parseTime }}</span>
      </h5>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Standard',
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
  data() {
    return {
      id: '',
      image: '',
      permalink: '',
      title: '',
      overtitle: '',
      subtitle: '',
      category: '',
      author: '',
      recommendations: 1,
      alt: '',
    }
  },
}
</script>

<style scoped></style>
