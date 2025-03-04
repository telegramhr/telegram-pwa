export const state = () => ({
  showSideMenu: false,
  showSearchMenu: false,
  publisher: {
    '@type': 'Organization',
    name: 'Telegram.hr',
    alternateName: 'Telegram',
    url: 'https://www.telegram.hr',
    logo: {
      '@type': 'ImageObject',
      url: `https://www.telegram.hr/icon.png`,
      width: 1024,
      height: 1024,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zagreb',
      postalCode: '10000',
      streetAddress: 'Ul. Franje Petračića 4',
      addressCountry: {
        '@type': 'Country',
        name: 'Croatia',
      },
    },
    parentOrganization: {
      name: 'Telegram media grupa',
      url: 'https://telegramgrupa.hr/',
      sameAs: ['https://hr.wikipedia.org/wiki/Telegram_media_grupa'],
    },
    sameAs: [
      'https://hr.wikipedia.org/wiki/Telegram_(portal)',
      'https://www.facebook.com/Telegram.hr',
      'https://www.facebook.com/super1.hr/',
      'https://www.facebook.com/Telesport.hr',
      'https://twitter.com/TelegramHR',
      'https://twitter.com/Telesport_hr',
      'https://www.instagram.com/telegram.hr/',
      'https://www.instagram.com/super1.hr',
      'https://www.youtube.com/@TelegramhrVideo',
      'https://www.youtube.com/@Super1',
      'https://www.linkedin.com/company/telegramhr',
      'https://bsky.app/profile/telegram.hr',
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
