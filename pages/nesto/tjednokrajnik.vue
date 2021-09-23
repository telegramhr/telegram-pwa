<template>
  <div class="main-container flex">
    <div class="full flex tg-red">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="full weekly-special relative">
      <div class="special-side-menu"></div>
      <div class="full flex relative cardscrolling">
        <div class="full flex cardscroll pretplata-page center">
          <div class="full flex relative pretplata-page-content">
            <div
              class="container relative flex mobile-side-pad stretch column-full-pad"
            >
              <h1 class="full center-text">
                Ovo je X priča naših autora koje ne smijete propustiti.
              </h1>
              <p class="full center-text pretplata-tagline">
                Lorem ipsum dolor sit amet sit lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        <div class="full flex cardscroll pretplata-page">
          <div class="full flex relative pretplata-page-content center">
            <div
              class="container relative flex mobile-side-pad stretch column-full-pad"
            >
              <h1 class="full center-text">
                Ovo je X priča naših autora koje ne smijete propustiti.
              </h1>
              <p class="full center-text pretplata-tagline">
                Lorem ipsum dolor sit amet sit lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full flex relative">
      <div class="relative flex relative"></div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Tjednokrajnik',
}
</script>

<style scoped>
.weekly-special {
  padding-left: 200px;
}
.special-side-menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: #333;
}
.cardscrolling {
  height: 100vh;
  background-color: #ffffff;
  width: 100%;
  overflow: auto;
  overflow-x: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.cardscrolling .cardscroll {
  height: 100vh;
  width: 100%;
}
</style>
