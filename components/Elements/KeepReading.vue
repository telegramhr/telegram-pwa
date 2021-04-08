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
        class="fourth flex desktop-only column-horizontal-pad column-right-border"
      >
        <latest :portal="1" :desktop="false"></latest>
      </section>
      <div
        class="three-fourths flex-responsive flex elevate-over-section mobile-side-pad"
      >
        <template v-for="(post, index) in posts">
          <div
            v-if="index === 0"
            :key="post.id"
            class="third flex-responsive flex"
          >
            <div class="full flex column-horizontal-pad">
              <featured :post="post"></featured>
            </div>
          </div>
          <div v-else :key="post.id" class="third flex-responsive flex">
            <div class="full flex column-horizontal-pad">
              <standard :post="post"></standard>
            </div>
          </div>
        </template>
      </div>
      <div
        class="full center subtle-btn-parent relative clickable"
        @click="loadMore"
      >
        <div v-show="!loading" class="subtle-btn animate">Vidi više</div>
        <div v-show="!loading" class="subtle-btn-line"></div>
        <div v-show="loading" class="full center cool-loader">
          <div class="loader-square">
            <div></div>
            <div></div>
            <div></div>
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
  },
  data() {
    return {
      page: 1,
      loading: false,
      posts: [],
    }
  },
  mounted() {
    this.loadPosts()
  },
  methods: {
    loadPosts() {
      this.$axios
        .post('http://api.cxense.com/public/widget/data', {
          widgetId: '236a2277d3a4b6b64573cb9a9d59ec465840fac7',
        })
        .then((res) => {
          this.posts = res.data.items.map((item) => {
            return {
              id: item['recs-articleid'],
              portal_title: item.title,
              permalink: item.click_url,
              image: { url: item.dominantimage, alt: '' },
              authors: [],
            }
          })
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
