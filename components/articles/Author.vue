<template>
  <div
    class="fourth flex column-horizontal-pad stretch new-author-tile column-right-border"
  >
    <app-link
      class="full flex article-featured article relative"
      :to="post.permalink"
      :tracker="post.trackerPermalink"
      role="article"
      :aria-labelledby="'standard-' + post.id"
    >
      <img :src="author.image" :alt="author.name" loading="lazy" />
      <div class="full flex article-pad">
        <div class="full flex desktop-only">
          <div class="noththree overtitle">{{ author.name }}</div>
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
        <div class="nothfour full">{{ post.subtitle }}</div>
        <div class="nothfive full flex article-meta">
          <span v-if="post.recommendations" class="meta-preporuke"
            >{{ post.recommendations }} preporuka</span
          >
          <span class="meta-date">{{ post.timem | parseTime }}</span>
        </div>
      </div>
    </app-link>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    author() {
      return this.post.authors
        .filter((author) => author.newsletter_list)
        .shift()
    },
    premiumOnly() {
      return Math.random() <= 0.1
    },
  },
}
</script>
