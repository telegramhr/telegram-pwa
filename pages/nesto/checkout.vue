<template>
  <div class="main-container flex single-article">
    <div class="full flex">
      <client-only>
        <theader headline="Checkout"></theader>
      </client-only>
    </div>
    <div class="full flex">
      <div class="full flex relative pretplata-page-content">
        <div
          class="container relative flex mobile-side-pad stretch column-full-pad"
        >
          <div class="full flex single-article-body remp-pretplata">
            <h1 class="full center-text column-bottom-pad">Vaša košarica</h1>
            <div
              class="full flex column-full-pad mobile-full-pad checkout-table darkened-bg column-top-margin"
            >
              <div
                class="sixth mobile-third flex relative column-right-pad mobile-right-pad"
              >
                <img
                  src="@/assets/img/tg_book_cover_magazin.jpg"
                  alt="Naslovnica T Magazina"
                />
              </div>
              <div class="half mobile-two-thirds flex relative barlow">
                <div class="full checkout-bold relative column-tiny-bottom-pad">
                  T Magazin
                </div>
                <div class="full smaller-text faded">
                  Specijalno izdanje portala Telegram za Veljaču 2025.
                </div>
              </div>
              <div
                class="third flex-responsive flex relative column-left-pad barlow"
              >
                <div
                  class="full flex checkout-bold relative align-children-end"
                >
                  9,99 € x
                  <input
                    type="number"
                    class="inline-input checkout-bold"
                    value="1"
                    max="9"
                  />
                  <!--<font-awesome-icon
                    :icon="['fas', 'angle-up']"
                    class="animate checkout-more-btn"
                  ></font-awesome-icon>
                  <font-awesome-icon
                    :icon="['fas', 'angle-down']"
                    class="animate checkout-less-btn"
                  ></font-awesome-icon>-->
                </div>
              </div>
            </div>
            <div
              class="full flex relative checkout-table barlow column-horizontal-pad"
            >
              <div class="full flex relative">
                <div class="third flex desktop-only"></div>
                <div
                  class="third flex mobile-half align-children-end column-right-pad mobile-right-pad"
                >
                  Zbroj
                </div>
                <div
                  class="third flex mobile-half align-children-end column-left-pad mobile-left-pad"
                >
                  9,99 €
                </div>
              </div>
              <div class="full flex relative">
                <div class="third flex desktop-only"></div>
                <div
                  class="third flex mobile-half align-children-end column-right-pad mobile-right-pad"
                >
                  Dostava
                </div>
                <div
                  class="third flex mobile-half align-children-end column-left-pad mobile-left-pad"
                >
                  0,00 €
                </div>
              </div>
              <div class="full flex relative">
                <div class="third flex desktop-only"></div>
                <div
                  class="third flex mobile-half checkout-bold align-children-end column-right-pad mobile-right-pad"
                >
                  Ukupno
                </div>
                <div
                  class="third flex mobile-half checkout-bold align-children-end column-left-pad mobile-left-pad"
                >
                  9,99 €
                </div>
              </div>
            </div>
            <div class="full flex pretplata-packboxes">
              <div class="half flex column-right-pad flex-responsive">
                <p class="full bold remp-subtitle faded">
                  Unesite podatke za dostavu
                </p>
                <label
                  class="full barlow faded column-tiny-bottom-pad"
                  for="ime-prezime"
                  >Ime i prezime</label
                >
                <input
                  id="ime-prezime"
                  type="text"
                  class="full remp-new-input"
                  placeholder="Vaše ime i prezime"
                  name="ime-prezime"
                />
                <label
                  class="full barlow faded column-tiny-bottom-pad column-mini-top-pad"
                  for="email"
                  >Email</label
                >
                <input
                  id="email"
                  type="text"
                  class="full remp-new-input"
                  placeholder="Email adresa"
                  name="email"
                />
                <label
                  class="full barlow faded column-tiny-bottom-pad column-mini-top-pad"
                  for="grad"
                  >Grad</label
                >
                <input
                  id="grad"
                  type="text"
                  class="full remp-new-input"
                  placeholder="Grad"
                  name="grad"
                />
                <label
                  class="full barlow faded column-tiny-bottom-pad column-mini-top-pad"
                  for="adresa"
                  >Adresa</label
                >
                <input
                  id="adresa"
                  type="text"
                  class="full remp-new-input"
                  placeholder="Ulica i broj"
                  name="adresa"
                />
                <label
                  class="full barlow faded column-tiny-bottom-pad column-mini-top-pad"
                  for="postanski-broj"
                  >Poštanski broj</label
                >
                <input
                  id="postanski-broj"
                  type="text"
                  class="full remp-new-input"
                  placeholder="Poštanski broj"
                  name="postanski-broj"
                />
                <label
                  class="full barlow faded column-tiny-bottom-pad column-mini-top-pad"
                  for="mobitel"
                  >Broj mobitela</label
                >
                <input
                  id="mobitel"
                  type="text"
                  class="full remp-new-input"
                  placeholder="Broj mobitela"
                  name="mobitel"
                />
                <p class="full remp-mini-text barlow column-mini-vertical-pad">
                  Ako želite naručiti van Hrvatske, molimo javite nam se na
                  pretplata@telegram.hr
                </p>
                <textarea
                  id="napomene"
                  type="text"
                  class="full remp-new-input"
                  placeholder="Napomene"
                  name="napomene"
                ></textarea>
                <div
                  class="full flex column-top-pad mobile-bottom-pad mobile-top-pad"
                >
                  <input
                    id="terms"
                    v-model="terms"
                    type="checkbox"
                    class="cbx"
                    name="terms"
                  />
                  <label for="terms" class="check flex full">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                    <span class="terms-tweak"
                      >Prihvaćam
                      <a
                        target="_blank"
                        href="https://www.telegram.hr/stranica/uvjeti-koristenja/"
                        class="highlight-text"
                        >uvjete korištenja</a
                      ></span
                    >
                  </label>
                </div>
              </div>
              <div
                class="half flex flex-responsive remp-miniboxes column-left-pad"
              >
                <p class="full bold remp-subtitle faded">
                  Odaberite način plaćanja
                </p>
                <div class="full relative flex">
                  <input
                    id="pretplata-kartica"
                    v-model="payment"
                    type="radio"
                    name="pretplata-placanje"
                    class="hide"
                    value="pretplata-kartica"
                  />
                  <label
                    for="pretplata-kartica"
                    class="full flex relative remp-minibox animate clickable"
                  >
                    <div class="remp-radio-indicator center">
                      <div></div>
                    </div>
                    <div>Kartica</div>
                    <div class="flex remp-icon-list">
                      <i class="fa-brands fa-cc-visa"></i>
                      <i class="fa-brands fa-cc-mastercard"></i>
                      <i class="fa-brands fa-cc-diners-club"></i>
                    </div>
                    <div class="full remp-special-note">
                      Visa, Mastercard ili Diners
                    </div>
                  </label>
                </div>
                <div class="full relative flex">
                  <input
                    id="pretplata-uplata"
                    v-model="payment"
                    type="radio"
                    name="pretplata-placanje"
                    value="pretplata-uplata"
                    class="hide"
                  />
                  <label
                    for="pretplata-uplata"
                    class="full flex relative remp-minibox animate clickable"
                  >
                    <div class="remp-radio-indicator center"><div></div></div>
                    <div class="full">Internet bankarstvo</div>
                    <div class="full remp-special-note">
                      Izdat ćemo vam uplatnicu
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div
              class="full newbtn huge-newbtn center-text clickable locked-newbtn column-top-margin"
            >
              Dovršite kupnju
            </div>
            <div class="full remp-final-calc highlight-text center-text bold">
              Ispunite sve korake iznad kako bi dovršili kupnju.
            </div>
            <div
              class="full newbtn huge-newbtn center-text clickable green-newbtn column-top-margin hide"
            >
              Dovršite kupnju
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full flex">
      <div class="container relative flex stretch"></div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/',
      },
    ]
    return {
      title: 'Telegram',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Checkout',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Checkout',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Telegram',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/',
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
