<template>
  <div class="main-container flex fancy-rubrika homepage superone">
    <div class="full flex">
      <theader></theader>
    </div>
    <div class="full flex relative fancy-rubrika-header">
      <div class="os-section-title-left-el"></div>
      <div class="os-section-title-right-el"></div>
      <div class="container flex fancyr-section-parent">
        <h1
          class="full section-title mobile-side-pad center-text column-full-pad os-section-title hide"
        >
          Super1
        </h1>
        <div class="full center">
          <img
            src="@/assets/img/super1_logo.svg"
            class="os-header-logo light-mode-only"
            alt="Super1 logo"
          />
          <img
            src="@/assets/img/super1_logo.svg"
            class="os-header-logo contrast-mode-only"
            alt="Super1 logo"
          />
          <img
            src="@/assets/img/super1_logo_white.svg"
            class="os-header-logo dark-mode-only"
            alt="Super1 logo"
          />
        </div>
        <nav class="full center page-header-nav">
          <app-link role="menuitem" to="/look">Look</app-link>
          <app-link role="menuitem" to="/look">Snaga</app-link>
          <app-link role="menuitem" to="/look">Relax</app-link>
          <app-link role="menuitem" to="/look">Emocije</app-link>
          <!--<app-link role="menuitem" to="/kvizovi-testovi"
            >Kvizovi i testovi</app-link
          >-->
        </nav>
      </div>
    </div>
    <div class="full relative">
      <div class="container flex relative stretch standard-block intro-block">
        <div class="full flex column-horizontal-pad">
          <div
            class="full flex column-vertical-pad column-bottom-border mobile-side-pad stretch"
          >
            <div
              class="sixty column-right-pad flex flex-responsive column-right-border"
            >
              <featured
                v-for="post in posts.slice(0, 1)"
                :key="'super-' + post.id"
                :post="post"
              ></featured>
            </div>
            <div
              class="forty column-left-pad flex flex-responsive split-articles super-sidebar"
            >
              <div
                v-for="post in posts.slice(1, 5)"
                :key="'super-' + post.id"
                class="full column-vertical-pad stretch column-bottom-border"
              >
                <medium :post="post"></medium>
              </div>
            </div>
          </div>
        </div>
        <div class="full flex column-top-pad mobile-side-pad stretch">
          <div
            v-for="post in posts.slice(4, 7)"
            :key="'super-' + post.id"
            class="third flex-responsive column-right-border stretch"
          >
            <div class="full flex column-horizontal-pad">
              <featured :post="post"></featured>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full flex">
      <div class="container flex relative stretch mobile-side-pad">
        <div class="full column-full-pad">
          <div class="full column-top-border"></div>
        </div>
        <div
          v-for="post in posts.slice(1, 5)"
          :key="post.id"
          class="fourth flex-responsive column-horizontal-pad column-right-border"
        >
          <standard :post="post"></standard>
        </div>
      </div>
    </div>
    <div class="full flex">
      <div class="container flex relative stretch mobile-side-pad">
        <div class="full column-full-pad">
          <div class="full column-top-border"></div>
        </div>
        <div class="three-fourths flex-responsive flex stretch">
          <div class="half flex-responsive flex column-horizontal-pad">
            <featured
              v-for="post in posts.slice(0, 1)"
              :key="'super-' + post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
          >
            <div
              v-for="post in posts.slice(1, 4)"
              :key="'super-' + post.id"
              class="full column-vertical-pad column-bottom-border stretch"
            >
              <medium :post="post"></medium>
            </div>
          </div>
        </div>
        <div class="fourth flex-responsive column-horizontal-pad">
          <mini
            v-for="post in posts.slice(1, 6)"
            :key="post.id"
            :post="post"
          ></mini>
        </div>
      </div>
    </div>
    <div class="full flex">
      <div class="container flex relative stretch mobile-side-pad">
        <div class="full column-full-pad">
          <div class="full column-top-border"></div>
        </div>
        <div
          class="full column-horizontal-pad flex split-articles big-split alt-big-break center-text"
        >
          <standard
            v-for="post in posts.slice(0, 1)"
            :key="'super-' + post.id"
            :post="post"
          ></standard>
        </div>
      </div>
    </div>
    <div class="full flex">
      <div class="container flex relative stretch mobile-side-pad">
        <div class="full column-full-pad">
          <div class="full column-top-border"></div>
        </div>
        <div class="three-fourths flex-responsive flex stretch">
          <div class="half flex-responsive flex column-horizontal-pad">
            <featured
              v-for="post in posts.slice(0, 1)"
              :key="'super-' + post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
          >
            <div
              v-for="post in posts.slice(1, 4)"
              :key="'super-' + post.id"
              class="full column-vertical-pad column-bottom-border stretch"
            >
              <medium :post="post"></medium>
            </div>
          </div>
        </div>
        <div class="fourth flex-responsive column-horizontal-pad">
          <mini
            v-for="post in posts.slice(1, 6)"
            :key="post.id"
            :post="post"
          ></mini>
        </div>
      </div>
    </div>
    <div class="full flex">
      <div
        class="container flex column-top-pad relative stretch mobile-side-pad"
      >
        <div
          class="full center subtle-btn-parent relative clickable"
          @click="loadMore"
        >
          <div v-show="!loading" class="subtle-btn animate">Vidi više</div>
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
import Standard from '../components/articles/Standard.vue'
export default {
  components: { Standard },
  async fetch() {
    await this.$axios
      .get('https://super1.telegram.hr/wp-json/telegram/pwa2/v1/portal/3')
      .then((res) => {
        this.posts = res.data.posts
        this.reading = res.data.reading
      })
  },
  data() {
    return {
      loading: false,
      hasMore: true,
      featured: [],
      posts: [],
      page: 2,
    }
  },
  computed: {
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
      title: 'Super1.hr',
      meta: [
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Super1.hr',
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
