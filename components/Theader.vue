<template>
  <div class="full">
    <client-only>
      <div
        v-if="
          !(
            ($mobile && $route.name === 'index') ||
            (!$mobile && $route.name === 'category-slug') ||
            $route.name === 'openspace'
          )
        "
        class="full center header-billboard"
      >
        <ad-unit
          id="telegram_desktop_billboard_v1"
          :disable="
            post &&
            (post.disable_ads.includes('all') ||
              (post.category_slug && post.category_slug.includes('openspace')))
          "
        ></ad-unit>
      </div>
    </client-only>
    <div
      :class="{
        'side-menu': true,
        animate: true,
        center: true,
        'side-menu-activate': $store.state.header.showSideMenu,
      }"
      role="navigation"
    >
      <a
        class="side-menu-exit"
        aria-label="Zatvori lijevi meni"
        :aria-expanded="$store.state.header.showSideMenu.toString()"
        aria-controls="sidebar"
        @click.prevent="$store.commit('header/updateMenu', 'side')"
        ><font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
      </a>
      <div class="menu flex">
        <div class="half" role="menu">
          <client-only>
            <app-link
              v-show="!$store.state.user.access"
              to="/pretplata"
              class="signup-btn sub-btn"
              @click.native="maybeCloseSide"
              >Pretplatite se</app-link
            >
            <a v-show="canLogIn" class="signup-btn" @click.prevent="login"
              >Prijava</a
            >
            <app-link
              v-show="!canLogIn"
              to="/moj-racun"
              class="signup-btn"
              @click.native="maybeCloseSide"
              >Moj račun</app-link
            >
            <a v-show="!canLogIn" class="signup-btn" @click.prevent="logout"
              >Odjava</a
            >
          </client-only>
          <client-only>
            <div v-show="$store.state.user.admin" class="half">
              <h3>Admin</h3>
              <a role="menuitem" href="https://www.telegram.hr/wp-admin"
                >Admin</a
              >
              <a
                role="menuitem"
                href="https://www.telegram.hr/wp-admin/post-new.php"
              >
                Nova objava
              </a>
              <a
                v-show="id"
                :href="`https://www.telegram.hr/wp-admin/post.php?post=${id}&action=edit`"
                role="menuitem"
                >Uredi</a
              >
            </div>
          </client-only>
          <div class="full flex search-menu">
            <form
              class="relative"
              action=""
              method="get"
              @submit.prevent="search"
            >
              <input
                v-model="search_term"
                type="text"
                placeholder="Pretražite Telegram..."
                aria-label="Pretražite Telegram"
              />
              <button type="submit" class="animate" @click.prevent="search">
                <font-awesome-icon
                  :icon="['far', 'search']"
                ></font-awesome-icon>
              </button>
            </form>
          </div>
          <h3>Rubrika</h3>
          <app-link
            role="menuitem"
            to="/politika-kriminal"
            @click.native="maybeCloseSide"
            >Politika & Kriminal</app-link
          >
          <app-link
            role="menuitem"
            to="/komentari"
            @click.native="maybeCloseSide"
            >Komentari</app-link
          >
          <app-link
            role="menuitem"
            to="/biznis-tech"
            @click.native="maybeCloseSide"
            >Biznis & Tech</app-link
          >
          <app-link
            role="menuitem"
            to="/velike-price"
            @click.native="maybeCloseSide"
            >Velike priče</app-link
          >
          <app-link role="menuitem" to="/zivot" @click.native="maybeCloseSide"
            >Život</app-link
          >
          <app-link role="menuitem" to="/kultura" @click.native="maybeCloseSide"
            >Kultura</app-link
          >
        </div>
        <div class="half" role="menu">
          <h3>Postavke izgleda</h3>
          <div class="full flex theme-previews">
            <input
              id="regular-theme"
              v-model="color_theme"
              type="radio"
              class="hide"
              name="theme-selector"
              value="regular"
            />
            <label
              for="regular-theme"
              class="theme-preview standard-theme-preview animate"
              aria-label="Koristi normalnu temu"
              >Aa</label
            >
            <input
              id="contrast-theme"
              v-model="color_theme"
              type="radio"
              class="hide"
              name="theme-selector"
              value="contrast"
            />
            <label
              for="contrast-theme"
              class="theme-preview contrast-theme-preview animate contrast-mode"
              aria-label="Koristi temu povećanog kontrasta"
              >Aa</label
            >
            <input
              id="dark-theme"
              v-model="color_theme"
              type="radio"
              class="hide"
              name="theme-selector"
              value="dark"
            />
            <label
              for="dark-theme"
              class="theme-preview dark-theme-preview animate dark-mode"
              aria-label="Koristi tamnu temu"
              >Aa</label
            >
          </div>
          <div class="full flex fontsize-previews">
            <input
              id="small-fontsize"
              v-model="font_size"
              type="radio"
              class="hide"
              name="font-selector"
              value="small"
            />
            <label
              for="small-fontsize"
              class="theme-preview animate small-fontsize"
              aria-label="Smanji veličinu slova"
              >Aa</label
            >
            <input
              id="normal-fontsize"
              v-model="font_size"
              type="radio"
              class="hide"
              name="font-selector"
              value="normal"
            />
            <label
              for="normal-fontsize"
              class="theme-preview animate"
              aria-label="Koristi srednju veličinu slova"
              >Aa</label
            >
            <input
              id="large-fontsize"
              v-model="font_size"
              type="radio"
              class="hide"
              name="font-selector"
              value="large"
            />
            <label
              for="large-fontsize"
              class="theme-preview animate large-fontsize"
              aria-label="Povećaj veličinu slova"
              >Aa</label
            >
          </div>
          <h3>Kanali</h3>
          <a role="menuitem" href="https://super1.telegram.hr">Super1</a>
          <a role="menuitem" href="https://telesport.telegram.hr">Telesport</a>
          <app-link role="menuitem" to="/openspace">Openspace</app-link>
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
          <app-link
            role="menuitem"
            to="/stranica/impressum"
            @click.native="maybeCloseSide"
            >Impressum</app-link
          >
          <app-link
            role="menuitem"
            to="/stranica/oglasavanje"
            @click.native="maybeCloseSide"
            >Oglašavanje</app-link
          >
          <app-link
            role="menuitem"
            to="/stranica/uvjeti-koristenja"
            @click.native="maybeCloseSide"
            >Uvjeti korištenja</app-link
          >
        </div>
      </div>
    </div>
    <div class="full subheader sticky-subheader mobile-side-pad center">
      <div class="container flex desktop-subheader column-horizontal-pad">
        <div class="two-thirds flex" role="navigation">
          <app-link to="/" class="logo"
            ><img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
          /></app-link>
          <a
            :aria-expanded="$store.state.header.showSideMenu.toString()"
            aria-label="Prikaži lijevi meni"
            aria-controls="sidebar"
            @click.prevent="$store.commit('header/updateMenu', 'side')"
          >
            <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon>
          </a>
          <div class="menu flex" role="menu">
            <app-link role="menuitem" to="/politika-kriminal"
              >Politika & Kriminal</app-link
            >
            <app-link role="menuitem" to="/komentari">Komentari</app-link>
            <app-link role="menuitem" to="/biznis-tech">Biznis & Tech</app-link>
            <app-link role="menuitem" to="/velike-price">Velike priče</app-link>
            <app-link role="menuitem" to="/zivot">Život</app-link>
            <app-link role="menuitem" to="/kultura">Kultura</app-link>
            <app-link role="menuitem" to="/openspace">Openspace</app-link>
            <a href="https://super1.telegram.hr" role="menuitem">Super1</a>
            <a href="https://telesport.telegram.hr" role="menuitem">
              Telesport
            </a>
          </div>
          <div v-show="headline" class="header-headline single-exclusive">
            {{ headline }}
          </div>
        </div>
        <div class="flex third relative">
          <client-only>
            <app-link
              v-show="!$store.state.user.access"
              to="/pretplata"
              class="signup-btn sub-btn"
              >Pretplatite se</app-link
            >
            <a v-show="canLogIn" class="signup-btn" @click.prevent="login"
              >Prijava</a
            >
            <a v-show="!canLogIn" class="signup-btn" @click.prevent="logout"
              >Odjava</a
            >
            <app-link v-show="!canLogIn" to="/moj-racun" aria-label="Moj račun">
              <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon>
            </app-link>
          </client-only>
          <a
            aria-label="Prikaži tražilicu"
            :aria-expanded="$store.state.header.showSearchMenu.toString()"
            aria-controls="search"
            @click.prevent="$store.commit('header/updateMenu', 'search')"
          >
            <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon>
          </a>
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
          class="
            container
            desktop-only
            flex
            desktop-subheader
            column-horizontal-pad
            single-exclusive
          "
        >
          <div class="third flex">
            <a
              :aria-expanded="$store.state.header.showSideMenu.toString()"
              aria-label="Prikaži lijevi meni"
              aria-controls="sidebar"
              @click.prevent="$store.commit('header/updateMenu', 'side')"
            >
              <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon
            ></a>
          </div>
          <div class="third center relative">
            <app-link to="/" class="logo"
              ><img
                src="@/assets/img/telegram_logo_white.svg"
                alt="Telegram logo"
            /></app-link>
          </div>
          <div class="flex third relative">
            <client-only>
              <app-link
                v-show="!$store.state.user.access"
                to="/pretplata"
                class="signup-btn sub-btn"
                >Pretplatite se</app-link
              >
              <a v-show="canLogIn" class="signup-btn" @click.prevent="login"
                >Prijava</a
              >
              <a v-show="!canLogIn" class="signup-btn" @click.prevent="logout"
                >Odjava</a
              >
              <app-link
                v-show="!canLogIn"
                to="/moj-racun"
                aria-label="Moj račun"
              >
                <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon
              ></app-link>
            </client-only>
            <a
              href="#"
              aria-label="Prikaži tražilicu"
              :aria-expanded="$store.state.header.showSearchMenu.toString()"
              aria-controls="search"
              @click.prevent="$store.commit('header/updateMenu', 'search')"
            >
              <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon
            ></a>
          </div>
        </div>
        <!-- Mobile Subheader -->
        <div class="flex mobile-only">{{ date }}</div>
        <client-only>
          <div
            v-if="$store.state.stocks.stocks[stock_key]"
            class="flex mobile-only"
          >
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
          class="
            container
            desktop-only
            flex
            desktop-subheader
            column-horizontal-pad
            homepage-exclusive
          "
          role="navigation"
        >
          <div class="two-thirds flex" role="menu">
            <a
              :aria-expanded="$store.state.header.showSideMenu.toString()"
              aria-label="Prikaži lijevi meni"
              aria-controls="sidebar"
              @click="$store.commit('header/updateMenu', 'side')"
            >
              <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon
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
            </div>
          </div>
          <div class="flex third relative">
            <client-only>
              <app-link
                v-show="!$store.state.user.access"
                to="/pretplata"
                class="signup-btn sub-btn"
                >Pretplatite se</app-link
              >
              <a v-show="canLogIn" class="signup-btn" @click.prevent="login"
                >Prijava</a
              >
              <a v-show="!canLogIn" class="signup-btn" @click.prevent="logout"
                >Odjava</a
              >
              <app-link
                v-show="!canLogIn"
                to="/moj-racun"
                aria-label="Moj račun"
              >
                <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon
              ></app-link>
            </client-only>
            <a
              href="#"
              aria-label="Prikaži tražilicu"
              :aria-expanded="$store.state.header.showSearchMenu.toString()"
              aria-controls="search"
              @click.prevent="$store.commit('header/updateMenu', 'search')"
            >
              <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon
            ></a>
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
      <div class="full desktop-only">
        <breaking></breaking>
      </div>
      <nav class="full flex homepage-exclusive animate">
        <div class="container relative">
          <a
            class="mobile-only"
            aria-label="Prikaži lijevi meni"
            :aria-expanded="$store.state.header.showSideMenu.toString()"
            aria-controls="sidebar"
            @click.prevent="$store.commit('header/updateMenu', 'side')"
          >
            <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon
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
            v-show="canLogIn"
            class="mob-nav-otherbtn mobile-only"
            @click.prevent="login"
          >
            <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon
          ></a>
          <app-link
            v-show="!canLogIn"
            class="mobile-only mob-nav-otherbtn"
            to="/moj-racun"
            aria-label="Moj račun"
          >
            <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon
          ></app-link>
        </div>
      </nav>
      <div
        v-show="$store.state.header.showSearchMenu"
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
            <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon>
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
    headline: {
      type: String,
      required: false,
      default: '',
    },
    post: {
      type: Object,
      required: false,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      breaking: false,
      previousScroll: 0,
      dynamicHeader: false,
      hideDynamicHeader: false,
      search_term: '',
    }
  },
  computed: {
    canLogIn() {
      return this.$store.state.user.exp * 1000 < new Date().getTime()
    },
    color_theme: {
      get() {
        return this.$store.state.theme.theme
      },
      set(value) {
        this.$store.dispatch('theme/setTheme', { type: value, app: this })
      },
    },
    font_size: {
      get() {
        return this.$store.state.theme.font
      },
      set(value) {
        this.$store.dispatch('theme/setFont', { type: value, app: this })
      },
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
    this.clearFC()
    this.$store.dispatch('stocks/pullStocks')
    this.$store.dispatch('user/checkAccess')
    this.$store.dispatch('theme/loadTheme')
    this.triggerLogin()
  },
  methods: {
    clearFC() {
      if (process.client) {
        this.$store.dispatch('user/checkAdmin')
        if (!this.$cookies.get('FC_reset')) {
          this.$cookies.remove('FCCDCF')
          this.$cookies.set('FC_reset', 'true', {
            value: 'true',
            maxAge: 30 * 60 * 60 * 24,
            path: '/',
            domain: '.telegram.hr',
          })
        }
      }
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
        this.maybeCloseSide()
        this.$router.push('/search/' + this.search_term)
      }
    },
    login() {
      const _that = this
      this.maybeCloseSide()
      window.tp.pianoId.show({
        screen: 'login',
        loggedIn(data) {
          _that.$store.dispatch('user/setUser', data.user)
          _that.$store.commit('user/setToken', data.token)
          window.tp.api.callApi('/access/list', {}, function (response) {
            _that.$store.dispatch('user/setAccess', response).then(() => {
              window.location.reload()
            })
          })
        },
      })
    },
    triggerLogin() {
      if (this.$route.query.login && !this.$store.state.user.email) {
        const tp = window.tp || []
        tp.push([
          'init',
          () => {
            this.login()
          },
        ])
      }
    },
    logout() {
      this.maybeCloseSide()
      this.$store.dispatch('user/logout')
    },
    maybeCloseSide() {
      if (this.$mobile && this.$store.state.header.showSideMenu) {
        this.$store.commit('header/updateMenu', 'side')
      }
    },
  },
}
</script>
