$(document).ready(function(){
  $('.ba-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    slide: ".dishes-list-item",
    dots: true,
    autoPlay: true,
    appendDots: ".slider-nav"
  });
});