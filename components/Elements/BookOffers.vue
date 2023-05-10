<template>
  <div
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
  >
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <h3 class="full center-text column-full-pad subsection-title">
      <img src="@/assets/img/telegram_logo_black.svg" alt="Telegram logo" />
      knjige
    </h3>
    <div class="full flex stretch column-bottom-pad book-offers-widget">
      <div class="fourth flex-responsive column-horizontal-pad">
        <app-link
          to="/knjiga/sanja-modric-igla-pila-ravnalo"
          class="full flex article relative"
        >
          <img
            src="@/assets/img/tg_book_clean_modric.png"
            alt="Naslovnica nove knjige Sanje Modrić 'Igla, pila, ravnalo'"
          />
          <div class="full flex article-pad center-text">
            <h2 class="full">Igla, pila, ravnalo</h2>
            <h4 class="full">Sanja Modrić</h4>
            <h3 class="full overtitle">
              <span class="faded strikethrough">19,99€</span> 13,99€
            </h3>
            <div class="full center">
              <div class="newbtn">Pogledajte više</div>
            </div>
          </div>
        </app-link>
      </div>
      <div class="fourth flex-responsive column-horizontal-pad">
        <app-link
          to="/knjiga/boris-dezulovic-bili-libar"
          class="full flex article relative"
        >
          <img
            src="@/assets/img/tg_book_clean_dezulovic.png"
            alt="Naslovnica knjige Borisa Dežulovića 'Bili libar'"
          />
          <div class="full flex article-pad center-text">
            <h2 class="full">Bili libar</h2>
            <h4 class="full">Boris Dežulović</h4>
            <h3 class="full overtitle">
              <span class="faded strikethrough">19,78€</span> 13,14€
            </h3>
            <div class="full center">
              <div class="newbtn">Pogledajte više</div>
            </div>
          </div>
        </app-link>
      </div>
      <div class="fourth flex-responsive column-horizontal-pad">
        <app-link
          to="/knjiga/rajko-grlic-neispricane-price"
          class="full flex article relative"
        >
          <img
            src="@/assets/img/tg_book_clean_grlic.png"
            alt="Naslovnica knjige Rajka Grlića 'Neispričane priče'"
          />
          <div class="full flex article-pad center-text">
            <h2 class="full">Neispričane priče</h2>
            <h4 class="full">Rajko Grlić</h4>
            <h3 class="full overtitle">
              <span class="faded strikethrough">23,76€</span> 15,79€
            </h3>
            <div class="full center">
              <div class="newbtn">Pogledajte više</div>
            </div>
          </div>
        </app-link>
      </div>
      <div class="fourth flex-responsive column-horizontal-pad">
        <app-link
          to="/knjiga/zrinka-paladino-o-zagrebu"
          class="full flex article relative"
        >
          <img
            src="@/assets/img/tg_book_clean_paladino.png"
            alt="Naslovnica knjige Zrinke Paladino 'O Zagrebu i... Telegramovih 48'"
          />
          <div class="full flex article-pad center-text">
            <h2 class="full">O Zagrebu i...</h2>
            <h4 class="full">Zrinka Paladino</h4>
            <h3 class="full overtitle">
              <span class="faded strikethrough">23,76€</span> 13,14€
            </h3>
            <div class="full center">
              <div class="newbtn">Pogledajte više</div>
            </div>
          </div>
        </app-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookOffers',
}
</script>
