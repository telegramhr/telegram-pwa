<template>
  <div class="full flex relative">
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
            <app-link to="/super1" class="center animate">
              <img
                src="@/assets/img/s1_logo_clean_noline_white.svg"
                alt="Super1 logo"
              />
            </app-link>
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
          <a
            href="https://www.facebook.com/Telegram.hr/"
            class="center animate"
            aria-label="Facebook"
            rel="noreferrer nofollow"
          >
            <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon
          ></a>
          <a
            href="https://twitter.com/telegramhr/"
            class="center animate"
            aria-label="Twitter"
            rel="noreferrer nofollow"
          >
            <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon
          ></a>
          <a
            href="https://www.instagram.com/telegram.hr/"
            class="center animate"
            aria-label="Instagram"
            rel="noreferrer nofollow"
          >
            <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon
          ></a>
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
        <div class="full center-text conversion-notice">
          Stopa konverzije kune u euro određena je na Vijeću za ekonomske i
          financijske poslove EU-a, 12.srpnja 2022., po središnjem paritetu, te
          iznosi 1 euro = 7,53450 kuna.
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
  props: {
    post: {
      type: Object,
      required: false,
      default() {
        return {
          id: 0,
          category_slug: '',
        }
      },
    },
  },
}
</script>
