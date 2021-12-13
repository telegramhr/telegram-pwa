<template>
  <div class="main-container flex fancy-rubrika openspace">
    <div class="full flex">
      <theader></theader>
    </div>
    <div class="full flex relative fancy-rubrika-header">
      <div class="os-section-title-left-el"></div>
      <div class="os-section-title-right-el"></div>
      <div class="container flex fancyr-section-parent">
        <h1
          class="
            full
            section-title
            mobile-side-pad
            center-text
            column-full-pad
            os-section-title
            hide
          "
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
          <!--<app-link role="menuitem" to="/kvizovi-testovi"
            >Kvizovi i testovi</app-link
          >-->
          <app-link role="menuitem" to="/vodici">Vodiči</app-link>
        </nav>
      </div>
    </div>
    <div v-if="featured.length" class="full relative">
      <div class="container flex relative stretch standard-block intro-block">
        <div
          class="full flex column-horizontal-pad column-top-pad mobile-side-pad"
        >
          <div class="full flex article-big column-bottom-border">
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
            <div class="full flex column-horizontal-pad">
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
            class="
              third
              column-horizontal-pad
              flex-responsive
              column-right-border
            "
          >
            <h3 class="full os-about-subtitle">Alati za najbolji posao</h3>
            <p>
              Platforma Openspace pruža vam sve potrebne alate za ostvarivanje
              punog profesionalnog potencijala, od pronalaska idealnog radnog
              mjesta do promjene karijere ili pregovora o povišici.
            </p>
          </div>
          <div
            class="
              third
              column-horizontal-pad
              flex-responsive
              column-right-border
            "
          >
            <h3 class="full os-about-subtitle">Vodiči i savjeti</h3>
            <p>
              Kroz životne priče i inspirativne primjere pojedinaca i kompanija,
              dajemo vam insajderski uvid u najkorisnije vještine i savjete za
              vaš profesionalni put, kao i motivaciju za daljnji napredak.
            </p>
          </div>
          <div class="third column-horizontal-pad flex-responsive">
            <h3 class="full os-about-subtitle">Top ljudi za tim</h3>
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
          class="
            fourth
            flex flex-responsive
            column-horizontal-pad
            mobile-side-pad
            bypass-show-mobile
            os-prilike-widget
          "
        >
          <!--<h3 class="full flex overtitle os-widget-overtitle">Newsletter</h3>
            <newsletter></newsletter>
            <h3 class="full flex overtitle os-widget-overtitle">
              Open Space Test
            </h3>
            <ostest></ostest>-->
          <opportunities></opportunities>
        </section>
        <div class="three-fourths flex-responsive flex">
          <section
            class="
              two-thirds
              flex-responsive flex
              mobile-side-pad
              column-horizontal-pad column-right-border column-left-border
            "
          >
            <featured
              v-for="post in featured.slice(4, 5)"
              :key="post.id"
              :post="post"
            ></featured>
            <div class="full flex split-articles">
              <template v-for="post in featured.slice(5, 8)">
                <medium :key="post.id" :post="post"></medium>
              </template>
            </div>
          </section>
          <section
            class="
              third
              flex-responsive flex
              mobile-side-pad
              column-horizontal-pad
            "
          >
            <template v-for="post in featured.slice(8, 11)">
              <medium :key="post.id" :post="post"></medium>
            </template>
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
          v-for="post in morePosts"
          :key="post.id"
          class="fourth flex-responsive column-full-pad"
        >
          <standard :post="post"></standard>
        </div>
        <div
          class="full center subtle-btn-parent relative clickable"
          @click="loadMore"
        >
          <div class="subtle-btn animate">Vidi više</div>
          <div class="subtle-btn-line"></div>
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
    await this.$store.dispatch('category/pullPosts', {
      category: 'openspace',
    })
  },
  data() {
    return {
      loading: false,
      hasMore: true,
      featured: [],
    }
  },
  computed: {
    posts() {
      return this.$store.state.category.categories.openspace.posts
    },
    morePosts() {
      return this.$store.state.category.categories.openspace.morePosts
    },
    jsonld() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Website',
        url: 'https://www.telegram.hr/openspace',
        name: 'Openspace.hr',
        description:
          'Telegramova platforma za traženje idealnog posla, profesionalno napredovanje i karijernu inspiraciju.',
      }
    },
  },
  methods: {
    loadMore() {
      this.$store.dispatch('category/loadMore', { category: 'openspace' })
    },
  },
  head() {
    return {
      title: 'Openspace.hr',
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
          content: 'https://www.telegram.hr/openspace',
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
