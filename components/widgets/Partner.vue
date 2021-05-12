<template>
  <div class="container flex relative stretch special-partner-widget">
    <div class="line-decoration-box animate">
      <div class="line-1 animate"></div>
      <div class="line-2 animate"></div>
      <div class="line-3 animate"></div>
    </div>
    <div class="fourth flex-responsive relative center">
      <img
        src="@/assets/img/bg_wall.jpg"
        aria-hidden="true"
        class="partner-widget-bg"
      />
      <a
        class="full flex article-standard article relative mobile-side-pad"
        href="https://super1.telegram.hr/native/boca-zivota/"
        target="_blank"
      >
        <img
          src="https://super1.telegram.hr/wp-content/themes/super1-theme/templates/native/aquarius/boca_zivota/images/blue-bg-top.png"
          aria-hidden="true"
        />
        <h2 class="full">
          Izgubljenu šansu možda ne možeš vratiti, <br />
          ali možeš djelovati.
        </h2>
        <h4 class="full">Pročitaj kako vratiti motivaciju i energiju</h4>
        <img
          src="https://super1.telegram.hr/wp-content/themes/super1-theme/templates/native/aquarius/boca_zivota/images/blue-bg-bottom.png"
          aria-hidden="true"
        />
      </a>
    </div>
    <div class="fourth flex-responsive column-full-pad mobile-side-pad">
      <a
        class="full flex article-standard article relative"
        href="https://www.telegram.hr/partneri/andrej-je-usred-covid-krize-dao-otkaz-i-otvorio-svoju-firmu-nije-se-bojao-inspirirao-ga-je-winston-churchill/"
        target="_blank"
      >
        <img
          src="https://www.telegram.hr/wp-content/uploads/2021/04/andrej-kajganic-01.jpg"
          alt="Andrej je usred covid-krize dao otkaz i otvorio svoju firmu. Nije se bojao, inspirirao ga je Winston Churchill"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Andrej je usred covid-krize dao otkaz i otvorio svoju firmu. Nije se
            bojao, inspirirao ga je Winston Churchill
          </h2>
          <h4 class="full"></h4>
          <h5 class="full flex article-meta">
            <span class="meta-author"></span>
            <span class="meta-preporuke"></span>
            <span class="meta-date"></span>
          </h5>
        </div>
      </a>
    </div>
    <div class="fourth flex-responsive column-full-pad mobile-side-pad">
      <a
        class="full flex article-standard article relative"
        href="https://super1.telegram.hr/fit/snimala-je-po-12-sati-dnevno-i-trenirala-pet-puta-tjedno-lucia-nije-stajala-no-danas-zivi-svoj-san/"
        target="_blank"
      >
        <img
          src="https://super1.telegram.hr/wp-content/uploads/sites/3/2021/04/lucia-stefanija-glavich-mandaric-01-880x520.jpg"
          alt="Snimala je po 12 sati dnevno i trenirala pet puta tjedno. Lucia nije stajala, no danas živi svoj san"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Snimala je po 12 sati dnevno i trenirala pet puta tjedno. Lucia nije
            stajala, no danas živi svoj san
          </h2>
          <h4 class="full"></h4>
          <h5 class="full flex article-meta">
            <span class="meta-author"></span>
            <span class="meta-preporuke"></span>
            <span class="meta-date"></span>
          </h5>
        </div>
      </a>
    </div>
    <div class="fourth flex-responsive column-full-pad mobile-side-pad">
      <a
        class="full flex article-standard article relative"
        href="https://www.krenizdravo.hr/prehrana/upoznajte-velicanstveni-cink-i-magnezij-kljuc-bistrog-uma-i-snaznog-imuniteta"
        target="_blank"
      >
        <img
          src="https://www.krenizdravo.hr/wp-content/uploads/2015/04/aquarius-water-vaznost-cinka-i-magnezija.jpg"
          alt="Upoznajte veličanstveni cink i magnezij. Ključ bistrog uma i snažnog imuniteta"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Upoznajte veličanstveni cink i magnezij. Ključ bistrog uma i snažnog
            imuniteta
          </h2>
          <h4 class="full"></h4>
          <h5 class="full flex article-meta">
            <span class="meta-author"></span>
            <span class="meta-preporuke"></span>
            <span class="meta-date"></span>
          </h5>
        </div>
      </a>
    </div>
    <h5 class="full center-text special-partner-signature hide">
      <span class="faded">Omogućuje</span> {{ title }}
    </h5>
    <div class="line-decoration-box animate">
      <div class="line-1 animate"></div>
      <div class="line-2 animate"></div>
      <div class="line-3 animate"></div>
    </div>
  </div>
</template>

<style scoped>
.special-partner-widget .partner-widget-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
.special-partner-widget .fourth:nth-child(2) .article {
  z-index: 3;
  position: relative;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: #005ba4;
  padding: 0px 24px;
}
.special-partner-widget .fourth:nth-child(2) .article img {
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  top: -35px;
  z-index: 1;
}
.special-partner-widget .fourth:nth-child(2) .article img:last-child {
  top: auto;
  bottom: -35px;
}
.special-partner-widget .fourth:nth-child(2) .article h2 {
  font-size: 1.6rem;
  position: relative;
  z-index: 5;
}
.special-partner-widget .fourth:nth-child(2) .article h4 {
  display: block;
  margin-bottom: 0px;
  z-index: 5;
  position: relative;
}
@media screen and (min-width: 1025px) {
  .special-partner-widget .article img {
    height: 150px;
  }
}
@media screen and (max-width: 1024px) {
  .special-partner-widget .fourth:nth-child(2) .article img {
    top: -45px;
  }
  .special-partner-widget .fourth:nth-child(2) .article img:last-child {
    bottom: -45px;
  }
  .special-partner-widget {
    padding-top: 0px;
  }
}
</style>

<script>
export default {
  name: 'Partner',
  /* async fetch() {
    await this.$axios.$get('/api/partner-widget').then((res) => {
      this.posts = res.posts
      this.title = res.title
    })
  }, */
  data() {
    return {
      posts: [],
      title: '',
    }
  },
  methods: {
    srcset(post) {
      let set = `${post.image.url}`
      if (post.image.url2) {
        set += `, ${post.image.url2} 2x`
      }
      if (post.image.url3) {
        set += `, ${post.image.url3} 3x`
      }
      return set
    },
  },
}
</script>
