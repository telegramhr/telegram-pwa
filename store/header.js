export const state = () => ({
  showSideMenu: false,
  showSearchMenu: false,
})

export const mutations = {
  updateMenu(state, menu) {
    if (menu === 'search') {
      state.showSearchMenu = !state.showSearchMenu
    }
    if (menu === 'side') {
      state.showSideMenu = !state.showSideMenu
    }
  },
}
