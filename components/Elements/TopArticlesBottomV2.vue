<template>
  <div class="containerArticles full">
    <div class="container">
      <h2 class="titleArticles">Pročitajte još</h2>
      <div v-if="posts.length > 0" class="gridArticles">
        <VueSlickCarousel v-bind="slickOptions">
          <div v-for="(post, index) in posts" :key="index" class="slide-item">
            <app-link
              class="card"
              :to="getPermalink(post)"
              role="article"
              data-widget="bottomV2"
              :data-id="post.id"
              :aria-labelledby="'standard-' + post.id"
              :data-widget-position="index + 1"
              data-widget-type="bottomV2"
              data-mrf-recirculation="TGBottomV2"
            >
              <div class="image-wrapper">
                <img
                  :src="post.image?.url"
                  :alt="post.image?.alt"
                  loading="lazy"
                  width="800"
                  height="505"
                />
              </div>
              <div class="content">
                <h3 :id="'standard-' + post.id" class="full">
                  {{ post.portal_title }}
                </h3>
              </div>
            </app-link>
          </div>

          <!-- Custom Previous Arrow -->
          <template #prevArrow>
            <div class="custom-arrow prev-arrow">
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 6.29995L0.900001 6.29995M13.5 6.29995L8.1 0.89995M13.5 6.29995L8.1 11.7"
                  stroke="#A33334"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </template>

          <!-- Custom Next Arrow -->
          <template #nextArrow>
            <div class="custom-arrow next-arrow">
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 6.29995L0.900001 6.29995M13.5 6.29995L8.1 0.89995M13.5 6.29995L8.1 11.7"
                  stroke="#A33334"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </template>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerArticles {
  background-color: #eee3d8;
  padding: 24px 20px;
}
.titleArticles {
  max-width: 710px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  text-align: left;
  font-family: 'barlow', sans-serif;
  margin-bottom: 24px;
}
h3 {
  font-family: 'Lora';
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
}
.card:hover h3 {
  color: #ae3737;
}
.gridArticles {
  display: flex;
  flex-direction: column;
  max-width: 710px;
  margin: 0 auto;
  position: relative;
}
.gridArticles img {
  height: 146px;
  width: 100%;
  object-fit: cover;
}
.card {
  padding: 0px 7px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.custom-arrow {
  padding: 12px;
  background: white;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  opacity: 1;
}
.gridArticles:hover .custom-arrow {
  opacity: 1;
}
.slick-next:before,
.slick-prev:before {
  content: none;
}
.slick-next,
.slick-next:focus,
.slick-next:hover,
.slick-prev,
.slick-prev:focus,
.slick-prev:hover {
  background: white;
}
.prev-arrow,
.next-arrow {
  top: 75px;
}
.prev-arrow {
  left: 5px;
}
.next-arrow {
  right: 5px;
}
.next-arrow svg {
  transform: translateY(-50%) translateX(-45%);
}
.prev-arrow svg {
  transform: translateY(-50%) translateX(-45%) rotate(180deg);
}

@media screen and (min-width: 768px) {
  .containerArticles {
    padding: 40px 0px;
  }
  .titleArticles {
    margin-bottom: 40px;
    font-size: 24px;
  }
  .custom-arrow {
    opacity: 0;
  }
}
</style>

<script>
export default {
  name: 'TopArticlesBottomV2',
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    utm: {
      type: Object,
      required: false,
      default() {
        return {
          campaign: '',
        }
      },
    },
  },
  data() {
    return {
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 920,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  mounted() {},
  methods: {
    getPermalink(post) {
      if (this.utm.source || this.utm.campaign) {
        return `${post.permalink}?utm_medium=Internal&utm_campaign=${this.utm.campaign}`
      }
      return post.permalink
    },
  },
}
</script>
