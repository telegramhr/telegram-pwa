<template>
  <div class="full article flex weather-widget stretch column-top-border">
    <div class="full flex">
      <h3 class="overtitle">Vrijeme</h3>
    </div>
    <div class="half">
      <object
        type="image/svg+xml"
        data="@/assets/img/weather/kisa_1.svg"
      ></object>
    </div>
    <div class="half flex center">
      <div class="full">
        <p class="full faded smaller-text">Danas</p>
        <p class="full"><span class="big-number">15&#176;c</span></p>
      </div>
    </div>
    <div class="fourth"></div>
    <div class="fourth">
      <object
        class="faded"
        type="image/svg+xml"
        data="@/assets/img/weather/vlaga_black.svg"
      ></object>
    </div>
    <div class="half flex center">
      <div class="full">
        <p class="full"><span class="big-number">90</span>%</p>
      </div>
    </div>
    <div class="fourth"></div>
    <div class="fourth">
      <object
        class="faded"
        type="image/svg+xml"
        data="@/assets/img/weather/vjetar_black.svg"
      ></object>
    </div>
    <div class="half flex center">
      <div class="full">
        <p class="full"><span class="big-number">1</span>m/s</p>
      </div>
    </div>
    <div class="full column-top-pad"></div>
    <div class="half">
      <object
        type="image/svg+xml"
        data="/assets/img/weather/kisa_1.svg"
      ></object>
    </div>
    <div class="half flex center">
      <div class="full">
        <p class="full faded smaller-text">Pet</p>
        <p class="full"><span class="big-number">15&#176;c</span></p>
      </div>
    </div>
    <div class="half">
      <object
        type="image/svg+xml"
        data="@/assets/img/weather/kisa_1.svg"
      ></object>
    </div>
    <div class="half flex center">
      <div class="full">
        <p class="full faded smaller-text">Sub</p>
        <p class="full"><span class="big-number">14&#176;c</span></p>
      </div>
    </div>
    <div class="half">
      <object
        type="image/svg+xml"
        data="@/assets/img/weather/kisa_1.svg"
      ></object>
    </div>
    <div class="half flex center">
      <div class="full">
        <p class="full faded smaller-text">Ned</p>
        <p class="full"><span class="big-number">14&#176;c</span></p>
      </div>
    </div>
    <div class="full column-top-pad"></div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
}
</script>

<style scoped></style>
