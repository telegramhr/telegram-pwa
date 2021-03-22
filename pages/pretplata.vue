<template>
  <div class="main-container flex red-header-page pretplata-page">
    <div class="full flex tg-red">
      <theader></theader>
    </div>
    <div
      class="block-title news-block-title header-block-title full mobile-side-pad desktop-only"
    >
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative center">
        <nuxt-link to="/" class="logo"
          ><img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo"
        /></nuxt-link>
      </div>
    </div>
    <div class="full flex pretplata-page-content">
      <div class="full flex relative">
        <div
          class="container relative flex mobile-side-pad stretch elevate-over-section column-full-pad"
        >
          <img
            src="@/assets/img/tg_pretplata_main_vizual.jpg"
            aria-hidden="true"
          />
          <h1 class="full center-text">
            Lorem ipsum dolor sit amet, consectetur elit
          </h1>
          <p class="full center-text">
            Vestibulum erat urna, gravida at turpis quis, luctus consequat
            mauris. Fusce consectetur nisi ut est ornare dapibus.
          </p>
        </div>
      </div>
      <div id="landing" class="full flex relative"></div>
      <div class="full flex relative">
        <div class="container relative flex">
          <div
            class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
          >
            <h3>Vrhunski autori</h3>
          </div>
          <div
            class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
          >
            <h3>Otkrivanje korupcije</h3>
          </div>
          <div
            class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
          >
            <h3>Istraživački specijali</h3>
          </div>
          <div
            class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
          >
            <h3>Inspirativne reportaže</h3>
          </div>
        </div>
      </div>
      <div class="full flex relative sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_autori.jpg"
              aria-hidden="true"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Vrhunski autori nagrađeni globalnim priznanjima
              </h2>
              <p>
                Vestibulum erat urna, gravida at turpis quis, luctus consequat
                mauris. Fusce consectetur nisi ut est ornare dapibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative sub-point alt-sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_korupcija.jpg"
              aria-hidden="true"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Otkrivanje korupcije na svim razinama društva
              </h2>
              <p>
                Vestibulum erat urna, gravida at turpis quis, luctus consequat
                mauris. Fusce consectetur nisi ut est ornare dapibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_istrazivacki.jpg"
              aria-hidden="true"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Istraživački specijali koji ne zapostavljaju ključne detalje
              </h2>
              <p>
                Vestibulum erat urna, gravida at turpis quis, luctus consequat
                mauris. Fusce consectetur nisi ut est ornare dapibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative sub-point alt-sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_inspiracija.jpg"
              aria-hidden="true"
              class="light-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_inspiracija_dark.jpg"
              aria-hidden="true"
              class="dark-mode-only"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Inspirativne reportaže iz raznih sfera života
              </h2>
              <p>
                Vestibulum erat urna, gravida at turpis quis, luctus consequat
                mauris. Fusce consectetur nisi ut est ornare dapibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Pretplata',
}
</script>

<style scoped>
.pretplata-page h1 {
  font-size: 72px;
  font-size: 3.6rem;
  margin-top: 24px;
  line-height: 1em;
  letter-spacing: -0.05em;
  margin-bottom: 16px;
}
.pretplata-page h2 {
  font-size: 60px;
  font-size: 3rem;
  line-height: 1em;
  letter-spacing: -0.05em;
  margin-bottom: 16px;
}
.pretplata-page p {
  font-size: 20px;
  font-size: 1rem;
}
.pretplata-keypoint {
  position: relative;
  padding-top: 24px;
  margin-bottom: 48px;
}
.pretplata-keypoint::before {
  content: ' ';
  background-color: #ae3737;
  width: 30%;
  height: 8px;
  position: absolute;
  top: 0;
  left: 35%;
}
.pretplata-keypoint h3 {
  font-size: 54px;
  font-size: 2.7rem;
  text-transform: uppercase;
  text-align: center;
  font-family: neuzeit-grotesk-extra-conden, sans-serif;
  font-weight: 900;
  font-style: normal;
  letter-spacing: -0.05em;
}
.pretplata-page-content {
  padding-top: 36px;
}
.pretplata-page .header-block-title {
  padding-bottom: 72px;
}
.pretplata-page .header-block-title img {
  height: 36px;
}
.dark-mode-only {
  display: none;
}
.dark-mode .light-mode-only {
  display: none;
}
.dark-mode .dark-mode-only {
  display: block;
}

@media screen and (min-width: 1025px) {
  .alt-sub-point .half {
    order: 1;
  }
  .alt-sub-point .half:first-child {
    order: 2;
  }
}
@media screen and (max-width: 1024px) {
  .pretplata-keypoint {
    width: 49.99%;
  }
  .pretplata-keypoint h3 {
    font-size: 30px;
  }
  .pretplata-page .flex-responsive img {
    margin-top: 16px;
  }
  .pretplata-page h1 {
    font-size: 48px;
    font-size: 2.4rem;
  }
  .pretplata-page h2 {
    font-size: 36px;
    font-size: 1.8rem;
  }
}
</style>
