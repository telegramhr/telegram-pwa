<template>
  <div class="full flex">
    <div class="container flex relative cantha-big-block stretch">
      <div class="full mobile-side-pad column-horizontal-pad">
        <div class="full cantha-separator"></div>
      </div>
      <div class="full flex column-horizontal-pad">
        <div
          class="noththree full center-text column-vertical-pad subsection-title"
        >
          <app-link :to="link">{{ title | parseCat }}</app-link>
        </div>
      </div>
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
            v-for="post in posts.slice(4, 8)"
            :key="'super-' + post.id"
            :post="post"
          ></mini>
        </div>
        <div class="full column-full-pad">
          <div class="full column-top-border"></div>
        </div>
        <div class="full flex cantha-small-block remove-last-mobile-border">
          <div
            v-for="post in posts.slice(8, 12)"
            :key="'super-' + post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad"
          >
            <standard :post="post"></standard>
          </div>
        </div>
        <app-link :to="link" class="full mobile-only center new-homeblock-link">
          Još članaka</app-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryZone',
  props: {
    zone: {
      type: String,
      required: true,
      default: '',
    },
  },
  async fetch() {
    await this.$store.dispatch('zone/pullPosts', { zone: this.zone })
  },
  data() {
    return {
      showMore: false,
      loading: false,
    }
  },
  computed: {
    posts() {
      return this.$store.state.zone[this.zone].posts
    },
    link() {
      return this.$store.state.zone[this.zone].link
    },
    title() {
      return this.$store.state.zone[this.zone].title
    },
  },
}
</script>
