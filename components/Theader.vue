<template>
  <div class="full">
    <div class="full center header-billboard">
      <ad-unit
        v-if="!mobile || $route.name !== 'index'"
        id="telegram_desktop_billboard_v1"
      ></ad-unit>
    </div>
    <div
      :class="{
        'side-menu': true,
        animate: true,
        center: true,
        'side-menu-activate': sideMenuShow,
      }"
      role="navigation"
    >
      <a
        class="side-menu-exit"
        aria-label="Zatvori lijevi meni"
        :aria-expanded="sideMenuShow.toString()"
        aria-controls="sidebar"
        @click.prevent="sideMenuShow = !sideMenuShow"
        ><i class="fas fa-times"></i
      ></a>
      <div class="menu flex">
        <div class="half" role="menu">
          <template v-if="loggedIn">
            <h3>Admin</h3>
            <a role="menuitem" href="https://www.telegram.hr/wp-admin">Admin</a>
            <a
              v-show="id"
              :href="`https://www.telegram.hr/wp-admin/post.php?post=${id}&action=edit`"
              role="menuitem"
              >Uredi</a
            >
          </template>
          <h3>Rubrika</h3>
          <app-link role="menuitem" to="/politika-kriminal"
            >Politika & Kriminal</app-link
          >
          <app-link role="menuitem" to="/komentari">Komentari</app-link>
          <app-link role="menuitem" to="/biznis-tech">Biznis & Tech</app-link>
          <app-link role="menuitem" to="/velike-price">Velike priče</app-link>
          <app-link role="menuitem" to="/zivot">Život</app-link>
          <app-link role="menuitem" to="/kultura">Kultura</app-link>
          <!--<app-link to="/fotogalerije">Fotogalerije</app-link>-->
        </div>
        <div class="half" role="menu">
          <h3>Kanali</h3>
          <a role="menuitem" href="https://super1.telegram.hr">Super1</a>
          <a role="menuitem" href="https://telesport.telegram.hr">Telesport</a>
        </div>
        <div class="half" role="menu">
          <h3>Social</h3>
          <a role="menuitem" href="https://www.facebook.com/www.telegram.hr/"
            >Facebook</a
          >
          <a role="menuitem" href="https://twitter.com/telegramhr/">Twitter</a>
          <a role="menuitem" href="https://www.instagram.com/telegram.hr/"
            >Instagram</a
          >
          <a
            role="menuitem"
            href="https://www.youtube.com/channel/UCV_gCZEP2ikrjZVTRulR7sw"
            >Youtube</a
          >
        </div>
        <div class="half" role="menu">
          <h3>Info</h3>
          <app-link role="menuitem" to="/stranica/impressum"
            >Impressum</app-link
          >
          <app-link role="menuitem" to="/stranica/oglasavanje"
            >Oglašavanje</app-link
          >
          <app-link role="menuitem" to="/stranica/uvjeti-koristenja"
            >Uvjeti korištenja</app-link
          >
        </div>
      </div>
    </div>
    <div class="full subheader sticky-subheader mobile-side-pad center">
      <div class="container flex desktop-subheader column-horizontal-pad">
        <div class="three-fourths flex" role="navigation">
          <app-link to="/" class="logo"
            ><img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
          /></app-link>
          <a
            :aria-expanded="sideMenuShow.toString()"
            aria-label="Prikaži lijevi meni"
            aria-controls="sidebar"
            @click.prevent="sideMenuShow = !sideMenuShow"
            ><i class="far fa-bars"></i
          ></a>
          <div class="menu flex" role="menu">
            <app-link role="menuitem" to="/politika-kriminal"
              >Politika & Kriminal</app-link
            >
            <app-link role="menuitem" to="/komentari">Komentari</app-link>
            <app-link role="menuitem" to="/biznis-tech">Biznis & Tech</app-link>
            <app-link role="menuitem" to="/velike-price">Velike priče</app-link>
            <app-link role="menuitem" to="/zivot">Život</app-link>
            <app-link role="menuitem" to="/kultura">Kultura</app-link>
            <!--<app-link to="/fotogalerije">Fotogalerije</app-link>-->
          </div>
          <div v-show="headline" class="header-headline single-exclusive">
            {{ headline }}
          </div>
        </div>
        <div class="flex fourth relative">
          <a
            aria-label="Prikaži tražilicu"
            :aria-expanded="searchMenuShow.toString()"
            aria-controls="search"
            @click.prevent="searchMenuShow = !searchMenuShow"
            ><i class="far fa-search"></i
          ></a>
          <app-link to="/newsletter" class="signup-btn">Prijavi se</app-link>
        </div>
      </div>
    </div>
    <!--<div
      :v-show="false"
      class="sticky-search-menu search-menu animate full center"
    >
      <form class="relative" action="" method="get" @submit.prevent="search">
        <input
          v-model="search_term"
          type="text"
          placeholder="Pretražite Telegram..."
          aria-label="Pretražite Telegram"
        />
        <button type="submit" class="animate" @click.prevent="search">
          <i class="far fa-search"></i>
        </button>
      </form>
    </div>-->
    <header
      :class="{
        full: true,
        flex: true,
        animate: true,
        'dynamic-header': dynamicHeader,
        'hide-dynamic-header': hideDynamicHeader,
      }"
    >
      <div class="full subheader mobile-side-pad center">
        <!-- Desktop Subheader -->
        <div
          class="container desktop-only flex desktop-subheader column-horizontal-pad single-exclusive"
        >
          <div class="fourth flex">
            <a
              :aria-expanded="sideMenuShow.toString()"
              aria-label="Prikaži lijevi meni"
              aria-controls="sidebar"
              @click.prevent="sideMenuShow = !sideMenuShow"
              ><i class="far fa-bars"></i
            ></a>
          </div>
          <div class="half center relative">
            <app-link to="/" class="logo"
              ><img
                src="@/assets/img/telegram_logo_white.svg"
                alt="Telegram logo"
            /></app-link>
          </div>
          <div class="flex fourth relative">
            <a
              href="#"
              aria-label="Prikaži tražilicu"
              :aria-expanded="searchMenuShow.toString()"
              aria-controls="search"
              @click.prevent="searchMenuShow = !searchMenuShow"
              ><i class="far fa-search"></i
            ></a>
            <app-link to="/newsletter" class="signup-btn">Prijavi se</app-link>
          </div>
        </div>
        <!-- Mobile Subheader -->
        <div class="flex mobile-only">{{ date }}</div>
        <client-only>
          <div v-if="$store.state.stocks.stocks" class="flex mobile-only">
            <img
              :src="
                '/stocks/tg_stonks_' +
                ($store.state.stocks.stocks[stock_key].up ? 'up' : 'down') +
                '.png'
              "
              aria-hidden="true"
            />{{ $store.state.stocks.stocks[stock_key].name }}
          </div>
        </client-only>
        <div
          id="sidebar"
          class="container desktop-only flex desktop-subheader column-horizontal-pad homepage-exclusive"
          role="navigation"
        >
          <div class="three-fourths flex" role="menu">
            <a
              :aria-expanded="sideMenuShow.toString()"
              aria-label="Prikaži lijevi meni"
              aria-controls="sidebar"
              @click="sideMenuShow = !sideMenuShow"
              ><i class="far fa-bars"></i
            ></a>
            <div class="menu flex">
              <app-link role="menuitem" to="/politika-kriminal"
                >Politika & Kriminal</app-link
              >
              <app-link role="menuitem" to="/komentari">Komentari</app-link>
              <app-link role="menuitem" to="/biznis-tech"
                >Biznis & Tech</app-link
              >
              <app-link role="menuitem" to="/velike-price"
                >Velike priče</app-link
              >
              <app-link role="menuitem" to="/zivot">Život</app-link>
              <app-link role="menuitem" to="/kultura">Kultura</app-link>
              <!--<app-link to="/fotogalerije">Fotogalerije</app-link>-->
            </div>
          </div>
          <div class="flex fourth relative">
            <a
              href="#"
              aria-label="Prikaži tražilicu"
              :aria-expanded="searchMenuShow.toString()"
              aria-controls="search"
              @click.prevent="searchMenuShow = !searchMenuShow"
              ><i class="far fa-search"></i
            ></a>
            <app-link to="/newsletter" class="signup-btn">Prijavi se</app-link>
          </div>
        </div>
        <client-only>
          <div
            v-if="$store.state.weather.zagreb[0].type"
            class="flex relative weather mobile-only"
          >
            <object
              type="image/svg+xml"
              :data="`/weather/${$store.state.weather.zagreb[0].type}.svg`"
            ></object
            ><span>{{ $store.state.weather.zagreb[0].temp }}&#176;c</span>
          </div>
        </client-only>
      </div>
      <div v-if="breaking" class="full desktop-only">
        <breaking></breaking>
      </div>
      <nav class="full flex homepage-exclusive animate">
        <div class="container relative">
          <a
            class="mobile-only"
            aria-label="Prikaži lijevi meni"
            :aria-expanded="sideMenuShow.toString()"
            aria-controls="sidebar"
            @click.prevent="sideMenuShow = !sideMenuShow"
            ><i class="far fa-bars"></i
          ></a>
          <app-link to="/" class="logo"
            ><img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
          /></app-link>
          <div class="desktop-only full center-text tagline">
            Portal za društvena i kulturna pitanja. I svijet koji dolazi.
          </div>
          <a
            class="mobile-only"
            aria-label="Prikaži tražilicu"
            :aria-expanded="searchMenuShow.toString()"
            aria-controls="search"
            @click.prevent="searchMenuShow = !searchMenuShow"
            ><i class="far fa-search"></i
          ></a>
        </div>
      </nav>
      <div
        v-show="searchMenuShow"
        id="search"
        class="search-menu-activate search-menu animate full center"
      >
        <form class="relative" action="" method="get" @submit.prevent="search">
          <input
            v-model="search_term"
            type="text"
            placeholder="Pretražite Telegram..."
            aria-label="Pretražite Telegram"
          />
          <button type="submit" class="animate" @click.prevent="search">
            <i class="far fa-search"></i>
          </button>
        </form>
      </div>
      <!--<div
        class="block-title full desktop-only weekday-title homepage-exclusive"
      >
        <div class="container flex relative">
          <div class="fourth flex column-horizontal-pad">
            <h2 class="full">
              <span class="superbold">Petak,</span>{{ date }}
            </h2>
            <h5>Želiš raditi za Telegram? Javi nam se ovdje.</h5>
          </div>
        </div>
      </div>-->
    </header>
    <div class="full mobile-only">
      <breaking></breaking>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    id: {
      type: Number,
      required: false,
      default: 0,
    },
    sideMenuShow: {
      type: Boolean,
      required: false,
      default: false,
    },
    searchMenuShow: {
      type: Boolean,
      required: false,
      default: false,
    },
    headline: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      breaking: false,
      previousScroll: 0,
      dynamicHeader: false,
      hideDynamicHeader: false,
      mobile: true,
      search_term: '',
    }
  },
  computed: {
    loggedIn() {
      if (!process.server) {
        const c = document.cookie
        return c.includes('wp-settings-time')
      }
      return false
    },
    date() {
      return new Intl.DateTimeFormat('hr-HR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date())
    },
    stock_key() {
      const keys = Object.keys(this.$store.state.stocks.stocks)
      return keys[Math.floor(Math.random() * keys.length)]
    },
  },
  mounted() {
    // this.handleDebouncedScroll = this.debounce(this.handleScroll, 100)
    // eslint-disable-next-line
    // window.addEventListener('scroll', this.handleDebouncedScroll)
    this.resize()
    this.$store.dispatch('stocks/pullStocks')
  },
  beforeDestroy() {
    // I switched the example from `destroyed` to `beforeDestroy`
    // to exercise your mind a bit. This lifecycle method works too.
    // window.removeEventListener('scroll', this.handleDebouncedScroll)
  },
  methods: {
    resize() {
      this.mobile = window.innerWidth < 1024
    },
    handleScroll() {
      if (window.scrollY) {
        this.dynamicHeader = true
        this.hideDynamicHeader = window.scrollY > this.previousScroll
      } else {
        this.dynamicHeader = false
        this.hideDynamicHeader = false
      }
      this.previousScroll = window.scrollY
    },
    debounce(func, wait, immediate) {
      let timeout
      return function () {
        const context = this
        const args = arguments
        const later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    },
    search() {
      if (this.search_term) {
        this.$router.push('/search/' + this.search_term)
      }
    },
  },
}
</script>
