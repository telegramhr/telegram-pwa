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
          class="full column-horizontal-pad center-text desktop-only site-subtitle"
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
        class="container flex relative elevate-over-section stretch"
      >
        <section
          class="full mobile-side-pad flex-responsive flex relative the-big-gs stretch"
        >
          <div
            class="half column-horizontal-pad column-right-border flex-responsive flex"
          >
            <featured :key="posts[0].id" :post="posts[0]"></featured>
          </div>
          <div class="half flex-responsive flex stretch stretchtwo">
            <div
              class="half flex-responsive column-horizontal-pad flex stretch no-image-block"
            >
              <standard
                v-for="post in posts.slice(3, 6)"
                :key="post.id"
                :post="post"
              ></standard>
            </div>
            <div
              class="half flex-responsive column-horizontal-pad no-subtitle-block column-left-border flex stretch"
            >
              <standard
                v-for="post in posts.slice(6, 8)"
                :key="post.id"
                :post="post"
              ></standard>
            </div>
          </div>
          <div class="full column-full-pad">
            <div class="full column-top-border"></div>
          </div>
          <div
            class="two-thirds flex-responsive column-horizontal-pad flex split-articles column-right-border big-split"
          >
            <medium
              v-for="post in posts.slice(1, 3)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
          <div
            class="third flex-responsive column-horizontal-pad flex cantha-commentary"
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
      <div class="container flex cantha-small-block relative stretch">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <h3 class="full center-text column-full-pad subsection-title">
          Još vijesti
        </h3>
        <div class="full flex stretch relative">
          <div
            v-for="post in posts.slice(7, 10)"
            :key="post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad"
          >
            <standard :post="post"></standard>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad mini-article-list"
          >
            <trending :id="1"></trending>
          </div>
        </div>
      </div>
    </div>
    <div class="full relative">
      <div class="container flex relative stretch column-bottom-pad">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <h3 class="full center-text column-full-pad subsection-title">
          <img src="@/assets/img/telegram_logo_black.svg" alt="Telegram logo" />
          preporuka
        </h3>
        <div
          class="three-fourths flex-responsive column-horizontal-pad flex split-articles column-right-border big-split alt-big-break"
        >
          <medium :key="posts[0].id" :post="posts[0]"></medium>
        </div>
        <div class="fourth flex-responsive column-horizontal-pad">
          <standard :key="posts[11].id" :post="posts[11]"></standard>
        </div>
        <div class="full column-horizontal-pad">
          <div class="full column-top-pad column-bottom-border"></div>
        </div>
      </div>
    </div>
    <div class="full relative">
      <div class="container flex relative column-horizontal-pad">
        <app-link
          to="/newsletters"
          class="full cantha-break flex relative stretch"
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
    </div>
    <div class="full relative">
      <div class="container flex relative">
        <category slug="velike-price"></category>
      </div>
    </div>
    <div class="full relative">
      <div class="container flex relative">
        <category-alt slug="biznis-tech"></category-alt>
      </div>
    </div>
    <div class="full relative">
      <client-only>
        <div class="full center">
          <authors></authors>
        </div>
        <linker type="naslovnica"></linker>
      </client-only>
    </div>
    <div class="full relative">
      <div class="container flex relative stretch">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <h3 class="full center-text column-full-pad subsection-title">
          Odabir urednika
        </h3>
        <div
          class="full column-horizontal-pad flex split-articles big-split alt-big-break center-text"
        >
          <medium :key="posts[1].id" :post="posts[1]"></medium>
        </div>
        <div class="full column-horizontal-pad">
          <div class="full column-top-pad column-bottom-border"></div>
        </div>
      </div>
    </div>
    <div class="full relative">
      <div class="container flex relative column-full-pad">
        <app-link to="/dojave" class="full cantha-break flex relative stretch">
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
    </div>
    <div class="full relative">
      <sport></sport>
    </div>
    <div class="full relative">
      <client-only>
        <partners></partners>
      </client-only>
    </div>
    <div class="full relative">
      <super1></super1>
    </div>
    <div class="full relative">
      <pitanje-zdravlja></pitanje-zdravlja>
    </div>
    <div class="full relative">
      <os-homepage></os-homepage>
    </div>
    <div class="full relative">
      <div class="container desktop-only flex relative column-full-pad"></div>
    </div>
    <div class="full relative">
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v2"></ad-unit>
      </div>
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v3"></ad-unit>
      </div>
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v4"></ad-unit>
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
