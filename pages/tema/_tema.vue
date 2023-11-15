<template>
  <div>
    <div v-if="posts.length" class="main-container flex category-page">
      <!-- TG Multiverse header -->
      <div class="full flex relative single-article">
        <client-only>
          <!-- TODO: staviti da bude "Članci na temu X" kao što je u section titleu. -->
          <theader :headline="`Članci na temu ${cat}` | parseCat"></theader>
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
          <div class="full column-horizontal-pad">
            <h1 class="full center-text">
              Članci na temu {{ cat | parseCat }}
            </h1>
          </div>
          <div
            class="full column-horizontal-pad column-top-pad mobile-side-pad"
          >
            <div class="full column-top-border"></div>
          </div>
        </div>
      </div>
      <client-only>
        <div class="full relative center">
          <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
        </div>
      </client-only>
      <!-- Veliki blok - intro -->
      <div class="full relative">
        <div
          class="container flex relative stretch block-kaineng mobile-top-pad"
        >
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
                  <div class="noththree full overtitle">Posebne pogodnosti</div>
                  <h2 class="full">
                    Specijalni newsletteri za Telegramove pretplatnike.
                  </h2>
                  <div class="nothfour full">
                    Najbolje od Telegrama, svaki dan u vašem inboxu.
                  </div>
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
                    <div class="nothfour full center-text">
                      Odaberite tematske i autorske newslettere koje želite
                      primati.
                    </div>
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
              v-for="post in posts.slice(12)"
              :key="post.id"
              class="fourth flex-responsive column-right-border column-horizontal-pad column-botton-margin"
            >
              <standard :post="post"></standard>
            </div>
          </div>
        </div>
      </div>
      <client-only>
        <div class="full relative center">
          <ad-unit id="telegram_desktop_billboard_v3"></ad-unit>
        </div>
      </client-only>
      <!-- Read more widget -->
      <div v-if="hasMore" class="full flex relative">
        <div class="container flex relative column-full-pad">
          <div class="full center relative clickable" @click.prevent="loadMore">
            <a v-show="!loading" :href="readMore" class="newbtn altbtn animate">
              Učitaj još članaka
            </a>
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
    <div v-else>
      <div class="full flex relative single-article">
        <client-only>
          <theader headline="Tema ne postoji"></theader>
        </client-only>
      </div>
      <div class="full flex relative">
        <div class="container flex mobile-side-pad relative">
          <h1
            class="full section-title center-text column-horizontal-pad os-section-title"
          >
            Tema ne postoji
          </h1>
          <div class="full column-horizontal-pad column-top-pad">
            <div class="full cantha-separator"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TemaIndex',
  async fetch() {
    const page = this.$route.query.page ? parseInt(this.$route.query.page) : 1
    await this.$axios
      .get(`/api/tag/${this.$route.params.tema}/page/${page}`)
      .then((res) => {
        this.posts = res.data.posts
        this.category = res.data.tag
        if (res.data.posts.length < 12) {
          this.hasMore = false
        }
        if (res.data.posts.length === 12 && res.data.count >= page * 12) {
          this.hasMore = true
        }
        if (!res.data.posts.length) {
          this.$telegram.context.res.statusCode = 404
        }
      })
      .catch(() => {
        // TODO: error logging
      })
  },
  data() {
    return {
      posts: [],
      category: '',
      morePosts: [],
      page: this.$route.query.page ? parseInt(this.$route.query.page) : 1,
      hasMore: false,
      loading: false,
    }
  },
  computed: {
    cat() {
      return this.$options.filters.parseCat(this.category)
    },
    readMore() {
      return (
        'https://www.telegram.hr/tema/' +
        this.$route.params.tema +
        '/?page=' +
        (this.$route.query.page ? parseInt(this.$route.query.page) + 1 : 2)
      )
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('ads/initAds', { route: this.$route })
    })
  },
  methods: {
    loadMore() {
      if (!this.hasMore) {
        return
      }
      this.loading = true
      this.page++
      this.$axios
        .get(`/api/tag/${this.$route.params.tema}/page/${this.page}`)
        .then((res) => {
          this.posts = [...this.posts, ...res.data.posts]
          this.loading = false
          if (res.data.posts < 12) {
            this.hasMore = false
          }
        })
        .catch(() => {
          // TODO: error logging
        })
    },
  },
  head() {
    let description = 'Najnovije vijesti na temu ' + this.cat + ' na Telegramu.'
    if (this.posts.length) {
      description = ''
      this.posts.slice(0, 3).forEach((post) => {
        description += post.title + ' '
      })
    }
    let link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://www.telegram.hr/tema/${this.$route.params.tema}/${
          this.$route.query.page ? `?page=${this.$route.query.page}` : ''
        }`,
      },
    ]
    if (this.hasMore) {
      link = [
        ...link,
        {
          hid: 'next',
          rel: 'next',
          href: `https://www.telegram.hr/tema/${
            this.$route.params.tema
          }/?page=${this.page + 1}`,
        },
      ]
    }
    if (this.page > 1) {
      link = [
        ...link,
        {
          hid: 'prev',
          rel: 'prev',
          href: `https://www.telegram.hr/tema/${
            this.$route.params.tema
          }/?page=${this.page - 1}`,
        },
      ]
    }
    return {
      title:
        `${this.cat} - Najnovije vijesti` +
        (this.page > 1 ? ` - ${this.page}. stranica` : ''),
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noarchive',
        },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.cat,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: this.$route.fullPath,
        },
      ],
      link,
    }
  },
}
</script>
