<template>
  <div class="main-container flex fancy-rubrika superone s1-home">
    <!-- TG Multiverse header -->
    <div class="full flex">
      <theader></theader>
    </div>
    <!-- Super1 Header -->
    <section class="full flex relative">
      <div class="container flex relative superone-home-header column-full-pad">
        <div class="full center">
          <nuxt-link to="/super1" class="logo"
            ><img
              src="@/assets/img/s1_logo_clean_alt.svg"
              class="light-mode-only"
              alt="Super1 logo" />
            <img
              src="@/assets/img/s1_logo_clean_alt.svg"
              class="contrast-mode-only"
              alt="Super1 logo" />
            <img
              src="@/assets/img/s1_logo_clean_negative_alt.svg"
              alt="Super1 logo"
              class="dark-mode-only"
          /></nuxt-link>
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
      </div>
    </section>
    <!-- G1 + super se čita -->
    <section class="full flex relative">
      <div class="container flex relative stretch column-bottom-pad">
        <div class="three-fourths flex flex-responsive relative">
          <div class="full flex column-horizontal-pad">
            <superfeat
              v-for="post in posts.slice(0, 1)"
              :key="'super-' + post.id"
              :post="post"
            ></superfeat>
          </div>
        </div>
        <div
          class="fourth flex mini-article-list mobile-side-pad flex-responsive column-horizontal-pad align-children-bottom"
        >
          <h3 class="full overtitle super-minititle">Super se čita</h3>
          <!-- TODO: -->
          <div class="full flex">
            <mini
              v-for="post in posts.slice(2, 8)"
              :key="post.id"
              :post="post"
            ></mini>
          </div>
        </div>
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
    <super-shopping></super-shopping>
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
          <h3 class="flex superone-section-title">
            <img
              src="@/assets/img/s1_logo_clean_noline.svg"
              alt="Super1 logo"
            />
            <img
              src="@/assets/img/s1_logo_clean_noline_white.svg"
              alt="Super1 logo"
              class="dark-mode-only"
            />story
          </h3>
        </div>
        <div class="full flex column-horizontal-pad">
          <app-link
            :to="breaks[0].permalink"
            class="full flex superone-story column-vertical-pad center-text"
          >
            <h2 class="full animate">
              <b>{{ breaks[0].overtitle }}</b> {{ breaks[0].title }}
            </h2>
            <h2 class="full animate faded">
              {{ breaks[0].subtitle }}
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
    <!-- Block 3: Look (75-25 + 33-33-33) -->
    <super-block category="look"></super-block>
    <!-- Block 4: Partneri -->
    <super-partneri></super-partneri>
    <!-- Block 5: Style (75-25 + 33-33-33) -->
    <super-block category="beauty"></super-block>
    <!-- S1 preporuka -->
    <section v-if="breaks[1]" class="full flex relative">
      <div
        class="container flex relative stretch column-bottom-pad column-horizontal-pad"
      >
        <div class="full center relative">
          <h3 class="flex superone-section-title">
            <img
              src="@/assets/img/s1_logo_clean_noline.svg"
              alt="Super1 logo"
            />
            <img
              src="@/assets/img/s1_logo_clean_noline_white.svg"
              alt="Super1 logo"
              class="dark-mode-only"
            />Preporuka
          </h3>
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
    <!-- Block 6: Relax (75-25 + 33-33-33) -->
    <super-block category="life"></super-block>
    <super-block category="design"></super-block>
    <super-block category="power"></super-block>
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
    posts() {
      return this.$store.state.s1.posts
    },
    breaks() {
      return this.$store.state.s1.breaks
    },
    jsonld() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Website',
        url: 'https://www.telegram.hr/super1',
        name: 'Super1.hr',
        description: 'Lifestyle pokret stvarnih žena.',
      }
    },
  },
  mounted() {
    this.$store.dispatch('ads/initAds', { route: this.$route })
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get(
          'https://super1.telegram.hr/wp-json/telegram/pwa2/v1/portal/3/page/' +
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
      title: 'Super1 │ Lifestyle portal na kojem si #SuperSvoja',
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/super1',
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
          content: 'https://www.telegram.hr/super1',
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
