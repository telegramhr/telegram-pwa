<template>
  <div
    class="full product-gallery flex article-full-width column-top-border column-bottom-border"
  >
    <app-link
      v-for="category in categories"
      :key="category.id"
      :to="category.permalink"
      class="product-gallery-item flex flex-responsive column-vertical-pad"
    >
      <img :src="category.image.url3" />
      <h2 class="full">
        {{ category.title }}
      </h2>
    </app-link>
  </div>
</template>

<script>
export default {
  name: 'ProductCategoryGuide',
  props: {
    post: {
      type: Object,
      required: true,
      default() {
        return {
          id: 0,
        }
      },
    },
  },
  async fetch() {
    this.categories = await this.$axios.$get(
      '/api/shop-guide/related/' + this.post.id
    )
  },
  data() {
    return {
      categories: [],
    }
  },
}
</script>
