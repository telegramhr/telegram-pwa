export default function ({ store }) {
  if (process.client && store.state.user.access !== 'BR92VTWM') {
    if (window.reloadLinkerElements) {
      setTimeout(() => {
        window.reloadLinkerElements()
      }, 1000)
    }
  }
}
