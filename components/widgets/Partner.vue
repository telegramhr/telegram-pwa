<template>
  <div class="container flex relative stretch special-partner-widget">
    <div class="line-decoration-box animate">
      <div class="line-1 animate"></div>
      <div class="line-2 animate"></div>
      <div class="line-3 animate"></div>
    </div>
    <div class="fourth flex-responsive column-full-pad mobile-side-pad">
      <div class="full flex relative">
        <img
          src="https://www.telegram.hr/wp-content/uploads/2021/04/afera-cijepise-widget-alt.jpg"
          alt="Afera Boras na Telegram.hr"
        />
        <p class="full special-partner-tagline hide"></p>
      </div>
    </div>
    <div class="fourth flex-responsive column-full-pad mobile-side-pad">
      <a
        class="full flex article-standard article relative"
        href="https://www.telegram.hr/politika-kriminal/telegram-otkriva-ono-sto-beros-mjesecima-skriva-propali-cijepise-radio-njegov-poznanik-kojem-daje-milijune/"
        target="_blank"
      >
        <img
          src="https://images.telegram.hr/ksjEK786iuKOv_hdqOY4Agu-UTCS8Ov3fkURXZ8zmyw/preset:single2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDQvdGVsZWdyYW0tY3VzcGlzLWJlcm9zLmpwZWc.jpg"
          alt="Telegram otkriva ono što Beroš mjesecima skriva: propali Cijepise radio njegov poznanik kojem daje milijune"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Telegram otkriva ono što Beroš mjesecima skriva: propali Cijepise
            radio njegov poznanik kojem daje milijune
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
        href="https://www.telegram.hr/politika-kriminal/objavljujemo-detalje-dopisivanja-s-vladom-ovako-su-dva-mjeseca-izbjegavali-odgovoriti-tko-je-i-za-koju-cijenu-radio-cijepise/"
        target="_blank"
      >
        <img
          src="https://images.telegram.hr/pAafpb5id6YFyoIJEO5QouH-gG6uMtfllyniorUfpjQ/preset:single2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDQvYmVyb3MtbWFpbG92aS1jaWplcGlzZS5qcGVn.jpg"
          alt="Objavljujemo detalje dopisivanja s Vladom. Ovako su dva mjeseca izbjegavali odgovoriti tko je i za koji iznos radio Cijepise"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Objavljujemo detalje dopisivanja s Vladom. Ovako su dva mjeseca
            izbjegavali odgovoriti tko je i za koji iznos radio Cijepise
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
        href="https://www.telegram.hr/politika-kriminal/autor-cijepise-kojem-beros-daje-milijune-radio-prvi-web-hdz-a-uskok-zbog-njega-upao-u-hzzo/"
        target="_blank"
      >
        <img
          src="https://images.telegram.hr/b-WIxfmxfWOPtWo8KTtM9aNGbQHe1gYf60xQcXCw60c/preset:single2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDQvdmlua28tcG9ydHJldC10ZWxlZ3JhbS5qcGc.jpg"
          alt="Tko je autor propale platforme Cijepise kojem Beroš daje milijune: radio prvi web HDZ-a, USKOK zbog njega upao u HZZO"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Tko je autor propale platforme Cijepise kojem Beroš daje milijune:
            radio prvi web HDZ-a, USKOK zbog njega upao u HZZO
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

<script>
export default {
  name: 'Partner',
  async fetch() {
    await this.$axios.$get('partner-widget').then((res) => {
      this.posts = res.posts
      this.title = res.title
    })
  },
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
