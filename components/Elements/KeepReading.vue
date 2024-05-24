<template>
  <div class="full">
    <div
      class="container flex relative block-related cantha-related standard-block stretch"
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
      page: 1,
      loading: false,
      posts: [],
    }
  },
  computed: {
    widgetId() {
      if (this.category.includes('super1')) {
        return 'd3bfbc5e544578957e2854362a8f903e5a3477b9'
      }
      return 'eb43035256b53a5328fa62b38d8d96bde4e44037'
    },
  },
  mounted() {
    this.loadPosts()
  },
  methods: {
    loadPosts() {
      if (!this.$storageAvailable) {
        return
      }
      this.$axios
        .post('https://api.cxense.com/public/widget/data', {
          widgetId: this.widgetId,
          context: {
            url: this.permalink,
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
              if (res.data.items[index]) {
                post.trackerPermalink = res.data.items[index].click_url.replace(
                  'http://api.cxense.com/public/widget/click/',
                  ''
                )
              }
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
