<template>
  <div class="main-container flex single-article">
    <div class="full flex">
      <client-only>
        <theader headline="Karijere u Telegramu"></theader>
      </client-only>
    </div>
    <div class="full flex relative pretplata-page">
      <div
        class="container relative flex mobile-side-pad stretch column-full-pad"
      >
        <h1 class="full center-text">Karijere u Telegramu</h1>
        <p class="full center-text pretplata-tagline">
          Otvorene pozicije unutar Telegram Media Grupe
        </p>
      </div>
    </div>
    <div class="full flex relative column-bottom-pad">
      <div
        class="container flex relative mobile-side-pad pretplata-packboxes smaller-booksel column-vertical-pad"
      >
        <div
          v-for="post in posts"
          :key="post.id"
          class="half flex flex-responsive column-full-pad"
        >
          <app-link
            :to="post.permalink"
            class="full flex knjiga-hero pretplata-packbox relative column-full-pad"
          >
            <div class="full flex knjiga-cover knjiga-cover-3d job-cover">
              <img
                :src="
                  post.image?.full?.url ??
                  'https://www.telegram.hr/wp-content/uploads/2024/10/tg-main-meta.png'
                "
                aria-hidden="true"
              />
            </div>
            <div class="full flex knjiga-features">
              <div class="full relative center-text big-book-price bold">
                {{ post.title }}
              </div>
              <div class="nothfour full relative center-text">
                {{ post.excerpt }}
              </div>
              <!--<div class="nothfour full relative center-text bold">
                Do 21.03.2025.
              </div>-->
              <div class="full center btn-parent">
                <div class="btn animate">Pogledajte više</div>
              </div>
            </div>
          </app-link>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Karijere',
  async fetch() {
    if (!this.$store.state.category.categories.karijere) {
      if (process.server) {
        this.$telegram.context.res.statusCode = 404
        throw new Error('Kategorija ne postoji')
      }
      return
    }
    const page = this.$route.query.page ? parseInt(this.$route.query.page) : 1
    await this.$axios
      .get(`/api/category/karijere/page/${page}`)
      .then((res) => {
        this.posts = res.data.posts
        this.description = res.data.description
        if (res.data.posts.length < 20) {
          this.hasMore = false
        }
      })
      .catch((e) => {
        if (process.server) {
          this.$telegram.context.res.statusCode = 404
        }
        throw new Error('Kategorija ne postoji')
      })
  },
  data() {
    return {
      posts: [],
      description: '',
      hasMore: true,
    }
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/karijere/',
      },
    ]
    return {
      title: 'Karijere u Telegramu',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Otvorene pozicije unutar Telegram Media Grupe',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Otvorene pozicije unutar Telegram Media Grupe',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Karijere u Telegramu',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2024/10/tg-main-meta.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/karijere/',
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
