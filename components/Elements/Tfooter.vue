<template>
  <div class="full flex relative">
    <!--<div
      v-show="!$store.state.user.access"
      class="full pretplata-ticker pretplata-prefooter relative"
    >
      <div class="container flex relative">
        <h2 class="full center-text">
          Bespoštedno novinarstvo koje gura društvo naprijed.
        </h2>
        <p class="full center-text">
          Za neograničeno čitanje Telegrama i podršku istraživačkim serijalima,
          odaberite jedan od paketa.
        </p>
        <div class="full center">
          <app-link
            id="pretplatite se - footer"
            to="/pretplata"
            class="btn animate"
            >Pretplatite se</app-link
          >
          <div class="btn animate" @click="login">Već imam pretplatu</div>
        </div>
      </div>
    </div>-->
    <app-link
      v-show="!$store.state.user.access"
      to="/pretplata"
      class="full dark-element book-pretplata-promo relative"
    >
      <div class="container relative flex mobile-side-pad">
        <div class="half column-full-pad center flex-responsive">
          <div class="full flex article">
            <h3 class="full overtitle">Specijalna ponuda</h3>
            <h1 class="full">Telegram <br />+ Bili libar</h1>
            <h4 class="full">
              Nova knjiga Borisa Dežulovića,<br />
              po posebnoj cijeni uz pretplatu
            </h4>
          </div>
        </div>
        <div class="half stretch flex flex-responsive">
          <div class="half column-top-pad center flex-responsive">
            <img
              src="@/assets/img/tg_knjiga_vizual_dezulovic_pretplata.png"
              alt="Portret Borisa Dežulovića i naslovnica njegove knjige 'Bili Libar'"
            />
          </div>
          <div class="half center column-horizontal-pad flex-responsive">
            <div class="full column-left-pad flex article">
              <h2 class="full relative center-text">
                <span class="faded strikethrough">149 kn</span> 99 kn
              </h2>
              <h2 class="full relative center-text">
                ekskluzivna prednarudžba za pretplatnike
              </h2>
              <div class="full center">
                <div class="newbtn huge-newbtn">Pretplatite se</div>
              </div>
              <h5 class="full center-text">
                Odaberite jednu od opcija pretplate na Telegram, nakon čega
                novog Dežulovića možete kupiti po specijalnoj cijeni.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </app-link>
    <footer class="full flex mobile-side-pad">
      <div class="container">
        <div class="full flex center">
          <div class="two-thirds main-footer-logo center">
            <img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
            />
          </div>
        </div>
        <div class="full flex center">
          <div class="full logo-line flex">
            <a
              href="https://super1.telegram.hr"
              target="_blank"
              class="center animate"
            >
              <img src="@/assets/img/super1_logo_white.svg" alt="Super1 logo" />
            </a>
            <a
              href="https://telesport.telegram.hr"
              target="_blank"
              class="center animate"
            >
              <img
                src="@/assets/img/telesport_logo_white.svg"
                alt="Telesport logo"
              />
            </a>
            <app-link to="/openspace" class="center animate">
              <img
                src="@/assets/img/openspace_logo_negative.svg"
                alt="openspace logo"
              />
            </app-link>
            <app-link to="/pitanje-zdravlja" class="center animate">
              <img
                src="@/assets/img/pz_logo_negative.svg"
                alt="openspace logo"
              />
            </app-link>
            <a
              href="https://www.telegramgrupa.hr#studio"
              target="_blank"
              class="center animate"
            >
              <img
                src="@/assets/img/tg_studio_white.svg"
                alt="TG Studio logo"
              />
            </a>
          </div>
        </div>
        <div class="full flex social-links center">
          <app-link
            to="https://www.facebook.com/Telegram.hr/"
            class="center animate"
            aria-label="Facebook"
          >
            <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon
          ></app-link>
          <app-link
            to="https://twitter.com/telegramhr/"
            class="center animate"
            aria-label="Twitter"
          >
            <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon
          ></app-link>
          <app-link
            to="https://www.instagram.com/telegram.hr/"
            class="center animate"
            aria-label="Instagram"
          >
            <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon
          ></app-link>
          <app-link
            to="https://www.telegram.hr/feed"
            class="center animate"
            aria-label="RSS"
          >
            <font-awesome-icon :icon="['fas', 'rss']"></font-awesome-icon
          ></app-link>
        </div>
        <div class="full flex services center">
          <app-link to="/pretplata" class="animate">Pretplata</app-link>
          <app-link to="/stranica/impressum" class="animate"
            >Impressum</app-link
          >
          <app-link to="/stranica/oglasavanje" class="animate"
            >Oglašavanje</app-link
          >
          <app-link to="/stranica/kontaktirajte-nas" class="animate"
            >Kontakt</app-link
          >
          <app-link to="/stranica/uvjeti-koristenja" class="animate"
            >Uvjeti korištenja</app-link
          >
          <app-link to="/stranica/pravila-privatnosti" class="animate"
            >Pravila o privatnosti</app-link
          >
          <a
            v-if="$route.name === 'openspace'"
            href="https://hr.jooble.org/"
            target="_blank"
          >
            Jooble oglasi
          </a>
        </div>
        <div class="copyright full center-text">
          Sva prava pridržana &copy; {{ new Date().getFullYear() }} Telegram
          Media Grupa d.o.o.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    login() {
      const _that = this
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
  },
}
</script>
