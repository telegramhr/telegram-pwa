<template>
  <footer v-if="!slim" class="tt-footer">
    <div class="tt-footer__inner">
      <div class="tt-footer__logo">
        <img
          src="/img/pretplata/telegram-tisak/logo/telegram-wordmark-black.svg"
          alt="Telegram"
          width="200"
          height="24"
          loading="lazy"
        />
      </div>
      <div class="tt-footer__cols">
        <div v-for="col in columns" :key="col.title" class="tt-footer__list">
          <p>{{ col.title }}</p>
          <a
            v-for="link in col.links"
            :key="link[1]"
            :href="link[1]"
            :target="link[2] ? '_blank' : null"
            :rel="link[2] ? 'nofollow noopener' : null"
            >{{ link[0] }}</a
          >
        </div>
      </div>
      <p class="tt-footer__copy">
        Sva prava pridržana © {{ year }} Presshaus d.o.o.
      </p>
    </div>
  </footer>
  <footer v-else class="tt-ffooter">
    <nav aria-label="Pravne informacije">
      <a href="https://www.telegram.hr/stranica/uvjeti-koristenja/"
        >Uvjeti korištenja</a
      >
      <a href="https://www.telegram.hr/stranica/pravila-privatnosti/"
        >Pravila privatnosti</a
      >
      <a href="https://www.telegram.hr/stranica/impressum/">Impressum</a>
      <a href="https://www.telegram.hr/stranica/kontaktirajte-nas/">Kontakt</a>
    </nav>
    <p>Sva prava pridržana © {{ year }} Presshaus d.o.o.</p>
  </footer>
</template>

<script>
const T = 'https://www.telegram.hr'

export default {
  name: 'TisakFooter',
  props: {
    // Flow screens get the one-line legal footer.
    slim: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      year: new Date().getFullYear(),
      columns: [
        {
          title: 'Vijesti',
          links: [
            ['Vijesti', `${T}/vijesti/`],
            ['Politika&Kriminal', `${T}/politika-kriminal/`],
            ['Komentari', `${T}/komentari/`],
            ['Biznis&Tech', `${T}/biznis-tech/`],
            ['Velike priče', `${T}/velike-price/`],
            ['Život', `${T}/zivot/`],
            ['Kultura', `${T}/kultura/`],
          ],
        },
        {
          title: 'Najnovije',
          links: [
            ['Rat u Ukrajini', `${T}/tema/rat-u-ukrajini/`],
            ['Hrvatska', `${T}/tema/hrvatska/`],
            ['Zagreb', `${T}/tema/zagreb/`],
            ['Split', `${T}/tema/split/`],
            ['Rijeka', `${T}/tema/rijeka/`],
            ['Osijek', `${T}/tema/osijek/`],
          ],
        },
        {
          title: 'Magazin',
          links: [
            ['Telesport', `${T}/telesport/`],
            ['Super1', `${T}/super1/`],
            ['PitanjeZdravlja', `${T}/pitanje-zdravlja/`],
            ['OpenSpace', `${T}/openspace/`],
          ],
        },
        {
          title: 'Pratite nas',
          links: [
            ['Facebook', 'https://www.facebook.com/Telegram.hr/', true],
            ['YouTube', 'https://www.youtube.com/@TelegramhrVideo', true],
            ['Instagram', 'https://www.instagram.com/telegram.hr/', true],
            ['TikTok', 'https://www.tiktok.com/@telegram.hr', true],
            ['Twitter', 'https://twitter.com/telegramhr/', true],
            [
              'WhatsApp',
              'https://whatsapp.com/channel/0029VaEJ3zWISTkHiZTQwI2f',
              true,
            ],
            ['RSS', `${T}/feed`, true],
          ],
        },
        {
          title: 'Plus',
          links: [
            ['Pretplata za fizičke korisnike', `${T}/pretplata/`],
            ['Pretplata za poslovne korisnike', `${T}/pretplata/b2b/`],
            ['Pošaljite nam vijest', `${T}/dojave/`],
            ['Impressum', `${T}/stranica/impressum/`],
            ['Oglašavanje', `${T}/stranica/oglasavanje/`],
            ['Kontakt', `${T}/stranica/kontaktirajte-nas/`],
            ['Uvjeti korištenja', `${T}/stranica/uvjeti-koristenja/`],
            ['Pravila privatnosti', `${T}/stranica/pravila-privatnosti/`],
          ],
        },
      ],
    }
  },
}
</script>
