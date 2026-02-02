<template>
  <div
    v-if="id"
    class="container flex relative block-related cantha-related standard-block stretch have-background"
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
          intextMain: 524,
          intext: '11430',
          'text-only': 11426,
          'standard-16': 11427,
          ecomm: 11429,
          main: 468,
        },
        'politika-kriminal': {
          intextMain: 524,
          intext: 11435,
          'text-only': 11431,
          'standard-16': 11432,
          ecomm: 11434,
          main: 468,
        },
        'biznis-tech': {
          intextMain: 524,
          intext: 11445,
          'text-only': 11441,
          'standard-16': 11442,
          ecomm: 11444,
          main: 468,
        },
        kultura: {
          intextMain: 524,
          intext: 11461,
          'text-only': 11456,
          'standard-16': 11457,
          ecomm: 11460,
          main: 468,
        },
        zivot: {
          intextMain: 524,
          intext: 11455,
          'text-only': 11451,
          'standard-16': 11452,
          ecomm: 11454,
          main: 468,
        },
        'velike-price': {
          intextMain: 524,
          intext: 11450,
          'text-only': 11446,
          'standard-16': 11447,
          ecomm: 11449,
          main: 468,
        },
        komentari: {
          intextMain: 524,
          intext: 11440,
          'text-only': 11436,
          'standard-16': 11437,
          ecomm: 11439,
          main: 468,
        },
        openspace: {
          intextMain: 524,
          intext: 11476,
          'text-only': 11472,
          'standard-16': 11473,
          ecomm: 11475,
          main: 468,
        },
        'pitanje-zdravlja': {
          intextMain: 524,
          intext: 11481,
          'text-only': 11477,
          'standard-16': 11478,
          ecomm: 11480,
          main: 468,
        },
        super1: {
          intextMain: 786,
          intext: 11471,
          'text-only': 11467,
          'standard-16': 11468,
          ecomm: 11470,
          main: 469,
        },
        telesport: {
          intextMain: 787,
          intext: 11466,
          'text-only': 11462,
          'standard-16': 11463,
          ecomm: 11465,
          main: 1863,
        },
      },
    }
  },
  computed: {
    id() {
      if (this.$store.getters['user/hasPremium'] && this.type !== 'ecomm') {
        return 0
      }
      if (
        this.$route.fullPath.includes('preview') ||
        this.$route.fullPath.includes('podcast')
      ) {
        return false
      }
      if (this.type === 'ecomm2') {
        return 11679
      }
      if (this.$route.fullPath.includes('super1')) {
        return this.ids.super1[this.type] ?? false
      }
      if (this.$route.fullPath.includes('telesport')) {
        return this.ids.telesport[this.type] ?? false
      }
      if (this.$route.fullPath.includes('pitanje-zdravlja')) {
        return this.ids['pitanje-zdravlja'][this.type] ?? false
      }
      if (this.$route.fullPath.includes('openspace')) {
        return this.ids.openspace[this.type] ?? false
      }
      return this.ids[this.$route.params.category][this.type] ?? false
    },
  },
  mounted() {
    if (this.$store.getters['user/hasPremium']) {
      return false
    }
    // Only ecomm type loads scripts - wait for other placeholders first
    if (this.type === 'ecomm') {
      this.waitForPlaceholdersAndLoad()
    } else {
      this.loadMidas()
      this.loadIntext()
    }
  },
  methods: {
    waitForPlaceholdersAndLoad(attempts = 0) {
      // Check for any other midasWidget placeholder (not our own ecomm one)
      const otherPlaceholder = document.querySelector(
        `[id^="midasWidget__"]:not([id="midasWidget__${this.id}"])`
      )
      // Or server-injected intext_midas
      const intextMidas = document.getElementById('intext_midas')

      if (otherPlaceholder || intextMidas || attempts >= 40) {
        this.loadMidas()
        this.loadIntext()
      } else {
        setTimeout(() => this.waitForPlaceholdersAndLoad(attempts + 1), 50)
      }
    },
    loadIntext() {
      if (this.id && this.type === 'intext') {
        let category = this.$route.params.category
        if (this.$route.fullPath.includes('super1')) {
          return false
          // category = 'super1'
        }
        if (this.$route.fullPath.includes('pitanje-zdravlja')) {
          category = 'pitanje-zdravlja'
        }
        if (this.$route.fullPath.includes('openspace')) {
          category = 'openspace'
        }
        if (this.$route.fullPath.includes('telesport')) {
          category = 'telesport'
        }
        const script2 = document.createElement('script')
        const intext = this.ids[category]?.intext
        const intextMain = this.ids[category]?.intextMain
        if (!intext || !intextMain) {
          return false
        }
        script2.src = `https://cdn2.midas-network.com/Scripts/midasWidget-11-${intextMain}-${intext}.js`
        script2.async = true
        document
          .getElementById(`midasWidget__${this.id}`)
          .insertAdjacentElement('afterend', script2)
      }
    },
    loadMidas() {
      if (this.type === 'ecomm') {
        let category = this.$route.params.category
        if (this.$route.fullPath.includes('super1')) {
          category = 'super1'
        }
        if (this.$route.fullPath.includes('pitanje-zdravlja')) {
          category = 'pitanje-zdravlja'
        }
        if (this.$route.fullPath.includes('openspace')) {
          category = 'openspace'
        }
        if (this.$route.fullPath.includes('telesport')) {
          category = 'telesport'
        }
        const script = document.createElement('script')
        const main = this.ids[category]?.main ?? ''
        /* if (this.$store.state.user.access.length) {
          let ids = ''
          if (this.$route.fullPath.includes('telesport')) {
            ids += `11902`
          } else if (this.$route.fullPath.includes('super1')) {
            ids += '11933'
          } else {
            ids += `11899`
          }
          const script = document.createElement('script')
          script.src = `https://cdn2.midas-network.com/Scripts/midasWidget-11-${main}-${ids}.js`
          script.async = true
          document
            .getElementById(`midasWidget__${this.id}`)
            .insertAdjacentElement('afterend', script)
          return false  // don't load midas if user has premium
        } */

        if (!this.id) {
          return false // don't load midas if id is not set
        }
        let ids = Object.keys(this.ids[category])
          .filter((value) => {
            return (
              value !== 'intext' && value !== 'main' && value !== 'intextMain'
            )
          })
          .map((value) => this.ids[category][value])
          .join('-')
        if (this.$route.fullPath.includes('telesport')) {
          ids += `-11902`
        } else if (this.$route.fullPath.includes('super1')) {
          ids += '-11933'
        } else {
          ids += `-11899`
        }
        script.src = `https://cdn2.midas-network.com/Scripts/midasWidget-11-${main}-${ids}.js`
        script.async = true
        document
          .getElementById(`midasWidget__${this.id}`)
          .insertAdjacentElement('afterend', script)
        const script2 = document.createElement('script')
        const intext = this.ids[category]?.intext
        const intextMain = this.ids[category]?.intextMain
        if (!intext || !intextMain) {
          return false
        }
        script2.src = `https://cdn2.midas-network.com/Scripts/midasWidget-11-${intextMain}-${intext}.js`
        script2.async = true
        document
          .getElementById(`midasWidget__${this.id}`)
          .insertAdjacentElement('afterend', script2)
      }
      if (this.id && this.type === 'ecomm2') {
        const script2 = document.createElement('script')
        script2.src = `https://cdn2.midas-network.com/Scripts/midasWidget-11-468-11679.js`
        script2.async = true
        document
          .getElementById(`midasWidget__${this.id}`)
          .insertAdjacentElement('afterend', script2)
      }
    },
  },
}
</script>
