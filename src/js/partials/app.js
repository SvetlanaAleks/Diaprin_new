const App = (function () {
   "use strict";
   return {
      sliderProblemInit: function () {
         $('.problem__slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            cssEase: "linear",
            prevArrow: '<div class="arr arr--left"><i class="fico fico-arrow"></i></div>',
            nextArrow: '<div class="arr arr--right"><i class="fico fico-arrow"></i></div>',
            autoplay: false
         });
      },
      init: function () {
         App.sliderProblemInit();
      }
   };
})();