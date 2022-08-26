$(document).ready(function(){

  $(window).resize(function(){ 
    if (window.innerWidth < 1024) { 
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 10,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    });
    $('.menu').click(function(){
      $('.menu').toggleClass('on');
      $('.menu_list').toggleClass('open');
    });
  } else {
    /* 메뉴 */
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 10,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    });
  }
  }).resize();
});