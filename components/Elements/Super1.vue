<template>
  <div v-if="posts.length" class="full flex">
    <a href="https://super1.telegram.hr" class="full flex super1-block">
      <div class="block-title full mobile-side-pad">
        <div class="container flex relative">
          <h1 class="full column-left-pad">Super1</h1>
        </div>
      </div>
    </a>
    <div class="container flex relative block-4 standard-block super1-block">
      <section class="three-fourths flex-responsive flex elevate-over-section">
        <section
          class="two-thirds flex-responsive flex mobile-side-pad column-horizontal-pad column-right-border"
        >
          <featured :key="'super-' + posts[0].id" :post="posts[0]"></featured>
          <div class="full flex split-articles">
            <medium
              v-for="i in [1, 2, 3]"
              :key="'super-' + posts[i].id"
              :post="posts[i]"
            ></medium>
          </div>
        </section>
        <section
          class="third flex-responsive flex column-horizontal-pad flex mobile-side-pad"
        >
          <standard
            v-for="i in [4, 5, 6]"
            :key="'super-' + posts[i].id"
            :post="posts[i]"
          ></standard>
        </section>
      </section>
      <section
        class="fourth flex desktop-only column-horizontal-pad column-right-border"
      >
        <h2 class="full flex section-title">Upravo se čita</h2>
        <div class="full flex">
          <mini
            v-for="post in reading"
            :key="'reading-' + post.id"
            :post="post"
          ></mini>
        </div>
      </section>
      <section
        v-if="showMore && morePosts.length"
        class="third flex-responsive flex mobile-only column-horizontal-pad flex mobile-side-pad"
      >
        <standard
          v-for="post in morePosts"
          :key="post.id"
          :post="post"
        ></standard>
      </section>
      <div
        class="full center subtle-btn-parent mobile-only relative clickable"
        @click="loadMore"
      >
        <div v-show="!loading" class="subtle-btn animate">Vidi više</div>
        <div v-show="!loading" class="subtle-btn-line"></div>
        <div v-show="loading" class="full center cool-loader hide">
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
  name: 'Super1',
  async fetch() {
    await this.$store.dispatch('super/pullPosts')
  },
  data() {
    return {
      showMore: false,
      loading: false,
      page: 2,
    }
  },
  computed: {
    posts() {
      return this.$store.state.super.posts
    },
    reading() {
      return this.$store.state.super.reading
    },
    morePosts() {
      return this.$store.state.super.morePosts
    },
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$store.dispatch('super/loadMore', this.page).then(() => {
        this.loading = false
        this.page++
        this.showMore = true
      })
    },
  },
}
</script>
