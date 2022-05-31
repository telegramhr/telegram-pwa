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
      <img :src="author.image" :alt="author.name" />
      <div class="full flex article-pad">
        <div class="full flex desktop-only">
          <h3 class="overtitle">{{ author.name }}</h3>
        </div>
        <h2 :id="'standard-' + post.id" class="full">
          {{ post.portal_title }}
        </h2>
        <h4 class="full">{{ post.subtitle }}</h4>
        <h5 class="full flex article-meta">
          <span v-if="post.recommendations" class="meta-preporuke"
            >{{ post.recommendations }} preporuka</span
          >
          <span class="meta-date">{{ post.time | parseTime }}</span>
        </h5>
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
  },
}
</script>
