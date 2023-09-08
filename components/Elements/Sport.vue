<template>
  <div class="full flex">
    <div class="container flex relative cantha-big-block stretch">
      <div class="full mobile-side-pad column-horizontal-pad">
        <div class="full cantha-separator"></div>
      </div>
      <a href="https://telesport.telegram.hr" class="full flex relative">
        <div
          class="noththree full center-text column-full-pad subsection-title ts-subsection-logo"
        >
          <img
            src="@/assets/img/telesport_logo_black.svg"
            alt="Telesport logo"
            loading="lazy"
          />
          <img
            src="@/assets/img/telesport_logo_white.svg"
            class="dark-mode-only"
            alt="Telesport logo"
            loading="lazy"
          />
        </div>
      </a>
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
        <div class="full column-full-pad tablet-only">
          <div class="full column-bottom-border"></div>
        </div>
        <div
          class="fourth flex-responsive column-horizontal-pad cantha-commentary"
        >
          <commentary type="ts"></commentary>
        </div>
        <div class="full column-full-pad desktop-only">
          <div class="full column-top-border"></div>
        </div>
        <div class="full flex cantha-small-block">
          <div
            v-for="post in posts.slice(4, 8)"
            :key="'sport-' + post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad"
          >
            <standard :post="post"></standard>
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
      })
  },
  data() {
    return {
      showMore: false,
      loading: false,
      page: 2,
      posts: [],
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
