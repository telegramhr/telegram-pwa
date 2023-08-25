export const state = () => ({
  showSideMenu: false,
  showSearchMenu: false,
  publisher: {
    '@type': 'Organization',
    name: 'Telegram.hr',
    url: 'https://www.telegram.hr',
    logo: {
      '@type': 'ImageObject',
      url: `https://www.telegram.hr/icon.png`,
      width: 512,
      height: 512,
    },
    sameAs: [
      'https://www.facebook.com/Telegram.hr',
      'https://twitter.com/TelegramHR',
      'https://www.instagram.com/telegram.hr/',
      'https://www.youtube.com/@TelegramhrVideo',
      'https://www.linkedin.com/company/telegramhr',
      'https://hr.wikipedia.org/wiki/Telegram_(portal)',
    ],
  },
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
