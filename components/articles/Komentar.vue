<template>
  <app-link
    :to="post.permalink"
    class="full flex komentar relative"
    role="article"
    :aria-labelledby="'komentar-' + post.id"
  >
    <div v-if="post.authors.length" class="komentar-author relative flex">
      <img
        v-if="post.authors[0].image"
        :src="post.authors[0].image"
        :alt="post.authors[0].name"
        loading="lazy"
      />
      <i class="full mobile-only">Piše</i>
      <span class="full mobile-only">{{ post.authors[0].name }}</span>
    </div>
    <div class="komentar-box relative">
      <div class="komentar-quotation">“</div>
      <div class="komentar-image">
        <picture>
          <source type="image/webp" :srcset="post.image.webp" />
          <img
            :srcset="srcset"
            :src="post.image.url"
            :alt="post.image.alt"
            loading="lazy"
          />
        </picture>
      </div>
      <div class="komentar-content full">
        <div
          v-if="post.authors.length"
          class="komentar-author relative flex desktop-only"
        >
          <i class="full">Piše</i>
          <span class="full">{{ post.authors[0].name }}</span>
        </div>
        <h2 :id="'komentar-' + post.id" class="full animate">
          {{ post.portal_title }}
        </h2>
        <h5 class="full flex article-meta">
          <span class="meta-preporuke"
            >{{ post.recommendations }} preporuka</span
          >
          <span class="meta-date">{{ post.time | parseTime }}</span>
        </h5>
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
