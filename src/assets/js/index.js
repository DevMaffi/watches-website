// Modules

// modules
import Swiper, { Navigation } from 'swiper'

import { handleMenu, handleScroll } from '@modules'

// styles
import 'swiper/css'
import 'swiper/css/navigation'
import '@sass/styles'

// Setup handlers

handleMenu()
handleScroll()

// Swipers init

// testimonial swiper
new Swiper('.testimonial-swiper', {
  modules: [Navigation],
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// new swiper
new Swiper('.new-swiper', {
  modules: [Navigation],
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
})
