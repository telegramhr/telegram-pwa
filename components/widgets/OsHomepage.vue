<template>
  <div
    class="container cantha-small-block flex relative native-block stretch mobile-side-pad column-top-pad"
    data-mrf-recirculation="homepage-openspace"
  >
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <div class="full flex column-horizontal-pad">
      <app-link
        to="/openspace"
        class="noththree full center-text column-vertical-pad subsection-title os-subsection-logo no-mob-bot-pad"
      >
        <img
          src="@/assets/img/openspace_logo_black.svg"
          alt="openspace logo"
          loading="lazy"
        />
        <img
          src="@/assets/img/openspace_logo_negative.svg"
          class="dark-mode-only"
          alt="openspace logo"
          loading="lazy"
        />
      </app-link>
    </div>
    <div class="full column-bottom-pad flex relative the-big-gs stretch">
      <div
        class="half column-horizontal-pad split-articles flex-responsive flex"
      >
        <medium
          v-for="post in posts.slice(0, 1)"
          :key="post.id"
          :post="post"
        ></medium>
      </div>
      <div class="half flex-responsive flex stretch stretchtwo">
        <div
          class="half flex-responsive column-horizontal-pad column-right-border column-left-border flex no-image-block"
        >
          <standard
            v-for="post in posts.slice(1, 2)"
            :key="post.id"
            :post="post"
          ></standard>
        </div>
        <div
          class="half flex-responsive desktop-mini-force column-horizontal-pad flex"
        >
          <standard
            v-for="post in posts.slice(2, 4)"
            :key="post.id"
            :post="post"
          ></standard>
        </div>
      </div>
      <app-link
        to="/openspace"
        class="full mobile-only center new-homeblock-link"
      >
        Još članaka</app-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  async fetch() {
    this.posts = await this.$axios
      .get('/api/category/openspace')
      .then((res) => res.data.posts.slice(0, 4))
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>
