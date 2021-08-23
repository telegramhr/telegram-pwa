<template>
  <div class="full center">
    <div id="midasWidget__r165"></div>
  </div>
</template>

<script>
export default {
  name: 'Midas',
  mounted() {
    this.loadMidas()
  },
  methods: {
    loadMidas() {
      if (this.$store.state.user.active_sub) {
        return
      }
      const container = document.getElementById('midasWidget__r165')
      const widget = '1?portalRuleId=165'

      const scriptTag = document.createElement('script')
      scriptTag.src =
        'https://www.midas-network.com/ScriptsControllerRule/midas-phrygia-1.min.js'
      scriptTag.async = true
      scriptTag.id = 'midas-phrygia'
      scriptTag.setAttribute('data-widget', widget)
      container.parentNode.insertBefore(scriptTag, container)
    },
  },
}
</script>
