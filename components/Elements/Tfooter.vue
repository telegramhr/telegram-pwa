<template>
  <div class="full flex relative">
    <div
      v-show="!$store.state.user.token"
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
          <app-link to="/pretplata" class="btn animate"
            >Pretplatite se</app-link
          >
          <div class="btn animate" @click="login">Već imam pretplatu</div>
        </div>
      </div>
    </div>
    <footer class="full flex mobile-side-pad">
      <div class="container">
        <div class="full flex center">
          <div class="half main-footer-logo center">
            <img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
            />
          </div>
        </div>
        <div class="full flex center">
          <div class="full logo-line flex">
            <img src="@/assets/img/super1_logo_white.svg" alt="Telegram logo" />
            <img
              src="@/assets/img/telesport_logo_white.svg"
              alt="Telegram logo"
            />
            <img src="@/assets/img/tg_studio_white.svg" alt="Telegram logo" />
          </div>
        </div>
        <div class="full flex social-links center">
          <app-link
            to="https://www.facebook.com/www.telegram.hr/"
            class="center animate"
            aria-label="Facebook"
            ><i class="fab fa-facebook-f"></i
          ></app-link>
          <app-link
            to="https://twitter.com/telegramhr/"
            class="center animate"
            aria-label="Twitter"
            ><i class="fab fa-twitter"></i
          ></app-link>
          <app-link
            to="https://www.instagram.com/telegram.hr/"
            class="center animate"
            aria-label="Instagram"
            ><i class="fab fa-instagram"></i
          ></app-link>
          <app-link
            to="https://www.telegram.hr/feed"
            class="center animate"
            aria-label="RSS"
            ><i class="fas fa-rss"></i
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
          <app-link to="https://www.telegramgrupa.hr/jobs.php" class="animate"
            >Karijere</app-link
          >
          <app-link to="/stranica/uvjeti-koristenja" class="animate"
            >Uvjeti korištenja</app-link
          >
          <app-link to="/stranica/pravila-privatnosti" class="animate"
            >Pravila o privatnosti</app-link
          >
        </div>
        <div class="copyright full center-text">
          Sva prava pridržana &copy; {{ new Date().getFullYear() }} Telegram
          Media Grupa d.o.o.
        </div>
      </div>
      <div class="full center">
        <ad-unit id="telegram_sticky"></ad-unit>
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
      this.maybeCloseSide()
      window.tp.pianoId.show({
        screen: 'login',
        loggedIn(data) {
          _that.$store.dispatch('user/setUser', data)
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
