<template>
  <div v-if="posts" id="keep-reading" class="full">
    <div
      class="container flex relative block-related cantha-related standard-block stretch have-background"
    >
      <div class="full column-horizontal-pad column-top-pad mobile-side-pad">
        <div class="full cantha-separator"></div>
      </div>
      <div class="full flex column-horizontal-pad">
        <div
          class="noththree full center-text column-vertical-pad subsection-title"
        >
          {{ title }}
        </div>
      </div>
      <div class="full flex mobile-side-pad" data-mar>
        <div
          v-for="post in posts.slice(0, 8)"
          :key="post.id"
          class="fourth flex-responsive flex"
        >
          <div
            class="full flex column-horizontal-pad"
            data-mrf-recirculation="single-keep-reading"
          >
            <standard-no-h :post="post"></standard-no-h>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeepReading',
  props: {
    category: {
      type: String,
      required: true,
      default: '',
    },
    p: {
      type: Number,
      required: true,
      default: 0,
    },
    permalink: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      page: 2,
      loading: false,
      cat: this.category,
      // posts: [],
    }
  },
  computed: {
    title() {
      if (this.$route.fullPath.includes('super1')) {
        return 'Ostanite uz Super1'
      }
      if (this.$route.fullPath.includes('telesport')) {
        return 'Ostanite uz Telesport'
      }
      return 'Ostanite uz Telegram'
    },
    posts() {
      if (this.$store.state.category.categories[this.cat] === undefined) {
        return []
      }
      return this.$store.state.category.categories[this.cat].posts.filter(
        (post) => post.permalink !== this.permalink
      )
    },
  },
  mounted() {
    if (this.category === 'partneri' || this.category === 'promo') {
      this.cat = 'vijesti'
    }
    this.$store.dispatch('category/pullPosts', { category: this.cat })
  },
  methods: {
    loadMore() {
      if (this.category) {
        this.loading = true
        if (this.page === 1) {
          this.$store
            .dispatch('category/pullPosts', { category: this.cat })
            .then(() => {
              this.loading = false
              this.page++
            })
        } else {
          this.$store
            .dispatch('category/loadMore', { category: this.cat })
            .then(() => {
              this.loading = false
              this.page++
            })
        }
      }
    },
  },
}
</script>
