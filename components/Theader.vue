<template>
  <div class="full">
    <!-- Side menu -->
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
              id="pretplatite se - burger menu"
              :to="
                $route.fullPath.includes('telesport')
                  ? '/pretplata/telesport'
                  : '/pretplata'
              "
              class="signup-btn sub-btn"
              >Pretplatite se</app-link
            >
            <a v-show="canLogIn" class="signup-btn" @click.prevent="login"
              >Prijava</a
            >
            <a
              v-show="!canLogIn"
              href="https://pretplata.telegram.hr/subscriptions/subscriptions/my"
              class="signup-btn"
              >Moj račun</a
            >
            <a v-show="!canLogIn" class="signup-btn" @click.prevent="logout"
              >Odjava</a
            >
          </client-only>
          <client-only>
            <div v-show="$store.state.user.admin" class="half">
              <div class="noththree">Admin</div>
              <a
                role="menuitem"
                href="https://www.telegram.hr/wp-admin"
                rel="nofollow"
                >Admin</a
              >
              <a
                role="menuitem"
                href="https://www.telegram.hr/wp-admin/post-new.php"
                rel="nofollow"
              >
                Nova objava
              </a>
              <a
                v-show="id"
                :href="`https://www.telegram.hr/wp-admin/post.php?post=${id}&action=edit`"
                rel="nofollow"
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
          <div class="noththree">Rubrika</div>
          <app-link role="menuitem" to="/vijesti">Vijesti</app-link>
          <app-link role="menuitem" to="/politika-kriminal"
            >Politika & Kriminal</app-link
          >
          <app-link role="menuitem" to="/komentari">Komentari</app-link>
          <app-link role="menuitem" to="/biznis-tech">Biznis & Tech</app-link>
          <app-link role="menuitem" to="/velike-price">Velike priče</app-link>
          <app-link role="menuitem" to="/zivot">Život</app-link>
          <app-link role="menuitem" to="/kultura">Kultura</app-link>
        </div>
        <div class="half" role="menu">
          <div class="noththree">Postavke izgleda</div>
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
            <input
              id="domoljub-theme"
              v-model="color_theme"
              type="radio"
              class="hide"
              name="theme-selector"
              value="domoljub"
            />
            <label
              for="domoljub-theme"
              class="theme-preview domoljub-theme-preview animate"
              aria-label="Koristi domoljubnu temu"
              >U domovinskom duhu</label
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
          <div class="noththree">Kanali</div>
          <app-link role="menuitem" to="/super1/">Super1</app-link>
          <app-link role="menuitem" to="/telesport/">Telesport</app-link>
          <app-link role="menuitem" to="/openspace/">Openspace</app-link>
          <app-link role="menuitem" to="/pitanje-zdravlja/"
            >PitanjeZdravlja</app-link
          >
        </div>
        <div class="half" role="menu">
          <div class="noththree">Social</div>
          <a
            role="menuitem"
            href="https://www.facebook.com/Telegram.hr/"
            rel="noreferrer nofollow"
            >Facebook</a
          >
          <a
            role="menuitem"
            href="https://twitter.com/telegramhr/"
            rel="noreferrer nofollow"
            >Twitter</a
          >
          <a
            role="menuitem"
            href="https://www.instagram.com/telegram.hr/"
            rel="noreferrer nofollow"
            >Instagram</a
          >
          <a
            role="menuitem"
            href="https://www.youtube.com/channel/UCV_gCZEP2ikrjZVTRulR7sw"
            rel="noreferrer nofollow"
            >Youtube</a
          >
          <a
            role="menuitem"
            href="https://whatsapp.com/channel/0029VaEJ3zWISTkHiZTQwI2f"
            rel="noreferrer nofollow"
            >WhatsApp</a
          >
        </div>
        <div class="half" role="menu">
          <div class="noththree">Info</div>
          <app-link role="menuitem" to="/pretplata">Pretplata</app-link>
          <app-link role="menuitem" to="/klub">Klub</app-link>
          <app-link role="menuitem" to="/knjiga">Knjige</app-link>
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
    <div
      v-show="$store.state.header.showSearchMenu"
      id="search"
      class="search-menu-activate sticky-search-menu search-menu animate full flex"
    >
      <div class="full flex relative">
        <div
          class="sticky-search-exit center clickable"
          aria-label="Zatvori tražilicu"
          :aria-expanded="$store.state.header.showSearchMenu.toString()"
          aria-controls="search"
          @click.prevent="$store.commit('header/updateMenu', 'search')"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>
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
    </div>
    <!-- New navbar -->
    <header
      :class="{
        full: true,
        flex: true,
        animate: true,
        'dynamic-header': dynamicHeader,
        'hide-dynamic-header': hideDynamicHeader,
      }"
    >
      <nav class="full center relative nayos stretch">
        <div class="container flex stretch relative column-horizontal-pad">
          <div class="third flex nayos-logos telegram-only the-big-t">
            <app-link to="/" class="flex">
              <img src="@/assets/img/t_logo.svg" alt="Telegram logo" />
              <img
                src="@/assets/img/t_logo.svg"
                alt="Telegram logo"
                class="dark-mode-only"
              />
            </app-link>
          </div>
          <app-link
            to="/super1"
            class="third mobile-side-pad nayos-logos alt-vertical-center superone-only"
          >
            <img
              src="@/assets/img/s1_logo_clean_noline.svg"
              alt="Super1 logo"
            />

            <img
              src="@/assets/img/s1_logo_clean_noline_white.svg"
              alt="Super1 logo"
              class="dark-mode-only"
            />
          </app-link>
          <a
            href="/telesport"
            class="third nayos-logos alt-vertical-center telesport-only"
          >
            <img
              src="@/assets/img/telesport_logo_black.svg"
              alt="Telesport logo"
            />

            <img
              src="@/assets/img/telesport_logo_white.svg"
              alt="Telesport logo"
              class="dark-mode-only"
            />
          </a>
          <app-link
            to="/pitanje-zdravlja"
            class="third mobile-side-pad nayos-logos alt-vertical-center pz-only"
          >
            <img
              src="@/assets/img/pz_logo_normal.svg"
              alt="PitanjeZdravlja logo"
            />

            <img
              src="@/assets/img/pz_logo_negative.svg"
              alt="PitanjeZdravlja logo"
              class="dark-mode-only"
            />
          </app-link>
          <app-link
            to="/openspace"
            class="third mobile-side-pad nayos-logos alt-vertical-center os-only"
          >
            <img
              src="@/assets/img/openspace_logo_normal.svg"
              alt="openspace logo"
              loading="lazy"
            />

            <img
              src="@/assets/img/openspace_logo_negative.svg"
              alt="openspace logo"
              class="dark-mode-only"
              loading="lazy"
            />
          </app-link>
          <app-link
            to="/igre"
            class="third mobile-side-pad nayos-logos alt-vertical-center games-only"
          >
            <img
              src="@/assets/img/t_games_normal.svg"
              alt="Telegram games logo"
              loading="lazy"
            />

            <img
              src="@/assets/img/t_games_negative.svg"
              alt="Telegram games logo"
              class="dark-mode-only"
              loading="lazy"
            />
          </app-link>
          <div class="two-thirds center align-children-end mobile-side-pad">
            <a v-show="canLogIn" class="signup-btn" @click.prevent="login"
              >Prijava</a
            >
            <app-link
              v-show="canLogIn"
              id="pretplatite se - header"
              :to="
                $route.fullPath.includes('telesport')
                  ? '/pretplata/telesport'
                  : '/pretplata'
              "
              class="newbtn"
              >Pretplatite se</app-link
            >
            <app-link
              v-show="!canLogIn && !$route.fullPath.includes('super1')"
              id="Kupite magazin - header"
              to="/knjiga/t-magazin"
              class="newbtn"
              >Kupite magazin</app-link
            >
            <a
              v-show="!canLogIn"
              class="column-mini-left-pad desktop-only"
              href="https://pretplata.telegram.hr/subscriptions/subscriptions/my"
              aria-label="Moj račun"
            >
              <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon>
            </a>
            <a
              class="desktop-only column-mini-left-pad"
              aria-label="Prikaži tražilicu"
              :aria-expanded="$store.state.header.showSearchMenu.toString()"
              aria-controls="search"
              @click.prevent="$store.commit('header/updateMenu', 'search')"
            >
              <font-awesome-icon :icon="['far', 'search']"></font-awesome-icon>
            </a>
            <a
              class="column-mini-left-pad"
              :aria-expanded="$store.state.header.showSideMenu.toString()"
              aria-label="Prikaži lijevi meni"
              aria-controls="sidebar"
              @click.prevent="$store.commit('header/updateMenu', 'side')"
            >
              <font-awesome-icon :icon="['far', 'bars']"></font-awesome-icon>
            </a>
          </div>
        </div>
      </nav>
    </header>
    <login></login>
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
        return {
          disable_ads: [],
          post_category: '',
          category_slug: '',
        }
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
      return this.$store.getters['user/canLogIn']
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
    showBreaking() {
      return !(
        (this.post.category_slug &&
          (this.post.category_slug.includes('openspace') ||
            this.post.category_slug.includes('pitanje-zdravlja'))) ||
        this.$route.path.includes('openspace') ||
        this.$route.path.includes('pitanje-zdravlja') ||
        this.$route.path.includes('moj-racun') ||
        this.$route.path.includes('pretplata')
      )
    },
  },
  mounted() {
    this.$store.dispatch('stocks/pullStocks')
    this.$nextTick(() => {
      this.$store.dispatch('user/checkAccess')
      this.$store.dispatch('user/checkAdmin')
    })
    this.$store.dispatch('theme/loadTheme')
  },
  methods: {
    search() {
      if (this.search_term) {
        this.maybeCloseSide()
        this.$router.push('/search/' + this.search_term)
      }
    },
    login() {
      this.maybeCloseSide()
      this.$store.dispatch('user/login')
    },
    logout() {
      this.maybeCloseSide()
      this.$store.dispatch('user/logout')
    },
    maybeCloseSide() {
      if (this.$store.state.header.showSideMenu) {
        this.$store.commit('header/updateMenu', 'side')
      }
    },
  },
}
</script>
