import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'

import 'img-comparison-slider'

Vue.component('VueSlickCarousel', VueSlickCarousel)

Vue.config.ignoredElements = [/img-comparison-slider/]
