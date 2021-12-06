<template>
  <div
    class="
      full
      product-gallery
      flex
      article-full-width
      column-top-border column-bottom-border
    "
  >
    <div class="full flex product-gallery-filters">
      <span>Poredaj proizvode:</span>
      <div
        :class="['classic-btn', sortType === 'priceAsc' ? 'selected-btn' : '']"
        @click="sortType = 'priceAsc'"
      >
        Najjeftiniji
      </div>
      <div
        :class="['classic-btn', sortType === 'priceDesc' ? 'selected-btn' : '']"
        @click="sortType = 'priceDesc'"
      >
        Najskuplji
      </div>
    </div>
    <product-guide-single
      v-for="product in list"
      :key="product.id"
      :product="product"
    ></product-guide-single>
  </div>
</template>

<script>
export default {
  name: 'ProductGuide',
  props: {
    products: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      sortType: '',
    }
  },
  computed: {
    list() {
      switch (this.sortType) {
        case 'priceAsc':
          return [...this.products].sort((a, b) => {
            return a.price - b.price
          })
        case 'priceDesc':
          return [...this.products].sort((a, b) => {
            return b.price - a.price
          })
        case 'titleAsc':
          return [...this.products].sort((a, b) => {
            return a.title.localeCompare(b.title, 'hr')
          })
        case 'titleDesc':
          return [...this.products].sort((a, b) => {
            return b.title.localeCompare(a.title, 'hr')
          })
        default:
          return this.products
      }
    },
  },
}
</script>
