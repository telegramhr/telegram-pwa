<template>
  <div class="full">
    <div
      v-if="this.$store.getters['user/hasPremium']"
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
        <template v-for="post in posts.slice(0, 8)">
          <div :key="post.id" class="fourth flex-responsive flex">
            <div class="full flex column-horizontal-pad">
              <standard-no-h :post="post"></standard-no-h>
            </div>
          </div>
        </template>
        <!--<div
          v-if="!$store.getters['user/hasPremium']"
          class="lwdgt"
          :data-wid="id"
          data-infinite="true"
          data-cycles="20"
        ></div>-->
      </div>
    </div>
    <linker v-else type="keep-reading"></linker>
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
    id() {
      if (this.category.includes('superone')) {
        return 659
      }
      return 542
    },
  },
  mounted() {
    if (this.$store.getters['user/hasPremium']) {
      this.loadPosts()
    }
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
