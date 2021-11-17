<template>
  <div class="full">
    <div class="block-title news-block-title full">
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <h1 class="column-left-pad mobile-side-pad full">Nastavite čitati</h1>
      </div>
    </div>
    <div class="container flex relative block-related standard-block stretch">
      <section
        v-show="!$mobile"
        class="
          fourth
          flex
          desktop-only
          column-horizontal-pad column-right-border
        "
      >
        <latest :portal="1" :desktop="false"></latest>
      </section>
      <div
        class="
          three-fourths
          flex-responsive flex
          elevate-over-section
          mobile-side-pad
        "
      >
        <div
          class="lwdgt"
          data-wid="542"
          data-infinite="true"
          data-cycles="20"
        ></div>
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
      page: 1,
      loading: false,
      posts: [],
    }
  },
  mounted() {
    // this.loadPosts()
  },
  methods: {
    loadPosts() {
      if (!this.$storageAvailable) {
        return
      }
      this.$axios
        .post('https://api.cxense.com/public/widget/data', {
          widgetId: 'eb43035256b53a5328fa62b38d8d96bde4e44037',
          context: {
            url: this.permalink,
            categories: {
              taxonomy: this.category,
            },
          },
          user: {
            ids: {
              usi: this.$cookies.get('cX_P'),
              gru: this.$store.state.user.uid,
            },
          },
        })
        .then((res) => {
          const items = res.data.items.map((item) => {
            return item['recs-articleid']
          })
          this.$axios.get('/api/keep/' + items).then((r) => {
            this.posts = r.data
            this.posts.forEach((post, index) => {
              post.trackerPermalink = res.data.items[index].click_url.replace(
                'http://api.cxense.com/public/widget/click/',
                ''
              )
            })
          })
        })
        .catch(() => {
          // TODO: error logging
        })
    },
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
