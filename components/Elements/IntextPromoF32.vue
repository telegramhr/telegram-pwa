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
        <div class="full flex-responsive column-full-pad center wrap relative">
          <div class="full zgts-title">
            {{ maintitle }}
          </div>
          <div class="full center">
            <a class="newbtn huge-newbtn center-text" @click.prevent="start">{{ cta }}</a>
          </div>
        </div>
        <div class="full flex flex-responsive relative">
          <div class="half flex relative autor-margin">
            <img src="@/assets/img/stankovic.webp" alt="Autor Aleksandar Stanković"/>
            <!-- <picture>
              <source srcset="@/assets/img/stankovic.webp" type="image/webp" />
              <img src="@/assets/img/stankovic.png" alt="Autor Aleksandar Stanković" class="book-margin" />
            </picture> -->
          </div>
          <div class="third center relative">
            <img class = "book-margin" src="@/assets/img/f32-knjiga.webp" alt="Aleksandar Stanković F32 Knjiga" />
            <!-- <picture>
              <source srcset="@/assets/img/f32-knjiga.webp" type="image/webp" />
              <img src="@/assets/img/f32-knjiga.png" alt="Aleksandar Stanković F32 Knjiga" class="book-margin" />
            </picture> -->
            <img src="@/assets/img/f32-knjiga.webp" alt="Aleksandar Stanković F32 Knjiga" />
            <!-- <picture>
              <source srcset="@/assets/img/f32-knjiga.webp" type="image/webp" />
              <img src="@/assets/img/f32-knjiga.png" alt="Aleksandar Stanković F32 Knjiga" class="" />
            </picture> -->
            <img class = "sticker" src="@/assets/img/f32-cijena.webp" alt="Cijena 19,99€" />
            <!-- <picture>
              <source srcset="@/assets/img/f32-cijena.webp" type="image/webp" />
              <img src="@/assets/img/f32-cijena.png" alt="Cijena 19,99€" class="" />
            </picture> -->
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextPromoF32',
  data() {
    return {
      show: false,
      termId: false,
      maintitle: 'Nova knjiga Ace Stankovića: nastavak mega-hita Depra',
      softwall: true,
      cta: 'Naručite Odmah',
      cta_link: '',
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
  height: 600px;
  padding: 0px;
  background: radial-gradient(ellipse 110% 132% at center bottom, rgba(74, 74, 74, 0.2) 50% 50%, #1a1c20 51%);
}
  

.zgts-title {
  max-width: 454px;
  text-transform: none;
  font-weight: 800;
  line-height: 44.02px;
  letter-spacing: 0px;
  text-align: center;
  margin: 1.2rem 0rem;
}


.zgt-salebox .newbtn {
  margin-top: 0.5rem;
  background-color: #fffdf2;
  text-transform: uppercase;
  padding: 10.47px 24.43px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 3.06px;
  line-height: 29.09px;
  letter-spacing: 1.21px;
  color: #1A1C20;
  font-weight: 700;
  width: 254px;
}

.zgt-salebox .newbtn:hover {
  opacity: 0.85;
}

.book-margin{
    margin-top: -2rem;
    margin-right: -6rem;
    display: inline-block;
}

.third.center{
  margin-top: 1rem;
}

.autor-margin{
    margin-top: -2.9rem;
    margin-right: -3rem;
}

.sticker{
    position: absolute;
    top: -5rem;
    right: -3rem;
}


@media screen and (max-width: 1024px) {
  .zgt-salebox {
    height: auto;
  }

  .column-full-pad{
    padding: 1rem;
  }

  .zgts-title {
    text-align: center;
    line-height: 1.7rem;
    font-size: 1.8rem;
  }

  .zgt-salebox p {
    font-size: 20px;
    text-align: center;
  }

  .book-margin{
    margin-top: -1rem;
    margin-right: -6rem;
  }

  .autor-margin{
    margin-top: -0.2rem;

  }

  .sticker{
    position: absolute;
    top: -3rem;
    right: -3rem;
    scale: 0.8;
  }

  .third.center{
    margin-top: 2rem;
  }

}

@media screen and (max-width: 768px) {
    .book-margin{
    margin-top: -1rem;
    margin-right: -3rem;
  }

  .autor-margin{
    margin-right: 0rem;
  }

  .zgts-title {
    text-align: center;
    line-height: 1.1rem;
    font-size: 1.3rem;
  }

  .zgt-salebox .newbtn {
    font-size: 19px;
    width: auto;
  }

  .third.center{
    margin-top: 1rem;
}
}
</style>
