 /**Sticky Nav*/


let navbar = $(".navbar");

 $(window).scroll(function(){
   let oTop = $("Section-2").offset().top - window.innerHeight;
   if($(window).scrollTop() > oTop){
      navbar.addClass("sticky");
    }else(
      navbar.removeClass("sticky")
    )
 });


  $(document).on("scroll", function(){
     if($(document).scrollTop()) {
        $('nav').addClass("sticky");
      }else{
     $('nav').removeClass("sticky");   
       }
    });

    jQuery(document).ready(function(){
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });





    

    