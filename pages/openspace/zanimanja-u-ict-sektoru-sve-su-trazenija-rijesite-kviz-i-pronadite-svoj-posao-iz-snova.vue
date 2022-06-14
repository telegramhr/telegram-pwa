<template>
  <div
    :class="[
      'main-container',
      'flex',
      'single-article',
      typeClass,
      categoryClass,
    ]"
  >
    <theader
      :id="Number(post.id)"
      :headline="post.portal_title"
      :post="post"
    ></theader>
    <div v-show="related_posts" class="full related-header-widget">
      <div class="container flex desktop-only column-vertical-pad">
        <div v-for="rpost in related_posts" :key="rpost.id" class="third flex">
          <div class="full flex column-horizontal-pad">
            <standard :post="rpost"></standard>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="post.type === 'premium'"
      class="full premium-article-head relative"
    >
      <div v-if="post.image.author" class="meta-foto">
        FOTO: {{ post.image.author }}
      </div>
      <div class="mobile-only full center mobile-pa-nav relative flex">
        <a
          :aria-expanded="$store.state.header.showSideMenu.toString()"
          aria-label="Prikaži lijevi meni"
          aria-controls="sidebar"
          @click.prevent="$store.commit('header/updateMenu', 'side')"
        >
          <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon
        ></a>
        <nuxt-link to="/" class="logo">
          <img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo" />
        </nuxt-link>
        <a
          v-show="canLogIn"
          class="mob-nav-otherbtn mobile-only"
          @click.prevent="login"
        >
          <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon
        ></a>
        <app-link
          v-show="!canLogIn"
          class="mobile-only mob-nav-otherbtn"
          to="/moj-racun"
          aria-label="Moj račun"
        >
          <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon
        ></app-link>
      </div>
      <img
        v-if="post.image.full"
        class="article-head-image"
        :src="post.image.full"
        :alt="post.image.alt"
      />
      <div class="full flex article-head">
        <div class="full flex overtitle-parent">
          <h3 class="overtitle">{{ post.category | parseCat }}</h3>
          <div v-if="post.promo.partner" class="collab-overtitle">
            <h3 class="overtitle">{{ post.promo.prefix }}</h3>
            <img :src="post.promo.logo" :alt="post.promo.partner" />
          </div>
        </div>
        <h1 class="full">{{ post.portal_title }}</h1>
        <h2 class="full">{{ post.subtitle }}</h2>
      </div>
    </div>
    <div class="full relative">
      <div class="full flex">
        <article
          id="article-body"
          class="container column-full-pad flex relative mobile-side-pad"
        >
          <div class="full column article-head column-top-pad flex">
            <div class="full flex overtitle-parent">
              <h3 class="overtitle">{{ post.category | parseCat }}</h3>
              <div v-if="post.promo.partner" class="collab-overtitle">
                <h3 class="overtitle">{{ post.promo.prefix }}</h3>
                <img :src="post.promo.logo" :alt="post.promo.partner" />
              </div>
            </div>
            <h1 class="full">{{ post.title }}</h1>
            <h2 class="full">
              {{ post.subtitle }}
            </h2>
            <h5 class="full flex relative article-meta mobile-only">
              <template v-if="post.promo.partner">
                <a href="#" class="meta-author flex">
                  <img
                    v-if="!post.promo.signature_logo_off"
                    :src="post.promo.logo"
                  />
                  <span>{{ post.promo.prefix }}</span>
                  <span>{{ post.promo.partner }}</span>
                </a>
              </template>
              <template v-else>
                <nuxt-link
                  v-for="author in post.authors"
                  :key="author.name"
                  :to="author.url"
                  class="meta-author flex"
                  rel="author"
                  ><img
                    v-if="author.image"
                    :src="author.image"
                    :alt="author.name"
                  />
                  <span>Piše</span
                  ><span class="vcard author">{{
                    author.name
                  }}</span></nuxt-link
                >
              </template>
              <client-only>
                <subscribe-link
                  v-if="post.type === 'commentary'"
                  :author="post.authors[0]"
                ></subscribe-link>
              </client-only>
            </h5>
            <div
              v-if="post.image.url || post.video"
              class="full flex article-head-image-parent relative"
            >
              <template v-if="post.video">
                <!-- eslint-disable-next-line -->
                  <div style="width: 100%" v-html="post.video" />
              </template>
              <template v-else>
                <img
                  class="article-head-image"
                  :srcset="srcset"
                  :src="post.image.url"
                  :alt="post.image.alt"
                />
                <div v-if="post.image.author" class="meta-foto">
                  FOTO: {{ post.image.author }}
                </div>
              </template>
            </div>
            <p v-if="post.perex" class="perex">
              {{ post.perex }}
            </p>
            <h5 class="full flex relative article-meta">
              <template v-if="post.promo.partner">
                <a href="#" class="meta-author flex desktop-only">
                  <img
                    v-if="!post.promo.signature_logo_off"
                    :src="post.promo.logo"
                  />
                  <span>{{ post.promo.prefix }}</span>
                  <span>{{ post.promo.partner }}</span>
                </a>
              </template>
              <template v-else>
                <nuxt-link
                  v-for="author in post.authors"
                  :key="author.name"
                  :to="author.url"
                  class="meta-author flex desktop-only"
                  rel="author"
                  ><img
                    v-if="author.image"
                    :src="author.image"
                    :alt="author.name"
                  /><span>Piše</span
                  ><span class="vcard author">{{
                    author.name
                  }}</span></nuxt-link
                >
              </template>
              <span class="meta-date">{{ post.time | parseTime }}</span>
              <span v-if="post.recommendations" class="meta-preporuke"
                >{{ post.recommendations }} preporuka</span
              >
              <div class="sidebar-social flex">
                <a href="#" @click.prevent="fbShare"
                  ><font-awesome-icon
                    :icon="['fab', 'facebook-f']"
                    class="animate"
                  ></font-awesome-icon>
                </a>
                <a
                  :href="
                    'https://twitter.com/intent/tweet?counturl=' +
                    encodeURI(post.social.path) +
                    '&text=' +
                    encodeURI(post.portal_title) +
                    '&url=' +
                    encodeURI(post.social.path) +
                    '&via=TelegramHR'
                  "
                  target="_blank"
                  ><font-awesome-icon
                    :icon="['fab', 'twitter']"
                    class="animate"
                  ></font-awesome-icon
                ></a>
              </div>
            </h5>
          </div>
          <div class="full relative center single-top-banner">
            <ad-unit
              id="telegram_desktop_billboard_v1"
              :disable="
                post.disable_ads.includes('all') ||
                (post.category_slug && post.category_slug.includes('openspace'))
              "
            ></ad-unit>
          </div>
          <div class="full relative single-article-body">
            <!-- eslint-disable vue/no-v-html -->
            <div
              id="article-content"
              class="cXenseParse mrf-article-body"
              @click="handleClick"
              v-html="post.content"
            ></div>

            <div id="article-content">
              <div class="native-quiz">
                <VueSlickCarousel
                  ref="carousel"
                  :arrows="false"
                  :draggable="false"
                  :adaptive-height="true"
                  :infinite="false"
                  style="display: block; width: 100%"
                >
                  <div v-for="question in data.questions1" :key="question.id">
                    <component
                      :is="question.type"
                      :data="question"
                      @answer="getAnswer"
                    ></component>
                  </div>
                  <div>
                    <h2>{{ result1.title }}</h2>
                    <!-- eslint-disable vue/no-v-html -->
                    <p v-html="result1.description"></p>
                    <!-- eslint-enable vue/no-v-html -->
                    <button class="classic-btn" @click="$refs.carousel.next()">
                      Sljedeće
                    </button>
                  </div>
                  <div v-for="question in data.questions2" :key="question.id">
                    <component
                      :is="question.type"
                      :data="question"
                      @answer="getAnswer"
                    ></component>
                  </div>
                  <div>
                    <h2>{{ result2.title }}</h2>
                    <!-- eslint-disable vue/no-v-html -->
                    <p v-html="result2.description"></p>
                    <!-- eslint-enable vue/no-v-html -->
                    <button class="classic-btn" @click="$refs.carousel.next()">
                      Sljedeće
                    </button>
                  </div>
                  <div v-for="question in data.questions3" :key="question.id">
                    <component
                      :is="question.type"
                      :data="question"
                      @answer="getAnswer"
                    ></component>
                  </div>
                  <div>
                    <h2>{{ result3.title }}</h2>
                    <!-- eslint-disable vue/no-v-html -->
                    <p v-html="result3.description"></p>
                    <!-- eslint-enable vue/no-v-html -->
                  </div>
                </VueSlickCarousel>
              </div>
              <hr />
              <p>
                <em>Sadržaj nastao u suradnji s Hrvatskim Telekomom.</em>
              </p>
            </div>

            <!-- Article footer -->
            <div
              class="full relative single-article-footer flex column-top-pad"
            >
              <div class="half flex-responsive article-tags">
                <nuxt-link
                  v-for="tag in post.tags"
                  :key="tag.slug"
                  :to="'/tema/' + tag.slug"
                  >{{ tag.name }},
                </nuxt-link>
              </div>
              <div class="half flex-responsive">
                <div class="flex float-right social-circle-buttons">
                  <a href="#" class="animate center" @click.prevent="fbShare">
                    <font-awesome-icon
                      :icon="['fab', 'facebook-f']"
                    ></font-awesome-icon
                  ></a>
                  <a
                    :href="
                      'https://twitter.com/intent/tweet?counturl=' +
                      encodeURI(post.social.path) +
                      '&text=' +
                      encodeURI(post.portal_title) +
                      '&url=' +
                      encodeURI(post.social.path) +
                      '&via=TelegramHR'
                    "
                    target="_blank"
                    class="animate center"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'twitter']"
                    ></font-awesome-icon
                  ></a>
                  <div
                    v-if="!post.comments_off"
                    class="classic-btn clickable animate"
                    @click="comments = !comments"
                  >
                    Komentari
                  </div>
                </div>
              </div>
              <div
                v-if="!post.comments_off"
                v-show="comments"
                class="full fb-parent"
              >
                <div
                  v-show="comments"
                  class="fb-comments"
                  :data-href="post.social.path"
                  data-width="100%"
                  data-numposts="5"
                  data-lazy="true"
                  data-colorscheme="dark"
                ></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <tfooter v-if="post.id || $fetchState.error"></tfooter>
  </div>
</template>

<script>
import { Portal } from '@linusborg/vue-simple-portal'
export default {
  name: 'Slug',
  scrollToTop: true,
  components: { Portal },
  async fetch() {
    this.post = await this.$axios.$get('/api/preview/1239184')
  },
  data() {
    return {
      data: {
        questions1: [
          {
            id: 1,
            type: 'QuizSingleAnswer',
            question:
              'Što misliš o timskom radu u dinamičnom okruženju u kojem se uspjeh tima stavlja na prvo mjesto?',
            disable_answer: true,
            answers: [
              {
                id: 1,
                text: '👍',
                correct: true,
              },
              {
                id: 2,
                text: '👎',
                correct: true,
              },
            ],
          },
          {
            id: 2,
            type: 'QuizSingleAnswer',
            question:
              'Vidiš li se kao vođa koji pomaže timu u komunikaciji, otkrivanju i uklanjaju prepreka te definiranju ciljeva?',
            disable_answer: true,
            answers: [
              {
                id: 1,
                text: '👍',
                correct: true,
              },
              {
                id: 2,
                text: '👎',
                correct: true,
              },
            ],
          },
          {
            id: 3,
            type: 'QuizSingleAnswer',
            question:
              'Smatraš li se organiziranim/om i odgovornim/om te spremnim/om za obavljanje zadataka agilnim načinom rada?',
            disable_answer: true,
            answers: [
              {
                id: 1,
                text: '👍',
                correct: true,
              },
              {
                id: 2,
                text: '👎',
                correct: true,
              },
            ],
          },
        ],
        questions2: [
          {
            id: 4,
            type: 'QuizSingleAnswer',
            question:
              'Želiš li raditi na dizajnu i implementaciji novih uslužnih platformi?',
            disable_answer: true,
            answers: [
              {
                id: 1,
                text: '👍',
                correct: true,
              },
              {
                id: 2,
                text: '👎',
                correct: true,
              },
            ],
          },
          {
            id: 5,
            type: 'QuizSingleAnswer',
            question:
              'Koliko si zainteresiran/a za testiranje novih usluga te istraživanje uspješnosti novih projekata?',
            disable_answer: true,
            answers: [
              {
                id: 1,
                text: '👍',
                correct: true,
              },
              {
                id: 2,
                text: '👎',
                correct: true,
              },
            ],
          },
          {
            id: 6,
            type: 'QuizSingleAnswer',
            question:
              'Podržavaš li strateško planiranje i analitički pristup obavljanju posla?',
            disable_answer: true,
            answers: [
              {
                id: 1,
                text: '👍',
                correct: true,
              },
              {
                id: 2,
                text: '👎',
                correct: true,
              },
            ],
          },
          {
            id: 7,
            type: 'QuizSingleAnswer',
            question:
              'Imaš li sposobnost mirnog i produktivnog rješavanja izazova?',
            disable_answer: true,
            answers: [
              {
                id: 1,
                text: '👍',
                correct: true,
              },
              {
                id: 2,
                text: '👎',
                correct: true,
              },
            ],
          },
        ],
        questions3: [
          {
            id: 8,
            type: 'QuizSingleAnswer',
            question:
              'Voliš li pratiti nove tehnologije i trendove ICT tržišta u segmentu mrežnih rješenja?',
            disable_answer: true,
            answers: [
              {
                id: 1,
                text: '👍',
                correct: true,
              },
              {
                id: 2,
                text: '👎',
                correct: true,
              },
            ],
          },
          {
            id: 9,
            type: 'QuizSingleAnswer',
            question:
              'Bi li volio/voljela raditi na dizajnu, implementaciji i održavanju u području mrežne sigurnosti?',
            disable_answer: true,
            answers: [
              {
                id: 1,
                text: '👍',
                correct: true,
              },
              {
                id: 2,
                text: '👎',
                correct: true,
              },
            ],
          },
          {
            id: 10,
            type: 'QuizSingleAnswer',
            question:
              'Zanima li te automatizacija i upravljanje mrežnim sustavima?',
            disable_answer: true,
            answers: [
              {
                id: 1,
                text: '👍',
                correct: true,
              },
              {
                id: 2,
                text: '👎',
                correct: true,
              },
            ],
          },
        ],
        count1: 0,
        count2: 0,
        count3: 0,
        results1: [
          {
            title: 'Scrum Master',
            description:
              'Izgleda da je posao Scrum mastera idealan za vas. Scrum master pomaže timu u komunikaciji i suradnji, otkrivanju i uklanjanju prepreka, definiranju ciljeva i održavanju fokusa na zadatke. Pomaže timu da implementira odabrane agilne okvire i poboljša proces izvedbe. Također sudjeluje u praćenju mjernih podataka te djeluje kao podrška stvaranju samoorganizirajućeg i samoupravljajućeg tima. Pomaže programerima u inženjerskim praksama, ali i potiče kulturu učenja i usavršavanja u timu. Ako ste se pronašli u ovom opisu pogledajte ovu ponudu, možda je baš to vaš <a href="https://hrvatski-telekom2.talentlyft.com/jobs/scrum-master-mf-ozJ" target="_blank">posao iz snova</a>',
          },
          {
            title: 'Scrum Master',
            description:
              'Izgleda da posao Scrum mastera nije vaše područje no to ne znači da se ne biste snašli, a možda i pronašli u telekomunikacijskoj tvrtki. Riješite ostala pitanja u idućem kvizu i provjerite što je ono što bi odgovaralo vašim interesima i znanjima jer su u ponudi i <a href="https://hrvatski-telekom2.talentlyft.com/?_ga=2.21733436.608968913.1647935187-774874677.1647935187#home" target="_blank">poslovi</a> na drugim pozicijama. Stoga, ako vas zanima karijera u ICT sektoru, u okruženju u kojem se vrednuju nove ideje, a novo znanje se stječe svaki dan, proučite trenutno <a href="https://hrvatski-telekom2.talentlyft.com/?_ga=2.21733436.608968913.1647935187-774874677.1647935187#home" target="_blank">otvorene natječaje</a> Hrvatskog Telekoma',
          },
        ],
        results2: [
          {
            title: 'Technological Solutions Designer',
            description:
              'Izgleda da je posao Technological Solutions Designera idealan za vas. Technological Solutions Designer sudjeluje u projektiranju i implementaciji usluga na platformama usluga mobilne mreže prema poslovno-tehničkim zahtjevima. Pruža podršku u testiranju i osiguravanju dostupnosti uslužnih platformi i usluga u odjelu. Sudjeluje u tehničkim studijama izvodljivosti i projektima vezanim uz uvođenje novih usluga za korisnike, kao i u praćenju i održavanju servisnih platformi. Djeluje u procesima nabave aplikacija i servisnih platformi u domeni odjela, a odgovoran je za kompletan životni ciklus platformi ili sustava - planiranje, izgradnja, briga o kapacitetima, novim funkcionalnostima, njihova implementacija i svakodnevno praćenje rada sustava. Zvuči li vam ovo kao posao u kojem ćete izraziti sve svoje potencijale, pogledajte <a href="https://hrvatski-telekom2.talentlyft.com/jobs/technological-solutions-designer-volte-ims-engineer-mf-qYP" target="_blank">ovu ponudu</a>.',
          },
          {
            title: 'Technological Solutions Designer',
            description:
              'Izgleda da posao Technological Solutions Designer nije vaše područje no to ne znači da se ne biste snašli, a možda i pronašli u telekomunikacijskoj tvrtki. Riješite ostala pitanja u idućem kvizu i provjerite što je ono što bi odgovaralo vašim interesima i znanjima jer su u ponudi i <a href="https://hrvatski-telekom2.talentlyft.com/?_ga=2.21733436.608968913.1647935187-774874677.1647935187#home" target="_blank">poslovi</a> na drugim pozicijama. Stoga, ako vas zanima karijera u ICT sektoru, u okruženju u kojem se vrednuju nove ideje, a novo znanje se stječe svaki dan, proučite trenutno <a href="https://hrvatski-telekom2.talentlyft.com/?_ga=2.21733436.608968913.1647935187-774874677.1647935187#home" target="_blank">otvorene natječaje</a> Hrvatskog Telekoma',
          },
        ],
        results3: [
          {
            title: 'Stručnjak za isporuku IP i ICT rješenja',
            description:
              'Izgleda da je posao Stručnjaka za isporuku IP i ICT rješenja idealan za vas! Stručnjak za isporuku IP i ICT rješenja samostalno upravlja i koordinira projektima implementacije mrežnih rješenja i mrežne sigurnosti te radi na kreiranju arhitekture za informatička mrežna rješenja. Također je zadužen za dizajn, nadogradnju i održavanje u području mrežne sigurnosti i to vezano uz WiFi, LAN, WLAN mrežna rješenja, WiFi rješenja bazirana na cloud tehnologijama te radi na automatizaciji i upravljanju mrežnim sustavima. Ujedno kontinuirano prati korisničke potrebe i zahtjeve, kao i tehnološke trendove. Ima razvijene analitičke sposobnosti, usmjeren je na rezultat, ali i proaktivan i sklon timskom radu. Želite li se okušati u ovom području ICT industrije, pogledajte <a href="https://hrvatski-telekom2.talentlyft.com/jobs/strucnjak-za-isporuku-ip-i-ict-rjesenja-mz-oPp" target="_blank">ovu ponudu</a>. ',
          },
          {
            title: 'Stručnjak za isporuku IP i ICT rješenja',
            description:
              'Izgleda da posao Stručnjaka za isporuku IP i ICT rješenja nije vaše područje no to ne znači da se ne biste snašli, a možda i pronašli u telekomunikacijskoj tvrtki. Riješite ostala pitanja u idućem kvizu i provjerite što je ono što bi odgovaralo vašim interesima i znanjima jer su u ponudi i <a href="https://hrvatski-telekom2.talentlyft.com/?_ga=2.21733436.608968913.1647935187-774874677.1647935187#home" target="_blank">poslovi</a> na drugim pozicijama. Stoga, ako vas zanima karijera u ICT sektoru, u okruženju u kojem se vrednuju nove ideje, a novo znanje se stječe svaki dan, proučite trenutno <a href="https://hrvatski-telekom2.talentlyft.com/?_ga=2.21733436.608968913.1647935187-774874677.1647935187#home" target="_blank">otvorene natječaje</a> Hrvatskog Telekoma',
          },
        ],
      },
      showQuiz: false,
      comments: false,
      showSideMenu: false,
      showSearchMenu: false,
      post: {
        comments_off: false,
        type: '',
        image: {
          url: '',
          alt: '',
          author: '',
        },
        authors: [
          {
            url: '',
            name: '',
            image: '',
            newsletter_image: '',
            newsletter_list: 0,
          },
        ],
        overtitle: '',
        title: '',
        subtitle: '',
        content: '',
        recommendations: 0,
        comments: 0,
        time: 0,
        timem: 0,
        tags: [],
        category: '',
        category_slug: '',
        social: {
          title: '',
          description: '',
          image: '',
          width: '',
          height: '',
        },
        disable_ads: [],
        promo: {
          signature_logo_off: false,
          partner: '',
        },
        quiz: null,
      },
      related_posts: [],
      midas: false,
    }
  },
  computed: {
    result1() {
      if (this.data.count1 > 1) {
        return this.data.results1[0]
      }
      return this.data.results1[1]
    },
    result2() {
      if (this.data.count2 > 1) {
        return this.data.results2[0]
      }
      return this.data.results2[1]
    },
    result3() {
      if (this.data.count3 > 1) {
        return this.data.results3[0]
      }
      return this.data.results3[1]
    },
    hasPremium() {
      return this.$store.getters['user/hasPremium']
    },
    canLogIn() {
      return this.$store.state.user.exp * 1000 < new Date().getTime()
    },
    jsonld() {
      const images = [this.post.image.url]
      if (this.post.image.url2) {
        images.push(this.post.image.url2)
      }
      if (this.post.image.url3) {
        images.push(this.post.image.url3)
      }
      if (this.post.image.full) {
        images.push(this.post.image.full)
      }
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: this.post.title,
          mainEntityOfPage: this.post.social.path,
          datePublished: new Date(this.post.time * 1000).toISOString(),
          dateModified: new Date(this.post.timem * 1000).toISOString(),
          image: images,
          publisher: {
            '@type': 'Organization',
            name: 'Telegram.hr',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.telegram.hr/tg_neue_favicon.png',
            },
          },
          author: this.post.authors,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: this.post.category,
              item: 'https://www.telegram.hr/' + this.$route.params.category,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: this.post.title,
              item: this.post.social.path,
            },
          ],
        },
      ]
    },
    typeClass() {
      switch (this.post.type) {
        case 'premium':
          return 'single-article-premium single-article-premium-alt'
        case 'commentary':
          return 'single-article-commentary'
        default:
          return ''
      }
    },
    categoryClass() {
      return this.post.category_slug + ' fancy-rubrika'
    },
    srcset() {
      let set = `${this.post.image.url}`
      if (this.post.image.url2) {
        set += `, ${this.post.image.url2} 2x`
      }
      if (this.post.image.url3) {
        set += `, ${this.post.image.url3} 3x`
      }
      return set
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.getPost()
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    getAnswer(question, val) {
      if (val === 1) {
        if (question < 4) {
          this.data.count1++
        }
        if (question > 3 && question < 8) {
          this.data.count2++
        }
        if (question > 7) {
          this.data.count3++
        }
      }
      // advance slide
      this.$refs.carousel.next()
    },
    handleScroll() {
      const walls = document.getElementsByClassName('wallpaper-banners')
      const bill =
        document
          .getElementById('telegram_desktop_billboard_v1')
          .getBoundingClientRect().top - 10
      if (bill < 0) {
        walls.forEach((item) => {
          item.classList.add('sticky-single-wallpaper')
        })
      } else {
        walls.forEach((item) => {
          item.classList.remove('sticky-single-wallpaper')
        })
      }
    },
    getPost() {
      if (this.post && this.post.id) {
        if (process.client) {
          this.$telegram.$loading.finish()
        }
        if (this.post.quiz) {
          this.showQuiz = true
        }
        if (typeof FB !== 'undefined') {
          FB.XFBML.parse()
        }
        if (document.getElementsByClassName('twitter-tweet')) {
          const head = document.getElementsByTagName('head')[0]
          const scriptTag = document.createElement('script')
          scriptTag.src = 'https://platform.twitter.com/widgets.js'
          head.append(scriptTag)
        }
        if (document.getElementById('article-content')) {
          const images = [
            ...document
              .getElementById('article-content')
              .getElementsByTagName('img'),
          ]
          images.forEach((image) => {
            if (image.width < image.height) {
              image.classList.remove('size-full')
            }
          })
        }
        this.dotmetrics()
      } else {
        setTimeout(this.getPost, 500)
      }
    },
    dotmetrics() {
      this.$dotmetrics.postLoad(this.post.category_slug)
    },
    fbShare() {
      /* global FB */
      FB.ui(
        { method: 'share', href: this.post.social.path },
        function (response) {}
      )
    },
    handleClick(event) {
      // ensure we use the link, in case the click has been received by a subelement
      let { target } = event
      while (target && target.tagName !== 'A') target = target.parentNode
      // handle only links that occur inside the component and do not reference external resources
      if (
        target &&
        target.matches("#article-content a([href*='://www.telegram.hr'])") &&
        target.href
      ) {
        // some sanity checks taken from vue-router:
        // https://github.com/vuejs/vue-router/blob/dev/src/components/link.js#L106
        const { altKey, ctrlKey, metaKey, shiftKey, button, defaultPrevented } =
          event
        // don't handle with control keys
        if (metaKey || altKey || ctrlKey || shiftKey) return
        // don't handle when preventDefault called
        if (defaultPrevented) return
        // don't handle right clicks
        if (button !== undefined && button !== 0) return
        // don't handle if `target="_blank"`
        if (target && target.getAttribute) {
          const linkTarget = target.getAttribute('target')
          if (/\b_blank\b/i.test(linkTarget)) return
        }
        // don't handle same page links/anchors
        const url = new URL(target.href)
        const to = url.pathname
        if (window.location.pathname !== to && event.preventDefault) {
          event.preventDefault()
          this.$router.push(to)
        }
      }
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: this.post.social.path,
      },
    ]
    const script = [
      {
        vmid: 'schema-ld',
        hid: 'schema-ld',
        type: 'application/ld+json',
        json: this.jsonld,
      },
      {
        hid: 'facebook',
        src: 'https://connect.facebook.net/hr_HR/sdk.js#xfbml=1&version=v11.0&appId=1383786971938581',
        async: true,
        defer: true,
        crossorigin: 'anonymous',
        nonce: 'LFZOW4mi',
      },
    ]
    const fbPaywall = {
      none: 'metered',
      always: 'locked',
      never: 'free',
    }
    return {
      title: this.post.title,
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'cXenseParse:articleid',
          name: 'cXenseParse:articleid',
          content: this.post.id,
        },
        {
          hid: 'cXenseParse:image',
          name: 'cXenseParse:image',
          content: this.post.image.url,
        },
        {
          hid: 'cXenseParse:title',
          name: 'cXenseParse:title',
          content: this.post.portal_title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.post.social.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.social.description,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.social.title,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            this.$route.params.category === 'preview'
              ? '/img/tg_preview_placeholder.jpg'
              : this.post.social.image,
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: this.post.social.width,
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: this.post.social.height,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.post.social.path,
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '1383786971938581',
        },
        {
          hid: 'article:opinion',
          property: 'article:opinion',
          content: this.post.category === 'Komentari',
        },
        {
          hid: 'article:content_tier',
          property: 'article:content_tier',
          content: fbPaywall[this.post.paywall],
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
          hid: 'twitter:widgets:theme',
          name: 'twitter:widgets:theme',
          content: this.$store.state.theme.theme === 'dark' ? 'dark' : 'light',
        },
        {
          hid: 'robots',
          name: 'robots',
          content:
            this.$route.params.category === 'preview' ||
            this.post.status !== 'publish'
              ? 'noindex, noarchive, nocache, nosnippet'
              : 'index, follow',
        },
        {
          hid: 'nrbi:sections',
          name: 'nrbi:sections',
          property: 'nrbi:sections',
          content: this.$options.filters.parseCat(this.post.category),
        },
      ],
      script,
      link,
    }
  },
}
</script>
