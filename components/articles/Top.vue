<template>
  <div class="full komentar list-article relative">
    <div class="komentar-author relative flex">
      <span class="full">#{{ i }}</span>
    </div>
    <div class="komentar-box relative">
      <div class="komentar-quotation"><i class="fas fa-fire"></i></div>
      <div class="komentar-image">
        <img :src="post.image.url" alt="post.image.alt" loading="lazy" />
      </div>
      <div class="komentar-content full">
        <h2 class="full">{{ post.portal_title }}</h2>
        <h5 class="full flex article-meta">
          <span class="meta-author"
            ><i>Piše</i> {{ post.authors[0].name }}</span
          >
          <span class="meta-preporuke"
            >{{ post.recommendations }} preporuka</span
          >
          <span class="meta-date">{{ post.time | parseTime }}</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: {
    i: {
      type: Number,
      required: true,
      default() {
        return 1
      },
    },
    post: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>
