<template>
  <div class="container flex relative stretch special-partner-widget">
    <div class="line-decoration-box animate">
      <div class="line-1 animate"></div>
      <div class="line-2 animate"></div>
      <div class="line-3 animate"></div>
    </div>
    <div class="fourth flex-responsive relative center">
      <div class="full flex article-standard article relative mobile-side-pad">
        <h2 class="full">Pročitajte još...</h2>
      </div>
    </div>
    <div class="fourth flex-responsive column-full-pad mobile-side-pad">
      <a
        class="full flex article-standard article relative"
        href="https://www.telegram.hr/partneri/zeljni-ste-sjajnih-vina-i-dobre-spize-onda-biste-iduci-vikend-trebali-biti-u-sibeniku-evo-sto-se-tamo-sprema/"
        target="_blank"
      >
        <img
          src="https://images.telegram.hr/U_IoxESfx-bisUYCKVlYbhCXFlQkFAdoccsfhV5bElQ/preset:single1/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDUvdGctbmFzbG92bmEtMjAyMS01LTI4LmpwZw.jpg"
          alt="Željni ste sjajnih vina i dobre spize? Onda biste idući vikend trebali biti u Šibeniku. Evo što se tamo sprema"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Željni ste sjajnih vina i dobre spize? Onda biste idući vikend
            trebali biti u Šibeniku. Evo što se tamo sprema
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
        href="https://super1.telegram.hr/native/boca-zivota/"
        target="_blank"
      >
        <img
          src="https://super1.telegram.hr/wp-content/uploads/sites/3/2021/04/lucia-i-suzana-07.jpg"
          alt="Mi smo nacija koja voli puno pričati. Ja kažem - radi, probaj, vidi. Ovo su naše priče"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Mi smo nacija koja voli puno pričati. Ja kažem - radi, probaj, vidi.
            Ovo su naše priče
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
        href="https://www.telegram.hr/partneri/uigrani-tim-ove-cetiri-zene-predvode-digitalizaciju-domace-industrije-osiguranja/"
        target="_blank"
      >
        <img
          src="https://images.telegram.hr/RlEoPXdFpQBi99cRH-B99wGqSIP38z9VAn98J73riGw/preset:single2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDUvY28temFqZWRuaWNrYS5qcGc.jpg"
          alt="igrani tim: Ove četiri žene predvode digitalizaciju domaće industrije osiguranja"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Uigrani tim: Ove četiri žene predvode digitalizaciju domaće
            industrije osiguranja
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
  padding: 0 24px;
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
.special-partner-widget .fourth:nth-child(2) .article-standard {
  min-height: auto;
  margin-bottom: 0px;
}
.special-partner-widget .fourth:nth-child(2) .article-standard:hover h2 {
  color: inherit;
}
.special-partner-widget .fourth:nth-child(2) .article h2 {
  font-size: 2.4rem;
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
  .special-partner-widget .fourth:nth-child(2) .article {
    padding: 4vw;
    padding-top: 64px;
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
