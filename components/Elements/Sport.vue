<template>
  <div class="full flex sport-block">
    <a href="https://telesport.telegram.hr" class="full flex">
      <div class="block-title full mobile-side-pad">
        <div class="container center column-horizontal-pad relative">
          <img
            src="@/assets/img/telesport_logo_white.svg"
            alt="Telesport logo"
          />
        </div>
      </div>
    </a>
    <div
      class="container flex relative cantha-big-block elevate-over-section stretch"
    >
      <div class="full block-echovald mobile-side-pad flex relative">
        <div class="three-fourths flex-responsive flex stretch">
          <div class="half flex-responsive flex column-horizontal-pad">
            <featured
              v-for="post in posts.slice(0, 1)"
              :key="'sport-' + post.id"
              :post="post"
            />
          </div>
          <div
            class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
          >
            <medium
              v-for="post in posts.slice(1, 4)"
              :key="'sport-' + post.id"
              :post="post"
            ></medium>
          </div>
        </div>
        <div
          class="fourth flex-responsive column-horizontal-pad cantha-commentary"
        >
          <commentary></commentary>
        </div>
        <div class="full column-full-pad desktop-only">
          <div class="full column-top-border"></div>
        </div>
        <div class="full flex cantha-small-block">
          <div
            v-for="post in posts.slice(1, 5)"
            :key="'sport-' + post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad"
          >
            <standard :post="post"></standard>
          </div>
        </div>
      </div>
      <section
        v-if="posts.length > 7"
        class="third flex-responsive flex mobile-only column-horizontal-pad flex mobile-side-pad"
      >
        <standard
          v-for="post in posts.slice(7)"
          :key="'sport-' + post.id"
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
  name: 'Sport',
  async fetch() {
    await this.$axios
      .get('https://telesport.telegram.hr/wp-json/telegram/pwa2/v1/portal/2')
      .then((res) => {
        this.posts = res.data.posts
        this.reading = res.data.reading
        this.comments = res.data.comments
      })
  },
  data() {
    return {
      showMore: false,
      loading: false,
      page: 2,
      posts: [],
      reading: [],
      comments: [],
    }
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get(
          'https://telesport.telegram.hr/wp-json/telegram/pwa2/v1/portal/2/page/' +
            this.page
        )
        .then((res) => {
          this.posts = [...this.posts, ...res.data.posts]
          this.loading = false
          this.page++
          this.showMore = true
        })
    },
  },
}
</script>
