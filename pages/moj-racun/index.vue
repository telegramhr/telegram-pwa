<template>
  <div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="container full relative">
      <client-only>
        <piano-account></piano-account>
      </client-only>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'MojRacun',
}
</script>
