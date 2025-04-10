<template>
  <div class="main-container flex homepage">
    <!-- Wallpapers -->
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
    <!-- TG Multiverse Header -->
    <div class="full flex">
      <theader></theader>
    </div>
    <!-- Stocks -->
    <div class="full center stocks-parent">
      <div class="container flex column-horizontal-pad mobile-side-pad">
        <client-only>
          <stocks></stocks>
        </client-only>
      </div>
    </div>
    <!-- Above header banner Piano -->
    <client-only>
      <hometop-ten></hometop-ten>
    </client-only>
    <!-- Actual new TG multiverse header -->
    <nav class="full center relative nayos nayos-multiverse stretch red-nayos">
      <div class="container flex stretch relative column-horizontal-pad">
        <div
          class="sixty flex alt-vertical-center vertical-center mobile-side-pad"
        >
          <a href="https://www.telegram.hr" class="flex nayos-logos">
            <img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
            />
            <img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
              class="dark-mode-only"
            />
          </a>
        </div>
        <div class="forty center align-children-end mobile-side-pad">
          <app-link
            v-show="canLogIn"
            id="pretplatite se - header"
            to="/pretplata"
            class="newbtn"
            >Pretplatite se</app-link
          >
          <a
            v-show="!canLogIn"
            class="column-mini-left-pad desktop-only"
            href="https://pretplata.telegram.hr/subscriptions/subscriptions/my"
            aria-label="Moj račun"
          >
            <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon>
          </a>
          <a
            class="desktop-only column-mini-left-pad"
            aria-label="Prikaži tražilicu"
            :aria-expanded="$store.state.header.showSearchMenu.toString()"
            aria-controls="search"
            @click.prevent="$store.commit('header/updateMenu', 'search')"
          >
            <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon>
          </a>
          <a
            class="column-mini-left-pad"
            :aria-expanded="$store.state.header.showSideMenu.toString()"
            aria-label="Prikaži lijevi meni"
            aria-controls="sidebar"
            @click.prevent="$store.commit('header/updateMenu', 'side')"
          >
            <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon>
          </a>
        </div>
      </div>
    </nav>
    <!-- New subnav no red -->
    <div class="full cantha-block-title relative flex">
      <div
        class="container mobile-side-pad flex relative column-horizontal-pad"
      >
        <nav class="menu flex" role="menu">
          <app-link role="menuitem" to="/vijesti">Vijesti</app-link>
          <app-link role="menuitem" to="/politika-kriminal"
            >Politika & Kriminal</app-link
          >
          <app-link role="menuitem" to="/komentari">Komentari</app-link>
          <app-link role="menuitem" to="/biznis-tech">Biznis & Tech</app-link>
          <app-link role="menuitem" to="/velike-price">Velike priče</app-link>
          <app-link role="menuitem" to="/zivot">Život</app-link>
          <app-link role="menuitem" to="/kultura">Kultura</app-link>
          <app-link to="/super1" role="menuitem">Super1</app-link>
          <app-link to="/telesport" role="menuitem"> Telesport </app-link>
          <app-link to="/podcastovi" role="menuitem"> Podcastovi </app-link>
          <app-link
            role="menuitem"
            to="/tema/budi-u-igri-uz-favbet/"
            class="animate flex highlight-tile desktop-only"
            >Budi u igri uz
            <img src="@/assets/img/logo_favbet_magenta.svg" alt="Favbet logo"
          /></app-link>
        </nav>
        <div class="flex desktop-only">
          <client-only>
            <a
              v-show="canLogIn"
              class="newbtn newbtn-empty"
              @click.prevent="manageLogin"
              >Prijava</a
            >
            <app-link
              v-show="!$store.state.user.access"
              id="pretplatite se - header"
              to="/pretplata"
              class="newbtn"
              >Pretplatite se</app-link
            >
            <a
              v-show="!canLogIn"
              href="https://pretplata.telegram.hr/subscriptions/subscriptions/my"
              class="newbtn newbtn-empty"
              aria-label="Moj račun"
            >
              Moj račun
            </a>
          </client-only>
        </div>
      </div>
    </div>
    <!-- Intro block: G1 + comments -->
    <div v-if="posts.length" class="full relative">
      <div class="container flex relative stretch cantha-intro-block">
        <!-- Billboard 1 -->
        <client-only>
          <breaking></breaking>
          <div v-show="!hasPremium" class="full relative m-order-2">
            <div class="full flex column-horizontal-pad desktop-only">
              <div class="full flex relative column-bottom-border"></div>
            </div>
            <div class="full center relative">
              <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
            </div>
          </div>
        </client-only>
        <!-- breaking -->
        <h2
          v-show="$store.state.breaking.on2"
          class="full major-event-header mobile-order-1 mobile-side-pad column-horizontal-pad center-text m-order-1"
        >
          <app-link
            :to="
              $store.state.breaking.link2 ? $store.state.breaking.link2 : '#'
            "
          >
            {{ $store.state.breaking.title2 }}</app-link
          >
        </h2>
        <div
          class="full flex column-horizontal-pad column-bottom-pad desktop-only"
        >
          <div class="full flex relative column-bottom-border"></div>
        </div>
        <!-- G1 -->
        <div
          class="three-fourths featured-split biggest-font flex-responsive column-horizontal-pad flex split-articles mobile-side-pad mobile-order-1 m-order-1"
        >
          <featured-alt
            v-if="posts[0]"
            :key="`featured-${posts[0].id}`"
            :post="posts[0]"
            mrf-location="homepage"
            mrf-widget="featured"
            mrf-position="1"
          ></featured-alt>
        </div>
        <!-- latest -->
        <client-only>
          <div
            class="fourth flex-responsive mobile-side-pad column-right-pad flex relative m-order-3 no-last-border-mobile"
          >
            <div class="full flex relative latest-line-feed">
              <latest></latest>
            </div>
          </div>
        </client-only>
        <div class="full column-full-pad desktop-only">
          <div class="full column-top-border"></div>
        </div>
        <!-- rest of Gs -->
        <div
          class="full flex cantha-small-block mobile-side-pad stretch m-order-5 column-bottom-pad"
        >
          <div
            v-for="(post, index) in posts.slice(1, 4)"
            :key="`featured${post.id}`"
            class="third flex-responsive column-right-border column-horizontal-pad"
          >
            <medium
              :post="post"
              mrf-location="homepage"
              mrf-widget="featured"
              :mrf-position="(index + 2).toString()"
            ></medium>
          </div>
        </div>
        <!-- Billboard 2 -->
        <div class="full center m-order-6">
          <ad-unit id="telegram_desktop_billboard_v2"></ad-unit>
        </div>

        <!-- Teme -->
        <div
          class="full flex mobile-side-pad stretch secondary-gs-block m-order-8"
        >
          <div class="full column-horizontal-pad column-bottom-pad flex">
            <div class="full column-top-border"></div>
          </div>
          <div
            class="three-fourths flex-responsive column-horizontal-pad column-right-border flex relative featured-split smaller-featured-split show-one-related"
          >
            <featured
              v-for="(post, index) in posts.slice(4, 5)"
              :key="post.id"
              :post="post"
              mrf-location="homepage"
              mrf-widget="featured"
              :mrf-position="(index + 5).toString()"
            ></featured>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad flex relative"
          >
            <medium
              v-for="(post, index) in posts.slice(5, 6)"
              :key="post.id"
              :post="post"
              mrf-location="homepage"
              mrf-widget="featured"
              :mrf-position="(index + 6).toString()"
            ></medium>
          </div>
          <div class="full column-horizontal-pad column-top-pad flex">
            <div class="full column-top-border column-bottom-pad"></div>
          </div>
          <div
            class="three-fourths flex-responsive column-horizontal-pad column-right-border flex relative featured-split smaller-featured-split show-one-related"
          >
            <featured
              v-for="(post, index) in posts.slice(6, 7)"
              :key="post.id"
              :post="post"
              mrf-location="homepage"
              mrf-widget="featured"
              :mrf-position="(index + 7).toString()"
            ></featured>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad flex relative"
          >
            <medium
              v-for="(post, index) in posts.slice(7, 8)"
              :key="post.id"
              :post="post"
              mrf-location="homepage"
              mrf-widget="featured"
              :mrf-position="(index + 8).toString()"
            ></medium>
          </div>
        </div>
        <!-- Još vijesti -->
        <div class="full relative cantha-more-news m-order-10">
          <div
            class="container flex cantha-small-block mobile-side-pad relative stretch column-top-pad"
          >
            <div class="full column-horizontal-pad flex column-bottom-pad">
              <div class="full flex column-top-border mobile-top-border"></div>
            </div>
            <div class="full flex stretch relative no-last-border-mobile">
              <div
                v-for="(post, index) in posts.slice(8, 12)"
                :key="post.id"
                class="fourth flex-responsive column-right-border column-horizontal-pad"
              >
                <standard
                  :post="post"
                  mrf-location="homepage"
                  mrf-widget="featured"
                  :mrf-position="(index + 9).toString()"
                ></standard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <client-only>
      <div v-if="!hasPremium" class="full relative">
        <offers-premium></offers-premium>
      </div>
    </client-only>
    <!-- TG preporuka -->
    <div
      class="full relative darkened-bg column-top-margin column-bottom-margin column-bottom-pad mobile-vertical-pad"
    >
      <div
        class="container mobile-side-pad flex relative stretch column-vertical-pad"
      >
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Telegram preporuka
          </div>
        </div>
        <div
          v-if="breaks[0]"
          class="three-fourths flex-responsive column-horizontal-pad flex split-articles big-split no-mobile-stretch-split alt-big-break center-text column-right-border"
        >
          <standard
            :key="breaks[0].id"
            :post="breaks[0]"
            mrf-location="homepage"
            mrf-widget="preporuka"
          ></standard>
        </div>
        <div class="full column-full-pad tablet-only">
          <div class="full column-bottom-border"></div>
        </div>
        <div
          class="fourth flex-responsive column-horizontal-pad mini-article-list"
        >
          <trending :id="1"></trending>
        </div>
      </div>
    </div>
    <!-- Billboard 3 -->
    <div class="full relative cantha-billboard">
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v3"></ad-unit>
      </div>
    </div>
    <!-- Widget partner special -->
    <client-only>
      <div v-if="!hasPremium" class="full relative">
        <partner-special position="tg"></partner-special>
        <!--<jgl-premium></jgl-premium>-->
      </div>
    </client-only>
    <!-- Sport -->
    <div class="full relative">
      <sport></sport>
    </div>
    <!-- Super1 -->
    <div class="full relative">
      <super1></super1>
    </div>
    <!-- Widget autori -->
    <commentary-alt type="tg"></commentary-alt>
    <!-- Velika rubrika: Zivot -->
    <div class="full relative column-bottom-pad">
      <category-zone zone="zivot"></category-zone>
    </div>
    <!-- Velika rubrika: Kultura -->
    <div class="full relative">
      <category-zone zone="kultura"></category-zone>
    </div>
    <!-- Pretplatnici čitaju -->
    <div class="full relative">
      <div
        class="container flex relative stretch mobile-side-pad column-bottom-pad"
      >
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Pretplatnici čitaju
          </div>
        </div>
        <div
          v-if="breaks[1]"
          class="full column-horizontal-pad flex split-articles big-split alt-big-break center-text"
        >
          <standard
            :key="breaks[1].id"
            :post="breaks[1]"
            mrf-location="homepage"
            mrf-widget="citaju"
          ></standard>
        </div>
        <div class="full flex cantha-small-block stretch column-top-pad">
          <div class="full flex column-horizontal-pad column-bottom-pad">
            <div class="full flex column-top-border"></div>
          </div>
          <div
            v-for="post in breaks.slice(2, 5)"
            :key="post.id"
            class="third flex-responsive column-right-border column-horizontal-pad"
          >
            <medium
              :post="post"
              mrf-location="homepage"
              mrf-widget="citaju"
            ></medium>
          </div>
        </div>
      </div>
    </div>
    <!-- Prekid klub -->
    <client-only>
      <div class="full relative">
        <klub-offers></klub-offers>
      </div>
    </client-only>
    <!-- Widget partneri -->
    <div class="full relative">
      <client-only>
        <partners></partners>
      </client-only>
    </div>
    <!-- Billboard 4 -->
    <div class="full relative">
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v4"></ad-unit>
      </div>
    </div>
    <!-- Openspace -->
    <div class="full relative">
      <os-homepage></os-homepage>
    </div>
    <!-- Books widget
    <div class="full relative">
      <client-only>
        <book-offers></book-offers>
      </client-only>
    </div> -->
    <!-- Book widget Matija -->
    <app-link
      to="/knjiga/drago-hedl-matija"
      class="full flex relative center mobile-side-pad darkened-bg column-full-pad shoo-bottom"
    >
      <div class="container relative flex stretch">
        <div class="forty tablet-full flex flex-responsive center">
          <div class="full center-text newbook-overtitle">Telegram naklada</div>
          <h2 class="full center-text newbook-title newbook-title-smaller">
            Matija
          </h2>
          <div class="full center-text newbook-author">Drago Hedl</div>
          <p class="full center-text newbook-intro">
            Knjiga Matija, žanrovski najbliža dnevniku, tragična je Hedlova
            priča o suicidu sina Matije, doktora biokemije i znanstvenog
            suradnika na američkom Yaleu.
          </p>
        </div>

        <div class="forty tablet-full flex flex-responsive center">
          <img
            src="@/assets/img/tg_book_mockup_hedl.png"
            alt="Naslovnica nove knjige Drage Hedla 'Matija'"
          />
        </div>
        <div class="fifth tablet-full flex flex-responsive center">
          <div
            class="full relative center-text newbook-price bigger-newbook-price"
          >
            24,99€
          </div>
          <div class="full relative center-text neat-numbers">
            Besplatna dostava po cijeloj Hrvatskoj
          </div>
          <div class="full center btn-parent newbook-btn">
            <div class="newbtn clickable huge-newbtn animate">Kupite</div>
          </div>
        </div>
      </div>
    </app-link>
    <!-- Rubrike -->
    <div class="full relative">
      <div class="container flex relative block-5 standard-block">
        <div class="full desktop-only column-horizontal-pad column-bottom-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex">
          <category slug="zivot"></category>
          <category slug="biznis-tech"></category>
          <category slug="pitanje-zdravlja"></category>
          <category slug="velike-price"></category>
        </div>
      </div>
    </div>
    <!-- Odabrati stranu pretplatnici widget -->
    <div class="full relative shoo-bottom">
      <pretplatnici-widget></pretplatnici-widget>
    </div>
    <intext-new></intext-new>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('featured/pullPosts')
    await this.$store.dispatch('featured/pullBreaks')
  },
  data() {
    return {
      loading: false,
      reloadInterval: null,
    }
  },
  computed: {
    hasPremium() {
      return this.$store.getters['user/hasPremium']
    },
    canLogIn() {
      return this.$store.getters['user/canLogIn']
    },
    posts() {
      return this.$store.state.featured.posts
    },
    breaks() {
      return this.$store.state.featured.breaks
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
        headline: 'Telegram.hr',
        description: 'Nekad je nužno odabrati stranu',
        publisher: this.$store.state.header.publisher,
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
      this.loadRemp()
      if (
        this.$store.state.user.access &&
        this.$store.state.user.access.includes('telegram_premium')
      ) {
        return
      }
      this.reloadInterval = setInterval(() => {
        this.$router.push('/?reload=1')
      }, 300000)
    })
    this.$store.dispatch('breaking/pullPosts')
  },
  beforeDestroy() {
    clearInterval(this.reloadInterval)
  },
  methods: {
    loadRemp() {
      window.remplib = window.remplib || {}
      const rempConfig = {
        token: 'd4fa2928-7d6a-4f6c-ac95-1f5a1ddd1702',
        signedIn: !!this.$store.state.user.id,
        userId: this.$store.state.user.id.toString() ?? '',
        cookieDomain: '.telegram.hr',
        storage: 'local_storage',
        storageExpiration: {
          default: 15,
          keys: {
            browser_id: 1051200,
            campaigns: 1051200,
          },
        },
        tracker: {
          url: 'https://tracker.telegram.hr',
          timeSpent: {
            enabled: true,
          },
          canonicalUrl: 'https://tracker.telegram.hr',
        },
        campaign: {
          url: 'https://campaign.telegram.hr',
          pageviewAttributes: {
            postType: 'homepage',
          },
        },
      }
      window.remplib.tracker.init(rempConfig)
      window.remplib.campaign.init(rempConfig)
    },
    manageLogin() {
      if (this.canLogIn) {
        this.$store.dispatch('user/login')
      } else {
        this.$store.dispatch('user/logout')
      }
    },
    handleScroll() {
      const walls = document.getElementsByClassName('wallpaper-banners')
      walls.forEach((item) => {
        item.classList.add('sticky-homepage-wallpaper')
      })
    },
    loadAds() {
      this.$store.dispatch('ads/initAds', { route: this.$route })
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
      title: 'Telegram - najnovije vijesti, komentari, eseji i analize',
      script: [
        {
          vmid: 'schema-ld',
          hid: 'schema-ld',
          type: 'application/ld+json',
          json: this.jsonld,
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Najnovije vijesti, komentari, eseji i analize.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Najnovije vijesti, komentari, eseji i analize.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telegram.hr',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2024/10/tg-main-meta.png',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/',
        },
      ],
      link: [
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'Telegram.hr',
          href: 'https://www.telegram.hr/feed/',
        },
      ],
    }
  },
}
</script>
