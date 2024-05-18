$(document).ready(function () {
  $(".tabs").tabslet({
    active: 2,
  });

  $(".hero-carousel").slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  });
});
