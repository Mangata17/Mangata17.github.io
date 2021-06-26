// Custom js

/**Content Auto Margin Top **/
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

/******on scroll add class */

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.header-section').addClass('active');
    } else {
        $('.header-section').removeClass('active');
    }
});

/*****scroll to top */
$(".scrolltop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});


$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
});