const App = (function() {
  "use strict";
  return {
    sliderProblemInit: function() {
      $(".problem__slider").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: "linear",
        prevArrow:
          '<div class="arr arr--left"><i class="fico fico-arrow"></i></div>',
        nextArrow:
          '<div class="arr arr--right"><i class="fico fico-arrow"></i></div>',

        autoplay: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      });
    },
    showTabs: function() {
      const tabs = $(".js-tabs");
      const comment = $(".comment");
      tabs.click(function(e) {
        const _this = $(this);
        tabs.removeClass("name--active");
        _this.addClass("name--active");
        const href = _this.data("target");
        const target = $(href);
        comment.removeClass("comment--active");
        target.addClass("comment--active");
      });
    },
    init: function() {
      App.sliderProblemInit();
      App.showTabs();
    }
  };
})();
