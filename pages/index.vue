<template>
  <div class="main-container flex homepage">
    <div class="full flex tg-red">
      <client-only>
        <theader></theader>
      </client-only>
      <div class="full header-filler"></div>
    </div>
    <div
      class="block-title news-block-title header-block-title full mobile-side-pad desktop-only"
    >
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <nuxt-link to="/" class="logo column-left-pad"
          ><img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo"
        /></nuxt-link>
        <h2 class="full column-horizontal-pad desktop-only site-subtitle">
          Portal za društvena i kulturna pitanja
        </h2>
      </div>
    </div>

    <div v-if="posts.length" class="container flex relative block-1 stretch">
      <section
        class="three-fourths mobile-side-pad flex-responsive flex relative the-big-gs stretch elevate-over-section"
      >
        <div
          class="five-sixths column-horizontal-pad flex-responsive flex column-bottom-border column-right-border"
        >
          <featured :post="posts[0]"></featured>
        </div>
        <div
          class="sixth desktop-only flex column-horizontal-pad column-bottom-border"
        >
          <client-only>
            <weather></weather>
            <stocks></stocks>
          </client-only>
        </div>
        <div
          class="two-thirds column-horizontal-pad flex-responsive flex column-right-border column-top-pad"
        >
          <featured :post="posts[1]"></featured>
          <featured :post="posts[2]"></featured>
          <featured :post="posts[3]"></featured>
        </div>
        <div
          class="third flex-responsive column-horizontal-pad flex column-top-pad"
        >
          <standard :post="posts[4]"></standard>
          <standard :post="posts[5]"></standard>
          <standard :post="posts[6]"></standard>
          <standard :post="posts[7]"></standard>
        </div>
      </section>
      <div class="full flex mobile-only">
        <newsletter></newsletter>
      </div>
      <section
        class="fourth flex-responsive flex komentari mobile-side-pad column-horizontal-pad column-right-border"
      >
        <latest :portal="1"></latest>
        <commentary></commentary>
        <div class="full flex desktop-only">
          <h2 class="full flex section-title">Newsletter</h2>
          <newsletter></newsletter>
        </div>
      </section>
    </div>

    <big-featured></big-featured>

    <partners></partners>

    <div class="block-title news-block-title full mobile-side-pad">
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <h1 class="column-left-pad full">Još vijesti</h1>
      </div>
    </div>

    <div
      v-if="posts.length"
      class="container flex relative block-2 standard-block stretch"
    >
      <section
        class="fourth flex desktop-only column-horizontal-pad column-right-border"
      >
        <trending :id="1"></trending>
        <h2 class="full flex section-title">Dojave</h2>
        <!-- widget dojave -->
      </section>
      <div class="three-fourths flex-responsive flex elevate-over-section">
        <section
          class="two-thirds flex-responsive flex mobile-side-pad column-horizontal-pad column-right-border"
        >
          <featured :post="posts[8]"></featured>
          <div class="full flex split-articles">
            <standard
              v-for="i in [9, 10, 11]"
              :key="i"
              :post="posts[i]"
            ></standard>
          </div>
        </section>
        <section class="full mobile-only">
          <break></break>
        </section>
        <section
          class="third flex-responsive flex mobile-side-pad column-horizontal-pad"
        >
          <standard
            v-for="i in [12, 13, 14]"
            :key="i"
            :post="posts[i]"
          ></standard>
        </section>
      </div>
      <div
        class="full center subtle-btn-parent mobile-only relative clickable"
        onclick="requestArticles(this);"
      >
        <div class="subtle-btn animate">Vidi više</div>
        <div class="subtle-btn-line"></div>
        <div class="full center cool-loader hide">
          <div class="loader-square">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>

    <sport></sport>
    <super></super>
    <div class="full flex">
      <div class="container desktop-only flex relative column-full-pad"></div>
    </div>
    <div class="container flex relative block-5 standard-block">
      <category slug="zivot"></category>
      <category slug="biznis-tech"></category>
      <category slug="kultura"></category>
      <category slug="velike-price"></category>
      <most-read v-if="mobile"></most-read>
    </div>

    <tfooter></tfooter>
  </div>
</template>

<script>
import Trending from '@/components/Elements/Trending'
import Sport from '~/components/Elements/Sport'
import Super from '~/components/Elements/Super1'
export default {
  components: { Trending, Super, Sport },
  async fetch() {
    this.posts = await this.$axios.get('featured').then((res) => res.data)
  },
  data() {
    return {
      mobile: true,
      posts: [],
    }
  },
  mounted() {
    window.addEventListener('resize', this.resize)
    // this.getPosts()
  },
  methods: {
    resize() {
      this.mobile = window.innerWidth < 1024
    },
    getPosts() {
      this.$axios.get('featured').then((res) => {
        this.posts = res.data
      })
    },
  },
  head() {
    return {
      title: 'Telegram.hr',
    }
  },
}
</script>
