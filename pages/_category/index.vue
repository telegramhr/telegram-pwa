<template>
  <div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="full relative">
      <div v-if="!$mobile" class="container wallpaper-banners">
        <div class="wallpaper-left">
          <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
        </div>
        <div class="wallpaper-right">
          <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
        </div>
      </div>
      <div class="block-title news-block-title full mobile-side-pad">
        <div class="full block-title-pattern relative"></div>
        <div class="container flex relative">
          <h1 class="full column-left-pad">
            {{ cat }}
          </h1>
        </div>
      </div>
      <div
        v-if="posts.length"
        class="container flex relative standard-block block-1 stretch"
      >
        <section
          class="three-fourths flex-responsive flex relative the-big-gs stretch elevate-over-section"
        >
          <div
            class="two-thirds flex-responsive flex column-horizontal-pad column-right-border mobile-side-pad"
          >
            <featured v-for="i in [0, 1, 2, 3]" :key="i" :post="posts[i]" />
          </div>
          <div class="full flex mobile-only">
            <newsletter></newsletter>
          </div>
          <div
            class="third flex-responsive column-horizontal-pad flex mobile-side-pad"
          >
            <standard v-for="i in [4, 5, 6, 7, 8]" :key="i" :post="posts[i]" />
          </div>
        </section>
        <section
          class="fourth flex-responsive flex komentari mobile-side-pad column-horizontal-pad column-right-border"
        >
          <div class="full flex desktop-only">
            <h2 class="full flex section-title less-bottom-margin">
              Newsletteri
            </h2>
            <div class="full flex">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="@/assets/img/tg_newsletter_avatars_pk.jpg"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Jednom tjedno</h3>
                    <h2 class="full newsletter-title">Politika & kriminal</h2>
                    <h3 class="full subtitle">Najbolje iz rubrike</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Tjedni odabir najboljih Telegramovih priča iz rubrike
                    Politika & kriminal.
                  </p>
                  <div class="btn animate btn-unsub">
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="full flex">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar newsletter-dnevni">
                    <img
                      src="@/assets/img/tg_newsletter_avatars_dnevni.jpg"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Radnim danom</h3>
                    <h2 class="full newsletter-title">Dnevni Telegram</h2>
                    <h3 class="full subtitle">Odabir najvažnijih tema</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Iz dana u dan, naši nagrađivani novinari donose važne priče
                    o Hrvatskoj i svijetu, ekskluzivno otkrivaju afere zbog
                    kojih odlaze ministri i objašnjavaju kontekst dnevnih
                    događaja.
                  </p>
                  <div class="btn animate btn-unsub">
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <latest :portal="1"></latest>
            <h2 class="full flex section-title">Newsletter</h2>
            <newsletter></newsletter>
            <!-- <most-read-desktop></most-read-desktop> -->
          </div>
        </section>
        <div v-if="morePosts.length" class="full flex">
          <div
            class="container flex relative native-block stretch mobile-side-pad"
          >
            <div
              v-for="post in morePosts"
              :key="post.id"
              class="fourth flex-responsive column-full-pad"
            >
              <standard :post="post"></standard>
            </div>
          </div>
        </div>
        <div
          class="full center subtle-btn-parent relative clickable"
          @click="loadMore"
        >
          <div v-show="!loading" class="subtle-btn animate">Vidi više</div>
          <div v-show="!loading" class="subtle-btn-line"></div>
          <div v-show="loading" class="full center cool-loader">
            <div class="loader-square">
              <div></div>
              <div></div>
              <div></div>
            </div>
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
    await this.$store
      .dispatch('category/pullPosts', {
        category: this.$route.params.category,
      })
      .catch(() => {
        if (process.server) {
          this.$telegram.context.res.statusCode = 404
        }
        throw new Error('Kategorija ne postoji')
      })
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    posts() {
      return this.$store.state.category.categories[this.$route.params.category]
        ? this.$store.state.category.categories[this.$route.params.category]
            .posts
        : []
    },
    morePosts() {
      return this.$store.state.category.morePosts[this.$route.params.category]
        .posts
    },
    cat() {
      return this.$store.state.category.categories[this.$route.params.category]
        ? this.$store.state.category.categories[this.$route.params.category]
            .name
        : ''
    },
  },
  mounted() {
    this.$store.dispatch('ads/initAds', { route: this.$route })
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$store
        .dispatch('category/loadMore', {
          category: this.$route.params.category,
        })
        .then((res) => {
          this.loading = false
        })
    },
  },
  head() {
    return {
      title: this.cat,
      titleTemplate: 'Kategorija %s | Telegram.hr',
      meta: [
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.cat,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: this.$route.fullPath,
        },
        {
          hid: 'fb:app_id',
          name: 'fb:app_id',
          property: 'fb:app_id',
          content: '1383786971938581',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@TelegramHR',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.$route.fullPath,
        },
      ],
    }
  },
}
</script>
