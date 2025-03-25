<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader headline="Proslavite s nama 10 godina Telegrama!"></theader>
    </div>
    <!-- Special half element -->
    <div class="full flex relative stretch pretplata-deset">
      <div
        class="half flex flex-responsive relative center column-full-pad mobile-full-pad"
      >
        <div class="full deset-box column-mini-horizontal-pad flex relative">
          <img
            width="500"
            height="150"
            class="deset-logo"
            src="@/assets/img/tg_logo_10godina.svg"
            alt="10 godina Telegrama logo"
          />
          <div class="full flex deset-counter column-top-pad mobile-top-pad">
            <div class="full flex deset-counter-bar relative">
              <div style="width: 18.9%"></div>
            </div>
            <div class="two-thirds flex">189/1000 novih pretplatnika</div>
            <a
              href="#ciljevi"
              class="third flex bold align-children-end all-caps"
            >
              1. cilj
              <font-awesome-icon
                :icon="['far', 'circle-question']"
              ></font-awesome-icon>
            </a>
          </div>
        </div>
      </div>
      <div
        class="half flex flex-responsive relative center column-full-pad mobile-full-pad"
      >
        <div class="full deset-box flex relative">
          <div
            class="full nothtwo column-mini-horizontal-pad column-mini-bottom-pad"
          >
            Proslavite s nama 10 godina Telegrama! Nastavimo zajedno dalje.
          </div>
          <p class="full column-mini-horizontal-pad">
            Čitajte Telegram prvih 10 tjedana po cijeni koju sami odaberete.
            Pridružite se onima koji brinu za budućnost.
          </p>
          <div class="full flex deset-price-picker column-mini-vertical-pad">
            <div class="third flex column-mini-full-pad">
              <div class="full deset-price center relative">
                <span>0€</span>
              </div>
            </div>
            <div class="third flex column-mini-full-pad">
              <div
                class="full deset-price center relative deset-price-selected"
              >
                <span>3€</span>
              </div>
            </div>
            <div class="third flex column-mini-full-pad">
              <div class="full deset-price center relative">
                <span>5€</span>
              </div>
              <div class="full deset-price-note center-text smaller-text">
                naša preporuka
              </div>
            </div>
            <div class="third flex column-mini-full-pad">
              <div class="full deset-price center relative">
                <span>9€</span>
              </div>
            </div>
            <div class="third flex column-mini-full-pad">
              <div class="full deset-price center relative">
                <span>15€</span>
              </div>
            </div>
            <div class="third flex column-mini-full-pad">
              <div class="full deset-price center relative">
                <span>25€</span>
              </div>
              <div class="full deset-price-note center-text smaller-text">
                redovna cijena
              </div>
            </div>
            <div
              class="two-thirds align-children-end flex column-mini-full-pad"
            >
              <span class="deset-price-note smaller-text"
                >ili unesite iznos:</span
              >
            </div>
            <!--<div class="third flex column-mini-full-pad">
              <input
                type="number"
                min="0.00"
                max="1000.00"
                step="0.01"
                class="deset-input-price"
              />
            </div>-->
            <div class="third flex column-mini-full-pad">
              <div
                class="full deset-price center relative deset-price-no-hover"
              >
                <input type="text" class="deset-price-input" value="0,00€" />
              </div>
            </div>
          </div>
          <div
            class="full flex relative column-mini-horizontal-pad column-top-pad"
          >
            <div id="deset-checkout-btn" class="full center relative">
              <span>Završite kupnju za 5€</span>
            </div>
          </div>
          <p
            class="full center-text smaller-text column-mini-horizontal-pad column-mini-top-pad"
          >
            PDV je uključen. Nakon isteka prvih 10 tjedana, pretplata prelazi na
            mjesečni plan i nastavlja se po 50% sniženoj cijeni mjesečne Premium
            pretplate.
          </p>
        </div>
      </div>
    </div>
    <div id="ciljevi" class="full flex relative column-mega-top-pad">
      <div
        class="container smallest-container flex column-full-pad mobile-full-pad"
      >
        <div class="full flex relative deset-goal deset-goal-unlocked">
          <div class="full flex relative deset-goal-header alt-vertical-center">
            <span>1. cilj</span> 1000 novih pretplatnika
          </div>
          <div class="full flex relative deset-counter-bar-parent">
            <div class="full flex deset-counter-bar relative">
              <div style="width: 100%"></div>
            </div>
            <font-awesome-icon :icon="['fas', 'check']" />
            <span>1000/1000</span>
          </div>
          <p class="full column-mini-top-pad">
            Otključati ćemo svim čitateljima neograničeni pristup potpunoj
            10-godišnjoj arhivi Telegramovih analiza, istraga i vijesti.
          </p>
        </div>
        <div class="full flex relative deset-goal">
          <div class="full flex relative deset-goal-header alt-vertical-center">
            <span>2. cilj</span> 2000 novih pretplatnika
          </div>
          <div class="full flex relative deset-counter-bar-parent">
            <div class="full flex deset-counter-bar relative">
              <div style="width: 56.45%"></div>
            </div>
            <font-awesome-icon :icon="['far', 'lock-keyhole']" />
            <span>1189/2000</span>
          </div>
          <p class="full column-mini-top-pad">
            Pokloniti ćemo 500.000 besplatnih impresija reklamama raznih
            dobrotvornih organizacija koje operiraju u Hrvatskoj.
          </p>
        </div>
        <div class="full flex relative deset-goal">
          <div class="full flex relative deset-goal-header alt-vertical-center">
            <span>3. cilj</span> 3000 novih pretplatnika
          </div>
          <div class="full flex relative deset-counter-bar-parent">
            <div class="full flex deset-counter-bar relative">
              <div style="width: 26.45%"></div>
            </div>
            <font-awesome-icon :icon="['far', 'lock-keyhole']" />
            <span>1189/3000</span>
          </div>
          <p class="full column-mini-top-pad">???</p>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'PretplataTen',
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/pretplata/10godina',
      },
    ]
    return {
      title: 'Proslavite s nama 10 godina Telegrama!',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '10 godina Telegrama',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '10 godina Telegrama',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '10 godina Telegrama',
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
