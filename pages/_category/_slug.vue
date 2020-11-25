<template>
  <div
    v-if="post.id"
    :class="['main-container', 'flex', 'single-article', post.type]"
  >
    <theader></theader>

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
        <a onclick="activateSidemenu()"><i class="far fa-bars"></i></a>
        <nuxt-link href="/" class="logo">
          <img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo" />
        </nuxt-link>
        <a href="#" onclick="activatesSearchmenu()">
          <i class="far fa-search"></i>
        </a>
      </div>
      <img
        class="article-head-image"
        :src="post.image.url"
        :alt="post.image.alt"
      />
      <div class="full flex article-head">
        <div class="full flex">
          <h3 class="overtitle">{{ post.overtitle }}</h3>
        </div>
        <h1 class="full">{{ post.title }}</h1>
        <h2 class="full">{{ post.subtitle }}</h2>
      </div>
    </div>

    <div class="full flex">
      <article class="container column-full-pad flex relative mobile-side-pad">
        <div class="full column article-head column-top-pad flex">
          <div class="full flex">
            <h3 class="overtitle">{{ post.overtitle }}</h3>
          </div>
          <h1 class="full">{{ post.title }}</h1>
          <h2 class="full">
            {{ post.subtitle }}
          </h2>
          <h5 class="full flex relative article-meta mobile-only">
            <nuxt-link
              v-for="author in post.authors"
              :key="author.name"
              :to="author.url"
              class="meta-author flex"
              ><img :src="author.image" :alt="author.name" /> <span>Piše</span
              ><span>{{ author.name }}</span></nuxt-link
            >
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
            <nuxt-link
              v-for="author in post.authors"
              :key="author.name"
              :to="author.url"
              class="meta-author flex"
              ><img :src="author.image" :alt="author.name" /><span>Piše</span
              ><span>{{ author.name }}</span></nuxt-link
            >
            <span class="meta-date">{{ post.time | parseTime }}</span>
            <span class="meta-preporuke"
              >{{ post.recommendations }} preporuka</span
            >
            <div class="sidebar-social flex">
              <a href="#"><i class="fab fa-facebook-f animate"></i></a>
              <a href="#"><i class="fab fa-twitter animate"></i></a>
              <a href="#"><i class="fab fa-instagram animate"></i></a>
            </div>
          </h5>
        </div>
        <div class="full relative single-article-body">
          <div v-html="post.content"></div>
          <!-- Article footer -->
          <div class="full relative single-article-footer flex column-top-pad">
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
                <a href="#" class="animate center"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a href="#" class="animate center"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#" class="animate center"
                  ><i class="fab fa-instagram"></i
                ></a>
                <div class="classic-btn clickable animate">
                  {{ post.comments }}
                  komentara
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Slug',
  async fetch() {
    await this.getPost()
  },
  data() {
    return {
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
      },
      related_posts: [],
    }
  },
  mounted() {
    // this.getPost()
  },
  methods: {
    getPost() {
      this.$axios.get('single/' + this.$route.params.slug).then((res) => {
        this.post = res.data
        /* global instgrm */
        instgrm.Embeds.process()
      })
    },
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.subtitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.post.subtitle,
        },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:title', name: 'og:title', content: this.post.title },
        { hid: 'og:image', name: 'og:image', content: this.post.image.url },
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
