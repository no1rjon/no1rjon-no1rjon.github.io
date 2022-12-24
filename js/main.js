"use strict"

new Swiper('.gallerySwiper', {
    
  navigation: {
    nextEl: '.gallerySwiper-button-next',
    prevEl: '.gallerySwiper-button-prev',
  },
    
  pagination: {
    el: '.gallerySwiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  loop: true,

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,

});

new Swiper('.partnerSwiper', {
  
  navigation: {
    nextEl: '.partnerSwiper-button-next',
    prevEl: '.partnerSwiper-button-prev',
  },

  loop: true,

  slidesPerView: 4,
});

new Swiper('.partnerSwiperMobile', {
  
  navigation: {
    nextEl: '.partnerSwiperMobile-button-next',
    prevEl: '.partnerSwiperMobile-button-prev',
  },

  loop: true,
});