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
    <product-guide-single
      v-for="product in products"
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
  computed: {},
}
</script>
