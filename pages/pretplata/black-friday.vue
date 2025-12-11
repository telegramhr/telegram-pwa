<template>
  <div>
    <div
      class="block-title news-block-title header-block-title full mobile-side-pad"
    >
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <app-link to="/" class="logo column-left-pad" aria-label="Naslovnica"
          ><img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo"
        /></app-link>
        <h2 class="full column-horizontal-pad desktop-only site-subtitle">
          Nekad je nužno odabrati stranu
        </h2>
      </div>
    </div>
    <div class="full filler-404 tg-red"></div>
    <img
      src="@/assets/img/tg_tear.png"
      aria-hidden="true"
      class="tear-404 desktop-only"
    />
    <div class="content-wrapper relative mobile-side-pad column-full-pad">
      <div class="full center flex">
        <h1 class="full subtitle-404 center-text">Akcija više nije dostupna</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(() => {
      setTimeout(() => {
        window.location.href = 'https://telegram.hr'
      }, 3000)
    })
  },
}
</script>
<style scoped>
.block-title {
  padding-bottom: 0px;
}
.content-wrapper {
  padding-top: 140px;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
