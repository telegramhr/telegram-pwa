<template>
  <div
    :class="[
      'main-container',
      'flex',
      'single-article',
      'shop-guide',
      typeClass,
      categoryClass,
    ]"
  >
    <theader
      :id="Number(post.id)"
      :headline="post.portal_title"
      :post="post"
    ></theader>
    <div class="full relative">
      <!--<div v-if="post.parent" class="full flex breaking-news xmas-breaking">
        <div class="container column-full-pad">
          <app-link to="/soping-vodic/bozicni-pokloni-2021/"
            ><b>BOŽIĆNI POKLONI 2021:</b> Telegramov vodič kroz najbolje
            poklone</app-link
          >
        </div>
      </div>-->
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
          <app-link to="/" class="logo">
            <img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
            />
          </app-link>
          <a
            v-show="canLogIn"
            class="mob-nav-otherbtn mobile-only"
            @click.prevent="$store.dispatch('user/login')"
          >
            <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon
          ></a>
          <a
            v-show="!canLogIn"
            class="mobile-only mob-nav-otherbtn"
            href="https://pretplata.telegram.hr/subscriptions/subscriptions/my"
            aria-label="Moj račun"
          >
            <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon
          ></a>
        </div>
        <img
          v-if="post.image.full"
          class="article-head-image"
          :src="post.image.full"
          :alt="post.image.alt"
        />
        <div class="full flex article-head">
          <div class="full flex overtitle-parent">
            <div class="noththree overtitle">
              {{ parsedOvertitle }}
            </div>
            <div v-if="post.promo.partner" class="collab-overtitle">
              <div class="noththree overtitle">{{ post.promo.prefix }}</div>
              <img :src="post.promo.logo" :alt="post.promo.partner" />
            </div>
          </div>
          <h1 class="full">{{ post.portal_title }}</h1>
          <h2 class="full">{{ post.subtitle }}</h2>
        </div>
      </div>
      <div class="full flex">
        <article
          class="container column-full-pad flex relative mobile-side-pad"
        >
          <div class="full column article-head column-top-pad flex">
            <div class="full flex overtitle-parent">
              <div class="noththree overtitle">{{ parsedOvertitle }}</div>
              <div v-if="post.promo.partner" class="collab-overtitle">
                <div class="noththree overtitle">{{ post.promo.prefix }}</div>
                <img :src="post.promo.logo" :alt="post.promo.partner" />
              </div>
            </div>
            <h1 class="full">{{ post.title }}</h1>
            <h2 class="full">
              {{ post.subtitle }}
            </h2>
            <p v-if="post.perex" class="perex">
              {{ post.perex }}
            </p>
            <div class="nothfour full flex relative article-meta">
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
            </div>
            <div class="full flex article-head-image-parent relative">
              <template v-if="post.video">
                <!-- eslint-disable-next-line -->
                  <div style="width: 100%" v-html="post.video" />
              </template>
              <template v-else>
                <img
                  class="article-head-image"
                  :src="post.image.full"
                  :alt="post.image.alt"
                />
                <div v-if="post.image.author" class="meta-foto">
                  FOTO: {{ post.image.author }}
                </div>
              </template>
            </div>
          </div>
          <div class="full relative single-article-body">
            <!-- eslint-disable vue/no-v-html -->
            <div
              id="article-content"
              class="cXenseParse"
              @click="handleClick"
              v-html="post.content"
            ></div>
            <!-- eslint-enable vue/no-v-html -->
            <client-only>
              <portal
                v-if="show && !post.parent"
                selector="#guide-category-container"
              >
                <product-category-guide :post="post"></product-category-guide>
              </portal>
              <portal v-if="show" selector="#guide-container">
                <product-guide
                  :products="post.products"
                  :category="post.title"
                ></product-guide>
              </portal>
            </client-only>
            <!-- Article footer -->
            <div
              class="full relative single-article-footer flex column-top-pad"
            >
              <div class="full center">
                <div class="flex social-circle-buttons">
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
                </div>
              </div>
            </div>
          </div>
        </article>
        <more-shoping-guides
          v-if="post.parent"
          :post="post.id"
        ></more-shoping-guides>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
import { Portal } from '@linusborg/vue-simple-portal'
export default {
  name: 'Slug',
  components: { Portal },
  scrollToTop: true,
  async fetch() {
    const path = this.$route.params.pathMatch.split('/')
    let slug = path[path.length - 1]
    if (!slug) {
      slug = path[path.length - 2]
    }
    let post
    if (!post) {
      post = await this.$axios
        .$get(encodeURI('/api/shop-guide/' + slug))
        .catch(() => {
          // TODO: error logging
        })
    }
    if (post && post.id) {
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
      show: false,
      showSideMenu: false,
      showSearchMenu: false,
      post: {
        id: 0,
        comments_off: false,
        type: '',
        image: {
          url: '',
          alt: '',
          author: '',
        },
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
        parent: 0,
      },
      posts: [],
    }
  },
  computed: {
    parsedOvertitle() {
      return this.$options.filters.parseCat(
        this.post.overtitle ? this.post.overtitle : this.post.category
      )
    },
    canLogIn() {
      return this.$store.getters['user/canLogIn']
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
          publisher: this.$store.state.header.publisher,
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
    })
  },
  methods: {
    getPost() {
      if (this.post && this.post.id) {
        if (process.client) {
          this.$telegram.$loading.finish()
        }
        this.show = true
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
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: this.post.social.path,
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
      script: [
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
