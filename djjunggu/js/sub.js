$(document).ready(function(){
		$('.header').mouseover(function(){
			$('.logo a img').attr('src','./image/logo_2.png');
		}).mouseout(function(){
			$('.logo a img').attr('src','./image/logo.png');
		});
		$('.dep2').hide();
		$('.dep1 > ul > li').mouseover(function(){
			$('.dep2',this).stop().slideDown();
			$('.menu_bg').stop().slideDown();
		}).mouseout(function(){
			$('.dep2',this).stop().slideUp();
			$('.menu_bg').stop().slideUp();
		});

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $(".header").addClass('on');
        $('.logo a img').attr('src','./image/logo_2.png');
      }
      else{
        $(".header").removeClass('on');
        $('.logo a img').attr('src','./image/logo.png');
      }
    })

	$('.sec2 ul li:nth-child(2) button').mouseover(function(){
		$('.sec2 ul li:nth-child(2) button img').attr('src', 'image/icon2_hover.png');
	}).mouseout(function(){
		$('.sec2 ul li:nth-child(2) button img').attr('src', 'image/icon2.png');
	});

	$('.sec2 ul li:nth-child(3) button').mouseover(function(){
		$('.sec2 ul li:nth-child(3) button img').attr('src', 'image/icon3_hover.png');
	}).mouseout(function(){
		$('.sec2 ul li:nth-child(3) button img').attr('src', 'image/icon3.png');
	});

	$('.sec2 ul li:nth-child(4) button').mouseover(function(){
		$('.sec2 ul li:nth-child(4) button img').attr('src', 'image/icon4_hover.png');
	}).mouseout(function(){
		$('.sec2 ul li:nth-child(4) button img').attr('src', 'image/icon4.png');
	});
  });