<template>
  <div :id="id" class="banner-slot" style="min-height: 250px"></div>
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
