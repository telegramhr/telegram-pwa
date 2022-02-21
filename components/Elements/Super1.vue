<template>
  <div class="full flex super1-block">
    <a href="https://super1.telegram.hr" class="full flex">
      <div class="block-title full mobile-side-pad">
        <div class="container center column-horizontal-pad relative">
          <img src="@/assets/img/super1_logo_white.svg" alt="Super1 logo" />
        </div>
      </div>
    </a>
    <div
      class="container flex relative cantha-big-block elevate-over-section stretch"
    >
      <section
        class="full mobile-side-pad flex-responsive column-bottom-pad flex relative the-big-gs stretch"
      >
        <div
          class="half column-horizontal-pad column-right-border flex-responsive flex"
        >
          <featured
            v-for="post in posts.slice(0, 1)"
            :key="'sport-' + post.id"
            :post="post"
          ></featured>
        </div>
        <div class="half flex-responsive flex stretch stretchtwo">
          <div
            class="half flex-responsive column-horizontal-pad flex stretch no-image-block"
          >
            <standard
              v-for="post in posts.slice(1, 4)"
              :key="'super-' + post.id"
              :post="post"
            ></standard>
          </div>
          <div
            class="half flex-responsive column-horizontal-pad no-subtitle-block column-left-border flex stretch"
          >
            <standard
              v-for="post in posts.slice(4, 6)"
              :key="'super-' + post.id"
              :post="post"
            ></standard>
          </div>
        </div>
      </section>
      <div class="full flex stretch column-bottom-pad relative">
        <div class="full column-horizontal-pad">
          <div class="full column-top-border column-top-pad"></div>
        </div>
        <div
          v-for="post in posts.slice(1, 4)"
          :key="'super-' + post.id"
          class="fourth flex-responsive mobile-side-pad column-right-border column-horizontal-pad"
        >
          <standard :post="post"></standard>
        </div>
        <div
          class="fourth flex-responsive mobile-side-pad column-horizontal-pad mini-article-list"
        >
          <h3 class="full overtitle column-bottom-pad">Upravo se čita</h3>
          <div class="full flex">
            <mini
              v-for="post in reading.slice(0, 5)"
              :key="'super-' + post.id"
              :post="post"
            ></mini>
          </div>
        </div>
        <section
          v-if="posts.length > 7"
          class="fourth flex-responsive flex mobile-only column-horizontal-pad flex mobile-side-pad"
        >
          <standard
            v-for="post in posts.slice(7)"
            :key="'super-' + post.id"
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
  </div>
</template>

<script>
export default {
  name: 'Super1',
  async fetch() {
    await this.$axios
      .get('https://super1.telegram.hr/wp-json/telegram/pwa2/v1/portal/3')
      .then((res) => {
        this.posts = res.data.posts
        this.reading = res.data.reading
      })
  },
  data() {
    return {
      showMore: false,
      loading: false,
      page: 2,
      posts: [],
      reading: [],
    }
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get(
          'https://super1.telegram.hr/wp-json/telegram/pwa2/v1/portal/3/page/' +
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
