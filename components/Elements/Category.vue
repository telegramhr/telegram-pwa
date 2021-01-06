<template>
  <section
    v-if="posts.length"
    class="fourth flex-responsive column-horizontal-pad flex mobile-side-pad"
  >
    <h2 class="full flex section-title">{{ category | parseCat }}</h2>
    <featured :post="posts[0]"></featured>
    <standard
      v-for="i in [1, 2, 3]"
      :key="posts[i].id"
      :post="posts[i]"
    ></standard>
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
      return this.$store.state.category.categories[this.slug].posts
        .filter((x) => {
          const t = this.$store.state.featured.posts.filter((y) => {
            return y.id === x.id
          })
          return t.length === 0
        })
        .slice(0, 4)
    },
    category() {
      return this.$store.state.category.categories[this.slug].name
    },
  },
}
</script>
