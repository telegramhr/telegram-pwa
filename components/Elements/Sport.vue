<template>
  <div v-if="posts.length">
    <div class="sport-block full flex">
      <div class="block-title full mobile-side-pad">
        <div class="container flex relative">
          <h1 class="full column-left-pad">Telesport</h1>
        </div>
      </div>
    </div>
    <div class="container flex relative block-3 standard-block sport-block">
      <section
        class="three-fourths flex-responsive flex mobile-side-pad elevate-over-section"
      >
        <div
          class="two-thirds flex-responsive flex column-horizontal-pad column-right-border"
        >
          <featured :post="posts[0]"></featured>
          <div class="full flex split-articles">
            <standard
              v-for="i in [1, 2, 3]"
              :key="i"
              :post="posts[i]"
            ></standard>
          </div>
        </div>
        <div class="third flex-responsive column-horizontal-pad flex">
          <standard v-for="i in [4, 5, 6]" :key="i" :post="posts[i]"></standard>
        </div>
      </section>
      <section
        class="fourth flex-responsive flex column-horizontal-pad column-right-border mobile-side-pad"
      >
        <h2 class="full flex desktop-only section-title">Upravo se čita</h2>
        <div class="full flex desktop-only">
          <mini v-for="post in reading" :key="post.id" :post="post"></mini>
        </div>
        <h2 class="full flex section-title">Komentari</h2>
        <div class="full mobile-side-pad komentari">
          <komentar
            v-for="post in comments"
            :key="post.id"
            :post="post"
          ></komentar>
        </div>
      </section>
      <div
        class="full center subtle-btn-parent mobile-only relative clickable"
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
  </div>
</template>

<script>
export default {
  name: 'Sport',
  data() {
    return {
      posts: [],
      comments: [],
      reading: [],
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    loadMore() {},
    getPosts() {
      this.$axios.get('portal/2').then((res) => {
        this.posts = res.data.posts
        this.comments = res.data.comments
        this.reading = res.data.reading
      })
    },
  },
}
</script>
