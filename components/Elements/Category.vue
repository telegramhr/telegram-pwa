<template>
  <section
    class="fourth flex-responsive column-horizontal-pad column-right-border classic-category flex mobile-side-pad"
    :data-mrf-recirculation="`homepage-category-${slug}`"
  >
    <div class="full mobile-only">
      <div class="full cantha-separator"></div>
    </div>
    <div
      class="noththree full center-text column-vertical-pad subsection-title"
    >
      <app-link :to="link">{{ category | parseCat }}</app-link>
    </div>
    <div v-if="posts" class="full flex relative">
      <featured
        v-for="post in posts.slice(0, 1)"
        :key="post.id"
        :post="post"
      ></featured>
      <medium
        v-for="post in posts.slice(1, 4)"
        :key="post.id"
        :post="post"
      ></medium>
    </div>
    <app-link :to="link" class="full mobile-only center new-homeblock-link">
      Još članaka</app-link
    >
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
      if (!this.$store.state.category.categories[this.slug].posts) {
        return []
      }
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
    link() {
      return this.$store.state.category.categories[this.slug].canonical
    },
  },
}
</script>
