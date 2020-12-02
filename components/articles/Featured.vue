<template>
  <div class="full flex article-featured article">
    <app-link class="full flex" :to="post.permalink">
      <img :src="post.image.url" :alt="post.image.alt" loading="lazy" />
    </app-link>
    <div class="full flex article-pad">
      <app-link class="full flex" :to="post.permalink">
        <div class="full flex">
          <h3 :class="{ overtitle: true, dynamicOvertitle: post.overtitle }">
            <span v-if="post.overtitle" class="dynamic-overtitle-element">{{
              post.overtitle
            }}</span>
            <span v-html="post.category"></span>
          </h3>
        </div>
        <h2 class="full animate">{{ post.portal_title }}</h2>
        <h4 class="full">{{ post.subtitle }}</h4>
        <h5 class="full flex article-meta">
          <span class="meta-author"
            ><i>Piše</i>
            {{ post.authors.length ? post.authors[0].name : '' }}</span
          >
          <span class="meta-preporuke"
            >{{ post.recommendations }} preporuka</span
          >
          <span class="meta-date">{{ post.time | parseTime }}</span>
        </h5>
      </app-link>
      <template v-if="related.length">
        <div class="full flex related-articles relative">
          <h5 class="full">Još o temi</h5>
          <app-link
            v-for="article in related"
            :key="'related' + article.id"
            class="full flex"
            :to="article.permalink"
            >{{ article.title }}</app-link
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import AppLink from '@/components/AppLink'
export default {
  name: 'Featured',
  components: { AppLink },
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
  data() {
    return {
      related: [],
    }
  },
}
</script>
