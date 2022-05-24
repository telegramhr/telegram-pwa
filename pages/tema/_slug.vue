<template>
  <div :class="['main-container', 'flex', 'category-page', extraClass]">
    <!-- TG Multiverse header -->
    <div class="full flex relative single-article">
      <client-only>
        <!-- TODO: staviti da bude "Članci na temu X" kao što je u section titleu. -->
        <theader :headline="cat | parseCat"></theader>
      </client-only>
    </div>
    <!-- Wallpapers -->
    <div class="full relative">
      <client-only>
        <div v-if="!$mobile" class="container wallpaper-banners">
          <div class="wallpaper-left">
            <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
          </div>
          <div class="wallpaper-right">
            <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
          </div>
        </div>
      </client-only>
    </div>
    <!-- Category header -->
    <div class="full flex relative">
      <div class="container flex mobile-side-pad relative">
        <h1
          class="full section-title center-text column-horizontal-pad os-section-title"
        >
          Članci na temu {{ cat | parseCat }}
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
            :post="post"
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
        <div class="full column-full-pad">
          <div class="full column-bottom-border"></div>
        </div>
      </div>
    </div>
    <!-- Echovald rubrika -->
    <div class="full flex">
      <div
        class="container flex relative block-echovald stretch mobile-side-pad"
      >
        <div class="three-fourths flex-responsive flex stretch">
          <div class="half flex-responsive flex column-horizontal-pad">
            <featured
              v-for="post in posts.slice(4, 5)"
              :key="post.id"
              :post="post"
            />
          </div>
          <div
            class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
          >
            <medium
              v-for="post in posts.slice(5, 8)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
        </div>
        <div
          class="fourth flex-responsive column-horizontal-pad desktop-mini-force"
        >
          <!-- TODO: add more posts in initial load and add them from here onward -->
          <standard
            v-for="post in posts.slice(1, 5)"
            :key="post.id"
            :post="post"
          ></standard>
        </div>
        <div class="full relative center">
          <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
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
            v-for="post in posts.slice(5, 9)"
            :key="post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad"
          >
            <standard :post="post"></standard>
          </div>
          <div class="full flex column-top-pad">
            <div
              v-for="post in posts.slice(1, 5)"
              :key="post.id"
              class="fourth flex-responsive column-right-border column-horizontal-pad"
            >
              <standard :post="post"></standard>
            </div>
          </div>
          <div v-if="posts.length > 9" class="full flex column-vertical-pad">
            <div
              v-for="post in posts.slice(9)"
              :key="post.id"
              class="fourth flex-responsive column-horizontal-pad column-bottom-pad"
            >
              <standard :post="post"></standard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Read more widget -->
    <div class="full flex relative">
      <div class="container flex relative column-full-pad">
        <div class="full center relative clickable" @click="loadMore">
          <div v-show="!loading" class="newbtn altbtn animate">
            Učitaj još članaka
          </div>
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
  <!--<div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>

    <div class="block-title news-block-title full mobile-side-pad">
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <h1 class="full column-left-pad">{{ category }}</h1>
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
          <template v-for="i in [0, 1, 2, 3]">
            <featured v-if="posts[i]" :key="i" :post="posts[i]" />
          </template>
        </div>
        <div class="full flex mobile-only">
          <newsletter></newsletter>
        </div>
        <div
          class="third flex-responsive column-horizontal-pad flex mobile-side-pad"
        >
          <template v-for="i in [4, 5, 6, 7, 8]">
            <standard v-if="posts[i]" :key="i" :post="posts[i]" />
          </template>
        </div>
      </section>
      <section
        class="fourth flex-responsive flex komentari mobile-side-pad column-horizontal-pad column-right-border"
      >
        <div class="full flex desktop-only">
          <latest :portal="1"></latest>
          <div class="full column-horizontal-pad column-top-pad">
            <div class="full cantha-separator"></div>
          </div>
          <h3 class="full center-text column-full-pad subsection-title">
            Newsletter
          </h3>
          <newsletter></newsletter>
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
        v-if="hasMore"
        class="full center subtle-btn-parent relative clickable"
        @click="loadMore"
      >
        <div class="subtle-btn animate">Vidi više</div>
        <div class="subtle-btn-line"></div>
        <div class="full center cool-loader hide">
          <div class="loader-square">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>-->
</template>

<script>
export default {
  name: 'TemaIndex',
  async fetch() {
    await this.$axios
      .get('/api/tag/' + this.$route.params.slug)
      .then((res) => {
        this.posts = res.data.posts
        this.category = res.data.tag
        if (res.data.posts.length < 9) {
          this.hasMore = false
        }
      })
      .catch(() => {
        // TODO: error logging
      })
  },
  data() {
    return {
      posts: [],
      category: '',
      morePosts: [],
      page: 2,
      hasMore: true,
    }
  },
  computed: {
    cat() {
      return this.$options.filters.parseCat(this.category)
    },
  },
  mounted() {
    this.$store.dispatch('ads/initAds', { route: this.$route })
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get('/api/tag/' + this.$route.params.slug + '/page/' + this.page)
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
      title: this.cat,
      titleTemplate: 'Više o temi %s | Telegram.hr',
      meta: [
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'website',
        },
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
