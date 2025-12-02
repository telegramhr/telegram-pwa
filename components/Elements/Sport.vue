<template>
  <div class="full flex">
    <div class="container flex relative cantha-big-block stretch">
      <div class="full mobile-side-pad column-horizontal-pad">
        <div class="full cantha-separator"></div>
      </div>
      <app-link to="/telesport" class="full flex relative">
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title ts-subsection-logo"
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
        </div>
      </app-link>
      <div
        class="full block-echovald mobile-side-pad flex relative reorder-echovald column-bottom-pad"
      >
        <div class="three-fourths flex-responsive flex stretch">
          <div class="half flex-responsive flex column-horizontal-pad">
            <featured
              v-for="post in posts.slice(0, 1)"
              :key="'sport-' + post.id"
              :post="post"
              mrf-location="homepage"
              mrf-widget="telesport"
              mrf-position="main"
            />
          </div>
          <div
            class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
          >
            <medium
              v-for="post in posts.slice(1, 4)"
              :key="'sport-' + post.id"
              :post="post"
              mrf-location="homepage"
              mrf-widget="telesport"
              mrf-position="other"
            ></medium>
          </div>
        </div>
        <div class="full column-full-pad tablet-only">
          <div class="full column-bottom-border"></div>
        </div>
        <div
          class="fourth desktop-mini-force flex-responsive column-horizontal-pad"
        >
          <standard
            v-for="post in posts.slice(8, 13)"
            :key="post.id"
            :post="post"
            mrf-location="homepage"
            mrf-widget="telesport"
            mrf-position="other"
          ></standard>
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
            <standard
              :post="post"
              mrf-location="homepage"
              mrf-widget="telesport"
              mrf-position="other"
            ></standard>
          </div>
        </div>
        <app-link
          to="/telesport/"
          class="full mobile-only center new-homeblock-link"
        >
          Još članaka</app-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sport',
  async fetch() {
    await this.$axios.$get('/api/ts/zone/ts-tgfront/').then((data) => {
      this.posts = data
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
}
</script>
