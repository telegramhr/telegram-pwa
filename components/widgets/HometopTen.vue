<template>
  <!-- Special half element -->
  <div
    class="full flex relative stretch pretplata-deset pretplata-deset-compact"
  >
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
          <app-link
            to="/pretplata/godisnjica#ciljevi"
            class="third flex bold align-children-end all-caps"
          >
            1. cilj
            <font-awesome-icon
              :icon="['far', 'circle-question']"
            ></font-awesome-icon>
          </app-link>
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
          Proslavite s nama 10 godina Telegrama!
        </div>
        <p class="full column-mini-horizontal-pad">
          Čitajte Telegram prvih 10 tjedana po cijeni koju sami odaberete.
        </p>
        <div class="full flex deset-price-picker column-mini-vertical-pad">
          <div class="third flex column-mini-full-pad">
            <div
              class="full deset-price center relative"
              @click="selectedPrice = true"
            >
              <span>0€</span>
            </div>
          </div>
          <div class="third flex column-mini-full-pad">
            <div
              class="full deset-price center relative"
              @click="selectedPrice = true"
            >
              <span>3€</span>
            </div>
          </div>
          <div class="third flex column-mini-full-pad">
            <div
              class="full deset-price center relative"
              @click="selectedPrice = true"
            >
              <span>5€</span>
            </div>
            <div class="full deset-price-note center-text smaller-text">
              naša preporuka
            </div>
          </div>
          <div class="third flex column-mini-full-pad">
            <div
              class="full deset-price center relative"
              @click="selectedPrice = true"
            >
              <span>9€</span>
            </div>
          </div>
          <div class="third flex column-mini-full-pad">
            <div
              class="full deset-price center relative"
              @click="selectedPrice = true"
            >
              <span>15€</span>
            </div>
          </div>
          <div class="third flex column-mini-full-pad">
            <div
              class="full deset-price center relative"
              @click="selectedPrice = true"
            >
              <span>25€</span>
            </div>
            <div class="full deset-price-note center-text smaller-text">
              redovna cijena
            </div>
          </div>
          <div class="two-thirds align-children-end flex column-mini-full-pad">
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
            <div class="full deset-price center relative deset-price-no-hover">
              <input type="text" class="deset-price-input" value="0,00€" />
            </div>
          </div>
        </div>
        <div
          v-if="selectedPrice"
          class="full flex relative column-mini-horizontal-pad column-top-pad"
        >
          <app-link
            id="deset-checkout-btn"
            to="/pretplata/godisnjica#checkout"
            class="full center relative"
          >
            <span>Nastavite kupnju za 5€</span>
          </app-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HometopTen',
  data() {
    return {
      selectedPrice: false,
    }
  },
}
</script>
