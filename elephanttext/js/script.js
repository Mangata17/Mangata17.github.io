// Custom js

$('.navbar-toggler').click(function () {
    $(this).toggleClass('opened');
})

$(document).ready(function () {

    $("#owl-demo").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        autoplay: true,
        autoplaySpeed: 2000,
        animateOut: 'fadeOut'
    });

});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $(".header-section").addClass("fixed");
    } else {
        $(".header-section").removeClass("fixed");
    }
});