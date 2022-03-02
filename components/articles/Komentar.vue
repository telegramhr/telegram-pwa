<template>
  <app-link
    :to="post.permalink"
    class="full flex komentar relative"
    role="article"
    :aria-labelledby="'komentar-' + post.id"
  >
    <div class="full komentar-box relative">
      <div class="komentar-content full">
        <h2 :id="'komentar-' + post.id" class="full animate">
          <div class="komentar-quotation">“</div>
          {{ post.portal_title }}
        </h2>
        <h5 class="full flex article-meta">
          <span v-if="post.recommendations" class="meta-preporuke"
            >{{ post.recommendations }} preporuka</span
          >
          <span class="meta-date">{{ post.time | parseTime }}</span>
        </h5>
      </div>
      <div class="full flex relative">
        <div
          v-if="post.authors.length"
          class="full komentar-author relative flex"
        >
          <img
            v-if="post.authors[0].image"
            :src="post.authors[0].image"
            :alt="post.authors[0].name"
            loading="lazy"
          />
          <div class="flex">
            <i class="full">Piše</i>
            <span>{{ post.authors[0].name }}</span>
          </div>
        </div>
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'Komentar',
  props: {
    post: {
      required: true,
      type: Object,
      default() {
        return {
          id: '',
          image: {
            url: '',
            alt: '',
            author: '',
          },
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
