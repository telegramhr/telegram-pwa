<template>
  <app-link
    class="full flex article-standard article-medium article relative"
    :to="post.permalink"
    role="article"
    :aria-labelledby="'standard-' + post.id"
  >
    <img
      :srcset="srcset"
      :src="post.image.url"
      :alt="post.image.alt"
      loading="lazy"
    />
    <div class="full flex desktop-only">
      <h3 class="overtitle">{{ post.category | parseCat }}</h3>
    </div>
    <h2 :id="'standard-' + post.id" class="full">{{ post.portal_title }}</h2>
    <h4 class="full">{{ post.subtitle }}</h4>
    <h5 class="full flex article-meta">
      <span v-if="post.authors.length" class="meta-author"
        ><i>Piše</i> {{ post.authors[0].name }}</span
      >
      <span class="meta-preporuke">{{ post.recommendations }} preporuka</span>
      <span class="meta-date">{{ post.time | parseTime }}</span>
    </h5>
  </app-link>
</template>

<script>
export default {
  name: 'Medium',
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
  computed: {
    srcset() {
      let set = `${this.post.image.url}`
      if (this.post.image.url2) {
        set += `, ${this.post.image.url2} 2x`
      }
      if (this.post.image.url3) {
        set += `, ${this.post.image.url3} 3x`
      }
      return set
    },
  },
}
</script>

<style scoped></style>
