<template>
  <div class="main-container flex single-article">
    <div class="full flex">
      <client-only>
        <theader headline="Igre za naše pretplatnike"></theader>
      </client-only>
    </div>
    <div class="full flex relative pretplata-page">
      <div
        class="container smaller-container relative flex mobile-side-pad stretch column-full-pad"
      >
        <h1 class="full center-text">Telegram Igre</h1>
        <p
          class="full center-text pretplata-tagline column-bottom-pad column-bottom-border mobile-vertical-pad mobile-bottom-border"
        >
          Zabavne i intelektualne igre u produkciji Telegrama
        </p>
      </div>
    </div>
    <div class="full flex relative column-bottom-pad">
      <div class="container smaller-container flex relative">
        <div
          class="third flex-responsive flex relative column-full-pad mobile-full-pad"
        >
          <div class="full flex tg-game-card">
            <div
              class="full darkened-bg tg-game-header center flex-wrap column-full-pad mobile-full-pad"
            >
              <img
                src="@/assets/img/games/tg_icon_hexagram_alt.svg"
                alt="Hexagram"
              />
              <div class="full tg-game-title center-text">Hexagram</div>
            </div>
            <div class="full flex column-full-pad mobile-full-pad">
              <a
                href="https://pwa.telegram.hr/igre/hexagram/01-06-2024"
                target="_blank"
                class="full newbtn center center-text huge-newbtn column-mini-bottom-margin"
              >
                Igraj
              </a>
              <div class="full minicard-text center-text">
                Pronađite riječi u mreži slova i iskoristite svaki šesterokut.
              </div>
            </div>
          </div>
        </div>
        <div
          class="third flex-responsive flex relative column-full-pad mobile-full-pad"
        >
          <div class="full flex tg-game-card">
            <div
              class="full darkened-bg tg-game-header center flex-wrap column-full-pad mobile-full-pad"
            >
              <img src="@/assets/img/games/tg_icon_statika.svg" alt="Statika" />
              <div class="full tg-game-title center-text">Statika</div>
            </div>
            <div class="full flex column-full-pad mobile-full-pad">
              <div
                class="full newbtn center center-text huge-newbtn column-mini-bottom-margin"
              >
                Igraj
              </div>
              <div class="full minicard-text center-text">
                Slažite riječi jedne na drugu u što duljem lancu.
              </div>
            </div>
          </div>
        </div>
        <div
          class="third flex-responsive flex relative column-full-pad mobile-full-pad"
        >
          <div class="full flex tg-game-card">
            <div
              class="full darkened-bg tg-game-header center flex-wrap column-full-pad mobile-full-pad"
            >
              <img src="@/assets/img/games/tg_icon_geogram.svg" alt="Geogram" />
              <div class="full tg-game-title center-text">Geogram</div>
            </div>
            <div class="full flex column-full-pad mobile-full-pad">
              <app-link
                to="/igre/geogram"
                class="full newbtn center center-text huge-newbtn column-mini-bottom-margin"
              >
                Igraj
              </app-link>
              <div class="full minicard-text center-text">
                Pogodite lokaciju neke fotografije iz Hrvatske
              </div>
            </div>
          </div>
        </div>
        <div class="full column-horizontal-pad pretplata-page">
          <p
            class="full center-text pretplata-tagline column-top-pad mobile-vertical-pad"
          >
            Vaši prijatelji igraju
          </p>
        </div>
        <div
          class="third flex-responsive flex relative column-full-pad mobile-full-pad"
        >
          <div class="tg-game-card column-mini-vertical-pad center flex-wrap">
            <div class="third flex column-mini-horizontal-pad">
              <img
                src="https://images.telegram.hr/dh_7jSDHLNDkNbirTNA9l9x-lvF-PtA_RnRbh3qzBOY/preset:author/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDcvdGdfa2xhcmljLnBuZw.webp"
                alt="Jasmin Klarić"
                class="tg-game-avatar darkened-bg"
              />
            </div>
            <div class="two-thirds flex">
              <div class="full barlow bold">Jasmin Klarić</div>
              <div class="full minicard-text">Danas: Hexagram</div>
            </div>
          </div>
        </div>
        <div
          class="third flex-responsive flex relative column-full-pad mobile-full-pad"
        >
          <div class="tg-game-card column-mini-vertical-pad center flex-wrap">
            <div class="third flex column-mini-horizontal-pad">
              <img
                src="https://images.telegram.hr/7eSaxH6IFu3wzHNXirmUqjpItPKZPIqNnc1tteo7l2U/preset:author/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTEvdGcta2F0YXJpbmEta25lemV2aWMucG5n.webp"
                alt="Katarina Knežević Metelko"
                class="tg-game-avatar darkened-bg"
              />
            </div>
            <div class="two-thirds flex">
              <div class="full barlow bold">Katarina Knežević Metelko</div>
              <div class="full minicard-text">Jučer: Geogram</div>
            </div>
          </div>
        </div>
        <div
          class="third flex-responsive flex relative column-full-pad mobile-full-pad"
        >
          <div class="tg-game-card column-mini-vertical-pad center flex-wrap">
            <div class="third flex column-mini-horizontal-pad">
              <img
                src="https://images.telegram.hr/7Czs3QS7-PUc3XrGExwYPFME7QqzW9tSUIfxvzRCCsA/preset:author/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDYvZGl2by1kdXJvdmljLTItMi0xLnBuZw.webp"
                alt="Đivo Đurović"
                class="tg-game-avatar darkened-bg"
              />
            </div>
            <div class="two-thirds flex">
              <div class="full barlow bold">Đivo Đurović</div>
              <div class="full minicard-text">Prije 5 dana: Statika</div>
            </div>
          </div>
        </div>
        <div
          class="half flex-responsive flex relative column-full-pad mobile-full-pad"
        >
          <div class="full minicard-text column-mini-bottom-margin">
            Upišite nečiji kod kako bi ih dodali kao prijatelja:
          </div>
          <input
            type="text"
            placeholder="Prijateljev kod"
            aria-label="Prijateljev kod"
            class="darkened-bg subtle-input full"
          />
        </div>
        <div
          class="half flex-responsive flex relative column-full-pad mobile-full-pad"
        >
          <div class="full minicard-text column-mini-bottom-margin">
            Podijelite svoj kod da vas mogu dodati kao prijatelja:
          </div>
          <div class="darkened-bg fake-subtle-input full">1234-5678-9012</div>
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
