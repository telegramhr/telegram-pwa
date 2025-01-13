<template>
  <div class="main-container flex fancy-rubrika openspace os-home">
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
            to="/pretplata"
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
    <div class="full flex relative fancy-rubrika-header">
      <div class="os-section-title-left-el"></div>
      <div class="os-section-title-right-el"></div>
      <div class="container flex fancy-section-parent">
        <h1
          class="full section-title mobile-side-pad center-text column-full-pad os-section-title hide"
        >
          openspace
        </h1>
        <div class="full center">
          <img
            src="@/assets/img/openspace_logo_normal.svg"
            class="os-header-logo light-mode-only"
            alt="openspace logo"
          />
          <img
            src="@/assets/img/openspace_logo_normal.svg"
            class="os-header-logo contrast-mode-only"
            alt="openspace logo"
          />
          <img
            src="@/assets/img/openspace_logo_negative.svg"
            class="os-header-logo dark-mode-only"
            alt="openspace logo"
          />
        </div>
        <nav class="full center page-header-nav">
          <app-link role="menuitem" to="/vjestine">Vještine</app-link>
          <app-link role="menuitem" to="/tvrtke-karijere"
            >Tvrtke i karijere</app-link
          >
          <app-link role="menuitem" to="/kvizovi-testovi"
            >Kvizovi i testovi</app-link
          >
          <app-link role="menuitem" to="/vodici">Vodiči</app-link>
        </nav>
      </div>
    </div>
    <div v-if="featured.length" class="full relative">
      <div class="container flex relative stretch standard-block intro-block">
        <div
          class="full flex column-horizontal-pad column-top-pad mobile-side-pad"
        >
          <div
            class="full flex article-big column-bottom-border column-bottom-pad"
          >
            <featured
              v-for="post in featured.slice(0, 1)"
              :key="post.id"
              :post="post"
            ></featured>
          </div>
        </div>
        <div class="full flex mobile-side-pad stretch">
          <div
            v-for="post in featured.slice(1, 4)"
            :key="post.id"
            class="third flex-responsive column-vertical-pad stretch"
          >
            <div class="full flex column-horizontal-pad column-right-border">
              <featured :post="post"></featured>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-title news-block-title full mobile-side-pad hide">
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <h1 class="column-left-pad full">Još priča</h1>
      </div>
    </div>
    <div class="full flex relative os-about-section">
      <div class="container column-vertical-pad mobile-side-pad flex">
        <h2 class="full flex column-horizontal-pad os-elevate-title">
          Što je Openspace?
        </h2>
        <div class="full flex relative">
          <div
            class="third column-horizontal-pad flex-responsive column-right-border"
          >
            <div class="noththree full os-about-subtitle">
              Alati za najbolji posao
            </div>
            <p>
              Platforma Openspace pruža vam sve potrebne alate za ostvarivanje
              punog profesionalnog potencijala, od pronalaska idealnog radnog
              mjesta do promjene karijere ili pregovora o povišici.
            </p>
          </div>
          <div
            class="third column-horizontal-pad flex-responsive column-right-border"
          >
            <div class="noththree full os-about-subtitle">Vodiči i savjeti</div>
            <p>
              Kroz životne priče i inspirativne primjere pojedinaca i kompanija,
              dajemo vam insajderski uvid u najkorisnije vještine i savjete za
              vaš profesionalni put, kao i motivaciju za daljnji napredak.
            </p>
          </div>
          <div class="third column-horizontal-pad flex-responsive">
            <div class="noththree full os-about-subtitle">Top ljudi za tim</div>
            <p>
              Mjesto za poslodavce koji žele ispričati svoju priču, predstaviti
              kulturu i objasniti vrijednosti, te tako pronaći potencijalne
              zaposlenike koji bi se najbolje mogli uklopiti u vaše planove.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="featured.length" class="full relative">
      <div class="container flex relative block-2 standard-block stretch">
        <section
          class="fourth flex flex-responsive column-horizontal-pad mobile-side-pad bypass-show-mobile os-prilike-widget"
        >
          <!--<div class="noththree full flex overtitle os-widget-overtitle">Newsletter</div>
            <newsletter></newsletter>
            <div class="noththree full flex overtitle os-widget-overtitle">
              Open Space Test
            </div>
            <ostest></ostest>-->
          <!--<opportunities></opportunities>-->
          <go-digital></go-digital>
        </section>
        <div class="three-fourths flex-responsive flex">
          <section
            class="two-thirds flex-responsive flex mobile-side-pad column-horizontal-pad column-right-border column-left-border"
          >
            <featured
              v-for="post in featured.slice(4, 5)"
              :key="post.id"
              :post="post"
            ></featured>
            <div class="full flex split-articles column-top-pad">
              <medium
                v-for="post in featured.slice(5, 8)"
                :key="post.id"
                :post="post"
              ></medium>
            </div>
          </section>
          <section
            class="third flex-responsive flex mobile-side-pad column-horizontal-pad"
          >
            <medium
              v-for="post in featured.slice(8, 11)"
              :key="post.id"
              :post="post"
            ></medium>
          </section>
        </div>
      </div>
    </div>
    <client-only>
      <big-featured type="openspace"></big-featured>
    </client-only>
    <div class="full flex">
      <div class="container flex relative native-block stretch mobile-side-pad">
        <div
          v-for="post in posts"
          :key="post.id"
          class="fourth flex-responsive column-full-pad"
        >
          <standard :post="post"></standard>
        </div>
        <div
          v-if="hasMore"
          class="full center relative clickable"
          @click="loadMore"
        >
          <a
            v-show="!loading"
            :href="readMore"
            class="newbtn huge-newbtn animate"
          >
            Vidi više
          </a>
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
</template>

<script>
export default {
  async fetch() {
    await this.$axios.get('/api/featured/openspace').then((res) => {
      this.featured = res.data
    })
    this.$axios.get('/api/category/openspace').then((res) => {
      this.posts = res.data.posts
      // dispatch('posts/setPosts', res.data.posts, { root: true })
    })
  },
  data() {
    return {
      loading: false,
      hasMore: true,
      featured: [],
      posts: [],
      page: 1,
    }
  },
  computed: {
    canLogIn() {
      return this.$store.getters['user/canLogIn']
    },
    readMore() {
      if (this.hasMore) {
        return `https://www.telegram.hr/openspace/?page=${this.page + 1}`
      }
      return '#'
    },
    jsonld() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Website',
        url: 'https://www.telegram.hr/openspace/',
        name: 'Openspace.hr',
        description:
          'Telegramova platforma za traženje idealnog posla, profesionalno napredovanje i karijernu inspiraciju.',
        publisher: this.$store.state.header.publisher,
      }
    },
  },
  methods: {
    loadMore() {
      this.loading = true
      this.page++
      this.$axios
        .get(`/api/category/openspace/page/${this.page}`)
        .then((res) => {
          this.posts = [...this.posts, ...res.data.posts]
          this.loading = false
          if (res.data.posts < 20) {
            this.hasMore = false
          }
        })
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href:
          'https://www.telegram.hr/openspace/' +
          (this.page > 1 ? `?page=${this.page}` : ''),
      },
      {
        hid: 'feed',
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'Openspace.hr',
        href: 'https://www.telegram.hr/feed/openspace/',
      },
    ]
    if (this.hasMore) {
      link.push({
        hid: 'next',
        rel: 'next',
        href: `https://www.telegram.hr/openspace/?page=${this.page + 1}`,
      })
    }
    if (this.page > 1) {
      link.push({
        hid: 'prev',
        rel: 'prev',
        href: `https://www.telegram.hr/openspace/?page=${this.page - 1}`,
      })
    }
    return {
      title:
        'Openspace.hr' + (this.page > 1 ? ` - ${this.page}. stranica` : ''),
      meta: [
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Openspace.hr',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/openspace/',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/os_share_home.jpg',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Telegramova platforma za traženje idealnog posla, profesionalno napredovanje i karijernu inspiraciju.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Telegramova platforma za traženje idealnog posla, profesionalno napredovanje i karijernu inspiraciju.',
        },
      ],
      link,
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
