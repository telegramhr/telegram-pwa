<template>
  <div class="main-container flex single-article">
    <div class="full flex">
      <client-only>
        <theader headline="Igre za naše pretplatnike"></theader>
      </client-only>
    </div>
    <div class="full center relative tg-game-hero geogram-bg pretplata-page">
      <div
        class="container smaller-container relative flex mobile-side-pad stretch column-full-pad"
      >
        <div class="full center column-full-pad mobile-full-pad">
          <img src="@/assets/img/games/tg_icon_geogram.svg" alt="Geogram" />
        </div>
        <h1 class="full center-text">Geogram</h1>
        <p class="full center-text pretplata-tagline column-bottom-pad">
          Pogodite lokaciju neke fotografije iz Hrvatske
        </p>
        <div class="full center column-bottom-pad">
          <app-link
            to="/igre/geogram/2024-09-01/"
            class="newbtn center center-text huge-newbtn column-mini-bottom-margin"
          >
            Igraj
          </app-link>
        </div>
      </div>
    </div>
    <div class="full flex relative column-bottom-pad">
      <div
        class="container smaller-container relative flex mobile-side-pad stretch column-full-pad"
      >
        <div class="half flex-responsive column-full-pad">
          <img
            src="@/assets/img/tg_pretplata_keypoint_vizual_autori.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="half center flex-responsive column-full-pad">
          <div class="full flex">
            <div class="full bigger-text bold column-mini-bottom-pad">
              Lorem Ipsum Dolor Sit
            </div>
            <p>
              Lorem Ipsum is dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>
<style scoped>
.tg-game-hero {
  min-height: 80vh;
}
.tg-game-hero img {
  max-width: 30%;
  margin-bottom: 1rem;
  aspect-ratio: 1/1;
  object-fit: contain;
  object-position: center center;
}
.geogram-bg {
  background: rgb(224, 224, 224);
}
</style>

<script>
export default {
  name: 'Geogram',
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/igre/geogram',
      },
    ]
    return {
      title: 'Geogram',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Odredite gdje u lijepoj našoj se nalazi fotografija naše redakcije ili pretplatnika.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Odredite gdje u lijepoj našoj se nalazi fotografija naše redakcije ili pretplatnika.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Geogram',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/img/tg_naslovna_2023_12_06_book.jpg',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/games/geogram/',
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
