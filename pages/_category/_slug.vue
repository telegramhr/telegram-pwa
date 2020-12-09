<template>
  <div
    v-if="post.id"
    :class="['main-container', 'flex', 'single-article', typeClass]"
  >
    <client-only>
      <theader
        :id="post.id"
        :headline="post.portal_title"
        :side-menu-show="showSideMenu"
        :search-menu-show="showSearchMenu"
      ></theader>
    </client-only>
    <div class="full related-header-widget">
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
        <a @click.prevent="showSideMenu = !showSideMenu"
          ><i class="far fa-bars"></i
        ></a>
        <nuxt-link to="/" class="logo">
          <img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo" />
        </nuxt-link>
        <a @click.prevent="showSearchMenu = !showSearchMenu">
          <i class="far fa-search"></i>
        </a>
      </div>
      <img
        class="article-head-image"
        :src="post.image.url"
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
      <div v-if="!mobile" class="container wallpaper-banners">
        <div class="wallpaper-left">
          <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
        </div>
        <div class="wallpaper-right">
          <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
        </div>
      </div>
      <div class="full flex">
        <article
          class="container column-full-pad flex relative mobile-side-pad"
        >
          <div class="full column article-head column-top-pad flex">
            <div class="full flex overtitle-parent">
              <!-- eslint-disable-next-line -->
              <h3 class="overtitle" v-html="post.category"></h3>
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
            <div v-html="post.content"></div>
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
                    class="classic-btn clickable animate"
                    @click="comments = !comments"
                  >
                    {{ post.comments }}
                    komentara
                  </div>
                </div>
              </div>
              <div v-show="comments" class="full">
                <div
                  class="fb-comments"
                  :data-href="post.social.path"
                  data-width="100%"
                  data-numposts="5"
                  data-lazy="true"
                ></div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="full flex">
        <div
          class="container flex relative native-block stretch mobile-side-pad"
        >
          <!--<div class="full column-horizontal-pad flex">
            <h2 class="full flex section-title">Više s weba</h2>
          </div>-->
          <div id="midasWidget__657"></div>
          <script
            id="midas-phrygia"
            async
            src="https://www.midas-network.com/ScriptsControllerRule/midas-phrygia-1.min.js"
            type="text/javascript"
            data-widget="2?portalWidgetId=657&portalRuleId=49"
          ></script>
        </div>
      </div>
      <keep-reading
        v-if="post.category_slug"
        :category="post.category_slug"
        :p="post.id"
      ></keep-reading>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Slug',
  async fetch() {
    if (this.$route.params.category === 'preview') {
      this.post = await this.$axios.$get('preview/' + this.$route.params.slug)
    } else {
      this.post = await this.$axios.$get('single/' + this.$route.params.slug)
    }
  },
  data() {
    return {
      comments: false,
      mobile: true,
      showSideMenu: false,
      showSearchMenu: false,
      post: {
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
        },
      },
      related_posts: [],
    }
  },
  computed: {
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
  },
  mounted() {
    this.resize()
    this.getPost()
  },
  methods: {
    resize() {
      this.mobile = window.innerWidth < 1024
    },
    getPost() {
      if (this.post && this.post.id) {
        if (typeof FB !== 'undefined') {
          FB.XFBML.parse()
        }
        if (typeof twttr !== 'undefined') {
          /* global twttr */
          twttr.widgets.load()
        }
        this.$axios.get('related/' + this.post.id).then((res) => {
          this.related_posts = res.data
            .filter((item) => {
              return item.id !== this.post.id
            })
            .splice(0, 3)
        })
      } else {
        setTimeout(this.getPost, 1000)
      }
    },
    fbShare() {
      /* global FB */
      FB.ui({ method: 'share', href: this.post.social.path }, function (
        response
      ) {})
    },
  },
  head() {
    return {
      title: this.post.title,
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
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:title', name: 'og:title', content: this.post.social.title },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.post.social.image,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.post.social.path,
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
      ],
      script: [
        {
          src:
            'https://www.instagram.com/static/bundles/metro/EmbedSDK.js/33cd2c5d5d59.js',
        },
      ],
    }
  },
}
</script>
