<script>
/*
 * Renders its content only while the current article has no verified gift.
 * Wraps the paywall and every subscription promo, so a gift link the backend
 * verified (see verifyGift() in pages/_category/_slug.vue) removes them all;
 * a pending, invalid or missing token leaves them as they are. Unmounting
 * also drops their REMP listeners, so a campaign that fires later finds
 * nothing to show.
 */
export default {
  name: 'HideOnGift',
  computed: {
    gifted() {
      return (
        this.$store.getters['gifts/verificationStatus'](this.$route) === 'valid'
      )
    },
  },
}
</script>

<template>
  <div v-if="!gifted">
    <slot></slot>
  </div>
</template>
