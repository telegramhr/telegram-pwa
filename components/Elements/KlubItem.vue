<template>
  <div class="fourth flex article klub-ponuda relative column-horizontal-pad">
    <div class="klub-ponuda-tile relative">
      <div class="klub-sticker center">
        <div class="full center-text klub-sticker-amount">
          {{ offer.sticker_amount }}
        </div>
        <div class="full center-text klub-sticker-text">
          {{ offer.sticker_text }}
        </div>
      </div>
      <div class="full center">
        <img
          :src="offer.image"
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
    <div class="noththree full overtitle">{{ offer.overtitle }}</div>
    <a @click.prevent="select">
      <div class="full offer-title">
        {{ offer.title }}
      </div></a
    >
    <a class="newbtn clickable" @click.prevent="select"> Iskoristite ponudu </a>
  </div>
</template>

<script>
export default {
  name: 'KlubItem',
  props: {
    offer: {
      type: Object,
      required: true,
    },
  },
  methods: {
    select() {
      this.$emit('select', this.offer)
    },
  },
}
</script>
