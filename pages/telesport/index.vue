<template>
  <div class="main-container flex telesport ts-home favbet">
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
    <!-- TG Multiverse header -->
    <div class="full flex">
      <theader></theader>
    </div>
    <!-- Actual new TG multiverse header -->
    <nav class="full center relative nayos nayos-multiverse stretch">
      <div class="container flex stretch relative column-horizontal-pad">
        <app-link
          to="/"
          class="third flex alt-vertical-center nayos-logos the-big-t"
        >
          <img src="@/assets/img/t_logo.svg" alt="Telegram logo" />
          <img
            src="@/assets/img/t_logo.svg"
            alt="Telegram logo"
            class="dark-mode-only"
          />
        </app-link>
        <div class="two-thirds center align-children-end mobile-side-pad">
          <a v-show="canLogIn" class="signup-btn" @click.prevent="login"
            >Prijava</a
          >
          <app-link
            v-show="canLogIn"
            id="pretplatite se - header"
            :to="
              $route.fullPath.includes('telesport')
                ? '/pretplata/telesport/'
                : '/pretplata/'
            "
            class="newbtn"
            >Pretplatite se</app-link
          >
          <app-link
            v-show="!canLogIn && !$route.fullPath.includes('super1')"
            id="Poklonite pretplatu - header"
            to="/pretplata/poklon"
            class="newbtn"
            >Poklonite pretplatu</app-link
          >
          <app-link
            v-show="!canLogIn"
            class="column-mini-left-pad desktop-only"
            to="https://pretplata.telegram.hr/subscriptions/subscriptions/my"
            aria-label="Moj račun"
          >
            <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon>
          </app-link>
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
    <!-- Cantha header -->
    <div class="full relative cantha-header">
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
          <app-link to="/telesport" class="logo"
            ><img
              src="@/assets/img/telesport_logo_pink_black.svg"
              class="light-mode-only"
              alt="Telesport logo" />
            <img
              src="@/assets/img/telesport_logo_pink_black.svg"
              class="contrast-mode-only"
              alt="Telesport logo" />
            <img
              src="@/assets/img/telesport_logo_pink_white.svg"
              alt="Telesport logo"
              class="dark-mode-only"
          /></app-link>
          <div class="center desktop-only brought-by">
            <span>Powered by</span>
            <img src="@/assets/img/logo_favbet_magenta.svg" alt="Favbet logo" />
          </div>
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
        <div class="full mobile-side-pad">
          <div class="full desktop-only cantha-separator"></div>
        </div>
      </div>
    </div>
    <!-- New subnav no red -->
    <!-- TODO: link to proper categories -->
    <div class="full cantha-block-title relative flex">
      <div
        class="container mobile-side-pad flex relative column-horizontal-pad"
      >
        <nav class="menu flex" role="menu">
          <app-link role="menuitem" to="/telesport/na-prvu" class="animate"
            >Na prvu</app-link
          >
          <app-link
            role="menuitem"
            to="/telesport/price-telesport"
            class="animate"
            >Priče</app-link
          >
          <app-link role="menuitem" to="/telesport/analize" class="animate"
            >Analize</app-link
          >
          <div class="cantha-fake-menuitem">
            <app-link role="menuitem" to="/telesport/kolumne" class="animate"
              >Kolumne
            </app-link>
            <input
              id="open-cantha-submenu"
              type="checkbox"
              name="open-cantha-submenu"
              class="hide"
            />
            <label for="open-cantha-submenu" class="mobile-only">Kolumne</label>
            <div class="cantha-submenu flex">
              <app-link to="/telesport/kolumne" class="mobile-only"
                >Sve kolumne</app-link
              >
              <app-link to="/tema/akademska-cetvrt/">Akademska četvrt</app-link>
              <app-link to="/tema/lahmentiranje">Lahmentiranje</app-link>
              <app-link to="/tema/covjek-koji-je-buljio-u-ekran/"
                >Čovjek koji je buljio u ekran</app-link
              >
              <app-link to="/tema/drop-shot/">Drop Shot</app-link>
              <app-link to="/tema/gol-u-gostima/">Gol u gostima</app-link>
              <app-link to="/tema/juris/">Juriš</app-link>
              <app-link to="/tema/laboratorij/">Laboratorij</app-link>
              <app-link to="/tema/na-posudbi/">Na posudbi</app-link>
              <app-link to="/tema/na-suncu-i-sjeni/">Na suncu i sjeni</app-link>
              <app-link to="/tema/nogomet-narodu/">Nogomet narodu</app-link>
              <app-link to="/tema/punchlines/">Punchlines</app-link>
              <app-link to="/tema/topnicki-dnevnici/"
                >Topnički dnevnici</app-link
              >
              <app-link to="/tema/teorija-ravne-lopte/"
                >Teorija ravne lopte</app-link
              >
              <app-link to="/tema/aljosa-s-druge-strane-ogledala/"
                >Aljoša s druge strane ogledala</app-link
              >
              <app-link to="/tema/price-iz-davnine/">Priče iz davnine</app-link>
            </div>
          </div>
          <app-link
            role="menuitem"
            to="/tema/svjetsko-rukometno-prvenstvo-uz-favbet/"
            class="animate flex highlight-tile"
            >Svjetsko rukometno prvenstvo uz
            <img src="@/assets/img/logo_favbet_magenta.svg" alt="Favbet logo"
          /></app-link>
        </nav>
        <div class="flex desktop-only">
          <client-only>
            <a
              v-show="canLogIn"
              class="newbtn newbtn-empty"
              @click.prevent="$store.dispatch('user/login')"
              >Prijava</a
            >
            <app-link
              v-show="!$store.state.user.access"
              id="pretplatite se - header"
              to="/pretplata/telesport/"
              class="newbtn"
              >Pretplatite se</app-link
            >
            <app-link
              v-show="!canLogIn"
              to="https://pretplata.telegram.hr/subscriptions/subscriptions/my"
              class="newbtn newbtn-empty"
              aria-label="Moj račun"
            >
              Moj račun
            </app-link>
          </client-only>
        </div>
      </div>
    </div>
    <!-- Intro block: G1 + comments -->
    <div class="full relative">
      <div class="container flex relative stretch cantha-intro-block">
        <!-- Billboard 1 -->
        <client-only>
          <div v-show="!hasPremium" class="full relative m-order-2">
            <div class="full flex column-horizontal-pad desktop-only">
              <div class="full flex relative column-bottom-border"></div>
            </div>
            <div class="full center relative">
              <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
            </div>
          </div>
        </client-only>
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
          ></featured-alt>
        </div>
        <!-- latest -->
        <client-only>
          <div
            class="fourth flex-responsive mobile-side-pad column-right-pad flex relative no-last-border-mobile m-order-2"
          >
            <div class="full flex relative latest-line-feed">
              <latest category="sport"></latest>
            </div>
          </div>
        </client-only>
        <div class="full column-full-pad desktop-only">
          <div class="full column-top-border"></div>
        </div>
        <!-- rest of Gs -->
        <div
          class="full flex cantha-small-block mobile-side-pad stretch column-bottom-pad m-order-3"
        >
          <div
            v-for="post in posts.slice(1, 4)"
            :key="`featured${post.id}`"
            class="third flex-responsive column-right-border column-horizontal-pad"
          >
            <medium :post="post"></medium>
          </div>
        </div>
        <!-- Billboard 2 -->
        <div class="full center m-order-4">
          <ad-unit id="telegram_desktop_billboard_v2"></ad-unit>
        </div>
        <!-- Teme -->
        <div
          class="full flex mobile-side-pad stretch secondary-gs-block m-order-4"
        >
          <div class="full column-horizontal-pad column-bottom-pad flex">
            <div class="full column-top-border"></div>
          </div>
          <div
            class="three-fourths flex-responsive column-horizontal-pad column-right-border flex relative featured-split smaller-featured-split show-one-related"
          >
            <featured
              v-for="post in posts.slice(4, 5)"
              :key="post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad flex relative"
          >
            <medium
              v-for="post in posts.slice(5, 6)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
          <div class="full column-horizontal-pad column-top-pad flex">
            <div class="full column-top-border column-bottom-pad"></div>
          </div>
          <div
            class="three-fourths flex-responsive column-horizontal-pad column-right-border flex relative featured-split smaller-featured-split show-one-related"
          >
            <featured
              v-for="post in posts.slice(6, 7)"
              :key="post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad flex relative"
          >
            <medium
              v-for="post in posts.slice(7, 8)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
        </div>
        <!-- Još vijesti -->
        <div class="full relative cantha-more-news m-order-4">
          <div
            class="container flex cantha-small-block mobile-side-pad relative stretch column-top-pad"
          >
            <div class="full column-horizontal-pad flex column-bottom-pad">
              <div class="full flex column-top-border mobile-top-border"></div>
            </div>
            <div class="full flex stretch relative no-last-border-mobile">
              <div
                v-for="post in posts.slice(8, 12)"
                :key="post.id"
                class="fourth flex-responsive column-right-border column-horizontal-pad"
              >
                <standard :post="post"></standard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <client-only>
      <div v-if="!hasPremium" class="full relative">
        <jgl-premium site="ts"></jgl-premium>
      </div>
    </client-only>
    <!-- Euro 24 -->
    <div
      class="full relative darkened-bg column-top-margin column-bottom-margin column-bottom-pad mobile-vertical-pad favbet-section dark-mode"
    >
      <div
        class="container mobile-side-pad flex relative stretch column-vertical-pad"
      >
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Svjetsko rukometno prvenstvo uz
            <img src="@/assets/img/logo_favbet_blue.svg" alt="Favbet logo" />
          </div>
        </div>
        <div
          class="three-fourths flex-responsive column-horizontal-pad flex split-articles big-split no-mobile-stretch-split alt-big-break center-text column-right-border"
        >
          <standard
            v-for="post in breaks.slice(0, 1)"
            :key="post.id"
            :post="post"
          ></standard>
        </div>
        <div class="full column-full-pad tablet-only">
          <div class="full column-bottom-border"></div>
        </div>
        <div
          class="fourth flex-responsive column-horizontal-pad mini-article-list"
        >
          <div class="full flex">
            <mini
              v-for="post in breaks.slice(1, 5)"
              :key="post.id"
              :post="post"
            ></mini>
          </div>
        </div>
      </div>
    </div>
    <!-- Telesport preporuka
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
            Telesport preporuka
          </div>
        </div>
        <div
          class="three-fourths flex-responsive column-horizontal-pad flex split-articles big-split no-mobile-stretch-split alt-big-break center-text column-right-border"
        >
          <standard
            v-for="post in breaks.slice(0, 1)"
            :key="post.id"
            :post="post"
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
    </div> -->
    <div class="full relative cantha-billboard">
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v3"></ad-unit>
      </div>
    </div>
    <!-- Teme -->
    <div class="full relative">
      <div class="container flex relative stretch">
        <div class="full flex mobile-side-pad stretch secondary-gs-block">
          <div class="full column-horizontal-pad column-bottom-pad flex">
            <div class="full column-top-border"></div>
          </div>
          <div
            class="three-fourths flex-responsive flex stretch column-horizontal-pad article-amnytas mobile-bottom-pad column-right-border"
          >
            <featured
              v-for="post in posts.slice(12, 13)"
              :key="post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad flex relative"
          >
            <medium
              v-for="post in posts.slice(13, 14)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
          <div class="full column-horizontal-pad column-top-pad flex">
            <div class="full column-top-border column-bottom-pad"></div>
          </div>
          <div
            class="three-fourths flex-responsive flex stretch column-horizontal-pad article-amnytas mobile-bottom-pad column-right-border"
          >
            <featured
              v-for="post in posts.slice(14, 15)"
              :key="post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad flex relative"
          >
            <medium
              v-for="post in posts.slice(15, 16)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
        </div>
      </div>
    </div>
    <!-- Widget autori -->
    <commentary-alt type="ts"></commentary-alt>
    <div class="full relative cantha-billboard">
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v4"></ad-unit>
      </div>
    </div>
    <!-- Standard 1/4 block -->
    <div class="full relative">
      <div
        class="container flex cantha-small-block mobile-side-pad relative stretch"
      >
        <div class="full flex stretch relative no-last-border-mobile">
          <div
            v-for="post in morePosts.slice(0, 4)"
            :key="post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad"
          >
            <standard :post="post"></standard>
          </div>
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
        <div
          class="full flex stretch relative no-last-border-mobile column-bottom-pad"
        >
          <div
            v-for="post in morePosts.slice(4, 8)"
            :key="post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad"
          >
            <standard :post="post"></standard>
          </div>
        </div>
      </div>
    </div>
    <div class="full relative">
      <div
        class="container flex cantha-small-block mobile-side-pad relative stretch"
      >
        <div class="full flex stretch relative no-last-border-mobile">
          <div
            v-for="post in morePosts.slice(8)"
            :key="post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad column-top-margin"
          >
            <standard :post="post"></standard>
          </div>
        </div>
        <div class="full center column-full-pad mobile-bottom-pad">
          <div class="newbtn huge-newbtn clickable" @click="loadMore">
            Učitaj više
          </div>
        </div>
      </div>
    </div>
    <!-- Book widget Bili libar 2 -->
    <app-link
      to="/knjiga/boris-dezulovic-bili-libar-2"
      class="full flex relative center mobile-side-pad darkened-bg column-full-pad shoo-bottom"
    >
      <div class="container relative flex stretch">
        <div class="forty tablet-full flex flex-responsive center">
          <div class="full center-text newbook-overtitle">Telegram naklada</div>
          <h2 class="full center-text newbook-title newbook-title-smaller">
            BILI LIBAR 2
          </h2>
          <div class="full center-text newbook-author">Boris Dežulović</div>
          <p class="full center-text newbook-intro">
            Veliki Telegramov hit dobio je nastavak, s 12 još raskošnijih, još
            čudesnijih i luđih priča o jednom nogometnom klubu. I, naravno, ne
            samo o njemu.
          </p>
        </div>

        <div class="forty tablet-full flex flex-responsive center">
          <img
            src="@/assets/img/tg_book_clean_dezulovic2.png"
            alt="Naslovnica nove knjige Borisa Dežulovića 'BILI LIBAR 2'"
          />
        </div>
        <div class="fifth tablet-full flex flex-responsive center">
          <div class="full relative center-text newbook-price">19,99€</div>
          <div class="full relative center-text neat-numbers">
            (150,61 kn)
            <br />
            Besplatna dostava po cijeloj Hrvatskoj
          </div>
          <div class="full center btn-parent newbook-btn">
            <div class="newbtn clickable huge-newbtn animate">Kupite</div>
          </div>
        </div>
      </div>
    </app-link>
    <!-- Footer -->
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('ts/pullPosts')
    await this.$store.dispatch('ts/pullEuro')
  },
  data() {
    return {
      loading: false,
      hasMore: true,
      morePosts: [],
      page: 1,
    }
  },
  computed: {
    hasPremium() {
      return this.$store.getters['user/hasPremium']
    },
    posts() {
      return this.$store.state.ts.posts
    },
    breaks() {
      return this.$store.state.ts.breaks
    },
    jsonld() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Website',
        url: '/telesport',
        name: 'Telesport.hr',
        description: 'Prvi regionalni sportski boutique portal.',
        publisher: this.$store.state.header.publisher,
      }
    },
    canLogIn() {
      return this.$store.getters['user/canLogIn']
    },
  },
  mounted() {
    this.loadAds()
    this.loadMore()
  },
  methods: {
    loadMore() {
      this.$axios.$get('/api/ts/more/' + this.page).then((res) => {
        this.morePosts = [...this.morePosts, ...res]
        this.page++
      })
    },
    loadAds() {
      this.$store.dispatch('ads/initAds', { route: this.$route })
    },
  },
  head() {
    return {
      title: 'Telesport.hr',
      meta: [
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telesport.hr',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: '/telesport/',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/img/ts_share.jpg',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Pratite domaća, regionalna i svjetska sportska događanja uz kolumne sportskih stručnjaka, komentare i detaljne analize novinara na jednom mjestu!',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Pratite domaća, regionalna i svjetska sportska događanja uz kolumne sportskih stručnjaka, komentare i detaljne analize novinara na jednom mjestu!',
        },
      ],
      script: [
        {
          vmid: 'schema-ld',
          hid: 'schema-ld',
          type: 'application/ld+json',
          json: this.jsonld,
        },
      ],
      link: [
        {
          hid: 'feed',
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'Telesport.hr',
          href: 'https://www.telegram.hr/feed/telesport/',
        },
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/telesport/',
        },
      ],
    }
  },
}
</script>
