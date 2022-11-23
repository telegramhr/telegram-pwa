<template>
  <div class="product-gallery-item flex flex-responsive column-vertical-pad">
    <img :src="product.image" />
    <h2 class="full">
      {{ product.title }}
    </h2>
    <!-- eslint-disable-next-line -->
    <div class="full" v-html="product.description"></div>
    <p v-show="product.price" class="full bold">
      Cijena: {{ product.price | parseCurrency }}
    </p>
    <div v-show="product.link" class="full flex product-gallery-buttons">
      <a
        :href="product.link"
        class="classic-btn"
        target="_blank"
        rel="sponsored"
        @click="trackClick"
      >
        {{ product.shop | parseCat }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGuideSingle',
  props: {
    product: {
      type: Object,
      required: true,
      default() {
        return {
          image: '@/assets/img/grey_placeholder.png',
          title: '',
          description: '',
          price: '',
          link: '',
          shop: '',
        }
      },
    },
    category: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    trackClick() {
      this.$gtm.push({
        event: 'shop-guide',
        'guide-category': this.category,
        'guide-action': 'click',
        'guide-label': this.product.link,
        'guide-value': 1,
      })
    },
  },
}
</script>
