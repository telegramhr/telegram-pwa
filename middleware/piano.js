/* eslint-disable */
export default function ({ route }) {
  if (process.client) {
    window.tp.experience.execute()
  }
}
