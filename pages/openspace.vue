<template>
  <div class="main-container flex fancy-rubrika openspace">
    <div class="full flex">
      <theader></theader>
    </div>
    <div class="full flex relative fancy-rubrika-header">
      <div class="os-section-title-left-el"></div>
      <div class="os-section-title-right-el"></div>
      <div class="container flex fancyr-section-parent">
        <h1
          class="
            full
            section-title
            mobile-side-pad
            center-text
            column-full-pad
            os-section-title
            hide
          "
        >
          openspace
        </h1>
        <div class="full center">
          <img
            src="@/assets/img/openspace_logo_normal.svg"
            class="os-header-logo light-mode-only"
            alt="openspace logo"
          />
          <img
            src="@/assets/img/openspace_logo_normal.svg"
            class="os-header-logo contrast-mode-only"
            alt="openspace logo"
          />
          <img
            src="@/assets/img/openspace_logo_negative.svg"
            class="os-header-logo dark-mode-only"
            alt="openspace logo"
          />
        </div>
        <nav class="full center page-header-nav">
          <app-link role="menuitem" to="/vjestine">Vještine</app-link>
          <app-link role="menuitem" to="/tvrtke-karijere"
            >Tvrtke i karijere</app-link
          >
          <app-link role="menuitem" to="/kvizovi-testovi"
            >Kvizovi i testovi</app-link
          >
          <app-link role="menuitem" to="/vodici">Vodiči</app-link>
        </nav>
      </div>
    </div>
    <div v-if="featured.length" class="full relative">
      <div class="container flex relative stretch standard-block intro-block">
        <div
          class="full flex column-horizontal-pad column-top-pad mobile-side-pad"
        >
          <div class="full flex article-big column-bottom-border">
            <featured :key="featured[0].id" :post="featured[0]"></featured>
          </div>
        </div>
        <div class="full flex mobile-side-pad stretch">
          <div
            v-for="post in featured.slice(1, 4)"
            :key="post.id"
            class="third flex-responsive column-vertical-pad stretch"
          >
            <div class="full flex column-horizontal-pad">
              <featured :post="post"></featured>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-title news-block-title full mobile-side-pad hide">
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <h1 class="column-left-pad full">Još priča</h1>
      </div>
    </div>
    <div class="full flex relative os-about-section">
      <div class="container column-vertical-pad mobile-side-pad flex">
        <h2 class="full flex column-horizontal-pad os-elevate-title">
          Što je Open Space?
        </h2>
        <div class="full flex relative">
          <div
            class="
              third
              column-horizontal-pad
              flex-responsive
              column-right-border
            "
          >
            <h3 class="full os-about-subtitle">Alati za najbolji posao</h3>
            <p>
              Platforma Openspace pruža vam sve potrebne alate za ostvarivanje
              punog profesionalnog potencijala, od pronalaska idealnog radnog
              mjesta do promjene karijere ili pregovora o povišici.
            </p>
          </div>
          <div
            class="
              third
              column-horizontal-pad
              flex-responsive
              column-right-border
            "
          >
            <h3 class="full os-about-subtitle">Vodiči, savjeti i vještine</h3>
            <p>
              Kroz životne priče i inspirativne primjere pojedinaca i kompanija,
              dajemo vam insajderski uvid u najkorisnije vještine i savjete za
              vaš profesionalni put, kao i motivaciju za daljnji napredak.
            </p>
          </div>
          <div class="third column-horizontal-pad flex-responsive">
            <h3 class="full os-about-subtitle">Najbolji ljudi za tim</h3>
            <p>
              Mjesto za poslodavce koji žele ispričati svoju priču, predstaviti
              kulturu i objasniti vrijednosti, te tako pronaći potencijalne
              zaposlenike koji bi se najbolje mogli uklopiti u vaše planove.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="featured.length" class="full relative">
      <div class="container flex relative block-2 standard-block stretch">
        <section
          class="
            fourth
            flex flex-responsive
            column-horizontal-pad
            mobile-side-pad
          "
        >
          <div class="full flex desktop-only">
            <h3 class="full flex overtitle os-widget-overtitle">Newsletter</h3>
            <newsletter></newsletter>
            <h3 class="full flex overtitle os-widget-overtitle">
              Open Space Test
            </h3>
            <ostest></ostest>
            <h3 class="full flex overtitle os-widget-overtitle">
              Pregled prilika
            </h3>
            <app-link
              to="komentari"
              class="full flex komentar os-prilika relative"
            >
              <div class="komentar-author relative flex">
                <img
                  src="@/assets/img/extras/partner_logos/rimac_automobili.png"
                  loading="lazy"
                />
                <i class="full mobile-only">Donosi</i>
                <span class="full mobile-only">Rimac Automobili</span>
              </div>
              <div class="komentar-box relative">
                <div class="komentar-quotation">
                  <font-awesome-icon
                    :icon="['fas', 'briefcase']"
                  ></font-awesome-icon>
                </div>
                <div class="komentar-image">
                  <picture>
                    <img
                      src="https://images.telegram.hr/MHh6tv8Sf5-PdPpF_vCdav5LWN_mIW8kIUUAetmZ1gI/preset:single2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDgvMjAyMDEyMjItMDEtMjguanBn.jpg"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div class="komentar-content full">
                  <div class="komentar-author relative flex desktop-only">
                    <i class="full">Donosi</i>
                    <span class="full">Rimac Automobili</span>
                  </div>
                  <h2 class="full animate">
                    Sensor Fusion & Scene Understanding Research Engineer
                  </h2>
                  <h5 class="full flex article-meta">
                    <span class="meta-author"><i>Prijave do</i></span>
                    <span class="meta-date">22.09.2021.</span>
                  </h5>
                </div>
              </div>
            </app-link>
            <app-link
              to="komentari"
              class="full flex komentar os-prilika relative"
            >
              <div class="komentar-author relative flex">
                <img
                  src="@/assets/img/extras/partner_logos/ht.png"
                  loading="lazy"
                />
                <i class="full mobile-only">Donosi</i>
                <span class="full mobile-only">Hrvatski Telekom</span>
              </div>
              <div class="komentar-box relative">
                <div class="komentar-quotation">
                  <font-awesome-icon
                    :icon="['fas', 'briefcase']"
                  ></font-awesome-icon>
                </div>
                <div class="komentar-image">
                  <picture>
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2021/08/5g-unboxing-smart-city-2-11-screenshot.png"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div class="komentar-content full">
                  <div class="komentar-author relative flex desktop-only">
                    <i class="full">Donosi</i>
                    <span class="full">Hrvatski Telekom</span>
                  </div>
                  <h2 class="full animate">
                    Operater za tehničku podršku poslovnim korisnicima
                  </h2>
                  <h5 class="full flex article-meta">
                    <span class="meta-author"><i>Prijave do</i></span>
                    <span class="meta-date">25.09.2021.</span>
                  </h5>
                </div>
              </div>
            </app-link>
            <app-link
              to="komentari"
              class="full flex komentar os-prilika relative"
            >
              <div class="komentar-author relative flex">
                <img
                  src="@/assets/img/extras/partner_logos/rimac_automobili.png"
                  loading="lazy"
                />
                <i class="full mobile-only">Donosi</i>
                <span class="full mobile-only">Rimac Automobili</span>
              </div>
              <div class="komentar-box relative">
                <div class="komentar-quotation">
                  <font-awesome-icon
                    :icon="['fas', 'briefcase']"
                  ></font-awesome-icon>
                </div>
                <div class="komentar-image">
                  <picture>
                    <img
                      src="https://images.telegram.hr/MHh6tv8Sf5-PdPpF_vCdav5LWN_mIW8kIUUAetmZ1gI/preset:single2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDgvMjAyMDEyMjItMDEtMjguanBn.jpg"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div class="komentar-content full">
                  <div class="komentar-author relative flex desktop-only">
                    <i class="full">Donosi</i>
                    <span class="full">Rimac Automobili</span>
                  </div>
                  <h2 class="full animate">
                    Sensor Fusion & Scene Understanding Research Engineer
                  </h2>
                  <h5 class="full flex article-meta">
                    <span class="meta-author"><i>Prijave do</i></span>
                    <span class="meta-date">22.09.2021.</span>
                  </h5>
                </div>
              </div>
            </app-link>
          </div>
        </section>
        <div class="three-fourths flex-responsive flex">
          <section
            class="
              two-thirds
              flex-responsive flex
              mobile-side-pad
              column-horizontal-pad column-right-border column-left-border
            "
          >
            <featured :key="featured[4].id" :post="featured[4]"></featured>
            <div class="full flex split-articles">
              <template v-for="post in featured.slice(5, 8)">
                <medium :key="post.id" :post="post"></medium>
              </template>
            </div>
          </section>
          <section
            class="
              third
              flex-responsive flex
              mobile-side-pad
              column-horizontal-pad
            "
          >
            <template v-for="post in featured.slice(8, 11)">
              <medium :key="post.id" :post="post"></medium>
            </template>
          </section>
        </div>
      </div>
    </div>
    <client-only>
      <big-featured type="openspace"></big-featured>
    </client-only>
    <div class="full flex">
      <div class="container flex relative native-block stretch mobile-side-pad">
        <div
          v-for="post in posts"
          :key="post.id"
          class="fourth flex-responsive column-full-pad"
        >
          <standard :post="post"></standard>
        </div>
        <div class="full center subtle-btn-parent relative clickable">
          <div class="subtle-btn animate">Vidi više</div>
          <div class="subtle-btn-line"></div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('openspace/pullPosts')
    await this.$store
      .dispatch('category/pullPosts', {
        category: 'openspace',
      })
      .catch(() => {
        if (process.server) {
          this.$telegram.context.res.statusCode = 404
        }
        throw new Error('Kategorija ne postoji')
      })
  },
  data() {
    return {
      loading: false,
      hasMore: true,
    }
  },
  computed: {
    featured() {
      return this.$store.state.openspace.posts
    },
    posts() {
      return this.$store.state.category.categories.openspace.posts
    },
  },
  head() {
    return {
      title:
        'openspace - platforma za poslovne vijesti, prilike i usavršavanje',
    }
  },
}
</script>
