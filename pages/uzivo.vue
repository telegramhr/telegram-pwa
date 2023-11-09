<template>
  <div :class="['main-container', 'flex', 'category-page']">
    <!-- TG Multiverse header -->
    <div class="full flex relative single-article">
      <theader headline="Najnovije na Telegramu"></theader>
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
          <div
            class="third flex center animate"
            :class="{ 'active-latest-header': category === 'najnovije' }"
            @click="category = 'najnovije'"
          >
            <span>Najnovije</span>
          </div>
          <div
            class="third flex center animate"
            :class="{ 'active-latest-header': category === 'sport' }"
            @click="category = 'sport'"
          >
            <span>Sport</span>
          </div>
          <div
            class="third flex center animate"
            :class="{ 'active-latest-header': category === 'zivot' }"
            @click="category = 'zivot'"
          >
            <span>Život</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Veliki blok - intro -->
    <div class="full relative">
      <div
        class="container mobile-side-pad smaller-container flex relative stretch column-vertical-pad block-echovald latest-line-feed latest-line-feed-pad"
      >
        <client-only>
          <div
            class="full split-articles column-left-border column-horizontal-pad flex"
          >
            <medium-alt
              v-for="post in posts[category]"
              :key="post.id"
              :post="post"
            ></medium-alt>
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
        </client-only>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>
<script>
export default {
  name: 'Uzivo',
  data() {
    return {
      loading: false,
      category: 'najnovije',
    }
  },
  computed: {
    posts() {
      return this.$store.state.uzivo.posts
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('uzivo/getPosts')
    })
  },
  methods: {
    loadMore() {
      this.$store.dispatch('uzivo/morePosts', this.category)
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/uzivo/',
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
          hid: 'og:title',
          property: 'og:title',
          content: 'Najnovije na Telegramu',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/uzivo/',
        },
      ],
      link,
    }
  },
}
</script>
