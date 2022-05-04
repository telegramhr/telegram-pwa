<template>
  <div class="full flex">
    <div
      class="container flex relative cantha-big-block elevate-over-section stretch"
    >
      <div class="full mobile-side-pad column-horizontal-pad">
        <div class="full cantha-separator"></div>
      </div>
      <a href="https://super1.telegram.hr" class="full flex relative">
        <h3
          class="full center-text column-full-pad subsection-title s1-subsection-logo"
        >
          <img src="@/assets/img/super1_logo_black.svg" alt="Super1 logo" />
          <img
            src="@/assets/img/super1_logo_white.svg"
            class="dark-mode-only"
            alt="Super1 logo"
          />
        </h3>
      </a>
      <div class="full block-echovald mobile-side-pad flex relative">
        <div class="three-fourths flex-responsive flex stretch">
          <div class="half flex-responsive flex column-horizontal-pad">
            <featured
              v-for="post in posts.slice(0, 1)"
              :key="'super-' + post.id"
              :post="post"
            />
          </div>
          <div
            class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
          >
            <medium
              v-for="post in posts.slice(1, 4)"
              :key="'super-' + post.id"
              :post="post"
            ></medium>
          </div>
        </div>
        <div class="full column-full-pad tablet-only">
          <div class="full column-bottom-border"></div>
        </div>
        <div
          class="fourth flex-responsive desktop-only column-horizontal-pad tablet-fix"
        >
          <mini
            v-for="post in posts.slice(2, 6)"
            :key="'super-' + post.id"
            :post="post"
          ></mini>
        </div>
        <div class="full column-full-pad">
          <div class="full column-top-border"></div>
        </div>
        <div class="full flex cantha-small-block">
          <div
            v-for="post in posts.slice(1, 5)"
            :key="'super-' + post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad"
          >
            <standard :post="post"></standard>
          </div>
        </div>
      </div>
      <div
        class="full mobile-only mobile-side-pad flex relative mobile-top-pad center"
      >
        <a href="https://super1.telegram.hr" class="newbtn altbtn">Vidi više</a>
      </div>
      <!--<section
        v-if="posts.length > 7"
        class="fourth flex-responsive flex mobile-only column-horizontal-pad flex"
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
      </div>-->
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
