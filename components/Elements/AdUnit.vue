<template>
  <client-only>
    <div :id="id"></div>
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
  mounted() {
    /* global googletag */
    googletag.cmd.push(function () {
      googletag.display(this.id)
    })
  },
}
</script>
