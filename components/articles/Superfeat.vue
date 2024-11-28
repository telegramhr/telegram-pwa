<template>
  <div
    class="full flex article-featured article-superfeat article relative"
    role="article"
    :data-mrf-recirculation="recirculation"
  >
    <app-link
      class="full flex square-img"
      :to="post.permalink"
      :aria-labelledby="'featured-' + post.id"
    >
      <img
        :srcset="srcset"
        :src="post.image.url2 ? post.image.url2 : post.image.url"
        :alt="post.image.alt"
        loading="lazy"
      />
    </app-link>
    <div class="full flex article-pad mobile-side-pad">
      <app-link
        class="full flex"
        :to="post.permalink"
        :aria-labelledby="'featured-' + post.id"
      >
        <h2 :id="'featured-' + post.id" class="full animate">
          <b>{{ parsedOvertitle }}</b> {{ post.single_title | parseCat }}
        </h2>
        <div class="nothfive full flex article-meta">
          <span v-if="post.authors.length" class="meta-author"
            ><i>Piše</i>
            {{ post.authors.length ? post.authors[0].name : '' }}</span
          >
        </div>
      </app-link>
    </div>
  </div>
</template>

<script>
import AppLink from '@/components/AppLink'
export default {
  name: 'Superfeat',
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
      related: [],
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
