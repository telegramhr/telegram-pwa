<template>
  <div class="main-container flex telesport">
    <!-- TG Multiverse header -->
    <div class="full flex">
      <theader></theader>
    </div>
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
              src="@/assets/img/telesport_logo_black.svg"
              class="light-mode-only"
              alt="Telesport logo" />
            <img
              src="@/assets/img/telesport_logo_black.svg"
              class="contrast-mode-only"
              alt="Telesport logo" />
            <img
              src="@/assets/img/telesport_logo_white.svg"
              alt="Telesport logo"
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
        <div
          class="full column-horizontal-pad center-text desktop-only site-subtitle"
        >
          A sada... nešto sasvim drugačije. Telegramov sportski kanal.
        </div>
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
          <app-link role="menuitem" to="/telesport" class="animate"
            >Na prvu</app-link
          >
          <app-link role="menuitem" to="/telesport" class="animate"
            >Priče</app-link
          >
          <app-link role="menuitem" to="/telesport" class="animate"
            >Analize</app-link
          >
          <app-link role="menuitem" to="/telesport" class="animate"
            >Kolumne</app-link
          >
        </nav>
        <div class="flex desktop-only">
          <client-only>
            <!--<a
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
            </app-link> -->
            <app-link
              id="pretplatite se - header"
              to="/pretplata"
              class="newbtn"
              >Pretplatite se</app-link
            >
          </client-only>
        </div>
      </div>
    </div>
    <!-- Intro block: G1 + comments -->
    <div class="full relative">
      <div class="container flex relative stretch cantha-intro-block">
        <!-- Billboard 1
        <client-only>
          <div v-show="!hasPremium" class="full relative m-order-2">
            <div class="full flex column-horizontal-pad desktop-only">
              <div class="full flex relative column-bottom-border"></div>
            </div>
            <div class="full center relative">
              <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
            </div>
          </div>
        </client-only> -->
        <div
          class="full flex column-horizontal-pad column-bottom-pad desktop-only"
        >
          <div class="full flex relative column-bottom-border"></div>
        </div>
        <!-- G1 -->
        <div
          class="three-fourths flex-responsive flex stretch column-horizontal-pad article-amnytas mobile-bottom-pad"
        >
          <featured
            v-if="posts[0]"
            :key="`featured-${posts[0].id}`"
            :post="posts[0]"
          ></featured>
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
            v-for="post in posts.slice(1, 4)"
            :key="`featured${post.id}`"
            class="third flex-responsive column-right-border column-horizontal-pad"
          >
            <medium :post="post"></medium>
          </div>
        </div>
        <!-- Billboard 2
        <div class="full center m-order-6">
          <ad-unit id="telegram_desktop_billboard_v2"></ad-unit>
        </div> -->
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
    <!-- Telesport preporuka -->
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
            v-for="post in posts.slice(6, 7)"
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
    </div>
    <!-- Teme -->
    <div class="full relative">
      <div class="container flex relative stretch">
        <div
          class="full flex mobile-side-pad stretch secondary-gs-block m-order-8"
        >
          <div class="full column-horizontal-pad column-bottom-pad flex">
            <div class="full column-top-border"></div>
          </div>
          <div
            class="three-fourths flex-responsive flex stretch column-horizontal-pad article-amnytas mobile-bottom-pad column-right-border"
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
            class="three-fourths flex-responsive flex stretch column-horizontal-pad article-amnytas mobile-bottom-pad column-right-border"
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
    <!-- Widget autori -->
    <commentary-alt type="ts"></commentary-alt>
    <!-- Standard 1/4 block -->
    <div class="full relative">
      <div
        class="container flex cantha-small-block mobile-side-pad relative stretch"
      >
        <div class="full flex stretch relative no-last-border-mobile">
          <div
            v-for="post in posts.slice(7, 11)"
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
        <div class="full flex stretch relative no-last-border-mobile">
          <div
            v-for="post in posts.slice(11, 15)"
            :key="post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad"
          >
            <standard :post="post"></standard>
          </div>
        </div>
        <div class="full center column-full-pad">
          <div class="newbtn huge-newbtn clickable">Učitaj više</div>
        </div>
      </div>
    </div>
    <!-- Prekid knjiga -->
    <div class="full relative">
      <div class="container flex relative column-horizontal-pad">
        <app-link
          to="/knjiga/boris-dezulovic-bili-libar"
          class="full cantha-break break-dezulovic mobile-side-pad flex relative stretch"
        >
          <div class="forty column-full-pad center flex-responsive">
            <div class="full flex article">
              <div class="noththree full overtitle">Posebna akacija</div>
              <h2 class="full">
                Telegram predstavlja: Bili libar, nova knjiga Borisa Dežulovića
              </h2>
              <div class="nothfour full">
                Naručite još danas i osigurajte svoj primjera, uz posebnu cijenu
                za pretplatnike
              </div>
            </div>
          </div>
          <div class="sixty stretch flex flex-responsive">
            <div class="two-thirds column-top-pad center flex-responsive">
              <img
                src="@/assets/img/tg_knjiga_vizual_dezulovic.png"
                alt="Portret Borisa Dežulovića i naslovnica njegove knjige 'Bili Libar'"
              />
            </div>
            <div class="third center column-horizontal-pad flex-responsive">
              <div class="full column-left-pad flex article">
                <h2 class="full relative center-text">
                  <span class="faded strikethrough">149 kn</span> 99 kn
                </h2>
                <div class="nothfour full center-text">
                  (<span class="faded strikethrough">19,78€</span> 13,14€)
                  <br />
                  posebna cijena za Telegramove pretplatnike!
                </div>
              </div>
            </div>
          </div>
        </app-link>
      </div>
    </div>
    <!-- Footer -->
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$axios
      .get('https://telesport.telegram.hr/wp-json/telegram/pwa2/v1/portal/2')
      .then((res) => {
        this.posts = res.data.posts
      })
  },
  data() {
    return {
      loading: false,
      hasMore: true,
      featured: [],
      posts: [],
      page: 2,
      slider_settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerMode: true,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            },
          },
        ],
      },
    }
  },
  computed: {
    jsonld() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Website',
        url: 'https://www.telegram.hr/telesport',
        name: 'Telesport.hr',
        description: 'Prvi regionalni sportski boutique portal.',
        publisher: this.$store.state.header.publisher,
      }
    },
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get(
          'https://telesport.telegram.hr/wp-json/telegram/pwa2/v1/portal/2/page/' +
            this.page
        )
        .then((res) => {
          this.posts = [...this.posts, ...res.data.posts]
          this.loading = false
          this.page++
          this.showMore = true
        })
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
          content: 'https://www.telegram.hr/super1/',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.pwa.telegram.hr/img/s1_share_home.jpg',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Lifestyle pokret stvarnih žena.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Lifestyle pokret stvarnih žena.',
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
    }
  },
}
</script>
