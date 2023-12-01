<template>
  <div :class="['main-container', 'flex', 'category-page', 'category-kultura']">
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
      <!-- Category header -->
      <div class="full flex relative">
        <div
          class="container flex stretch mobile-side-pad relative mobile-top-pad column-top-pad"
        >
          <div class="full column-horizontal-pad">
            <div class="full cantha-separator"></div>
          </div>
          <div
            class="two-thirds flex-responsive column-full-pad special-category-title"
          >
            <h1 class="full">
              <img src="@/assets/img/tg_square_logo_black.svg" alt="Telegram" />
              <img src="@/assets/img/tg_kultura_logo.svg" alt="Kultura" />
              <img
                src="@/assets/img/tg_square_logo_white.svg"
                class="dark-mode-only"
                alt="Telegram"
              />
              <img
                src="@/assets/img/tg_kultura_logo_negative.svg"
                class="dark-mode-only"
                alt="Kultura"
              />
              <span class="hide">Telegram Kultura</span>
            </h1>
            <div class="full cantha-block-title relative flex">
              <nav class="full menu flex" role="menu">
                <app-link role="menuitem" to="/tema/kazaliste"
                  >Kazalište</app-link
                >
                <app-link role="menuitem" to="/tema/film"
                  >Filmovi i serije</app-link
                >
                <app-link role="menuitem" to="/tema/knjizevnost"
                  >Knjige</app-link
                >
                <app-link role="menuitem" to="/tema/glazba">Glazba</app-link>
                <app-link role="menuitem" to="/tema/videoigre"
                  >Videoigre</app-link
                >
              </nav>
            </div>
          </div>
          <app-link
            v-if="$store.state.user.access"
            to="/pretplata"
            class="third desktop-only column-full-pad special-category-widget right-text relative"
          >
            <img
              src="@/assets/img/tg_pretplata_main_vizual_mini.jpg"
              class="img-as-bg"
              aria-hidden="true"
            />
            <p class="full animate">
              <span class="ib">Podržite Telegram za neograničeno čitanje </span
              ><span class="ib"
                >i popuste na top knjige, predstave i izložbe</span
              >
            </p>
            <div class="full flex align-children-end">
              <div class="flex newbtn animate clickable">Pretplatite se</div>
            </div>
          </app-link>
          <app-link
            v-if="!$store.state.user.access"
            to="/klub"
            class="third desktop-only column-full-pad special-category-widget right-text relative"
          >
            <img
              src="@/assets/img/tg_pretplata_main_vizual_mini.jpg"
              class="img-as-bg"
              aria-hidden="true"
            />
            <p class="full animate">
              <span class="ib">Hvala Vam što podržavate Telegram. </span
              ><span class="ib"
                >Uživajte u popustima na knjige, predstave i izložbe</span
              >
            </p>
            <div class="full flex align-children-end">
              <div class="flex newbtn animate clickable">Pogledajte ponude</div>
            </div>
          </app-link>
          <div class="full column-horizontal-pad desktop-only">
            <div class="full column-top-border"></div>
          </div>
        </div>
      </div>
      <!-- Veliki blok - intro -->
      <div class="full relative">
        <div
          class="container flex relative stretch block-kaineng mobile-top-pad"
        >
          <div class="full flex stretch column-top-pad mobile-side-pad">
            <div
              class="three-fourths flex-responsive column-horizontal-pad flex split-articles big-split no-mobile-stretch-split alt-big-break center-text column-right-border"
            >
              <standard
                v-for="post in posts.slice(0, 1)"
                :key="post.id"
                :post="post"
              ></standard>
            </div>
            <div
              class="fourth flex-responsive column-horizontal-pad smaller-featured-title"
            >
              <featured
                v-for="post in posts.slice(1, 2)"
                :key="post.id"
                :post="post"
              ></featured>
            </div>
          </div>
          <div class="full flex stretch">
            <div class="full flex column-full-pad mobile-side-pad">
              <div class="full column-top-border"></div>
            </div>
            <div
              v-for="post in posts.slice(2, 3)"
              :key="post.id"
              class="third flex-responsive column-right-border stretch mobile-side-pad"
            >
              <div
                class="full flex column-horizontal-pad no-mob-articlepad-border"
              >
                <featured :post="post"></featured>
              </div>
            </div>
            <app-link
              v-if="!$store.state.user.access"
              to="/pretplata"
              class="full flex mobile-only darkened-bg mobile-full-pad special-category-pretplata relative"
            >
              <img
                src="@/assets/img/tg_pretplata_main_vizual_mini.jpg"
                class="img-as-bg"
                aria-hidden="true"
              />
              <div class="full nothtwo center-text">
                <span class="ib"
                  >Podržite Telegram za neograničeno čitanje </span
                ><span class="ib"
                  >i popuste na top knjige, predstave i izložbe</span
                >
              </div>
              <div class="full center">
                <div class="flex newbtn huge-newbtn animate clickable">
                  Pretplatite se
                </div>
              </div>
            </app-link>
            <div
              v-for="post in posts.slice(3, 5)"
              :key="post.id"
              class="third flex-responsive column-right-border stretch mobile-side-pad"
            >
              <div class="full flex column-horizontal-pad">
                <featured :post="post"></featured>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Prekid klub -->
      <client-only>
        <div class="full relative">
          <klub-offers></klub-offers>
        </div>
      </client-only>
      <!-- Echovald rubrika -->
      <div class="full flex">
        <div
          class="container flex relative block-echovald stretch mobile-side-pad"
        >
          <div
            class="full column-horizontal-pad column-bottom-pad desktop-only"
          >
            <div class="full column-top-border"></div>
          </div>
          <div class="three-fourths flex-responsive flex stretch">
            <div class="half flex-responsive flex column-horizontal-pad">
              <featured
                v-for="post in posts.slice(7, 8)"
                :key="post.id"
                :post="post"
              />
            </div>
            <div
              class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
            >
              <medium
                v-for="post in posts.slice(8, 11)"
                :key="post.id"
                :post="post"
              ></medium>
            </div>
          </div>
          <div
            class="fourth flex-responsive column-horizontal-pad desktop-mini-force"
          >
            <standard
              v-for="post in posts.slice(11, 15)"
              :key="post.id"
              :post="post"
            ></standard>
          </div>
          <client-only>
            <div class="full relative center">
              <ad-unit id="telegram_desktop_billboard_v2"></ad-unit>
            </div>
          </client-only>
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
              v-for="post in posts.slice(16)"
              :key="post.id"
              class="fourth flex-responsive column-right-border column-horizontal-pad column-botton-margin"
            >
              <standard :post="post"></standard>
            </div>
          </div>
        </div>
      </div>
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
