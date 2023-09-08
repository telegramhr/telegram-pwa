<template>
  <div
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
  >
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <div class="noththree full center-text column-full-pad subsection-title">
      <img
        src="@/assets/img/telegram_logo_black.svg"
        alt="Telegram logo"
        loading="lazy"
      />
      knjige
    </div>
    <div class="full flex stretch book-offers-widget">
      <div class="fourth flex-responsive column-horizontal-pad">
        <app-link
          to="/knjiga/sanja-modric-igla-pila-ravnalo"
          class="full flex article relative"
        >
          <img
            src="@/assets/img/tg_book_clean_modric.png"
            alt="Naslovnica nove knjige Sanje Modrić 'Igla, pila, ravnalo'"
            loading="lazy"
          />
          <div class="full flex article-pad center-text">
            <div class="full offer-title">Igla, pila, ravnalo</div>
            <div class="nothfour full">Sanja Modrić</div>
            <div class="noththree full overtitle">
              <span class="faded strikethrough">19,99€</span> 13,99€
            </div>
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
            loading="lazy"
          />
          <div class="full flex article-pad center-text">
            <div class="full offer-title">Bili libar</div>
            <div class="nothfour full">Boris Dežulović</div>
            <div class="noththree full overtitle">
              <span class="faded strikethrough">19,78€</span> 13,14€
            </div>
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
            loading="lazy"
          />
          <div class="full flex article-pad center-text">
            <div class="full offer-title">Neispričane priče</div>
            <div class="nothfour full">Rajko Grlić</div>
            <div class="noththree full overtitle">
              <span class="faded strikethrough">23,76€</span> 15,79€
            </div>
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
            loading="lazy"
          />
          <div class="full flex article-pad center-text">
            <div class="full offer-title">O Zagrebu i...</div>
            <div class="nothfour full">Zrinka Paladino</div>
            <div class="noththree full overtitle">
              <span class="faded strikethrough">23,76€</span> 13,14€
            </div>
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
