<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full center"
      :class="[softwall ? 'softwall' : '']"
      data-nosnippet
    >
      <div class="full flex zgt-salebox relative">
        <div
          v-if="softwall"
          class="getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>
        <div class="full center zgts-topbar">
          <div>{{ topBar }}</div>
        </div>
        <div class="full center-text noththree overtitle">
          {{ packName }}
        </div>
        <div class="full center-text sub-price bold">
          <span v-if="oldPrice" class="faded strikethrough"
            >{{ oldPrice }}€</span
          >
          {{ newPrice }}€
        </div>
        <div class="full center-text zgts-subtitle">{{ termDurationText }}</div>
        <div class="full center">
          <div class="zgts-separator"></div>
        </div>
        <div class="full center">
          <p class="full center-text">
            {{ subtitle }}
          </p>
        </div>
        <div class="full center even-out-btns">
          <a class="newbtn huge-newbtn center-text" @click.prevent="start">{{
            cta
          }}</a>
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
        <div class="full center">
          <div class="flex remp-icon-list">
            <font-awesome-icon :icon="['fab', 'cc-visa']"></font-awesome-icon>
            <font-awesome-icon
              :icon="['fab', 'cc-mastercard']"
            ></font-awesome-icon>
            <font-awesome-icon
              :icon="['fab', 'cc-diners-club']"
            ></font-awesome-icon>
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
  name: 'IntextNew',
  data() {
    return {
      show: false,
      termId: false,
      oldPrice: 99,
      newPrice: 78,
      packName: '',
      termDurationText: '',
      subtitle: '',
      topBar: '',
      softwall: false,
      cta: '',
      cta_link: '',
    }
  },
  mounted() {
    window.addEventListener('piano_intext_new', this.load)
  },
  destroyed() {
    window.removeEventListener('piano_intext_new', this.load)
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
        document.location.href = 'https://pretplata.telegram.hr/sales-funnel/sales-funnel-frontend/show?funnel=main'
      }
    },
    load(e) {
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
      }
      this.triggerShow()
    },
    checkout(termId) {
      this.$piano.start(termId)
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
