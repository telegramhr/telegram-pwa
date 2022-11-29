<template>
  <div class="main-container flex fancy-rubrika superone">
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
            <app-link role="menuitem" to="/super1" class="animate"
              >Look</app-link
            >
            <app-link role="menuitem" to="/super1" class="animate"
              >Style</app-link
            >
            <app-link role="menuitem" to="/super1" class="animate"
              >Relax</app-link
            >
            <app-link role="menuitem" to="/super1" class="animate"
              >Design</app-link
            >
            <app-link role="menuitem" to="/super1" class="animate"
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
          <div class="full flex">
            <mini
              v-for="post in posts.slice(4, 9)"
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
    <section class="full flex relative">
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
            />Top picks
          </h3>
        </div>
        <div class="full flex column-horizontal-pad">
          <div class="full flex stretch gallery-content superone-toppicks">
            <VueSlickCarousel
              ref="s1_toppicks_carousel"
              v-bind="slider_settings"
              style="display: block; width: 100%"
            >
              <div class="offer-slide">
                <a
                  href="#"
                  target="_blank"
                  class="full flex article relative"
                  role="article"
                >
                  <img
                    src="https://super1.telegram.hr/wp-content/uploads/sites/3/2022/10/jahacke-cizme-shopping-aspect-ratio-150-120.jpg"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <div class="full flex article-pad">
                    <p class="full bold center-text">Jahačke čizme za zimu</p>
                    <p class="full center-text">1890 kn</p>
                  </div>
                </a>
              </div>
              <div class="offer-slide">
                <a
                  href="#"
                  target="_blank"
                  class="full flex article relative"
                  role="article"
                >
                  <img
                    src="https://super1.telegram.hr/wp-content/uploads/sites/3/2022/10/garnier-7290-kuna-dm-aspect-ratio-150-120.png"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <div class="full flex article-pad">
                    <p class="full bold center-text">Super glow serum</p>
                    <p class="full center-text">7290 kn</p>
                  </div>
                </a>
              </div>
              <div class="offer-slide">
                <a
                  href="#"
                  target="_blank"
                  class="full flex article relative"
                  role="article"
                >
                  <img
                    src="https://super1.telegram.hr/wp-content/uploads/sites/3/2022/10/arket-pulover-shopping-aspect-ratio-150-120.jpg"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <div class="full flex article-pad">
                    <p class="full bold center-text">Striped pulover</p>
                    <p class="full center-text">842 kn</p>
                  </div>
                </a>
              </div>
              <div class="offer-slide">
                <a
                  href="#"
                  target="_blank"
                  class="full flex article relative"
                  role="article"
                >
                  <img
                    src="https://super1.telegram.hr/wp-content/uploads/sites/3/2022/10/za-shopping-aspect-ratio-150-120.jpg"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <div class="full flex article-pad">
                    <p class="full bold center-text">Orah</p>
                    <p class="full center-text">10 kn</p>
                  </div>
                </a>
              </div>
              <div class="offer-slide">
                <a
                  href="#"
                  target="_blank"
                  class="full flex article relative"
                  role="article"
                >
                  <img
                    src="https://super1.telegram.hr/wp-content/uploads/sites/3/2022/10/massimo-dutti-159900-kuna.png"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <div class="full flex article-pad">
                    <p class="full bold center-text">Čizme Massimo Duti</p>
                    <p class="full center-text">1599 kn</p>
                  </div>
                </a>
              </div>
            </VueSlickCarousel>
            <div
              class="gallery-left center gallery-arrow animate"
              @click="$refs.s1_toppicks_carousel.prev()"
            >
              <font-awesome-icon
                :icon="['far', 'angle-left']"
                class="animate"
              ></font-awesome-icon>
            </div>
            <div
              class="gallery-right center gallery-arrow animate"
              @click="$refs.s1_toppicks_carousel.next()"
            >
              <font-awesome-icon
                :icon="['far', 'angle-right']"
                class="animate"
              ></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>
    </section>
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
          class="fourth flex mobile-side-pad flex-responsive column-horizontal-pad align-children-bottom"
        >
          <div class="full flex">
            <superfeat
              v-for="post in posts.slice(1, 2)"
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
          v-for="post in posts.slice(5, 8)"
          :key="post.id"
          class="third flex-responsive flex column-full-pad"
        >
          <superfeat :key="post.id" :post="post"></superfeat>
        </div>
      </div>
    </section>
    <!-- S1 Story -->
    <section class="full flex relative">
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
          <a class="full flex superone-story column-vertical-pad center-text">
            <h2 class="full animate">
              <b>Kolumna Paule Brečak</b> Taksist mi je otvoreno ponudio da mu
              platim u naturi jer sam mu ugodna oku i preponama.
            </h2>
            <h2 class="full animate faded">
              Dosta se dobro sjećam svojeg prvog spoja. Imala sam 12 ili 13
              godina i bila zaljubljena u dečka iz razreda više..."
            </h2>
          </a>
        </div>
      </div>
    </section>
    <!-- Block 3: Look (75-25 + 33-33-33) -->
    <section class="full flex relative">
      <div class="container flex relative">
        <div class="full center relative superone-st-bottompad">
          <h3 class="flex superone-section-title">
            <img
              src="@/assets/img/s1_logo_clean_noline.svg"
              alt="Super1 logo"
            />
            <img
              src="@/assets/img/s1_logo_clean_noline_white.svg"
              alt="Super1 logo"
              class="dark-mode-only"
            />Look
          </h3>
        </div>
        <div class="full flex relative stretch column-bottom-pad">
          <div class="three-fourths flex flex-responsive relative">
            <div class="full flex column-horizontal-pad">
              <superfeat
                v-for="post in posts.slice(2, 3)"
                :key="'super-' + post.id"
                :post="post"
              ></superfeat>
            </div>
          </div>
          <div
            class="fourth flex mini-article-list mobile-side-pad flex-responsive column-horizontal-pad align-children-bottom"
          >
            <h3 class="full overtitle super-minititle">Super se čita</h3>
            <div class="full flex">
              <mini
                v-for="post in posts.slice(4, 9)"
                :key="post.id"
                :post="post"
              ></mini>
            </div>
          </div>
        </div>
        <div class="full flex relative">
          <div
            v-for="post in posts.slice(3, 6)"
            :key="post.id"
            class="third flex-responsive flex column-full-pad"
          >
            <superfeat :key="post.id" :post="post"></superfeat>
          </div>
        </div>
      </div>
    </section>
    <!-- Block 4: Partneri -->
    <section class="full flex relative">
      <div class="container flex relative">
        <div class="full center relative">
          <h3 class="flex superone-section-title superone-st-bottompad">
            <img
              src="@/assets/img/s1_logo_clean_noline.svg"
              alt="Super1 logo"
            />
            <img
              src="@/assets/img/s1_logo_clean_noline_white.svg"
              alt="Super1 logo"
              class="dark-mode-only"
            />Partneri
          </h3>
        </div>
        <div class="full flex relative superone-st-bottompad mobile-side-pad">
          <div
            v-for="post in posts.slice(4, 8)"
            :key="post.id"
            class="fourth flex-responsive flex column-horizontal-pad"
          >
            <superfeat :key="post.id" :post="post"></superfeat>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <tfooter></tfooter>
  </div>
</template>

<script>
import Superfeat from '../components/articles/Superfeat.vue'
export default {
  components: { Superfeat },
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
      slider_settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerMode: true,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            },
          },
        ],
      },
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
