// Custom js

$('.image-slider-wrap').slick({
    dots: true,
    rows: 0,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    responsive: [{
        breakpoint: 992,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
    },
    {
        breakpoint: 767,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }
    ]
});

$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});


$(".scrolltop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.header-section').addClass('active');
    } else {
        $('.header-section').removeClass('active');
    }
});

$(document).ready(function () {
    body_sizer();
    $(window).resize(body_sizer);
});


function body_sizer() {
    if ($(".header-section").length) {
        var headerheight = $('.header-section').height();
        $("content").css('padding-top', headerheight);
    }

}