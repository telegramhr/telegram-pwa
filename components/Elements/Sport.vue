<template>
  <div>
    <div class="sport-block full flex">
      <div class="block-title full mobile-side-pad">
        <div class="container flex relative">
          <h1 class="full column-left-pad">Telesport</h1>
        </div>
      </div>
    </div>
    <div class="container flex relative block-3 standard-block sport-block">
      <section
        class="three-fourths flex-responsive flex mobile-side-pad elevate-over-section"
      >
        <div
          class="two-thirds flex-responsive flex column-horizontal-pad column-right-border"
        >
          <featured :post="{}"></featured>
          <div class="full flex split-articles">
            <standard></standard>
            <!-- 3x -->
          </div>
        </div>
        <div class="third flex-responsive column-horizontal-pad flex">
          <standard></standard>
          <!-- 3x -->
        </div>
      </section>
      <section
        class="fourth flex-responsive flex column-horizontal-pad column-right-border mobile-side-pad"
      >
        <h2 class="full flex desktop-only section-title">Upravo se čita</h2>
        <div class="full flex desktop-only">
          <mini></mini>
          <!-- 3x -->
        </div>
        <h2 class="full flex section-title">Komentari</h2>
        <div class="full mobile-side-pad komentari">
          <komentar></komentar>
          <!-- 2x -->
        </div>
      </section>
      <div
        class="full center subtle-btn-parent mobile-only relative clickable"
        onclick="requestArticles(this);"
      >
        <div class="subtle-btn animate">Vidi više</div>
        <div class="subtle-btn-line"></div>
        <div class="full center cool-loader hide">
          <div class="loader-square">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sport',
}
</script>
