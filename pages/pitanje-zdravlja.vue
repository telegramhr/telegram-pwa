<template>
  <div class="main-container flex pitanje-zdravlja pz-homepage">
    <div class="full pz-header">
      <app-link to="/" class="full center pz-subheader relative"
        ><img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo"
      /></app-link>
      <div
        class="container column-horizontal-pad mobile-side-pad flex relative"
      >
        <a class="flex pz-header-badge">
          <img
            src="@/assets/img/tgstudio_pitanjezdravlja_badge.svg"
            aria-hidden="true"
          />
          <img
            src="@/assets/img/tgstudio_pitanjezdravlja_logo_white.svg"
            class="pz-header-logo"
            alt="Pitanje zdravlja logo"
            data-aos="fade-down"
            data-aos-delay="250"
          />
        </a>
        <nav class="full flex relative">
          <a class="animate" data-aos="fade-down" data-aos-delay="500"
            >Sasvim iskreno</a
          >
          <a class="animate" data-aos="fade-down" data-aos-delay="750"
            >Zdrave vijesti</a
          >
          <a class="animate" data-aos="fade-down" data-aos-delay="1000"
            >Leksikon zdravlja</a
          >
          <a class="animate" data-aos="fade-down" data-aos-delay="1250"
            >Rezultati istraživanja</a
          >
        </nav>
      </div>
    </div>
    <div class="full pz-hero center relative">
      <div class="container column-full-pad mobile-side-pad">
        <h1 class="full center-text">
          <span data-aos="fade-up" data-aos-delay="750">Pitanje</span
          ><span data-aos="fade-down" data-aos-delay="1500"> zdravlja</span>
        </h1>
        <p
          class="full pz-intro center-text"
          data-aos="fade-up"
          data-aos-delay="1750"
        >
          I točni odgovori.
        </p>
        <p
          class="full pz-intro center-text"
          data-aos="fade-up"
          data-aos-delay="2000"
        >
          Kritički progovaramo o zdravstvenim temama.
        </p>
        <div
          class="full center column-top-pad hide"
          data-aos="fade-up"
          data-aos-delay="2250"
        >
          <div class="pz-button">Pogledaj rezultate</div>
        </div>
      </div>
      <a class="arrow-indicator center" href="#first-content">
        <div></div>
      </a>
    </div>
    <div v-if="featured.length" class="full relative">
      <div
        id="first-content"
        class="container flex relative stretch standard-block intro-block"
      >
        <div
          class="full flex column-horizontal-pad column-top-pad mobile-side-pad"
        >
          <div class="full flex article-big column-bottom-border">
            <featured :key="featured[0].id" :post="featured[0]"></featured>
          </div>
        </div>
        <div class="full flex mobile-side-pad stretch">
          <div
            v-for="post in featured.slice(1, 4)"
            :key="post.id"
            class="third flex-responsive column-vertical-pad stretch"
          >
            <div class="full flex column-horizontal-pad">
              <featured :post="post"></featured>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full pz-fancy-slide relative center">
      <div class="container flex mobile-side-pad relative">
        <div class="full center column-full-pad">
          <div class="pz-fancy-line"></div>
        </div>
        <div class="full column-full-pad">
          <h2
            class="full center-text"
            data-aos="fade-down"
            data-aos-delay="750"
          >
            Što je <span class="pz-blue pz-dynamic">Pitanje zdravlja?</span>
          </h2>
          <p
            class="full pz-intro center-text"
            data-aos="fade-up"
            data-aos-delay="1250"
          >
            Platforma koja pomaže u razvoju zdravstvene pismenosti građana.
          </p>
        </div>
        <div class="full center column-full-pad">
          <div class="pz-fancy-line"></div>
        </div>
      </div>
    </div>
    <div v-if="featured.length" class="full relative">
      <div class="container flex relative block-2 standard-block stretch">
        <section
          class="
            fourth
            flex flex-responsive
            column-horizontal-pad
            mobile-side-pad
          "
        >
          <div class="full flex desktop-only">
            <h3 class="full flex overtitle pz-widget-overtitle">Teme</h3>
          </div>
          <a class="full center pz-special-tile">
            <h2 class="full center-text">Zdravlje prostate</h2>
          </a>
          <a class="full center pz-special-tile">
            <h2 class="full center-text">Moždani udar</h2>
          </a>
          <a class="full center pz-special-tile">
            <h2 class="full center-text">Imunitet</h2>
          </a>
        </section>
        <div class="three-fourths flex-responsive flex">
          <section
            class="
              two-thirds
              flex-responsive flex
              mobile-side-pad
              column-horizontal-pad column-right-border column-left-border
            "
          >
            <featured :key="featured[4].id" :post="featured[4]"></featured>
            <featured :key="featured[5].id" :post="featured[5]"></featured>
          </section>
          <section
            class="
              third
              flex-responsive flex
              mobile-side-pad
              column-horizontal-pad
            "
          >
            <template v-for="post in featured.slice(6, 9)">
              <medium :key="post.id" :post="post"></medium>
            </template>
          </section>
        </div>
      </div>
    </div>
    <div class="full pz-fancy-slide relative center">
      <div class="container flex relative mobile-side-pad">
        <div class="full center column-full-pad">
          <div class="pz-fancy-line"></div>
        </div>
        <div class="full column-full-pad">
          <h2
            class="full center-text"
            data-aos="fade-down"
            data-aos-delay="750"
          >
            Vaše
            <span class="pz-blue pz-dynamic">pitanje zdravlja</span>
          </h2>
          <p
            class="full pz-intro center-text"
            data-aos="fade-up"
            data-aos-delay="1250"
          >
            Napišite koja zdravstvena tema vas zanima, istražit ćemo je i
            ponuditi točne odgovore.
          </p>
          <div class="full center" data-aos="fade-up" data-aos-delay="2000">
            <textarea id="pz-query"></textarea>
          </div>
          <div class="full center" data-aos="fade-up" data-aos-delay="2000">
            <div class="pz-button">Pošalji pitanje</div>
          </div>
        </div>
        <div class="full center column-full-pad">
          <div class="pz-fancy-line"></div>
        </div>
      </div>
    </div>
    <div class="full native-signature">
      <div class="container flex mobile-side-pad">
        <h2
          class="full center-text pz-fancy-title"
          data-aos="fade-down"
          data-aos-delay="750"
        >
          Pitanje zdravlja
          <span class="pz-blue pz-dynamic">podržavaju</span>
        </h2>
        <div class="full center pz-logos">
          <img
            src="https://www.telegram.hr/wp-content/uploads/2021/11/logo-kuz-120x96-1.jpg"
            alt="Savez udruga u zdravstvu logo"
          />
          <img
            src="https://www.telegram.hr/wp-content/uploads/2021/11/logo.png"
            alt="Sve za nju logo"
          />
        </div>
        <div class="full center">
          <img
            class="tg-studio"
            src="@/assets/img/tg_studio.png"
            alt="TG Studio logo"
          />
        </div>
        <p class="full center-text column-full-pad">
          Producirano u radionici TG Studija, Telegramove in-house agencije za
          nativni marketing, u suradnji s partnerima i po najvišim uredničkim
          standardima Telegram Media Grupe.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'PitanjeZdravlja',
  async fetch() {
    await this.$store.dispatch('zdravlje/pullPosts')
    /* await this.$store.dispatch('category/pullPosts', {
      category: 'pitanje-zdravlja',
    }) */
  },
  data() {
    return {
      loading: false,
      hasMore: true,
    }
  },
  computed: {
    featured() {
      return this.$store.state.zdravlje.posts
    },
    posts() {
      return this.$store.state.category.categories['pitanje-zdravlja'].posts
    },
    jsonld() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Website',
        url: 'https://www.telegram.hr/openspace',
        name: 'Pitanje zdravlja',
        description: 'Telegramova platforma za zdraviji život',
      }
    },
  },
  mounted() {
    AOS.init({
      duration: 1000,
      delay: 250,
    })
  },
}
</script>
