<template>
  <div class="full flex article-featured article">
    <nuxt-link class="full flex" :to="post.permalink">
      <img :src="post.image.url" :alt="post.image.alt" loading="lazy" />
    </nuxt-link>
    <div class="full flex article-pad">
      <nuxt-link class="full flex" to="permalink">
        <div class="full flex">
          <h3 :class="{ overtitle: true, dynamicOvertitle: post.overtitle }">
            <span v-if="post.overtitle" class="dynamic-overtitle-element">{{
              post.overtitle
            }}</span>
            <template v-else>
              {{ post.category }}
            </template>
          </h3>
        </div>
        <h2 class="full animate">{{ post.title }}</h2>
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
      </nuxt-link>
      <template v-if="related.length">
        <div class="full flex related-articles relative">
          <h5 class="full">Još o temi</h5>
          <nuxt-link
            v-for="article in related"
            :key="'related' + article.id"
            class="full flex"
            :to="article.permalink"
            >{{ article.title }}</nuxt-link
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Featured',
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
