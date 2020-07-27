$(document).ready(function(){
    $('.app-slider').slick({
      dots: true,
      prevArrow: '<img class="arrow_prev" src="images/slick_left.svg">',
      nextArrow: '<img class="arrow_next" src="images/slick_right.svg">',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1281,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            touchMove: true
          }
        },
        {
          breakpoint: 961,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            touchMove: true
          }
        },
        {
          breakpoint: 721,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            touchMove: true
          }
        },
      ]
    });
  });
$(document).ready(function(){
  $('.blog').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          touchMove: true
        }
      },
      {
        breakpoint: 961,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          touchMove: true
        }
      },
      {
        breakpoint: 721,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          touchMove: true
        }
      },
    ]
  });
});
$(document).ready(function(){
  $('.expert-panel').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          touchMove: true
        }
      },
      {
        breakpoint: 961,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          touchMove: true
        }
      },
      {
        breakpoint: 721,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          touchMove: true
        }
      },
    ]
  });
});