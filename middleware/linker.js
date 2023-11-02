export default function ({ route, store, app }) {
  if (process.client && !store.state.user.access) {
    if (window.reloadLinkerElements) {
      window.reloadLinkerElements()
    }
  }
}
