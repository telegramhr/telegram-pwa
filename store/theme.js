export const state = () => ({
  theme: 'regular',
  font: 'normal',
})

export const mutations = {
  setTheme(state, value) {
    state.theme = value
  },
  setFont(state, value) {
    state.font = value
  },
}

export const actions = {
  initTheme({ state }) {
    let pickel = document.querySelector('body')
    switch (state.theme) {
      case 'regular':
        pickel.classList.remove('contrast-mode')
        pickel.classList.remove('dark-mode')
        break
      case 'contrast':
        pickel.classList.add('contrast-mode')
        pickel.classList.remove('dark-mode')
        break
      case 'dark':
        pickel.classList.remove('contrast-mode')
        pickel.classList.add('dark-mode')
        break
    }
    pickel = document.querySelector('html')
    switch (state.font) {
      case 'small':
        pickel.classList.add('small-fontsize')
        pickel.classList.remove('large-fontsize')
        break
      case 'normal':
        pickel.classList.remove('small-fontsize')
        pickel.classList.remove('large-fontsize')
        break
      case 'large':
        pickel.classList.remove('small-fontsize')
        pickel.classList.add('large-fontsize')
        break
    }
  },
  setTheme({ commit, dispatch }, type) {
    commit('setTheme', type)
    dispatch('initTheme')
  },
  setFont({ commit, dispatch }, type) {
    commit('setFont', type)
    dispatch('initTheme')
  },
}
