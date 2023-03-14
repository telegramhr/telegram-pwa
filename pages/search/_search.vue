<template>
  <div class="main-container flex category-page">
    <!-- TG Multiverse header -->
    <div class="full flex relative single-article">
      <client-only>
        <theader :headline="`Pretraga: ${search}` | parseCat"></theader>
      </client-only>
    </div>
    <!-- Category header -->
    <div class="full flex relative">
      <div class="container flex mobile-side-pad relative">
        <h1
          class="full section-title center-text column-horizontal-pad os-section-title mobile-bottom-pad"
        >
          Pretraga: '{{ search | parseCat }}'
        </h1>
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
      </div>
    </div>
    <!-- Veliki blok - intro -->
    <div class="full relative">
      <div class="container flex relative stretch block-kaineng mobile-top-pad">
        <div class="full flex">
          <div class="full flex mobile-side-pad stretch">
            <div
              class="full column-horizontal-pad column-top-pad flex split-articles big-split alt-big-break center-text"
            >
              <standard
                v-for="post in posts.slice(0, 1)"
                :key="post.id"
                :post="post"
              ></standard>
            </div>
          </div>
        </div>
        <div class="full flex mobile-side-pad stretch">
          <div class="full flex column-full-pad">
            <div class="full column-top-border"></div>
          </div>
          <div
            v-for="post in posts.slice(1, 4)"
            :key="post.id"
            class="third flex-responsive column-right-border stretch"
          >
            <div class="full flex column-horizontal-pad">
              <featured :post="post"></featured>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Prekid newsletter -->
    <div class="full relative">
      <div class="container flex relative">
        <div class="full column-full-pad">
          <div class="full column-bottom-border"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <app-link
            to="/newsletters"
            class="full cantha-break mobile-side-pad flex relative stretch"
          >
            <div class="third column-full-pad center flex-responsive">
              <div class="full flex article">
                <h3 class="full overtitle">Posebne pogodnosti</h3>
                <h2 class="full">
                  Specijalni newsletteri za Telegramove pretplatnike.
                </h2>
                <h5 class="full">
                  Najbolje od Telegrama, svaki dan u vašem inboxu.
                </h5>
              </div>
            </div>
            <div class="two-thirds stretch flex flex-responsive">
              <div class="two-thirds column-full-pad center flex-responsive">
                <img
                  src="@/assets/img/tg_newsletter_visual.png"
                  alt="Kolekcija Telegramovih newslettera"
                />
              </div>
              <div class="third center flex-responsive">
                <div class="full flex article">
                  <div class="full center">
                    <div class="newbtn">Prijavite se</div>
                  </div>
                  <h5 class="full center-text">
                    Odaberite tematske i autorske newslettere koje želite
                    primati.
                  </h5>
                </div>
              </div>
            </div>
          </app-link>
        </div>
      </div>
    </div>
    <!-- Standard 1/4 block -->
    <div class="full relative">
      <div
        class="container flex cantha-small-block mobile-side-pad relative stretch"
      >
        <div class="full column-full-pad">
          <div class="full column-bottom-border"></div>
        </div>
        <div class="full flex stretch relative no-last-border-mobile">
          <div
            v-for="post in posts.slice(4, 8)"
            :key="post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad column-botton-margin"
          >
            <standard :post="post"></standard>
          </div>
        </div>
      </div>
    </div>
    <!-- Read more widget -->
    <div
      v-if="posts.length"
      class="container flex cantha-small-block mobile-side-pad relative stretch"
    >
      <div v-if="morePosts.length" class="full flex">
        <div
          class="container flex relative native-block stretch mobile-side-pad"
        >
          <div class="full flex stretch relative no-last-border-mobile">
            <div
              v-for="post in morePosts"
              :key="post.id"
              class="fourth flex-responsive column-right-border column-horizontal-pad column-botton-margin"
            >
              <standard :post="post"></standard>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="hasMore"
        class="full center relative clickable column-bottom-pad mobile-bottom-pad"
        @click="loadMore"
      >
        <div v-show="!loading" class="newbtn altbtn animate">Vidi više</div>
        <div v-show="loading" class="full center cool-loader">
          <div class="loader-square">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'CategoryIndex',
  async fetch() {
    await this.$axios
      .get('/api/search/' + encodeURI(this.$route.params.search))
      .then((res) => {
        this.posts = res.data.posts
        if (this.posts.length < 9) {
          this.hasMore = false
        }
      })
  },
  data() {
    return {
      posts: [],
      morePosts: [],
      page: 2,
      loading: false,
      search: this.$route.params.search,
      hasMore: true,
    }
  },
  mounted() {
    this.$store.dispatch('ads/initAds', { route: this.$route })
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get('/api/search/' + this.$route.params.search + '/page/' + this.page)
        .then((res) => {
          this.morePosts = [...this.morePosts, ...res.data.posts]
          this.page++
          this.loading = false
          if (res.data.posts < 9) {
            this.hasMore = false
          }
        })
        .catch(() => {
          // TODO: error logging
        })
    },
  },
  head() {
    return {
      title: `Traži: ${this.$route.params.search}`,
      meta: [
        {
          name: 'robots',
          content:
            'noindex, nofollow, noarchive, nositelinkssearchbox, nosnippet',
        },
      ],
    }
  },
}
</script>
