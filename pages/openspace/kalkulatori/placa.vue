<template>
  <div class="main-container flex fancy-rubrika openspace">
    <div class="full flex">
      <client-only>
        <theader
          headline="Kalkulator plaće - preračunajte neto u bruto i obrnuto"
        ></theader>
      </client-only>
    </div>
    <app-link to="/openspace" class="full flex relative mini-os-header">
      <h1
        class="full section-title mobile-side-pad center-text column-full-pad os-section-title hide"
      >
        openspace
      </h1>
      <div class="full center">
        <img
          src="@/assets/img/openspace_logo_normal.svg"
          class="os-header-logo light-mode-only"
          alt="openspace logo"
        />
        <img
          src="@/assets/img/openspace_logo_normal.svg"
          class="os-header-logo contrast-mode-only"
          alt="openspace logo"
        />
        <img
          src="@/assets/img/openspace_logo_negative.svg"
          class="os-header-logo dark-mode-only"
          alt="openspace logo"
        />
      </div>
    </app-link>
    <div class="full flex os-special-page">
      <div
        class="container relative mobile-side-pad flex article-width-container"
      >
        <h1 class="full center-text">Kalkulator plaće</h1>
        <h4 class="full center-text">
          Uz Telegramov kalkulator plaće brzo preračunajte neto u bruto ili
          obrnuto, naučite više o faktorima koji utječu na oporezivanje plaće,
          te saznajte koje doprinose plaćate koliko.
        </h4>
        <form class="full flex relative os-calculator" @submit.prevent="submit">
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title" for="iznos">Iznos</label>
            <input
              id="iznos"
              v-model="iznos"
              class="full"
              type="number"
              required
            />
            <p class="full os-calculator-description">
              Iznos plaće u kunama koji će biti osnova za sve izračune.
            </p>
          </div>
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title">Vrsta izračuna</label>
            <div class="full flex os-calculator-radio">
              <div class="half flex">
                <input
                  id="neto-u-bruto"
                  v-model="smjerKonverzije"
                  value="neto-u-bruto"
                  name="smjerKonverzije"
                  type="radio"
                  class="hide"
                />
                <label for="neto-u-bruto" class="full center animate"
                  >Neto
                  <font-awesome-icon icon="fa-light fa-arrow-right" />
                  Bruto</label
                >
              </div>
              <div class="half flex">
                <input
                  id="bruto-u-neto"
                  v-model="smjerKonverzije"
                  value="bruto-u-neto"
                  name="smjerKonverzije"
                  type="radio"
                  class="hide"
                />
                <label for="bruto-u-neto" class="full center animate"
                  >Bruto
                  <font-awesome-icon icon="fa-light fa-arrow-right" />
                  Neto</label
                >
              </div>
            </div>
            <p class="full os-calculator-description">
              Neto plaća je iznos koji zaposleniku sjeda na račun. Bruto plaća
              je iznos koji poslodavac mora izdvojiti za plaću zaposlenika. U
              ugovoru o radu obično se nalazi bruto iznos.
            </p>
          </div>
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title" for="prebivalište"
              >Mjesto prebivališta</label
            >
            <select
              id="prebivaliste"
              v-model="prebivaliste"
              class="full"
              required
            >
              <optgroup label="Veliki gradovi">
                <option value="zagreb">Zagreb (18%)</option>
                <option value="rijeka">Rijeka (14%)</option>
                <option value="split">Split (15%)</option>
                <option value="osijek">Osijek (13%)</option>
              </optgroup>
              <optgroup label="Gradovi">
                <option value="lorem">Lorem (0%)</option>
                <option value="ipsum">Ipsum (0%)</option>
              </optgroup>
              <optgroup label="Općine">
                <option value="dolor">Dolor (0%)</option>
                <option value="sit">Sit (0%)</option>
                <option value="amet">Amet (0%)</option>
              </optgroup>
            </select>
            <p class="full os-calculator-description">
              Vaše mjesto prebivališta utječe na količinu prireza (poreza na
              porez) koju određuje vaša lokalna samouprava.
            </p>
          </div>
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title">Uzdržavane osobe</label>
            <input
              id="uzdrzavani"
              v-model="uzdrzavani"
              class="full"
              type="number"
              required
            />
            <p class="full os-calculator-description">
              Uzdržavani članovi vašeg kućanstva (npr. djeca) povećavaju vaš
              osobni odbitak, što smanjuje vaš porez na dohodak.
            </p>
            <p class="full os-calculator-description">
              Uzdržavani članovi uže obitelji i uzdržavana djeca su fizičke
              osobe kojima oporezivi primici na godišnjoj razini ne prelaze
              15.000,00 kn.
            </p>
          </div>
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title">Invalidnost</label>
            <div class="full flex os-calculator-radio">
              <div class="third flex">
                <input
                  id="invalidnost-none"
                  v-model="invalidnost"
                  value="invalidnost-none"
                  name="invalidnost"
                  type="radio"
                  class="hide"
                />
                <label for="invalidnost-none" class="full center animate"
                  >Ne</label
                >
              </div>
              <div class="third flex">
                <input
                  id="invalidnost-half"
                  v-model="invalidnost"
                  value="invalidnost-half"
                  name="invalidnost"
                  type="radio"
                  class="hide"
                />
                <label for="invalidnost-half" class="full center animate"
                  >50%</label
                >
              </div>
              <div class="third flex">
                <input
                  id="invalidnost-full"
                  v-model="invalidnost"
                  value="invalidnost-full"
                  name="invalidnost"
                  type="radio"
                  class="hide"
                />
                <label for="invalidnost-full" class="full center animate"
                  >100%</label
                >
              </div>
            </div>
            <p class="full os-calculator-description">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title">Vaš izračun</label>
            <div
              class="half flex flex-responsive column-right-pad column-right-border"
            >
              <h4 class="full overtitle">Neto plaća</h4>
              <p class="full os-calculator-result">{{ netoPlaca }} kn</p>
              <h4 class="full overtitle">{{ netoPlacaEur }} EUR</h4>
            </div>
            <div
              class="full flex mobile-only column-bottom-border-mobile os-calculator-mobile-space"
            ></div>
            <div class="half flex flex-responsive column-left-pad">
              <h4 class="full overtitle">Bruto plaća</h4>
              <p class="full os-calculator-result">{{ brutoPlaca }} kn</p>
              <h4 class="full overtitle">{{ brutoPlacaEur }} EUR</h4>
            </div>
            <p class="full os-calculator-description">
              Telegramov kalkulator plaće je isključivo informativan te se ne
              može koristiti za drugu svrhu.
            </p>
            <div class="full flex os-calculator-table column-top-border">
              <div
                class="full bold flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Bruto 1</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third"></div>
                  <div class="third right-text">{{ brutoPlaca }} HRK</div>
                  <div class="third right-text">{{ brutoPlacaEur }} EUR</div>
                </div>
              </div>
              <div
                class="full flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">
                  Mirovinsko osiguranje, prvi stup
                </div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third">15,00%</div>
                  <div class="third right-text">{{ mirovinskoJedan }} HRK</div>
                  <div class="third right-text">
                    {{ mirovinskoJedanEur }} EUR
                  </div>
                </div>
              </div>
              <div
                class="full flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">
                  Mirovinsko osiguranje, drugi stup
                </div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third">5,00%</div>
                  <div class="third right-text">{{ mirovinskoDva }} HRK</div>
                  <div class="third right-text">{{ mirovinskoDvaEur }} EUR</div>
                </div>
              </div>
              <div
                class="full bold flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Ukupno doprinosi</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third">20,00%</div>
                  <div class="third right-text">{{ doprinosi }} HRK</div>
                  <div class="third right-text">{{ doprinosiEur }} EUR</div>
                </div>
              </div>
              <div
                class="full flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Porez</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third"></div>
                  <div class="third right-text">{{ porez }} HRK</div>
                  <div class="third right-text">{{ porezEur }} EUR</div>
                </div>
              </div>
              <div
                class="full flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Prirez</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third">{{ prirez[prebivaliste] }} %</div>
                  <div class="third right-text">{{ prirezKn }} HRK</div>
                  <div class="third right-text">{{ prirezEur }} EUR</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'KalkulatorPlaca',
  data() {
    return {
      iznos: '',
      uzdrzavani: '0',
      prebivaliste: 'zagreb',
      prirez: {
        zagreb: 18,
        rijeka: 14,
        split: 15,
        osijek: 13,
      },
      netoPlaca: 0,
      netoPlacaEur: 0,
      brutoPlaca: 0,
      brutoPlacaEur: 0,
      mirovinskoJedan: 0,
      mirovinskoJedanEur: 0,
      mirovinskoDva: 0,
      mirovinskoDvaEur: 0,
      doprinosi: 0,
      doprinosiEur: 0,
      porez: 0,
      porezEur: 0,
      prirezKn: 0,
      prirezEur: 0,
      invalidnost: 'invalidnost-none',
      smjerKonverzije: 'neto-u-bruto',
      loading: false,
      posts: [],
      page: 1,
      email: '',
      thanks: false,
    }
  },
  watch: {
    iznos(newIznos) {
      this.netoPlaca = newIznos
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/kalkulatori/placa',
      },
    ]
    return {
      title: 'Kalkulator plaće',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Preračunajte neto u bruto i obrnuto',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Preračunajte neto u bruto i obrnuto',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Kalkulator plaće',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/kalkulatori/placa',
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
