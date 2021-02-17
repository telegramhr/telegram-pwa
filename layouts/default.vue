<template>
  <div>
    <div id="fb-root"></div>
    <Nuxt keep-alive :keep-alive-props="{ max: 20 }" />
  </div>
</template>

<script>
export default {
  middleware: 'piano',
}
</script>
