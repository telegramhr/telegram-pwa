<template>
  <section v-if="posts.length" class="full flex relative">
    <div class="container flex relative">
      <div class="full center relative superone-st-bottompad">
        <div class="noththree flex superone-section-title">
          <img
            src="@/assets/img/s1_logo_clean_noline.svg"
            alt="Super1 logo"
            loading="lazy"
          />
          <img
            src="@/assets/img/s1_logo_clean_noline_white.svg"
            alt="Super1 logo"
            class="dark-mode-only"
            loading="lazy"
          />{{ title }}
        </div>
      </div>
      <div class="full flex relative stretch column-bottom-pad">
        <div class="three-fourths flex flex-responsive relative">
          <div class="full flex column-horizontal-pad">
            <superfeat
              v-for="post in posts.slice(0, 1)"
              :key="'super-' + post.id"
              :post="post"
              mrf-location="super1"
              :mrf-widget="category"
              mrf-position="1"
            ></superfeat>
          </div>
        </div>
        <div
          class="fourth flex mini-article-list mobile-side-pad flex-responsive column-horizontal-pad align-children-bottom"
        >
          <div class="noththree full overtitle super-minititle">
            {{ title }} najčitanije
          </div>
          <div
            class="full flex"
            :data-mrf-recirculation="`super1-${category}-najcitanije`"
          >
            <mini
              v-for="post in mostRead.slice(0, 6)"
              :key="post.id"
              :post="post"
            ></mini>
          </div>
        </div>
      </div>
      <div class="full flex relative">
        <div
          v-for="(post, index) in posts.slice(1, 4)"
          :key="post.id"
          class="third flex-responsive flex column-full-pad"
        >
          <superfeat
            :key="post.id"
            :post="post"
            mrf-location="super1"
            :mrf-widget="category"
            :mrf-position="(index + 2).toString()"
          ></superfeat>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SuperBlock',
  props: {
    category: {
      type: String,
      required: true,
      default: 'look',
    },
  },
  async fetch() {
    await this.$store.dispatch('category/pullPosts', {
      category: this.category,
    })
    await this.$store.dispatch('category/mostRead', {
      category: this.category,
    })
  },
  computed: {
    title() {
      return this.$store.state.category.categories[this.category].name
    },
    posts() {
      return this.$store.state.category.categories[this.category].posts.filter(
        (post) => {
          if (post.category_slug.includes('partneri')) {
            return false
          }
          return !this.$store.state.s1.posts
            .slice(0, 9)
            .filter((p) => p.id === post.id).length
        }
      )
    },
    mostRead() {
      return this.$store.state.category.categories[this.category].mostRead
    },
  },
}
</script>
