$(document).ready(function(){
  $(window).resize(function(){ 
    if (window.innerWidth < 1280) { 
    /* 메뉴 */
    $('.menu_btn').click(function(){
      $('.nav').css('left','0');
    });
    $('.close').click(function(){
      $('.nav').css('left','-100%');
    });
  
    /* 서브메뉴 전체열기, 닫기 */
    $('.sub_menu').hide();
    $('.allopen').click(function(){
      $('.sub_menu').stop().slideDown();
      $('.menu > li > img').attr('src','img/icon/more_up.png');
    });
    $('.allclose').click(function(){
      $('.sub_menu').stop().slideUp();
      $('.menu > li > img').attr('src','img/icon/more_down.png');
    });
  
    /* 서브메뉴 개별 열기, 닫기 */
    $('.menu > li').click(function(){
      if($('.sub_menu').css('display')=='none'){
        $('.sub_menu',this).slideDown();
        $(this).children('img').attr('src','img/icon/more_up.png');
      }else{
        $('.sub_menu',this).slideUp();
        $(this).children('img').attr('src','img/icon/more_down.png');
      }
    });
  
    /* 검색창 */
    $('.search').click(function(){
      if($('.search_box').css('display')=='none'){
        $('.search_box').slideDown();
      }else{
        $('.search_box').slideUp();
      }
    });
    } else {
      /* 메뉴 */
      $('.sub_menu').hide();
      $('.menu > li').mouseover(function(){
        $('.sub_menu',this).stop().slideDown();
        $('.menu_bg').stop().slideDown();
      }).mouseout(function(){
        $('.sub_menu',this).stop().slideUp();
        $('.menu_bg').stop().slideUp();
      });
      
      $('.search_box').show();
    }
    }).resize(); 
  });