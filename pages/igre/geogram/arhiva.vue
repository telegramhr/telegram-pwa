<template>
  <div class="main-container flex single-article tg-games">
    <div class="full flex">
      <client-only>
        <theader headline="Igre za naše pretplatnike"></theader>
      </client-only>
    </div>
    <div class="full flex relative pretplata-page">
      <div
        class="container smaller-container relative flex mobile-side-pad stretch column-full-pad"
      >
        <h1 class="full center-text">Geogram arhiva</h1>
        <p
          class="full center-text pretplata-tagline column-bottom-pad column-bottom-border mobile-vertical-pad mobile-bottom-border"
        >
          Sve razine Geograma, dostupne samo za pretplatnike
        </p>
      </div>
    </div>
    <div class="full flex relative column-bottom-pad">
      <div class="container smaller-container flex relative">
        <div
          class="third flex-responsive flex relative column-full-pad mobile-full-pad"
        >
          <div class="full flex tg-game-card">
            <div class="full flex relative">
              <div class="mystery-cover"></div>
              <img
                src="@/assets/img/games/geogram/geogram_1.jpg"
                aria-hidden="true"
              />
              <div class="mystery-cover"></div>
            </div>
            <div class="full flex column-full-pad mobile-full-pad">
              <app-link
                to="/igre/geogram/2024-09-01/"
                class="full newbtn center center-text huge-newbtn column-mini-bottom-margin"
              >
                Igraj
              </app-link>
              <div class="full minicard-text center-text">03.09.2024.</div>
            </div>
          </div>
        </div>
        <div
          class="third flex-responsive flex relative column-full-pad mobile-full-pad"
        >
          <div class="full flex tg-game-card">
            <div class="full flex relative">
              <div class="mystery-cover"></div>
              <img
                src="@/assets/img/games/geogram/geogram_2.jpg"
                aria-hidden="true"
              />
              <div class="mystery-cover"></div>
            </div>
            <div class="full flex column-full-pad mobile-full-pad">
              <app-link
                to="/igre/geogram/2024-09-02/"
                class="full newbtn center center-text huge-newbtn column-mini-bottom-margin"
              >
                Igraj
              </app-link>
              <div class="full minicard-text center-text">02.09.2024.</div>
            </div>
          </div>
        </div>
        <div
          class="third flex-responsive flex relative column-full-pad mobile-full-pad"
        >
          <div class="full flex tg-game-card">
            <div class="full flex relative">
              <div class="mystery-cover"></div>
              <img
                src="@/assets/img/games/geogram/geogram_3.jpg"
                aria-hidden="true"
              />
              <div class="mystery-cover"></div>
            </div>
            <div class="full flex column-full-pad mobile-full-pad">
              <app-link
                to="/igre/geogram/2024-09-01/"
                class="full newbtn center center-text huge-newbtn column-mini-bottom-margin"
              >
                Igraj
              </app-link>
              <div class="full minicard-text center-text">01.09.2024.</div>
            </div>
          </div>
        </div>
        <div class="full flex column-full-pad column-top-margin mobile-top-pad">
          <app-link
            to="/igre/geogram/"
            class="full center-text center newbtn huge-newbtn subtle-newbtn clickable"
          >
            Povratak na izbornik
          </app-link>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Games',
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/games/',
      },
    ]
    return {
      title: 'Igre za naše pretplatnike',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Hexagram, Statika, Geogram i mnoge druge intelektualne igre u produkciji Telegrama.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Hexagram, Statika, Geogram i mnoge druge intelektualne igre u produkciji Telegrama.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Igre za naše pretplatnike',
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
          content: 'https://www.telegram.hr/games/',
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
