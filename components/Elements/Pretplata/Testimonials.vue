<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Testimonials',
  components: { VueSlickCarousel },
  data() {
    return {
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        variableWidth: true,
      },
      testimonials: [
        {
          text: 'Stranice Telegrama u meni bude nadu da nije sve oko nas uzaludno. I bude zahvalnost za jedan humani pokušaj pružanja utjehe svojim čitaocima',
          name: 'Rade Šerbedžija',
          description: 'Pretplatnik i umjetnik',
          avatar: require('@/assets/img/pretplata/rade.png'),
        },
        {
          text: 'Telegram opravdano drži posebno mjesto u civilizacijskom ekosustavu. Temama pozitivno utječe na trendove u društvu, na svim razinama',
          name: 'Emil Tedeschi',
          description: 'Pretplatnik i poduzetnik',
          avatar: require('@/assets/img/pretplata/emil.png'),
        },
        {
          text: 'U državi u kojoj institucije ne funkcioniraju, neovisno novinarstvo drži nam glavu iznad vode. Telegram čitam jer se još uvijek bavi pravim novinarstvom',
          name: 'Maja Sever',
          description: 'Pretplatnica i novinarka',
          avatar: require('@/assets/img/pretplata/sever.png'),
        },
      ],
    }
  },
}
</script>

<template>
  <div class="main">
    <div class="wrapper">
      <div class="testimonials">
        <span class="title">Izjave čitatelja</span>

        <div class="desktop-testimonials">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="card"
          >
            <p>{{ testimonial.text }}</p>
            <div class="author-box">
              <img :src="testimonial.avatar" alt="" />
              <div class="info">
                <span class="name">{{ testimonial.name }}</span>
                <p class="description">{{ testimonial.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-testimonials">
          <vue-slick-carousel v-bind="slickOptions">
            <div
              class="card-wrapper"
              v-for="(testimonial, index) in testimonials"
              :key="index"
            >
              <div class="card">
                <p>{{ testimonial.text }}</p>
                <div class="author-box">
                  <img :src="testimonial.avatar" alt="" />
                  <div class="info">
                    <span class="name">{{ testimonial.name }}</span>
                    <p class="description">{{ testimonial.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </vue-slick-carousel>
        </div>
      </div>
      <div class="cta">
        <span>Blagdanska akcija traje do kraja ovog mjeseca</span>
        <button>Darujte pretplatu</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  padding: 0 16px;
  overflow: hidden;
  position: relative;
}

.wrapper {
  max-width: 868px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding-bottom: 72px;
}
.testimonials {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.title {
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  line-height: 32px;
  font-weight: 500;
  color: black;
  text-align: center;
}

.desktop-testimonials {
  display: none;
  gap: 14px;
  flex-direction: row;
}

.card-wrapper {
  max-width: 280px;
  margin-right: 16px;
  width: 100%;
}
.card {
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
}
.card p {
  font-family: 'Barlow', serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: #000000;
}
.author-box {
  display: flex;
  align-items: center;
  gap: 12px;
}
.author-box .info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.author-box img {
  width: 48px;
  height: 48px;
  border-radius: 100%;
  object-fit: cover;
}

.author-box .info .name {
  font-weight: 500;
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
}

.author-box .info .description {
  font-size: 14px;
  line-height: 18px;
  color: black;
}

.mobile-testimonials {
  display: block;
}
.cta {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 406px;
  width: 100%;
  margin: 0 auto;
}
.cta span {
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
.cta button {
  background-color: #37ae37;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 18px 28px;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
}
.cta button:hover {
  background-color: #237023;
}

@media (min-width: 1024px) {
  .wrapper {
    gap: 116px;
    padding-bottom: 116px;
  }
  .testimonials {
    gap: 46px;
  }
  .testimonials .title {
    font-size: 28px;
    line-height: 56px;
  }
  .desktop-testimonials {
    display: flex;
  }
  .mobile-testimonials {
    display: none;
  }
  .desktop-testimonials .card {
    justify-content: space-between;
    padding: 28px;
    flex: 1;
    gap: 28px;
  }
  .desktop-testimonials .card .author-box img {
    width: 56px;
    height: 56px;
  }
  .desktop-testimonials .card .author-box {
    gap: 14px;
  }

  .desktop-testimonials .card .author-box .name {
    font-size: 20px;
  }
  .desktop-testimonials .card .author-box .description {
    font-size: 14px;
    line-height: 20px;
  }
  .cta {
    gap: 36px;
  }
  .cta span {
    font-size: 28px;
    line-height: 36px;
  }
}
</style>
