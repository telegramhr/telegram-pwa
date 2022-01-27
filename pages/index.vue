<template>
  <div class="main-container flex homepage">
    <client-only>
      <div v-if="!$mobile" class="container wallpaper-banners animate">
        <div class="wallpaper-left">
          <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
        </div>
        <div class="wallpaper-right">
          <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
        </div>
      </div>
    </client-only>
    <div class="full flex">
      <theader></theader>
      <div class="full header-filler"></div>
    </div>
    <div class="full relative cantha-header desktop-only">
      <div class="container flex relative column-top-pad column-horizontal-pad">
        <div class="full center relative">
          <a
            class="cantha-menubtn"
            aria-label="Prikaži lijevi meni"
            :aria-expanded="$store.state.header.showSideMenu.toString()"
            aria-controls="sidebar"
            @click.prevent="$store.commit('header/updateMenu', 'side')"
          >
            <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon
          ></a>
          <nuxt-link to="/" class="logo" @click="$fetch"
            ><img
              src="@/assets/img/telegram_logo_black.svg"
              alt="Telegram logo"
          /></nuxt-link>
          <a
            aria-label="Prikaži tražilicu"
            class="cantha-searchbtn"
            :aria-expanded="$store.state.header.showSearchMenu.toString()"
            aria-controls="search"
            @click.prevent="$store.commit('header/updateMenu', 'search')"
          >
            <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon>
          </a>
        </div>
        <h2
          class="
            full
            column-horizontal-pad
            center-text
            desktop-only
            site-subtitle
          "
        >
          Portal za društvena i kulturna pitanja
        </h2>
        <div class="full">
          <div class="full cantha-separator"></div>
        </div>
      </div>
    </div>
    <!--<client-only>
      <div
        v-if="
          !(
            ($mobile && $route.name === 'index') ||
            (!$mobile && $route.name === 'category-slug') ||
            $route.name === 'openspace'
          )
        "
        class="full center header-billboard"
      >
        <ad-unit
          id="telegram_desktop_billboard_v1"
          :disable="
            post &&
            (post.disable_ads.includes('all') ||
              (post.category_slug && post.category_slug.includes('openspace')))
          "
        ></ad-unit>
      </div>
    </client-only>-->
    <div
      class="block-title cantha-block-title desktop-only full mobile-side-pad"
    >
      <div class="container flex relative column-full-pad">
        <div class="menu flex" role="menu">
          <app-link role="menuitem" to="/politika-kriminal"
            >Politika & Kriminal</app-link
          >
          <app-link role="menuitem" to="/komentari">Komentari</app-link>
          <app-link role="menuitem" to="/biznis-tech">Biznis & Tech</app-link>
          <app-link role="menuitem" to="/velike-price">Velike priče</app-link>
          <app-link role="menuitem" to="/zivot">Život</app-link>
          <app-link role="menuitem" to="/kultura">Kultura</app-link>
          <app-link role="menuitem" to="/openspace">Openspace</app-link>
          <a href="https://super1.telegram.hr" role="menuitem">Super1</a>
          <a href="https://telesport.telegram.hr" role="menuitem">
            Telesport
          </a>
        </div>
        <div class="flex">
          <client-only>
            <a
              v-show="canLogIn"
              class="newbtn newbtn-empty"
              @click.prevent="login"
              >Prijava</a
            >
            <a
              v-show="!canLogIn"
              class="newbtn newbtn-empty"
              @click.prevent="logout"
              >Odjava</a
            >
            <app-link
              v-show="!$store.state.user.access"
              to="/pretplata"
              class="newbtn"
              >Pretplatite se</app-link
            >
          </client-only>
        </div>
      </div>
    </div>
    <div class="full relative">
      <div
        v-if="posts.length"
        class="container flex relative block-1 elevate-over-section stretch"
      >
        <section
          class="
            full
            mobile-side-pad
            flex-responsive flex
            relative
            the-big-gs
            stretch
            column-bottom-pad
          "
        >
          <div class="half column-horizontal-pad flex-responsive flex">
            <featured :key="posts[0].id" :post="posts[0]"></featured>
          </div>
          <div class="half flex-responsive flex stretch">
            <div
              class="
                half
                flex-responsive
                column-horizontal-pad column-right-border column-left-border
                flex
                no-image-block
              "
            >
              <standard
                v-for="post in posts.slice(3, 5)"
                :key="post.id"
                :post="post"
              ></standard>
            </div>
            <div
              class="
                half
                flex-responsive
                column-horizontal-pad
                no-subtitle-block
                flex
              "
            >
              <standard
                v-for="post in posts.slice(5, 7)"
                :key="post.id"
                :post="post"
              ></standard>
            </div>
          </div>
          <div class="full column-full-pad">
            <div class="full column-top-border"></div>
          </div>
          <div
            class="
              two-thirds
              flex-responsive
              column-horizontal-pad
              flex
              split-articles
              column-right-border
              big-split
            "
          >
            <medium
              v-for="post in posts.slice(1, 3)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
          <div
            class="
              third
              flex-responsive
              column-horizontal-pad
              flex
              cantha-commentary
            "
          >
            <h3 class="full center-text column-bottom-pad subsection-title">
              Komentari & analize
            </h3>
            <commentary></commentary>
          </div>
        </section>
      </div>
    </div>
    <div class="full relative">
      <div v-if="posts.length" class="container flex relative">
        <div class="full center">
          <ad-unit id="telegram_desktop_billboard_v2"></ad-unit>
        </div>
      </div>
    </div>
    <div class="full relative">
      <div class="container flex relative block-2 stretch">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
      </div>
    </div>
    <div class="full relative">
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v3"></ad-unit>
      </div>
      <client-only>
        <linker type="naslovnica"></linker>
      </client-only>
      <sport></sport>
      <client-only>
        <partners></partners>
      </client-only>
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v4"></ad-unit>
      </div>
      <super1></super1>
      <pitanje-zdravlja></pitanje-zdravlja>
      <os-homepage></os-homepage>
      <div class="full flex">
        <div class="container desktop-only flex relative column-full-pad"></div>
      </div>
      <div class="container flex relative block-5 standard-block">
        <client-only>
          <category slug="zivot"></category>
          <category slug="biznis-tech"></category>
          <category slug="kultura"></category>
          <category slug="velike-price"></category>
          <most-read v-if="$mobile"></most-read>
        </client-only>
      </div>
      <div class="container flex center">
        <div id="linker-526" class="lwdgt" data-wid="526"></div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
import PitanjeZdravlja from '@/components/Elements/PitanjeZdravlja'
export default {
  components: { PitanjeZdravlja },
  async fetch() {
    await this.$store.dispatch('featured/pullPosts')
  },
  data() {
    return {
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
      if (title < 0) {
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
      if (this.$route.query.reset_token) {
        window.tp.push([
          'init',
          function () {
            window.tp.pianoId.show({
              displayMode: 'modal',
              screen: 'new_password',
            })
          },
        ])
      }
      this.$store.dispatch('ads/initAds', { route: this.$route })
      if (!this.$store.state.user.access) {
        this.$linker.reloadLinker()
      }
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
        {
          vmid: 'linker-slider',
          hid: 'linker-slider',
          type: 'text/javascript',
          src: 'https://linker.hr/widget/slider/splide.min.js',
          async: true,
        },
      ],
    }
  },
}
</script>
