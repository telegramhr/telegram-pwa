<template>
  <div class="main-container flex single-article">
    <div class="full flex">
      <client-only>
        <theader
          headline="Telegramove hit knjige po posebnoj cijeni za pretplatnike"
        ></theader>
      </client-only>
    </div>
    <div class="full flex relative pretplata-page">
      <div
        class="container relative flex mobile-side-pad stretch column-full-pad"
      >
        <h1 v-if="!$mobile" class="full center-text">
          Telegramove hit knjige <br />po posebnoj cijeni za pretplatnike.
        </h1>
        <h1 v-if="$mobile" class="full center-text">
          Telegramove hit knjige po posebnoj cijeni za pretplatnike.
        </h1>
        <p class="full center-text pretplata-tagline">
          'Matija' Drage Hedla, 'Depra' Aleksandra Stankovića, 'Bili libar' i
          'Bili Libar 2' Borisa Dežulovića, 'O Zagrebu' Zrinke Paladino i
          'Neispričane priče' Rajka Grlića, s besplatnom dostavom na kućnu
          adresu unutar Hrvatske.
        </p>
      </div>
    </div>
    <div class="full flex relative column-bottom-pad">
      <div
        class="container flex relative mobile-side-pad pretplata-packboxes smaller-booksel column-vertical-pad"
      >
        <div class="half flex flex-responsive column-full-pad">
          <app-link
            to="/knjiga/drago-hedl-matija"
            class="full flex knjiga-hero pretplata-packbox relative column-full-pad"
          >
            <div class="full flex knjiga-cover knjiga-cover-3d">
              <img
                src="@/assets/img/tg_book_mockup_hedl_izdanje2.png"
                alt="Naslovnica knjige Drage Hedla 'Matija', drugo izdanje"
              />
            </div>
            <div class="full flex knjiga-features">
              <div class="full relative center-text big-book-price bold">
                Matija
              </div>
              <div class="nothfour full relative center-text">Drago Hedl</div>
              <div class="nothfour full relative center-text bold">24,99€</div>
              <div class="full center btn-parent">
                <div class="btn animate">Pogledajte više</div>
              </div>
            </div>
          </app-link>
        </div>
        <div class="half flex flex-responsive column-full-pad">
          <app-link
            to="/knjiga/boris-dezulovic-bili-libar-2"
            class="full flex knjiga-hero pretplata-packbox relative column-full-pad"
          >
            <div class="full flex knjiga-cover knjiga-cover-3d">
              <img
                src="@/assets/img/tg_book_clean_dezulovic2.png"
                alt="Naslovnica knjige Borisa Dežulovića 'Bili libar 2'"
              />
            </div>
            <div class="full flex knjiga-features">
              <div class="full relative center-text big-book-price bold">
                Bili libar 2
              </div>
              <div class="nothfour full relative center-text">
                Boris Dežulović
              </div>
              <div class="nothfour full relative center-text bold">19,99€</div>
              <div class="full center btn-parent">
                <div class="btn animate">Pogledajte više</div>
              </div>
            </div>
          </app-link>
        </div>
        <div class="half flex flex-responsive column-full-pad">
          <app-link
            to="/knjiga/aleksandar-stankovic-depra"
            class="full flex knjiga-hero pretplata-packbox relative column-full-pad"
          >
            <div class="full flex knjiga-cover knjiga-cover-3d">
              <img
                src="@/assets/img/tg_book_mockup_stankovic.png"
                alt="Naslovnica nove knjige Aleksandra Stankovića 'Depra'"
              />
            </div>
            <div class="full flex knjiga-features">
              <div class="full relative center-text big-book-price bold">
                Depra
              </div>
              <div class="nothfour full relative center-text">
                Aleksandar Stanković
              </div>
              <div class="nothfour full relative center-text bold">
                <span class="faded strikethrough">19,99€</span> 14,99€
              </div>
              <div class="full center btn-parent">
                <div class="btn animate">Pogledajte više</div>
              </div>
            </div>
          </app-link>
        </div>
        <div class="half flex flex-responsive column-full-pad">
          <app-link
            to="/knjiga/sanja-modric-igla-pila-ravnalo"
            class="full flex knjiga-hero pretplata-packbox relative column-full-pad"
          >
            <div class="full flex knjiga-cover knjiga-cover-3d">
              <img
                src="@/assets/img/tg_book_mockup_modric.png"
                alt="Naslovnica nove knjige Sanje Modrić 'Igla, pila, ravnalo'"
              />
            </div>
            <div class="full flex knjiga-features">
              <div class="full relative center-text big-book-price bold">
                Igla, pila, ravnalo
              </div>
              <div class="nothfour full relative center-text">Sanja Modrić</div>
              <div class="nothfour full relative center-text bold">
                <span class="faded strikethrough">19,99€</span> 13,99€
              </div>
              <div class="full center btn-parent">
                <div class="btn animate">Pogledajte više</div>
              </div>
            </div>
          </app-link>
        </div>
        <div class="half flex flex-responsive column-full-pad">
          <app-link
            to="/knjiga/boris-dezulovic-bili-libar"
            class="full flex knjiga-hero pretplata-packbox relative column-full-pad"
          >
            <div class="full flex knjiga-cover knjiga-cover-3d">
              <img
                src="@/assets/img/tg_book_mockup_wsticker.png"
                alt="Naslovnica knjige Borisa Dežulovića 'Bili libar'"
              />
            </div>
            <div class="full flex knjiga-features">
              <div class="full relative center-text big-book-price bold">
                Bili libar
              </div>
              <div class="nothfour full relative center-text">
                Boris Dežulović
              </div>
              <div class="nothfour full relative center-text bold">
                <span class="faded strikethrough">19,78€</span> 13,14€
              </div>
              <div class="full center btn-parent">
                <div class="btn animate">Pogledajte više</div>
              </div>
            </div>
          </app-link>
        </div>
        <div class="half flex flex-responsive column-full-pad">
          <app-link
            to="/knjiga/rajko-grlic-neispricane-price"
            class="full flex knjiga-hero pretplata-packbox relative column-full-pad"
          >
            <div class="full flex knjiga-cover knjiga-cover-3d">
              <img
                src="@/assets/img/tg_book_mockup_grlic.png"
                alt="Naslovnica knjige Rajka Grlića 'Neispričane priče'"
              />
            </div>
            <div class="full flex knjiga-features">
              <div class="full relative center-text big-book-price bold">
                Neispričane priče
              </div>
              <div class="nothfour full relative center-text">Rajko Grlić</div>
              <div class="nothfour full relative center-text bold">
                <span class="faded strikethrough">23,76€</span> 15,79€
              </div>
              <div class="full center btn-parent">
                <div class="btn animate">Pogledajte više</div>
              </div>
            </div>
          </app-link>
        </div>
        <div class="half flex flex-responsive column-full-pad">
          <app-link
            to="/knjiga/zrinka-paladino-o-zagrebu"
            class="full flex knjiga-hero pretplata-packbox relative column-full-pad"
          >
            <div class="full flex knjiga-cover knjiga-cover-3d">
              <img
                src="@/assets/img/tg_book_mockup_paladino_wsticker.png"
                alt="Naslovnica knjige Zrinke Paladino 'O Zagrebu i... Telegramovih 48'"
              />
            </div>
            <div class="full flex knjiga-features">
              <div class="full relative center-text big-book-price bold">
                O Zagrebu i...
              </div>
              <div class="nothfour full relative center-text">
                Zrinka Paladino
              </div>
              <div class="nothfour full relative center-text bold">
                <span class="faded strikethrough">23,76€</span> 13,14€
              </div>
              <div class="full center btn-parent">
                <div class="btn animate">Pogledajte više</div>
              </div>
            </div>
          </app-link>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'TelegramoveHitKnjigePoPosebnojCijeniZaPretplatnike',
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/knjiga/',
      },
    ]
    return {
      title: 'Telegramove hit knjige po posebnoj cijeni za pretplatnike',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Matija Drage Hedla, Depra Aleksandra Stankovića, Igla, pila, ravnalo Sanje Modrić, Bili libar Borisa Dežulovića, O Zagrebu Zrinke Paladino i Neispričane priče Rajka Grlića.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Matija Drage Hedla, Depra Aleksandra Stankovića, Igla, pila, ravnalo Sanje Modrić, Bili libar Borisa Dežulovića, O Zagrebu Zrinke Paladino i Neispričane priče Rajka Grlića.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Telegramove hit knjige po posebnoj cijeni za pretplatnike',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/tg_share_books.jpg',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/knjiga/',
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
