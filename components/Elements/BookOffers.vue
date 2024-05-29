<template>
  <div
    class="container cantha-small-block flex relative native-block offers-widget column-vertical-pad stretch mobile-side-pad"
  >
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <div class="full flex column-horizontal-pad">
      <div
        class="noththree full center-text column-vertical-pad subsection-title"
      >
        Telegram knjige
      </div>
    </div>
    <div class="full flex stretch book-offers-widget">
      <div class="fourth flex-responsive column-horizontal-pad">
        <app-link
          to="/knjiga/boris-dezulovic-bili-libar-2"
          class="full flex article relative"
        >
          <img
            src="@/assets/img/tg_book_clean_dezulovic2.png"
            alt="Naslovnica knjige Borisa Dežulovića 'Bili libar 2'"
            loading="lazy"
          />
          <div class="full flex article-pad center-text">
            <div class="full offer-title">Bili libar 2</div>
            <div class="nothfour full">Boris Dežulović</div>
            <div class="noththree full overtitle">19,99€</div>
            <div class="full center">
              <div class="newbtn">Kupite</div>
            </div>
          </div>
        </app-link>
      </div>
      <div class="fourth flex-responsive column-horizontal-pad">
        <app-link
          to="/knjiga/aleksandar-stankovic-depra"
          class="full flex article relative"
        >
          <img
            src="@/assets/img/tg_book_mockup_stankovic.png"
            alt="Naslovnica nove knjige Aleksandra Stankovića 'Depra'"
            loading="lazy"
          />
          <div class="full flex article-pad center-text">
            <div class="full offer-title">Depra</div>
            <div class="nothfour full">Aleksandar Stanković</div>
            <div class="noththree full overtitle">
              <span class="faded strikethrough">19,99€</span> 14,99€
            </div>
            <div class="full center">
              <div class="newbtn">Kupite</div>
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
              <div class="newbtn">Kupite</div>
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
              <div class="newbtn">Kupite</div>
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
