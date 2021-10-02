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
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });


    $('.block-list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');;
    });

    $('.minus').click(function () {
        quantityField = $(this).next();
        if (quantityField.val() != 0) {
            quantityField.val(parseInt(quantityField.val(), 10) - 1);
        }
    });

    $('.plus').click(function () {
        quantityField = $(this).prev();
        quantityField.val(parseInt(quantityField.val(), 10) + 1);
    });
});