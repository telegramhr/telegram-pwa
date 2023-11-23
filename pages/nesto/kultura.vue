<template>
  <div :class="['main-container', 'flex', 'category-page', 'category-kultura']">
    <template>
      <!-- TG Multiverse header -->
      <div class="full flex relative single-article">
        <client-only>
          <theader headline="Kultura na Telegramu"></theader>
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
        <div class="container flex mobile-side-pad relative mobile-top-pad">
          <div class="full column-full-pad">
            <div class="full cantha-separator"></div>
          </div>
          <div class="full column-horizontal-pad special-category-title">
            <h1 class="full">
              <img
                src="@/assets/img/tg_kultura_logo.svg"
                class="light-mode-only"
                alt="Kultura"
              />
              Telegram
            </h1>
          </div>
          <div
            class="full column-horizontal-pad column-top-pad mobile-side-pad"
          >
            <div class="full column-top-border"></div>
          </div>
        </div>
      </div>
      <!-- Veliki blok - intro -->
      <div class="full relative">
        <div
          class="container flex relative stretch block-kaineng mobile-top-pad"
        >
          <div class="full flex stretch column-top-pad">
            <div class="two-thirds flex-responsive flex mobile-side-pad">
              <div
                class="full column-horizontal-pad flex alt-big-break center-text"
              >
                <featured
                  v-for="post in posts.slice(0, 1)"
                  :key="post.id"
                  :post="post"
                ></featured>
              </div>
            </div>
            <div
              class="third flex-responsive super-sidebar flex column-horizontal-pad column-left-border flex-responsive split-articles mobile-side-pad"
            >
              <medium
                v-for="post in posts.slice(4, 8)"
                :key="post.id"
                :post="post"
              ></medium>
            </div>
          </div>
          <div class="full flex mobile-side-pad stretch">
            <div class="full flex column-full-pad">
              <div class="full column-top-border"></div>
            </div>
            <div
              v-for="post in posts.slice(1, 4)"
              :key="post.id"
              class="third flex-responsive column-right-border stretch"
            >
              <div class="full flex column-horizontal-pad">
                <featured :post="post"></featured>
              </div>
            </div>
          </div>
          <div class="full column-full-pad mobile-side-pad">
            <div class="full column-top-border"></div>
          </div>
        </div>
      </div>
      <!-- Echovald rubrika -->
      <div class="full flex">
        <div
          class="container flex relative block-echovald stretch mobile-side-pad"
        >
          <div class="three-fourths flex-responsive flex stretch">
            <div class="half flex-responsive flex column-horizontal-pad">
              <featured
                v-for="post in posts.slice(7, 8)"
                :key="post.id"
                :post="post"
              />
            </div>
            <div
              class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
            >
              <medium
                v-for="post in posts.slice(8, 11)"
                :key="post.id"
                :post="post"
              ></medium>
            </div>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad desktop-mini-force"
          >
            <standard
              v-for="post in posts.slice(11, 15)"
              :key="post.id"
              :post="post"
            ></standard>
          </div>
          <client-only>
            <div class="full relative center">
              <ad-unit id="telegram_desktop_billboard_v2"></ad-unit>
            </div>
          </client-only>
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
              v-for="post in posts.slice(16)"
              :key="post.id"
              class="fourth flex-responsive column-right-border column-horizontal-pad column-botton-margin"
            >
              <standard :post="post"></standard>
            </div>
          </div>
        </div>
      </div>
      <tfooter></tfooter>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Kultura',
  async fetch() {
    await this.$axios.get('/api/category/kultura/page/1').then((res) => {
      this.posts = res.data.posts
    })
  },
  data() {
    return {
      loading: false,
      posts: [],
      page: 1,
    }
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/kultura/',
      },
    ]
    return {
      title: 'Kultura na Telegramu',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Podijelite s nama informacije koje javnost zaslužuje znati.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Podijelite s nama informacije koje javnost zaslužuje znati.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Telegram Dojave',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/dojave/',
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
