<template>
  <app-link
    class="singleArticle"
    :to="permalink"
    role="article"
    data-widget="inText"
    :data-id="post.id"
    :aria-labelledby="'standard-' + post.id"
    :data-widget-position="widgetPosition"
    :data-widget-type="widgetType"
  >
    <img
      :srcset="srcset"
      :src="post.image?.url"
      :alt="post.image?.alt"
      loading="lazy"
      width="800"
      height="505"
    />
    <h2 :id="'standard-' + post.id" class="full">
      {{ post.portal_title | parseCat }}
    </h2>
  </app-link>
</template>

<style scoped>
.article-standard {
  border: none;
  padding: 0;
  margin: 0;
}
.singleArticle {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
img {
  width: 120px;
}
h2 {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
}
@media screen and (min-width: 768px) {
  .singleArticle {
    flex-direction: column;
  }
  img {
    width: 100%;
  }
}
</style>
<script>
export default {
  name: 'MiniBox',
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
    widgetPosition: {
      type: Number,
      required: false,
      default: 0,
    },
    widgetType: {
      type: String,
      required: false,
      default: '',
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
    srcset() {
      if (!this.post.image) {
        return ''
      }
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
