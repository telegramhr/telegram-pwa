<template>
  <!-- Special half element -->
  <div
    v-show="show"
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
            <div :style="{ width: soldP }"></div>
          </div>
          <div class="two-thirds flex">
            {{ sold }}/{{ rounded }} novih pretplatnika
          </div>
          <app-link
            to="/pretplata/10-godina-telegrama-ekskluzivna-ponuda#ciljevi"
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
          {{ mainTitle }}
        </div>
        <p class="full column-mini-horizontal-pad">
          {{ subtitle }}
        </p>
        <div class="full flex deset-price-picker column-mini-vertical-pad">
          <div class="third flex column-mini-full-pad">
            <div
              class="full deset-price center relative"
              :class="{ 'deset-price-selected': totalPrice === 0 }"
              @click="totalPrice = 0"
            >
              <span>0€</span>
            </div>
          </div>
          <div class="third flex column-mini-full-pad">
            <div
              class="full deset-price center relative"
              :class="{ 'deset-price-selected': totalPrice === 3 }"
              @click="totalPrice = 3"
            >
              <span>3€</span>
            </div>
          </div>
          <div class="third flex column-mini-full-pad">
            <div
              class="full deset-price center relative"
              :class="{ 'deset-price-selected': totalPrice === 5 }"
              @click="totalPrice = 5"
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
              :class="{ 'deset-price-selected': totalPrice === 9 }"
              @click="totalPrice = 9"
            >
              <span>9€</span>
            </div>
          </div>
          <div class="third flex column-mini-full-pad">
            <div
              class="full deset-price center relative"
              :class="{ 'deset-price-selected': totalPrice === 15 }"
              @click="totalPrice = 15"
            >
              <span>15€</span>
            </div>
          </div>
          <div class="third flex column-mini-full-pad">
            <div
              class="full deset-price center relative"
              :class="{ 'deset-price-selected': totalPrice === 25 }"
              @click="totalPrice = 25"
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
          <div class="third flex column-mini-full-pad">
            <div class="full deset-price center relative deset-price-no-hover">
              <input v-model="price" type="text" class="deset-price-input" />
              <span class="deset-price-input-note">€</span>
            </div>
          </div>
        </div>
        <div
          class="full flex relative column-mini-horizontal-pad column-top-pad"
        >
          <app-link
            id="deset-checkout-btn"
            :to="`/pretplata/10-godina-telegrama-ekskluzivna-ponuda/?amount=${parseFloat(
              totalPrice
            )}`"
            class="full center relative"
          >
            <span
              >Nastavite kupnju za
              {{
                new Intl.NumberFormat('hr-HR', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(totalPrice)
              }}</span
            >
          </app-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HometopTen',
  async fetch() {
    this.sold = (await this.$axios.$get('/api/pretplate')).data.number
  },
  data() {
    return {
      sold: 0,
      price: 5,
      show: false,
      mainTitle: 'Proslavite s nama 10 godina Telegrama!',
      subtitle:
        'Čitajte Telegram prvih 10 tjedana po cijeni koju sami odaberete.',
    }
  },
  computed: {
    totalPrice: {
      get() {
        const price = parseFloat(this.price.toString().replace(',', '.'))
        if (!price || price === '' || isNaN(price) || price < 0) {
          return 0
        }
        if (price - parseInt(price) > 0) {
          return parseFloat(price).toFixed(2)
        }
        return parseInt(price)
      },
      set(value) {
        this.price = value
      },
    },
    soldP() {
      return (this.sold / this.rounded) * 100 + '%'
    },
    rounded() {
      if (this.sold > 1000 && this.sold < 2000) {
        return 2000
      }
      if (this.sold > 2000 && this.sold < 3000) {
        return 3000
      }
      if (this.sold > 3000) {
        return 3000
      }

      return 1000
    },
  },
  mounted() {
    window.addEventListener('hometen', this.load)
  },
  destroyed() {
    window.removeEventListener('hometen', this.load)
  },
  methods: {
    load(e) {
      if (this.$store.state.user.access?.length) {
        return
      }
      if (e.detail) {
        this.mainTitle = e.detail.mainTitle
        this.subtitle = e.detail.subtitle
        this.show = true
      }
    },
  },
}
</script>
