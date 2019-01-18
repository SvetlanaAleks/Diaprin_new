//=require ../../node_modules/object-fit-images/dist/ofi.min.js
//=require ../../node_modules/slick-carousel/slick/slick.min.js
//=require partials/app.js
$(document).ready(function () {
    App.init();

    $('a').click(function() {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
        return false;
    });

    $('.review__content').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        prevArrow: '<div class="arr arr--left"><i class="fico fico-arrow"></i></div>',
        nextArrow: '<div class="arr arr--right"><i class="fico fico-arrow"></i></div>',
        autoplay: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
            }
        ]
    });

    $('.review__open').click(function (e) {
        this.parentNode.classList.toggle('active');
    });

    $('.review__content').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.review__item-wrap').removeClass('active');
    });

    $('.comment__text').mCustomScrollbar({
        axis: 'y'
    });
});


