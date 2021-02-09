<template>
  <div class="main-container flex homepage">
    <div v-if="!mobile" class="container wallpaper-banners animate">
      <div class="wallpaper-left">
        <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
      </div>
      <div class="wallpaper-right">
        <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
      </div>
    </div>
    <div class="full flex tg-red">
      <client-only>
        <theader></theader>
      </client-only>
      <div class="full header-filler"></div>
    </div>
    <div
      class="block-title news-block-title header-block-title full mobile-side-pad desktop-only"
    >
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <nuxt-link to="/" class="logo column-left-pad" @click="$fetch"
          ><img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo"
        /></nuxt-link>
        <h2 class="full column-horizontal-pad desktop-only site-subtitle">
          Portal za društvena i kulturna pitanja
        </h2>
      </div>
    </div>
    <div class="full relative">
      <div v-if="posts.length" class="container flex relative block-1 stretch">
        <section
          class="three-fourths mobile-side-pad flex-responsive flex relative the-big-gs stretch elevate-over-section"
        >
          <div
            class="five-sixths column-horizontal-pad flex-responsive flex column-bottom-border column-right-border"
          >
            <featured :key="posts[0].id" :post="posts[0]"></featured>
          </div>
          <aside
            class="sixth desktop-only flex column-horizontal-pad column-bottom-border"
          >
            <client-only>
              <weather></weather>
              <stocks></stocks>
            </client-only>
          </aside>
          <div
            class="two-thirds column-horizontal-pad flex-responsive flex column-right-border column-top-pad"
          >
            <featured :key="posts[1].id" :post="posts[1]"></featured>
            <featured :key="posts[2].id" :post="posts[2]"></featured>
            <featured :key="posts[3].id" :post="posts[3]"></featured>
          </div>
          <div v-if="mobile" class="full center header-billboard mobile-only">
            <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
          </div>
          <div
            class="third flex-responsive column-horizontal-pad flex column-top-pad"
          >
            <medium :key="posts[4].id" :post="posts[4]"></medium>
            <medium :key="posts[5].id" :post="posts[5]"></medium>
            <medium :key="posts[6].id" :post="posts[6]"></medium>
            <medium :key="posts[7].id" :post="posts[7]"></medium>
          </div>
        </section>
        <section
          class="fourth flex-responsive flex komentari mobile-side-pad column-horizontal-pad column-right-border"
        >
          <latest v-if="!mobile" :portal="1"></latest>
          <commentary></commentary>
          <div class="full flex desktop-only">
            <h2 class="full flex section-title">Newsletter</h2>
            <newsletter></newsletter>
          </div>
        </section>
      </div>
      <big-featured></big-featured>
      <section class="full mobile-only">
        <break></break>
      </section>
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v2"></ad-unit>
      </div>

      <div
        v-if="posts"
        class="block-title news-block-title full mobile-side-pad"
      >
        <div class="full block-title-pattern relative"></div>
        <div class="container flex relative">
          <h1 class="column-left-pad full">Još vijesti</h1>
        </div>
      </div>

      <div
        v-if="posts.length"
        class="container flex relative block-2 standard-block stretch"
      >
        <section
          class="fourth flex desktop-only column-horizontal-pad column-right-border"
        >
          <trending :id="1"></trending>
          <h2 class="full flex section-title">Dojave</h2>
          <dojave />
        </section>
        <div class="three-fourths flex-responsive flex elevate-over-section">
          <section
            class="two-thirds flex-responsive flex mobile-side-pad column-horizontal-pad column-right-border"
          >
            <featured :key="posts[8].id" :post="posts[8]"></featured>
            <div class="full flex split-articles">
              <medium
                v-for="i in [9, 10, 11]"
                :key="posts[i].id"
                :post="posts[i]"
              ></medium>
            </div>
          </section>
          <section
            class="third flex-responsive flex mobile-side-pad column-horizontal-pad"
          >
            <standard
              v-for="i in [12, 13, 14]"
              :key="posts[i].id"
              :post="posts[i]"
            ></standard>
          </section>
        </div>
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
          class="full center subtle-btn-parent mobile-only relative clickable"
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
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v3"></ad-unit>
      </div>
      <partners></partners>
      <client-only>
        <sport></sport>
      </client-only>
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v4"></ad-unit>
      </div>
      <client-only>
        <super></super>
      </client-only>
      <div class="full flex">
        <div class="container desktop-only flex relative column-full-pad"></div>
      </div>
      <div class="container flex relative block-5 standard-block">
        <client-only>
          <category slug="zivot"></category>
          <category slug="biznis-tech"></category>
          <category slug="kultura"></category>
          <category slug="velike-price"></category>
          <most-read v-if="mobile"></most-read>
        </client-only>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
import Sport from '~/components/Elements/Sport'
import Super from '~/components/Elements/Super1'
export default {
  components: { Super, Sport },
  async fetch() {
    await this.$store.dispatch('featured/pullPosts')
  },
  data() {
    return {
      mobile: true,
      loading: false,
    }
  },
  computed: {
    posts() {
      return this.$store.state.featured.posts
    },
    morePosts() {
      return this.$store.state.featured.morePosts
    },
    jsonld() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Website',
        url: 'https://www.telegram.hr',
        name: 'Telegram.hr',
        description:
          'Portal za društvena i kulturna pitanja. I svijet koji dolazi.',
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: 'https://www.telegram.hr/search/{search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        ],
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.resize()
      this.loadAds()
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const walls = document.getElementsByClassName('wallpaper-banners')
      const title = document
        .getElementsByClassName('header-block-title')[0]
        .getBoundingClientRect().top
      if (window.scrollY > title) {
        walls.forEach((item) => {
          item.classList.add('sticky-homepage-wallpaper')
        })
      } else {
        walls.forEach((item) => {
          item.classList.remove('sticky-homepage-wallpaper')
        })
      }
    },
    loadAds() {
      this.$store.dispatch('ads/initAds', { route: this.$route })
    },
    resize() {
      this.mobile = window.innerWidth < 1024
    },
    loadMore() {
      this.loading = true
      this.$store.dispatch('featured/loadMore').then(() => {
        this.loading = false
      })
    },
  },
  head() {
    return {
      title: 'Telegram.hr',
      script: [
        {
          vmid: 'schema-ld',
          hid: 'schema-ld',
          type: 'application/ld+json',
          json: this.jsonld,
        },
      ],
    }
  },
}
</script>
