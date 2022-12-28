<template>
  <div class="main-container flex fancy-rubrika pitanje-zdravlja pz-homepage">
    <div class="full flex">
      <theader></theader>
    </div>
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
          <app-link role="menuitem" to="/pitanje-zdravlja/lifestyle">Lifestyle</app-link>
          <app-link role="menuitem" to="/pitanje-zdravlja/vijesti">Vijesti</app-link>
          <app-link role="menuitem" to="/pitanje-zdravlja/price">Priče</app-link>
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
    <div class="full flex relative os-about-section">
      <div class="container column-vertical-pad mobile-side-pad flex">
        <h2 class="full flex column-horizontal-pad os-elevate-title">
          Što je Pitanje zdravlja?
        </h2>
        <div class="full flex relative">
          <div
            class="third column-horizontal-pad flex-responsive column-right-border"
          >
            <h3 class="full os-about-subtitle">
              <span>Kritički progovaramo</span
              ><span> o zdravstvenim temama</span>
            </h3>
            <p>
              Obrađujemo zdravstvene teme iz svih kuteva, koristimo relevantne
              izvore podataka i otvaramo diskusiju s čitateljima.
            </p>
          </div>
          <div
            class="third column-horizontal-pad flex-responsive column-right-border"
          >
            <h3 class="full os-about-subtitle">
              <span>Pomažemo u razvoju</span
              ><span> zdravstvene pismenosti građana</span>
            </h3>
            <p>
              Educiramo, informiramo i demistificiramo. Zdravstvene teme
              objašnjavamo laički. Pomažemo vam da steknete kontrolu nad svojim
              zdravstvenim stanjem.
            </p>
          </div>
          <div class="third column-horizontal-pad flex-responsive">
            <h3 class="full os-about-subtitle">
              <span>Dajemo točne odgovore</span><span> na vaša pitanja</span>
            </h3>
            <p>
              Pitanje zdravlja je pravo mjesto za informacije o zdravstvenim
              temama. Kritički obrađujemo teme koje vas zanimaju.
            </p>
          </div>
        </div>
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
        <section
          class="fourth flex flex-responsive column-horizontal-pad mobile-side-pad"
        >
          <h2 class="full flex section-title">Najnovije</h2>
          <latest-alt
            v-show="!$mobile"
            :portal="1"
            category="pitanje-zdravlja"
          ></latest-alt>
          <div class="full flex desktop-only">
            <h2 class="full flex section-title">Newsletter</h2>
            <newsletter></newsletter>
          </div>
        </section>
        <div class="three-fourths flex-responsive flex">
          <section
            class="two-thirds flex-responsive flex mobile-side-pad column-horizontal-pad column-right-border column-left-border"
          >
            <featured :key="featured[4].id" :post="featured[4]"></featured>
            <div class="full flex split-articles column-top-pad">
              <template v-for="post in featured.slice(5, 8)">
                <medium :key="post.id" :post="post"></medium>
              </template>
            </div>
          </section>
          <section
            class="third flex-responsive flex mobile-side-pad column-horizontal-pad"
          >
            <template v-for="post in featured.slice(8, 11)">
              <medium :key="post.id" :post="post"></medium>
            </template>
          </section>
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
      <div class="container flex relative native-block stretch mobile-side-pad">
        <div
          v-for="post in posts"
          :key="post.id"
          class="fourth flex-responsive column-full-pad"
        >
          <standard :post="post"></standard>
        </div>
        <div
          class="full center subtle-btn-parent relative clickable"
          @click="loadMore"
        >
          <div v-show="!loading" class="newbtn huge-newbtn animate">
            Vidi više
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
        url: 'https://www.telegram.hr/pitanje-zdravlja',
        name: 'PitanjeZdravlja',
        description:
          'Provjerene i ekskluzivne zdravstvene vijesti, analize i priče',
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$axios.get('/api/category/pitanje-zdravlja').then((res) => {
        this.posts = res.data.posts
      })
    })
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get(`/api/category/pitanje-zdravlja/page/${this.page}`)
        .then((res) => {
          this.posts = [...this.posts, ...res.data.posts]
          this.page++
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
          content: 'https://www.telegram.hr/pitanje-zdravlja',
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
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pitanje-zdravlja',
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
