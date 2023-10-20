<template>
  <div class="full flex">
    <div class="container flex relative cantha-big-block stretch">
      <div class="full mobile-side-pad column-horizontal-pad column-top-pad">
        <div class="full cantha-separator"></div>
      </div>
      <app-link to="/pitanje-zdravlja" class="full flex">
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title pz-subsection-logo"
          >
            <img
              src="@/assets/img/pz_logo_black.svg"
              alt="PitanjeZdravlja logo"
            />
            <img
              src="@/assets/img/pz_logo_negative.svg"
              class="dark-mode-only"
              alt="PitanjeZdravlja logo"
            />
          </div>
        </div>
      </app-link>
      <div class="full block-echovald mobile-side-pad flex relative">
        <div class="three-fourths flex-responsive flex stretch">
          <div class="half flex-responsive flex column-horizontal-pad">
            <featured
              v-for="post in posts.slice(0, 1)"
              :key="'pz-' + post.id"
              :post="post"
            />
          </div>
          <div
            class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
          >
            <medium
              v-for="post in posts.slice(1, 4)"
              :key="'pz-' + post.id"
              :post="post"
            ></medium>
          </div>
        </div>
        <div class="full column-full-pad tablet-only">
          <div class="full column-bottom-border"></div>
        </div>
        <div
          class="fourth desktop-mini-force flex-responsive column-horizontal-pad remove-last-mobile-border"
        >
          <standard
            v-for="post in posts.slice(4, 8)"
            :key="'pz-' + post.id"
            :post="post"
          ></standard>
          <!-- TO DO: pull more posts from db, currenltly only 6 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Standard from '../articles/Standard.vue'
export default {
  name: 'PitanjeZdravlja',
  components: { Standard },
  async fetch() {
    await this.$store.dispatch('pz/pullPosts')
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
      return this.$store.state.pz.posts
    },
    latest() {
      return this.$store.state.pz.latest
    },
    morePosts() {
      return this.$store.state.pz.morePosts
    },
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$store.dispatch('pz/loadMore', this.page).then(() => {
        this.loading = false
        this.page++
        this.showMore = true
      })
    },
  },
}
</script>
