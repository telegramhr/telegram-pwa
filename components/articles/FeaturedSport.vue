<template>
  <div
    class="full flex article-featured article-featured-alt article"
    role="article"
  >
    <app-link
      class="full flex"
      :to="post.permalink"
      :tracker="post.trackerPermalink"
      :aria-labelledby="'featured-' + post.id"
    >
      <img
        :srcset="srcset"
        :src="post.image.url"
        :alt="post.image.alt"
        loading="lazy"
      />
    </app-link>
    <div class="full flex article-pad">
      <app-link
        class="full flex"
        :to="post.permalink"
        :tracker="post.trackerPermalink"
        :aria-labelledby="'featured-' + post.id"
      >
        <div class="full flex">
          <div
            class="overtitle noththree"
            :class="{ dynamicOvertitle: post.overtitle_tag }"
          >
            <span v-if="post.overtitle_tag" class="dynamic-overtitle-element">{{
              post.overtitle_tag
            }}</span>
            <span>{{ parsedOvertitle }}</span>
          </div>
        </div>
        <h2 :id="'featured-' + post.id" class="full animate">
          <span class="superbold">{{ post.portal_title }}</span>
          <span class="sport-slash">/</span>
          {{ post.subtitle }}
        </h2>
        <div class="nothfive full flex article-meta">
          <span v-if="post.authors.length" class="meta-author"
            ><i>Piše</i>
            {{ post.authors.length ? post.authors[0].name : '' }}</span
          >
          <span v-if="post.recommendations" class="meta-preporuke"
            >{{ post.recommendations }} preporuka</span
          >
          <span class="meta-date">{{ post.timem | parseTime }}</span>
        </div>
      </app-link>
    </div>
    <template v-if="post.related && post.related.length">
      <div class="full flex related-articles relative">
        <div class="nothfive full">Još o temi</div>
        <app-link
          v-for="article in post.related"
          :key="'related' + article.id"
          class="full flex"
          :to="article.permalink"
          >{{ article.title }}</app-link
        >
      </div>
    </template>
  </div>
</template>

<script>
import AppLink from '@/components/AppLink'
export default {
  name: 'FeaturedSport',
  components: { AppLink },
  props: {
    post: {
      required: true,
      type: Object,
      default() {
        return {
          id: '',
          related: [],
          image: {
            url: '',
            alt: '',
            author: '',
          },
          permalink: '',
          title: '',
          overtitle_tag: '',
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
  computed: {
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
