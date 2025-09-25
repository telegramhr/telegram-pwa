<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full center"
      :class="[softwall ? 'softwall' : '']"
      data-nosnippet
    >
      <div
        class="full flex zgt-salebox dark-zgt-salebox blue-zgt-salebox relative"
      >
        <div
          v-if="softwall"
          class="getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>
        <div class="full flex flex-responsive relative m-order-1">
          <div class="third mobile-bottom-pad flex relative m-order-1">
            <img
                src="@/assets/img/slusalice.webp"
                class = "more-width"
                alt="Slušalice"
            />
          </div>
          <div class="third mobile-bottom-pad flex relative m-order-1">
            <img
                src="@/assets/img/mobitel.webp"
                alt="Mobitel s Telegramom"
            />
          </div>
          <div
            class="third mobile-bottom-pad flex relative m-order-1 mobile-only"
          >
            <img src="@/assets/img/iPad.webp" alt="Tablet s Telegramom" />
          </div>
        </div>
        <div
          class="half flex-responsive m-order-2 column-full-pad flex relative"
        >
          <div class="full zgts-title">
            {{ maintitle }}
          </div>
          <div class="full flex">
            <p class="full">
              {{ subtitle }}
              <span v-if="oldPrice" class="strikethrough"
              >{{ oldPrice }}€</span
            >
            <span v-if="newPrice" class="green-txt"
              >{{ newPrice }}€/{{ termDurationText }}</span
            >
            </p>
          </div>
          <div class="full flex">
            <a
              class="newbtn full huge-newbtn center-text"
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
          </div>
        </div>
        <div class="half flex relative desktop-only">
          <img
            src="@/assets/img/iPad.webp"
            class="ipad-margin"
            alt="Tablet s Telegramom"
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
  name: 'IntextPromoNewCustomer',
  data() {
    return {
      show: false,
      termId: false,
      oldPrice: 7.99,
      newPrice: 1.99,
      maintitle: 'Posebna prilika za nove pretplatnike! ',
      subtitle: 'Isprobajte Telegram za ',
      topBar: '',
      softwall: true,
      cta: 'Iskoristite ponudu',
      cta_link: '',
      termDurationText: 'mjesečno',
    }
  },
  mounted() {
    window.addEventListener('intext_newcustomer', this.load)
  },
  destroyed() {
    window.removeEventListener('intext_newcustomer', this.load)
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
      if (e.detail) {
        this.maintitle = e.detail.maintitle
        this.subtitle = e.detail.subtitle
        this.termDurationText = e.detail.termDurationText
        this.packName = e.detail.packName
        this.newPrice = e.detail.newPrice
        this.oldPrice = e.detail.oldPrice
        this.softwall = e.detail.softwall ?? false
        this.termId = e.detail.termId
        this.cta = e.detail.cta ?? ''
        this.cta_link = e.detail.cta_link ?? ''
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
  max-width: 900px;
  height: 700px;
  background-color: #304769;
  padding: 0px;
}

.zgts-title {
  font-family: 'Lora';
  text-transform: none;
  margin-bottom: 0.4rem;
  font-size: 44px;
}

.zgt-salebox p {
  font-family: 'Lora';
  font-size: 25px;
  width: 100%;
}

span.green-txt {
  color: #1db71d;
}

.zgt-salebox .newbtn {
  margin-top: 0.5rem;
  background-color: #1db71d;
  text-transform: none;
  padding: 16px 1px;
  font-weight: 600;
  font-size: 18px;
}

.zgt-salebox .newbtn:hover {
  opacity: 0.85;
}

.more-width {
  max-width: 120%;
}

.ipad-margin {
  margin-top: -14rem;
  margin-left: 0.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 900px) {
  .ipad-margin{
    margin-left: 0rem;
  }
}

@media screen and (max-width: 767px) {
  .zgt-salebox {
    height: auto;
  }

  .more-width {
    max-width: 100%;
  }

  .column-full-pad {
    padding: 1rem;
    margin-top: -2rem;
  }

  .zgts-title {
    font-size: 30px;
    text-align: center;
  }

  .zgt-salebox p {
    font-size: 20px;
    text-align: center;
  }
}
</style>
