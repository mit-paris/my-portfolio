$(window).scroll(function (){
  const targetElement = $('.fadein').offset().top;
  const scroll = $(window).scrollTop();
  const windowHeight = $(window).height();
  if (scroll > targetElement - windowHeight + 100){
    $('.fadein').addClass('show');
  }
});
