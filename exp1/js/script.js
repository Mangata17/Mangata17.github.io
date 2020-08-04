
// Matchheight
$(document).ready(function () {
    $('.main-block').matchHeight();
    $('.main-block img').matchHeight();
    $('.main-block h4').matchHeight();
    $('.redirect-section .redirect-block .content').matchHeight();
    $('.success-section .sucess-block').matchHeight();

    // aos animation

    AOS.init({
        duration: 1500,
    });

    // hambruger
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('opened');
    });

    //scrolltop
    $(".scrolltop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "1000");
        return false;
    });
});


// onscroll addclass jquery
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header-section").addClass("fixed-head");
        $(".scrolltop").addClass("scrolldown");
    } else {
        $(".header-section").removeClass("fixed-head");
        $(".scrolltop").removeClass("scrolldown");
    }
});


// load more function

$(document).ready(function () {
    $(".content").slice(0, 4).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 4).slideDown();
        if ($(".content:hidden").length == 0) {
            $("#loadMore").hide();
        }
    });

});

$(".navbar-nav .nav-link").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(id).offset().top - 100
    }, 1000);
});



// Custom js