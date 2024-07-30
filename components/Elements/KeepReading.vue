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
          Ostanite uz Telegram
        </div>
      </div>
      <div class="full flex mobile-side-pad">
        <div
          v-for="post in posts.slice(0, 8)"
          :key="post.id"
          class="fourth flex-responsive flex"
        >
          <div class="full flex column-horizontal-pad">
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
      // posts: [],
    }
  },
  computed: {
    posts() {
      if (this.$store.state.category.categories[this.category] === undefined) {
        return []
      }
      return this.$store.state.category.categories[this.category].posts.filter(
        (post) => post.permalink !== this.permalink
      )
    },
  },
  mounted() {
    this.$store.dispatch('category/pullPosts', { category: this.category })
  },
  methods: {
    loadMore() {
      if (this.category) {
        this.loading = true
        if (this.page === 1) {
          this.$store
            .dispatch('category/pullPosts', { category: this.category })
            .then(() => {
              this.loading = false
              this.page++
            })
        } else {
          this.$store
            .dispatch('category/loadMore', { category: this.category })
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
