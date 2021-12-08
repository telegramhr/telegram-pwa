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
    <div
      v-if="showMore"
      class="full center subtle-btn-parent relative clickable"
      @click="page++"
    >
      <div class="subtle-btn animate">Vidi više</div>
    </div>
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
      page: 1,
      randomProducts: [],
    }
  },
  computed: {
    list() {
      const ps = [...this.randomProducts]
      let sorted
      switch (this.sortType) {
        case 'priceAsc':
          sorted = ps.sort((a, b) => {
            return a.price - b.price
          })
          break
        case 'priceDesc':
          sorted = ps.sort((a, b) => {
            return b.price - a.price
          })
          break
        case 'titleAsc':
          sorted = ps.sort((a, b) => {
            return a.title.localeCompare(b.title, 'hr')
          })
          break
        case 'titleDesc':
          sorted = ps.sort((a, b) => {
            return b.title.localeCompare(a.title, 'hr')
          })
          break
        default:
          sorted = ps
          break
      }
      if (sorted.length > 50) {
        // assume homepage
        sorted = sorted.slice(0, this.page * 30)
      }
      return sorted
    },
    showMore() {
      return this.products.length > this.list.length
    },
  },
  mounted() {
    this.randomProducts = [...this.products].sort(() => 0.5 - Math.random())
  },
}
</script>
