<template>
  <div class="main-container flex single-article tg-games">
    <div class="full flex">
      <client-only>
        <theader headline="Igre za naše pretplatnike"></theader>
      </client-only>
    </div>
    <div class="full center relative tg-game-hero darkened-bg pretplata-page">
      <div
        class="container smaller-container relative flex mobile-side-pad stretch column-full-pad"
      >
        <div class="full center column-horizontal-pad mobile-full-pad">
          <img src="@/assets/img/games/tg_icon_geogram.svg" alt="Geogram" />
        </div>
        <h1 class="full center-text">Geogram</h1>
        <p class="full center-text pretplata-tagline column-bottom-pad">
          Pogodite lokaciju neke fotografije iz Hrvatske
        </p>
        <div class="full center column-mini-bottom-pad many-btns">
          <app-link
            to="/igre/geogram/2024-09-03/"
            class="newbtn center center-text huge-newbtn column-mini-bottom-margin"
          >
            Igraj najnovije
          </app-link>
          <app-link
            to="/igre/geogram/arhiva/"
            class="newbtn center center-text huge-newbtn subtle-newbtn column-mini-bottom-margin"
          >
            Igraj arhivu
          </app-link>
        </div>
        <div class="full center-text faded minicard-text column-bottom-pad">
          Arhiva je dostupna pretplatnicima
        </div>
      </div>
    </div>
    <div class="full flex relative column-bottom-pad">
      <div
        class="container smaller-container relative flex mobile-side-pad stretch column-full-pad"
      >
        <div class="full column-horizontal-pad pretplata-page">
          <p
            class="full center-text pretplata-tagline column-top-pad mobile-vertical-pad"
          >
            Vaši prijatelji igraju
          </p>
        </div>
        <div class="full flex relative">
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
                <div class="full minicard-text">1234 bodova</div>
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
                <div class="full minicard-text">4321 bodova</div>
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
                <div class="full minicard-text">741 bodova</div>
              </div>
            </div>
          </div>
        </div>
        <div class="full column-horizontal-pad pretplata-page">
          <p
            class="full center-text pretplata-tagline column-top-pad mobile-vertical-pad"
          >
            Kako igrati
          </p>
        </div>
        <div class="full flex relative stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/grey_placeholder_square.png"
              aria-hidden="true"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <div class="full bigger-text bold column-mini-bottom-pad">
                Prepoznajte lokaciju i označite ju na karti
              </div>
              <p>
                Lorem Ipsum is dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div class="full flex relative stretch">
          <div class="half center flex-responsive column-full-pad m-order-2">
            <div class="full flex">
              <div class="full bigger-text bold column-mini-bottom-pad">
                Dobijte bodove ovisno o tome koliko ste blizu
              </div>
              <p>
                Lorem Ipsum is dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div class="half flex-responsive column-full-pad m-order-1">
            <img
              src="@/assets/img/grey_placeholder_square.png"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

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
