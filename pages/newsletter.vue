<template>
  <div class="main-container flex">
    <div class="full flex tg-red">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="full flex newsletter-header relative center">
      <div class="background-wall flex">
        <img
          v-for="post in posts"
          :key="post.id"
          :src="post.image.url"
          :alt="post.image.alt"
          loading="lazy"
        />
      </div>
      <div class="container relative mobile-side-pad column-full-pad">
        <h1 class="full center-text">Telegram, svaki dan, u vašem inboxu</h1>
        <h2 class="full center-text">Dnevni pregled najvažnijih vijesti.</h2>
      </div>
    </div>
    <div class="full flex">
      <div class="container relative flex stretch">
        <div class="half column-full-pad mobile-side-pad flex-responsive">
          <p class="full newsletter-intro">
            Iz dana u dan, Telegramovi nagrađivani novinari, analitičari i
            istraživači donose važne i velike priče o Hrvatskoj i svijetu,
            otkrivaju krupne afere radi kojih odlaze ministri i objašnjavaju
            kontekst dnevnih događaja.
          </p>
          <p class="full newsletter-intro">
            Budite među prvima koji u inboxu primaju ključne vijesti i
            ekskluzive. Telegramov newsletter startat će kroz nekoliko tjedana.
          </p>
        </div>
        <div
          id="newsletter"
          class="half column-full-pad flex-responsive center"
        ></div>
      </div>
    </div>
    <div class="full flex">
      <div class="container flex relative native-block stretch mobile-side-pad">
        <div class="full column-horizontal-pad flex">
          <h2 class="full flex section-title">Možda će vas zanimati</h2>
        </div>
        <div
          v-for="post in posts"
          :key="post.id"
          class="fourth flex-responsive column-full-pad"
        >
          <standard :post="post"></standard>
        </div>
      </div>
      <!--<div class="container flex relative mobile-side-pad">
        <div
          class="full center subtle-btn-parent relative clickable"
          onclick="loadMore"
        >
          <div v-show="!loading" class="subtle-btn animate">Vidi više</div>
          <div v-show="!loading" class="subtle-btn-line"></div>
          <div v-show="loading" class="full center cool-loader hide">
            <div class="loader-square">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Newsletter',
  data() {
    return {
      loading: false,
      posts: [],
      page: 1,
      email: '',
      thanks: false,
    }
  },
  mounted() {
    this.loadMore()
  },
  methods: {
    loadMore() {
      this.$axios.get('featured').then((res) => {
        this.posts = res.data
      })
    },
    submit() {
      this.$axios
        .get(
          'https://script.google.com/macros/s/AKfycbyK6ZXuZMi_qpR5a2byaTLOL0vh5055Y3DRm-wBauxBOfMxYAU/exec',
          {
            params: {
              email: this.email,
            },
          }
        )
        .then(() => {
          this.thanks = true
        })
    },
  },
}
</script>

<style scoped>
.newsletter-header {
  background-color: #212121;
  color: white;
  height: 30vw;
}
.background-wall {
  opacity: 0.1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30vw;
  z-index: 1;
  overflow: hidden;
}
.background-wall img {
  width: 20%;
  height: 15vw;
  object-fit: cover;
}
.background-wall img:nth-child(3n) {
  width: 40%;
}
.newsletter-header h1 {
  font-size: 92px;
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  z-index: 5;
}
.newsletter-header h2 {
  font-family: neuzeit-grotesk, sans-serif;
  font-weight: 400;
  font-size: 30px;
  opacity: 0.7;
  position: relative;
  z-index: 5;
  margin-top: 32px;
}
.newsletter-intro {
  margin: 50px auto;
  font-size: 24px;
}
.disclaimer-text {
  opacity: 0.7;
  font-size: 14px;
  margin: 30px 0px;
  text-align: left;
}
form.widget-newsletter input[type='email'] {
  padding: 10px 5px;
  outline: none;
  border: none;
  background: none;
  border-bottom: 3px solid #ae3737;
  padding-left: 0px;
  font-size: 14px;
  font-family: 'Merriweather', serif;
}
@media screen and (min-width: 1024px) {
  form.widget-newsletter {
    padding-top: 30px;
    margin: 24px 0px;
  }
  form.widget-newsletter i {
    top: -50px;
    font-size: 60px;
    color: #ae3737;
    right: auto;
  }
}
@media screen and (max-width: 1024px) {
  .newsletter-header {
    margin-top: 76px;
  }
  .background-wall img,
  .background-wall img:nth-child(3n) {
    width: 33.33%;
    height: 30vw;
  }
  .background-wall img:nth-child(2),
  .background-wall img:nth-child(3),
  .background-wall img:nth-child(6),
  .background-wall img:nth-child(7) {
    width: 66.66%;
  }
  .newsletter-header {
    height: 120vw;
  }
  .background-wall {
    height: 120vw;
  }
  .newsletter-header h1 {
    font-size: 50px;
  }
  .newsletter-header h2 {
    font-size: 24px;
  }
  form.widget-newsletter {
    font-family: neuzeit-grotesk, sans-serif;
  }
  form.widget-newsletter i {
    margin-top: -100px;
    bottom: -25px;
  }
  form.widget-newsletter .widget-box {
    padding-bottom: 100px;
    padding-top: 25px;
  }
  form.widget-newsletter input[type='submit'] {
    outline: none;
    border: none;
  }
  form.widget-newsletter input[type='email'] {
    color: white;
    border-bottom: 3px solid white;
    font-family: neuzeit-grotesk, sans-serif;
  }
}
</style>
