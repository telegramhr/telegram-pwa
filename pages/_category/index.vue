<template>
  <div :class="['main-container', 'flex', 'category-page']">
    <!-- TG Multiverse header -->
    <div class="full flex relative single-article">
      <client-only>
        <theader :headline="cat | parseCat"></theader>
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
      <div class="container flex mobile-side-pad relative">
        <h1
          class="full section-title center-text column-horizontal-pad os-section-title"
        >
          {{ cat | parseCat }}
        </h1>
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
      </div>
    </div>
    <!-- Veliki blok - intro -->
    <div class="full relative">
      <div class="container flex relative stretch block-kaineng mobile-top-pad">
        <div class="full flex">
          <div class="full flex mobile-side-pad stretch">
            <div
              class="full column-horizontal-pad column-top-pad flex split-articles big-split alt-big-break center-text"
            >
              <standard
                v-for="post in posts.slice(0, 1)"
                :key="post.id"
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
            v-for="post in posts.slice(1, 4)"
            :key="post.id"
            class="third flex-responsive column-right-border stretch"
          >
            <div class="full flex column-horizontal-pad">
              <featured :post="post"></featured>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Prekid newsletter -->
    <div class="full relative">
      <div class="container flex relative">
        <div class="full column-full-pad">
          <div class="full column-bottom-border"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <app-link
            to="/newsletters"
            class="full cantha-break mobile-side-pad flex relative stretch"
          >
            <div class="third column-full-pad center flex-responsive">
              <div class="full flex article">
                <h3 class="full overtitle">Posebne pogodnosti</h3>
                <h2 class="full">
                  Specijalni newsletteri za Telegramove pretplatnike.
                </h2>
                <h5 class="full">
                  Najbolje od Telegrama, svaki dan u vašem inboxu.
                </h5>
              </div>
            </div>
            <div class="two-thirds stretch flex flex-responsive">
              <div class="two-thirds column-full-pad center flex-responsive">
                <img
                  src="@/assets/img/tg_newsletter_visual.png"
                  alt="Kolekcija Telegramovih newslettera"
                />
              </div>
              <div class="third center flex-responsive">
                <div class="full flex article">
                  <div class="full center">
                    <div class="newbtn">Prijavite se</div>
                  </div>
                  <h5 class="full center-text">
                    Odaberite tematske i autorske newslettere koje želite
                    primati.
                  </h5>
                </div>
              </div>
            </div>
          </app-link>
        </div>
        <div class="full column-full-pad">
          <div class="full column-bottom-border"></div>
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
              v-for="post in posts.slice(4, 5)"
              :key="post.id"
              :post="post"
            />
          </div>
          <div
            class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
          >
            <medium
              v-for="post in posts.slice(5, 8)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
        </div>
        <div
          class="fourth flex-responsive column-horizontal-pad desktop-mini-force"
        >
          <standard
            v-for="post in posts.slice(8, 12)"
            :key="post.id"
            :post="post"
          ></standard>
        </div>
        <div class="full relative center">
          <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
        </div>
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
            v-for="post in posts.slice(12)"
            :key="post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad column-botton-margin"
          >
            <standard :post="post"></standard>
          </div>
        </div>
      </div>
    </div>
    <!-- Read more widget -->
    <div class="full flex relative">
      <div class="container flex relative column-full-pad">
        <div class="full center relative clickable" @click="loadMore">
          <div v-show="!loading" class="newbtn altbtn animate">
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
    <tfooter></tfooter>
  </div>
</template>

<script>
import Standard from '../../components/articles/Standard.vue'
export default {
  name: 'CategoryIndex',
  components: { Standard },
  async fetch() {
    await this.$axios
      .get('/api/category/' + this.$route.params.category)
      .then((res) => {
        this.posts = res.data.posts
        this.cat = res.data.category
      })
      .catch(() => {
        if (process.server) {
          this.$telegram.context.res.statusCode = 404
        }
        throw new Error('Kategorija ne postoji')
      })
  },
  data() {
    return {
      loading: false,
      posts: [],
      cat: '',
      page: 2,
    }
  },
  computed: {
    extraClass() {
      return this.$store.state.category.categories[this.$route.params.category]
        ? this.$store.state.category.categories[this.$route.params.category]
            .extraClass
        : ''
    },
  },
  mounted() {
    this.$store.dispatch('ads/initAds', { route: this.$route })
    this.$nextTick(function () {
      this.loadMore()
    })
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get(`/api/category/${this.$route.params.category}/page/${this.page}`)
        .then((res) => {
          this.posts = [...this.posts, ...res.data.posts]
          this.loading = false
          this.page++
        })
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: [this.$store.state.theme.theme, this.extraClass],
      },
      title: this.$options.filters.parseCat(this.cat),
      titleTemplate: 'Kategorija %s | Telegram.hr',
      meta: [
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.$options.filters.parseCat(this.cat),
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: this.$route.fullPath,
        },
        {
          hid: 'fb:app_id',
          name: 'fb:app_id',
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
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr' + this.$route.fullPath,
        },
      ],
    }
  },
}
</script>
