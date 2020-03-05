

//! END Some Service ===

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  slidesPerView: 3,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: false,

  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 170,
    modifier: 1,
    slideShadows: false,
  },
});


//! END Some Service ===


// effect: 'coverflow',
// grabCursor: true,
// centeredSlides: true,
// slidesPerView: 'auto',
// coverflowEffect: {
//   rotate: 50,
//   stretch: 0,
//   depth: 100,
//   modifier: 1,
//   slideShadows: true,
// },