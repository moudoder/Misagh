$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.questions-block').on('click', function() {
  	$(this).toggleClass('active');
  })

  $('.catalog-block-slider').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 500,
  	fade: true,
  	cssEase: 'linear',
  	dots: true,
  	prevArrow: $('.catalog-block-arrow__prev'),
  	nextArrow: $('.catalog-block-arrow__next'),
  });

  


  if ($(window).width() < 1160) {
       $('.first-screen-benefits').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true
       });
  }
})

