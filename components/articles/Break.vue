<template>
  <app-link
    v-show="post.id"
    class="full flex article-break article relative"
    :to="post.permalink"
    :aria-labelledby="'break-' + post.id"
  >
    <div class="blurred-image">
      <img
        :srcset="srcset"
        :src="post.image.url"
        :alt="post.image.alt"
        loading="lazy"
      />
    </div>
    <div class="full flex mobile-side-pad relative">
      <div class="full flex article-pad relative">
        <div class="border-element"></div>
        <div class="full center">
          <img
            src="@/assets/img/telegram_logo_white.svg"
            class="logo"
            alt="Telegram logo"
            loading="lazy"
          />
        </div>
        <div class="noththree overtitle full center-text">Preporuka</div>
        <h2 :id="'break-' + post.id" class="full center-text">
          {{ post.portal_title }}
        </h2>
        <div
          v-if="post.authors.length"
          class="nothfive full article-meta center-text"
        >
          <span class="meta-author"
            ><i>Piše</i>
            {{ post.authors[0].name }}
          </span>
        </div>
        <div class="full flex">
          <img
            class="break-image"
            :src="post.image.url"
            :alt="post.image.alt"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'Break',
  props: {
    type: {
      type: String,
      required: false,
      default: 'homepage',
    },
  },
  computed: {
    post() {
      if (this.type === 'openspace') {
        return this.$store.state.openspace.break
      }
      return this.$store.state.break.post
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
  mounted() {
    if (this.type === 'homepage') {
      this.$store.dispatch('break/pullPosts')
    }
    if (this.type === 'openspace') {
      this.$store.dispatch('openspace/pullBreak')
    }
  },
}
</script>
