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
    <img :src="post.image?.url" :alt="post.image?.alt" loading="lazy" />
    <h3 :id="'standard-' + post.id" class="full">
      {{ post.portal_title | parseCat }}
    </h3>
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
  object-fit: cover;
}
h3 {
  font-family: 'Lora', 'sans-serif';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
}
.singleArticle:hover h3 {
  color: #ae3737;
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
          authors: [],
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
  },
}
</script>

<style scoped></style>
