<template>
  <div class="full article flex weather-widget stretch">
    <template v-if="weather.zagreb[0].type">
      <div class="full flex">
        <h3 class="overtitle">Vrijeme</h3>
      </div>
      <div class="half">
        <object
          type="image/svg+xml"
          :data="`/weather/${weather.zagreb[0].type}.svg`"
          :alt="weather.zagreb[0].alt"
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
          :data="
            '/weather/vlaga' +
            ($store.state.theme.theme === 'dark' ? '' : '_black') +
            '.svg'
          "
          alt="Vlaga"
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
          :data="
            '/weather/vjetar' +
            ($store.state.theme.theme === 'dark' ? '' : '_black') +
            '.svg'
          "
          alt="Vjetar"
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
          :alt="weather.zagreb[1].alt"
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
          :alt="weather.zagreb[2].alt"
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
      <div v-if="weather.zagreb.length > 3" class="half">
        <object
          type="image/svg+xml"
          :data="`/weather/${weather.zagreb[3].type}.svg`"
          :alt="weather.zagreb[3].alt"
        ></object>
      </div>
      <div v-if="weather.zagreb.length > 3" class="half flex center">
        <div class="full">
          <p class="full faded smaller-text">{{ weather.zagreb[3].day }}</p>
          <p class="full">
            <span class="big-number">{{ weather.zagreb[3].temp }}&#176;c</span>
          </p>
        </div>
      </div>
      <div class="full column-top-pad"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  computed: {
    weather() {
      return this.$store.state.weather
    },
  },
  mounted() {
    this.$store.dispatch('weather/pullWeather')
  },
}
</script>
