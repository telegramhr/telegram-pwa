<template>
  <div
    v-if="id"
    class="container flex relative block-related cantha-related standard-block stretch"
    data-nosnippet
  >
    <div class="full flex mobile-side-pad">
      <div :id="`midasWidget__${id}`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Midas',
  props: {
    type: {
      type: String,
      required: true,
      default: 'intext',
    },
  },
  data() {
    return {
      ids: {
        vijesti: {
          intext: 11430,
          'text-only': 11426,
          'standard-16': 11427,
          ecomm: 11429,
          'standard-4': 11428,
        },
        'politika-kriminal': {
          intext: 11435,
          'text-only': 11431,
          'standard-16': 11432,
          ecomm: 11434,
          'standard-4': 11433,
        },
        'biznis-tech': {
          intext: 11445,
          'text-only': 11441,
          'standard-16': 11442,
          ecomm: 11444,
          'standard-4': 11443,
        },
        kultura: {
          intext: 11460,
          'text-only': 11456,
          'standard-16': 11457,
          ecomm: 11459,
          'standard-4': 11458,
        },
        zivot: {
          intext: 11455,
          'text-only': 11451,
          'standard-16': 11452,
          ecomm: 11454,
          'standard-4': 11453,
        },
        'velike-price': {
          intext: 11450,
          'text-only': 11446,
          'standard-16': 11447,
          ecomm: 11449,
          'standard-4': 11448,
        },
        komentari: {
          intext: 11440,
          'text-only': 11436,
          'standard-16': 11437,
          ecomm: 11439,
          'standard-4': 11438,
        },
        openspace: {
          intext: 11476,
          'text-only': 11472,
          'standard-16': 11473,
          ecomm: 11475,
          'standard-4': 11474,
        },
        'pitanje-zdravlja': {
          intext: 11481,
          'text-only': 11477,
          'standard-16': 11478,
          ecomm: 11480,
          'standard-4': 11479,
        },
        super1: {
          intext: 11471,
          'text-only': 11467,
          'standard-16': 11468,
          ecomm: 11470,
          'standard-4': 11469,
        },
      },
    }
  },
  computed: {
    id() {
      if (this.$store.getters['user/hasPremium']) {
        return 0
      }
      return this.ids[this.$route.params.category][this.type] ?? false
    },
  },
  mounted() {
    this.loadMidas()
  },
  methods: {
    loadMidas() {
      if (this.id && this.type === 'ecomm') {
        const script = document.createElement('script')
        const ids = Object.keys(this.ids[this.$route.params.category])
          .map((value) => {
            if (value !== 'intext') {
              return this.ids[this.$route.params.category][value]
            }
          })
          .join('-')
        script.src = `https://cdn2.midas-network.com/Scripts/midasWidget-11-468${ids}.js`
        script.async = true
        document
          .getElementById(`midasWidget__${this.id}`)
          .insertAdjacentElement('afterend', script)
        const script2 = document.createElement('script')
        const intext = this.ids[this.$route.params.category].intext
        script2.src = `https://cdn2.midas-network.com/Scripts/midasWidget-11-524-${intext}.js`
        script2.async = true
        document
          .getElementById(`midasWidget__${this.id}`)
          .insertAdjacentElement('afterend', script2)
      }
    },
  },
}
</script>
