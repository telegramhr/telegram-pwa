<template>
  <app-link :to="'https://www.samsung.com/hr/'">
    <img
      class="ai-banner desktop-only"
      src="@/assets/img/ai-summary/samsung-desktop.png"
    />
    <img
      class="ai-banner mobile-only"
      src="@/assets/img/ai-summary/samsung-mobile.png"
    />
  </app-link>
</template>

<script>
export default {
  name: 'AiSummaryBanner',
}
</script>

<style scoped></style>
