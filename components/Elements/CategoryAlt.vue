<template>
  <section class="full flex mobile-side-pad cantha-mini-block">
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
    <div class="full flex-responsive flex relative the-big-gs stretch">
      <div
        class="half column-horizontal-pad split-articles flex-responsive flex"
      >
        <medium
          v-for="post in posts.slice(0, 1)"
          :key="post.id"
          :post="post"
        ></medium>
      </div>
      <div class="half flex-responsive flex stretch stretchtwo">
        <div
          class="half flex-responsive column-horizontal-pad column-right-border column-left-border flex no-image-block"
        >
          <standard
            v-for="post in posts.slice(1, 2)"
            :key="post.id"
            :post="post"
          ></standard>
        </div>
        <div
          class="half flex-responsive desktop-mini-force column-horizontal-pad flex"
        >
          <standard
            v-for="post in posts.slice(2, 4)"
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
  name: 'CategoryAlt',
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
    },
  },
}
</script>
