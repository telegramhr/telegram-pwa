<template>
  <div class="full flex relative">
    <footer class="full flex">
      <div class="container flex">
        <div
          class="full flex column-horizontal-pad column-mini-bottom-pad relative mobile-side-pad mobile-bottom-pad"
        >
          <div class="full center footer-logo-el">
            <div class="fifth column-right-pad flex tablet-half mobile-half">
              <img
                src="@/assets/img/telegram_logo_black.svg"
                alt="Telegram logo"
                class="light-mode-only"
                loading="lazy"
              />
              <img
                src="@/assets/img/telegram_logo_black.svg"
                alt="Telegram logo"
                class="contrast-mode-only"
                loading="lazy"
              />
              <img
                src="@/assets/img/telegram_logo_white.svg"
                alt="Telegram logo"
                class="dark-mode-only"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div
          class="fifth column-full-pad flex tablet-half mobile-half mobile-side-pad footer-list mobile-bottom-pad"
        >
          <p class="full bold column-mini-bottom-pad">Vijesti</p>
          <app-link to="/vijesti" class="full">Vijesti</app-link>
          <app-link to="/politika-kriminal" class="full"
            >Politika&Kriminal</app-link
          >
          <app-link to="/komentari" class="full">Komentari</app-link>
          <app-link to="/biznis-tech" class="full">Biznis&Tech</app-link>
          <app-link to="/velike-price" class="full">Velike priče</app-link>
          <app-link to="/zivot" class="full">Život</app-link>
          <app-link to="/kultura" class="full">Kultura</app-link>
        </div>
        <div
          class="fifth column-full-pad flex tablet-half mobile-half mobile-side-pad footer-list mobile-bottom-pad"
        >
          <p class="full bold column-mini-bottom-pad">Najnovije</p>

          <app-link to="/tema/rat-u-ukrajini/" class="full"
            >Rat u Ukrajini</app-link
          >
          <app-link to="/tema/koronavirus/" class="full">Koronavirus</app-link>
          <app-link to="/tema/hrvatska/" class="full">Hrvatska</app-link>
          <app-link to="/tema/zagreb/" class="full">Zagreb</app-link>
          <app-link to="/tema/split/" class="full">Split</app-link>
          <app-link to="/tema/rijeka/" class="full">Rijeka</app-link>
          <app-link to="/tema/osijek/" class="full">Osijek</app-link>
        </div>
        <div
          class="fifth column-full-pad flex tablet-half mobile-half mobile-side-pad footer-list mobile-bottom-pad"
        >
          <p class="full bold column-mini-bottom-pad">Magazin</p>
          <a href="https://telesport.telegram.hr/" class="full">Telesport</a>
          <app-link to="/super1" class="full">Super1</app-link>
          <app-link to="/pitanje-zdravlja" class="full"
            >PitanjeZdravlja</app-link
          >
          <app-link to="/openspace" class="full">OpenSpace</app-link>
        </div>
        <div
          class="fifth column-full-pad flex tablet-half mobile-half mobile-side-pad footer-list mobile-bottom-pad"
        >
          <p class="full bold column-mini-bottom-pad">Pratite nas</p>
          <a
            href="https://www.facebook.com/Telegram.hr/"
            target="_blank"
            class="full"
            rel="nofollow"
            >Facebook</a
          >
          <a
            href="https://www.youtube.com/@TelegramhrVideo"
            target="_blank"
            class="full"
            rel="nofollow"
            >YouTube</a
          >
          <a
            href="https://www.instagram.com/telegram.hr/"
            target="_blank"
            class="full"
            rel="nofollow"
            >Instagram</a
          >
          <a
            href="https://www.tiktok.com/@telegram.hr"
            target="_blank"
            class="full"
            rel="nofollow"
            >TikTok</a
          >
          <a
            href="https://twitter.com/telegramhr/"
            target="_blank"
            class="full"
            rel="nofollow"
            >Twitter</a
          >
          <a
            href="https://whatsapp.com/channel/0029VaEJ3zWISTkHiZTQwI2f"
            target="_blank"
            class="full"
            rel="nofollow"
            >WhatsApp</a
          >
          <a href="https://www.telegram.hr/feed" target="_blank" class="full"
            >RSS</a
          >
        </div>
        <div
          class="fifth column-full-pad flex tablet-half mobile-half mobile-side-pad footer-list mobile-bottom-pad"
        >
          <p class="full bold column-mini-bottom-pad">Plus</p>

          <app-link to="/pretplata" class="full">Pretplata </app-link>
          <app-link to="/dojave" class="full">Pošaljite nam vijest</app-link>
          <app-link to="/stranica/impressum" class="full">Impressum</app-link>
          <app-link to="/stranica/oglasavanje" class="full"
            >Oglašavanje</app-link
          >
          <app-link to="/stranica/kontaktirajte-nas" class="full"
            >Kontakt
          </app-link>
          <app-link to="/stranica/uvjeti-koristenja" class="full"
            >Uvjeti korištenja</app-link
          >
          <app-link to="/stranica/pravila-privatnosti" class="full"
            >Pravila privatnosti</app-link
          >
        </div>
        <div class="full flex column-horizontal-pad mobile-side-pad">
          <div class="full flex column-top-pad column-top-border"></div>
          <div class="full center-text conversion-notice mobile-top-pad">
            Stopa konverzije kune u euro određena je na Vijeću za ekonomske i
            financijske poslove EU-a, 12.srpnja 2022., po središnjem paritetu,
            te iznosi 1 euro = 7,53450 kuna.
          </div>
          <div class="copyright full center-text">
            Sva prava pridržana &copy; {{ new Date().getFullYear() }} Telegram
            Media Grupa d.o.o.
          </div>
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
