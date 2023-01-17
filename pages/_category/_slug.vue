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
      <div v-show="related_posts" class="full related-header-widget">
        <div class="container flex desktop-only column-vertical-pad">
          <div
            v-for="rpost in related_posts"
            :key="rpost.id"
            class="third flex"
          >
            <div class="full flex column-horizontal-pad">
              <standard :post="rpost"></standard>
            </div>
          </div>
        </div>
      </div>
      <client-only>
        <div
          v-if="!$mobile && $route.name === 'category-slug'"
          class="full center header-billboard"
        >
          <div v-if="!$mobile" class="container wallpaper-banners animate">
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
            <img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
            />
          </nuxt-link>
          <nuxt-link to="/super1" class="logo superone-mobilepanav-logo">
            <img
              src="@/assets/img/s1_logo_clean_noline_white.svg"
              alt="Super1 logo"
            />
          </nuxt-link>
          <a
            v-show="canLogIn"
            class="mob-nav-otherbtn mobile-only"
            @click.prevent="$store.dispatch('user/login')"
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
          <a
            href="#"
            aria-label="Prikaži tražilicu"
            :aria-expanded="$store.state.header.showSearchMenu.toString()"
            aria-controls="search"
            class="mobile-only mob-nav-otherbtn mob-nav-search"
            @click.prevent="$store.commit('header/updateMenu', 'search')"
          >
            <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon
          ></a>
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
            <h3 class="overtitle">
              {{ parsedOvertitle }}
            </h3>
            <div v-if="post.promo.partner" class="collab-overtitle">
              <h3 class="overtitle">{{ post.promo.prefix }}</h3>
              <img :src="post.promo.logo" :alt="post.promo.partner" />
            </div>
          </div>
          <h1 class="full">{{ post.portal_title | parseCat }}</h1>
          <h2 class="full">{{ post.subtitle | parseCat }}</h2>
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
                <h3 class="overtitle">
                  {{ parsedOvertitle }}
                </h3>
                <div v-if="post.promo.partner" class="collab-overtitle">
                  <h3 class="overtitle">{{ post.promo.prefix }}</h3>
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
              <h1 class="full">
                <b
                  v-show="categoryClass && categoryClass.includes('superone')"
                  >{{ parsedOvertitle }}</b
                >
                {{ post.portal_title | parseCat }}
              </h1>
              <h2 class="full">
                {{ post.subtitle | parseCat }}
              </h2>
              <h5 class="full flex relative article-meta mobile-only">
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
                    fetchpriority="high"
                    width="888"
                    height="560"
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
                    :href="`https://twitter.com/intent/tweet?counturl=${encodeURI(
                      post.social.path
                    )}&text=${encodeURI(post.portal_title)}&url=${encodeURI(
                      post.social.path
                    )}&via=TelegramHR`"
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
                  (post.category_slug &&
                    post.category_slug.includes('openspace'))
                "
              ></ad-unit>
            </div>
            <div class="full relative single-article-body">
              <client-only>
                <mini-pretplata-new
                  v-if="
                    canLogIn &&
                    !(
                      post.category_slug.includes('promo') ||
                      post.category_slug.includes('superone')
                    )
                  "
                ></mini-pretplata-new>
              </client-only>
              <!-- eslint-disable vue/no-v-html -->
              <div
                id="article-content"
                class="cXenseParse mrf-article-body"
                @click="handleClick"
                v-html="post.content"
              ></div>
              <client-only>
                <portal v-if="showQuiz" selector="#quiz-container">
                  <quiz v-if="post.quiz" :data="post.quiz"></quiz>
                </portal>
                <portal
                  v-for="gallery in post.galleries"
                  :key="gallery.id"
                  :selector="`#gallery-${gallery.id}`"
                >
                  <gallery :gallery="gallery"></gallery>
                </portal>
              </client-only>
              <client-only>
                <intext></intext>
                <linker type="mobile"></linker>
              </client-only>
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
                      :href="`https://twitter.com/intent/tweet?counturl=${encodeURI(
                        post.social.path
                      )}&text=${encodeURI(post.portal_title)}&url=${encodeURI(
                        post.social.path
                      )}&via=TelegramHR`"
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
            <client-only>
              <div
                v-if="!hasPremium && !exclude"
                class="full relative"
                style="order: 3"
              >
                <offers></offers>
              </div>
            </client-only>
            <!--<div class="full relative single-article-body" style="order: 4">
              <div
                class="full relative single-article-footer flex column-top-pad"
              >
                <mini-pretplata
                  v-show="!$store.state.user.access"
                ></mini-pretplata>
              </div>
            </div>-->
          </article>
        </div>
        <client-only>
          <div v-if="!hasPremium" class="full">
            <linker type="category"></linker>
          </div>
          <div
            v-if="
              !hasPremium &&
              hasLinker &&
              !post.category_slug.includes('superone')
            "
            class="container center"
          >
            <div
              data-contentexchange-widget="k7dWfvWSYDqoSZvwu"
              data-contentexchange-source="ughr"
            ></div>
          </div>
          <div v-if="!hasPremium" class="full mobile-only">
            <linker type="footer"></linker>
          </div>
          <div v-if="!hasPremium" class="container flex center">
            <linker type="shop"></linker>
          </div>
          <keep-reading
            v-if="post.category_slug && post.category_slug !== 'promo'"
            :category="post.category_slug"
            :p="Number(post.id)"
            :permalink="post.permalink"
          ></keep-reading>
        </client-only>
        <ticker></ticker>
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
            Portal za društvena i kulturna pitanja
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
        post = await this.$axios.$get(
          encodeURI('/api/single/' + slug) + '?pwa=1'
        )
      }
    }
    if (post && post.id) {
      this.post = post
      await this.$axios.get('/api/related/' + post.id).then((res) => {
        if (Array.isArray(res.data)) {
          this.$store.dispatch('posts/setPosts', res.data, { root: true })
          this.related_posts = res.data
            .filter((item) => {
              return item.id !== post.id
            })
            .splice(0, 3)
        }
      })
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
        overtitle_tag: '',
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
      hasLinker: false,
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
      return this.$store.state.user.exp * 1000 < new Date().getTime()
    },
    jsonld() {
      const images = [
        {
          '@type': 'ImageObject',
          contentUrl: this.post.image.url,
          url: this.post.image.url,
          creditText: this.post.image.author,
          caption: this.post.image.alt,
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.post.image.author,
          publisher: {
            '@type': 'Organization',
            name: 'Telegram.hr',
            logo: {
              '@type': 'ImageObject',
              url: `https://www.telegram.hr${this.$icon(512)}`,
              width: 512,
              height: 512,
            },
          },
        },
      ]
      if (this.post.image.url2) {
        images.push({
          '@type': 'ImageObject',
          contentUrl: this.post.image.url2,
          url: this.post.image.url2,
          creditText: this.post.image.author,
          caption: this.post.image.alt,
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.post.image.author,
        })
      }
      if (this.post.image.url3) {
        images.push({
          '@type': 'ImageObject',
          contentUrl: this.post.image.url3,
          url: this.post.image.url3,
          creditText: this.post.image.author,
          caption: this.post.image.alt,
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.post.image.author,
        })
      }
      if (this.post.image.full) {
        images.push({
          '@type': 'ImageObject',
          contentUrl: this.post.image.full,
          url: this.post.image.full,
          creditText: this.post.image.author,
          caption: this.post.image.alt,
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.post.image.author,
        })
      }
      if (this.post.image.facebook) {
        images.push({
          '@type': 'ImageObject',
          contentUrl: this.post.image.facebook,
          url: this.post.image.facebook,
          creditText: this.post.image.author,
          caption: this.post.image.alt,
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.post.image.author,
        })
      }
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: this.$options.filters.parseCat(this.post.title),
          mainEntityOfPage: this.post.social.path,
          datePublished: new Date(this.post.time * 1000).toISOString(),
          dateModified: new Date(this.post.timem * 1000).toISOString(),
          image: images,
          publisher: {
            '@type': 'Organization',
            name: 'Telegram.hr',
            url: 'https://www.telegram.hr',
            logo: {
              '@type': 'ImageObject',
              url: `https://www.telegram.hr${this.$icon(512)}`,
              width: 512,
              height: 512,
            },
          },
          author: this.post.authors,
          keywords: this.post.tags.map((tag) => tag.slug),
          sections: this.$options.filters.parseCat(this.post.category),
          articleSection: this.$options.filters.parseCat(this.post.category),
          isAccessibleForFree: this.post.paywall === 'never',
          hasPart:
            this.post.paywall === 'never'
              ? ''
              : {
                  '@type': 'WebPageElement',
                  isAccessibleForFree: false,
                  cssSelector: '.piano-content',
                },
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
      if (
        this.post.category_slug &&
        this.post.category_slug.includes('openspace')
      ) {
        return
      }
      this.$store.dispatch('ads/initAds', {
        route: this.$route,
        options: this.post.disable_ads,
        tags: this.post.tags,
      })
      if (
        !this.post.disable_ads.includes('all') &&
        !this.post.disable_ads.includes('nepromo')
      ) {
        this.loadMox()
      }
      if (
        !this.post.disable_ads.includes('all') &&
        !this.post.disable_ads.includes('midas') &&
        !this.post.disable_ads.includes('nepromo')
      ) {
        this.$linker.reloadLinker()
        this.hasLinker = true
      }
    },
    loadMox() {
      if (this.$store.state.user.access) {
        return
      }
      const container = document.querySelectorAll(
        '[data-id=_mwayss-325b7d752b361c5458420729057fe2ff]'
      )[0]
      if (container) {
        container.setAttribute(
          'id',
          container.getAttribute('data-id') + new Date().getTime()
        )
        container.removeAttribute('data-id')
        const scriptTag = document.createElement('script')
        scriptTag.src =
          'https://ad.mox.tv/mox/mwayss_invocation.min.js?pzoneid=5182&height=405&width=720&tld=telegram.hr&ctype=div'
        container.parentNode.insertBefore(scriptTag, container)
      }
    },
    loadPiano() {
      const tp = window.tp || []
      if (this.post.tags.length) {
        tp.push([
          'setTags',
          this.post.tags.map((tag) => {
            return tag.slug
          }),
        ])
      }
      tp.push([
        'setContentCreated',
        new Date(this.post.time * 1000).toISOString(),
      ])
      tp.push(['setContentSection', this.post.category])
      if (this.post.authors.length) {
        if (this.post.authors.length > 1) {
          if (this.post.authors[1].name === 'Hina') {
            tp.push(['setContentAuthor', this.post.authors[1].name])
          } else {
            tp.push(['setContentAuthor', this.post.authors[0].name])
          }
        } else {
          tp.push(['setContentAuthor', this.post.authors[0].name])
        }
      }
      tp.push(['setContentIsNative', this.post.post_type === 'partneri'])
      if (this.post.category_slug.includes('superone')) {
        tp.push(['setCustomVariable', 'isPaywall', 'never'])
      } else {
        tp.push(['setCustomVariable', 'isPaywall', this.post.paywall])
      }
      tp.push([
        'init',
        function () {
          window.tp.experience.execute()
          window.tp.enableGACrossDomainLinking()
        },
      ])
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
      this.$dotmetrics.postLoad(this.post.category_slug)
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
        this.loadAds()
        if (typeof FB !== 'undefined') {
          FB.XFBML.parse()
        }
        /* global instgrm */
        if (typeof instgrm !== 'undefined') {
          instgrm.Embeds.process()
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
    let link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: this.post.social.path,
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
    if (!this.$store.getters['user/hasPremium']) {
      script = [
        ...script,
        {
          vmid: 'linker-slider',
          hid: 'linker-slider',
          type: 'text/javascript',
          src: 'https://linker.hr/widget/slider/splide.min.js',
          async: true,
        },
        {
          hid: 'contentexchange',
          src: 'https://ughr.contentexchange.me/static/tracker.js',
          async: true,
        },
      ]
      if (!this.post.category_slug.includes('superone')) {
        script = [
          ...script,
          {
            vmid: 'linker-infinite',
            hid: 'linker-infinite',
            type: 'text/javascript',
            src: 'https://linker.hr/lw-inf.js',
            async: true,
          },
        ]
      }
    }
    // charts and tables
    /* const wdtStyles = [
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
    }) */
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
