<script>
export default {
  name: 'QuoteTestimonials',
  props: {
    title: {
      type: String,
      default: 'Čitaju nas oni koji žele znati',
    },
    // { text, name, description }
    testimonials: {
      type: Array,
      default: () => [
        {
          text: 'U državi u kojoj institucije ne funkcioniraju, neovisno novinarstvo drži nam glavu iznad vode.',
          name: 'Maja Sever',
          description: 'Pretplatnica i novinarka',
        },
        {
          text: 'Jedan je od rijetkih medija koji pokazuje što se događa izvan Zagreba.',
          name: 'Tvrtko Jakovina',
          description: 'Pretplatnik i povjesničar',
        },
        {
          text: 'Većinu svjetskih, a i hrvatskih afera otkrili su upravo - mediji.',
          name: 'Daniel Ackermann',
          description: 'Suosnivač agencije Degordian',
        },
      ],
    },
  },
}
</script>

<template>
  <section class="quote-testimonials">
    <div class="qt-wrap">
      <span class="qt-divider"></span>
      <div class="qt-content">
        <h2 class="qt-title">{{ title }}</h2>
        <div class="qt-quotes">
          <blockquote
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="qt-quote"
          >
            <span class="qt-quote__mark" aria-hidden="true">“</span>
            <div class="qt-quote__body">
              <p class="qt-quote__text">{{ testimonial.text }}</p>
              <span class="qt-quote__accent"></span>
              <div class="qt-quote__by">
                <span class="qt-quote__name">{{ testimonial.name }}</span>
                <span class="qt-quote__desc">{{
                  testimonial.description
                }}</span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
      <span class="qt-divider qt-divider--bottom"></span>
    </div>
  </section>
</template>

<style scoped>
/*
 * Figma "Pretplata Landing — Active"
 *   desktop node 2328:3618 — three columns, 48px apart, hairline above
 *   mobile  node 2377:1120 — stacked, hairlines above and below
 */
.quote-testimonials {
  width: 100%;
  background-color: #000;
  color: #fff;
}
.qt-wrap {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 16px 40px;
}
.qt-divider {
  display: block;
  width: 100%;
  height: 1px;
  background-color: #2b2b2b;
}
.qt-content {
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.qt-title {
  margin: 0;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.15;
  letter-spacing: -0.28px;
  text-align: center;
  color: #fff;
}
.qt-quotes {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.qt-quote {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
  padding: 0; /* global blockquote styles would add space here */
  border: none;
}
.qt-quote__mark {
  flex: 0 0 auto;
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 0.8;
  color: #930002;
}
.qt-quote__body {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  min-width: 0;
}
.qt-quote__text {
  margin: 0;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  color: #fff;
}
.qt-quote__accent {
  display: block;
  width: 24px;
  height: 3px;
  background-color: #930002;
}
.qt-quote__by {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: 'Barlow', sans-serif;
}
.qt-quote__name {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #fff;
}
.qt-quote__desc {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #a3a3a3;
}

@media (min-width: 1024px) {
  .qt-wrap {
    /* 76 = Figma's 43 below the quotes frame + its 33px of slack under the
       tallest quote */
    padding: 72px 0 76px;
  }
  .qt-divider--bottom {
    display: none;
  }
  .qt-title {
    font-size: 40px;
    letter-spacing: -0.4px;
  }
  .qt-quotes {
    flex-direction: row;
    align-items: flex-start;
    gap: 48px;
  }
  .qt-quote {
    flex: 1 1 0;
    min-width: 0;
  }
  .qt-quote__mark {
    font-size: 40px;
  }
}
</style>
