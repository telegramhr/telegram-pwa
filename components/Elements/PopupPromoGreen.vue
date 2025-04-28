<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full center"
      :class="[softwall ? 'softwall' : '']"
      data-nosnippet
    >
      <div class="full flex zgt-salebox green-zgt-salebox relative">
        <div
          v-if="softwall"
          class="getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>
        <div class="full flex darker-green stretch relative">
          <div class="full center zgts-topbar">
            <div>{{ topBar }}</div>
          </div>
          <div
            class="two-thirds flex-responsive center flex-wrap relative column-horizontal-pad column-bottom-pad column-mini-top-pad mobile-side-pad m-order-2 mobile-bottom-pad"
          >
            <div class="full zgts-title bold">
              {{ maintitle }}
            </div>
            <div class="full flex">
              <p class="full">
                {{ subtitle }}
              </p>
            </div>
          </div>
          <div
            class="third flex-responsive flex relative mobile-full-pad column-mini-vertical-pad m-order-1"
          >
            <div
              class="full deset-box column-mini-horizontal-pad flex relative"
            >
              <img
                width="500"
                height="150"
                class="deset-logo"
                src="@/assets/img/tg_logo_10godina.svg"
                alt="10 godina Telegrama logo"
              />
            </div>
          </div>
        </div>
        <div class="full flex relative">
          <div class="full flex deset-price-picker column-mini-full-pad">
            <div class="fourth mobile-half flex column-mini-full-pad">
              <div
                class="full deset-price center relative"
                :class="{ 'deset-price-selected': totalPrice === 0 }"
                @click="totalPrice = 0"
              >
                <span>0€</span>
              </div>
            </div>
            <div class="fourth mobile-half flex column-mini-full-pad">
              <div
                class="full deset-price center relative"
                :class="{ 'deset-price-selected': totalPrice === 3 }"
                @click="totalPrice = 3"
              >
                <span>3€</span>
              </div>
            </div>
            <div class="fourth mobile-half flex column-mini-full-pad">
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
            <div class="fourth mobile-half flex column-mini-full-pad">
              <div
                class="full deset-price center relative"
                :class="{ 'deset-price-selected': totalPrice === 9 }"
                @click="totalPrice = 9"
              >
                <span>9€</span>
              </div>
            </div>
            <div class="fourth mobile-half flex column-mini-full-pad">
              <div
                class="full deset-price center relative"
                :class="{ 'deset-price-selected': totalPrice === 15 }"
                @click="totalPrice = 15"
              >
                <span>15€</span>
              </div>
            </div>
            <div class="fourth mobile-half flex column-mini-full-pad">
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
            <div
              class="fourth mobile-half align-children-end flex column-mini-full-pad"
            >
              <span class="deset-price-note smaller-text"
                >ili unesite iznos:</span
              >
            </div>
            <div class="fourth mobile-half flex column-mini-full-pad">
              <div
                class="full deset-price center relative deset-price-no-hover"
              >
                <input v-model="price" type="text" class="deset-price-input" />
                <span class="deset-price-input-note">€</span>
              </div>
            </div>
          </div>
          <div
            class="full flex column-horizontal-pad column-bottom-pad mobile-bottom-pad mobile-side-pad"
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
            <!--<div
            v-if="softwall"
            class="newbtn huge-newbtn altbtn center-text clickable"
            @click="show = false"
          >
            Nastavite čitati
          </div>-->
          </div>
        </div>
        <!--<div v-if="softwall" class="full center">
        <div class="newbtn huge-newbtn center-text nothanks-btn">
          Nastavite čitati besplatno
        </div>
      </div>-->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextPromoPack',
  data() {
    return {
      show: false,
      termId: false,
      oldPrice: 99,
      newPrice: 78,
      maintitle: 'Proslavite s nama 10 godina Telegrama!',
      subtitle:
        'Čitajte Telegram prvih 10 tjedana po cijeni koju sami odaberete. ',
      topBar: 'Nastavite čitati',
      softwall: false,
      cta: 'Nastavite kupnju za 5€',
      cta_link: '',
      termDurationText: '',
      price: 5,
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
  },
  mounted() {
    window.addEventListener('popup_ten', this.load)
  },
  destroyed() {
    window.removeEventListener('popup_ten', this.load)
  },
  methods: {
    login() {
      this.$store.dispatch('user/login')
    },
    start() {
      this.$store.commit('pretplata/setLastArticle', this.$route.path)
      if (this.termId) {
        if (this.termId.includes('pretplata')) {
          this.$router.push(this.termId)
        } else {
          this.checkout(this.termId)
        }
      } else if (this.cta_link) {
        window.open(this.cta_link, '_blank')
      } else if (this.$route.path.includes('telesport')) {
        this.$router.push('/pretplata/telesport')
      } else {
        this.$router.push('/pretplata')
      }
    },
    load(e) {
      if (this.$store.state.user.access?.length) {
        return
      }
      if (e.detail) {
        this.topBar = e.detail.topBar
        this.subtitle = e.detail.subtitle
        this.maintitle = e.detail.mainTitle
        this.softwall = e.detail.softwall ?? false
      }
      this.triggerShow()
    },
    triggerShow() {
      if (this.show) {
        return
      }
      const el = document.getElementById('piano-content')
      if (this.softwall) {
        this.show = true
        this.$emit('show')
      }
      if (el) {
        this.show = true
        if (!this.softwall) {
          el.parentNode.removeChild(el)
          document
            .querySelector('#article-content p:last-child')
            .classList.add('premium-fade-out')
        }
      }
    },
  },
}
</script>

<style scoped>
.softwall {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
  max-width: 100% !important;
}
.zgt-salebox {
  max-width: 710px;
}
.zgts-topbar div {
  background-color: #ae3737 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
