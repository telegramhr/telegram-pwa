<template>
  <footer class="full flex mobile-side-pad">
    <div class="container">
      <div class="full flex center">
        <div class="half main-footer-logo center">
          <img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo" />
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
          ><i class="fab fa-facebook-f"></i
        ></app-link>
        <app-link to="https://twitter.com/telegramhr/" class="center animate"
          ><i class="fab fa-twitter"></i
        ></app-link>
        <app-link
          to="https://www.instagram.com/telegram.hr/"
          class="center animate"
          ><i class="fab fa-instagram"></i
        ></app-link>
        <app-link to="https://www.telegram.hr/feed" class="center animate"
          ><i class="fas fa-rss"></i
        ></app-link>
      </div>
      <div class="full flex services center">
        <app-link to="/stranica/impressum" class="animate">Impressum</app-link>
        <app-link to="/stranica/marketing" class="animate"
          >Oglašavanje</app-link
        >
        <app-link to="/stranica/kontakt" class="animate">Kontakt</app-link>
        <app-link to="/stranica/karijere" class="animate">Karijere</app-link>
        <app-link to="/stranica/uvjeti-koristenja" class="animate"
          >Uvjeti korištenja</app-link
        >
        <app-link to="/pravila-privatnosti" class="animate"
          >Pravila o privatnosti</app-link
        >
      </div>
      <div class="copyright full center-text">
        Sva prava pridržana &copy; 2020 Telegram Media Grupa d.o.o.
      </div>
    </div>
    <div class="stickyunit">
      <ad-unit id="telegram_sticky"></ad-unit>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
