$(function(){ //mobile-header.js
	
	var winW = 0;
	
	windowResizeFn();
	setTimeout(windowResizeFn, 100);
	
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function windowResizeFn(){
		winW = $(window).innerWidth();
		if( winW > 1210 ){
			$('html').removeClass('addScroll');
			
			$('#header').animate({left:0},0);
			$('#main').animate({left:0},0);
			$('#footer').animate({left:0},0);
			$('#footer-ansim-wrap').animate({left:0},0);
			$('.header-mobile.addMainFixed').animate({left:0},0);
			
			$('#mobile-menu-wrap').hide();
			$('#mobile-menu-wrap>div').eq(0).animate({left:'-100%'},0);
			
			$('#mobile-asideMenu-wrap').hide();
			$('#mobile-asideMenu-wrap>div').eq(0).animate({right:'-100%'},0);
			
			$('.mobileMainBtn').removeClass('addMainBtn');
			$('.mobileMainBtn').parent().find('.mobile-subMenu-wrap').stop().slideUp();
		}
		else if( winW <= 1210 ){
			$('.header-mobile.addMainFixed').stop().animate({left:0},0);
			$('.mobileAllMenuBtn').on({
				click: function(){
					$('html').addClass('addScroll');
					
					$('#mobile-menu-wrap').show();
					$('#mobile-menu-wrap>div').eq(1).stop().animate({opacity:0},0).animate({opacity:1},500);
					
					$('#header').stop().animate({left:0},0).animate({left:'93%'},500);
					$('#main').stop().animate({left:0},0).animate({left:'93%'},500);
					$('#footer').stop().animate({left:0},0).animate({left:'93%'},500);
					$('#footer-ansim-wrap').stop().animate({left:0},0).animate({left:'93%'},500);
					$('.header-mobile.addMainFixed').stop().animate({left:0},0).animate({left:'93%'},500);
					
					$('#mobile-menu-wrap>div').eq(0).stop().animate({left:'-100%'},0).animate({left:0},500);
				}
			});
			$('.mobile-asideMenuBtn').on({
				click: function(){
					$('html').addClass('addScroll');
					
					$('#mobile-asideMenu-wrap').show();
					$('#mobile-asideMenu-wrap>div').eq(1).stop().animate({opacity:0},0).animate({opacity:1},500);
					
					$('#header').stop().animate({left:0},0).animate({left:'-93%'},500);
					$('#main').stop().animate({left:0},0).animate({left:'-93%'},500);
					$('#footer').stop().animate({left:0},0).animate({left:'-93%'},500);
					$('#footer-ansim-wrap').stop().animate({left:0},0).animate({left:'-93%'},500);
					$('.header-mobile.addMainFixed').stop().animate({left:0},0).animate({left:'-93%'},500);
					
					$('#mobile-asideMenu-wrap>div').eq(0).stop().animate({right:'-100%'},0).animate({right:0},500);
				}
			});
		}
	}
	
	$('#mobile-asideMenu-wrap>div').eq(1).on({
		click: function(){
			$('html').removeClass('addScroll');
			
			$(this).stop().animate({opacity:1},0).animate({opacity:0},500);
			
			$('#header').stop().animate({left:'-93%'},0).animate({left:0},500);
			$('#main').stop().animate({left:'-93%'},0).animate({left:0},500);
			$('#footer').stop().animate({left:'-93%'},0).animate({left:0},500);
			$('#footer-ansim-wrap').stop().animate({left:'-93%'},0).animate({left:0},500);
			
			$('#mobile-asideMenu-wrap>div').eq(0).stop().animate({right:0},0).animate({right:'-100%'},500, function(){
				$('#mobile-asideMenu-wrap').stop().hide();
			});
			
			$('.header-mobile.addMainFixed').stop().animate({left:'-93%'},0).animate({left:0},500);
		}
	});
	
	$('#mobile-menu-wrap>div').eq(1).on({
		click: function(){
			$('html').removeClass('addScroll');
			
			$(this).stop().animate({opacity:1},0).animate({opacity:0},500);
			
			$('#header').stop().animate({left:'93%'},0).animate({left:0},500);
			$('#main').stop().animate({left:'93%'},0).animate({left:0},500);
			$('#footer').stop().animate({left:'93%'},0).animate({left:0},500);
			$('#footer-ansim-wrap').stop().animate({left:'93%'},0).animate({left:0},500);
			
			$('#mobile-menu-wrap>div').eq(0).stop().animate({left:0},0).animate({left:'-100%'},500, function(){
				$('#mobile-menu-wrap').stop().hide();
			});
			
			$('.header-mobile.addMainFixed').stop().animate({left:'93%'},0).animate({left:0},500);
		}
	});
	
	$('.mobileMenuCloseBtn').on({
		click: function(){
			$('html').removeClass('addScroll');
			
			$('#mobile-menu-wrap>div').eq(1).stop().animate({opacity:1},0).animate({opacity:0},500);
			
			$('#header').stop().animate({left:'93%'},0).animate({left:0},500);
			$('#main').stop().animate({left:'93%'},0).animate({left:0},500);
			$('#footer').stop().animate({left:'93%'},0).animate({left:0},500);
			$('#footer-ansim-wrap').stop().animate({left:'93%'},0).animate({left:0},500);
			
			$('#mobile-menu-wrap>div').eq(0).stop().animate({left:0},0).animate({left:'-100%'},500, function(){
				$('#mobile-menu-wrap').stop().hide();
			});
			
			$('.header-mobile.addMainFixed').stop().animate({left:'93%'},0).animate({left:0},500);
		}
	});
	
	$('.mobileMainBtn').each(function(idx){
		$(this).on({
			click: function(){
				$('.mobileMainBtn').not($(this)).removeClass('addMainBtn');
				$(this).toggleClass('addMainBtn');
				
				$('.mobileMainBtn').parent().find('.mobile-subMenu-wrap').not($(this)).stop().slideUp();
				$(this).parent().find('.mobile-subMenu-wrap').stop().slideToggle(300);
			}
		});
	});
	
}); //mobile-header.js





















