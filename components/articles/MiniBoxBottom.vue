<template>
  <app-link
    class="singleArticle"
    :to="permalink"
    role="article"
    data-widget="bottom"
    :data-id="post.id"
    :aria-labelledby="'standard-' + post.id"
    :data-widget-type="widgetType"
    :data-widget-position="widgetPosition"
    :data-mrf-recirculation="recirculation"
  >
    <div class="singleArticleText">
      <h3 :id="'standard-' + post.id" class="full">
        {{ post.portal_title }}
      </h3>
      <div class="singleArticleMeta">
        <span class="singleArticleAuthor">
          {{ post.authors.length ? post.authors[0].name : '' }}
        </span>
        <span class="singleArticleDate">
          {{ formattedDate }}
        </span>
        <div class="singleArticleComments">
          <img
            width="18"
            height="18"
            src="@/assets/img/comments_icon.png"
            alt="Ikonica komentara"
          />
          <span>
            {{ post.comments }}
          </span>
        </div>
      </div>
    </div>
    <img :src="post.image?.url" :alt="post.image?.alt" loading="lazy" />
  </app-link>
</template>

<style scoped>
.article-standard {
  border: none;
  padding: 0;
  margin: 0;
}
.singleArticle:last-of-type {
  border-bottom: 1px solid #c1baba;
}
.singleArticle {
  display: flex;
  flex-direction: row;
  gap: 14px;
  padding: 16px 0px;
  border-top: 1px solid #c1baba;
}
img {
  width: 120px;
  height: 95px;
  object-fit: cover;
}
h3 {
  font-family: 'Lora';
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
}
.singleArticle:hover h3 {
  color: #ae3737;
}
.singleArticleText {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}
.singleArticleMeta {
  font-family: 'Barlow';
  font-weight: 400;
  font-size: 14.75px;
  line-height: 100%;
  color: #292222;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.singleArticleDate {
  display: none;
}
.singleArticleComments {
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: v-bind('post.comments ? 1 : 0');
}
.singleArticleComments img {
  width: 18px;
  height: 18px;
}
.singleArticleComments span {
  padding: 0px 8px;
}
@media screen and (min-width: 768px) {
  .singleArticle {
    gap: 32px;
    border-left: 1px solid #c1baba;
    border-right: 1px solid #c1baba;
    border-top: 1px solid #c1baba;
    padding: 24px;
  }
  .singleArticle:last-of-type {
    border-bottom: 1px solid #c1baba;
  }
  img {
    width: 224px;
    height: 125px;
  }
  h3 {
    font-size: 20px;
    line-height: 26px;
  }
  .singleArticleDate {
    display: inline;
  }
}
</style>
<script>
export default {
  name: 'MiniBoxBottom',
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
          campaign: '',
        }
      },
    },
    recirculation: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    permalink() {
      if (this.utm.source || this.utm.campaign) {
        return `${this.post.permalink}?utm_medium=Internal&utm_campaign=${this.utm.campaign}`
      }
      return this.post.permalink
    },
    formattedDate() {
      if (!this.post.time) return ''

      return new Date(this.post.time * 1000).toLocaleDateString('hr-HR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    },
  },
}
</script>
