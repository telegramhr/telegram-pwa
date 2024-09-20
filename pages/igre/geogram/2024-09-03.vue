<template>
  <div class="main-container flex single-article tg-games">
    <div class="full flex">
      <client-only>
        <theader headline="Igre za naše pretplatnike"></theader>
      </client-only>
    </div>
    <div class="full flex relative pretplata-page">
      <div
        class="container relative flex mobile-side-pad stretch column-full-pad"
      >
        <h1 v-if="!$mobile" class="full center-text">Geogram | 03.09.2024.</h1>
      </div>
    </div>
    <div class="full flex relative">
      <div class="container flex relative mobile-side-pad">
        <div
          class="half column-full-pad mobile-vertical-pad flex flex-responsive relative"
        >
          <div id="geogram-mystery" class="full flex relative round-border">
            <div v-if="!hintUsed && !showSolution" class="mystery-cover"></div>
            <img
              src="@/assets/img/games/geogram/geogram_1.jpg"
              aria-hidden="true"
            />
            <div v-if="!hintUsed && !showSolution" class="mystery-cover"></div>
          </div>
          <div
            v-if="!hintUsed && !showSolution"
            id="geogram-hint"
            class="full center-text center newbtn huge-newbtn clickable column-top-margin"
            @click="geogramHint"
          >
            Otkrij više (-20% bodova)
          </div>
          <div
            v-if="hintUsed && !showSolution"
            id="geogram-used-hint"
            class="full center-text center newbtn huge-newbtn newbtn-empty darkened-bg column-top-margin"
          >
            Iskoristili ste hint (-20% bodova)
          </div>
        </div>
        <div
          class="half column-full-pad mobile-vertical-pad flex flex-responsive relative"
        >
          <div
            id="geogram-map"
            ref="map"
            class="map round-border"
            @click="moveLocator"
          >
            <div
              id="geogram-locator"
              :style="{
                top: `${locatorPosition.top}%`,
                left: `${locatorPosition.left}%`,
              }"
              class="locator"
            ></div>
            <div
              v-if="showSolution"
              id="geogram-solution"
              :style="{
                top: `${solutionPercentages.top}%`,
                left: `${solutionPercentages.left}%`,
              }"
            ></div>
            <img
              src="@/assets/img/games/geogram_mapa.svg"
              alt="Karta Republike Hrvatske"
            />
            <svg
              v-if="showSolution"
              class="line-drawing"
              viewBox="0 0 1097 1062"
            >
              <line
                :x1="`${solutionPercentages.left}%`"
                :y1="`${solutionPercentages.top}%`"
                :x2="`${locatorPosition.left}%`"
                :y2="`${locatorPosition.top}%`"
                stroke="black"
                stroke-width="3"
              />
            </svg>
          </div>
          <input
            v-if="!showSolution"
            id="geogram-top"
            v-model="locatorPosition.top"
            type="range"
            min="7"
            max="93"
            step="1"
            class="full column-bottom-margin column-top-margin mobile-only"
          />
          <input
            v-if="!showSolution"
            id="geogram-left"
            v-model="locatorPosition.left"
            type="range"
            min="7"
            max="93"
            step="1"
            class="full mobile-only"
          />

          <div
            v-if="!showSolution"
            class="full center-text center newbtn huge-newbtn clickable column-top-margin"
            @click="geogramSubmit"
          >
            Predaj rješenje
          </div>
        </div>
      </div>
    </div>
    <div class="full flex relative column-bottom-pad">
      <div class="container flex smaller-container relative">
        <div
          v-if="showSolution"
          class="full flex column-full-pad column-margin-top mobile-top-pad"
        >
          <div
            class="full darkened-bg round-border column-full-pad mobile-full-pad column-top-margin"
          >
            <div class="full center game-stars">
              <font-awesome-icon
                v-if="score >= 1"
                :icon="['fas', 'star']"
              ></font-awesome-icon>
              <font-awesome-icon
                v-if="score >= 50"
                :icon="['fas', 'star']"
              ></font-awesome-icon>
              <font-awesome-icon
                v-if="score >= 100"
                :icon="['fas', 'star']"
              ></font-awesome-icon>
              <font-awesome-icon
                v-if="score < 1"
                :icon="['far', 'star']"
              ></font-awesome-icon>
              <font-awesome-icon
                v-if="score < 50"
                :icon="['far', 'star']"
              ></font-awesome-icon>
              <font-awesome-icon
                v-if="score < 100"
                :icon="['far', 'star']"
              ></font-awesome-icon>
            </div>
            <p
              class="full barlow bigger-text center-text column-top-pad column-mini-bottom-pad column-horizontal-pad mobile-top-pad"
            >
              Vaš rezultat je <b>{{ score }}/100</b>
            </p>
            <p
              class="full barlow center-text column-horizontal-pad column-mini-bottom-pad"
            >
              {{ geogramLocation }}
            </p>
            <p class="full barlow center-text column-horizontal-pad">
              Autor: {{ geogramAuthor }}
            </p>
          </div>
        </div>
        <div class="full flex column-full-pad column-top-margin mobile-top-pad">
          <app-link
            to="/igre/geogram/"
            class="full center-text center newbtn huge-newbtn subtle-newbtn clickable"
          >
            Povratak na izbornik
          </app-link>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Geogram',
  data() {
    return {
      geogramImage: '@/assets/img/games/geogram/geogram_3.jpg',
      geogramLocation:
        'Novi Vinodolski, pogled s južne gradske plaže na otočić San Marino',
      geogramAuthor: 'Marijan Mikolić',
      mapcoords: `45°07'17.7"N, 14°48'07.3"E`,
      finalScore: 0,
      locatorPosition: {
        top: '50', // Initial position
        left: '50', // Initial position
      },
      mapBorders: {
        north: 46.8,
        south: 42.1,
        west: 13.1,
        east: 19.9,
      },
      userCoordinates: { lat: 0, lng: 0 },
      showSolution: false,
      hintUsed: 0,
    }
  },
  computed: {
    decimalDegrees() {
      const convertDmsToDd = (dms) => {
        const regex = /(\d+)°(\d+)'([\d.]+)"([NSEW])/
        const matches = dms.match(regex)

        const degrees = parseFloat(matches[1])
        const minutes = parseFloat(matches[2])
        const seconds = parseFloat(matches[3])
        const direction = matches[4]

        // Decimal degrees calculation
        let decimalDegrees = degrees + minutes / 60 + seconds / 3600

        // Adjust for direction
        if (direction === 'S' || direction === 'W') {
          decimalDegrees *= -1
        }

        return decimalDegrees
      }

      // Split the input into latitude and longitude parts
      const [latStr, lngStr] = this.mapcoords.split(' ')

      // Convert each part
      const lat = convertDmsToDd(latStr)
      const lng = convertDmsToDd(lngStr)

      // Save the result to the component's data
      return { lat, lng }
    },
    solutionPercentages() {
      const latRange = this.mapBorders.north - this.mapBorders.south
      const lngRange = this.mapBorders.east - this.mapBorders.west

      const topPercent =
        100 -
        ((this.decimalDegrees.lat - this.mapBorders.south) / latRange) * 100
      const leftPercent =
        ((this.decimalDegrees.lng - this.mapBorders.west) / lngRange) * 100

      return { top: topPercent, left: leftPercent }
    },
    latDistance() {
      return Math.abs(this.decimalDegrees.lat - this.userCoordinates.lat)
    },
    lngDistance() {
      return Math.abs(this.decimalDegrees.lng - this.userCoordinates.lng)
    },
    scoreModifier() {
      if (this.hintUsed) {
        return 80
      } else {
        return 100
      }
    },
    score() {
      if (this.latDistance < 0.075 && this.lngDistance < 0.075) {
        return this.scoreModifier
      } else {
        return Math.min(
          this.scoreModifier,
          Math.max(
            0,
            Math.round(
              this.scoreModifier -
                (this.latDistance - 0.075) * 75 -
                (this.lngDistance - 0.075) * 75
            )
          )
        )
      }
    },
  },
  methods: {
    moveLocator(event) {
      if (!this.showSolution) {
        const map = this.$refs.map
        const rect = map.getBoundingClientRect()

        // Calculate click position as percentage of the map's dimensions
        const clickX = event.clientX - rect.left
        const clickY = event.clientY - rect.top
        const topPercent = (clickY / rect.height) * 100
        const leftPercent = (clickX / rect.width) * 100

        // Update locator position
        this.locatorPosition.top = topPercent
        this.locatorPosition.left = leftPercent
      }
    },
    // Function to convert DMS coordinates to Decimal Degrees
    geogramSubmit() {
      // Define the N/S stretching factor

      // Convert locatorPosition values from percentage strings to floats
      const topPercent = parseFloat(this.locatorPosition.top) / 100 // Convert "20%" to 0.20
      const leftPercent = parseFloat(this.locatorPosition.left) / 100 // Convert "20%" to 0.20

      // Calculate the latitude:
      const latRange = this.mapBorders.north - this.mapBorders.south

      // To map 0% top to north, and 100% to south properly:
      const latitude = this.mapBorders.north - latRange * topPercent

      // Calculate the longitude (no adjustment needed):
      const lngRange = this.mapBorders.east - this.mapBorders.west
      const longitude = this.mapBorders.west + lngRange * leftPercent

      // Ensure the latitude stays within bounds after adjustment
      const boundedLatitude = Math.max(
        this.mapBorders.south,
        Math.min(this.mapBorders.north, latitude)
      )

      // Update the userCoordinates data property
      this.userCoordinates = {
        lat: boundedLatitude,
        lng: longitude,
      }
      this.showSolution = true
    },
    geogramHint() {
      this.hintUsed = 1
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/games/geogram/',
      },
    ]
    return {
      title: 'Geogram',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Odredite gdje u lijepoj našoj se nalazi fotografija naše redakcije ili pretplatnika.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Odredite gdje u lijepoj našoj se nalazi fotografija naše redakcije ili pretplatnika.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Geogram',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/img/tg_naslovna_2023_12_06_book.jpg',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/games/geogram/',
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '1383786971938581',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@TelegramHR',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow',
        },
      ],
      link,
    }
  },
}
</script>
