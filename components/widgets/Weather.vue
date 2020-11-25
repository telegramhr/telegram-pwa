<template>
  <div class="full article flex weather-widget stretch column-top-border">
    <div class="full flex">
      <h3 class="overtitle">Vrijeme</h3>
    </div>
    <div class="half">
      <object
        type="image/svg+xml"
        :data="`/weather/${weather.zagreb[0].type}.svg`"
      ></object>
    </div>
    <div class="half flex center">
      <div class="full">
        <p class="full faded smaller-text">Danas</p>
        <p class="full">
          <span class="big-number">{{ weather.zagreb[0].temp }}&#176;c</span>
        </p>
      </div>
    </div>
    <div class="fourth"></div>
    <div class="fourth">
      <object
        class="faded"
        type="image/svg+xml"
        data="/weather/vlaga_black.svg"
      ></object>
    </div>
    <div class="half flex center">
      <div class="full">
        <p class="full">
          <span class="big-number">{{ weather.zagreb[0].humidity }}</span
          >%
        </p>
      </div>
    </div>
    <div class="fourth"></div>
    <div class="fourth">
      <object
        class="faded"
        type="image/svg+xml"
        data="/weather/vjetar_black.svg"
      ></object>
    </div>
    <div class="half flex center">
      <div class="full">
        <p class="full">
          <span class="big-number">{{ weather.zagreb[0].wind }}</span
          >m/s
        </p>
      </div>
    </div>
    <div class="full column-top-pad"></div>
    <div class="half">
      <object
        type="image/svg+xml"
        :data="`/weather/${weather.zagreb[1].type}.svg`"
      ></object>
    </div>
    <div class="half flex center">
      <div class="full">
        <p class="full faded smaller-text">{{ weather.zagreb[1].day }}</p>
        <p class="full">
          <span class="big-number">{{ weather.zagreb[1].temp }}&#176;c</span>
        </p>
      </div>
    </div>
    <div class="half">
      <object
        type="image/svg+xml"
        :data="`/weather/${weather.zagreb[2].type}.svg`"
      ></object>
    </div>
    <div class="half flex center">
      <div class="full">
        <p class="full faded smaller-text">{{ weather.zagreb[2].day }}</p>
        <p class="full">
          <span class="big-number">{{ weather.zagreb[2].temp }}&#176;c</span>
        </p>
      </div>
    </div>
    <div class="half">
      <object
        type="image/svg+xml"
        :data="`/weather/${weather.zagreb[3].type}.svg`"
      ></object>
    </div>
    <div class="half flex center">
      <div class="full">
        <p class="full faded smaller-text">{{ weather.zagreb[3].day }}</p>
        <p class="full">
          <span class="big-number">{{ weather.zagreb[3].temp }}&#176;c</span>
        </p>
      </div>
    </div>
    <div class="full column-top-pad"></div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  async fetch() {
    await this.$store.dispatch('weather/pullWeather')
  },
  computed: {
    weather() {
      return this.$store.state.weather
    },
  },
}
</script>
