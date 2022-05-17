<template>
  <div class="main-container flex fancy-rubrika homepage superone">
    <!-- TG Multiverse header -->
    <div class="full flex">
      <theader></theader>
    </div>
    <!-- S1 Fancy rubrika header -->
    <div class="full flex relative fancy-rubrika-header">
      <div class="os-section-title-left-el"></div>
      <div class="os-section-title-right-el"></div>
      <div class="container flex column-full-pad fancy-section-parent">
        <h1
          class="full section-title mobile-side-pad center-text column-full-pad os-section-title hide"
        >
          Super1
        </h1>
        <div class="full center relative">
          <nuxt-link to="/" class="logo" @click="$fetch"
            ><img src="@/assets/img/s1_logo_boldmodern.svg" alt="Super1 logo" />
          </nuxt-link>
        </div>
        <nav class="full center page-header-nav">
          <app-link class="animate" role="menuitem" to="/look">Look</app-link>
          <app-link class="animate" role="menuitem" to="/look">Snaga</app-link>
          <app-link class="animate" role="menuitem" to="/look">Relax</app-link>
          <app-link class="animate" role="menuitem" to="/look"
            >Emocije</app-link
          >
        </nav>
      </div>
    </div>
    <!-- Veliki blok - intro -->
    <div class="full relative">
      <div class="container flex relative stretch standard-block intro-block">
        <div class="full flex">
          <div class="full flex mobile-side-pad stretch">
            <div
              class="full column-horizontal-pad column-top-pad flex split-articles big-split alt-big-break center-text"
            >
              <standard
                v-for="post in posts.slice(0, 1)"
                :key="'super-' + post.id"
                :post="post"
              ></standard>
            </div>
          </div>
        </div>
        <div class="full flex mobile-side-pad stretch">
          <div class="full flex column-full-pad">
            <div class="full column-top-border"></div>
          </div>
          <div
            v-for="post in posts.slice(2, 5)"
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
    <!-- Prekid #1: shopping -->
    <div class="full flex">
      <div
        class="container flex relative sblock-prekid stretch mobile-side-pad"
      >
        <div class="full column-full-pad">
          <h3 class="full subsection-title"><span>Shopping vodič</span></h3>
        </div>
        <div class="full flex relative">
          <div
            v-for="post in posts.slice(3, 7)"
            :key="post.id"
            class="fourth flex-responsive column-horizontal-pad column-right-border"
          >
            <standard :post="post"></standard>
          </div>
        </div>
      </div>
    </div>
    <!-- In-house banner slot #1: newsletter -->
    <div class="full relative">
      <div class="container flex relative column-horizontal-pad column-top-pad">
        <app-link
          to="/newsletters"
          class="full cantha-break mobile-side-pad flex relative stretch"
        >
          <div class="third column-full-pad center flex-responsive">
            <div class="full flex article">
              <h3 class="full overtitle">Posebne pogodnosti</h3>
              <h2 class="full">
                Shopping savjeti, fashion novosti i najbolji popusti, samo za
                vas
              </h2>
              <h5 class="full">Super1, svaki dan u vašem inboxu</h5>
            </div>
          </div>
          <div class="two-thirds stretch flex flex-responsive">
            <div class="two-thirds column-full-pad center flex-responsive">
              <img
                src="@/assets/img/s1_newsletter_visual.png"
                alt="Teme Super1 newslettera"
              />
            </div>
            <div class="third center flex-responsive">
              <div class="full flex article">
                <div class="full center">
                  <div class="newbtn">Prijavite se</div>
                </div>
              </div>
            </div>
          </div>
        </app-link>
      </div>
    </div>
    <!-- Rubrika #1 -->
    <div class="full flex">
      <div class="container flex relative stretch mobile-side-pad">
        <div class="full column-full-pad">
          <h3 class="full subsection-title"><span>Još SUPER priča</span></h3>
        </div>
        <div class="three-fourths flex-responsive flex stretch">
          <div class="half flex-responsive flex column-horizontal-pad">
            <featured
              v-for="post in posts.slice(1, 2)"
              :key="'super-' + post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
          >
            <div
              v-for="post in posts.slice(2, 5)"
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
    <!-- Specijal #1: super preporuka -->
    <div class="full relative">
      <div class="container mobile-side-pad flex relative stretch">
        <div class="full column-full-pad">
          <h3 class="full subsection-title"><span>SUPER preporuka</span></h3>
        </div>
        <div
          class="three-fourths flex-responsive column-horizontal-pad flex split-articles column-right-border big-split alt-big-break"
        >
          <medium
            v-for="post in posts.slice(0, 1)"
            :key="'super-' + post.id"
            :post="post"
          ></medium>
        </div>
        <div
          class="fourth flex-responsive column-horizontal-pad mini-article-list"
        >
          <mini
            v-for="post in posts.slice(2, 6)"
            :key="post.id"
            :post="post"
          ></mini>
        </div>
      </div>
    </div>
    <!-- Prekid #2: native -->
    <div class="full flex">
      <div
        class="container flex sblock-prekid relative stretch mobile-side-pad"
      >
        <div class="full column-full-pad">
          <h3 class="full subsection-title"><span>Od naših partnera</span></h3>
        </div>
        <div class="full flex relative">
          <div
            v-for="post in posts.slice(3, 7)"
            :key="post.id"
            class="fourth flex-responsive column-horizontal-pad column-right-border"
          >
            <standard :post="post"></standard>
          </div>
        </div>
      </div>
    </div>
    <!-- Rubrika #2 -->
    <div class="full flex">
      <div class="container flex relative stretch mobile-side-pad">
        <div class="full column-full-pad">
          <h3 class="full subsection-title"><span>Još SUPER priča</span></h3>
        </div>
        <div class="three-fourths flex-responsive flex stretch">
          <div class="half flex-responsive flex column-horizontal-pad">
            <featured
              v-for="post in posts.slice(1, 2)"
              :key="'super-' + post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
          >
            <div
              v-for="post in posts.slice(2, 5)"
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
    <!-- Specijal #2: izbor urednika -->
    <div class="full flex">
      <div
        class="container flex sblock-special relative stretch mobile-side-pad"
      >
        <div class="full column-full-pad">
          <h3 class="full subsection-title"><span>Izbor urednika</span></h3>
        </div>
        <div
          class="full column-horizontal-pad flex split-articles big-split alt-big-break center-text"
        >
          <standard
            v-for="post in posts.slice(2, 3)"
            :key="'super-' + post.id"
            :post="post"
          ></standard>
        </div>
        <div class="full flex stretch">
          <div class="full flex column-full-pad">
            <div class="full column-top-border"></div>
          </div>
          <div
            v-for="post in posts.slice(3, 6)"
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
    <!-- Prekid #3: trend -->
    <div class="full flex">
      <div
        class="container flex relative sblock-prekid stretch mobile-side-pad"
      >
        <div class="full column-full-pad">
          <h3 class="full subsection-title"><span>Trend vodič</span></h3>
        </div>
        <div class="full flex relative">
          <div
            v-for="post in posts.slice(3, 7)"
            :key="post.id"
            class="fourth flex-responsive column-horizontal-pad column-right-border"
          >
            <standard :post="post"></standard>
          </div>
        </div>
      </div>
    </div>
    <!-- Load more -->
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
