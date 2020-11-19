<template>
  <div>
    <div
      :class="{
        'side-menu': true,
        animate: true,
        center: true,
        'side-menu-activate': sideMenuShow,
      }"
    >
      <a class="side-menu-exit" @click.prevent="sideMenuShow = !sideMenuShow"
        ><i class="fas fa-times"></i
      ></a>
      <div class="menu flex">
        <div class="half">
          <h3>Rubrika</h3>
          <main-menu></main-menu>
        </div>
        <div class="half">
          <h3>Kanali</h3>
          <a href="https://super1.telegram.hr">Super1</a>
          <a href="https://telesport.telegram.hr">Teleport</a>
        </div>
        <div class="half">
          <h3>Social</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">Youtube</a>
        </div>
        <div class="half">
          <h3>Info</h3>
          <a href="#">Impressum</a>
          <a href="#">Oglašavanje</a>
          <a href="#">Uvjeti korištenja</a>
        </div>
      </div>
    </div>
    <div class="full subheader sticky-subheader mobile-side-pad center">
      <div class="container flex desktop-subheader column-horizontal-pad">
        <div class="three-fourths flex">
          <nuxt-link to="/" class="logo"
            ><img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
          /></nuxt-link>
          <a @click.prevent="sideMenuShow = !sideMenuShow"
            ><i class="far fa-bars"></i
          ></a>
          <div class="menu flex">
            <main-menu></main-menu>
          </div>
          <div v-show="headline" class="header-headline single-exclusive">
            {{ headline }}
          </div>
        </div>
        <div class="flex fourth relative">
          <a @click.prevent="searchMenuShow = !searchMenuShow"
            ><i class="far fa-search"></i
          ></a>
          <a href="#" class="signup-btn">Prijavi se</a>
        </div>
      </div>
    </div>
    <div
      v-show="searchMenuShow"
      class="sticky-search-menu search-menu animate full center"
    >
      <form class="relative" action="" method="get">
        <input type="text" name="q" placeholder="Pretražite Telegram..." />
        <button type="submit" class="animate">
          <i class="far fa-search"></i>
        </button>
      </form>
    </div>
    <header class="full flex animate">
      <div class="full subheader mobile-side-pad center">
        <!-- Desktop Subheader -->
        <div
          class="container desktop-only flex desktop-subheader column-horizontal-pad single-exclusive"
        >
          <div class="fourth flex">
            <a @click.prevent="sideMenuShow = !sideMenuShow"
              ><i class="far fa-bars"></i
            ></a>
          </div>
          <div class="half center relative">
            <nuxt-link to="/" class="logo"
              ><img
                src="@/assets/img/telegram_logo_white.svg"
                alt="Telegram logo"
            /></nuxt-link>
          </div>
          <div class="flex fourth relative">
            <a href="#" @click.prevent="searchMenuShow = !searchMenuShow"
              ><i class="far fa-search"></i
            ></a>
            <nuxt-link to="/login" class="signup-btn">Prijavi se</nuxt-link>
          </div>
        </div>
        <!-- Mobile Subheader -->
        <div class="flex mobile-only">{{ date }}</div>
        <div class="flex mobile-only">
          <img src="@/assets/img/tg_stonks_up.png" aria-hidden="true" />DOW
        </div>
        <div
          class="container desktop-only flex desktop-subheader column-horizontal-pad homepage-exclusive"
        >
          <div class="three-fourths flex">
            <a @click="sideMenuShow = !sideMenuShow"
              ><i class="far fa-bars"></i
            ></a>
            <div class="menu flex">
              <main-menu></main-menu>
            </div>
          </div>
          <div class="flex fourth relative">
            <a href="#" @click.prevent="searchMenuShow = !searchMenuShow"
              ><i class="far fa-search"></i
            ></a>
            <nuxt-link to="/login" class="signup-btn">Prijavi se</nuxt-link>
          </div>
        </div>
        <div class="flex relative weather mobile-only">
          <object
            type="image/svg+xml"
            data="@/assets/img/weather/kisa_1.svg"
          ></object
          ><span>17&#176;c</span>
        </div>
      </div>
      <div class="full desktop-only">
        <breaking></breaking>
      </div>
      <nav class="full flex homepage-exclusive animate">
        <div class="container relative">
          <a class="mobile-only" @click.prevent="sideMenuShow = !sideMenuShow"
            ><i class="far fa-bars"></i
          ></a>
          <a href="index.php" class="logo"
            ><img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
          /></a>
          <div class="desktop-only full center-text tagline">
            Portal za društvena i kulturna pitanja. I svijet koji dolazi.
          </div>
          <a
            class="mobile-only"
            @click.prevent="searchMenuShow = !searchMenuShow"
            ><i class="far fa-search"></i
          ></a>
        </div>
      </nav>
      <div v-show="searchMenuShow" class="search-menu animate full center">
        <form class="relative" action="" method="get">
          <input type="text" name="q" placeholder="Pretražite Telegram..." />
          <button type="submit" class="animate">
            <i class="far fa-search"></i>
          </button>
        </form>
      </div>
      <div
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
      </div>
    </header>
    <div class="full mobile-only">
      <breaking></breaking>
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'
import Breaking from '@/components/Breaking'
export default {
  name: 'Header',
  components: {
    Breaking,
    MainMenu,
  },
  data() {
    return {
      searchMenuShow: false,
      sideMenuShow: false,
      headline: '',
    }
  },
  computed: {
    date() {
      return new Intl.DateTimeFormat('hr-HR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date())
    },
  },
}
</script>
