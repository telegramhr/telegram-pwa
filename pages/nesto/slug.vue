<template>
  <div
    :class="[
      'main-container',
      'flex',
      'single-article',
      'openspace',
      typeClass,
    ]"
  >
    <client-only>
      <theader
        :id="post.id"
        :headline="post.portal_title"
        :side-menu-show="showSideMenu"
        :search-menu-show="showSearchMenu"
      ></theader>
    </client-only>
    <div v-if="related_posts" class="full related-header-widget">
      <div class="container flex desktop-only column-vertical-pad">
        <div v-for="rpost in related_posts" :key="rpost.id" class="third flex">
          <div class="full flex column-horizontal-pad">
            <standard :post="rpost"></standard>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="
        !mobile &&
        ($route.name === 'category-slug' || $route.name === 'nesto-slug')
      "
      class="full center header-billboard"
    >
      <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
      <div v-if="!mobile" class="container wallpaper-banners animate">
        <div class="wallpaper-left">
          <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
        </div>
        <div class="wallpaper-right">
          <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
        </div>
      </div>
    </div>
    <div
      v-if="post.type === 'premium'"
      class="full premium-article-head relative"
    >
      <div v-if="post.image.author" class="meta-foto">
        FOTO: {{ post.image.author }}
      </div>
      <div class="mobile-only full center mobile-pa-nav relative flex">
        <a @click.prevent="showSideMenu = !showSideMenu">
          <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon
        ></a>
        <nuxt-link to="/" class="logo">
          <img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo" />
        </nuxt-link>
        <a @click.prevent="showSearchMenu = !showSearchMenu">
          <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon>
        </a>
      </div>
      <img
        class="article-head-image"
        :src="post.image.full"
        :alt="post.image.alt"
      />
      <div class="full flex article-head">
        <div class="full flex overtitle-parent">
          <h3 class="overtitle">Tvrtke i karijere</h3>
          <div v-if="post.promo.partner" class="collab-overtitle">
            <h3 class="overtitle">U suradnji s</h3>
            <img :src="post.promo.logo" :alt="post.promo.partner" />
          </div>
        </div>
        <h1 class="full">{{ post.portal_title }}</h1>
        <h2 class="full">{{ post.subtitle }}</h2>
      </div>
    </div>
    <div class="full relative">
      <div class="full flex">
        <article
          class="container column-full-pad flex relative mobile-side-pad"
        >
          <div class="full column article-head column-top-pad flex">
            <div class="full flex overtitle-parent">
              <h3 class="overtitle">Tvrtke i karijere</h3>
              <div v-if="post.promo.partner" class="collab-overtitle">
                <h3 class="overtitle">U suradnji s</h3>
                <img :src="post.promo.logo" :alt="post.promo.partner" />
              </div>
            </div>
            <h1 class="full">{{ post.title }}</h1>
            <h2 class="full">
              {{ post.subtitle }}
            </h2>
            <h5 class="full flex relative article-meta mobile-only">
              <template v-if="post.promo.partner">
                <a href="#" class="meta-author flex">
                  <img
                    v-if="!post.promo.signature_logo_off"
                    :src="post.promo.logo"
                  />
                  <span>U suradnji s</span>
                  <span>{{ post.promo.partner }}</span>
                </a>
              </template>
              <template v-else>
                <nuxt-link
                  v-for="author in post.authors"
                  :key="author.name"
                  :to="author.url"
                  class="meta-author flex"
                  ><img
                    v-if="author.image"
                    :src="author.image"
                    :alt="author.name"
                  />
                  <span>Piše</span><span>{{ author.name }}</span></nuxt-link
                >
              </template>
            </h5>
            <div class="full flex article-head-image-parent relative">
              <img
                class="article-head-image"
                :srcset="srcset"
                :src="post.image.url"
                :alt="post.image.alt"
              />
              <div v-if="post.image.author" class="meta-foto">
                FOTO: {{ post.image.author }}
              </div>
            </div>
            <p v-if="post.perex" class="perex">
              {{ post.perex }}
            </p>
            <h5 class="full flex relative article-meta">
              <template v-if="post.promo.partner">
                <a href="#" class="meta-author flex desktop-only">
                  <img :src="post.promo.logo" />
                  <span>U suradnji s</span>
                  <span>{{ post.promo.partner }}</span>
                </a>
              </template>
              <template v-else>
                <nuxt-link
                  v-for="author in post.authors"
                  :key="author.name"
                  :to="author.url"
                  class="meta-author flex desktop-only"
                  ><img
                    v-if="author.image"
                    :src="author.image"
                    :alt="author.name"
                  /><span>Piše</span><span>{{ author.name }}</span></nuxt-link
                >
              </template>
              <span class="meta-date">{{ post.time | parseTime }}</span>
              <span v-if="post.recommendations" class="meta-preporuke"
                >{{ post.recommendations }} preporuka</span
              >
              <div class="sidebar-social flex">
                <a href="#" @click.prevent="fbShare"
                  ><font-awesome-icon
                    :icon="['fab', 'facebook-f']"
                    class="animate"
                  ></font-awesome-icon
                ></a>
                <a
                  :href="
                    'https://twitter.com/intent/tweet?counturl=' +
                    encodeURI(post.social.path) +
                    '&text=' +
                    encodeURI(post.portal_title) +
                    '&url=' +
                    encodeURI(post.social.path) +
                    '&via=TelegramHR'
                  "
                  target="_blank"
                  ><font-awesome-icon
                    :icon="['fab', 'twitter']"
                    class="animate"
                  ></font-awesome-icon
                ></a>
                <!--<a href="#"><i class="fab fa-instagram animate"></i></a>-->
              </div>
            </h5>
          </div>
          <div class="full relative single-article-body">
            <div id="article-content" @click="handleClick">
              <p>
                Ove godine je, ako do sada nije bilo to jasno, postalo jasno
                koliko su digitalni komunikacijski kanali bitni. Ne samo rad,
                već i cijelu našu svakodnevicu morali smo na neki način
                prilagoditi novim uvjetima života. Upravo zbog toga su
                zaposlenici Hrvatskog Telekoma uložili velike napore kako bi
                njihovi korisnici, privatni i poslovni, mogli nesmetano
                funkcionirati i biti povezani. Kako nam priča Ivan Bartulović,
                član Uprave za ljudske potencijale, Hrvatski Telekom je svoje
                zaposlenike ove godine odlučio posebno nagraditi.
              </p>
              <style>
                .premium-fade-out {
                  display: none;
                }
              </style>
              <p>I should be invisible!</p>
              <div class="full flex stretch relative inarticle-table">
                <h2 class="full">Priča u koracima</h2>
                <ul class="full">
                  <li>
                    <a class="animate" href="#article-subtitle-1"
                      >Nagrađuju svoje zaposlenike</a
                    >
                  </li>
                  <li>
                    <a class="animate" href="#article-subtitle-2"
                      >Rad od kuće je bila svijetla točka</a
                    >
                  </li>
                  <li>
                    <a class="animate" href="#article-subtitle-3"
                      >Zaposlenici nisu 15 godina bili toliko zadovoljni</a
                    >
                  </li>
                  <li>
                    <a class="animate" href="#article-subtitle-4"
                      >Produktivnost je porasla</a
                    >
                  </li>
                  <li>
                    <a class="animate" href="#article-subtitle-5"
                      >Digitalna komunikacija postala je standard</a
                    >
                  </li>
                </ul>
              </div>
              <intext></intext>
              <!--<div id="piano-content" style="display: none">-->
              <h2 id="article-subtitle-1">Nagrađuju svoje zaposlenike</h2>
              <p>
                Stoga su u HT-u zaključili da je ova godina idealna prilika da
                zaposlenicima na razne načine zahvale za njihov rad i angažman.
                Premda se u ovom božićnom periodu ne mogu okupiti uživo i
                družiti, Hrvatski Telekom je odlučio zaposlenicima pokazati
                koliko su važan dio uspjeha kompanije, ne samo poslovnog.
                “Ponosni smo i što su iskazali želju i za privatnim angažmanom u
                nacionalnom programu digitalnog opismenjavanja starijeg
                stanovništva kojeg smo pokrenuli u suradnji s Volonterskim
                centrom Zagreb, a u sklopu kojeg će kao volonteri imati važnu
                ulogu”, priča Bartulović.
              </p>
              <p>
                Hrvatski Telekom je tako ove godine svojim zaposlenicima
                isplatio božićnicu u iznosu od 1.250 kuna, a kao priznanje za
                poseban angažman u vrijeme korone, svi zaposlenici dobili su i
                dodatnu naknadu u iznosu od 3.750 kuna. “U prosincu su naši
                zaposlenici već dobili i prigodni dar za djecu u iznosu od 600
                kuna, odnosno 3.000 kuna bruto za djecu obitelji s četvero i
                više djece te djecu s poteškoćama u razvoju”, nastavlja
                Bartulović.
              </p>
              <p>
                “Uz sve ovo, važno nam je i da u ovim neobičnim vremenima barem
                donekle donesemo i dio božićne atmosfere među naše zaposlenike.
                Tako smo, dodatno, organizirali i prigodne aktivnosti i darove –
                online predstavu i slatke poklone za svu djecu zaposlenika,
                prigodni božićni dar za sve zaposlenike te četverodijelni online
                serijal adventskih radionica na temu spremanja božićnog obroka,
                božićnog ukrašavanja, malo prijeko potrebnog humora i
                inspirativnih priča”, dodaje Bartulović.
              </p>
              <h2 id="article-subtitle-2">
                Rad od kuće je bila svijetla točka
              </h2>
              <p>
                Zaposlenici HT-a još od sredine ožujka rade od kuće, a u svibnju
                smo s Bartulovićem
                <a
                  href="https://www.telegram.hr/biznis-tech/kako-se-hrvatski-telekom-s-preko-5000-zaposlenika-u-manje-od-deset-dana-prebacio-na-rad-od-kuce/"
                  >pričali</a
                >
                o tome kako je bilo prebaciti 5000 zaposlenika na rad od kuće.
                Bartulović je tada bio zadovoljan što su uspješno izveli takav
                golemi podvig, a kako nam sada priča, zadovoljni su i
                zaposlenici.
              </p>
              <div id="midasWidget__r49"></div>
              <p>
                “Sudeći po našim internim istraživanjima, rekao bih da je remote
                work zapravo jedna od najsvjetlijih točaka kad govorimo o radu
                tijekom korona krize. S time da je u našem slučaju, tijekom
                lockdowna, remote work ugrađen u naš novi poslovni model
                SmartWork. Riječ je o hibridnom operativnom modelu koji se
                donedavno smatrao nemogućim, a koji u sebi integrira najbolje od
                oba svijeta – pogodnosti rada u uredu i rada od kuće. Stoga su
                naši zaposlenici odlično reagirali na ovaj model, prepoznajući u
                njemu našu brigu za njihovo zdravlje i dobrobit”, kaže.
              </p>
              <h2 id="article-subtitle-3">
                Zaposlenici nisu 15 godina bili toliko zadovoljni
              </h2>
              <p>
                Zanimljivo je također što je uslijed stanja straha i
                neizvjesnosti, a kod nekih zaposlenika i šoka, koji je vladao u
                prvoj polovici godine, Hrvatski Telekom zabilježio najveće
                zadovoljstvo zaposlenika u posljednjih 15 godina. U sklopu
                istraživanja na 4000 zaposlenika u svibnju ove godine,
                zaposlenici su isticali kako su jako zadovoljni što im je
                omogućen rad od kuće, a 82 posto istaknulo je da im je
                produktivnost jednaka ili veća dok rade od kuće.
              </p>
              <p>
                “Dakle, rekao bih da ovi podaci potvrđuju kako kvalitetne
                organizacije pokazuju svoju pravu vrijednost onda kad je
                najpotrebnije. I na kraju, moram istaknuti kako SmartWork model
                nećemo vezati samo uz krizna razdoblja, već ćemo zasigurno
                nastaviti s takvom praksom i dalje”, kaže Bartulović. Za kraj,
                Bartulović dodaje kako su nedavna istraživanja pokazala i veliki
                rast zadovoljstva korisnika, ponajbolji ikad, a u tom duhu će
                nastaviti i u 2021. godini.
              </p>
              <div class="banner-intext center intext">
                <div class="full flex">
                  <div
                    class="full center banner-separator relative mobile-only"
                  >
                    <div><span>Članak se nastavlja ispod oglasa</span></div>
                  </div>
                  <div class="full center">
                    <div id="telegram_desktop_intext_v3" class="banner-slot">
                      <script>
                        window.googletag = window.googletag || {}
                        window.googletag.cmd = window.googletag.cmd || []
                        window.googletag.cmd.push(function () {
                          const ds = window.googletag.defineSlot(
                            '/1092744/telegram/telegram_desktop_intext_v3',
                            [
                              [300, 250],
                              [660, 350],
                              [710, 350],
                              [320, 480],
                            ],
                            'telegram_desktop_intext_v3'
                          )
                          ds.addService(googletag.pubads())
                          ds.setTargeting('upc', 12)
                        })
                      </script>
                    </div>
                  </div>
                  <div
                    class="full center banner-separator relative mobile-only"
                  ></div>
                </div>
              </div>
              <!--</div>-->
            </div>
            <!-- Article footer -->
            <div
              class="full relative single-article-footer flex column-top-pad"
            >
              <div class="half flex-responsive article-tags">
                <nuxt-link
                  v-for="tag in post.tags"
                  :key="tag.slug"
                  :to="'/tema/' + tag.slug"
                  >{{ tag.name }},
                </nuxt-link>
              </div>
              <div class="half flex-responsive">
                <div class="flex float-right social-circle-buttons">
                  <a href="#" class="animate center" @click.prevent="fbShare">
                    <font-awesome-icon
                      :icon="['fab', 'facebook-f']"
                    ></font-awesome-icon
                  ></a>
                  <a
                    :href="
                      'https://twitter.com/intent/tweet?counturl=' +
                      encodeURI(post.social.path) +
                      '&text=' +
                      encodeURI(post.portal_title) +
                      '&url=' +
                      encodeURI(post.social.path) +
                      '&via=TelegramHR'
                    "
                    target="_blank"
                    class="animate center"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'twitter']"
                    ></font-awesome-icon
                  ></a>
                  <!-- <a href="#" class="animate center"
                    ><i class="fab fa-instagram"></i
                  ></a>-->
                  <div
                    v-if="!post.comments_off"
                    class="classic-btn clickable animate"
                    @click="comments = !comments"
                  >
                    {{ post.comments }}
                    {{ post.comments === 1 ? 'komentar' : 'komentara' }}
                  </div>
                </div>
              </div>
              <div v-if="!post.comments_off" v-show="comments" class="full">
                <div
                  v-show="comments"
                  class="fb-comments"
                  :data-href="post.social.path"
                  data-width="100%"
                  data-numposts="5"
                  data-lazy="true"
                  data-colorscheme="dark"
                ></div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <!--<div class="full flex">
          <partner></partner>
        </div>-->
      <div class="full flex">
        <div
          class="container flex relative native-block stretch mobile-side-pad"
        >
          <div id="midasWidget__657"></div>
        </div>
      </div>
      <keep-reading
        v-if="post.category_slug && post.category_slug !== 'promo'"
        :category="post.category_slug"
        :p="post.id"
      ></keep-reading>
    </div>
    <ticker></ticker>
    <osfooter></osfooter>
  </div>
</template>

<script>
export default {
  name: 'Slug',
  data() {
    return {
      comments: false,
      mobile: true,
      showSideMenu: false,
      showSearchMenu: false,
      post: {
        id: 1028664,
        comments_off: false,
        type: '',
        image: {
          url:
            'https://images.telegram.hr/nJ4pWuHi0fEcQfzBfxRlJfN_79KCZyj6WmUMN05CVYc/preset:single2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTIvYmFydHVsb3ZpYy1pdmFuMi5qcGc.jpg',
          alt: 'alt-text',
          author: 'Vjeko',
        },
        authors: [
          {
            url: 'https://www.telegram.hr/autor/ivan-luzar/',
            name: 'Ivan Luzar',
            image:
              'https://images.telegram.hr/Op9RF6L17oWBU4ZUybAyJGwn7sOVaRU8Jq80Y5Ahk90/preset:author/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDUvdGctbHV6YXIucG5n.png',
          },
        ],
        overtitle: '',
        title:
          'Kako je HT nagradio napore svojih zaposlenika ovog Božića usred pandemije koronavirusa',
        subtitle:
          'Član Uprave za ljudske potencijale HT-a nam je pojasnio kako nagrađuju svoje zaposlenike',
        content: '',
        recommendations: 100,
        comments: 2,
        time: 0,
        tags: [],
        social: {
          title: '',
          description: '',
          image: '',
          width: '',
          height: '',
        },
        disable_ads: '',
        promo: {
          signature_logo_off: false,
          partner: '',
        },
      },
      related_posts: [],
      midas: false,
    }
  },
  computed: {
    jsonld() {
      const images = [this.post.image.url]
      if (this.post.image.url2) {
        images.push(this.post.image.url2)
      }
      if (this.post.image.url3) {
        images.push(this.post.image.url3)
      }
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: this.post.title,
          mainEntityOfPage: this.post.social.path,
          datePublished: new Date(this.post.time).toISOString(),
          image: images,
          publisher: {
            '@type': 'Organization',
            name: 'Telegram.hr',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.telegram.hr/tg_neue_favicon.png',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: this.post.category,
              item: 'https://www.telegram.hr/' + this.$route.params.category,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: this.post.title,
              item: this.post.social.path,
            },
          ],
        },
      ]
    },
    typeClass() {
      switch (this.post.type) {
        case 'premium':
          return 'single-article-premium single-article-premium-alt'
        case 'commentary':
          return 'single-article-commentary'
        default:
          return ''
      }
    },
    srcset() {
      let set = `${this.post.image.url}`
      if (this.post.image.url2) {
        set += `, ${this.post.image.url2} 2x`
      }
      if (this.post.image.url3) {
        set += `, ${this.post.image.url3} 3x`
      }
      return set
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.resize()
      this.getPost()
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const walls = document.getElementsByClassName('wallpaper-banners')
      const bill =
        document
          .getElementById('telegram_desktop_billboard_v1')
          .getBoundingClientRect().top - 10
      if (bill < 0) {
        walls.forEach((item) => {
          item.classList.add('sticky-single-wallpaper')
        })
      } else {
        walls.forEach((item) => {
          item.classList.remove('sticky-single-wallpaper')
        })
      }
    },
    loadAds() {
      this.$store.dispatch('ads/initAds', {
        route: this.$route,
        options: this.post.disable_ads,
        tags: this.post.tags,
      })
      if (
        !this.post.disable_ads &&
        !this.post.disable_ads.includes('all') &&
        !this.post.disable_ads.includes('nepromo')
      ) {
        this.loadMox()
      }
      if (
        !this.post.disable_ads.includes('all') &&
        !this.post.disable_ads.includes('midas') &&
        !this.post.disable_ads.includes('nepromo')
      ) {
        this.loadMidas()
      }
    },
    loadMidas() {
      const container = document.getElementById('midasWidget__657')
      const intext = document.getElementById('midasWidget__r49')
      let widget = '2?portalWidgetId=657'
      if (intext) {
        widget += '&portalRuleId=49'
      }
      const scriptTag = document.createElement('script')
      scriptTag.src =
        'https://www.midas-network.com/ScriptsControllerRule/midas-phrygia-1.min.js'
      scriptTag.async = true
      scriptTag.id = 'midas-phrygia'
      scriptTag.setAttribute('data-widget', widget)
      container.parentNode.insertBefore(scriptTag, container)
    },
    loadMox() {
      const container = document.querySelectorAll(
        '[data-id=_mwayss-325b7d752b361c5458420729057fe2ff]'
      )[0]
      if (container) {
        container.setAttribute(
          'id',
          container.getAttribute('data-id') + new Date().getTime()
        )
        container.removeAttribute('data-id')
        const scriptTag = document.createElement('script')
        scriptTag.src =
          'https://ad.mox.tv/mox/mwayss_invocation.min.js?pzoneid=5182&height=405&width=720&tld=telegram.hr&ctype=div'
        container.parentNode.insertBefore(scriptTag, container)
      }
    },
    loadPiano() {
      const tp = window.tp || []
      if (this.post.tags.length) {
        tp.push([
          'setTags',
          this.post.tags.map((tag) => {
            return tag.slug
          }),
        ])
      }
      tp.push([
        'setContentCreated',
        new Date(this.post.time * 1000).toISOString(),
      ])
      tp.push(['setContentSection', this.post.category])
      tp.push(['setContentAuthor', this.post.authors[0].name])
      tp.push(['setContentIsNative', this.post.post_type === 'partneri'])
    },
    resize() {
      this.mobile = window.innerWidth < 1024
    },
    getPost() {
      if (this.post && this.post.id) {
        this.loadAds()
        if (typeof FB !== 'undefined') {
          FB.XFBML.parse()
        }
        if (typeof twttr !== 'undefined') {
          /* global twttr */
          twttr.widgets.load(document.getElementById('article-content'))
        }
        if (typeof instgrm !== 'undefined') {
          /* global instgrm */
          instgrm.Embeds.process()
        }
        const images = [
          ...document
            .getElementById('article-content')
            .getElementsByTagName('img'),
        ]
        images.forEach((image) => {
          if (image.width < image.height) {
            image.classList.remove('size-full')
          }
        })
        this.$axios.get('/api/related/' + this.post.id).then((res) => {
          this.related_posts = res.data
            .filter((item) => {
              return item.id !== this.post.id
            })
            .splice(0, 3)
        })
      } else {
        setTimeout(this.getPost, 500)
      }
    },
    fbShare() {
      /* global FB */
      FB.ui(
        { method: 'share', href: this.post.social.path },
        function (response) {}
      )
    },
    handleClick(event) {
      // ensure we use the link, in case the click has been received by a subelement
      let { target } = event
      while (target && target.tagName !== 'A') target = target.parentNode
      // handle only links that occur inside the component and do not reference external resources
      if (
        target &&
        target.matches("#article-content a([href*='://www.telegram.hr'])") &&
        target.href
      ) {
        // some sanity checks taken from vue-router:
        // https://github.com/vuejs/vue-router/blob/dev/src/components/link.js#L106
        const {
          altKey,
          ctrlKey,
          metaKey,
          shiftKey,
          button,
          defaultPrevented,
        } = event
        // don't handle with control keys
        if (metaKey || altKey || ctrlKey || shiftKey) return
        // don't handle when preventDefault called
        if (defaultPrevented) return
        // don't handle right clicks
        if (button !== undefined && button !== 0) return
        // don't handle if `target="_blank"`
        if (target && target.getAttribute) {
          const linkTarget = target.getAttribute('target')
          if (/\b_blank\b/i.test(linkTarget)) return
        }
        // don't handle same page links/anchors
        const url = new URL(target.href)
        const to = url.pathname
        if (window.location.pathname !== to && event.preventDefault) {
          event.preventDefault()
          this.$router.push(to)
        }
      }
    },
  },
  head() {
    const amp = {
      hid: 'amphtml',
      rel: 'amphtml',
      href: this.post.social.path + 'amp',
    }
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: this.post.social.path,
      },
    ]
    if (this.$route.params.category !== 'partneri') {
      link.push(amp)
    }
    let font, theme
    if (process.server) {
      font = this.$cookies.get('tmg_font')
      theme = this.$cookies.get('tmg_theme')
    } else {
      font = this.$store.state.theme.font
      theme = this.$store.state.theme.theme
    }
    return {
      htmlAttrs: {
        class: [
          font === 'small' ? 'small-fontsize' : '',
          font === 'large' ? 'large-fontsize' : '',
        ],
      },
      bodyAttrs: {
        class: [
          theme === 'contrast' ? 'contrast-mode' : '',
          theme === 'dark' ? 'dark-mode' : '',
        ],
      },
      title: this.post.title,
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.social.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.post.social.description,
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.post.social.title,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: this.post.social.image,
        },
        {
          hid: 'og:image:width',
          name: 'og:image:width',
          property: 'og:image:width',
          content: this.post.social.width,
        },
        {
          hid: 'og:image:height',
          name: 'og:image:height',
          property: 'og:image:height',
          content: this.post.social.height,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: this.post.social.path,
        },
        {
          hid: 'fb:app_id',
          name: 'fb:app_id',
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
          hid: 'twitter:widgets:theme',
          name: 'twitter:widgets:theme',
          content: this.$store.state.theme.theme === 'dark' ? 'dark' : 'light',
        },
      ],
      script: [
        {
          vmid: 'instagram',
          hid: 'instagram',
          src:
            'https://www.instagram.com/static/bundles/metro/EmbedSDK.js/33cd2c5d5d59.js',
        },
        {
          vmid: 'twitter',
          hid: 'twitter',
          src: 'https://platform.twitter.com/widgets.js',
          async: true,
          defer: true,
        },
        {
          vmid: 'schema-ld',
          hid: 'schema-ld',
          type: 'application/ld+json',
          json: this.jsonld,
        },
      ],
      link,
    }
  },
}
</script>
