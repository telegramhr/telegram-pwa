<template>
  <div :id="id" class="banner-slot"></div>
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
  computed: {
    style() {
      if (this.id.includes('sticky')) {
        return ''
      }
      return 'min-height: 250px;'
    },
  },
}
</script>
