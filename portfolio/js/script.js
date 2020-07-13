// Custom js

$(".sidenav-inner .menu-item").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 1000);
});