<template>
  <section id="s1-shopping" class="full flex relative">
    <div class="container flex relative">
      <div class="full center relative">
        <div class="noththree flex superone-section-title">
          <img src="@/assets/img/s1_logo_clean_noline.svg" alt="Super1 logo" />
          <img
            src="@/assets/img/s1_logo_clean_noline_white.svg"
            alt="Super1 logo"
            class="dark-mode-only"
            loading="lazy"
          />Top picks
        </div>
      </div>
      <div class="full flex column-horizontal-pad">
        <div class="full flex stretch gallery-content superone-toppicks">
          <VueSlickCarousel
            v-if="posts.length"
            ref="s1_toppicks_carousel"
            v-bind="slider_settings"
            style="display: block; width: 100%"
          >
            <div v-for="post in posts" :key="post.id" class="offer-slide">
              <AppLink
                :to="post.link"
                target="_blank"
                class="full flex article relative"
                role="article"
              >
                <div class="full flex relative s1-toppick-img">
                  <img :src="post.image" aria-hidden="true" loading="lazy" />
                </div>
                <div class="full flex article-pad">
                  <p class="full center-text">{{ post.title | parseCat }}</p>
                  <div v-if="post.price" class="full center">
                    <div class="s1-toppick-price">{{ post.price }}</div>
                  </div>
                </div>
              </AppLink>
            </div>
          </VueSlickCarousel>
          <div
            class="gallery-left center gallery-arrow animate"
            @click="$refs.s1_toppicks_carousel.prev()"
          >
            <font-awesome-icon
              :icon="['far', 'angle-left']"
              class="animate"
            ></font-awesome-icon>
          </div>
          <div
            class="gallery-right center gallery-arrow animate"
            @click="$refs.s1_toppicks_carousel.next()"
          >
            <font-awesome-icon
              :icon="['far', 'angle-right']"
              class="animate"
            ></font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SuperShopping',
  async fetch() {
    this.posts = await this.$axios.$get('/api/s1/shopping')
  },
  data() {
    return {
      slider_settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerMode: true,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            },
          },
        ],
      },
      posts: [],
    }
  },
}
</script>

<style scoped>
#s1-shopping .gallery-left {
  left: 0;
}
#s1-shopping .gallery-right {
  right: 0;
}
</style>
