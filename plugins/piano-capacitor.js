import { registerPlugin } from '@capacitor/core'
export default ({ app, req, store }, inject) => {
  const Piano = registerPlugin('Piano')
  inject('piano', Piano)
}
