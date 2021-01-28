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
        desktop: 6,
        mobile: 6,
      },
      desktop: [
        [300, 900],
        [200, 900],
        [341, 1051],
      ],
      mobile: false,
      routes: [
        'index',
        'category',
        'category-slug',
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
        desktop: 6,
        mobile: 6,
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
      routes: ['category-slug'],
      desktop: [
        [660, 350],
        [300, 250],
        [710, 350],
      ],
      mobile: [
        [300, 250],
        [320, 480],
        [336, 280],
        [320, 50],
        [300, 100],
        [300, 50],
      ],
    },
    telegram_desktop_intext_v2: {
      upc: {
        desktop: 13,
        mobile: 13,
      },
      routes: ['category-slug'],
      desktop: [
        [660, 350],
        [300, 250],
        [320, 480],
        [710, 350],
      ],
      mobile: [
        [300, 250],
        [320, 480],
        [336, 280],
        [320, 50],
        [300, 100],
        [300, 50],
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
  initAds({ state, commit, dispatch }, payload) {
    if (payload.options && payload.options.includes('all')) {
      return
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
        case 'fotogalerije-category-slug':
          targeting.wp_post_type = ['single']
          targeting.post_slug = [route.params.slug]
          targeting.post_category = [route.params.category]
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
      if (payload.options && payload.options.includes('nepromo')) {
        window.googletag.pubads().setCategoryExclusion('NePromo')
      }
      window.googletag.pubads().enableSingleRequest()
      window.googletag.pubads().collapseEmptyDivs()
      window.googletag.pubads().disableInitialLoad()
      window.googletag.enableServices()
      window.googletag
        .pubads()
        .addEventListener('slotRenderEnded', function (event) {
          const name = event.slot.getAdUnitPath().split('/').pop()
          const el = document.getElementById(event.slot.getSlotElementId())
          if (name.includes('sticky') && !event.isEmpty) {
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
          if (
            !window.googletag.reloadedSlots.includes(name) &&
            event.isEmpty &&
            event.slot.getAdUnitPath().includes('wallpaper')
          ) {
            const unit = state.units[name]
            el.innerHTML = ''
            el.removeAttribute('data-google-query-id')
            el.removeAttribute('style')
            const newName = name + '_new'
            el.setAttribute('id', newName)
            unit.desktop = [
              [200, 900],
              [300, 900],
            ]
            let upc = 12
            if (unit.upc) {
              upc = unit.upc.desktop
            }
            window.googletag
              .defineSlot(state.prefix + name, unit.desktop, newName)
              .addService(window.googletag.pubads())
              .setTargeting('upc', upc)
            window.googletag.display(newName)
            window.googletag.reloadedSlots.push(name)
          }
          if (event.size && event.size[0] === 200 && event.size[1] === 250) {
            el.style.right = '0px'
          }
        })
    })
    commit('setInit')

    dispatch('initSlots', route)
  },
  initSlots({ state, commit, dispatch }, route) {
    if (state.slots) {
      window.googletag.cmd.push(() => {
        window.googletag.destroySlots()
      })
    }
    window.googletag.cmd.push(() => {
      const mobile = window.innerWidth < 1024
      const prefix = state.prefix
      const sizes = mobile ? 'mobile' : 'desktop'
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
          ds.addService(window.googletag.pubads())
          ds.setTargeting('upc', upc)
        }
      }
      commit('setSlots')
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
