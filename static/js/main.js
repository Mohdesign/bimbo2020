
(function ($)
  { "use strict"
  
/* 1. Proloder */
    // $(window).on('load', function () {
    //   $('#preloader-active').delay(450).fadeOut('slow');
    //   $('body').delay(450).css({
    //     'overflow': 'visible'
    //   });
    // });


/* 2. slick Nav */
// mobile_menu
        

    // var menu = $('ul#navigation');
    // if(menu.length){
    //   setTimeout(() => $('ul#navigation').slicknav({
    //     prependTo: ".mobile_menu",
    //     closedSymbol: '+',
    //     openedSymbol:'-'
    //   }), 100);
    //   // menu.slicknav({
    //   //   prependTo: ".mobile_menu",
    //   //   closedSymbol: '+',
    //   //   openedSymbol:'-'
    //   // });
    // };




 
 

/* 7.  Custom Sticky Menu  */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-sticky").removeClass("sticky-bar");
      } else {
        $(".header-sticky").addClass("sticky-bar");
      }
    });

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
          $(".header-sticky").removeClass("sticky");
      } else {
          $(".header-sticky").addClass("sticky");
      }
    });



/* 8. sildeBar scroll */
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


/* 9. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();

 
})(jQuery);
