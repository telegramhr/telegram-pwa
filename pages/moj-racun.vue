<template>
  <div id="my-account"></div>
</template>

<script>
export default {
  name: 'MojRacun',
  mounted() {
    this.$nextTick(() => {
      const tp = window.tp || []
      tp.push([
        'init',
        function () {
          tp.myaccount.show({
            displayMode: 'inline',
            containerSelector: '#my-account',
          })
        },
      ])
    })
  },
}
</script>
