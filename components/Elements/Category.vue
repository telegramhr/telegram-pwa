<template>
  <section
    class="fourth flex-responsive column-horizontal-pad column-right-border classic-category flex mobile-side-pad"
  >
    <div class="full mobile-only">
      <div class="full cantha-separator"></div>
    </div>
    <h3 class="full center-text column-bottom-pad subsection-title">
      <nuxt-link :to="'/' + slug">{{ category | parseCat }}</nuxt-link>
    </h3>
    <featured
      v-for="post in posts.slice(0, 1)"
      :key="post.id"
      :post="post"
    ></featured>
    <template v-for="post in posts.slice(1, 4)">
      <medium :key="post.id" :post="post"></medium>
    </template>
  </section>
</template>

<script>
export default {
  name: 'Category',
  props: {
    slug: {
      type: String,
      required: true,
      default: '',
    },
  },
  async fetch() {
    await this.$store.dispatch('category/pullPosts', { category: this.slug })
  },
  computed: {
    posts() {
      return this.$store.state.category.categories[this.slug].posts.filter(
        (x) => {
          const t = this.$store.state.featured.posts.filter((y) => {
            return y.id === x.id
          })
          return t.length === 0
        }
      )
    },
    category() {
      return this.$store.state.category.categories[this.slug].name
    },
  },
}
</script>
