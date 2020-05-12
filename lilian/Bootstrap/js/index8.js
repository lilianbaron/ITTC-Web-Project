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