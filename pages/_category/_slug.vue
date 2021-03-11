<template>
  <div :class="['main-container', 'flex', 'single-article', typeClass]">
    <template v-if="!$fetchState.error">
      <theader :id="post.id" :headline="post.portal_title"></theader>
      <div v-if="related_posts" class="full related-header-widget">
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
      <div
        v-if="!mobile && $route.name === 'category-slug'"
        class="full center header-billboard"
      >
        <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
        <div v-if="!mobile" class="container wallpaper-banners animate">
          <div class="wallpaper-left">
            <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
          </div>
          <div class="wallpaper-right">
            <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
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
          <a @click.prevent="showSideMenu = !showSideMenu"
            ><i class="far fa-bars"></i
          ></a>
          <nuxt-link to="/" class="logo">
            <img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
            />
          </nuxt-link>
          <a @click.prevent="showSearchMenu = !showSearchMenu">
            <i class="far fa-search"></i>
          </a>
        </div>
        <img
          class="article-head-image"
          :src="post.image.full"
          :alt="post.image.alt"
        />
        <div class="full flex article-head">
          <div class="full flex overtitle-parent">
            <h3 class="overtitle">{{ post.category }}</h3>
            <div v-if="post.promo.partner" class="collab-overtitle">
              <h3 class="overtitle">U suradnji s</h3>
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
                  <h3 class="overtitle">U suradnji s</h3>
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
                    <span>U suradnji s</span>
                    <span>{{ post.promo.partner }}</span>
                  </a>
                </template>
                <template v-else>
                  <nuxt-link
                    v-for="author in post.authors"
                    :key="author.name"
                    :to="author.url"
                    class="meta-author flex"
                    ><img
                      v-if="author.image"
                      :src="author.image"
                      :alt="author.name"
                    />
                    <span>Piše</span><span>{{ author.name }}</span></nuxt-link
                  >
                </template>
              </h5>
              <div class="full flex article-head-image-parent relative">
                <img
                  class="article-head-image"
                  :srcset="srcset"
                  :src="post.image.url"
                  :alt="post.image.alt"
                />
                <div v-if="post.image.author" class="meta-foto">
                  FOTO: {{ post.image.author }}
                </div>
              </div>
              <p v-if="post.perex" class="perex">
                {{ post.perex }}
              </p>
              <h5 class="full flex relative article-meta">
                <template v-if="post.promo.partner">
                  <a href="#" class="meta-author flex desktop-only">
                    <img :src="post.promo.logo" />
                    <span>U suradnji s</span>
                    <span>{{ post.promo.partner }}</span>
                  </a>
                </template>
                <template v-else>
                  <nuxt-link
                    v-for="author in post.authors"
                    :key="author.name"
                    :to="author.url"
                    class="meta-author flex desktop-only"
                    ><img
                      v-if="author.image"
                      :src="author.image"
                      :alt="author.name"
                    /><span>Piše</span><span>{{ author.name }}</span></nuxt-link
                  >
                </template>
                <span class="meta-date">{{ post.time | parseTime }}</span>
                <span class="meta-preporuke"
                  >{{ post.recommendations }} preporuka</span
                >
                <div class="sidebar-social flex">
                  <a href="#" @click.prevent="fbShare"
                    ><i class="fab fa-facebook-f animate"></i
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
                    ><i class="fab fa-twitter animate"></i
                  ></a>
                  <!--<a href="#"><i class="fab fa-instagram animate"></i></a>-->
                </div>
              </h5>
            </div>
            <div class="full relative single-article-body">
              <!-- eslint-disable-next-line -->
              <div
                id="article-content"
                @click="handleClick"
                v-html="post.content"
              ></div>
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
                    <a href="#" class="animate center" @click.prevent="fbShare"
                      ><i class="fab fa-facebook-f"></i
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
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <!-- <a href="#" class="animate center"
                    ><i class="fab fa-instagram"></i
                  ></a>-->
                    <div
                      v-if="!post.comments_off"
                      class="classic-btn clickable animate"
                      @click="comments = !comments"
                    >
                      {{ post.comments }}
                      {{ post.comments === 1 ? 'komentar' : 'komentara' }}
                    </div>
                  </div>
                </div>
                <div v-if="!post.comments_off" v-show="comments" class="full">
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
        <!--<div class="full flex">
          <partner></partner>
        </div>-->
        <div class="full flex">
          <div
            class="container flex relative native-block stretch mobile-side-pad"
          >
            <div id="midasWidget__657"></div>
          </div>
        </div>
        <keep-reading
          v-if="post.category_slug && post.category_slug !== 'promo'"
          :category="post.category_slug"
          :p="post.id"
        ></keep-reading>
      </div>
    </template>
    <template v-if="$fetchState.error">
      <div class="full flex tg-red">
        <client-only>
          <theader
            :id="post.id"
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
export default {
  name: 'Slug',
  async fetch() {
    if (!this.$route.params.slug) {
      return
    }
    let post
    if (process.client) {
      this.$nextTick(() => {
        this.$telegram.$loading.start()
      })
    }
    if (this.$route.params.category === 'preview') {
      post = await this.$axios.$get(
        encodeURI('preview/' + this.$route.params.slug)
      )
    } else {
      post = await this.$axios.$get(
        encodeURI('single/' + this.$route.params.slug)
      )
    }
    if (post.id) {
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
      comments: false,
      mobile: true,
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
        social: {
          title: '',
          description: '',
          image: '',
          width: '',
          height: '',
        },
        disable_ads: true,
        promo: {
          signature_logo_off: false,
          partner: '',
        },
      },
      related_posts: [],
      midas: false,
    }
  },
  computed: {
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
      this.resize()
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
      this.$store.dispatch('ads/initAds', {
        route: this.$route,
        options: this.post.disable_ads,
        tags: this.post.tags,
      })
      if (
        !this.post.disable_ads &&
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
        this.loadMidas()
      }
    },
    loadMidas() {
      const container = document.getElementById('midasWidget__657')
      const intext = document.getElementById('midasWidget__r49')
      let widget = '2?portalWidgetId=657'
      if (intext) {
        widget += '&portalRuleId=49'
      }
      const scriptTag = document.createElement('script')
      scriptTag.src =
        'https://www.midas-network.com/ScriptsControllerRule/midas-phrygia-1.min.js'
      scriptTag.async = true
      scriptTag.id = 'midas-phrygia'
      scriptTag.setAttribute('data-widget', widget)
      container.parentNode.insertBefore(scriptTag, container)
    },
    loadMox() {
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
      tp.push(['setContentAuthor', this.post.authors[0].name])
      tp.push(['setContentIsNative', this.post.post_type === 'partneri'])
    },
    resize() {
      this.mobile = window.innerWidth < 1024
    },
    getPost() {
      if (this.post && this.post.id) {
        if (process.client) {
          this.$telegram.$loading.finish()
        }
        this.loadPiano()
        this.loadAds()
        if (typeof FB !== 'undefined') {
          FB.XFBML.parse()
        }
        if (typeof twttr !== 'undefined') {
          /* global twttr */
          twttr.widgets.load(document.getElementById('article-content'))
        }
        if (typeof instgrm !== 'undefined') {
          /* global instgrm */
          instgrm.Embeds.process()
        }
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
        this.$axios.get('related/' + this.post.id).then((res) => {
          this.related_posts = res.data
            .filter((item) => {
              return item.id !== this.post.id
            })
            .splice(0, 3)
        })
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
        const {
          altKey,
          ctrlKey,
          metaKey,
          shiftKey,
          button,
          defaultPrevented,
        } = event
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
    const amp = {
      hid: 'amphtml',
      rel: 'amphtml',
      href: this.post.social.path + 'amp',
    }
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: this.post.social.path,
      },
    ]
    if (this.$route.params.category !== 'partneri') {
      link.push(amp)
    }
    let font, theme
    if (process.server) {
      font = this.$cookies.get('tmg_font')
      theme = this.$cookies.get('tmg_theme')
    } else {
      font = this.$store.state.theme.font
      theme = this.$store.state.theme.theme
    }
    return {
      htmlAttrs: {
        class: [
          font === 'small' ? 'small-fontsize' : '',
          font === 'large' ? 'large-fontsize' : '',
        ],
      },
      bodyAttrs: {
        class: [
          theme === 'contrast' ? 'contrast-mode' : '',
          theme === 'dark' ? 'dark-mode' : '',
        ],
      },
      title: this.post.title,
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.social.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.post.social.description,
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.post.social.title,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: this.post.social.image,
        },
        {
          hid: 'og:image:width',
          name: 'og:image:width',
          property: 'og:image:width',
          content: this.post.social.width,
        },
        {
          hid: 'og:image:height',
          name: 'og:image:height',
          property: 'og:image:height',
          content: this.post.social.height,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: this.post.social.path,
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
        {
          hid: 'twitter:widgets:theme',
          name: 'twitter:widgets:theme',
          content: this.$store.state.theme.theme === 'dark' ? 'dark' : 'light',
        },
      ],
      script: [
        {
          vmid: 'instagram',
          hid: 'instagram',
          src:
            'https://www.instagram.com/static/bundles/metro/EmbedSDK.js/33cd2c5d5d59.js',
        },
        {
          vmid: 'twitter',
          hid: 'twitter',
          src: 'https://platform.twitter.com/widgets.js',
          async: true,
          defer: true,
        },
        {
          vmid: 'schema-ld',
          hid: 'schema-ld',
          type: 'application/ld+json',
          json: this.jsonld,
        },
      ],
      link,
    }
  },
}
</script>
