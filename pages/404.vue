<template>
  <div class="main-container flex">
    <div class="full flex tg-red">
      <client-only>
        <theader></theader>
      </client-only>
      <div class="full header-filler filler-404"></div>
    </div>
    <div
      class="block-title news-block-title header-block-title full mobile-side-pad desktop-only"
    >
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <app-link href="/" class="logo column-left-pad"
          ><img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo"
        /></app-link>
        <h2 class="full column-horizontal-pad desktop-only site-subtitle">
          Portal za društvena i kulturna pitanja
        </h2>
      </div>
    </div>
    <img src="@/assets/img/tg_tear.png" aria-hidden="true" class="tear-404" />
    <div class="container relative mobile-side-pad column-full-pad">
      <div class="full center flex">
        <h1 class="full title-404 center-text">404</h1>
        <h2 class="full subtitle-404 center-text">
          Nažalost ova stranica nije pronađena.
        </h2>
        <p class="full text-404 center-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
    </div>
    <div class="full flex">
      <div class="container flex relative native-block stretch mobile-side-pad">
        <div class="full column-horizontal-pad flex">
          <h2 class="full flex section-title">Možda će vas zanimati</h2>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <!--<standard></standard>-->
        </div>
      </div>
      <!--<div class="container flex relative mobile-side-pad">
      <div class="full center subtle-btn-parent relative clickable" onclick="requestArticles(this);">
        <div class="subtle-btn animate">Vidi više</div>
        <div class="subtle-btn-line"></div>
        <div class="full center cool-loader hide"><div class="loader-square"><div></div><div></div><div></div></div></div>
      </div>
    </div>-->
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: '404',
}
</script>
