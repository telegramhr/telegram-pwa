<template>
  <div :class="['main-container', 'flex', 'category-kultura']">
    <template>
      <!-- TG Multiverse header -->
      <div class="full flex relative single-article">
        <client-only>
          <theader headline="Kultura na Telegramu"></theader>
        </client-only>
      </div>
      <!-- Wallpapers -->
      <div class="full relative">
        <client-only>
          <div v-if="!$mobile" class="container wallpaper-banners">
            <div class="wallpaper-left">
              <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
            </div>
            <div class="wallpaper-right">
              <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
            </div>
          </div>
        </client-only>
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
            <img
              src="@/assets/img/telegram_logo_black.svg"
              alt="Telegram logo"
            />
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
        <div
          class="container flex relative column-top-pad column-horizontal-pad"
        >
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
            <app-link to="/telesport" class="logo">
              <img
                src="@/assets/img/tg_kultura_logo.svg"
                class="light-mode-only"
                alt="Kultura" />
              <img
                src="@/assets/img/tg_kultura_logo.svg"
                class="contrast-mode-only"
                alt="Kultura" />
              <img
                src="@/assets/img/tg_kultura_logo_negative.svg"
                class="dark-mode-only"
                alt="Kultura"
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
          <div
            class="full column-horizontal-pad center-text desktop-only site-subtitle"
          >
            Uvijek je nužno odabrati kulturu
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
            <app-link role="menuitem" to="/tema/kazaliste">Kazalište</app-link>
            <app-link role="menuitem" to="/tema/film"
              >Filmovi i serije</app-link
            >
            <app-link role="menuitem" to="/tema/knjizevnost">Knjige</app-link>
            <app-link role="menuitem" to="/tema/glazba">Glazba</app-link>
            <app-link role="menuitem" to="/tema/videoigre">Videoigre</app-link>
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
              class="fourth flex-responsive mobile-side-pad column-right-pad flex relative m-order-3 no-last-border-mobile"
            >
              <div class="full flex relative latest-line-feed">
                <latest></latest>
              </div>
            </div>
          </client-only>
          <div class="full column-full-pad desktop-only">
            <div class="full column-top-border"></div>
          </div>
          <!-- rest of Gs -->
          <div
            class="full flex cantha-small-block mobile-side-pad stretch m-order-5 column-bottom-pad"
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
              class="three-fourths flex-responsive flex stretch column-horizontal-pad article-amnytas mobile-bottom-pad column-right-border"
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
              class="three-fourths flex-responsive flex stretch column-horizontal-pad article-amnytas mobile-bottom-pad column-right-border"
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
          <div class="full relative cantha-more-news m-order-10">
            <div
              class="container flex cantha-small-block mobile-side-pad relative stretch column-top-pad"
            >
              <div class="full column-horizontal-pad flex column-bottom-pad">
                <div
                  class="full flex column-top-border mobile-top-border"
                ></div>
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
      <!-- Telegram preporuka -->
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
              Telegram preporuka
            </div>
          </div>
          <div
            class="three-fourths flex-responsive column-horizontal-pad flex split-articles big-split no-mobile-stretch-split alt-big-break center-text column-right-border"
          >
            <standard
              v-for="post in posts.slice(6, 7)"
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
              v-for="post in posts.slice(7, 11)"
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
              v-for="post in posts.slice(11, 15)"
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
      <!-- Prekid klub -->
      <client-only>
        <div class="full relative">
          <klub-offers></klub-offers>
        </div>
      </client-only>
      <tfooter></tfooter>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Kultura',
  async fetch() {
    await this.$axios.get('/api/category/kultura/page/1').then((res) => {
      this.posts = res.data.posts
    })
  },
  data() {
    return {
      loading: false,
      posts: [],
      page: 1,
    }
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/kultura/',
      },
    ]
    return {
      title: 'Kultura na Telegramu',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Najnovije i najbitnije u svijetu kulture - kazališta, knjige, filmovi, serije, glazba, i videoigre.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Najnovije i najbitnije u svijetu kulture - kazališta, knjige, filmovi, serije, glazba, i videoigre.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Kultura na Telegramu',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/nesto/kultura/',
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
