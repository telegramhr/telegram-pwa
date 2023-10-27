<template>
  <section class="full flex mobile-side-pad">
    <div class="full column-horizontal-pad column-top-pad">
      <div class="full cantha-separator"></div>
    </div>
    <div class="full flex column-horizontal-pad">
      <div
        class="noththree full center-text column-vertical-pad subsection-title"
      >
        <app-link :to="link">{{ category | parseCat }}</app-link>
      </div>
    </div>
    <div class="full block-echovald flex relative">
      <div class="three-fourths flex-responsive flex stretch">
        <div class="half flex-responsive flex column-horizontal-pad">
          <featured
            v-for="post in posts.slice(0, 1)"
            :key="post.id"
            :post="post"
          />
        </div>
        <div
          class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
        >
          <medium
            v-for="post in posts.slice(1, 4)"
            :key="post.id"
            :post="post"
          ></medium>
        </div>
      </div>
      <div class="full column-full-pad tablet-only">
        <div class="full column-bottom-border"></div>
      </div>
      <div
        class="fourth desktop-mini-force flex-responsive column-horizontal-pad"
      >
        <standard
          v-for="post in posts.slice(4, 8)"
          :key="post.id"
          :post="post"
        ></standard>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoryBig',
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
          const t = this.$store.state.featured.posts.filter((y, i) => {
            if (i < 12) {
              return y.id === x.id
            }
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
    }
  },
}
</script>
