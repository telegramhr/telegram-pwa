<template>
  <app-link
    class="full flex article-standard article relative"
    :to="permalink"
    :tracker="post.trackerPermalink"
    role="article"
    :aria-labelledby="'standard-' + post.id"
  >
    <img
      :srcset="srcset"
      :src="post.image.url"
      :alt="post.image.alt"
      loading="lazy"
      width="800"
      height="505"
    />
    <div class="full flex article-pad">
      <div class="full flex desktop-only">
        <div class="noththree overtitle">{{ parsedOvertitle }}</div>
      </div>
      <h2 :id="'standard-' + post.id" class="full">
        {{ post.portal_title | parseCat }}
      </h2>
      <div v-if="premiumOnly" class="full flex">
        <span class="fancy-overtitle-premium">
          <img
            src="@/assets/img/tg_monogram_logo_white.svg"
            alt="Telegram monogram logo (TG)"
          />
          Samo za pretplatnike
        </span>
      </div>
      <div class="nothfour full">{{ post.subtitle | parseCat }}</div>
      <div class="nothfive full flex article-meta">
        <span v-if="post.authors.length" class="meta-author"
          ><i>Piše</i> {{ post.authors[0].name }}</span
        >
        <span v-if="post.recommendations" class="meta-preporuke"
          >{{ post.recommendations }} preporuka</span
        >
        <span class="meta-date">{{ post.timem | parseTime }}</span>
      </div>
    </div>
  </app-link>
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
    utm: {
      type: Object,
      required: false,
      default() {
        return {
          source: '',
          campaign: '',
        }
      },
    },
  },
  computed: {
    permalink() {
      if (this.utm.source || this.utm.campaign) {
        return `${this.post.permalink}?utm_medium=Internal&utm_source=${this.utm.source}&utm_campaign=${this.utm.campaign}`
      }
      return this.post.permalink
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
    premiumOnly() {
      return false
    },
  },
}
</script>

<style scoped></style>
