<template>
  <div :class="['main-container', 'flex', 'category-page']">
    <!-- TG Multiverse header -->
    <div class="full flex relative single-article">
      <client-only>
        <theader headline="Najnovije na Telegramu"></theader>
      </client-only>
    </div>
    <!-- Wallpapers -->
    <div class="full relative">
      <client-only>
        <div v-if="!$mobile" class="container wallpaper-banners">
          <div class="wallpaper-left">
            <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
          </div>
          <div class="wallpaper-right">
            <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
          </div>
        </div>
      </client-only>
    </div>
    <!-- Category header -->
    <div class="full flex relative">
      <div
        class="container smaller-container column-top-pad mobile-top-pad flex mobile-side-pad relative"
      >
        <div
          class="full flex latest-articles-header column-horizontal-pad stretch"
        >
          <div class="third flex center active-latest-header animate">
            <span>Najnovije</span>
          </div>
          <div class="third flex center animate"><span>Sport</span></div>
          <div class="third flex center animate"><span>Život</span></div>
        </div>
      </div>
    </div>
    <!-- Veliki blok - intro -->
    <div class="full relative">
      <div
        class="container mobile-side-pad smaller-container flex relative stretch column-vertical-pad block-echovald latest-line-feed latest-line-feed-pad"
      >
        <div
          class="full split-articles column-left-border column-horizontal-pad flex"
        >
          <template v-for="post in posts.slice(0, 8)">
            <medium-alt :key="post.id" :post="post"></medium-alt>
          </template>
          <!-- Read more widget -->
          <div
            class="full latest-feed-btn flex-responsive flex relative mobile-side-pad"
          >
            <div class="full flex relative clickable" @click="loadMore">
              <div v-show="!loading" class="newbtn animate">
                Učitaj još članaka
              </div>
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
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>
<script>
export default {
  name: 'NajnovijeNaTelegramu',
  props: {
    portal: {
      type: Number,
      required: true,
      default: 1,
    },
    category: {
      type: String,
      required: false,
      default: '',
    },
  },
  async fetch() {
    await this.$axios
      .$get('/api/latest/1/' + this.category)
      .then((res) => {
        this.posts = res
      })
      .catch(() => {
        // error logging
      })
  },
  data() {
    return {
      posts: [],
      loading: false,
    }
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get(`/api/latest/1/${this.$route.params.category}/page/${this.page}`)
        .then((res) => {
          this.posts = [...this.posts, ...res.data.posts]
          this.loading = false
          this.page++
        })
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/najnovije/',
      },
    ]
    return {
      title: 'Najnovije na Telegramu',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Najnovije objave na Telegramu..',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Najnovije objave na Telegramu..',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Najnovije na Telegramu',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/najnovije/',
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '1383786971938581',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@TelegramHR',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow',
        },
      ],
      link,
    }
  },
}
</script>
