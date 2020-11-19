<template>
  <div class="main-container flex homepage">
    <div class="full flex tg-red">
      <t-g-header></t-g-header>
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

    <div class="container flex relative block-1 stretch">
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
          <weather></weather>
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
          <standard></standard>
          <standard></standard>
          <standard></standard>
          <standard></standard>
        </div>
      </section>
      <div class="full flex mobile-only">
        <newsletter></newsletter>
      </div>
      <section
        class="fourth flex-responsive flex komentari mobile-side-pad column-horizontal-pad column-right-border"
      >
        <latest :portal="1"></latest>
        <h2 class="full flex section-title">Komentari</h2>
        <komentar></komentar>
        <komentar></komentar>
        <div class="full flex desktop-only">
          <h2 class="full flex section-title">Newsletter</h2>
          <newsletter></newsletter>
          <h2 class="full flex section-title">Podcast</h2>
          <podcast></podcast>
        </div>
      </section>
    </div>

    <big-featured :post="posts[0]"></big-featured>

    <partners></partners>

    <div class="block-title news-block-title full mobile-side-pad">
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <h1 class="column-left-pad full">Još vijesti</h1>
      </div>
    </div>

    <div class="container flex relative block-2 standard-block stretch">
      <section
        class="fourth flex desktop-only column-horizontal-pad column-right-border"
      >
        <h2 class="full flex section-title">Upravo se čita</h2>
        <div class="full flex">
          <mini></mini>
          <!-- 4 -->
        </div>
        <h2 class="full flex section-title">Dojave</h2>
        <!-- widget dojave -->
      </section>
      <div class="three-fourths flex-responsive flex elevate-over-section">
        <section
          class="two-thirds flex-responsive flex mobile-side-pad column-horizontal-pad column-right-border"
        >
          <featured :post="posts[0]"></featured>
          <div class="full flex split-articles">
            <standard></standard>
            <!-- 3x -->
          </div>
        </section>
        <section class="full mobile-only">
          <!--<?php include("article_break.php"); ?> -->
        </section>
        <section
          class="third flex-responsive flex mobile-side-pad column-horizontal-pad"
        >
          <standard></standard>
          <!-- 3x -->
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

    <!--<sport></sport>
    <super1></super1>
    <div class="full flex">
      <div class="container desktop-only flex relative column-full-pad"></div>
    </div>
    <div class="container flex relative block-5 standard-block">
      <category title="Život"></category>
      <category title="Biznis & Tech"></category>
      <category title="Kultura"></category>
      <category title="Zdravlje"></category>
      <section v-if="mobile" class="full mobile-only flex mobile-side-pad">
        <h2 class="full flex section-title">Najčitanije</h2>
        <article-top time=5></article-top>

      </section>
    </div>-->

    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
      posts: [],
    }
  },
  mounted() {
    window.addEventListener('resize', this.resize)
    this.getPosts()
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
}
</script>
