<template>
  <div class="main-container flex specijal-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="full flex relative specijal-header">
      <img
        class="specijal-cover"
        src="https://www.telegram.hr/wp-content/uploads/2021/04/ris-zajednicka-2.jpg"
      />
      <div class="container column-horizontal-pad flex relative">
        <div class="full center">
          <h1 class="full relative center-text">Svijet boljih mogućnosti</h1>
        </div>
        <div class="fourth relative flex-responsive specijal-patron">
          <h3 class="full overtitle">Omogućuje</h3>
          <img
            src="http://localhost:3000/_nuxt/assets/img/super1_logo_white.svg"
          />
        </div>
      </div>
    </div>
    <div class="container flex relative standard-block block-1 stretch">
      <section
        class="three-fourths flex-responsive flex relative the-big-gs stretch elevate-over-section"
      >
        <div
          class="two-thirds flex-responsive flex column-horizontal-pad column-right-border mobile-side-pad"
        ></div>
        <div class="full flex mobile-only">
          <newsletter></newsletter>
        </div>
        <div
          class="third flex-responsive column-horizontal-pad flex mobile-side-pad"
        ></div>
      </section>
      <section
        class="fourth flex-responsive flex komentari mobile-side-pad column-horizontal-pad column-right-border"
      ></section>
    </div>
    <tfooter></tfooter>
  </div>
</template>
