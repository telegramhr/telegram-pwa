<template>
  <client-only>
    <div
      :id="id"
      class="banner-slot"
      :style="{
        minHeight:
          !disable &&
          id === 'telegram_desktop_billboard_v1' &&
          !$store.getters['user/hasPremium']
            ? '500px'
            : 0,
      }"
    ></div>
  </client-only>
</template>

<script>
export default {
  name: 'AdUnit',
  props: {
    id: {
      type: String,
      required: true,
      default: '',
    },
    disable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
