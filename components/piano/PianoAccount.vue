<template>
  <div id="my-account"></div>
</template>

<script>
export default {
  name: 'PianoAccount',
  mounted() {
    const tp = window.tp || []
    tp.push([
      'init',
      function () {
        window.tp.myaccount.show({
          displayMode: 'inline',
          containerSelector: '#my-account',
        })
      },
    ])
  },
}
</script>
