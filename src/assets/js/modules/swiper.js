// Modules

import Swiper, { Navigation } from 'swiper'

// Init swiper

function initSwiper() {
  return new Swiper('.testimonial-swiper', {
    modules: [Navigation],
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

// Exports

export default initSwiper
