<template>
  <div class="product-gallery-item flex flex-responsive column-vertical-pad">
    <img :src="product.image" />
    <h2 class="full">
      {{ product.title }}
    </h2>
    <p class="full">
      {{ product.description }}
    </p>
    <p class="full bold">Cijena: {{ product.price }} kn</p>
    <div class="full flex product-gallery-buttons">
      <a :href="product.link" class="classic-btn">{{ product.shop }}</a>
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
  },
}
</script>
