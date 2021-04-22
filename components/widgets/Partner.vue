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
          src="https://www.telegram.hr/wp-content/uploads/2021/04/afera-cijepise-widget2.jpg"
          alt="Afera Cvjećarka na Telegram.hr"
        />
        <p class="full special-partner-tagline hide"></p>
      </div>
    </div>
    <div class="fourth flex-responsive column-full-pad mobile-side-pad">
      <a
        class="full flex article-standard article relative"
        href="https://www.telegram.hr/politika-kriminal/telegram-otkriva-ministarstvo-zdravstva-dalo-it-posao-od-16-milijuna-kn-tvrtki-koja-je-dosad-radila-cvjetne-aranzmane/"
        target="_blank"
      >
        <img
          src="https://images.telegram.hr/hKZUx__tzJT4V8rWL4x12Fb-Xg_5nQqUZQagpEUx1Is/preset:single2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDQvYmVyb3MtY3ZqZWNhcmthLW5hdGplY2FqLmpwZWc.jpg"
          alt="Telegram otkriva: Ministarstvo zdravstva dalo IT posao od 1,6 milijuna kuna tvrtki koja je dosad radila cvjetne aranžmane"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Telegram otkriva: Ministarstvo zdravstva dalo IT posao od 1,6
            milijuna kuna tvrtki koja je dosad radila cvjetne aranžmane
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
        href="https://www.telegram.hr/politika-kriminal/ovako-izgleda-web-stranica-firme-kojoj-je-ministarstvo-dalo-vazan-it-posao-od-16-miljuna-kuna/"
        target="_blank"
      >
        <img
          src="https://images.telegram.hr/GtbgU7syZH8ZZw_UiUL042rZzK7p-UEQQ-vkReJ0K_M/preset:single1/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDQvc2NyZWVuc2hvdC0yMDIxLTA0LTE5LWF0LTE4NTUyNy5qcGc.jpg"
          alt="Ovako izgleda web stranica firme kojoj je Ministarstvo zdravstva dalo važan IT posao od 1,6 miljuna kuna"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Ovako izgleda web stranica firme kojoj je Ministarstvo zdravstva
            dalo važan IT posao od 1,6 miljuna kuna
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
        href="https://www.telegram.hr/komentari/zasto-je-natjecaj-koji-je-trebao-dobiti-bivsi-sanaderov-ministar-najmucnija-afera-u-berosevom-mandatu/"
        target="_blank"
      >
        <img
          src="https://images.telegram.hr/kKRWgdFdiSfkk-K5em5fcVxElR7vxju_fQv29jmZ_z0/preset:single2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDQvdGVsZWdyYW0tamFzbWluLWxqdWJpY2ljLmpwZWc.jpg"
          alt="Zašto je natječaj koji je trebao dobiti bivši Sanaderov ministar najmučnija afera u Beroševom mandatu"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            Zašto je natječaj koji je trebao dobiti bivši Sanaderov ministar
            najmučnija afera u Beroševom mandatu
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
  /* async fetch() {
    await this.$axios.$get('partner-widget').then((res) => {
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
