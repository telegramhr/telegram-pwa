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
          <ad-unit
            id="telegram_desktop_billboard_v1"
            :disable="
              post.disable_ads.includes('all') ||
              (post.category_slug && post.category_slug.includes('openspace'))
            "
          ></ad-unit>
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
          <a @click.prevent="showSideMenu = !showSideMenu">
            <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon
          ></a>
          <nuxt-link to="/" class="logo">
            <img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
            />
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
            <h3 class="overtitle">{{ post.category }}</h3>
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
                  <subscribe-link :author="post.authors[0]"></subscribe-link>
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
            <div class="full relative single-article-body">
              <client-only>
                <subscribe-link
                  v-show="!$mobile && post.type !== 'commentary'"
                  :author="post.authors[0]"
                ></subscribe-link>
              </client-only>
              <!-- eslint-disable vue/no-v-html -->
              <div
                id="article-content"
                class="cXenseParse"
                @click="handleClick"
                v-html="post.content"
              ></div>

              <portal v-if="showQuiz" selector="#quiz-container">
                <quiz v-if="post.quiz" :data="post.quiz"></quiz>
              </portal>

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
                    <!-- <a href="#" class="animate center"
                    ><i class="fab fa-instagram"></i
                  ></a>-->
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
                <mini-pretplata
                  v-show="!$store.state.user.access"
                ></mini-pretplata>
              </div>
            </div>
          </article>
        </div>
        <div class="full flex">
          <div
            class="container flex relative native-block stretch mobile-side-pad"
          >
            <linker type="category"></linker>
          </div>
        </div>
        <div class="full center">
          <native></native>
        </div>
        <div class="container center">
          <div
            data-contentexchange-widget="k7dWfvWSYDqoSZvwu"
            data-contentexchange-source="ughr"
          ></div>
        </div>
        <div class="full flex">
          <linker type="footer"></linker>
        </div>
        <div class="container flex center">
          <div id="linker-526" class="lwdgt" data-wid="526"></div>
        </div>
        <client-only>
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
    if (!this.$route.params.slug) {
      return
    }
    let post
    if (process.client) {
      this.$nextTick(() => {
        this.$telegram.$loading.start()
      })
      post = this.$store.state.posts.posts[this.$route.params.slug]
    }
    if (!post) {
      if (this.$route.params.category === 'preview') {
        post = await this.$axios
          .$get(encodeURI('/api/preview/' + this.$route.params.slug))
          .catch(() => {
            // TODO: error logging
          })
      } else {
        post = await this.$axios
          .$get(encodeURI('/api/single/' + this.$route.params.slug) + '?pwa=1')
          .catch(() => {
            // TODO: error logging
          })
      }
    }
    if (post && post.id) {
      this.post = post
      await this.$axios
        .get('/api/related/' + post.id)
        .then((res) => {
          if (Array.isArray(res.data)) {
            this.$store.dispatch('posts/setPosts', res.data, { root: true })
            this.related_posts = res.data
              .filter((item) => {
                return item.id !== post.id
              })
              .splice(0, 3)
          }
        })
        .catch(() => {
          // TODO: error logging
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
        title: '',
        subtitle: '',
        content: '',
        recommendations: 0,
        comments: 0,
        time: 0,
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
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: this.post.title,
          mainEntityOfPage: this.post.social.path,
          datePublished: new Date(this.post.time * 1000).toISOString(),
          image: images,
          publisher: {
            '@type': 'Organization',
            name: 'Telegram.hr',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.telegram.hr/tg_neue_favicon.png',
            },
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
      if (this.post.category_slug) {
        if (
          this.post.category_slug.includes('openspace') ||
          this.post.category_slug.includes('pitanje-zdravlja')
        ) {
          return this.post.category_slug + ' fancy-rubrika'
        }
        return this.post.category_slug
      }
      return ''
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
      tp.push(['setCustomVariable', 'isPaywall', this.post.paywall])
      tp.push([
        'init',
        function () {
          window.tp.experience.execute()
          window.tp.enableGACrossDomainLinking()
        },
      ])
    },
    getPost() {
      if (this.post && this.post.id) {
        if (process.client) {
          this.$telegram.$loading.finish()
        }
        if (this.post.quiz) {
          this.showQuiz = true
        }
        this.loadPiano()
        this.loadAds()
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
          vmid: 'linker-infinite',
          hid: 'linker-infinite',
          type: 'text/javascript',
          src: 'https://linker.hr/lw-inf.js',
          async: true,
        },
        {
          hid: 'contentexchange',
          src: 'https://ughr.contentexchange.me/static/tracker.js',
          async: true,
        },
      ]
    }
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
          content: this.post.social.image,
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
      ],
      script,
      link,
    }
  },
}
</script>
