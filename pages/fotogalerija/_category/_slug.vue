<template>
  <div class="main-container flex single-article gallery">
    <client-only>
      <theader></theader>
    </client-only>
    <div class="full gallery-body">
      <div class="container flex relative mobile-side-pad">
        <div class="full flex article-head">
          <div class="full flex">
            <h3 class="overtitle">{{ post.category }}</h3>
          </div>
          <h1 class="full">{{ post.title }}</h1>
          <h2 class="full">{{ post.subtitle }}</h2>
        </div>
        <div class="full flex gallery-content relative">
          <div class="gallery-header full flex">
            <div class="third animate">
              <i class="far fa-angle-left"></i> Prethodna
            </div>
            <div class="gallery-count third animate">
              Slika {{ current }}/{{ gallery.length }}
            </div>
            <div class="third animate">
              Sljedeća <i class="far fa-angle-right"></i>
            </div>
          </div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <figure
                v-for="image in post.content"
                :key="image.id"
                class="full relative"
              >
                <img :src="image.url" />
                <figcaption class="wp-caption-text img-portrait">
                  {{ image.caption }}
                  <span class="photographer">{{ image.author }}</span>
                </figcaption>
              </figure>
            </div>
            <div class="gallery-left center gallery-arrow desktop-only animate">
              <i class="far fa-angle-left animate"></i>
            </div>
            <div
              class="gallery-right center gallery-arrow desktop-only animate"
            >
              <i class="far fa-angle-right animate"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
import Swiper from 'swiper/js/swiper.esm.bundle'
export default {
  name: 'Slug',
  data() {
    return {
      current: 0,
      post: {
        type: '',
        image: {
          url: '',
          alt: '',
          author: '',
        },
        authors: [
          {
            url: '',
            name: '',
            image: '',
          },
        ],
        overtitle: '',
        title: '',
        subtitle: '',
        content: '',
        recommendations: 0,
        comments: 0,
        time: 0,
        tags: [],
        social: {
          title: '',
          description: '',
          image: '',
        },
        gallery: [],
      },
      virtualData: {
        slides: [],
      },
    }
  },
  mounted() {
    this.$axios.get('single/' + this.$route.params.slug).then((res) => {
      this.post = res.data
      // eslint-disable-next-line
      const s = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
      })
    })
  },
}
</script>
