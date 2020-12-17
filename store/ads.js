export const state = () => ({
  init: false,
  slots: false,
  prefix: '/1092744/telegram/',
  units: {
    telegram_desktop_billboard_v1: {
      mobile_sizes: [
        [300, 50],
        [300, 100],
        [300, 250],
        [320, 50],
      ],
      desktop_sizes: [
        [970, 250],
        [970, 500],
        [1000, 250],
        [1000, 500],
        [1200, 250],
        [1200, 500],
      ],
    },
    telegram_desktop_billboard_v2: {
      mobile_sizes: [
        [300, 50],
        [300, 100],
        [300, 250],
        [320, 50],
        [320, 480],
        [300, 600],
      ],
      desktop_sizes: [
        [970, 250],
        [970, 500],
        [1000, 250],
        [1000, 500],
        [1200, 250],
        [1200, 500],
      ],
    },
    telegram_desktop_wallpaper_left: {
      desktop_sizes: [
        [300, 900],
        [200, 900],
        [341, 1051],
      ],
      mobile_sizes: false,
    },
    telegram_dekstop_wallpaper_right: {
      desktop_sizes: [
        [301, 901],
        [201, 901],
        [341, 1051],
      ],
      mobile_sizes: false,
    },
    telegram_desktop_intext_v1: {
      desktop_sizes: [
        [660, 350],
        [300, 250],
        [320, 480],
        [300, 600],
        [710, 350],
        [970, 250],
        [1200, 250],
      ],
      mobile_sizes: [
        [300, 250],
        [320, 480],
        [300, 600],
        [336, 280],
        [320, 50],
        [300, 100],
        [300, 50],
      ],
    },
    telegram_desktop_intext_v2: {
      desktop_sizes: [
        [660, 350],
        [300, 250],
        [320, 480],
        [300, 600],
        [710, 350],
        [970, 250],
        [1200, 250],
      ],
      mobile_sizes: [
        [300, 250],
        [320, 480],
        [300, 600],
        [336, 280],
        [320, 50],
        [300, 100],
        [300, 50],
      ],
    },
    telegram_desktop_intext_v3: {
      desktop_sizes: [
        [660, 350],
        [300, 250],
        [320, 480],
        [300, 600],
        [710, 350],
        [970, 250],
        [1200, 250],
      ],
      mobile_sizes: [
        [300, 250],
        [320, 480],
        [300, 600],
        [336, 280],
        [320, 50],
        [300, 100],
        [300, 50],
      ],
    },
    telegram_desktop_intext_v4: {
      desktop_sizes: [
        [660, 350],
        [300, 250],
        [320, 480],
        [300, 600],
        [710, 350],
        [970, 250],
        [1200, 250],
      ],
      mobile_sizes: [
        [300, 250],
        [320, 480],
        [300, 600],
        [336, 280],
        [320, 50],
        [300, 100],
        [300, 50],
      ],
    },
    telegram_desktop_intext_v5: {
      desktop_sizes: [
        [660, 350],
        [300, 250],
        [320, 480],
        [300, 600],
        [710, 350],
        [970, 250],
        [1200, 250],
      ],
      mobile_sizes: [
        [300, 250],
        [320, 480],
        [300, 600],
        [336, 280],
        [320, 50],
        [300, 100],
        [300, 50],
      ],
    },
    telegram_desktop_intext_v6: {
      desktop_sizes: [
        [660, 350],
        [300, 250],
        [320, 480],
        [300, 600],
        [710, 350],
        [970, 250],
        [1200, 250],
      ],
      mobile_sizes: [
        [300, 250],
        [320, 480],
        [300, 600],
        [336, 280],
        [320, 50],
        [300, 100],
        [300, 50],
      ],
    },
    telegram_desktop_intext_v7: {
      desktop_sizes: [
        [660, 350],
        [300, 250],
        [320, 480],
        [300, 600],
        [710, 350],
        [970, 250],
        [1200, 250],
      ],
      mobile_sizes: [
        [300, 250],
        [320, 480],
        [300, 600],
        [336, 280],
        [320, 50],
        [300, 100],
        [300, 50],
      ],
    },
    telegram_sticky: {
      mobile_sizes: [
        [300, 50],
        [300, 100],
        [320, 50],
        [320, 150],
      ],
      desktop_sizes: [
        [728, 90],
        [970, 90],
        [970, 150],
        [984, 150],
        [1200, 150],
      ],
    },
  },
})

export const mutations = {
  setInit(state) {
    state.init = true
  },
  setSlots(state) {
    state.slots = true
  },
}

export const actions = {
  initAds({ state, commit, dispatch }) {
    if (!state.init) {
      window.googletag = window.googletag || {}
      window.googletag.cmd = window.googletag.cmd || []

      window.googletag.cmd.push(() => {
        // set targeting
        window.googletag
          .pubads()
          .setTargeting('wp_post_type', ['home', 'single', 'archive'])

        window.googletag.pubads().enableSingleRequest()
        window.googletag.pubads().collapseEmptyDivs()
        window.googletag.pubads().disableInitialLoad()
        window.googletag.enableServices()
        window.googletag
          .pubads()
          .addEventListener('slotRenderEnded', function (event) {
            const name = event.slot.getAdUnitPath().split('/').pop()
            if (name.includes('sticky') && !event.isEmpty) {
              const el = document.getElementById(event.slot.getSlotElementId())
              const cross = document.createElement('a')
              cross.innerHTML = '<i class="fa fa-times-circle fa-3x"></i>'
              cross.style.cssText =
                'position:fixed; left: 50%; margin-left: ' +
                (event.size[0] / 2 - 25) +
                'px; bottom: ' +
                (event.size[1] - 25) +
                'px; z-index:999;'
              cross.addEventListener('click', function (e) {
                e.preventDefault()
                el.style.display = 'none'
              })
              el.appendChild(cross)
            }
          })
      })
      commit('setInit')
    }
    dispatch('initSlots')
  },
  initSlots({ state, commit, dispatch }) {
    if (state.slots) {
      window.googletag.cmd.push(() => {
        window.googletag.destroySlots()
      })
    }
    window.googletag.cmd.push(() => {
      const mobile = window.innerWidth < 1024
      const prefix = state.prefix
      const sizes = mobile ? 'mobile_sizes' : 'desktop_sizes'
      let ds
      for (const i of Object.keys(state.units)) {
        if (i in state.units) {
          const unit = state.units[i]
          if (!unit[sizes]) {
            continue
          }
          ds = window.googletag.defineSlot(prefix + i, unit[sizes], i)
          if (typeof unit.sizeMapping !== 'undefined') {
            ds.defineSizeMapping(unit.sizeMapping)
          }
          ds.addService(window.googletag.pubads())
          ds.setTargeting('upc', unit.upc ? unit.upc : 10)
        }
      }
      commit('setSlots')
    })
    dispatch('refreshSlots')
  },
  refreshSlots() {
    window.googletag = window.googletag || {}
    window.googletag.cmd = window.googletag.cmd || []
    window.googletag.cmd.push(() => {
      window.googletag.pubads().refresh()
    })
  },
}
