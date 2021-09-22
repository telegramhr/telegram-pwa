<template>
  <div class="fourth flex column-horizontal-pad mobile-side-pad stretch">
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
