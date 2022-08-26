$(document).ready(function(){
  
	$(window).resize(function(){ 
		if (window.innerWidth < 1921) { 
			fullset();
		quickClick();

		var TOP=$(window).scrollTop();
		$(window).scroll(function(){
				TOP=$(window).scrollTop();
				console.log(TOP);
				if(TOP==-2646){
						$('.header').addClass('on');
						$('.logo a img').attr('src','./image/logo_2.png');
				}
		});
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

		$(function(){
			// 스크롤 시 header fade-in
			$(document).on('scroll', function(){
					if($(window).scrollTop() > 1200){
							$(".header").addClass("on");
					}else{
							$(".header").removeClass("on");
					}
			})
		});

	/* 슬라이드 제이쿼리 */
		console.clear();
		$('.bg_slide > ul > li').each(function(){
		});
		$('.bg_slide > ul > li:first-child').addClass('on');

		let len=$('.bg_slide > ul > li').length;
		let cnt =0;

		let intv= setInterval(function(){
			nextAni();
			pageNumber__Init();
			updateCurrentPageNumber();
		},5000); 

		function nextAni(){
			$('.bg_slide > ul > li').removeClass('on');
			cnt++;
			if(cnt >= len){
				cnt=0;
			}
			$('.bg_slide > ul > li').eq(cnt).addClass('on');
		}
		$('.next-btn').click(function(){
			clearInterval(intv);
			nextAni();
			intv= setInterval(function(){nextAni()},5000);
		});

		function pageNumber__Init(){
			// 전채 배너 페이지 갯수 세팅해서 .slider 에 'data-slide-total' 넣기
			var totalSlideNo = $('.bg_slide > ul > li').length;
			//console.log(totalSlideNo);
			
			$('.bg_slide > ul').attr('data-slide-total', totalSlideNo);
			
			// 각 배너 페이지 번호 매기기
			$('.bg_slide > ul > li').each(function(index, node){
					$(node).attr('data-slide-no', index + 1);
			});
		};
		pageNumber__Init();

	// 슬라이더 이동시 페이지 번호 변경
		function updateCurrentPageNumber(){
				var totalSlideNo = $('.bg_slide > ul').attr('data-slide-total');
				var currentSlideNo = $('.bg_slide > ul > li.active').attr('data-slide-no');
				
				$('.bg_slide > .page-btns > .page-no > .total-slide-no').html('0' + totalSlideNo);
				$('.bg_slide > .page-btns > .page-no > .current-slide-no').html('0' + currentSlideNo);
				console.log(currentSlideNo);
		};

		updateCurrentPageNumber();

		/* page2 슬라이드 제이쿼리 */
		let wd=$('.slide_img2 > ul > li').width()+240;
		$('.slide_text2>ul>li:first-child').addClass('on');

		let intv1=setInterval(function(){//자동 반복 함수
			nextAni1();
			nextAni2();
		},3000);
		
		function nextAni1(){
			$('.slide_img2 > ul').not(':animated').animate({
				'margin-left':-wd+'px'
			},700,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
					$('.slide_img2 > ul > li').removeClass('on');
					$('.slide_img2 > ul > li').eq(0).appendTo($('.slide_img2 > ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
					$('.slide_img2 > ul').css({marginLeft:'-245px'});
					$('.slide_img2 > ul > li').eq(1).addClass('on');
			})
		}
		function nextAni2(){
			$('.slide_text2 > ul').not(':animated').animate({
				'margin-top':'-90px'
			},700,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
					$('.slide_text2 > ul > li').removeClass('on');
					$('.slide_text2 > ul > li').eq(0).appendTo($('.slide_text2 > ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
					$('.slide_text2 > ul').css({marginTop:'-30px'});
					$('.slide_text2 > ul > li').eq(1).addClass('on');
			})
		}

		/* page3 페이드 제이쿼리 */
		$('.sec').hide();
		$('.sec1').show();
		$('.slide3_1').click(function(){
			$('.sec').hide();
			$('.sec1').fadeIn(1000);
			$('.slide_text3 > ul > li').removeClass('on');
			$('.slide3_1').addClass('on');
		});
		$('.slide3_2').click(function(){
			$('.sec').hide();
			$('.sec2').fadeIn(1000);
			$('.slide_text3 > ul > li').removeClass('on');
			$('.slide3_2').addClass('on');
		});
		$('.slide3_3').click(function(){
			$('.sec').hide();
			$('.sec3').fadeIn(1000);
			$('.slide_text3 > ul > li').removeClass('on');
			$('.slide3_3').addClass('on');
		});
		$('.slide3_4').click(function(){
			$('.sec').hide();
			$('.sec4').fadeIn(1000);
			$('.slide_text3 > ul > li').removeClass('on');
			$('.slide3_4').addClass('on');
		});
		} else if(window.innerWidth < 400){
			let wd=$('.slide_img2 > ul > li').width()+100;
		$('.slide_text2>ul>li:first-child').addClass('on');

		let intv1=setInterval(function(){//자동 반복 함수
			nextAni1();
			nextAni2();
		},3000);
		
		function nextAni1(){
			$('.slide_img2 > ul').not(':animated').animate({
				'margin-left':-wd+'px'
			},700,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
					$('.slide_img2 > ul > li').removeClass('on');
					$('.slide_img2 > ul > li').eq(0).appendTo($('.slide_img2 > ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
					$('.slide_img2 > ul').css({marginLeft:'-105px'});
					$('.slide_img2 > ul > li').eq(1).addClass('on');
			})
		}
		function nextAni2(){
			$('.slide_text2 > ul').not(':animated').animate({
				'margin-top':'-90px'
			},700,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
					$('.slide_text2 > ul > li').removeClass('on');
					$('.slide_text2 > ul > li').eq(0).appendTo($('.slide_text2 > ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
					$('.slide_text2 > ul').css({marginTop:'-30px'});
					$('.slide_text2 > ul > li').eq(1).addClass('on');
			})
		}
		}
		}).resize(); 
	});