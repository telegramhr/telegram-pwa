<template>
  <div class="full flex pz-block">
    <a href="https://telesport.telegram.hr" class="full flex">
      <div class="block-title full mobile-side-pad">
        <div class="container center column-horizontal-pad relative">
          <img
            src="@/assets/img/pz_logo_negative.svg"
            alt="PitanjeZdravlja logo"
          />
        </div>
      </div>
    </a>
    <div
      class="container flex relative cantha-big-block elevate-over-section stretch"
    >
      <div
        class="full block-echovald mobile-side-pad column-bottom-pad flex relative"
      >
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
        <div
          class="fourth desktop-mini-force flex-responsive column-horizontal-pad"
        >
          <standard
            v-for="post in posts.slice(2, 7)"
            :key="'pz-' + post.id"
            :post="post"
          ></standard>
        </div>
      </div>
      <section
        v-if="showMore && morePosts.length"
        class="third flex-responsive flex mobile-only column-horizontal-pad flex mobile-side-pad"
      >
        <standard
          v-for="post in morePosts"
          :key="'pz-' + post.id"
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
import Standard from '../articles/Standard.vue'
export default {
  name: 'Super1',
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
