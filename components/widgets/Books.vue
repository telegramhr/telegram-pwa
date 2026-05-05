<template>
  <div v-if="books.length" class="container books-widget mobile-side-pad">
    <div class="books-widget-header">
      <h2 class="books-widget-title">
        <span class="books-widget-logo" aria-label="Telegram knjige"></span>
        <span class="books-widget-vh">Najpopularniji naslovi</span>
      </h2>
      <div class="books-widget-header-right">
        <button
          type="button"
          class="books-header-arrow books-header-arrow-prev"
          aria-label="Prethodne knjige"
          @click="prev"
        ></button>
        <button
          type="button"
          class="books-header-arrow books-header-arrow-next"
          aria-label="Sljedeće knjige"
          @click="next"
        ></button>
        <a
          :href="seeAllLink"
          target="_blank"
          rel="noopener"
          class="books-widget-seeall"
        >
          Pogledaj sve
          <font-awesome-icon :icon="['far', 'chevron-right']" />
        </a>
      </div>
    </div>

    <client-only>
      <vue-slick-carousel
        ref="carousel"
        v-bind="slickOptions"
        class="books-carousel"
      >
      <div
        v-for="(book, index) in books"
        :key="book.id"
        class="books-slide"
      >
        <article class="book-card">
          <a
            :href="book.permalink"
            target="_blank"
            rel="noopener"
            class="book-cover-link"
            @click="trackClick(book, 'cover')"
          >
            <img
              v-if="book.image"
              :src="book.image.src"
              :alt="book.image.alt"
              :loading="index < 3 ? 'eager' : 'lazy'"
              :fetchpriority="index < 2 ? 'high' : 'auto'"
              decoding="async"
              width="200"
              height="284"
              class="book-cover"
            />
          </a>
          <div class="book-meta">
            <a
              :href="book.permalink"
              target="_blank"
              rel="noopener"
              class="book-title"
              @click="trackClick(book, 'title')"
              >{{ book.title }}</a
            >
            <div v-if="book.author" class="book-author">{{ book.author }}</div>
            <div class="book-price">
              <span
                v-if="book.onSale && book.regularPrice"
                class="book-price-old"
                >{{ format(book.regularPrice) }}</span
              >
              <span class="book-price-new">{{
                format(
                  book.onSale && book.salePrice
                    ? book.salePrice
                    : book.price
                )
              }}</span>
            </div>
            <a
              :href="`${book.permalink}?add-to-cart=${book.id}`"
              target="_blank"
              rel="noopener"
              class="book-cart-btn"
              @click="trackClick(book, 'cart')"
            >
              Dodaj u košaricu
            </a>
          </div>
        </article>
      </div>
      </vue-slick-carousel>
    </client-only>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

const formatter = new Intl.NumberFormat('hr-HR', {
  style: 'currency',
  currency: 'EUR',
})

export default {
  name: 'Books',
  data() {
    return {
      seeAllLink: 'https://knjige.telegram.hr/',
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: true,
        responsive: [
          {
            breakpoint: 1300,
            settings: { slidesToShow: 6, slidesToScroll: 2, arrows: false },
          },
          {
            breakpoint: 1024,
            settings: { slidesToShow: 4, slidesToScroll: 2, arrows: false },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      },
    }
  },
  async fetch() {
    await this.$store.dispatch('books/pullFeatured', { limit: 7 })
  },
  computed: {
    books() {
      return this.$store.state.books.featured
    },
  },
  mounted() {
    if (this.books.length && this.$gtm) {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': 'books-featured',
        'webshop-action': 'view',
        'webshop-label': 'impression',
      })
    }
  },
  methods: {
    format(value) {
      const n = parseFloat(value)
      if (isNaN(n)) return ''
      return formatter.format(n)
    },
    prev() {
      if (this.$refs.carousel) this.$refs.carousel.prev()
    },
    next() {
      if (this.$refs.carousel) this.$refs.carousel.next()
    },
    trackClick(book, target) {
      if (this.$gtm) {
        this.$gtm.push({
          event: 'webshop-widget',
          'webshop-category': 'books-featured',
          'webshop-action': 'click',
          'webshop-label': target,
          'webshop-value': book.sku || book.id,
        })
      }
    },
  },
}
</script>

<style scoped>
.books-widget {
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 32px 24px;
  box-sizing: border-box;
}
@media (max-width: 640px) {
  .books-widget {
    width: 100%;
    padding-left: 4vw;
    padding-right: 4vw;
  }
}
.books-widget-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 16px;
}
.books-widget-header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.books-header-arrow {
  display: none;
  width: 32px;
  height: 32px;
  border: 0;
  padding: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 32px 32px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s ease;
}
.books-header-arrow:hover {
  opacity: 0.7;
}
.books-header-arrow-prev {
  background-image: url('~assets/img/homepage/left.svg');
}
.books-header-arrow-next {
  background-image: url('~assets/img/homepage/right.svg');
}
@media (max-width: 1299px) {
  .books-header-arrow {
    display: block;
  }
}
.books-widget-title {
  margin: 0;
  display: flex;
  align-items: center;
}
.books-widget-logo {
  display: block;
  width: 120px;
  height: 29px;
  background-color: #242b35;
  -webkit-mask: url('~assets/img/homepage/logo-tknjige.svg') no-repeat center /
    contain;
  mask: url('~assets/img/homepage/logo-tknjige.svg') no-repeat center / contain;
}
.books-widget-vh {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.dark-mode .books-widget-logo {
  background-color: #f5f5f5;
}
.books-widget-seeall {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #444;
  white-space: nowrap;
}
.books-widget-seeall svg {
  margin-left: 6px;
}
.books-slide {
  padding: 0 8px;
  height: 100%;
}
.book-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.book-cover-link {
  display: block;
  width: 100%;
  aspect-ratio: 200 / 284;
  overflow: hidden;
  background: #f4eee5;
}
.book-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.book-meta {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 12px;
}
.book-title {
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: #0f172a;
  margin-bottom: 4px;
  min-height: 2.5em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}
.book-author {
  font-family: 'Barlow', sans-serif;
  font-size: 13px;
  line-height: 1.4;
  color: #555;
  margin-bottom: 8px;
  min-height: 1.4em;
}
.book-price {
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  margin-bottom: 12px;
  display: flex;
  gap: 8px;
  align-items: baseline;
  color: #3a3a3a;
}
.book-price-old {
  text-decoration: line-through;
  color: #999;
  font-size: 13px;
}
.book-price-new {
  font-weight: 700;
  color: #3a3a3a;
}
.book-cart-btn {
  display: block;
  text-align: center;
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 12px 16px;
  background: #efe6d6;
  color: #272727;
  margin-top: auto;
  transition: background-color 0.2s;
}
.book-cart-btn:hover {
  background: #e2d4ba;
}

.dark-mode .books-widget-title,
.dark-mode .book-title {
  color: #f5f5f5;
}
.dark-mode .book-author,
.dark-mode .books-widget-seeall {
  color: #ccc;
}
.dark-mode .book-price,
.dark-mode .book-price-new {
  color: #f5f5f5;
}

:deep(.slick-track) {
  display: flex !important;
}
:deep(.slick-slide) {
  height: inherit !important;
}
:deep(.slick-slide > div) {
  height: 100%;
}
:deep(.slick-prev),
:deep(.slick-next) {
  width: 32px;
  height: 32px;
  z-index: 1;
  top: 35%;
  opacity: 1;
  transition: opacity 0.2s ease;
}
:deep(.slick-prev:hover),
:deep(.slick-next:hover) {
  opacity: 0.7;
}
:deep(.slick-prev) {
  left: -28px;
}
:deep(.slick-next) {
  right: -28px;
}
:deep(.slick-prev:before),
:deep(.slick-next:before) {
  content: '';
  display: block;
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-size: 32px 32px;
  background-position: center;
  opacity: 1;
}
:deep(.slick-prev:before) {
  background-image: url('~assets/img/homepage/left.svg');
}
:deep(.slick-next:before) {
  background-image: url('~assets/img/homepage/right.svg');
}

@media (max-width: 640px) {
  .books-widget-logo {
    width: 96px;
    height: 23px;
  }
  .books-slide {
    padding: 0 6px;
  }
}
</style>
