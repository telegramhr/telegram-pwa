<template>
  <app-link
    class="full flex article-standard article-medium article relative"
    :to="post.permalink"
    role="article"
    :aria-labelledby="'standard-' + post.id"
    :data-mrf-recirculation="recirculation"
  >
    <img
      :srcset="srcset"
      :src="post.image.url"
      :alt="post.image.alt"
      loading="lazy"
      width="800"
      height="505"
    />
    <div class="full flex desktop-only">
      <div
        class="overtitle noththree"
        :class="{
          'dynamic-overtitle': post.overtitle_tag || post.live,
          'overtitle-live': post.live,
        }"
      >
        <span
          v-if="post.overtitle_tag || post.live"
          class="dynamic-overtitle-element"
          >{{ post.live ? 'Uživo' : post.overtitle_tag }}</span
        >
        <span>{{ parsedOvertitle }}</span>
      </div>
    </div>
    <h2 :id="'standard-' + post.id" class="full">
      {{ post.portal_title | parseCat }}
    </h2>
    <div class="nothfour full">{{ post.subtitle }}</div>
    <div class="nothfive full flex article-meta">
      <span v-if="post.authors.length" class="meta-author"
        ><i>Piše</i> {{ post.authors[0].name }}</span
      >
      <span v-if="post.recommendations" class="meta-preporuke"
        >{{ post.recommendations }} preporuka</span
      >
      <span class="meta-date">{{ post.timem | parseTime }}</span>
    </div>
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
    mrfLocation: {
      type: String,
      required: false,
      default: '',
    },
    mrfPosition: {
      type: String,
      required: false,
      default: '',
    },
    mrfWidget: {
      type: String,
      required: false,
      default: '',
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
    recirculation() {
      let output = ''
      if (this.mrfLocation) {
        output += this.mrfLocation
      }
      if (this.mrfWidget) {
        output += `-${this.mrfWidget}`
      }
      if (this.mrfPosition) {
        output += `-${this.mrfPosition}`
      }
      return output
    },
    parsedOvertitle() {
      return this.$options.filters.parseCat(
        this.post.overtitle ? this.post.overtitle : this.post.category
      )
    },
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
