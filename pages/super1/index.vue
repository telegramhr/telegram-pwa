<template>
  <div class="main-container flex s1-home">
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
      <div
        class="container flex stretch relative column-horizontal-pad mobile-side-pad"
      >
        <div class="third flex vertical-center mobile-thirty">
          <a
            :aria-expanded="$store.state.header.showSideMenu.toString()"
            aria-label="Prikaži lijevi meni"
            aria-controls="sidebar"
            @click.prevent="$store.commit('header/updateMenu', 'side')"
          >
            <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon>
          </a>
        </div>
        <app-link to="/" class="third mobile-forty center nayos-logos">
          <img src="@/assets/img/telegram_logo_black.svg" alt="Telegram logo" />
          <img
            src="@/assets/img/telegram_logo_white.svg"
            alt="Telegram logo"
            class="dark-mode-only"
          />
        </app-link>
        <div class="third center align-children-end mobile-thirty">
          <a
            aria-label="Prikaži tražilicu"
            :aria-expanded="$store.state.header.showSearchMenu.toString()"
            aria-controls="search"
            @click.prevent="$store.commit('header/updateMenu', 'search')"
          >
            <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon>
          </a>
        </div>
      </div>
    </nav>
    <!-- Super1 Header -->
    <section class="full flex relative superone-home-header">
      <div class="container flex relative column-full-pad">
        <div class="full center">
          <app-link to="/super1" class="logo"
            ><img
              src="@/assets/img/s1_logo_clean_noline.svg"
              class="light-mode-only"
              alt="Super1 logo" />
            <img
              src="@/assets/img/s1_logo_clean_noline.svg"
              class="contrast-mode-only"
              alt="Super1 logo" />
            <img
              src="@/assets/img/s1_logo_clean_noline_white.svg"
              alt="Super1 logo"
              class="dark-mode-only"
          /></app-link>
        </div>
        <div class="full center">
          <nav class="menu flex" role="menu">
            <app-link role="menuitem" to="/super1/look" class="animate"
              >Look</app-link
            >
            <app-link role="menuitem" to="/super1/beauty" class="animate"
              >Beauty</app-link
            >
            <app-link role="menuitem" to="/super1/life" class="animate"
              >Life</app-link
            >
            <app-link role="menuitem" to="/super1/design" class="animate"
              >Design</app-link
            >
            <app-link role="menuitem" to="/super1/power" class="animate"
              >Power</app-link
            >
          </nav>
        </div>
        <!-- Billboard 1 -->
        <client-only>
          <div v-show="!hasPremium" class="full relative">
            <div class="full center relative">
              <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
            </div>
          </div>
        </client-only>
      </div>
    </section>
    <!-- G1 + super se čita -->
    <section class="full flex relative">
      <div class="container flex relative stretch column-bottom-pad">
        <div
          class="three-fourths flex flex-responsive relative superone-preporuka super-g-one"
        >
          <div class="full flex column-horizontal-pad">
            <superfeat
              v-for="post in posts.slice(0, 1)"
              :key="'super-' + post.id"
              :post="post"
            ></superfeat>
          </div>
        </div>
        <!--<div
          class="fourth flex mini-article-list mobile-side-pad flex-responsive column-horizontal-pad align-children-bottom"
        >
          <div class="noththree full overtitle super-minititle">
            Super se čita
          </div>
          <div class="full flex">
            <mini
              v-for="post in mostRead.slice(0, 6)"
              :key="post.id"
              :post="post"
            ></mini>
          </div>
        </div>-->
      </div>
    </section>
    <!-- G2-G4 -->
    <section class="full flex relative">
      <div class="container flex relative">
        <div
          v-for="post in posts.slice(1, 4)"
          :key="post.id"
          class="third flex-responsive flex column-full-pad"
        >
          <superfeat :key="post.id" :post="post"></superfeat>
        </div>
      </div>
    </section>
    <!-- S1 Top picks -->
    <client-only>
      <super-shopping></super-shopping>
      <!-- Special widget -->
      <div v-if="!hasPremium" class="full relative">
        <super-partneri-client></super-partneri-client>
        <!--<partner-special position="s1"></partner-special>-->
      </div>
    </client-only>
    <div class="full relative">
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v2"></ad-unit>
      </div>
    </div>
    <!-- Block 1: 75-25 -->
    <section class="full flex relative">
      <div class="container flex relative stretch column-bottom-pad">
        <div class="three-fourths flex flex-responsive relative">
          <div class="full flex column-horizontal-pad">
            <superfeat
              v-for="post in posts.slice(4, 5)"
              :key="'super-' + post.id"
              :post="post"
            ></superfeat>
          </div>
        </div>
        <div
          class="fourth flex mobile-side-pad flex-responsive column-horizontal-pad align-children-bottom superone-mini-articles"
        >
          <div class="full flex">
            <superfeat
              v-for="post in posts.slice(5, 6)"
              :key="'super-' + post.id"
              :post="post"
            ></superfeat>
          </div>
        </div>
      </div>
    </section>
    <!-- Block 2: 33-33-33 -->
    <section class="full flex relative">
      <div class="container flex relative">
        <div
          v-for="post in posts.slice(6, 9)"
          :key="post.id"
          class="third flex-responsive flex column-full-pad"
        >
          <superfeat :key="post.id" :post="post"></superfeat>
        </div>
      </div>
    </section>
    <!-- S1 Story -->
    <section v-if="breaks[0]" class="full flex relative">
      <div class="container flex relative">
        <div class="full center relative">
          <div class="noththree flex superone-section-title">
            <img
              src="@/assets/img/s1_logo_clean_noline.svg"
              alt="Super1 logo"
            />
            <img
              src="@/assets/img/s1_logo_clean_noline_white.svg"
              alt="Super1 logo"
              class="dark-mode-only"
            />story
          </div>
        </div>
        <div class="full flex column-horizontal-pad">
          <app-link
            :to="breaks[0].permalink"
            class="full flex superone-story column-vertical-pad center-text"
          >
            <h2 class="full animate">
              <b>{{ breaks[0].overtitle | parseCat }}</b>
              {{ breaks[0].portal_title | parseCat }}
            </h2>
            <h2 class="full animate faded">
              {{ breaks[0].subtitle | parseCat }}
            </h2>
          </app-link>
        </div>
      </div>
    </section>
    <div class="full relative">
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v3"></ad-unit>
      </div>
    </div>
    <client-only>
      <!-- Block 3: Look (75-25 + 33-33-33) -->
      <super-block category="look"></super-block>
      <!-- Block 4: Partneri -->
      <super-partneri></super-partneri>
      <!-- Block 5: Style (75-25 + 33-33-33) -->
      <super-block category="beauty"></super-block>
    </client-only>
    <!-- S1 preporuka -->
    <section v-if="breaks[1]" class="full flex relative">
      <div
        class="container flex relative stretch column-bottom-pad column-horizontal-pad"
      >
        <div class="full center relative">
          <div class="noththree flex superone-section-title">
            <img
              src="@/assets/img/s1_logo_clean_noline.svg"
              alt="Super1 logo"
            />
            <img
              src="@/assets/img/s1_logo_clean_noline_white.svg"
              alt="Super1 logo"
              class="dark-mode-only"
            />Preporuka
          </div>
        </div>
        <div
          class="three-fourths superone-preporuka flex flex-responsive relative"
        >
          <div class="full flex column-vertical-pad">
            <superfeat
              :key="'super-' + breaks[1].id"
              :post="breaks[1]"
            ></superfeat>
          </div>
        </div>
      </div>
    </section>
    <div class="full relative">
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v4"></ad-unit>
      </div>
    </div>
    <client-only>
      <!-- Block 6: Relax (75-25 + 33-33-33) -->
      <super-block category="life"></super-block>
      <super-block category="design"></super-block>
      <super-block category="power"></super-block>
    </client-only>
    <!-- Footer -->
    <tfooter></tfooter>
  </div>
</template>

<script>
import Superfeat from '~/components/articles/Superfeat.vue'
export default {
  components: { Superfeat },
  async fetch() {
    await this.$store.dispatch('s1/pullPosts')
    await this.$store.dispatch('s1/pullBreaks')
    // await this.$store.dispatch('category/mostRead', { category: 'super1' })
  },
  data() {
    return {
      loading: false,
      hasMore: true,
      featured: [],
      page: 2,
    }
  },
  computed: {
    hasPremium() {
      return this.$store.getters['user/hasPremium']
    },
    posts() {
      return this.$store.state.s1.posts
    },
    breaks() {
      return this.$store.state.s1.breaks
    },
    mostRead() {
      return this.$store.state.category.categories.super1.mostRead
    },
    jsonld() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Website',
        url: 'https://www.telegram.hr/super1',
        name: 'Super1.hr',
        description: 'Lifestyle pokret stvarnih žena.',
        publisher: this.$store.state.header.publisher,
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('ads/initAds', { route: this.$route })
    })
  },
  head() {
    return {
      bodyAttrs: {
        class: [this.$store.state.theme.theme, 'superone fancy-rubrika'],
      },
      title: 'Super1 │ Lifestyle portal na kojem si #SuperSvoja',
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/super1/',
        },
        {
          hid: 'favicon',
          rel: 'icon',
          href: '/s1_fav/favicon.ico',
        },
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          href: '/s1_fav/apple-touch-icon.png',
        },
        {
          hid: 'manifest',
          rel: 'manifest',
          href: '/s1_fav/site.webmanifest',
        },
        {
          hid: 'feed',
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'Telesport.hr',
          href: 'https://www.telegram.hr/feed/telesport/',
        },
      ],
      meta: [
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Super1 │ Lifestyle portal na kojem si #SuperSvoja',
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
          content:
            'https://www.telegram.hr/wp-content/uploads/2022/12/super1-share-2.jpg',
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/jpg',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Najbolje mjesto za modu, šoping, stil, beauty, recepte i savjete.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Najbolje mjesto za modu, šoping, stil, beauty, recepte i savjetea.',
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Super1.hr',
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
