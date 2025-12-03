<script>
export default {
  name: 'Hexagram',
  data() {
    return {
      width: '720px',
      height: '1080px',
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadUnity()
      if (this.$mobile) {
        this.width = '100%'
        this.height = '100%'
      }
    })
  },
  methods: {
    loadUnity() {
      const date = this.$route.params.date
      this.$axios.$get(`/api/games/hexagram/${date}`).then((data) => {
        this.initUnity(data)
      })
    },
    initUnity(levelInfo) {
      /* global createUnityInstance */
      createUnityInstance(document.querySelector('#unity-canvas'), {
        dataUrl: '/games/hexagram/Build/Hexagram_WebGL_Brotli.data.unityweb',
        frameworkUrl:
          '/games/hexagram/Build/Hexagram_WebGL_Brotli.framework.js.unityweb',
        codeUrl: '/games/hexagram/Build/Hexagram_WebGL_Brotli.wasm.unityweb',
        streamingAssetsUrl: '/games/hexagram/StreamingAssets',
        levelInfo, // LevelInfo.json goes here
        companyName: 'Telegram.hr',
        productName: 'Hexagram',
        productVersion: '1.0',
        // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
        // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
      }).then((instance) => {
        const data = JSON.stringify(instance.Module.levelInfo)
        instance.SendMessage('LevelDataReceiver', 'SetData', data)
      })

      // Event from Unity on level completion, passing a png showing the final board state, for social media sharing.
      window.addEventListener(
        'message',
        function (event) {
          if (event.data.type === 'solution-image') {
            const imageString =
              'data:image/png;base64,' + event.data.imageBase64String
            console.log('Solution image received:' + imageString)
            // Replace with real functionality
          }
        },
        false
      )

      // Event from Unity on level completion, passing two ints that make up the score: number of solved tiles / total tiles
      window.addEventListener(
        'message',
        function (event) {
          if (event.data.type === 'solution-ints') {
            const intA = event.data.solvedTiles
            const intB = event.data.totalTiles
            console.log(
              'Solution ints received:' +
                intA.toString() +
                ' ' +
                intB.toString()
            )
            // Replace with real functionality
          }
        },
        false
      )
    },
  },
  head() {
    return {
      script: [
        {
          src: '/games/hexagram/Build/Hexagram_WebGL_Brotli.loader.js',
        },
      ],
    }
  },
}
</script>

<template>
  <canvas
    id="unity-canvas"
    tabindex="-1"
    :style="{ background: '#fcf1e7', width: width, height: height }"
  ></canvas>
</template>
