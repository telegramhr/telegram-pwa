<template>
  <div class="full flex">
    <a href="https://telesport.telegram.hr" class="pz-block full flex">
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
      <section
        class="full mobile-side-pad flex-responsive column-bottom-pad flex relative the-big-gs stretch"
      >
        <div
          class="half column-horizontal-pad column-right-border flex-responsive flex"
        >
          <featured
            v-for="post in posts.slice(0, 1)"
            :key="'pz-' + post.id"
            :post="post"
          ></featured>
        </div>
        <div class="half flex-responsive flex stretch stretchtwo">
          <div
            class="half flex-responsive column-horizontal-pad flex stretch no-image-block"
          >
            <standard
              v-for="post in posts.slice(1, 4)"
              :key="'pz-' + post.id"
              :post="post"
            ></standard>
          </div>
          <div
            class="half flex-responsive column-horizontal-pad no-subtitle-block column-left-border flex stretch"
          >
            <standard
              v-for="post in posts.slice(4, 6)"
              :key="'pz-' + post.id"
              :post="post"
            ></standard>
          </div>
        </div>
      </section>
      <!--<div class="full flex stretch column-top-pad relative">
        <div
          v-for="post in posts.slice(1, 4)"
          :key="'pz-' + post.id"
          class="fourth flex-responsive column-right-border column-horizontal-pad"
        >
          <standard :post="post"></standard>
        </div>
        <div
          class="fourth flex-responsive column-horizontal-pad mini-article-list"
        >
          <h3 class="full overtitle column-bottom-pad">Upravo se čita</h3>
          <div class="full flex">
            <mini
              v-for="post in reading.slice(0, 5)"
              :key="'pz-' + post.id"
              :post="post"
            ></mini>
          </div>
        </div>
      </div>-->
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
  <!--<div v-if="posts.length" class="full flex">
    <app-link to="/pitanje-zdravlja" class="full flex pz-block">
      <div class="block-title full mobile-side-pad">
        <div class="container flex relative">
          <h1 class="full column-left-pad">PitanjeZdravlja</h1>
        </div>
      </div>
    </app-link>
    <div class="container flex relative block-4 standard-block pz-block">
      <section class="three-fourths flex-responsive flex elevate-over-section">
        <section
          class="
            two-thirds
            flex-responsive flex
            mobile-side-pad
            column-horizontal-pad column-right-border
          "
        >
          <featured :key="'pz-' + posts[0].id" :post="posts[0]"></featured>
          <div class="full flex split-articles">
            <medium
              v-for="i in [1, 2, 3]"
              :key="'pz-' + posts[i].id"
              :post="posts[i]"
            ></medium>
          </div>
        </section>
        <section
          class="
            third
            flex-responsive flex
            column-horizontal-pad
            flex
            mobile-side-pad
          "
        >
          <standard
            v-for="i in [4, 5, 6]"
            :key="'pz-' + posts[i].id"
            :post="posts[i]"
          ></standard>
        </section>
      </section>
      <section
        class="
          fourth
          flex
          desktop-only
          column-horizontal-pad column-right-border
        "
      >
        <h2 class="full flex section-title">Najnovije</h2>
        <div class="full flex">
          <mini
            v-for="post in latest"
            :key="'latest-' + post.id"
            :post="post"
          ></mini>
        </div>
      </section>
      <section
        v-if="showMore && morePosts.length"
        class="
          third
          flex-responsive flex
          mobile-only
          column-horizontal-pad
          flex
          mobile-side-pad
        "
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
  </div>-->
</template>

<script>
export default {
  name: 'Super1',
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
