"use strict"

// let partnerSwiperAdaptivCountSlides = 2.3;
// const mediaQuery = window.matchMedia('(min-width: 1024px)')
// if (mediaQuery.matches) {
//   partnerSwiperAdaptivCountSlides = 2.3;
// } else {
//   partnerSwiperAdaptivCountSlides = 2.1;
// };

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

new Swiper('.popQuerySwiper', {
  
  navigation: {
    nextEl: '.popQuerySwiper-button-next',
    prevEl: '.popQuerySwiper-button-prev',
  },

  slidesPerView: "auto",
  spaceBetween: 20,
});

new Swiper('.popQueryImageSwiper', {
  pagination: {
    el: '.popQueryImageSwiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  
  loop: true,
  nested: true,

});
