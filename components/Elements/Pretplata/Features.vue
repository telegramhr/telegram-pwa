<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Features',
  components: { VueSlickCarousel },
  data() {
    return {
      activeIndex: 0,
      cards: [
        {
          title: 'Cjelogodišnji pristup vrhunskom novinarstvu',
          text: 'Čitajte sve članke bez ograničenja - od istraživačkih priča do analiza koje oblikuju javni razgovor u Hrvatskoj.',
          image: require('@/assets/img/pretplata/features/pristup.png'),
        },
        {
          title: 'Neovisno i nagrađivano novinarstvo',
          text: 'Pretplatom podržavate redakciju koja je višestruko nagrađivana za istraživačko i analitičko novinarstvo.',
          image: require('@/assets/img/pretplata/features/neovisno.png'),
        },
        {
          title: 'Relevantne analize i komentari',
          text: 'Analize onoga što se zapravo događa - kroz tekstove koji idu dublje od naslova.',
          image: require('@/assets/img/pretplata/features/relevantne.png'),
        },
        {
          title: 'Bez reklama u sklopu Premium pretplate',
          text: 'Uživajte u čistom, preglednom čitanju - bez ometajućih reklama.  Samo informacije koje vrijede vašeg vremena.',
          image: require('@/assets/img/pretplata/features/reklame.png'),
        },
        {
          title: 'Pristup Telegram klubu i pogodnostima',
          text: 'U Telegram Klubu vas očekuju dodatne pogodnosti, posebni popusti i pozivnice na ekskluzivne događaje.',
          image: require('@/assets/img/pretplata/features/klub.png'),
        },
      ],
    }
  },
}
</script>

<template>
  <div class="main">
    <div class="wrapper">
      <span class="title">Što dobivate pretplatom:</span>
      <div class="desktop-content">
        <div class="activeImage">
          <transition name="fade-img" mode="out-in">
            <img
              :key="cards[activeIndex].image"
              :src="cards[activeIndex].image"
              :alt="cards[activeIndex].title"
            />
          </transition>
        </div>
        <div class="desktop-cards">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="desktop-card"
            @click="activeIndex = index"
            :class="{ active: activeIndex === index }"
          >
            <span>{{ card.title }}</span>
            <p>{{ card.text }}</p>
          </div>
        </div>
      </div>
      <div class="mobile-content">
        <vue-slick-carousel
          :slides-to-show="1"
          :slides-to-scroll="1"
          :variable-width="true"
          :center-mode="false"
          :swipe="true"
          :arrows="false"
          :dots="false"
        >
          <div v-for="(card, index) in cards" :key="index" class="card">
            <img class="card-image" :src="card.image" alt="" />
            <div class="card-content">
              <span>{{ card.title }}</span>
              <p>{{ card.text }}</p>
            </div>
          </div>
        </vue-slick-carousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0px 16px;
}
.wrapper {
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 40px;
}
.wrapper .title {
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  font-weight: 500;
  color: #000000;
}
.mobile-content {
  display: block;
}
.desktop-content {
  display: none;
}
.card {
  max-width: 285px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-right: 21px;
  gap: 16px;
}

.card-image {
  width: 100%;
  object-fit: cover;
  height: 100%;
  aspect-ratio: 1;
}
.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
}
.card-content span {
  font-family: 'Barlow', serif;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #000000;
}
.card-content p {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #000000;
}

.card {
  box-sizing: border-box;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-content {
  margin-top: 1rem;
}
@media (min-width: 1024px) {
  .fade-img-enter-active,
  .fade-img-leave-active {
    transition: opacity 0.45s ease-out, transform 0.45s ease-out;
    position: absolute;
    inset: 0;
  }

  .fade-img-enter-from,
  .fade-img-leave-to {
    opacity: 0;
    transform: scale(0.97);
  }

  .fade-img-enter-to,
  .fade-img-leave-from {
    opacity: 1;
    transform: scale(1);
  }
  .wrapper {
    gap: 60px;
  }
  .wrapper .title {
    font-size: 28px;
    line-height: 32px;
    font-weight: 500;
  }
  .mobile-content {
    display: none;
  }
  .desktop-content {
    display: flex;
    flex-direction: row;
    gap: 48px;
  }
  .activeImage {
    width: 100%;
    max-width: 470px;
    aspect-ratio: 1;
    overflow: hidden;
    position: relative;
  }
  .activeImage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .desktop-cards {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .desktop-card {
    padding: 2px 0px 2px 12px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #747474;
    cursor: pointer;
    transition: color 0.25s ease, border-left 0.25s ease, transform 0.25s ease;
  }
  .desktop-card:hover {
    transform: translateX(6px);
  }
  .desktop-card.active {
    color: #000000;
    transform: translateX(0);
    border-left: 4px solid black;
  }
  .desktop-card span {
    font-family: 'Barlow', serif;
    font-size: 18px;
    line-height: 28px;
  }
  .desktop-card p {
    font-family: 'Barlow', sans-serif;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
