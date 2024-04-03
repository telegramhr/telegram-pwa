import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPodcast,
  faAngleRight,
  faTimes,
  faRss,
  faFire,
  faBook,
  faEnvelopeOpenText as fasEnvelopeOpenText,
  faCheck,
  faTimesCircle,
  faBriefcase,
  faLink,
} from '@fortawesome/pro-solid-svg-icons'
import {
  faUserLock,
  faCommentDots,
  faEnvelopeOpenText,
  faCreditCard,
  faUniversity,
  faMapMarkerQuestion,
  faHouse,
  faMessageQuote,
  faNewspaper,
  faLightbulb,
} from '@fortawesome/pro-duotone-svg-icons'

import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faTelegram,
  faGooglePay,
  faApplePay,
  faXTwitter,
  faCcVisa,
  faCcMastercard,
  faCcDinersClub,
  faGoogle,
  faWhatsapp,
  faViber,
  faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons'

import {
  faSearch,
  faBars,
  faUser,
  faAngleRight as farAngleRight,
  faAngleLeft,
  faCalendar,
  faBuildingColumns,
  faCreditCardFront,
  faStars,
  faGift,
} from '@fortawesome/pro-regular-svg-icons'

import {
  faMinusSquare,
  faPlusSquare,
  faArrowRight,
  faBell,
} from '@fortawesome/pro-light-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faCalendar,
  faPodcast,
  faAngleRight,
  faTimes,
  faRss,
  faFire,
  faBook,
  fasEnvelopeOpenText,
  faUserLock,
  faCommentDots,
  faEnvelopeOpenText,
  faCheck,
  faFacebookF,
  faInstagram,
  faTwitter,
  farAngleRight,
  faAngleLeft,
  faSearch,
  faBars,
  faUser,
  faTelegram,
  faMinusSquare,
  faPlusSquare,
  faTimesCircle,
  faGooglePay,
  faApplePay,
  faCreditCard,
  faUniversity,
  faMapMarkerQuestion,
  faBriefcase,
  faArrowRight,
  faHouse,
  faMessageQuote,
  faNewspaper,
  faLightbulb,
  faCalendar,
  faBuildingColumns,
  faCreditCardFront,
  faStars,
  faXTwitter,
  faCcVisa,
  faCcMastercard,
  faCcDinersClub,
  faGoogle,
  faGift,
  faLink,
  faWhatsapp,
  faViber,
  faTelegramPlane,
  faBell
)

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
