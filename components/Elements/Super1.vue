<template>
  <div class="full flex">
    <div class="container flex relative cantha-big-block stretch">
      <div class="full mobile-side-pad column-horizontal-pad">
        <div class="full cantha-separator"></div>
      </div>
      <app-link to="/super1" class="full flex relative">
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title s1-subsection-logo"
          >
            <img
              src="@/assets/img/s1_logo_clean_noline.svg"
              alt="Super1 logo"
            />
            <img
              src="@/assets/img/s1_logo_clean_noline_white.svg"
              alt="Super1 logo"
              class="dark-mode-only"
              loading="lazy"
            />
          </div>
        </div>
      </app-link>
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
            class="half super-sidebar flex column-horizontal-pad column-left-border flex-responsive split-articles"
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
        <!--<div
          class="fourth flex-responsive desktop-only column-horizontal-pad tablet-fix"
        >
          <mini
            v-for="post in posts.slice(4, 8)"
            :key="'super-' + post.id"
            :post="post"
          ></mini>
        </div>-->
        <client-only>
          <div
            class="fourth flex-responsive column-right-pad flex relative no-last-border-mobile"
          >
            <div class="full flex relative latest-line-feed">
              <latest :portal="1"></latest>
            </div>
          </div>
        </client-only>
        <div class="full column-full-pad">
          <div class="full column-top-border"></div>
        </div>
        <div class="full flex cantha-small-block remove-last-mobile-border">
          <div
            v-for="post in posts.slice(4, 8)"
            :key="'super-' + post.id"
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
  name: 'Super1',
  async fetch() {
    await this.$store.dispatch('s1/pullPosts')
  },
  data() {
    return {
      showMore: false,
      loading: false,
    }
  },
  computed: {
    posts() {
      return this.$store.state.s1.posts
    },
  },
}
</script>
