export const state = () => ({
  init: false,
  slots: false,
  prefix: '/1092744/telegram/',
  units: {
    telegram_desktop_billboard_v1: {
      upc: {
        desktop: 12,
        mobile: 12,
      },
      mobile: [
        [300, 50],
        [300, 100],
        [300, 250],
        [320, 50],
      ],
      desktop: [
        [970, 250],
        [970, 500],
        [1000, 250],
        [1000, 500],
        [1200, 250],
        [1200, 500],
      ],
      routes: [
        'index',
        'category',
        'category-slug',
        'nesto-slug',
        'fotogalerije-category',
        'fotogalerije-category-slug',
        'category',
        'search',
        'author-slug',
        'tema-slug',
      ],
    },
    telegram_desktop_billboard_v2: {
      upc: {
        desktop: 12,
        mobile: 12,
      },
      routes: ['index'],
      mobile: [
        [300, 50],
        [300, 100],
        [300, 250],
        [320, 50],
        [320, 480],
        [300, 600],
      ],
      desktop: [
        [970, 250],
        [970, 500],
        [1000, 250],
        [1000, 500],
        [1200, 250],
        [1200, 500],
      ],
    },
    telegram_desktop_billboard_v3: {
      upc: {
        desktop: 12,
        mobile: 12,
      },
      routes: ['index'],
      mobile: [
        [300, 50],
        [300, 100],
        [300, 250],
        [320, 50],
        [320, 480],
        [300, 600],
      ],
      desktop: [
        [970, 250],
        [970, 500],
        [1000, 250],
        [1000, 500],
        [1200, 250],
        [1200, 500],
      ],
    },
    telegram_desktop_billboard_v4: {
      upc: {
        desktop: 12,
        mobile: 12,
      },
      routes: ['index'],
      mobile: [
        [300, 50],
        [300, 100],
        [300, 250],
        [320, 50],
        [320, 480],
        [300, 600],
      ],
      desktop: [
        [970, 250],
        [970, 500],
        [1000, 250],
        [1000, 500],
        [1200, 250],
        [1200, 500],
      ],
    },
    telegram_desktop_wallpaper_left: {
      upc: {
        desktop: 36,
        mobile: 36,
      },
      desktop: [
        [300, 900],
        [200, 900],
        [340, 1050],
      ],
      mobile: false,
      routes: [
        'index',
        'category',
        'category-slug',
        'nesto-slug',
        'fotogalerije-category',
        'fotogalerije-category-slug',
        'category',
        'search',
        'author-slug',
        'tema-slug',
      ],
    },
    telegram_dekstop_wallpaper_right: {
      upc: {
        desktop: 36,
        mobile: 36,
      },
      desktop: [
        [301, 901],
        [201, 901],
        [341, 1051],
      ],
      mobile: false,
      routes: [
        'index',
        'category',
        'category-slug',
        'nesto-slug',
        'nesto-slug',
        'fotogalerije-category',
        'fotogalerije-category-slug',
        'category',
        'search',
        'author-slug',
        'tema-slug',
      ],
    },
    telegram_desktop_intext_v1: {
      upc: {
        desktop: 14,
        mobile: 14,
      },
      routes: ['category-slug', 'nesto-slug'],
      desktop: [
        [660, 350],
        [300, 250],
        [710, 350],
        [970, 250],
        [970, 500],
        [1200, 250],
      ],
      mobile: [
        [300, 250],
        [320, 480],
        [336, 280],
        [320, 50],
        [300, 100],
        [300, 50],
        [300, 600],
      ],
    },
    telegram_desktop_intext_v2: {
      upc: {
        desktop: 13,
        mobile: 13,
      },
      routes: ['category-slug', 'nesto-slug'],
      desktop: [
        [660, 350],
        [300, 250],
        [320, 480],
        [710, 350],
        [970, 500],
      ],
      mobile: [
        [300, 250],
        [320, 480],
        [336, 280],
        [320, 50],
        [300, 100],
        [300, 50],
        [300, 600],
      ],
    },
    telegram_sticky: {
      upc: {
        desktop: 36,
        mobile: 36,
      },
      routes: [
        'index',
        'category',
        'category-slug',
        'nesto-slug',
        'fotogalerije-category',
        'fotogalerije-category-slug',
        'category',
        'search',
        'author-slug',
        'tema-slug',
      ],
      mobile: [
        [300, 50],
        [300, 100],
        [320, 50],
        [320, 150],
        [200, 250],
      ],
      desktop: [
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
  initAds({ state, commit, dispatch, rootState }, payload) {
    if (payload.options && payload.options.includes('all')) {
      return
    }
    if (rootState.user.access) {
      return
    }
    if (state.slots) {
      window.googletag.cmd.push(() => {
        window.googletag.destroySlots()
      })
    }
    const route = payload.route || null
    // set targeting
    const targeting = {
      wp_post_type: [],
      post_slug: [],
      post_tag: [],
      post_category: [],
    }
    if (route) {
      switch (route.name) {
        case 'index':
          targeting.wp_post_type = ['home']
          break
        case 'category':
        case 'fotogalerije-category':
          targeting.wp_post_type = ['category']
          targeting.post_category = [route.params.category]
          break
        case 'tema':
          targeting.wp_post_type = ['archive']
          targeting.post_category = [route.params.slug]
          break
        case 'category-slug':
        case 'nesto-slug':
        case 'fotogalerije-category-slug':
          targeting.wp_post_type = ['single']
          targeting.post_slug = [route.params.slug]
          targeting.post_category = [route.params.category]
          if (payload.tags) {
            targeting.post_tag = payload.tags.map((tag) => tag.slug)
          }
          break
        case 'search':
          targeting.wp_post_type = ['search']
          break
      }
    }
    // init tags
    window.googletag = window.googletag || {}
    window.googletag.cmd = window.googletag.cmd || []
    window.googletag.reloadedSlots = window.googletag.reloadedSlots || []
    window.googletag.cmd.push(() => {
      // set targeting
      for (const i in targeting) {
        if (targeting[i].length) {
          window.googletag.pubads().setTargeting(i, targeting[i])
        }
      }
      if (!rootState.user.token) {
        window.googletag.pubads().setTargeting('nosubscription', '1')
      }
      if (payload.options && payload.options.includes('nepromo')) {
        window.googletag.pubads().setCategoryExclusion('NePromo')
      }
      window.googletag.pubads().enableSingleRequest()
      window.googletag.pubads().collapseEmptyDivs()
      window.googletag.pubads().disableInitialLoad()
      window.googletag.enableServices()
    })
    commit('setInit')

    dispatch('initSlots', route)
  },
  initSlots({ state, commit, dispatch }, route) {
    window.googletag.cmd.push(() => {
      const prefix = state.prefix
      const sizes = this.$mobile ? 'mobile' : 'desktop'
      let ds
      for (const i of Object.keys(state.units)) {
        if (i in state.units) {
          const unit = state.units[i]
          let upc = sizes === 'desktop' ? 14 : 12
          if (unit.upc) {
            upc = unit.upc[sizes]
          }
          if (!unit[sizes]) {
            continue
          }
          if (route && !unit.routes.includes(route.name)) {
            continue
          }
          ds = window.googletag.defineSlot(prefix + i, unit[sizes], i)
          if (typeof unit.sizeMapping !== 'undefined') {
            ds.defineSizeMapping(unit.sizeMapping)
          }
          if (ds) {
            ds.addService(window.googletag.pubads())
            ds.setTargeting('upc', upc)
          }
        }
      }
      commit('setSlots')
    })
    dispatch('displaySlots')
  },
  displaySlots({ dispatch }) {
    window.googletag = window.googletag || {}
    window.googletag.cmd = window.googletag.cmd || []

    const slots = document.getElementsByClassName('banner-slot')
    slots.forEach((slot) => {
      window.googletag.cmd.push(function () {
        window.googletag.display(slot.id)
      })
    })
    dispatch('refreshSlots')
  },
  refreshSlots() {
    window.googlefc = window.googlefc || {}
    window.googlefc.callbackQueue = window.googlefc.callbackQueue || []
    window.googletag = window.googletag || {}
    window.googletag.cmd = window.googletag.cmd || []
    /* global __tcfapi */
    window.googlefc.callbackQueue.push({
      CONSENT_DATA_READY: () =>
        __tcfapi('getTCData', 0, (data, success) => {
          if (data.purpose.consents[1]) {
            window.googletag.cmd.push(() => {
              window.googletag.pubads().refresh()
            })
          }
        }),
    })
  },
}
