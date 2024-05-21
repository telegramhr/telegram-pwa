<template>
  <div class="main-container flex telesport ts-home">
    <!-- TG Multiverse header -->
    <div class="full flex">
      <theader></theader>
    </div>
    <!-- Actual new TG multiverse header -->
    <nav class="full center relative nayos nayos-multiverse stretch">
      <div
        class="container flex stretch relative column-horizontal-pad mobile-side-pad"
      >
        <div class="third flex vertical-center mobile-thirty">
          <a
            :aria-expanded="$store.state.header.showSideMenu.toString()"
            aria-label="Prikaži lijevi meni"
            aria-controls="sidebar"
            @click.prevent="$store.commit('header/updateMenu', 'side')"
          >
            <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon>
          </a>
        </div>
        <app-link to="/" class="third mobile-forty center nayos-logos">
          <img src="@/assets/img/telegram_logo_black.svg" alt="Telegram logo" />
          <img
            src="@/assets/img/telegram_logo_white.svg"
            alt="Telegram logo"
            class="dark-mode-only"
          />
        </app-link>
        <div class="third center align-children-end mobile-thirty">
          <app-link
            v-show="canLogIn"
            id="pretplatite se - header"
            to="/pretplata"
            class="newbtn"
            >Pretplatite se</app-link
          >
          <app-link v-show="!canLogIn" to="/moj-racun" aria-label="Moj račun">
            <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon>
          </app-link>
          <a
            class="desktop-only column-mini-left-pad"
            aria-label="Prikaži tražilicu"
            :aria-expanded="$store.state.header.showSearchMenu.toString()"
            aria-controls="search"
            @click.prevent="$store.commit('header/updateMenu', 'search')"
          >
            <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon>
          </a>
        </div>
      </div>
    </nav>
    <!-- Cantha header -->
    <div class="full relative cantha-header">
      <div class="container flex relative column-top-pad column-horizontal-pad">
        <div class="full center relative">
          <a
            class="cantha-menubtn"
            aria-label="Prikaži lijevi meni"
            :aria-expanded="$store.state.header.showSideMenu.toString()"
            aria-controls="sidebar"
            @click.prevent="$store.commit('header/updateMenu', 'side')"
          >
            <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon
          ></a>
          <app-link to="/telesport" class="logo"
            ><img
              src="@/assets/img/telesport_logo_black.svg"
              class="light-mode-only"
              alt="Telesport logo" />
            <img
              src="@/assets/img/telesport_logo_black.svg"
              class="contrast-mode-only"
              alt="Telesport logo" />
            <img
              src="@/assets/img/telesport_logo_white.svg"
              alt="Telesport logo"
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
        <div class="full mobile-side-pad">
          <div class="full desktop-only cantha-separator"></div>
        </div>
      </div>
    </div>
    <!-- New subnav no red -->
    <div class="full cantha-block-title relative flex">
      <div
        class="container mobile-side-pad flex relative column-horizontal-pad"
      >
        <nav class="menu desktop-only flex" role="menu">
          <app-link role="menuitem" to="/telesport" class="animate"
            >Na prvu</app-link
          >
          <app-link role="menuitem" to="/telesport" class="animate"
            >Priče</app-link
          >
          <app-link role="menuitem" to="/telesport" class="animate"
            >Analize</app-link
          >
          <div class="cantha-fake-menuitem">
            <app-link role="menuitem" to="/telesport" class="animate"
              >Kolumne
            </app-link>
            <div class="cantha-submenu flex">
              <a
                href="https://telesport.telegram.hr/kolumne/covjek-koji-je-buljio-u-ekran/"
                >Čovjek koji je buljio u ekran</a
              >
              <a href="https://telesport.telegram.hr/kolumne/drop-shot/"
                >Drop Shot</a
              >
              <a href="https://telesport.telegram.hr/kolumne/gol-u-gostima/"
                >Gol u gostima</a
              >
              <a href="https://telesport.telegram.hr/kolumne/juris/">Juriš</a>
              <a href="https://telesport.telegram.hr/kolumne/laboratorij/"
                >Laboratorij</a
              >
              <a href="https://telesport.telegram.hr/kolumne/na-posudbi/"
                >Na posudbi</a
              >
              <a href="https://telesport.telegram.hr/kolumne/na-suncu-i-sjeni/"
                >Na suncu i sjeni</a
              >
              <a href="https://telesport.telegram.hr/kolumne/nogomet-narodu/"
                >Nogomet narodu</a
              >
              <a href="https://telesport.telegram.hr/kolumne/punchlines/"
                >Punchlines</a
              >
              <a href="https://telesport.telegram.hr/kolumne/topnicki-dnevnici/"
                >Topnički dnevnici</a
              >
              <a
                href="https://telesport.telegram.hr/kolumne/teorija-ravne-lopte/"
                >Teorija ravne lopte</a
              >
              <a
                href="https://telesport.telegram.hr/kolumne/aljosa-s-druge-strane-ogledala/"
                >Aljoša s druge strane ogledala</a
              >
              <a href="https://telesport.telegram.hr/kolumne/price-iz-davnine/"
                >Priče iz davnine</a
              >
            </div>
          </div>
        </nav>
        <div class="flex desktop-only">
          <client-only>
            <!--<a
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
            </app-link> -->
            <app-link
              id="pretplatite se - header"
              to="/pretplata"
              class="newbtn"
              >Pretplatite se</app-link
            >
          </client-only>
        </div>
      </div>
    </div>
    <!-- Intro block: G1 + comments -->
    <div class="full relative">
      <div class="container flex relative stretch cantha-intro-block">
        <!-- Billboard 1
        <client-only>
          <div v-show="!hasPremium" class="full relative m-order-2">
            <div class="full flex column-horizontal-pad desktop-only">
              <div class="full flex relative column-bottom-border"></div>
            </div>
            <div class="full center relative">
              <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
            </div>
          </div>
        </client-only> -->
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
        <!-- latest -->
        <client-only>
          <div
            class="fourth flex-responsive mobile-side-pad column-right-pad flex relative no-last-border-mobile"
          >
            <div class="full flex relative latest-line-feed">
              <latest category="sport"></latest>
            </div>
          </div>
        </client-only>
        <div class="full column-full-pad desktop-only">
          <div class="full column-top-border"></div>
        </div>
        <!-- rest of Gs -->
        <div
          class="full flex cantha-small-block mobile-side-pad stretch column-bottom-pad"
        >
          <div
            v-for="post in posts.slice(1, 4)"
            :key="`featured${post.id}`"
            class="third flex-responsive column-right-border column-horizontal-pad"
          >
            <medium :post="post"></medium>
          </div>
        </div>
        <!-- Billboard 2
        <div class="full center m-order-6">
          <ad-unit id="telegram_desktop_billboard_v2"></ad-unit>
        </div> -->
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
        <!-- Još vijesti -->
        <div class="full relative cantha-more-news">
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
    <!-- Telesport preporuka -->
    <div
      class="full relative darkened-bg column-top-margin column-bottom-margin column-bottom-pad mobile-vertical-pad"
    >
      <div
        class="container mobile-side-pad flex relative stretch column-vertical-pad"
      >
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Telesport preporuka
          </div>
        </div>
        <div
          class="three-fourths flex-responsive column-horizontal-pad flex split-articles big-split no-mobile-stretch-split alt-big-break center-text column-right-border"
        >
          <standard
            v-for="post in breaks.slice(0, 1)"
            :key="post.id"
            :post="post"
          ></standard>
        </div>
        <div class="full column-full-pad tablet-only">
          <div class="full column-bottom-border"></div>
        </div>
        <div
          class="fourth flex-responsive column-horizontal-pad mini-article-list"
        >
          <trending :id="1"></trending>
        </div>
      </div>
    </div>
    <!-- Teme -->
    <div class="full relative">
      <div class="container flex relative stretch">
        <div
          class="full flex mobile-side-pad stretch secondary-gs-block m-order-8"
        >
          <div class="full column-horizontal-pad column-bottom-pad flex">
            <div class="full column-top-border"></div>
          </div>
          <div
            class="three-fourths flex-responsive flex stretch column-horizontal-pad article-amnytas mobile-bottom-pad column-right-border"
          >
            <featured
              v-for="post in posts.slice(12, 13)"
              :key="post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad flex relative"
          >
            <medium
              v-for="post in posts.slice(13, 14)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
          <div class="full column-horizontal-pad column-top-pad flex">
            <div class="full column-top-border column-bottom-pad"></div>
          </div>
          <div
            class="three-fourths flex-responsive flex stretch column-horizontal-pad article-amnytas mobile-bottom-pad column-right-border"
          >
            <featured
              v-for="post in posts.slice(14, 15)"
              :key="post.id"
              :post="post"
            ></featured>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad flex relative"
          >
            <medium
              v-for="post in posts.slice(15, 16)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
        </div>
      </div>
    </div>
    <!-- Widget autori -->
    <commentary-alt type="ts"></commentary-alt>
    <!-- Standard 1/4 block -->
    <div class="full relative">
      <div
        class="container flex cantha-small-block mobile-side-pad relative stretch"
      >
        <div class="full flex stretch relative no-last-border-mobile">
          <div
            v-for="post in morePosts.slice(1, 4)"
            :key="post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad"
          >
            <standard :post="post"></standard>
          </div>
        </div>
      </div>
    </div>
    <!-- Standard 1/4 block -->
    <div class="full relative">
      <div
        class="container flex cantha-small-block mobile-side-pad relative stretch"
      >
        <div class="full column-full-pad">
          <div class="full column-bottom-border"></div>
        </div>
        <div class="full flex stretch relative no-last-border-mobile">
          <div
            v-for="post in morePosts.slice(4, 8)"
            :key="post.id"
            class="fourth flex-responsive column-right-border column-horizontal-pad"
          >
            <standard :post="post"></standard>
          </div>
        </div>
        <div class="full center column-full-pad mobile-bottom-pad">
          <div class="newbtn huge-newbtn clickable">Učitaj više</div>
        </div>
      </div>
    </div>
    <!-- Prekid knjiga -->
    <div class="full relative">
      <div class="container flex relative column-horizontal-pad">
        <app-link
          to="/knjiga/boris-dezulovic-bili-libar"
          class="full cantha-break break-dezulovic mobile-side-pad flex relative stretch"
        >
          <div class="forty column-full-pad center flex-responsive">
            <div class="full flex article">
              <div class="noththree full overtitle">Posebna akcija</div>
              <h2 class="full">
                Telegram predstavlja: Bili libar, nova knjiga Borisa Dežulovića
              </h2>
              <div class="nothfour full">
                Naručite još danas i osigurajte svoj primjera, uz posebnu cijenu
                za pretplatnike
              </div>
            </div>
          </div>
          <div class="sixty stretch flex flex-responsive">
            <div class="two-thirds column-top-pad center flex-responsive">
              <img
                src="@/assets/img/tg_knjiga_vizual_dezulovic.png"
                alt="Portret Borisa Dežulovića i naslovnica njegove knjige 'Bili Libar'"
              />
            </div>
            <div class="third center column-horizontal-pad flex-responsive">
              <div class="full column-left-pad flex article">
                <h2 class="full relative center-text">
                  <span class="faded strikethrough">149 kn</span> 99 kn
                </h2>
                <div class="nothfour full center-text">
                  (<span class="faded strikethrough">19,78€</span> 13,14€)
                  <br />
                  posebna cijena za Telegramove pretplatnike!
                </div>
              </div>
            </div>
          </div>
        </app-link>
      </div>
    </div>
    <!-- Footer -->
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('ts/pullPosts')
    await this.$store.dispatch('ts/pullBreaks')
  },
  data() {
    return {
      loading: false,
      hasMore: true,
      morePosts: [],
    }
  },
  computed: {
    posts() {
      return this.$store.state.ts.posts
    },
    breaks() {
      return this.$store.state.ts.breaks
    },
    jsonld() {
      return {
        '@context': 'https://schema.org',
        '@type': 'Website',
        url: 'https://www.telegram.hr/telesport',
        name: 'Telesport.hr',
        description: 'Prvi regionalni sportski boutique portal.',
        publisher: this.$store.state.header.publisher,
      }
    },
    canLogIn() {
      return this.$store.state.user.exp * 1000 < new Date().getTime()
    },
  },
  head() {
    return {
      title: 'Telesport.hr',
      meta: [
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telesport.hr',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/telesport/',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/ts_share.jpg',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Pratite domaća, regionalna i svjetska sportska događanja uz kolumne sportskih stručnjaka, komentare i detaljne analize novinara na jednom mjestu!',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Pratite domaća, regionalna i svjetska sportska događanja uz kolumne sportskih stručnjaka, komentare i detaljne analize novinara na jednom mjestu!',
        },
      ],
      script: [
        {
          vmid: 'schema-ld',
          hid: 'schema-ld',
          type: 'application/ld+json',
          json: this.jsonld,
        },
      ],
    }
  },
}
</script>
