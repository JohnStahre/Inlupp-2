new WOW().init();

// https://kenwheeler.github.io/slick/
//https://github.com/kenwheeler/slick

$(document).ready(() => {
  $('#slideshow .slick').slick();
 })

//  denna skulle jag vilja få till om det går
  $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});