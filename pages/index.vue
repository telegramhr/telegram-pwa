<template>
  <div class="main-container flex homepage">
    <!-- Wallpapers -->
    <client-only>
      <div v-if="!$mobile" class="container wallpaper-banners animate">
        <div class="wallpaper-left">
          <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
        </div>
        <div class="wallpaper-right">
          <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
        </div>
      </div>
    </client-only>
    <!-- TG Multiverse Header -->
    <div class="full flex">
      <theader></theader>
    </div>
    <!-- Above header banner -->
    <app-link
      v-if="!$store.state.user.access"
      to="/pretplata"
      class="full relative darkened-bg birati-stranu-widget"
    >
      <div
        class="container column-full-pad mobile-full-pad flex relative animated-birati-stranu"
      >
        <p
          class="full center-text animate column-top-pad mobile-top-pad birati-stranu-title"
        >
          Nekad je nužno odabrati stranu.
        </p>
        <p class="full center-text animate birati-stranu-subtitle">
          Postanite Telegramov pretplatnik
        </p>
        <div
          class="full center animate column-vertical-pad mobile-vertical-pad"
        >
          <div class="newbtn huge-newbtn">Pretplatite se</div>
        </div>
      </div>
    </app-link>
    <!-- Cantha header -->
    <div class="full relative cantha-header">
      <div class="container flex relative column-top-pad column-horizontal-pad">
        <div class="full center relative desktop-only">
          <a
            class="cantha-menubtn"
            aria-label="Prikaži lijevi meni"
            :aria-expanded="$store.state.header.showSideMenu.toString()"
            aria-controls="sidebar"
            @click.prevent="$store.commit('header/updateMenu', 'side')"
          >
            <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon
          ></a>
          <app-link to="/" class="logo" @click="$fetch"
            ><img
              src="@/assets/img/telegram_logo_black.svg"
              alt="Telegram logo" />
            <img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
              class="dark-mode-only"
          /></app-link>
          <a
            aria-label="Prikaži tražilicu"
            class="cantha-searchbtn"
            :aria-expanded="$store.state.header.showSearchMenu.toString()"
            aria-controls="search"
            @click.prevent="$store.commit('header/updateMenu', 'search')"
          >
            <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon>
          </a>
        </div>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full column-horizontal-pad center-text desktop-only site-subtitle"
        >
          Nekad je nužno odabrati stranu
        </app-link>
        <div class="full mobile-side-pad">
          <div class="full desktop-only cantha-separator"></div>
        </div>
        <breaking></breaking>
      </div>
    </div>
    <!-- New subnav no red -->
    <div class="full cantha-block-title relative flex">
      <div
        class="container mobile-side-pad flex relative column-horizontal-pad"
      >
        <nav class="menu desktop-only flex" role="menu">
          <app-link role="menuitem" to="/vijesti">Vijesti</app-link>
          <app-link role="menuitem" to="/politika-kriminal"
            >Politika & Kriminal</app-link
          >
          <app-link role="menuitem" to="/komentari">Komentari</app-link>
          <app-link role="menuitem" to="/biznis-tech">Biznis & Tech</app-link>
          <app-link role="menuitem" to="/velike-price">Velike priče</app-link>
          <app-link role="menuitem" to="/zivot">Život</app-link>
          <app-link role="menuitem" to="/kultura">Kultura</app-link>
          <app-link role="menuitem" to="/openspace">Openspace</app-link>
          <app-link to="/super1" role="menuitem">Super1</app-link>
          <a href="https://telesport.telegram.hr" role="menuitem">
            Telesport
          </a>
          <app-link role="menuitem" to="/pitanje-zdravlja"
            >PitanjeZdravlja</app-link
          >
        </nav>
        <div class="flex desktop-only">
          <client-only>
            <a
              v-show="canLogIn"
              class="newbtn newbtn-empty"
              @click.prevent="manageLogin"
              >Prijava</a
            >
            <app-link
              v-show="!$store.state.user.access"
              id="pretplatite se - header"
              to="/pretplata"
              class="newbtn"
              >Pretplatite se</app-link
            >
            <app-link
              v-show="!canLogIn"
              to="/moj-racun"
              class="newbtn newbtn-empty"
              aria-label="Moj račun"
            >
              Moj račun
            </app-link>
          </client-only>
        </div>
      </div>
    </div>
    <!-- Intro block: G1 + comments -->
    <div class="full relative">
      <div class="container flex relative stretch cantha-intro-block">
        <!-- Billboard 1 -->
        <client-only>
          <div v-show="!hasPremium" class="full relative m-order-2">
            <div class="full flex column-horizontal-pad desktop-only">
              <div class="full flex relative column-bottom-border"></div>
            </div>
            <div class="full center relative">
              <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
            </div>
          </div>
        </client-only>
        <!-- breaking -->
        <h2
          v-show="$store.state.breaking.on2"
          class="full major-event-header mobile-order-1 mobile-side-pad column-horizontal-pad center-text m-order-1"
        >
          <app-link
            :to="
              $store.state.breaking.link2 ? $store.state.breaking.link2 : '#'
            "
          >
            {{ $store.state.breaking.title2 }}</app-link
          >
        </h2>
        <div
          class="full flex column-horizontal-pad column-bottom-pad desktop-only"
        >
          <div class="full flex relative column-bottom-border"></div>
        </div>
        <!-- G1 -->
        <div
          class="three-fourths featured-split biggest-font flex-responsive column-horizontal-pad flex split-articles mobile-side-pad mobile-order-1 m-order-1"
        >
          <featured-alt
            v-if="posts[0]"
            :key="`featured-${posts[0].id}`"
            :post="posts[0]"
          ></featured-alt>
        </div>
        <!-- komentari -->
        <!--<div
          class="fourth flex-responsive column-horizontal-pad mobile-side-pad cantha-commentary m-order-11"
        >
          <div class="full mobile-only flex relative">
            <div class="full column-horizontal-pad column-top-pad">
              <div class="full cantha-separator"></div>
            </div>
            <div class="full flex column-horizontal-pad">
              <div
                class="noththree full center-text column-vertical-pad subsection-title"
              >
                Komentari
              </div>
            </div>
          </div>
          <commentary type="tg"></commentary>
        </div>-->
        <!-- latest -->
        <client-only>
          <div
            class="fourth flex-responsive mobile-side-pad column-right-pad flex relative m-order-3 no-last-border-mobile"
          >
            <div class="full flex relative latest-line-feed">
              <latest :portal="1"></latest>
            </div>
          </div>
        </client-only>
        <div class="full column-full-pad desktop-only">
          <div class="full column-top-border"></div>
        </div>
        <!-- rest of Gs -->
        <div
          class="full flex cantha-small-block mobile-side-pad stretch m-order-5"
        >
          <div
            v-for="post in posts.slice(1, 4)"
            :key="`featured${post.id}`"
            class="third flex-responsive column-right-border column-horizontal-pad"
          >
            <medium :post="post"></medium>
          </div>
        </div>
        <!-- Billboard 2 -->
        <div class="full center m-order-6">
          <ad-unit id="telegram_desktop_billboard_v2"></ad-unit>
        </div>
        <!-- Teme -->
        <div
          class="full flex mobile-side-pad stretch secondary-gs-block m-order-8"
        >
          <div class="full column-horizontal-pad column-bottom-pad flex">
            <div class="full column-top-border"></div>
          </div>
          <div
            class="three-fourths flex-responsive column-horizontal-pad column-right-border flex relative featured-split smaller-featured-split show-one-related"
          >
            <featured
              v-for="post in posts.slice(4, 5)"
              :key="post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad flex relative"
          >
            <medium
              v-for="post in posts.slice(5, 6)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
          <div class="full column-horizontal-pad column-top-pad flex">
            <div class="full column-top-border column-bottom-pad"></div>
          </div>
          <div
            class="three-fourths flex-responsive column-horizontal-pad column-right-border flex relative featured-split smaller-featured-split show-one-related"
          >
            <featured
              v-for="post in posts.slice(6, 7)"
              :key="post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad flex relative"
          >
            <medium
              v-for="post in posts.slice(7, 8)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
        </div>
        <!-- Prekid odabrati stranu
        <client-only>
          <div
            v-if="!$store.state.user.access"
            class="container column-horizontal-pad column-top-pad mobile-bottom-pad flex relative m-order-8"
          >
            <app-link
              to="/pretplata/odabrati-stranu"
              class="full relative darkened-bg column-full-pad mobile-full-pad birati-stranu-widget"
            >
              <p
                class="full center-text column-top-pad mobile-top-pad birati-stranu-title"
              >
                Nekad je nužno odabrati stranu.
              </p>
              <p class="full center-text birati-stranu-subtitle">
                Postanite Telegramov pretplatnik
              </p>
              <div class="full center column-vertical-pad mobile-vertical-pad">
                <div class="newbtn huge-newbtn">Pretplatite se</div>
              </div>
            </app-link>
          </div>
        </client-only> -->
        <!-- Prekid pretplata
        <client-only>
          <div
            v-if="!$store.state.user.access"
            class="full relative mobile-only m-order-8"
          >
            <div class="container flex relative column-horizontal-pad">
              <app-link
                to="/pretplata"
                class="full cantha-break cantha-mini-break mobile-side-pad flex relative stretch"
              >
                <div class="two-thirds column-full-pad center flex-responsive">
                  <div class="full flex article">
                    <h2 class="full">
                      Bespoštedno novinarstvo <br />koje gura društvo naprijed.
                    </h2>
                    <div class="nothfour full">
                      Za neograničeno čitanje Telegrama i podršku istraživačkim
                      serijalima, odaberite jedan od paketa.
                    </div>
                  </div>
                </div>
                <div class="third stretch flex flex-responsive">
                  <div class="full flex article">
                    <div class="full center">
                      <div class="newbtn">Pretplatite se</div>
                    </div>
                  </div>
                </div>
              </app-link>
            </div>
          </div>
        </client-only> -->
        <!-- Još vijesti -->
        <div class="full relative cantha-more-news m-order-10">
          <div
            class="container flex cantha-small-block mobile-side-pad relative stretch column-top-pad"
          >
            <div class="full column-horizontal-pad flex column-bottom-pad">
              <div class="full flex column-top-border mobile-top-border"></div>
            </div>
            <div class="full flex stretch relative no-last-border-mobile">
              <div
                v-for="post in posts.slice(8, 12)"
                :key="post.id"
                class="fourth flex-responsive column-right-border column-horizontal-pad"
              >
                <standard :post="post"></standard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <client-only>
      <div v-if="!hasPremium" class="full relative">
        <offers-premium></offers-premium>
      </div>
    </client-only>
    <!-- TG preporuka -->
    <div class="full relative">
      <div
        class="container mobile-side-pad flex relative stretch column-bottom-pad"
      >
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Telegram preporuka
          </div>
        </div>
        <div
          v-if="breaks[0]"
          class="three-fourths flex-responsive column-horizontal-pad flex split-articles big-split alt-big-break center-text column-right-border"
        >
          <standard :key="breaks[0].id" :post="breaks[0]"></standard>
        </div>
        <div class="full column-full-pad tablet-only">
          <div class="full column-bottom-border"></div>
        </div>
        <div
          class="fourth flex-responsive column-horizontal-pad mini-article-list"
        >
          <trending :id="1"></trending>
        </div>
        <!--<div class="full column-horizontal-pad">
          <div class="full column-top-pad column-bottom-border"></div>
        </div>-->
      </div>
    </div>
    <!-- Billboard 3 -->
    <div class="full relative cantha-billboard">
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v3"></ad-unit>
      </div>
    </div>
    <!-- Prekid knjiga
    <div class="full relative" style="margin-top: 24px">
      <div class="container flex relative column-horizontal-pad">
        <app-link
          to="/knjiga/sanja-modric-igla-pila-ravnalo"
          class="full cantha-break break-dezulovic mobile-side-pad flex relative stretch"
        >
          <div class="third column-full-pad center flex-responsive">
            <div class="full flex article">
              <div class="noththree full overtitle">Ekskluzivna prednarudžba</div>
              <h2 class="full">
                Telegram Vam predstavlja: <br />Prva knjiga Sanje Modrić
              </h2>
              <div class="nothfour full">
                Špajza novinskih tekstova Telegramove <br />
                nagrađivane novinarke, prvi put kao knjiga
              </div>
            </div>
          </div>
          <div class="two-thirds stretch flex flex-responsive">
            <div
              class="two-thirds stretch column-top-pad center flex-responsive"
            >
              <img
                class="align-end"
                src="@/assets/img/tg_knjiga_vizual_modric.png"
                alt="Portret Sanje Modrić i naslovnica njene knjige 'Igla, pila, ravnalo'"
                loading="lazy"
              />
            </div>
            <div class="third stretch center column-full-pad flex-responsive">
              <div class="full flex article">
                <h2 class="full relative center-text">
                  <span class="faded strikethrough">19,99€</span> 13,99€
                </h2>
                <div class="nothfour full center-text">
                  (<span class="faded strikethrough">150,61 kn</span> 105,41 kn)
                  <br />
                  posebna cijena za Telegramove pretplatnike!
                </div>
                <div class="full center">
                  <div class="newbtn">Kupite</div>
                </div>
              </div>
            </div>
          </div>
        </app-link>
      </div>
    </div> -->
    <!-- Prekid newsletteri
    <div class="full relative">
      <div class="container flex relative column-horizontal-pad">
        <app-link
          to="/newsletters"
          class="full cantha-break mobile-side-pad flex relative stretch"
        >
          <div class="third column-full-pad center flex-responsive">
            <div class="full flex article">
              <div class="noththree full overtitle">Posebne pogodnosti</div>
              <h2 class="full">
                Specijalni newsletteri za Telegramove pretplatnike.
              </h2>
              <div class="nothfour full">
                Najbolje od Telegrama, svaki dan u vašem inboxu.
              </div>
            </div>
          </div>
          <div class="two-thirds stretch flex flex-responsive">
            <div class="two-thirds column-full-pad center flex-responsive">
              <img
                src="@/assets/img/tg_newsletter_visual.png"
                alt="Kolekcija Telegramovih newslettera"
              />
            </div>
            <div class="third center flex-responsive">
              <div class="full flex article">
                <div class="full center">
                  <div class="newbtn">Prijavite se</div>
                </div>
                <div class="nothfour full center-text">
                  Odaberite tematske i autorske newslettere koje želite primati.
                </div>
              </div>
            </div>
          </div>
        </app-link>
      </div>
    </div> -->
    <!-- Velika rubrika: Politika i kriminal -->
    <div class="full relative">
      <div class="container flex relative column-bottom-pad">
        <category-big slug="more-news"></category-big>
      </div>
    </div>
    <!-- Widget autori
    <div class="full relative">
      <div class="container flex relative column-bottom-pad">
        <authors></authors>
      </div>
    </div> -->
    <!-- Widget partner special -->
    <client-only>
      <div v-if="!hasPremium" class="full relative">
        <partner-special position="tg"></partner-special>
        <jgl-premium shop="jgl"></jgl-premium>
      </div>
    </client-only>
    <!-- Sport -->
    <div class="full relative">
      <client-only>
        <sport></sport>
      </client-only>
    </div>
    <!-- Pretplatnici čitaju -->
    <div class="full relative">
      <div
        class="container flex relative stretch mobile-side-pad column-bottom-pad"
      >
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Pretplatnici čitaju
          </div>
        </div>
        <div
          v-if="breaks[1]"
          class="full column-horizontal-pad flex split-articles big-split alt-big-break center-text"
        >
          <standard :key="breaks[1].id" :post="breaks[1]"></standard>
        </div>
        <div class="full flex cantha-small-block stretch column-top-pad">
          <div class="full flex column-horizontal-pad column-bottom-pad">
            <div class="full flex column-top-border"></div>
          </div>
          <div
            v-for="post in breaks.slice(2, 5)"
            :key="post.id"
            class="third flex-responsive column-right-border column-horizontal-pad"
          >
            <medium :post="post"></medium>
          </div>
        </div>
      </div>
    </div>
    <!-- Super1 -->
    <div class="full relative">
      <client-only>
        <super1></super1>
      </client-only>
    </div>
    <!-- Prekid klub -->
    <client-only>
      <div class="full relative">
        <klub-offers></klub-offers>
      </div>
    </client-only>
    <!--<div class="full relative">
      <div class="container flex relative column-full-pad">
        <app-link
          to="/klub"
          class="full cantha-break mobile-side-pad flex relative stretch klub-cantha-break"
        >
          <div class="third column-full-pad center flex-responsive">
            <div class="full flex">
              <img
                src="@/assets/img/tg_klub_logo_negative.svg"
                alt="Telegram Klub logo"
                class="klub-break-logo"
              />
              <div class="nothfour full">
                Klub ekskluzivnih ponuda, pogodnosti i popusta, samo za
                pretplatnike Telegrama.
              </div>
            </div>
          </div>
          <div class="two-thirds stretch flex flex-responsive">
            <div class="two-thirds stretch center flex-responsive">
              <img
                src="@/assets/img/tg_klub_vizual_widget.jpg"
                alt="Neki od popusta u kazalištima i muzejima koje se nalaze u Telegram Klubu"
              />
            </div>
            <div
              class="third center stretch column-horizontal-pad flex-responsive"
            >
              <div class="full column-left-pad flex article">
                <div class="nothfour full center-text">
                  Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
                  pretplatnicima.
                </div>
                <div class="full center">
                  <div class="newbtn">Saznajte više</div>
                </div>
              </div>
            </div>
          </div>
        </app-link>
      </div>
    </div>-->
    <!-- Prekid dojave
    <div class="full relative desktop-only">
      <div class="container flex relative column-full-pad"
        <app-link
          to="/dojave"
          class="full cantha-break mobile-side-pad flex relative stretch"
        >
          <div class="forty column-full-pad center flex-responsive">
            <div class="full flex article">
              <div class="noththree full overtitle">Telegram dojave</div>
              <h2 class="full">
                Imate saznanja o korupciji? Javite se našim novinarima.
              </h2>
              <div class="nothfour full">
                Naši su članci otkrili brojne pljačke i nepravilnosti.
              </div>
            </div>
          </div>
          <div class="sixty stretch flex flex-responsive">
            <div class="sixty column-top-pad center flex-responsive">
              <img
                src="@/assets/img/tg_dojave_visual.png"
                alt="Portreti ministara čiju korupciju je otkrio Telegram"
                class="hard-light-blend"
              />
            </div>
            <div class="forty center column-horizontal-pad flex-responsive">
              <div class="full column-left-pad flex article">
                <div class="full center">
                  <div class="newbtn">Javite nam se</div>
                </div>
                <div class="nothfour full center-text">
                  Imamo sigurne kanale putem kojih nas možete kontaktirati.
                </div>
              </div>
            </div>
          </div>
        </app-link>
      </div>
    </div> -->
    <!-- Šoping knjige
    <div class="full relative">
      <book-offers></book-offers>
    </div> -->
    <!-- PitanjeZdravlja -->
    <div class="full relative">
      <client-only>
        <pitanje-zdravlja></pitanje-zdravlja>
      </client-only>
    </div>
    <!--<client-only>
      <div v-if="!hasPremium" class="full relative">
        <offers></offers>
      </div>
    </client-only>-->
    <!-- Widget partneri -->
    <div class="full relative">
      <client-only>
        <partners></partners>
      </client-only>
    </div>
    <!-- Billboard 4 -->
    <div class="full relative">
      <div class="full center">
        <ad-unit id="telegram_desktop_billboard_v4"></ad-unit>
      </div>
    </div>
    <!-- Openspace -->
    <div class="full relative">
      <client-only>
        <os-homepage></os-homepage>
      </client-only>
    </div>
    <!-- Book widget DEPRA -->
    <app-link
      to="/knjiga/aleksandar-stankovic-depra?checkout=true"
      class="full flex relative center mobile-side-pad darkened-bg column-full-pad shoo-bottom"
    >
      <div class="container relative flex stretch">
        <div class="forty tablet-full flex flex-responsive center">
          <div class="full center-text newbook-overtitle">Telegram naklada</div>
          <h1 class="full center-text newbook-title">DEPRA</h1>
          <div class="full center-text newbook-author">
            Aleksandar Stanković
          </div>
          <p class="full center-text newbook-intro">
            Poznati novinar i voditelj godinama boluje od depresije, a sada je,
            u ovoj knjizi, prvi put odlučio progovoriti o svojoj borbi s tom
            bolesti
          </p>
        </div>

        <div class="forty tablet-full flex flex-responsive center">
          <img
            src="@/assets/img/tg_book_mockup_stankovic.png"
            alt="Naslovnica nove knjige Aleksandra Stankovića 'DEPRA'"
          />
        </div>
        <div class="fifth tablet-full flex flex-responsive center">
          <div class="full relative center-text newbook-price">
            <span class="faded strikethrough">19,99€</span> 14,99€
          </div>
          <div class="full relative center-text neat-numbers">
            (<span class="faded strikethrough">150,61 kn</span> 112,94 kn)
            <br />
            posebna cijena za sve pretplatnike Telegrama
          </div>
          <div class="full center btn-parent newbook-btn">
            <div class="newbtn clickable huge-newbtn animate">Kupite</div>
          </div>
        </div>
      </div>
    </app-link>
    <!-- Linker -->
    <div class="full mobile-side-pad relative">
      <client-only>
        <linker type="naslovnica"></linker>
      </client-only>
    </div>
    <!-- Rubrike -->
    <div class="full relative">
      <div class="container flex relative block-5 standard-block">
        <div class="full desktop-only column-horizontal-pad column-bottom-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex">
          <client-only>
            <category slug="zivot"></category>
            <category slug="biznis-tech"></category>
            <category slug="kultura"></category>
            <category slug="velike-price"></category>
          </client-only>
        </div>
      </div>
    </div>
    <!-- Odabrati stranu pretplatnici widget -->
    <div class="full relative shoo-bottom">
      <pretplatnici-widget></pretplatnici-widget>
    </div>
    <div class="full relative">
      <div class="container flex center">
        <div id="linker-526" class="lwdgt" data-wid="526"></div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
// import BookOffers from '../components/Elements/BookOffers.vue'
export default {
  // components: { BookOffers },
  async fetch() {
    await this.$store.dispatch('featured/pullPosts')
    await this.$store.dispatch('featured/pullBreaks')
  },
  data() {
    return {
      loading: false,
      reloadInterval: null,
    }
  },
  computed: {
    hasPremium() {
      return this.$store.getters['user/hasPremium']
    },
    canLogIn() {
      return this.$store.state.user.exp * 1000 < new Date().getTime()
    },
    posts() {
      return this.$store.state.featured.posts
    },
    breaks() {
      return this.$store.state.featured.breaks
    },
    morePosts() {
      return this.$store.state.featured.morePosts
    },
    jsonld() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Website',
        url: 'https://www.telegram.hr',
        name: 'Telegram.hr',
        headline: 'Telegram.hr',
        description: 'Nekad je nužno odabrati stranu',
        publisher: this.$store.state.header.publisher,
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: 'https://www.telegram.hr/search/{search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        ],
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.loadAds()
      this.reloadInterval = setInterval(() => {
        this.$router.push('/?reload=1')
      }, 300000)
    })
  },
  beforeDestroy() {
    clearInterval(this.reloadInterval)
  },
  methods: {
    manageLogin() {
      if (this.canLogIn) {
        this.$store.dispatch('user/login')
      } else {
        this.$store.dispatch('user/logout')
      }
    },
    handleScroll() {
      const walls = document.getElementsByClassName('wallpaper-banners')
      walls.forEach((item) => {
        item.classList.add('sticky-homepage-wallpaper')
      })
    },
    loadAds() {
      if (this.$route.query.reset_token) {
        window.tp.push([
          'init',
          function () {
            window.tp.pianoId.show({
              displayMode: 'modal',
              screen: 'new_password',
            })
          },
        ])
      }
      this.$store.dispatch('ads/initAds', { route: this.$route })
      if (!this.$store.state.user.access) {
        this.$linker.reloadLinker()
      }
    },
    loadMore() {
      this.loading = true
      this.$store.dispatch('featured/loadMore').then(() => {
        this.loading = false
      })
    },
  },
  head() {
    return {
      title: 'Telegram.hr',
      script: [
        {
          vmid: 'schema-ld',
          hid: 'schema-ld',
          type: 'application/ld+json',
          json: this.jsonld,
        },
        {
          vmid: 'linker-slider',
          hid: 'linker-slider',
          type: 'text/javascript',
          src: 'https://linker.hr/widget/slider/splide.min.js',
          async: true,
        },
      ],
    }
  },
}
</script>
