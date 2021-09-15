<template>
  <div :class="['main-container', 'flex', 'single-article', typeClass]">
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
          <h3 class="overtitle">{{ post.category }}</h3>
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
              <h3 class="overtitle">{{ post.category | parseCat }}</h3>
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
                Stečajnog upravitelja <strong>Branka Petanjeka</strong>, koji je
                nedavno uhićen sa sucem Trgovačkog suda
                <strong>Mihaelom Kovačićem</strong>, USKOK istražuje zbog
                <a
                  href="https://www.telegram.hr/politika-kriminal/policija-i-uskok-upali-na-trgovacki-sud-stecajni-sudac-i-upravitelji-ostetili-ljude-za-30-milijuna-kuna/"
                  >stečajnog kriminala</a
                >
                teškog oko 30 milijuna kuna. Neki njegovi sumnjivi potezi sežu
                još u 2009. kada je bio stečajni upravitelj u Željezari Sisak.
                Iz nje je, prema sumnjama USKOK-a, izvučeno gotovo 12 milijuna
                kuna. Istražitelji Petanjeka povezuju i s izvlačenjem novca iz
                tvrtki Herbos, Slavijatrans i TVIM čije je stečajeve također
                vodio.
              </p>
              <div class="banner-intext center intext article-full-width">
                <div id="telegram_desktop_intext_v1" class="banner-slot">
                  <script>
                    window.googletag = window.googletag || {}
                    window.googletag.cmd = window.googletag.cmd || []
                    window.googletag.cmd.push(function () {})
                  </script>
                </div>
              </div>

              <p class="premium-fade-out">
                Teške optužbe na račun stečajnog upravitelja Petanjeka iznosi i
                načelnik općine Marija Bistrica
                <strong>Josip Milički</strong>. Sprema se protiv Petanjeka
                pokrenuti i kazneni postupak, jer je, tvrdi, uništio imovinu
                nekadašnje Tehnomehanike u Mariji Bistrici u kojoj je općina
                planirala, nakon što su nekretnine te tvrtke prodane u stečaju,
                otvoriti poduzetničku zonu.
              </p>
              <intext></intext>
              <div id="piano-content1">
                <h2>Stečaj moćne tvrtke u Mariji Bistrici</h2>
                <p>
                  Sve je počelo prije desetak godina kada je Tehnomehanika, koja
                  se bavila proizvodnjom vatrogasnih vozila, otišla u stečaj.
                  Jedna od firmi koja je preuzela najveći dio njezine imovine
                  bio je Petrakom. Naknadno je i ta firma, prema dostupnim
                  podacima, završila u stečaju.
                </p>
                <div id="fb-root"></div>
                <p>
                  <script
                    async="1"
                    defer="1"
                    crossorigin="anonymous"
                    src="https://connect.facebook.net/de_DE/sdk.js#xfbml=1&amp;version=v12.0"
                    nonce="iRKOeNOA"
                  ></script>
                </p>
                <div
                  class="fb-video"
                  data-href="https://www.facebook.com/www.telegram.hr/videos/578688859927568/?__tn__=%2CO"
                  data-width="710"
                >
                  <blockquote
                    cite="https://www.facebook.com/www.telegram.hr/videos/578688859927568/"
                    class="fb-xfbml-parse-ignore"
                  >
                    <p>
                      <a
                        href="https://www.facebook.com/www.telegram.hr/videos/578688859927568/"
                        >Umjetnik Danijel Hrg pokazao nam je zašto voli svoj
                        Šibenik</a
                      >
                    </p>
                    <p>
                      Zaljubili smo se u Šibenik! 😊 Ovo je drugi video našeg
                      putopisnog serijala &quot;Moje mjesto tvoja
                      destinacija&quot;. Više o serijalu pročitajte ovdje:
                      https://bit.ly/moje-mjesto-tvoja-destinacijaSadržaj
                      podržavaju Podravka i Auto Benussi
                    </p>
                    <p>
                      Posted by
                      <a href="https://www.facebook.com/688325737947866"
                        >Telegram.hr</a
                      >
                      on Wednesday, September 1, 2021
                    </p>
                  </blockquote>
                </div>
                <p>
                  Za stečajnog upravitelja postavljen je upravo Branko Petanjek.
                  “Došao je k nama u općinu. Bio je vrlo ljubazan. Rekao nam je
                  da mu je poslodavac država i da će sve dobro proći. Objasnio
                  nam je da po nalogu države mora namiriti vjerovnike”, prisjeća
                  se Milički uglađenog stečajnog upravitelja protiv kojeg sada
                  priprema kaznenu prijavu.
                </p>
                <div class="banner-intext center intext">
                  <div id="telegram_desktop_intext_v2" class="banner-slot">
                    <script>
                      window.googletag = window.googletag || {}
                      window.googletag.cmd = window.googletag.cmd || []
                      window.googletag.cmd.push(function () {})
                    </script>
                  </div>
                </div>
                <h2>Rasprodaja imovine stečajnog dužnika</h2>
                <p>
                  Strojevi iz bivše Tehnomehanike vrlo brzo su se počeli
                  odvoziti, a načelnik općine tvrdi da ih se prodavalo kao na
                  Hreliću. Nakon nekog vremena pojavili su se, opisuje, i ljudi
                  koji su počupali sve metalne dijelove, uzimali pipe, razbijeli
                  granitne ploče, vadili žice iz zidova.
                </p>
                <div id="fb-root"></div>
                <p>
                  <script
                    async="1"
                    defer="1"
                    crossorigin="anonymous"
                    src="https://connect.facebook.net/de_DE/sdk.js#xfbml=1&amp;version=v11.0"
                    nonce="3BIheBEs"
                  ></script>
                </p>
                <div
                  class="fb-post"
                  data-href="https://www.facebook.com/ivanpokupecsh/posts/4077972045634140"
                  data-width="710"
                >
                  <blockquote
                    cite="https://graph.facebook.com/1200760423355331/posts/4077972045634140/"
                    class="fb-xfbml-parse-ignore"
                  >
                    <p>
                      [ NASTAVNIČKI REZIME ]Sutra počinje nova školska godina,
                      vraćamo se u učionice. I &quot;stožer&quot; je svoje
                      rekao: mali za&#8230;
                    </p>
                    <p>
                      Posted by
                      <a href="https://www.facebook.com/1200760423355331"
                        >Ivan Pokupec</a
                      >
                      on&nbsp;<a
                        href="https://graph.facebook.com/1200760423355331/posts/4077972045634140/"
                        >Sunday, September 5, 2021</a
                      >
                    </p>
                  </blockquote>
                </div>
                <p>
                  U nekoliko navrata zbog požara koji su izazvali ti Petanjekovi
                  ljudi morala je, prema načelnikovim riječima, intervenirati i
                  policija, te vatrogasci. Naime, u središtu hale zapaljena je
                  vatra na kojoj su spaljivani neki dijelovi inventara, a plamen
                  je oštetio i krov.
                </p>
                <p>
                  Dražbe su se provodile bez ikakvog nadzora iako je i država
                  bila vjerovnik, tvrdi Milički. “Očekivao sam normalan stečaj
                  kao što su ga vodili stečajni upravitelji ostalih tvrtki koje
                  su preuzele imovinu Tehnomehanike. Oni su svi bili korektni, a
                  Petanjeka sam morao upozoravati da ne dopušta devastiranje
                  imovine”, rekao nam je načelnik općine.
                </p>
                <blockquote
                  class="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink="https://www.instagram.com/p/BwKk7SuFTDO/?utm_source=ig_embed&amp;utm_campaign=loading"
                  data-instgrm-version="13"
                  style="
                    background: #fff;
                    border: 0;
                    border-radius: 3px;
                    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5),
                      0 1px 10px 0 rgba(0, 0, 0, 0.15);
                    margin: 1px;
                    max-width: 658px;
                    min-width: 326px;
                    padding: 0;
                    width: 99.375%;
                    width: -webkit-calc(100% - 2px);
                    width: calc(100% - 2px);
                  "
                >
                  <div style="padding: 16px">
                    <a
                      href="https://www.instagram.com/p/BwKk7SuFTDO/?utm_source=ig_embed&amp;utm_campaign=loading"
                      style="
                        background: #ffffff;
                        line-height: 0;
                        padding: 0 0;
                        text-align: center;
                        text-decoration: none;
                        width: 100%;
                      "
                      target="_blank"
                      rel="noopener"
                    >
                      <div
                        style="
                          display: flex;
                          flex-direction: row;
                          align-items: center;
                        "
                      >
                        <div
                          style="
                            background-color: #f4f4f4;
                            border-radius: 50%;
                            flex-grow: 0;
                            height: 40px;
                            margin-right: 14px;
                            width: 40px;
                          "
                        ></div>
                        <div
                          style="
                            display: flex;
                            flex-direction: column;
                            flex-grow: 1;
                            justify-content: center;
                          "
                        >
                          <div
                            style="
                              background-color: #f4f4f4;
                              border-radius: 4px;
                              flex-grow: 0;
                              height: 14px;
                              margin-bottom: 6px;
                              width: 100px;
                            "
                          ></div>
                          <div
                            style="
                              background-color: #f4f4f4;
                              border-radius: 4px;
                              flex-grow: 0;
                              height: 14px;
                              width: 60px;
                            "
                          ></div>
                        </div>
                      </div>
                      <div style="padding: 19% 0"></div>
                      <div
                        style="
                          display: block;
                          height: 50px;
                          margin: 0 auto 12px;
                          width: 50px;
                        "
                      >
                        <svg
                          width="50px"
                          height="50px"
                          viewBox="0 0 60 60"
                          version="1.1"
                          xmlns="https://www.w3.org/2000/svg"
                          xmlns:xlink="https://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-511.000000, -20.000000)"
                              fill="#000000"
                            >
                              <g>
                                <path
                                  d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div style="padding-top: 8px">
                        <div
                          style="
                            color: #3897f0;
                            font-family: Arial, sans-serif;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 550;
                            line-height: 18px;
                          "
                        >
                          View this post on Instagram
                        </div>
                      </div>
                      <div style="padding: 12.5% 0"></div>
                      <div
                        style="
                          display: flex;
                          flex-direction: row;
                          margin-bottom: 14px;
                          align-items: center;
                        "
                      >
                        <div>
                          <div
                            style="
                              background-color: #f4f4f4;
                              border-radius: 50%;
                              height: 12.5px;
                              width: 12.5px;
                              transform: translateX(0px) translateY(7px);
                            "
                          ></div>
                          <div
                            style="
                              background-color: #f4f4f4;
                              height: 12.5px;
                              transform: rotate(-45deg) translateX(3px)
                                translateY(1px);
                              width: 12.5px;
                              flex-grow: 0;
                              margin-right: 14px;
                              margin-left: 2px;
                            "
                          ></div>
                          <div
                            style="
                              background-color: #f4f4f4;
                              border-radius: 50%;
                              height: 12.5px;
                              width: 12.5px;
                              transform: translateX(9px) translateY(-18px);
                            "
                          ></div>
                        </div>
                        <div style="margin-left: 8px">
                          <div
                            style="
                              background-color: #f4f4f4;
                              border-radius: 50%;
                              flex-grow: 0;
                              height: 20px;
                              width: 20px;
                            "
                          ></div>
                          <div
                            style="
                              width: 0;
                              height: 0;
                              border-top: 2px solid transparent;
                              border-left: 6px solid #f4f4f4;
                              border-bottom: 2px solid transparent;
                              transform: translateX(16px) translateY(-4px)
                                rotate(30deg);
                            "
                          ></div>
                        </div>
                        <div style="margin-left: auto">
                          <div
                            style="
                              width: 0px;
                              border-top: 8px solid #f4f4f4;
                              border-right: 8px solid transparent;
                              transform: translateY(16px);
                            "
                          ></div>
                          <div
                            style="
                              background-color: #f4f4f4;
                              flex-grow: 0;
                              height: 12px;
                              width: 16px;
                              transform: translateY(-4px);
                            "
                          ></div>
                          <div
                            style="
                              width: 0;
                              height: 0;
                              border-top: 8px solid #f4f4f4;
                              border-left: 8px solid transparent;
                              transform: translateY(-4px) translateX(8px);
                            "
                          ></div>
                        </div>
                      </div>
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          flex-grow: 1;
                          justify-content: center;
                          margin-bottom: 24px;
                        "
                      >
                        <div
                          style="
                            background-color: #f4f4f4;
                            border-radius: 4px;
                            flex-grow: 0;
                            height: 14px;
                            margin-bottom: 6px;
                            width: 224px;
                          "
                        ></div>
                        <div
                          style="
                            background-color: #f4f4f4;
                            border-radius: 4px;
                            flex-grow: 0;
                            height: 14px;
                            width: 144px;
                          "
                        ></div></div
                    ></a>
                    <p
                      style="
                        color: #c9c8cd;
                        font-family: Arial, sans-serif;
                        font-size: 14px;
                        line-height: 17px;
                        margin-bottom: 0;
                        margin-top: 8px;
                        overflow: hidden;
                        padding: 8px 0 7px;
                        text-align: center;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                      "
                    >
                      <a
                        href="https://www.instagram.com/p/BwKk7SuFTDO/?utm_source=ig_embed&amp;utm_campaign=loading"
                        style="
                          color: #c9c8cd;
                          font-family: Arial, sans-serif;
                          font-size: 14px;
                          font-style: normal;
                          font-weight: normal;
                          line-height: 17px;
                          text-decoration: none;
                        "
                        target="_blank"
                        rel="noopener"
                        >A post shared by Ante Dekovic (@antevfx)</a
                      >
                    </p>
                  </div>
                </blockquote>
                <p>
                  <script
                    async
                    src="//platform.instagram.com/en_US/embeds.js"
                  ></script>
                </p>
                <h2>Nova kaznena prijava protiv Petanjeka</h2>
                <p>
                  U kaznenoj prijavi posebni dio odnosit će se na prodaju
                  parkinga s pristupnom cestom i teniskog igrališta s objektom
                  koji se nalaze na jednoj od parcela propale firme. Općina
                  Marija Bistrica planirala je te nekretnine kupiti ili
                  dogovoriti s državom da joj ih ustupi nakon preuzimanja. Ideja
                  je bila pokrenuti tamo poslovne procese, svojevrsnu
                  poduzetničku zonu.
                </p>
                <p>
                  Iznenada se, prisjeća se Milički, pojavljuje vlasnik autoškole
                  iz susjedne općine koji traži poligon za svoje mlade vozače.
                  Petanjek mu, budući da još nije bila spremna dražba,
                  iznajmljuje dvjestotinjak kvadrata za to. Cijela čestica bivše
                  Tehnomehanike obuhvaća oko osam tisuća kvadrata.
                </p>
                <p>
                  Na dražbi što je organizirana u studenom 2018. procijenjeno je
                  da ta parcela od 1635 četvornih hvata vrijedi nešto više od
                  dva milijuna kuna. Kako nije prodana na toj dražbi, iduća se
                  organizira vrlo brzo – već dva mjeseca kasnije, u siječnju
                  2019. godine. To je, kaže nam načelnik Milički, bilo
                  neuobičajeno jer su se inače dražbe održavale svakih devet
                  mjeseci.
                </p>
                <h2>Prodano za deset puta manji iznos</h2>
                <p>
                  U konačnici je tih 1635 čhv prodano vlasniku autoškole za
                  manje od 200 tisuća kuna, dakle, za deset puta manju cijenu
                  nego što je bila procijenjena vrijednost. Ubrzo sud utvrđuje
                  da je u rješenju o dosudi napravljena greška odnosno da se ne
                  radi o 1635 čhv, već o jednom jutru i 635 čhv. Drugim
                  riječima, za istu cijenu vlasnik autoškole kupio je 600 čhv
                  više, no sud je samo ispravio rješenje.
                </p>

                <p>
                  Iako je općina ukazala na pogrešku i uložila prigovor sud ih
                  je odbio. Kažu, sve je bilo po zakonu, pa tko i ovaj ispravak.
                  Ipak, upis vlasništva zaustavljen je jer je općina ukazala da
                  baš tim područjem prolazi jedna od njezinih nerazvrstanih
                  cesta. Cijeli slučaj sada je ponovno završio na sudu.
                </p>
                <h2>‘Petanjek je mirno uživao na Braču’</h2>
                <p>
                  “Kad sam nazvao Petanjeka i pitao ga što je to izveo kazao mi
                  je kako nema pojma, jer je u vrijeme dražbe bio na Braču”,
                  prisjeća se s ogorčenjem načelnik Marije Bistrice kojoj je u
                  međuvremenu Vlada RH darovala većinu nekadašnjeg kompleksa
                  Tehnomehanike vrijednog nešto manje od 12 milijuna kuna. No,
                  dio što ga je Petanjek prodao autoškoli nije obuhvaćen time
                  iako je iznimno važan jer njime prolazi jedini prilazni put
                  budućoj poslovnoj zoni Mariji Bistrica.
                </p>
                <p>
                  “Sada radimo analizu jer moramo sve obnoviti. I krov je
                  nagorio i infrastruktura je uništena. No, proglasili smo tu
                  poslovnu zonu i planiramo je pokrenuti”, zaključuje načelnik
                  Milički pokazujući nam i fotografije uništenog pogona.
                </p>
                <p>
                  Prema dostupnoj dokumentaciji zbog unovčenja onih nešto manje
                  od 19,2 milijuna kuna imovine nekadašnje Tehnmehanike
                  stečajnom upravitelju Petanjeku sud je odobrio nagradu od 600
                  tisuća kuna bruto.
                </p>

                <div class="banner-intext center intext">
                  <div class="full flex">
                    <div
                      class="full center banner-separator relative mobile-only"
                    >
                      <div><span>Članak se nastavlja ispod oglasa</span></div>
                    </div>
                    <div
                      class="full center banner-separator relative mobile-only"
                    ></div>
                  </div>
                </div>
              </div>
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
    <tfooter></tfooter>
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
            'https://images.telegram.hr/-DjAhFbwQRwfqnU7ipYj1HThD6NxyNgDtqxmrAVRTp0/preset:single1/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDMvc3RlY2FqbmkwMDFtdC5wbmc.jpg',
          alt: 'alt-text',
          author: 'Vjeko',
        },
        authors: [
          {
            url: 'https://www.telegram.hr/autor/ana-raic-knezevic/',
            name: 'Ana Raić Knežević',
            image:
              'https://images.telegram.hr/Ilq3bPrfrIoMjGq5-olOV4GyC22dFsGpCOaQusE0O8I/preset:author/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDkvYW5hX3JhaWNfMy5wbmc.png',
          },
        ],
        overtitle: '',
        title:
          "Doznajemo detalje nove prijave protiv uhićenog stečajnog upravitelja: 'Prodao je dio tvrtke 10 puta ispod cijene'",
        subtitle:
          'Iz Marije Bistrice teško optužuju Branka Petanjeka koji je vodio stečaj posrnule tvrtke u njihovoj općini',
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
      this.loadAds()
      //  this.getPost()
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
