<template>
  <div class="main-container flex pitanje-zdravlja">
    <div class="full pz-header">
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
          />
        </a>
        <nav class="full flex relative">
          <a class="animate">Sasvim iskreno</a>
          <a class="animate">Zdrave vijesti</a>
          <a class="animate">Leksikon zdravlja</a>
          <a class="animate">Rezultati istraživanja</a>
        </nav>
      </div>
    </div>
    <div class="full pz-hero center">
      <div class="container column-full-pad mobile-side-pad">
        <h1 class="full center-text" data-aos="fade-up" data-aos-delay="750">
          <span>Pitanje</span><span> zdravlja</span>
        </h1>
        <p class="full pz-intro center-text">
          Pitanje zdravlja je pitanje zdravstvene pismenosti.
        </p>
        <p class="full pz-intro center-text">
          Provodimo prvo istraživanje o zdravstvenoj pismenosti u Hrvatskoj.
        </p>
        <div class="full center column-top-pad">
          <div class="pz-button">Pogledaj rezultate</div>
        </div>
      </div>
      <a class="arrow-indicator center" href="#first-content">
        <div></div>
      </a>
    </div>
    <div class="full pz-fancy-slide relative center">
      <div class="container flex mobile-side-pad relative">
        <div class="full center column-full-pad">
          <div class="pz-fancy-line"></div>
        </div>
        <div class="full column-full-pad">
          <h2 class="full center-text">
            Što je <span class="pz-blue pz-dynamic">Pitanje zdravlja?</span>
          </h2>
          <p class="full pz-intro center-text">
            Platforma koja o zdravlju piše na kritički način.
          </p>
          <p class="full pz-intro center-text">
            Objavljujemo točne informacije.
          </p>
          <p class="full pz-intro center-text">
            Želimo pomoći u razvijanju zdravstvene pismenosti Hrvata.
          </p>
        </div>
        <div class="full center column-full-pad">
          <div class="pz-fancy-line"></div>
        </div>
      </div>
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
      <div class="container flex relative mobile-side-pad">
        <div class="full center column-full-pad">
          <div class="pz-fancy-line"></div>
        </div>
        <div class="full column-full-pad">
          <h2 class="full center-text">
            Postavite svoje
            <span class="pz-blue pz-dynamic">pitanje o zdravlju</span>
          </h2>
          <p class="full pz-intro center-text">
            Projekt pitanje zdravlja lansiran je s ciljem promocije zdravstvene
            pismenosti kod Hrvata.
          </p>
          <p class="full pz-intro center-text">
            Postavite nam svoje pitanje u vezi zdravlja, a mi ćemo ponuditi
            točan odgovor.
          </p>
          <div class="full center">
            <textarea id="pz-query"></textarea>
          </div>
          <div class="full center">
            <div class="pz-button">Pošalji pitanje</div>
          </div>
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
  </div>
</template>

<script>
export default {
  name: 'PitanjeZdravlja',
  async fetch() {
    await this.$store.dispatch('openspace/pullPosts')
    await this.$store.dispatch('category/pullPosts', {
      category: 'openspace',
    })
  },
  data() {
    return {
      loading: false,
      hasMore: true,
    }
  },
  computed: {
    featured() {
      return this.$store.state.openspace.posts
    },
    posts() {
      return this.$store.state.category.categories.openspace.posts
    },
    jsonld() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Website',
        url: 'https://www.telegram.hr/openspace',
        name: 'Openspace.hr',
        description:
          'Telegramova platforma za traženje idealnog posla, profesionalno napredovanje i karijernu inspiraciju.',
      }
    },
  },
}
</script>

<style>
.pitanje-zdravlja {
  background: linear-gradient(to top, #ededed, #fefefe);
  background-attachment: fixed;
  font-family: neuzeit-grotesk, sans-serif;
  font-weight: 300;
}
.pz-header {
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;
}
.pz-header .container {
  padding-left: 148px;
  position: relative;
}
.pz-header-badge {
  width: 84px;
  position: absolute;
  top: -36px;
  left: 24px;
}
.pz-header-logo {
  position: absolute;
  top: 45px;
  left: 26px;
  width: 37px;
}
.pz-header nav a {
  padding: 16px;
  font-size: 16px;
  opacity: 0.7;
}
.pz-header nav a:hover {
  opacity: 1;
}
.pz-hero {
  height: 100vh;
}
.pz-hero h1 {
  font-size: 90px;
  font-size: 4.5rem;
  text-transform: uppercase;
  font-family: neuzeit-grotesk, sans-serif;
  font-weight: 300;
  margin-bottom: 16px;
}
.pz-hero h1 span:first-child {
  letter-spacing: 0.18em;
  font-weight: 700;
}
.pz-hero h1 span:nth-child(2) {
  letter-spacing: 0.05em;
  color: #29abe2;
}
.pz-intro {
  font-size: 24px;
  font-size: 1.2rem;
  opacity: 0.7;
  margin-top: 16px;
}
.pz-button {
  background: linear-gradient(to bottom, #27a9e0, #0a80c5);
  color: white;
  font-size: 18px;
  font-size: 0.9rem;
  padding: 12px 48px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 36px;
}
.pitanje-zdravlja .article h2 {
  font-family: neuzeit-grotesk, sans-serif;
  font-weight: 400;
  letter-spacing: -0.02em;
  font-size: 28px;
  font-size: 1.4rem;
  line-height: 1.1em;
}
.pitanje-zdravlja .block-2 .article-featured h2 {
  font-size: 30px;
  font-size: 1.5rem;
}
.pitanje-zdravlja .article-standard h2 {
  font-size: 24px;
  font-size: 1.2rem;
}
.pitanje-zdravlja .article-big h2 {
  font-size: 40px;
  font-size: 2rem;
}
.pitanje-zdravlja .article h3.overtitle,
.pz-blue {
  color: #0a80c5;
}
.pitanje-zdravlja .article img {
  border-radius: 30px;
}
.pitanje-zdravlja .article-featured img {
  margin-bottom: 16px;
}
.pitanje-zdravlja .article-big img {
  margin-bottom: 8px;
}
.pz-dynamic {
  font-weight: 300;
}
.pitanje-zdravlja .article .article-meta {
  display: none;
}
.pz-fancy-slide h2 {
  font-size: 54px;
  font-size: 2.7rem;
  font-family: neuzeit-grotesk, sans-serif;
  font-weight: 700;
  margin-bottom: 32px;
}
.pz-fancy-slide::before {
  content: ' ';
  width: 100%;
  height: 70%;
  background-color: white;
  position: absolute;
  top: 15%;
  left: 0;
}
.pz-fancy-line {
  width: 1px;
  background-color: #27a9e0;
  height: 30vh;
}
.pz-fancy-slide textarea {
  width: 90%;
  max-width: 640px;
  height: 100px;
  margin-top: 48px;
}
.pitanje-zdravlja .arrow-indicator {
  position: absolute;
  top: 80vh;
  width: 100%;
  left: 0;
  z-index: 10;
}
.pitanje-zdravlja .arrow-indicator div {
  width: 25px;
  height: 25px;
  border-right: 5px solid #27a9e0;
  border-bottom: 5px solid #27a9e0;
  transform: rotate(45deg);
  opacity: 0;
  top: 0;
  position: relative;
  animation-name: point-down;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
.pz-widget-overtitle {
  text-transform: uppercase;
  color: #0a80c5;
}
@keyframes point-down {
  0% {
    opacity: 0;
    top: 0;
  }
  40% {
    opacity: 1;
    top: 30px;
  }
  60% {
    opacity: 1;
    top: 30px;
  }
  100% {
    opacity: 0;
    top: 60px;
  }
}
@media screen and (max-width: 1180px) {
  .pz-header nav {
    flex-wrap: nowrap;
    overflow-x: scroll;
    height: 70px;
  }
  .pz-hero h1 {
    font-size: 18vw;
  }
  .pz-fancy-slide h2 {
    font-size: 40px;
    font-size: 2rem;
    margin-bottom: 24px;
  }
  .pz-fancy-line {
    margin-top: 4vw;
    margin-bottom: 4vw;
  }
  .pz-intro {
    font-size: 20px;
    font-size: 1rem;
  }
  .pitanje-zdravlja .article h2 {
    font-size: 22px;
    font-size: 1.1rem;
  }
  .pitanje-zdravlja .article-big h2,
  .pitanje-zdravlja .article-featured h2 {
    font-size: 26px;
    font-size: 1.3rem;
  }
  .pitanje-zdravlja .article img {
    border-radius: 20px;
  }
  .pitanje-zdravlja .article-featured img {
    margin-bottom: 0px;
    margin-top: 4vw;
  }
  .pitanje-zdravlja .article h4 {
    margin-bottom: 0px;
  }
  .pitanje-zdravlja
    .intro-block
    .third:nth-child(3)
    .article-featured:first-child
    .article-pad {
    border-bottom: none;
  }
}
</style>
