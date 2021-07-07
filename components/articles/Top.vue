<template>
  <app-link
    :to="post.permalink"
    class="full komentar list-article relative"
    role="article"
    :aria-labelledby="'top-' + post.id"
  >
    <div class="komentar-author relative flex">
      <span class="full">#{{ i }}</span>
    </div>
    <div class="komentar-box relative">
      <div class="komentar-quotation">
        <font-awesome-icon :icon="['fas', 'fire']"></font-awesome-icon>
      </div>
      <div class="komentar-image">
        <img
          :srcset="srcset"
          :src="post.image.url"
          alt="post.image.alt"
          loading="lazy"
        />
      </div>
      <div class="komentar-content full">
        <h2 :id="'top-' + post.id" class="full">{{ post.portal_title }}</h2>
        <h5 class="full flex article-meta">
          <span v-if="post.authors.length" class="meta-author"
            ><i>Piše</i> {{ post.authors[0].name }}</span
          >
          <span v-if="post.recommendations" class="meta-preporuke"
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
  name: 'Top',
  props: {
    i: {
      type: Number,
      required: true,
      default() {
        return 1
      },
    },
    post: {
      type: Object,
      required: true,
      default() {
        return {}
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
