$('.product-slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  responsive: [{
    breakpoint: 993,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 500,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

$(function () {
  $('.prd-wrap .prd-image').matchHeight();
});

$(document).ready(function () {
  $('.inner-slider').slick({
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    lazyLoad: 'ondemand',
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }]
  })

  $('.inner-slider').slickAnimation();


  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrolltop').fadeIn();
    } else {
      $('.scrolltop').fadeOut();
    }
  });
  $('.scrolltop').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $(this).toggleClass('opened');
  });



  if ($(window).width() < 993) {
    $(".header-nav .navbar-nav .nav-item span.dropdown-toggle").click(function () {
      $(".sub-menu").slideToggle(500);
    });
  }
});









