<template>
  <div class="main-container flex single-article">
    <div class="full flex">
      <client-only>
        <theader
          headline="Podijelite s nama informacije koje javnost zaslužuje znati"
        ></theader>
      </client-only>
    </div>
    <div class="full flex dojava-creative tg-red">
      <div class="container relative flex mobile-side-pad">
        <div class="half flex-responsive column-full-pad">
          <h1>Podijelite s nama informacije koje javnost zaslužuje znati.</h1>
          <p>Javite nam se putem jednog od sigurnih kanala komunikacije.</p>
        </div>
        <div class="half flex-responsive column-full-pad">
          <img
            src="@/assets/img/tg_graphic_dojava.png"
            aria-hidden="true"
            class="dojava-visual"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div class="full flex">
      <div class="container relative flex stretch">
        <div class="full mobile-side-pad flex stretch">
          <p class="full column-full-pad dojave-intro">
            Pouzdana i kvalitetna dojava ključna je u otkrivanju korupcije,
            kriminala i afera koje utječu na cijelo društvo. U naše kanale za
            dojavu možete imati puno povjerenje. Za upite, priopćenja i sve što
            nisu dojave molimo da koristite adresu
            <a href="mailto:kontakt@telegram.hr">kontakt@telegram.hr</a>.
          </p>
          <div class="third flex-responsive column-full-pad flex">
            <div class="full contact-tile column-full-pad flex relative">
              <font-awesome-icon
                :icon="['fad', 'comment-dots']"
              ></font-awesome-icon>
              <h2 class="full">Signal</h2>
              <div class="noththree full contact-data">099 624 3951</div>
              <p class="full">
                Signal je aplikacija za razmjenu poruka, slika, videa i poziva
                koji su zaštićeni potpunom enkripcijom. Jedina informacija
                potrebna za slobodno korištenje aplikacije je Vaš broj mobitela
                preko kojeg šaljete dojave. Također, postoji mogućnost
                automatskog brisanja svih poruka s mobitela primatelja i
                pošiljatelja nakon nekog vremena.
              </p>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex">
            <div class="full contact-tile column-full-pad flex relative">
              <font-awesome-icon
                :icon="['fad', 'envelope-open-text']"
              ></font-awesome-icon>
              <h2 class="full">Email</h2>
              <div class="noththree full contact-data">
                <a href="mailto:dojave@telegram.hr">dojave@telegram.hr</a>
              </div>
              <p class="full">
                Našem dediciranom emailu za dojave pristup ima malen i zatvoren
                broj urednika na Telegramu. Sve primljene dojave provjeravamo i
                podatke o pošiljateljima nikad ne dijelimo ni sa kim osim,
                ukoliko je potrebno, novinarima koji će raditi na konkretnoj
                priči.
              </p>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex">
            <div class="full contact-tile column-full-pad flex relative">
              <font-awesome-icon
                :icon="['fab', 'telegram']"
              ></font-awesome-icon>
              <h2 class="full">Telegram</h2>
              <div class="noththree full contact-data">099 624 3951</div>
              <p class="full">
                Slično kao Signal, Telegram je aplikacija za sigurnu razmjenu
                poruka, slika, videa i dokumenata zaštićena potpunom
                enkripcijom. Aplikacija također ima mogućnost brisanja svih
                poruka i nestanak razgovora koji se odvio nakon određenog
                vremena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full flex">
      <div class="container flex relative native-block stretch mobile-side-pad">
        <div class="full flex relative">
          <div class="full column-horizontal-pad column-top-pad">
            <div class="full cantha-separator"></div>
          </div>
          <div class="full flex column-horizontal-pad">
            <div
              class="noththree full center-text column-horizontal-pad column-top-pad subsection-title"
            >
              Možda će vas zanimati
            </div>
          </div>
        </div>
        <div
          v-for="post in posts.slice(0, 12)"
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
  name: 'Dojave',
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
      this.$axios
        .$get('/api/featured')
        .then((data) => {
          this.posts = data
        })
        .catch(() => {
          // TODO: error logging
        })
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/dojave/',
      },
    ]
    return {
      title: 'Telegram Dojave',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Podijelite s nama informacije koje javnost zaslužuje znati.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Podijelite s nama informacije koje javnost zaslužuje znati.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Telegram Dojave',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/dojave/',
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '1383786971938581',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@TelegramHR',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow',
        },
      ],
      link,
    }
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
