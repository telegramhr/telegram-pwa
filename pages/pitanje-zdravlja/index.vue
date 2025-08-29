<template>
  <div class="main-container flex fancy-rubrika pitanje-zdravlja pz-homepage">
    <div class="full flex">
      <theader></theader>
    </div>
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
    <!-- Actual new TG multiverse header -->
    <nav class="full center relative nayos nayos-multiverse stretch">
      <div class="container flex stretch relative column-horizontal-pad">
        <app-link
          to="/"
          class="third flex alt-vertical-center nayos-logos the-big-t"
        >
          <img src="@/assets/img/t_logo.svg" alt="Telegram logo" />
          <img
            src="@/assets/img/t_logo.svg"
            alt="Telegram logo"
            class="dark-mode-only"
          />
        </app-link>
        <div class="two-thirds center align-children-end mobile-side-pad">
          <a v-show="canLogIn" class="signup-btn" @click.prevent="login"
            >Prijava</a
          >
          <app-link
            v-show="canLogIn"
            id="pretplatite se - header"
            to="/pretplata"
            class="newbtn"
            >Pretplatite se</app-link
          >
          <app-link
            v-show="$store.state.user.access?.length"
            id="pretplata-promo"
            to="/pretplata/poklon/"
            class="newbtn"
          >Poklonite pretplatu</app-link
          >
          <a
            v-show="!canLogIn"
            class="column-mini-left-pad desktop-only"
            href="https://pretplata.telegram.hr/subscriptions/subscriptions/my"
            aria-label="Moj račun"
          >
            <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon>
          </a>
          <a
            class="desktop-only column-mini-left-pad"
            aria-label="Prikaži tražilicu"
            :aria-expanded="$store.state.header.showSearchMenu.toString()"
            aria-controls="search"
            @click.prevent="$store.commit('header/updateMenu', 'search')"
          >
            <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon>
          </a>
          <a
            class="column-mini-left-pad"
            :aria-expanded="$store.state.header.showSideMenu.toString()"
            aria-label="Prikaži lijevi meni"
            aria-controls="sidebar"
            @click.prevent="$store.commit('header/updateMenu', 'side')"
          >
            <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon>
          </a>
        </div>
      </div>
    </nav>
    <div class="full flex relative fancy-rubrika-header">
      <div class="os-section-title-left-el"></div>
      <div class="os-section-title-right-el"></div>
      <div class="container flex fancyr-section-parent pz-hero">
        <h1 class="full center-text">
          <span data-aos="fade-up" data-aos-delay="750">Pitanje</span
          ><span data-aos="fade-down" data-aos-delay="1500">zdravlja</span>
        </h1>
        <nav class="full center page-header-nav">
          <app-link role="menuitem" to="/pitanje-zdravlja/leksikon-zdravlja"
            >Leksikon zdravlja</app-link
          >
          <app-link role="menuitem" to="/pitanje-zdravlja/lifestyle"
            >Lifestyle</app-link
          >
          <app-link role="menuitem" to="/pitanje-zdravlja/novosti"
            >Novosti</app-link
          >
          <app-link role="menuitem" to="/pitanje-zdravlja/price"
            >Priče</app-link
          >
        </nav>
      </div>
    </div>
    <div v-if="featured.length" class="full relative">
      <div class="container flex relative stretch standard-block intro-block">
        <div
          class="full flex column-horizontal-pad column-top-pad mobile-side-pad"
        >
          <div
            class="full flex article-big column-bottom-border column-bottom-pad"
          >
            <featured :key="featured[0].id" :post="featured[0]"></featured>
          </div>
        </div>
        <div class="full flex mobile-side-pad stretch">
          <div
            v-for="post in featured.slice(1, 4)"
            :key="post.id"
            class="third flex-responsive column-top-pad stretch"
          >
            <div class="full flex column-horizontal-pad column-right-border">
              <featured :post="post"></featured>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-title news-block-title full mobile-side-pad hide">
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <h1 class="column-left-pad full">Još priča</h1>
      </div>
    </div>
    <div class="full flex relative pz-specials-widget hide">
      <div class="container flex relative">
        <div class="fourth flex-responsive column-full-pad mobile-side-pad">
          <a class="full center pz-special-tile relative">
            <img
              src="https://images.telegram.hr/Fk65hhW56aR_lNZxLPgF702hOVhqTJ5uar4HYwakSho/preset:single1/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTEvMDAwLTh2cTZiMi5qcGc.jpg"
              aria-hidden="true"
            />
            <h2 class="full center-text">Zdravlje prostate</h2>
          </a>
        </div>
        <div class="fourth flex-responsive column-full-pad mobile-side-pad">
          <a class="full center pz-special-tile relative">
            <img
              src="https://images.telegram.hr/Fk65hhW56aR_lNZxLPgF702hOVhqTJ5uar4HYwakSho/preset:single1/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTEvMDAwLTh2cTZiMi5qcGc.jpg"
              aria-hidden="true"
            />
            <h2 class="full center-text">Moždani udar</h2>
          </a>
        </div>
        <div class="fourth flex-responsive column-full-pad mobile-side-pad">
          <a class="full center pz-special-tile relative">
            <img
              src="https://images.telegram.hr/Fk65hhW56aR_lNZxLPgF702hOVhqTJ5uar4HYwakSho/preset:single1/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTEvMDAwLTh2cTZiMi5qcGc.jpg"
              aria-hidden="true"
            />
            <h2 class="full center-text">Imunitet</h2>
          </a>
        </div>
        <div class="fourth flex-responsive column-full-pad mobile-side-pad">
          <a class="full center pz-special-tile relative">
            <img
              src="https://images.telegram.hr/Fk65hhW56aR_lNZxLPgF702hOVhqTJ5uar4HYwakSho/preset:single1/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTEvMDAwLTh2cTZiMi5qcGc.jpg"
              aria-hidden="true"
            />
            <h2 class="full center-text">Briga o koži</h2>
          </a>
        </div>
      </div>
    </div>
    <div v-if="featured.length" class="full relative">
      <div class="container flex relative block-2 standard-block stretch">
        <div class="full flex mobile-side-pad stretch secondary-gs-block">
          <div class="full column-full-pad flex">
            <div class="full column-top-border"></div>
          </div>
          <div
            class="three-fourths flex-responsive column-horizontal-pad column-right-border flex relative featured-split show-one-related"
          >
            <featured
              v-for="post in featured.slice(4, 5)"
              :key="post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad flex relative"
          >
            <medium
              v-for="post in featured.slice(5, 6)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
          <div class="full column-horizontal-pad column-top-pad flex">
            <div class="full column-top-border column-bottom-pad"></div>
          </div>
          <div
            class="three-fourths flex-responsive column-horizontal-pad column-right-border flex relative featured-split show-one-related"
          >
            <featured
              v-for="post in featured.slice(6, 7)"
              :key="post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad flex relative"
          >
            <medium
              v-for="post in featured.slice(7, 8)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
          <div class="full column-full-pad">
            <div class="full flex column-top-border mobile-top-border"></div>
          </div>
          <div
            class="full flex stretch relative no-last-border-mobile cantha-small-block"
          >
            <div
              v-for="post in featured.slice(8, 12)"
              :key="post.id"
              class="fourth flex-responsive column-right-border column-horizontal-pad"
            >
              <standard :post="post"></standard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full pz-fancy-slide relative center">
      <div class="container flex relative mobile-side-pad">
        <div class="full column-full-pad">
          <h2
            class="full center-text"
            data-aos="fade-down"
            data-aos-delay="750"
          >
            Vaše
            <span class="pz-blue pz-dynamic">pitanje zdravlja</span>
          </h2>
          <p
            class="full pz-intro center-text"
            data-aos="fade-up"
            data-aos-delay="1250"
          >
            Napišite koja zdravstvena tema vas zanima, istražit ćemo je i
            ponuditi točne odgovore.
          </p>
          <div class="full center" data-aos="fade-up" data-aos-delay="2000">
            <textarea id="pz-query" v-model="question"></textarea>
          </div>
          <div class="full center" data-aos="fade-up" data-aos-delay="2000">
            <div
              v-show="!sentsubmission"
              class="pz-button"
              @click.prevent="submitQuestion"
            >
              Pošalji pitanje
            </div>
            <p v-show="sentsubmission" class="full pz-intro center-text">
              Vaše pitanje je spremljeno. Hvala na prijavi!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="full flex">
      <div
        class="container flex relative native-block stretch mobile-side-pad cantha-small-block"
      >
        <div
          v-for="post in posts"
          :key="post.id"
          class="fourth flex-responsive column-right-border column-horizontal-pad column-bottom-margin"
        >
          <standard :post="post"></standard>
        </div>
        <div
          v-if="hasMore"
          class="full center subtle-btn-parent relative clickable"
          @click="loadMore"
        >
          <a
            v-show="!loading"
            :href="readMore"
            class="newbtn huge-newbtn animate"
          >
            Vidi više
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
    <div class="full flex relative os-about-section">
      <div class="container column-vertical-pad mobile-side-pad flex">
        <h2 class="full flex column-horizontal-pad os-elevate-title">
          Što je Pitanje zdravlja?
        </h2>
        <div class="full flex relative">
          <div
            class="third column-horizontal-pad flex-responsive column-right-border"
          >
            <div class="noththree full os-about-subtitle">
              <span>Kritički progovaramo</span
              ><span> o zdravstvenim temama</span>
            </div>
            <p>
              Obrađujemo zdravstvene teme iz svih kuteva, koristimo relevantne
              izvore podataka i otvaramo diskusiju s čitateljima.
            </p>
          </div>
          <div
            class="third column-horizontal-pad flex-responsive column-right-border"
          >
            <div class="noththree full os-about-subtitle">
              <span>Pomažemo u razvoju</span
              ><span> zdravstvene pismenosti građana</span>
            </div>
            <p>
              Educiramo, informiramo i demistificiramo. Zdravstvene teme
              objašnjavamo laički. Pomažemo vam da steknete kontrolu nad svojim
              zdravstvenim stanjem.
            </p>
          </div>
          <div class="third column-horizontal-pad flex-responsive">
            <div class="noththree full os-about-subtitle">
              <span>Dajemo točne odgovore</span><span> na vaša pitanja</span>
            </div>
            <p>
              Pitanje zdravlja je pravo mjesto za informacije o zdravstvenim
              temama. Kritički obrađujemo teme koje vas zanimaju.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="full native-signature">
      <div class="container flex mobile-side-pad">
        <p class="full center-text footer-subtitle">
          Pitanje zdravlja podržavaju
        </p>
        <div class="full center pz-logos">
          <img
            src="https://www.telegram.hr/wp-content/uploads/2021/11/logo-kuz-120x96-1.jpg"
            alt="Savez udruga u zdravstvu logo"
          />
          <img
            src="https://www.telegram.hr/wp-content/uploads/2021/11/nismo-same.png"
            alt="Nismo same logo"
          />
          <img
            src="https://www.telegram.hr/wp-content/uploads/2022/01/kohom-logo-standardni.png"
            alt="KoHOM logo"
          />
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'PitanjeZdravlja',
  async fetch() {
    this.featured = await this.$axios.$get('/api/featured/pitanje-zdravlja')
  },
  data() {
    return {
      loading: false,
      hasMore: true,
      sentsubmission: false,
      question: '',
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
        url: 'https://www.telegram.hr/pitanje-zdravlja/',
        name: 'PitanjeZdravlja',
        description:
          'Provjerene i ekskluzivne zdravstvene vijesti, analize i priče',
        publisher: this.$store.state.header.publisher,
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.query.page) {
        this.page = parseInt(this.$route.query.page)
      }
      this.$axios
        .get(`/api/category/pitanje-zdravlja/page/${this.page}`)
        .then((res) => {
          this.posts = res.data.posts
        })
      AOS.init({
        once: true,
      })
      this.$store.dispatch('ads/initAds', { route: this.$route })
    })
  },
  methods: {
    loadMore() {
      this.loading = true
      this.page++
      this.$axios
        .get(`/api/category/pitanje-zdravlja/page/${this.page}`)
        .then((res) => {
          this.posts = [...this.posts, ...res.data.posts]
          if (res.data.posts.length < 16) {
            this.hasMore = false
          }
          this.loading = false
        })
    },
    submitQuestion() {
      this.$axios
        .get(
          '/gscripts/AKfycbwgk-r1uOxx60N9HSeLONiFKzcyMz_fj50K11wxg4ZDba5lUtuuDxh1ux440WL2veFZ/exec',
          {
            params: {
              pitanje: this.question,
            },
          }
        )
        .then(() => {
          this.sentsubmission = true
        })
        .catch(() => {
          // special case because CORS fails, but data goes through
          this.sentsubmission = true
        })
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href:
          'https://www.telegram.hr/pitanje-zdravlja/' +
          (this.page > 1 ? `?page=${this.page}` : ''),
      },
      {
        hid: 'feed',
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'PitanjeZdravlja.hr',
        href: 'https://www.telegram.hr/feed/pitanje-zdravlja/',
      },
    ]
    if (this.page > 1) {
      link.push({
        hid: 'prev',
        rel: 'prev',
        href: `https://www.telegram.hr/pitanje-zdravlja/?page=${this.page - 1}`,
      })
    }
    if (this.hasMore) {
      link.push({
        hid: 'next',
        rel: 'next',
        href: `https://www.telegram.hr/pitanje-zdravlja/?page=${this.page + 1}`,
      })
    }
    return {
      title: 'PitanjeZdravlja',
      meta: [
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'PitanjeZdravlja',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pitanje-zdravlja/',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/pz_share.jpg',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Provjerene i ekskluzivne zdravstvene vijesti, analize i priče',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Provjerene i ekskluzivne zdravstvene vijesti, analize i priče',
        },
      ],
      link,
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
