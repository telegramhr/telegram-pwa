<template>
  <div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <theader></theader>
    </div>
    <div class="block-title news-block-title full mobile-side-pad">
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <h1 class="full column-left-pad">{{ category }}</h1>
      </div>
    </div>
    <div
      v-if="posts.length"
      class="container flex relative standard-block block-1 stretch"
    >
      <section
        class="three-fourths flex-responsive flex relative the-big-gs stretch elevate-over-section"
      >
        <div
          class="two-thirds flex-responsive flex column-horizontal-pad column-right-border mobile-side-pad"
        >
          <featured v-for="i in [0, 1, 2, 3]" :key="i" :post="posts[i]" />
        </div>
        <div class="full flex mobile-only">
          <newsletter></newsletter>
        </div>
        <div
          class="third flex-responsive column-horizontal-pad flex mobile-side-pad"
        >
          <standard v-for="i in [4, 5, 6, 7, 8]" :key="i" :post="posts[i]" />
        </div>
      </section>
      <section
        class="fourth flex-responsive flex komentari mobile-side-pad column-horizontal-pad column-right-border"
      >
        <div class="full flex desktop-only">
          <h2 class="full flex section-title">Najnovije</h2>
          <!-- 7x mini -->
          <h2 class="full flex section-title">Newsletter</h2>
          <newsletter></newsletter>
          <h2 class="full flex section-title">Najčitanije</h2>
          <!-- 7x mini -->
        </div>
      </section>
      <div
        class="full center subtle-btn-parent relative clickable"
        @click="loadMore"
      >
        <div class="subtle-btn animate">Vidi više</div>
        <div class="subtle-btn-line"></div>
        <div class="full center cool-loader hide">
          <div class="loader-square">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'CategoryIndex',
  async fetch() {
    await this.$axios
      .get('category/' + this.$route.params.category)
      .then((res) => {
        this.posts = res.data.posts
        this.category = res.data.category
      })
  },
  data() {
    return {
      posts: [],
      category: '',
      page: 2,
    }
  },
  methods: {
    loadMore() {
      this.$axios
        .get('category/' + this.$route.params.category + '/page/' + this.page)
        .then((res) => {
          this.posts = [...this.posts, res.data]
          this.page++
        })
    },
  },
}
</script>
