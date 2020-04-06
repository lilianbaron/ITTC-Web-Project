$(document).ready(function (){
  $("#Home").hover(function () {
    $("#dropdown-home").toggle()
  });
});

$(document).ready(function(){
    $("#Pages").hover(function () {
        $("#dropdown-pages").toggle()
    });
});

$(document).ready(function(){
    $("#Blog").hover(function (){
        $("#dropdown-blog").toggle()
    });
});

 $(document).ready(function(){
       $(".toggle-btn").click(function () {
      $(".side-menu").toggle()   
      });
  });
  $(document).ready(function() {
    $(".btn-close").click(function(){
      $("#side-menu").toggle();
    });
  });

  $(document).on("scroll", function(){
    if($(document).scrollTop()) {
      $('nav').addClass('black');
    }

    else{
      $('nav').removeClass('black');
    }
  });
  $('.num').counterUp({
    delay: 10,
    time: 1000
});

 

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

  // $(".heading-title").fadeInLeft(3000);

  







