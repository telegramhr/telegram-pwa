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
    window.googletag = window.googletag || {}
    window.googletag.cmd = window.googletag.cmd || []
    window.googletag.cmd.push(function () {
      window.googletag.display(this.id)
    })
  },
}
</script>
