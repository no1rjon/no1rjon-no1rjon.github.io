"use strict"

let partnerSwiperAdaptivCountSlides = 1;
if($(window).width() >= 1024){
  partnerSwiperAdaptivCountSlides = 2.3;
} else {
  partnerSwiperAdaptivCountSlides = 1.3;
}

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

  slidesPerView: partnerSwiperAdaptivCountSlides,
  spaceBetween: 30,
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
