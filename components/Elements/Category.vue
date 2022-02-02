<template>
  <section class="full flex mobile-side-pad">
    <div class="full column-horizontal-pad column-top-pad">
      <div class="full cantha-separator"></div>
    </div>
    <h3 class="full center-text column-full-pad subsection-title">
      <nuxt-link :to="'/' + slug">{{ category | parseCat }}</nuxt-link>
    </h3>
    <div
      class="
        full
        mobile-side-pad
        flex-responsive flex
        relative
        the-big-gs
        stretch
        column-vertical-pad
      "
    >
      <div class="half column-horizontal-pad flex-responsive flex">
        <featured
          v-for="post in posts.slice(0, 1)"
          :key="post.id"
          :post="post"
        ></featured>
      </div>
      <div class="half flex-responsive flex stretch stretchtwo">
        <div
          class="
            half
            flex-responsive
            column-horizontal-pad column-right-border column-left-border
            flex
            no-image-block
          "
        >
          <standard
            v-for="post in posts.slice(1, 3)"
            :key="post.id"
            :post="post"
          ></standard>
        </div>
        <div
          class="
            half
            flex-responsive
            column-horizontal-pad
            no-subtitle-block
            flex
          "
        >
          <standard
            v-for="post in posts.slice(4, 6)"
            :key="post.id"
            :post="post"
          ></standard>
        </div>
      </div>
    </div>
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
