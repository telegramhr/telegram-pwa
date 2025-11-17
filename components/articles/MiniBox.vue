<template>
  <div>
    <app-link
      v-if="!algorithmType"
      class="singleArticle"
      :to="permalink"
      role="article"
      data-widget="inText"
      :data-id="post.id"
      :aria-labelledby="'standard-' + post.id"
      :data-widget-position="widgetPosition"
      :data-widget-type="widgetType"
      :data-mrf-recirculation="recirculation"
    >
      <img :src="post.image?.url" :alt="post.image?.alt" loading="lazy" />
      <h3 :id="'standard-' + post.id" class="full">
        {{ post.portal_title }}
      </h3>
    </app-link>
    <app-link
      v-if="algorithmType == 'v1'"
      class="singleArticle singleArticlev1"
      :to="permalink"
      role="article"
      data-widget="inText"
      :data-id="post.id"
      :aria-labelledby="'standard-' + post.id"
      :data-widget-position="widgetPosition"
      :data-widget-type="widgetType"
      :data-mrf-recirculation="recirculation"
    >
      <img :src="post.image?.url" :alt="post.image?.alt" loading="lazy" />
      <h3 :id="'standard-' + post.id" class="full">
        {{ post.portal_title }}
      </h3>
      <h4>
        Maksim Valenčić kaže da je bio zgrožen organizacijskim kaosom koji je
        zatekao kad je postavljen za ravnatelja
      </h4>
      <div class="author">
        {{ post.authors.length ? post.authors[0].name.toUpperCase() : '' }}
      </div>
    </app-link>
    <app-link
      v-if="algorithmType == 'v2'"
      class="singleArticle singleArticlev2"
      :to="permalink"
      role="article"
      data-widget="inText"
      :data-id="post.id"
      :aria-labelledby="'standard-' + post.id"
      :data-widget-position="widgetPosition"
      :data-widget-type="widgetType"
      :data-mrf-recirculation="recirculation"
    >
      <img :src="post.image?.url" :alt="post.image?.alt" loading="lazy" />
      <div class="">
        <h3 :id="'standard-' + post.id" class="full">
          {{ post.portal_title }}
        </h3>
        <div class="author">
          {{ post.authors.length ? post.authors[0].name.toUpperCase() : '' }}
        </div>
      </div>
    </app-link>
  </div>
</template>

<style scoped>
.article-standard {
  border: none;
  padding: 0;
  margin: 0;
}
.singleArticle {
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 16px;
  align-items: center;
}
img {
  width: 120px;
  height: 120px;
  object-fit: cover;
}
h3 {
  font-family: 'Lora', 'sans-serif';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
}
.singleArticlev1 {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0px;
  align-items: center;
}
.singleArticlev1 img {
  width: 100%;
  aspect-ratio: 1.94;
  height: auto;
}
.singleArticlev1 h3 {
  text-align: left;
  font-family: 'Lora', 'sans-serif';
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0%;
  max-width: 500px;
  margin-top: 20px;
  margin-bottom: 16px;
}
.singleArticlev1 h4 {
  text-align: left;
  font-family: 'barlow', sans-serif;
  max-width: 460px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #5f5f5f;
}
.singleArticlev1 .author,
.singleArticlev2 .author {
  text-align: left;
  font-family: 'barlow', sans-serif;
  line-height: 18px;
  font-family: Barlow;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 20px;
  color: #5f5f5f;
}
.singleArticlev1 .author {
  width: 100%;
}
.singleArticlev2 {
  display: flex;
  flex-direction: column; /* mobile default */
  gap: 20px;
  width: 100%;
}

.singleArticlev2 img {
  width: 100%;
  aspect-ratio: 1.94;
  height: auto;
  object-fit: cover;
}

.singleArticlev2 > div {
  width: 100%;
}
.singleArticlev2 h3 {
  font-family: 'Lora', 'sans-serif';
  font-weight: 600;
  line-height: 24px;
  font-size: 17px;
  letter-spacing: 0%;
  vertical-align: middle;
}
.singleArticle:hover h3 {
  color: #ae3737;
}
.singleArticlev2 .author {
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
}
@media screen and (min-width: 481px) {
  .singleArticlev1 h3 {
    text-align: center;
    margin-top: 28px;
  }
  .singleArticlev1 h4 {
    text-align: center;
    font-size: 17px;
    line-height: 24px;
  }
  .singleArticlev1 .author {
    text-align: center;
  }
}
@media screen and (min-width: 768px) {
  .singleArticle {
    flex-direction: column;
  }
  .singleArticlev1 {
    padding: 0px 52px;
  }
  .singleArticlev1 img {
    aspect-ratio: 1.78;
  }
  .singleArticlev1 h3 {
    text-align: center;
    margin-top: 28px;
  }
  .singleArticlev1 h4 {
    text-align: center;
    font-size: 17px;
    line-height: 24px;
  }
  .singleArticlev1 .author {
    text-align: center;
  }
  .singleArticlev2 {
    flex-direction: row;
    gap: 20px;
  }

  .singleArticlev2 img {
    width: 290px;
    aspect-ratio: 1.78;
  }

  .singleArticlev2 > div {
    padding-right: 32px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .singleArticlev2 h3 {
    font-size: 18px;
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
    recirculation: {
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
    algorithmType: {
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
  },
}
</script>

<style scoped></style>
