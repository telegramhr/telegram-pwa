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
    <template v-if="!($fetchState.error || post.title === 'Objava ne postoji')">
      <theader
        :id="Number(post.id)"
        :headline="post.portal_title"
        :post="post"
      ></theader>
      <client-only>
        <breaking></breaking>
        <hometop-ten></hometop-ten>
      </client-only>
      <!-- Above header banner manual -->
      <client-only>
        <div
          v-if="!$mobile && $route.name.includes('category-slug')"
          class="full center header-billboard have-background"
        >
          <div class="container wallpaper-banners animate">
            <div class="wallpaper-left">
              <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
            </div>
            <div class="wallpaper-right">
              <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
            </div>
          </div>
        </div>
      </client-only>
      <div
        v-if="post.type === 'premium'"
        class="full premium-article-head relative"
      >
        <div v-if="post.image.author" class="meta-foto">
          FOTO: {{ post.image.author | parseCat }}
        </div>
        <img
          v-if="post.image.full"
          class="article-head-image"
          :src="post.image.full"
          :alt="post.image.alt"
          :width="post.image.width"
          :height="post.image.height"
        />
        <div class="full flex article-head">
          <div class="full flex overtitle-parent">
            <div
              class="noththree overtitle"
              :class="{
                'dynamic-overtitle': post.live,
                'overtitle-live': post.live,
              }"
            >
              <span v-if="post.live" class="dynamic-overtitle-element">{{
                'Uživo'
              }}</span>
              <AppLink
                :to="
                  post.overtitle_link
                    ? post.overtitle_link
                    : '/' + post.category_link
                "
              >
                {{ parsedOvertitle }}
              </AppLink>
              <client-only>
                <span
                  v-if="
                    this.$store.state.user.access && post.paywall === 'always'
                  "
                  class="fancy-overtitle-premium"
                >
                  <img
                    src="@/assets/img/t_logo.svg"
                    alt="Telegram monogram logo (T)"
                  />
                  Samo za pretplatnike
                </span>
              </client-only>
            </div>
            <div v-if="post.promo.partner" class="collab-overtitle">
              <div class="noththree overtitle">{{ post.promo.prefix }}</div>
              <img :src="post.promo.logo" :alt="post.promo.partner" />
            </div>
          </div>
          <h1 class="full">
            {{
              post.single_title !== ''
                ? post.single_title
                : post.portal_title | parseCat
            }}
          </h1>
          <h2 class="full">{{ post.subtitle | parseCat }}</h2>
        </div>
      </div>
      <div class="full relative">
        <div class="full flex">
          <client-only>
            <ad-unit id="telegram_background"></ad-unit>
          </client-only>
          <article
            id="article-body"
            class="container column-full-pad flex relative mobile-side-pad have-background"
          >
            <div class="full column article-head column-top-pad flex">
              <div class="full flex overtitle-parent relative">
                <div
                  class="noththree overtitle"
                  :class="{
                    'dynamic-overtitle': post.live,
                    'overtitle-live': post.live,
                  }"
                >
                  <span v-if="post.live" class="dynamic-overtitle-element">{{
                    'Uživo'
                  }}</span>
                  <AppLink
                    :to="
                      post.overtitle_link
                        ? post.overtitle_link
                        : '/' + post.category_link
                    "
                  >
                    {{ parsedOvertitle }}
                  </AppLink>
                </div>
                <client-only
                  ><span
                    v-if="
                      this.$store.state.user.access && post.paywall === 'always'
                    "
                    class="fancy-overtitle-premium"
                  >
                    <img
                      src="@/assets/img/t_logo.svg"
                      alt="Telegram monogram logo (T)"
                    />
                    Samo za pretplatnike
                  </span>
                </client-only>
                <div v-if="post.promo.partner" class="collab-overtitle">
                  <div class="noththree overtitle">{{ post.promo.prefix }}</div>
                  <a
                    v-if="post.promo.link"
                    :href="post.promo.link"
                    target="_blank"
                    rel="sponsored"
                  >
                    <img :src="post.promo.logo" :alt="post.promo.partner" />
                  </a>
                  <img
                    v-else
                    :src="post.promo.logo"
                    :alt="post.promo.partner"
                  />
                </div>
              </div>
              <div class="full nothone">
                <b v-if="categoryClass && categoryClass.includes('superone')">{{
                  parsedOvertitle
                }}</b>
                <h1 class="full">
                  {{
                    post.single_title !== ''
                      ? post.single_title
                      : post.portal_title | parseCat
                  }}
                </h1>
              </div>
              <h2 class="full">
                {{ post.subtitle | parseCat }}
              </h2>
              <div class="nothfive full flex relative article-meta mobile-only">
                <app-link
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
                  ><span class="vcard author">{{ author.name }}</span></app-link
                >
                <client-only>
                  <subscribe-link
                    v-if="post.type === 'commentary'"
                    :author="post.authors[0]"
                  ></subscribe-link>
                </client-only>
              </div>
              <div
                v-if="post.image.url || post.video"
                class="full flex article-head-image-parent relative"
              >
                <template v-if="post.video">
                  <!-- eslint-disable-next-line -->
                  <div style="width: 100%" v-html="post.video" />
                </template>
                <template v-else>
                  <picture class="article-head-image">
                    <source
                      :src="post.image.url"
                      :srcset="srcset"
                      type="image/webp"
                      width="888"
                      :height="
                        post.category_slug.includes('super1') ? 888 : 560
                      "
                    />
                    <img
                      :src="
                        post.category_slug.includes('super1')
                          ? post.image.s1jpg
                          : post.image.jpg
                      "
                      :alt="post.image.alt"
                      width="888"
                      :height="
                        post.category_slug.includes('super1') ? 888 : 560
                      "
                      fetchpriority="high"
                    />
                  </picture>
                  <div v-if="post.image.author" class="meta-foto">
                    FOTO: {{ post.image.author | parseCat }}
                  </div>
                </template>
              </div>
              <!-- eslint-disable-next-line -->
              <p v-if="post.perex" class="perex" v-html="post.perex"></p>
              <div class="nothfive full flex relative article-meta">
                <app-link
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
                  ><span class="vcard author">{{ author.name }}</span></app-link
                >
                <span class="meta-date">{{ post.time | parseTime }}</span>
                <span v-if="post.recommendations" class="meta-preporuke"
                  >{{ post.recommendations }} preporuka</span
                >
                <div class="sidebar-social flex">
                  <client-only>
                    <gift-article
                      v-if="
                        post.paywall === 'always' &&
                        this.$store.state.user.token
                      "
                      :key="`gift-${post.id}`"
                    ></gift-article>
                  </client-only>
                  <a href="#" @click.prevent="fbShare"
                    ><font-awesome-icon
                      :icon="['fab', 'facebook-f']"
                      class="animate"
                    ></font-awesome-icon>
                  </a>
                  <a
                    :href="`https://twitter.com/intent/tweet?counturl=${encodeURI(
                      post.social.path
                    )}&text=${encodeURI(post.portal_title)}&url=${encodeURI(
                      post.social.path
                    )}&via=TelegramHR`"
                    target="_blank"
                    rel="nofollow"
                    ><font-awesome-icon
                      :icon="['fab', 'x-twitter']"
                      class="animate"
                    ></font-awesome-icon
                  ></a>
                </div>
              </div>
            </div>
            <div class="full relative center single-top-banner">
              <ad-unit
                id="telegram_desktop_billboard_v1"
                :disable="
                  post.disable_ads.includes('all') ||
                  (post.category_slug &&
                    post.category_slug.includes('openspace'))
                "
              ></ad-unit>
            </div>
            <div class="full relative single-article-body">
              <client-only>
                <mini-pretplata-new
                  v-if="canLogIn && post.paywall === 'always'"
                ></mini-pretplata-new>
              </client-only>
              <!-- eslint-disable vue/no-v-html -->
              <div
                id="article-content"
                class="cXenseParse mrf-article-body"
                @click="handleClick"
                v-html="post.content"
              ></div>
              <div class="remp-banner"></div>
              <client-only>
                <portal
                  v-if="
                    !hasPremium &&
                    !(
                      post.disable_ads &&
                      (post.disable_ads.includes('spar') ||
                        post.disable_ads.includes('all'))
                    )
                  "
                  selector="#intext_premium"
                >
                  <div class="full">
                    <offers-premium></offers-premium>
                  </div>
                </portal>
                <portal v-if="showQuiz" selector="#quiz-container">
                  <quiz
                    v-if="post.quiz"
                    :data="post.quiz"
                    :post="parseInt(post.id)"
                  ></quiz>
                </portal>
                <portal
                  v-for="gallery in post.galleries"
                  :key="gallery.id"
                  :selector="`#gallery-${gallery.id}`"
                >
                  <gallery :gallery="gallery"></gallery>
                </portal>

                <portal
                  v-for="box in post.compare_boxes"
                  :key="box.id"
                  :selector="`#compare-box-${box.id}`"
                >
                  <img-comparison-slider>
                    <!-- eslint-disable vue/no-deprecated-slot-attribute -->
                    <img slot="first" style="width: 100%" :src="box.img1.url" />
                    <img
                      slot="second"
                      style="width: 100%"
                      :src="box.img2.url"
                    />
                    <!-- eslint-enable -->
                  </img-comparison-slider>
                </portal>

                <intext-refresh></intext-refresh>
                <intext-regular-promo></intext-regular-promo>
                <popup-regular-promo></popup-regular-promo>
                <intext-promo-free-month></intext-promo-free-month>
                <midas
                  v-if="!hasPremium && hasLinker"
                  :key="`midas-text-${post.id}`"
                  type="text-only"
                ></midas>
              </client-only>
              <!-- Article footer -->
              <div
                class="full relative single-article-footer flex column-top-pad"
              >
                <div
                  id="marfeel_sidebar"
                  class="marfeel-sidebar"
                  data-nosnippet
                ></div>
                <div class="half flex-responsive article-tags">
                  <app-link
                    v-for="tag in post.tags"
                    :key="tag.slug"
                    :to="'/tema/' + tag.slug"
                    >{{ tag.name }},
                  </app-link>
                </div>
                <div class="half flex-responsive">
                  <div class="flex float-right social-circle-buttons">
                    <a href="#" class="animate center" @click.prevent="fbShare">
                      <font-awesome-icon
                        :icon="['fab', 'facebook-f']"
                      ></font-awesome-icon
                    ></a>
                    <a
                      :href="`https://twitter.com/intent/tweet?counturl=${encodeURI(
                        post.social.path
                      )}&text=${encodeURI(post.portal_title)}&url=${encodeURI(
                        post.social.path
                      )}&via=TelegramHR`"
                      target="_blank"
                      class="animate center"
                      rel="nofollow"
                    >
                      <font-awesome-icon
                        :icon="['fab', 'x-twitter']"
                      ></font-awesome-icon
                    ></a>
                  </div>
                  <client-only>
                    <gift-article
                      v-if="post.paywall === 'always'"
                      :key="`gift-${post.id}`"
                      position="footer"
                    ></gift-article>
                  </client-only>
                </div>
                <client-only>
                  <comments
                    v-if="post.id && !post.category_slug.includes('superone')"
                    :post="post"
                  ></comments>
                </client-only>
              </div>
            </div>
          </article>
        </div>
        <client-only>
          <div
            v-if="
              !hasPremium &&
              !(post.disable_ads && post.disable_ads.includes('all'))
            "
            class="full has-background"
          >
            <h-t-premium></h-t-premium>
            <div>
              <div>
                <ad-unit id="telegram_underarticle_v2"></ad-unit>
              </div>
            </div>
          </div>

          <div v-if="!hasPremium && hasLinker" class="full have-background">
            <midas :key="`midas-16-${post.id}`" type="standard-16"></midas>
          </div>
          <div
            v-if="!hasPremium && hasLinker"
            class="container flex center have-background"
          >
            <midas :key="`midas-ecoom-${post.id}`" type="ecomm"></midas>
            <ad-unit id="telegram_underarticle_v1"></ad-unit>
          </div>
          <keep-reading
            :category="$route.params.category"
            :p="Number(post.id)"
            :permalink="post.permalink"
            class="have-background"
          ></keep-reading>
        </client-only>
        <!--<ticker></ticker>-->
      </div>
    </template>
    <template v-if="$fetchState.error || post.title === 'Objava ne postoji'">
      <div class="full flex tg-red">
        <client-only>
          <theader
            :id="Number(post.id)"
            :headline="post.portal_title"
            :side-menu-show="showSideMenu"
            :search-menu-show="showSearchMenu"
          ></theader>
        </client-only>
        <div class="full header-filler filler-404"></div>
      </div>
      <div
        class="block-title news-block-title header-block-title full mobile-side-pad desktop-only"
      >
        <div class="full block-title-pattern relative"></div>
        <div class="container flex relative">
          <app-link to="/" class="logo column-left-pad" aria-label="Naslovnica"
            ><img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
          /></app-link>
          <h2 class="full column-horizontal-pad desktop-only site-subtitle">
            Nekad je nužno odabrati stranu
          </h2>
        </div>
      </div>
      <div class="full mobile-only filler-404 tg-red"></div>
      <img src="@/assets/img/tg_tear.png" aria-hidden="true" class="tear-404" />
      <div class="container relative mobile-side-pad column-full-pad">
        <div class="full center flex">
          <h1 class="full title-404 center-text">404</h1>
          <h2 class="full subtitle-404 center-text">
            Nažalost ova stranica nije pronađena.
          </h2>
          <p class="full text-404 center-text"></p>
        </div>
      </div>
      <!--<div class="full flex">
        <div
          class="container flex relative native-block stretch mobile-side-pad"
        >
          <div class="full column-horizontal-pad flex">
            <h2 class="full flex section-title">Možda će vas zanimati</h2>
          </div>
          <div class="fourth flex-responsive column-full-pad">
            <standard></standard>
          </div>
        </div>
        <div class="container flex relative mobile-side-pad">
        <div class="full center subtle-btn-parent relative clickable" onclick="requestArticles(this);">
          <div class="subtle-btn animate">Vidi više</div>
          <div class="subtle-btn-line"></div>
          <div class="full center cool-loader hide"><div class="loader-square"><div></div><div></div><div></div></div></div>
        </div>
      </div>
      </div>-->
    </template>
    <tfooter v-if="post.id || $fetchState.error" :post="post"></tfooter>
  </div>
</template>

<script>
import { Portal } from '@linusborg/vue-simple-portal'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'Slug',
  scrollToTop: true,
  components: { Portal },
  async fetch() {
    if (!this.$route.params.slug && !this.$route.params.category) {
      return
    }
    const slug = this.$route.params.slug || this.$route.params.category
    let post
    if (process.client) {
      this.$nextTick(() => {
        this.$telegram.$loading.start()
      })
      post = this.$store.state.posts.posts[slug]
    }
    if (!post) {
      if (this.$route.params.category === 'preview') {
        post = await this.$axios.$get(encodeURI('/api/preview/' + slug))
      } else {
        post = await this.$axios.$get(encodeURI('/api/single/' + slug))
      }
    }
    if (post && post.id) {
      if (
        process.server &&
        this.$route.params.category !== 'preview' &&
        post.social.path.replace('https://www.telegram.hr', '') !==
          this.$route.path
      ) {
        this.$telegram.context.res.statusCode = 301
        this.$telegram.context.res.setHeader(
          'Location',
          post.social.path.replace('https://www.telegram.hr', '')
        )
        return
      }
      this.post = post
    } else {
      this.post.title = 'Objava ne postoji'
      this.post.portal_title = 'Objava ne postoji'
      // set status code on server and
      if (process.server) {
        this.$telegram.context.res.statusCode = 404
      }
    }
  },
  data() {
    return {
      portal_title: '',
      single_title: '',
      showMidasIntext: false,
      showQuiz: false,
      comments: false,
      comments_embed: null,
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
        overtitle_tag: '',
        overtitle_link: '',
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
        category_link: '#',
        social: {
          title: '',
          description: '',
          image: '',
          width: '',
          height: '',
          path: '',
        },
        disable_ads: [],
        promo: {
          signature_logo_off: false,
          partner: '',
        },
        quiz: null,
        live: false,
      },
      related_posts: [],
      hasLinker: false,
      giftValid: false,
    }
  },
  computed: {
    parsedOvertitle() {
      return this.$options.filters.parseCat(
        this.post.overtitle ? this.post.overtitle : this.post.category
      )
    },
    exclude() {
      if (
        (this.post.disable_ads && this.post.disable_ads.includes('spar')) ||
        this.post.category_slug.includes('superone')
      ) {
        return true
      }
      const terms = 'lidl'
      const filtered = this.post.tags.filter((tag) => {
        return terms.includes(tag.slug)
      })
      return !!filtered.length
    },
    hasPremium() {
      return this.$store.getters['user/hasPremium']
    },
    canLogIn() {
      return this.$store.getters['user/canLogIn']
    },
    jsonld() {
      const images = [
        {
          '@type': 'ImageObject',
          contentUrl: this.post.image.url,
          url: this.post.image.url,
          height: 505,
          width: 800,
          creditText: this.$options.filters.parseCat(this.post.image.author),
          caption: this.$options.filters.parseCat(this.post.image.alt),
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.$options.filters.parseCat(
            this.post.image.author
          ),
          publisher: this.$store.state.header.publisher,
        },
      ]
      if (this.post.image.url2) {
        images.push({
          '@type': 'ImageObject',
          contentUrl: this.post.image.url2,
          url: this.post.image.url2,
          height: 1010,
          width: 1600,
          creditText: this.$options.filters.parseCat(this.post.image.author),
          caption: this.$options.filters.parseCat(this.post.image.alt),
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.$options.filters.parseCat(
            this.post.image.author
          ),
        })
      }
      if (this.post.image.url3) {
        images.push({
          '@type': 'ImageObject',
          contentUrl: this.post.image.url3,
          url: this.post.image.url3,
          height: 1515,
          width: 2400,
          creditText: this.$options.filters.parseCat(this.post.image.author),
          caption: this.$options.filters.parseCat(this.post.image.alt),
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.$options.filters.parseCat(
            this.post.image.author
          ),
        })
      }
      if (this.post.image.full) {
        images.push({
          '@type': 'ImageObject',
          contentUrl: this.post.image.full,
          url: this.post.image.full,
          height: this.post.image.height,
          width: this.post.image.width,
          creditText: this.$options.filters.parseCat(this.post.image.author),
          caption: this.$options.filters.parseCat(this.post.image.alt),
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.$options.filters.parseCat(
            this.post.image.author
          ),
        })
      }
      if (this.post.image.facebook) {
        images.push({
          '@type': 'ImageObject',
          contentUrl: this.post.image.facebook,
          url: this.post.image.facebook,
          height: Math.round(
            (1200 * this.post.image.height) / this.post.image.width
          ),
          width: 1200,
          creditText: this.$options.filters.parseCat(this.post.image.author),
          caption: this.$options.filters.parseCat(this.post.image.alt),
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.$options.filters.parseCat(
            this.post.image.author
          ),
        })
      }
      const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: this.post.category,
            item: 'https://www.telegram.hr/' + this.$route.params.category_link,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: this.post.title,
            item: this.post.social.path,
          },
        ],
      }
      const article = {
        '@context': 'https://schema.org',
        '@type':
          this.post.category === 'Komentari'
            ? 'OpinionNewsArticle'
            : 'NewsArticle',
        headline: this.$options.filters.parseCat(this.post.title),
        mainEntityOfPage: this.post.social.path,
        datePublished: new Date(this.post.time * 1000).toISOString(),
        dateModified: new Date(this.post.timem * 1000).toISOString(),
        image: images,
        publisher: this.$store.state.header.publisher,
        author: this.post.authors.map((author) => {
          return {
            '@type': 'Person',
            name: author.name,
            url: author.url,
            image: author.image,
            sameAs: author.sameAs,
            description: author.description,
          }
        }),
        keywords: this.post.tags.map((tag) => tag.slug),
        articleSection: [this.$options.filters.parseCat(this.post.category)],
      }
      if (this.post.paywall !== 'never') {
        article.isAccessibleForFree = 'False'
        article.hasPart = {
          '@type': 'WebPageElement',
          isAccessibleForFree: 'False',
          cssSelector: '.piano-content',
        }
      }
      return [article, breadcrumb]
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
      return this.post.category_slug
    },
    srcset() {
      let set
      if (this.categoryClass && this.categoryClass.includes('superone')) {
        set = `${this.post.image.s1url}`
        if (this.post.image.s1url2) {
          set += `, ${this.post.image.s1url2} 2x`
        }
        if (this.post.image.s1url3) {
          set += `, ${this.post.image.s1url3} 3x`
        }
      } else {
        set = `${this.post.image.url}`
        if (this.post.image.url2) {
          set += `, ${this.post.image.url2} 2x`
        }
        if (this.post.image.url3) {
          set += `, ${this.post.image.url3} 3x`
        }
      }
      return set
    },
    locked() {
      if (this.giftValid) {
        return 'never'
      }
      return this.post.paywall
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.getPost()
      window.addEventListener('scroll', this.handleScroll)
      if (this.$route.params.category === 'l') {
        window.history.replaceState({}, null, this.post.permalink)
      }
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    this.comments_embed = null
  },
  methods: {
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
    loadAds() {
      this.$store.dispatch('ads/initAds', {
        route: this.$route,
        options: this.post.disable_ads,
        tags: this.post.tags,
        category_slug: this.post.category_slug,
      })
      if (
        !this.post.disable_ads.includes('all') &&
        !this.post.disable_ads.includes('midas') &&
        !this.post.disable_ads.includes('nepromo')
      ) {
        this.hasLinker = true
      }
      if (this.hasPremium) {
        const midas = document.getElementById('intext_midas')
        if (midas) {
          midas.style.display = 'none'
        }
      }
    },
    loadRemp() {
      window.remplib = window.remplib || {}
      const rempConfig = {
        token: 'd4fa2928-7d6a-4f6c-ac95-1f5a1ddd1702',
        signedIn: !!this.$store.state.user.id,
        userId: this.$store.state.user.id.toString() ?? '',
        userSubscribed: !!this.$store.state.user.access.length,
        cookieDomain: '.telegram.hr',
        storage: 'local_storage',
        storageExpiration: {
          default: 15,
          keys: {
            browser_id: 1051200,
            campaigns: 1051200,
          },
        },
        article: {
          id: this.post.id.toString(),
          category: this.post.category,
          locked: this.locked === 'always',
          tags: this.post.tags.map((tag) => {
            return tag.slug
          }),
          elementFn: () => {
            return document.getElementById('article-content')
          },
          author_id: this.post.authors[0].display_name,
        },
        tracker: {
          url: 'https://tracker.telegram.hr',
          timeSpent: {
            enabled: true,
          },
          canonicalUrl: 'https://tracker.telegram.hr',
        },
        campaign: {
          url: 'https://campaign.telegram.hr',
          pageviewAttributes: {
            postType: 'post',
            locked: this.post.paywall,
          },
        },
      }
      window.remplib.tracker.init(rempConfig)
      window.remplib.campaign.init(rempConfig)
    },
    loadPiano() {
      if (this.post.paywall === 'always' && this.$route.query.gift_token) {
        // verify token
        this.$axios
          .post('/pretplate/api/gift-article/verify', {
            token: this.$route.query.gift_token,
            url: this.post.permalink,
          })
          .then((res) => {
            if (res.status === 200) {
              window.marfeel = window.marfeel || { cmd: [] }
              window.marfeel.cmd.push([
                'compass',
                function (compass) {
                  compass.setPageVar('gifted', 'true')
                },
              ])
              this.giftValid = true
            }
          })
      }
      const _that = this
      window.marfeel.cmd.push([
        'compass',
        function (compass) {
          if (_that.post.paywall === 'always') {
            compass.setPageVar('closed', 'hard-paywall')
          }
          if (_that.post.paywall === 'none') {
            compass.setPageVar('closed', 'dynamic-paywall')
          }
        },
      ])
    },
    triggerAnalytics() {
      if (this.post.category_slug.includes('telesport')) {
        setTimeout(() => {
          this.$dotmetrics.postLoad(this.post.category_slug)
        }, 10000)
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
        this.$store.commit('history/setData', this.post)
        this.triggerAnalytics()
        this.loadPiano()
        this.loadRemp()
        this.loadAds()
        this.$store.commit('pretplata/setLastArticle', this.$route.fullPath)
        if (typeof FB !== 'undefined') {
          FB.XFBML.parse()
        }
        /* global instgrm */
        if (typeof instgrm !== 'undefined') {
          instgrm.Embeds.process()
        }
        if (document.getElementsByClassName('twitter-tweet').length) {
          const head = document.getElementsByTagName('head')[0]
          const scriptTag = document.createElement('script')
          scriptTag.src = 'https://platform.twitter.com/widgets.js'
          head.append(scriptTag)
        }
        if (document.getElementsByClassName('tiktok-embed').length) {
          const head = document.getElementsByTagName('head')[0]
          const scriptTag = document.createElement('script')
          scriptTag.src = 'https://www.tiktok.com/embed.js'
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
        if (this.post.content.indexOf('data-aos')) {
          this.$nextTick(() => {
            AOS.init()
            setTimeout(() => {
              AOS.refresh()
            }, 1000)
          })
        }
      } else {
        setTimeout(this.getPost, 500)
      }
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
        target.matches('#article-content a') &&
        target.href &&
        target.href.match(/^https?:\/\/www.telegram.hr/) &&
        !target.href.match(/^https?:\/\/www.telegram.hr\/native/)
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
    let link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: this.post.social.path,
      },
      {
        hid: 'block-styles',
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://www.telegram.hr/wp-includes/css/dist/block-library/style.min.css',
      },
      {
        hid: 'shortlink',
        rel: 'shortlink',
        href: `https://www.telegram.hr/l/${this.post.id}`,
      },
    ]
    let script = [
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
      {
        hid: 'instagram',
        src: 'https://www.instagram.com/static/bundles/metro/EmbedSDK.js/33cd2c5d5d59.js',
        async: true,
        defer: true,
      },
    ]
    // charts and tables
    if (this.post.tables) {
      const wdtStyles = [
        'bootstrap/wpdatatables-bootstrap.min.css',
        'bootstrap/bootstrap-select/bootstrap-select.min.css',
        'bootstrap/bootstrap-tagsinput/bootstrap-tagsinput.css',
        'bootstrap/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css',
        'bootstrap/bootstrap-nouislider/bootstrap-nouislider.min.css',
        'bootstrap/bootstrap-datetimepicker/wdt-bootstrap-datetimepicker.min.css',
        'bootstrap/bootstrap-colorpicker/bootstrap-colorpicker.min.css',
        'style.min.css',
        'animate/animate.min.css',
        'uikit/uikit.css',
        'wdt.frontend.min.css',
        'wdt-skins/light.css',
        'wdt.simpleTable.min.css',
        'wpdatatables.min.css',
      ]
      wdtStyles.forEach((item) => {
        link.push({
          hid: item,
          rel: 'stylesheet',
          type: 'text/css',
          href:
            'https://www.telegram.hr/wp-content/plugins/wpdatatables/assets/css/' +
            item,
        })
      })
    }
    const fbPaywall = {
      none: 'metered',
      always: 'locked',
      never: 'free',
    }
    if (this.post.tables) {
      const wdtScripts = [
        // 'wpdatatables/admin/common.js',
        // 'wpdatatables/wdt.frontend.min.js',
        'wpdatatables/wdt.chartsRender.min.js',
        'wpdatatables/wdt.apexcharts.min.js',
        /* 'bootstrap/bootstrap.min.js',
      'bootstrap/bootstrap-select/bootstrap-select.min.js',
      'bootstrap/bootstrap-select/ajax-bootstrap-select.min.js',
      'bootstrap/bootstrap-tagsinput/bootstrap-tagsinput.js',
      'moment/moment.js',
      'bootstrap/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js',
      'bootstrap/bootstrap-nouislider/bootstrap-nouislider.min.js',
      'bootstrap/bootstrap-nouislider/wNumb.min.js',
      'bootstrap/bootstrap-colorpicker/bootstrap-colorpicker.min.js',
      'bootstrap/bootstrap-growl/bootstrap-growl.min.js', */
      ]
      script = [
        ...script,
        {
          hid: 'jquery',
          src: 'https://code.jquery.com/jquery-3.6.1.min.js',
        },
        {
          hid: 'wdt-apexcharts',
          src: 'https://cdn.jsdelivr.net/npm/apexcharts',
        },
        {
          hid: 'wdt_frontend_strings',
          innerHTML: 'var wpdatatables_frontend_strings = [];',
        },
      ]
      wdtScripts.forEach((item) => {
        script.push({
          hid: item,
          src:
            'https://www.telegram.hr/wp-content/plugins/wpdatatables/assets/js/' +
            item,
        })
      })
    }
    let meta = [
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
        content: this.$options.filters.parseCat(this.post.portal_title),
      },
      {
        hid: 'description',
        name: 'description',
        content: this.post.description,
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
        content: this.$options.filters.parseCat(this.post.social.title),
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
        content: 1200,
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: Math.round(
          (1200 * this.post.image.height) / this.post.image.width
        ),
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
      /* {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      }, */
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
          this.post.status !== 'publish' ||
          this.post.tags.filter((tag) => tag.slug === 'demantij').length
            ? 'noindex, noarchive, nocache, nosnippet'
            : 'index, follow, max-image-preview:large, max-snippet:-1',
      },
      {
        hid: 'nrbi:sections',
        name: 'nrbi:sections',
        property: 'nrbi:sections',
        content: this.$options.filters.parseCat(this.post.category),
      },
      {
        hid: 'mrf:tags',
        name: 'mrf:tags',
        property: 'mrf:tags',
        content: this.post.tags.map((tag) => `keyword:${tag.slug}`).join(';'),
      },
    ]
    let siteName = 'Telegram.hr'
    if (this.post.category_slug.includes('superone')) {
      link = [
        ...link,
        {
          hid: 'favicon',
          rel: 'icon',
          href: '/s1_fav/favicon.ico',
        },
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          href: '/s1_fav/apple-touch-icon.png',
        },
        {
          hid: 'manifest',
          rel: 'manifest',
          href: '/s1_fav/site.webmanifest',
        },
      ]
      meta = [
        ...meta,
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Super1.hr',
        },
      ]
      siteName = 'Super1.hr'
    }
    return {
      bodyAttrs: {
        class: [this.$store.state.theme.theme, this.post.category_slug],
      },
      title: this.$options.filters.parseCat(this.post.title),
      titleTemplate: `%s | ${siteName}`,
      meta,
      script,
      link,
    }
  },
  bodyAppend() {
    const wdtScripts = [
      // 'wpdatatables/admin/common.js',
      // 'wpdatatables/wdt.frontend.min.js',
      'wpdatatables/wdt.chartsRender.min.js',
      'wpdatatables/wdt.apexcharts.min.js',
      /* 'bootstrap/bootstrap.min.js',
      'bootstrap/bootstrap-select/bootstrap-select.min.js',
      'bootstrap/bootstrap-select/ajax-bootstrap-select.min.js',
      'bootstrap/bootstrap-tagsinput/bootstrap-tagsinput.js',
      'moment/moment.js',
      'bootstrap/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js',
      'bootstrap/bootstrap-nouislider/bootstrap-nouislider.min.js',
      'bootstrap/bootstrap-nouislider/wNumb.min.js',
      'bootstrap/bootstrap-colorpicker/bootstrap-colorpicker.min.js',
      'bootstrap/bootstrap-growl/bootstrap-growl.min.js', */
    ]
    const script = [
      {
        hid: 'jquery',
        src: 'https://code.jquery.com/jquery-3.6.1.min.js',
      },
      {
        hid: 'wdt-apexcharts',
        src: 'https://cdn.jsdelivr.net/npm/apexcharts',
      },
      {
        hid: 'wdt_frontend_strings',
        innerHTML: 'var wpdatatables_frontend_strings = [];',
      },
    ]
    wdtScripts.forEach((item) => {
      script.push({
        hid: item,
        src:
          'https://www.telegram.hr/wp-content/plugins/wpdatatables/assets/js/' +
          item,
      })
    })
    return {
      script,
    }
  },
}
</script>
