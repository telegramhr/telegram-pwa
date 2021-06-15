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
        href="https://www.telegram.hr/partneri/sibenik-postaje-kulturna-meka-dalmacije-a-za-sve-je-zasluzan-tim-kreativaca-pricali-smo-s-njima/"
        target="_blank"
      >
        <img
          src="https://www.telegram.hr/wp-content/uploads/2021/06/tvrdjava-sv-mihovila-sibenik-8-scaled.jpg"
          alt="Šibenik postaje kulturna meka Dalmacije, a za sve je zaslužan tim kreativaca. Pričali smo s njima"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Šibenik postaje kulturna meka Dalmacije, a za sve je zaslužan tim
            kreativaca. Pričali smo s njima
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
        href="https://www.telegram.hr/partneri/cini-se-da-nas-je-2020-puno-naucila-zivotu-i-zdravlju-ovo-su-4-wellbeing-trenda-u-2021/"
        target="_blank"
      >
        <img
          src="https://images.telegram.hr/5XyeTEoRdYN-Ix8ONCGVLkE9d86Qg-U-ROqMYYURIZs/preset:single1/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDYvZ2V0dHlpbWFnZXMtMTIxMzEyODE5Mi1zY2FsZWQuanBn.jpg"
          alt="Čini se da nas je 2020. puno naučila o životu i zdravlju. Ovo su 4 wellbeing trenda u 2021."
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Urbano vrtlarstvo kao posljedica pandemije? Saznali smo što još
            dobroga nosi 2021.
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
        href="https://super1.telegram.hr/native/zavolimo-svoju-kozu/"
        target="_blank"
      >
        <img
          src="https://images.telegram.hr/zNVD_h6IFyO9O3PCC8ZmfL-fjNkSrwpxwXmh-9ZeWcE/preset:single1/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDYvaW1nLTYzMjQuanBn.jpg"
          alt="Crvenilo i akne? Ove četiri žene uspjele su zavoljeti svoju kožu unatoč svemu. Ovo je njihova priča"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Crvenilo i akne? Ove četiri žene uspjele su zavoljeti svoju kožu
            unatoč svemu. Ovo je njihova priča
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
