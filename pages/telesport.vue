<template>
  <div class="main-container flex telesport">
    <!-- TG Multiverse header -->
    <div class="full flex">
      <theader></theader>
    </div>
    <!-- Telesport Header -->
    <section class="full flex relative ts-home-header">
      <div class="full flex relative">
        <div class="container flex relative">
          <div class="full center">
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
          </div>
        </div>
      </div>
      <div class="full flex relative">
        <div class="container flex relative column-full-pad">
          <div class="full center">
            <nav class="menu flex" role="menu">
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
          </div>
        </div>
      </div>
    </section>
    <!-- G1 + Kolumne -->
    <section class="full flex relative">
      <div class="container flex relative stretch">
        <div
          class="full featured-split biggest-font flex-responsive column-horizontal-pad flex split-articles mobile-side-pad"
        >
          <featured
            v-for="post in posts.slice(0, 1)"
            :key="'sport-' + post.id"
            :post="post"
          ></featured>
        </div>
        <div class="full column-full-pad desktop-only">
          <div class="full column-top-border"></div>
        </div>
      </div>
    </section>
    <!-- G2-G4 -->
    <section class="full flex relative cantha-small-block">
      <div class="container flex relative column-bottom-pad stretch">
        <div
          v-for="post in posts.slice(1, 4)"
          :key="post.id"
          class="third flex-responsive flex column-right-border mobile-side-pad column-horizontal-pad"
        >
          <featured :key="post.id" :post="post"></featured>
        </div>
      </div>
    </section>
    <!-- Block 1: 75-25 -->
    <section class="full flex relative">
      <div class="container flex relative column-bottom-pad stretch">
        <div class="full column-horizontal-pad flex">
          <div class="full column-top-border column-bottom-pad"></div>
        </div>
        <div
          class="three-fourths mobile-side-pad flex-responsive column-horizontal-pad column-right-border flex relative featured-split smaller-featured-split show-one-related"
        >
          <featured
            v-for="post in posts.slice(5, 7)"
            :key="post.id"
            :post="post"
          ></featured>
        </div>
        <div
          class="fourth mobile-side-pad flex-responsive column-horizontal-pad flex relative"
        >
          <medium
            v-for="post in posts.slice(7, 9)"
            :key="post.id"
            :post="post"
          ></medium>
        </div>
      </div>
    </section>
    <!-- Telesport autori -->
    <div class="full relative">
      <div
        class="container flex cantha-small-block mobile-side-pad relative stretch"
      >
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Telesport autori
          </div>
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
    <!-- Telesport preporuka -->
    <div class="full relative">
      <div
        class="container mobile-side-pad flex relative stretch column-bottom-pad"
      >
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Telesport preporuka
          </div>
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
    <!-- Odabir urednika -->
    <div class="full relative">
      <div
        class="container mobile-side-pad flex relative stretch column-bottom-pad"
      >
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Odabir urednika
          </div>
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
