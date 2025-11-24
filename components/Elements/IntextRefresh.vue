<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full center extra-width"
      :class="[softwall ? 'softwall' : '']"
      data-nosnippet
    >
      <div class="full flex stretch zgt-salebox relative alt-salebox">
        <div
          v-if="softwall"
          class="getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>
        <div
          v-show="topBar"
          class="full salebox-lockbox center-text barlow bold"
        >
          <font-awesome-icon :icon="['far', 'lock-keyhole']" /> {{ topBar }}
        </div>
        <div
          class="sixty flex flex-responsive column-full-pad mobile-side-pad mobile-bottom-pad m-order-2"
        >
          <div class="full sub-price column-mini-bottom-pad">
            {{ packName }}
            <span v-if="oldPrice" class="faded strikethrough"
              >{{ oldPrice }}€</span
            >
            <b>{{ newPrice }}€ {{ termDurationText }}</b>
          </div>
          <p class="full">
            {{ subtitle }}
          </p>
          <div class="full flex even-out-btns">
            <a
              class="newbtn huge-newbtn center-text green-newbtn"
              @click.prevent="start"
              >{{ cta }}</a
            >
            <!--<div
            v-if="softwall"
            class="newbtn huge-newbtn altbtn center-text clickable"
            @click="show = false"
          >
            Nastavite čitati
          </div>-->
            <div
              v-if="!softwall && !$store.state.user.token"
              class="newbtn huge-newbtn altbtn center-text clickable"
              @click.prevent="login"
            >
              Već imam pretplatu
            </div>
          </div>
          <div class="full flex alt-vertical-center">
            <div class="flex remp-icon-list">
              <font-awesome-icon :icon="['fab', 'cc-visa']"></font-awesome-icon>
              <font-awesome-icon
                :icon="['fab', 'cc-mastercard']"
              ></font-awesome-icon>
              <font-awesome-icon
                :icon="['fab', 'cc-diners-club']"
              ></font-awesome-icon>
            </div>
            <div class="flex faded barlow">
              Možete otkazati u bilo kojem trenutku
            </div>
          </div>
        </div>
        <div
          class="forty flex flex-responsive mobile-full-pad center raise-salebox-visual m-order-1"
        >
          <img
            :src="desktop_image"
            alt="Mobiteli na raznim stranicama Telegrama"
            class="desktop-only"
          />
          <img
            :src="mobile_image"
            alt="Uređaji na raznim stranicama Telegrama"
            class="mobile-only"
          />
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
  name: 'IntextNew',
  data() {
    return {
      show: false,
      termId: false,
      oldPrice: 99,
      newPrice: 78,
      packName: 'Osigurajte pristup istini za već od ',
      termDurationText: 'godišnje',
      subtitle: 'Pridružite se tisućama ljudi koji su podržali Telegram',
      topBar: 'Ovaj članak dostupan je samo pretplatnicima',
      softwall: false,
      cta: 'Kupite pretplatu',
      cta_link: '',
      desktop_image: require('@/assets/img/tg_mockup_mobile_standard.png'),
      mobile_image: require('@/assets/img/tg_mockup_combo.png'),
    }
  },
  mounted() {
    window.addEventListener('remp_intext_new', this.load)
  },
  destroyed() {
    window.removeEventListener('remp_intext_new', this.load)
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
        this.termDurationText = e.detail.termDurationText
        this.packName = e.detail.packName
        this.newPrice = e.detail.newPrice
        this.oldPrice = e.detail.oldPrice
        this.softwall = e.detail.softwall ?? false
        this.termId = e.detail.termId
        this.cta = e.detail.cta ?? 'Pretplatite se'
        this.cta_link = e.detail.cta_link ?? ''
        if (e.detail.desktop_image) {
          this.desktop_image = e.detail.desktop_image
        }
        if (e.detail.mobile_image) {
          this.mobile_image = e.detail.mobile_image
        }
      }
      this.triggerShow()
    },
    triggerShow() {
      if (this.show) {
        return
      }
      if (this.$route.query.gift_token) {
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
