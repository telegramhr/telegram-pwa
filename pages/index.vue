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
    <!-- Above header banner
    <app-link
      to="/pretplata/poklon"
      class="full flex relative center newbook-xmas newbook-gifting column-full-pad dark-mode"
    >
      <img
        src="@/assets/img/tg_visual_2023_xmasbg_green.jpg"
        class="img-as-bg"
        aria-hidden="true"
      />
      <img
        class="ps-xmas1"
        src="@/assets/img/tg_xmas_1.png"
        aria-hidden="true"
      />
      <img
        class="ps-xmas2"
        src="@/assets/img/tg_xmas_2.png"
        aria-hidden="true"
      />
      <div class="container smaller-container relative flex stretch">
        <div class="sixty flex center m-order-2 mobile-full-pad">
          <div class="full newbook-title all-caps desktop-only">
            Poklonite Telegram
          </div>
          <div class="full newbook-author all-caps">
            Dar koji se otvara svaki dan
          </div>
          <p class="full newbook-intro desktop-only">
            Ovih praznika prijateljima, partnerima ili ukućanima poklonite
            godinu dana pretplate, po posebnoj cijeni samo za vas
          </p>
          <p class="full newbook-intro mobile-only">
            Za praznike poklonite nekom godinu dana Telegram pretplate, po
            posebnoj cijeni za Vas
          </p>
          <div class="full relative newbook-price">
            <span class="faded strikethrough">78€</span> 29,99€
          </div>
          <div class="full flex btn-parent newbook-btn">
            <div class="newbtn clickable huge-newbtn animate">Poklonite</div>
          </div>
        </div>
        <div class="forty flex center m-order-1">
          <img
            src="@/assets/img/tg_visual_xmas_pretplata_alt.png"
            aria-hidden="true"
          />
        </div>
      </div>
    </app-link> -->
    <!-- Cantha header -->
    <div class="full relative cantha-header">
      <div class="container flex relative column-top-pad column-horizontal-pad">
        <div class="full center relative desktop-only">
          <a
            class="cantha-menubtn"
            aria-label="Prikaži lijevi meni"
            :aria-expanded="$store.state.header.showSideMenu.toString()"
            aria-controls="sidebar"
            @click.prevent="$store.commit('header/updateMenu', 'side')"
          >
            <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon
          ></a>
          <app-link to="/" class="logo" @click="$fetch"
            ><img
              src="@/assets/img/telegram_logo_black.svg"
              alt="Telegram logo" />
            <img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
              class="dark-mode-only"
          /></app-link>
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
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full column-horizontal-pad center-text desktop-only site-subtitle"
        >
          Nekad je nužno odabrati stranu
        </app-link>
        <div class="full mobile-side-pad">
          <div class="full desktop-only cantha-separator"></div>
        </div>
        <breaking></breaking>
      </div>
    </div>
    <!-- New subnav no red -->
    <div class="full cantha-block-title relative flex">
      <div
        class="container mobile-side-pad flex relative column-horizontal-pad"
      >
        <nav class="menu desktop-only flex" role="menu">
          <app-link role="menuitem" to="/vijesti">Vijesti</app-link>
          <app-link role="menuitem" to="/politika-kriminal"
            >Politika & Kriminal</app-link
          >
          <app-link role="menuitem" to="/komentari">Komentari</app-link>
          <app-link role="menuitem" to="/biznis-tech">Biznis & Tech</app-link>
          <app-link role="menuitem" to="/velike-price">Velike priče</app-link>
          <app-link role="menuitem" to="/zivot">Život</app-link>
          <app-link role="menuitem" to="/kultura">Kultura</app-link>
          <app-link role="menuitem" to="/openspace">Openspace</app-link>
          <app-link to="/super1" role="menuitem">Super1</app-link>
          <a href="https://telesport.telegram.hr" role="menuitem">
            Telesport
          </a>
          <app-link role="menuitem" to="/pitanje-zdravlja"
            >PitanjeZdravlja</app-link
          >
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
            <app-link
              v-show="!canLogIn"
              to="/moj-racun"
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
          class="full flex cantha-small-block mobile-side-pad stretch m-order-5"
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
        <div class="full relative cantha-more-news m-order-10">
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
          <standard :key="breaks[0].id" :post="breaks[0]"></standard>
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
    <!-- Velika rubrika: Politika i kriminal -->
    <div class="full relative">
      <div class="container flex relative column-bottom-pad">
        <category-big slug="more-news"></category-big>
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
    <!-- Widget autori -->
    <commentary-alt type="tg"></commentary-alt>
    <!-- Super1 -->
    <div class="full relative">
      <super1></super1>
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
          <standard :key="breaks[1].id" :post="breaks[1]"></standard>
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
            <medium :post="post"></medium>
          </div>
        </div>
      </div>
    </div>
    <!-- PitanjeZdravlja -->
    <div class="full relative">
      <pitanje-zdravlja></pitanje-zdravlja>
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
    <!-- Rubrike -->
    <div class="full relative">
      <div class="container flex relative block-5 standard-block">
        <div class="full desktop-only column-horizontal-pad column-bottom-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex">
          <client-only>
            <category slug="zivot"></category>
            <category slug="biznis-tech"></category>
            <category slug="kultura"></category>
            <category slug="velike-price"></category>
          </client-only>
        </div>
      </div>
    </div>
    <!-- Odabrati stranu pretplatnici widget -->
    <div class="full relative shoo-bottom">
      <pretplatnici-widget></pretplatnici-widget>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
// import BookOffers from '../components/Elements/BookOffers.vue'
export default {
  // components: { BookOffers },
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
      return this.$store.state.user.exp * 1000 < new Date().getTime()
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
      this.reloadInterval = setInterval(() => {
        this.$router.push('/?reload=1')
      }, 300000)
    })
  },
  beforeDestroy() {
    clearInterval(this.reloadInterval)
  },
  methods: {
    checkout(termId) {
      if (this.$store.state.user.token) {
        this.checkout2(termId, -1)
      } else {
        const _that = this
        window.tp.pianoId.show({
          screen: 'register',
          width: window.innerWidth > 720 ? 600 : 375,
          loggedIn(data) {
            _that.$store.dispatch('user/setUser', data.user)
            // window.location.reload()
            _that.checkout2(termId, -2)
          },
        })
      }
    },
    checkout2(termId, back) {
      const _that = this
      window.fbq = window.fbq || function () {}
      window.tp.push([
        'init',
        () => {
          window.tp.offer.show({
            offerId: 'OF5JVPQYFLE1',
            termId,
            templateId: 'OTXWXSOL0WWS',
            checkoutFlowId: 'CF65KTMVQXXX',
            closeOnLogout: true,
            complete: (data) => {
              _that.$store.dispatch('user/checkAccess')
              window.marfeel.cmd.push([
                'compass',
                function (compass) {
                  compass.trackConversion('subscribe')
                },
              ])
              window.fbq('track', 'Purchase', {
                content_ids: data.termId,
                currency: data.chargeCurrency,
                value: data.chargeAmount,
              })
              window.fbq('track', 'Subscribe', {
                currency: data.chargeCurrency,
                value: data.chargeAmount,
              })
              window.PianoESP &&
                typeof window.PianoESP.handleUserDataPromise === 'function' &&
                window.PianoESP.handleUserDataPromise({
                  email: _that.$store.state.user.email,
                  squads: [2128, 2555, 2554],
                }).then(() => {
                  _that.$router.go(back)
                })
            },
          })
        },
      ])
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
