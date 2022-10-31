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
    <!-- Pretplata first timers -->
    <div v-show="canLogIn" class="full flex">
      <pretplata-first-time></pretplata-first-time>
      <div class="full mobile-side-pad mobile-only">
        <div class="full column-bottom-border-mobile"></div>
      </div>
    </div>
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
          <nuxt-link to="/" class="logo" @click="$fetch"
            ><img
              src="@/assets/img/telegram_logo_black.svg"
              alt="Telegram logo" />
            <img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
              class="dark-mode-only"
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
          class="full column-horizontal-pad center-text desktop-only site-subtitle"
        >
          Portal za društvena i kulturna pitanja
        </h2>
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
          <div v-show="!hasPremium" class="full relative">
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
        <h2
          v-show="$store.state.breaking.on2"
          class="full major-event-header mobile-order-1 mobile-side-pad column-horizontal-pad column-bottom-pad center-text"
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
          class="three-fourths featured-split biggest-font flex-responsive column-horizontal-pad flex split-articles mobile-side-pad column-right-border mobile-order-1"
        >
          <featured-alt
            v-if="posts[0]"
            :key="`featured-${posts[0].id}`"
            :post="posts[0]"
          ></featured-alt>
        </div>
        <!-- komentari -->
        <div
          class="fourth flex-responsive column-horizontal-pad mobile-side-pad cantha-commentary"
        >
          <div class="full mobile-only flex relative">
            <div class="full column-horizontal-pad column-top-pad">
              <div class="full cantha-separator"></div>
            </div>
            <h3 class="full center-text column-full-pad subsection-title">
              Komentari
            </h3>
          </div>
          <commentary type="tg"></commentary>
        </div>
        <div class="full column-full-pad desktop-only">
          <div class="full column-top-border"></div>
        </div>
        <client-only>
          <div
            v-if="$mobile"
            class="full flex relative mobile-only mobile-side-pad"
          >
            <latest :portal="1"></latest>
          </div>
        </client-only>
        <div class="full flex cantha-small-block mobile-side-pad stretch">
          <div
            v-for="post in posts.slice(1, 4)"
            :key="`featured${post.id}`"
            class="third flex-responsive column-right-border column-horizontal-pad"
          >
            <medium :post="post"></medium>
          </div>
        </div>
        <!-- Billboard 2 -->
        <div class="full center">
          <ad-unit id="telegram_desktop_billboard_v2"></ad-unit>
        </div>
        <div class="full column-horizontal-pad mobile-side-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <h3 class="full center-text column-full-pad subsection-title">
          <img src="@/assets/img/telegram_logo_black.svg" alt="Telegram logo" />
          <img
            src="@/assets/img/telegram_logo_white.svg"
            class="dark-mode-only"
            alt="Telegram logo"
          />
          teme
        </h3>
        <div class="full flex mobile-side-pad stretch secondary-gs-block">
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
      </div>
    </div>
    <!-- Prekid pretplata -->
    <client-only>
      <div v-if="!$store.state.user.access" class="full relative mobile-only">
        <div class="container flex relative column-horizontal-pad">
          <app-link
            to="/pretplata"
            class="full cantha-break cantha-mini-break mobile-side-pad flex relative stretch"
          >
            <div class="two-thirds column-full-pad center flex-responsive">
              <div class="full flex article">
                <h2 class="full">
                  Bespoštedno novinarstvo <br />koje gura društvo naprijed.
                </h2>
                <h5 class="full">
                  Za neograničeno čitanje Telegrama i podršku istraživačkim
                  serijalima, odaberite jedan od paketa.
                </h5>
              </div>
            </div>
            <div class="third stretch flex flex-responsive">
              <div class="full flex article">
                <div class="full center">
                  <div class="newbtn">Pretplatite se</div>
                </div>
              </div>
            </div>
          </app-link>
        </div>
      </div>
    </client-only>
    <!-- Još vijesti -->
    <div class="full relative">
      <div
        class="container flex cantha-small-block mobile-side-pad relative stretch"
      >
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <h3 class="full center-text column-full-pad subsection-title">
          Još vijesti
        </h3>
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
    <!-- Billboard 3 -->
    <div class="full relative">
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v3"></ad-unit>
      </div>
    </div>
    <!-- TG preporuka -->
    <div class="full relative">
      <div
        class="container mobile-side-pad flex relative stretch column-bottom-pad"
      >
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <h3 class="full center-text column-full-pad subsection-title">
          <img src="@/assets/img/telegram_logo_black.svg" alt="Telegram logo" />
          <img
            src="@/assets/img/telegram_logo_white.svg"
            class="dark-mode-only"
            alt="Telegram logo"
          />
          preporuka
        </h3>
        <div
          v-if="breaks[0]"
          class="three-fourths flex-responsive column-horizontal-pad flex split-articles big-split alt-big-break center-text column-right-border"
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
        <div class="full column-horizontal-pad">
          <div class="full column-top-pad column-bottom-border"></div>
        </div>
      </div>
    </div>
    <!-- Prekid knjiga -->
    <div class="full relative">
      <div class="container flex relative column-horizontal-pad">
        <app-link
          to="/knjiga/rajko-grlic-neispricane-price"
          class="full cantha-break break-dezulovic mobile-side-pad flex relative stretch"
        >
          <div class="forty column-full-pad center flex-responsive">
            <div class="full flex article">
              <h3 class="full overtitle">Ekskluzivna prednarudžba</h3>
              <h2 class="full">
                Telegram donosi novu knjigu: Neispričane priče Rajka Grlića
              </h2>
              <h5 class="full">
                Novo i dopunjeno izdanje hit knjige čuvenog redatelja, <br />
                na 435 stranica s 21 novom, nikad objavljenom pričom
              </h5>
            </div>
          </div>
          <div class="sixty stretch flex flex-responsive">
            <div class="two-thirds column-top-pad center flex-responsive">
              <img
                src="@/assets/img/tg_knjiga_vizual_grlic.png"
                alt="Portret Rajka Grlića i naslovnica njegove knjige 'Neispričane priče'"
              />
            </div>
            <div class="third center column-horizontal-pad flex-responsive">
              <div class="full flex article">
                <h2 class="full relative center-text">
                  <span class="faded strikethrough">179 kn</span> 119 kn
                </h2>
                <h5 class="full center-text">
                  (<span class="faded strikethrough">23,76€</span> 15,79€)
                  <br />
                  posebna cijena za Telegramove pretplatnike!
                </h5>
                <div class="full center">
                  <div class="newbtn">Kupite</div>
                </div>
              </div>
            </div>
          </div>
        </app-link>
      </div>
    </div>
    <!-- Prekid newsletteri
    <div class="full relative">
      <div class="container flex relative column-horizontal-pad">
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
                  Odaberite tematske i autorske newslettere koje želite primati.
                </h5>
              </div>
            </div>
          </div>
        </app-link>
      </div>
    </div> -->
    <!-- Velika rubrika: Politika i kriminal -->
    <div class="full relative">
      <div class="container flex relative">
        <category-big slug="more-news"></category-big>
      </div>
    </div>
    <!--<client-only>
      <div v-if="!hasPremium" class="full relative">
        <offers></offers>
      </div>
    </client-only>-->
    <!-- Mala rubrika: Biznis i tech -->
    <div class="full relative">
      <div class="container flex relative">
        <client-only>
          <category-alt slug="biznis-tech"></category-alt>
        </client-only>
      </div>
    </div>
    <!-- Widget autori -->
    <div class="full mobile-side-pad relative">
      <client-only>
        <div class="full center">
          <authors></authors>
        </div>
      </client-only>
    </div>
    <!-- Odabir urednika -->
    <div class="full relative">
      <div class="container flex relative stretch mobile-side-pad">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <h3 class="full center-text column-full-pad subsection-title">
          Odabir urednika
        </h3>
        <div
          v-if="breaks[1]"
          class="full column-horizontal-pad flex split-articles big-split alt-big-break center-text"
        >
          <standard :key="breaks[1].id" :post="breaks[1]"></standard>
        </div>
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <h3
          class="full center-text column-full-pad subsection-title manual-subsection-adjust"
        >
          Pretplatnici čitaju
        </h3>
        <div class="full flex cantha-small-block stretch">
          <div
            v-for="post in breaks.slice(2, 5)"
            :key="post.id"
            class="third flex-responsive column-right-border column-horizontal-pad"
          >
            <medium :post="post"></medium>
          </div>
        </div>
        <div class="full column-horizontal-pad">
          <div class="full column-top-pad column-bottom-border"></div>
        </div>
      </div>
    </div>
    <!-- Prekid klub -->
    <div class="full relative">
      <div
        class="container flex relative column-horizontal-pad column-bottom-pad"
      >
        <app-link
          to="/klub"
          class="full cantha-break mobile-side-pad flex relative stretch klub-cantha-break"
        >
          <div class="third column-full-pad center flex-responsive">
            <div class="full flex">
              <img
                src="@/assets/img/tg_klub_logo_negative.svg"
                alt="Telegram Klub logo"
                class="klub-break-logo"
              />
              <h5 class="full">
                Klub ekskluzivnih ponuda, pogodnosti i popusta, samo za
                pretplatnike Telegrama.
              </h5>
            </div>
          </div>
          <div class="two-thirds stretch flex flex-responsive">
            <div class="two-thirds stretch center flex-responsive">
              <img
                src="@/assets/img/tg_klub_vizual_widget.jpg"
                alt="Neki od popusta u kazalištima i muzejima koje se nalaze u Telegram Klubu"
              />
            </div>
            <div
              class="third center stretch column-horizontal-pad flex-responsive"
            >
              <div class="full column-left-pad flex article">
                <h5 class="full center-text">
                  Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
                  pretplatnicima.
                </h5>
                <div class="full center">
                  <div class="newbtn">Saznajte više</div>
                </div>
              </div>
            </div>
          </div>
        </app-link>
      </div>
    </div>
    <!-- Prekid dojave
    <div class="full relative desktop-only">
      <div class="container flex relative column-full-pad"
        <app-link
          to="/dojave"
          class="full cantha-break mobile-side-pad flex relative stretch"
        >
          <div class="forty column-full-pad center flex-responsive">
            <div class="full flex article">
              <h3 class="full overtitle">Telegram dojave</h3>
              <h2 class="full">
                Imate saznanja o korupciji? Javite se našim novinarima.
              </h2>
              <h5 class="full">
                Naši su članci otkrili brojne pljačke i nepravilnosti.
              </h5>
            </div>
          </div>
          <div class="sixty stretch flex flex-responsive">
            <div class="sixty column-top-pad center flex-responsive">
              <img
                src="@/assets/img/tg_dojave_visual.png"
                alt="Portreti ministara čiju korupciju je otkrio Telegram"
                class="hard-light-blend"
              />
            </div>
            <div class="forty center column-horizontal-pad flex-responsive">
              <div class="full column-left-pad flex article">
                <div class="full center">
                  <div class="newbtn">Javite nam se</div>
                </div>
                <h5 class="full center-text">
                  Imamo sigurne kanale putem kojih nas možete kontaktirati.
                </h5>
              </div>
            </div>
          </div>
        </app-link>
      </div>
    </div> -->
    <!-- Sport -->
    <div class="full relative">
      <client-only>
        <sport></sport>
      </client-only>
    </div>
    <!-- Widget partneri -->
    <div class="full relative">
      <client-only>
        <partners></partners>
      </client-only>
    </div>
    <!-- Super1 -->
    <div class="full relative">
      <client-only>
        <super1></super1>
      </client-only>
    </div>
    <!-- PitanjeZdravlja -->
    <div class="full relative">
      <client-only>
        <pitanje-zdravlja></pitanje-zdravlja>
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
      <client-only>
        <os-homepage></os-homepage>
      </client-only>
    </div>
    <!-- Linker -->
    <div class="full mobile-side-pad relative">
      <client-only>
        <linker type="naslovnica"></linker>
      </client-only>
    </div>
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
    <div class="full relative">
      <div class="container flex center">
        <div id="linker-526" class="lwdgt" data-wid="526"></div>
      </div>
    </div>
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
    })
  },
  methods: {
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
