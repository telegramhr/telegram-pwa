<template>
  <div
    class="fourth flex column-horizontal-pad stretch new-author-tile column-right-border"
  >
    <!--
      <app-link :to="post.permalink" class="full flex fancy-author-tile">
        <img :src="author.image" :alt="author.name" />
        <div class="full flex fancy-author-content">
          <h2 class="fancy-author-name">{{ author.name }}</h2>
          <h3 class="fancy-author-title faded">
            {{ author.byline }}
          </h3>
          <p class="fancy-article-preview">
            {{ post.portal_title }}
          </p>
          <h5 class="article-meta">
            <span class="meta-date">{{ post.time | parseTime }}</span>
            <span v-if="post.recommendations" class="meta-preporuke"
              >{{ post.recommendations }} preporuka</span
            >
          </h5>
        </div>
      </app-link>
    -->
    <app-link
      class="full flex article-standard article relative"
      :to="post.permalink"
      :tracker="post.trackerPermalink"
      role="article"
      :aria-labelledby="'standard-' + post.id"
    >
      <img :src="author.image" :alt="author.name" />
      <div class="full flex article-pad">
        <div class="full flex desktop-only">
          <h3 class="overtitle">{{ post.authors[0].name }}</h3>
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
      if (this.post.authors[0].newsletter_list) {
        return this.post.authors[0]
      }
      return this.post.authors[1]
    },
  },
}
</script>
