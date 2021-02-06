<template>
  <client-only>
    <div :id="id" class="banner-slot"></div>
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
  },
}
</script>
