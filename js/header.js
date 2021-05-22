$(function(){ //header.js
	
	var winTop = 0;
	var winW = 0;
	var t = 0;
	
	windowResizeFn();
	setTimeout(windowResizeFn, 100);
	
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function windowResizeFn(){
		winW = $(window).innerWidth();
		if( winW > 1210 ){
			t = 0;
		}
		else if( winW <= 1210 ){
			t = 1;
		}
	}
	
	$(window).scroll(function(){
		winTop = $(window).scrollTop();
		if( t==1 ){
			$('#main').removeClass('addMainFixed');
			
			if( winTop > 50 ){
				$('.header-mobile').addClass('addMainFixed');
				$('.header-mobile-bottom-wrap').addClass('addMainFixed');
				$('#goTopBtn-wrap').show();
				$('#main').addClass('addMainFixed2');
			}
			else{
				$('.header-mobile').removeClass('addMainFixed');
				$('.header-mobile-bottom-wrap').removeClass('addMainFixed');
				$('#goTopBtn-wrap').hide();		
				$('#main').removeClass('addMainFixed2');
			}
		}
		else if( t==0 ){
			$('#main').removeClass('addMainFixed2');
			if( winTop > 78 ){
				$('#goTopBtn-wrap').show();
				$('#main').addClass('addMainFixed');
				
				$('.header-Main').addClass('addMainFixed');
				$('.header-Main-allMenuBtn-wrap').addClass('addMainFixed');
				$('.header-Main-logoBtn-wrap').addClass('addMainFixed');
				$('.header-Main-menu>li>span').addClass('addMainFixed');
				$('.header-Main-search').addClass('addMainFixed');
				$('.header-Main-menu-sub').addClass('addMainFixed');
				$('.header-search-tab').addClass('addMainFixed');
				$('.header-Main-allMenuBox-wrap>div>ul>li').eq(0).addClass('addMainFixed');
				$('.allMenuBox-closeBtn-smoll-wrap').addClass('addMainFixed');
			}
			else{
				$('#goTopBtn-wrap').hide();		
				$('#main').removeClass('addMainFixed');
				
				$('.header-Main').removeClass('addMainFixed');
				$('.header-Main-allMenuBtn-wrap').removeClass('addMainFixed');
				$('.header-Main-logoBtn-wrap').removeClass('addMainFixed');
				$('.header-Main-menu>li>span').removeClass('addMainFixed');
				$('.header-Main-search').removeClass('addMainFixed');
				$('.header-Main-menu-sub').removeClass('addMainFixed');
				$('.header-search-tab').removeClass('addMainFixed');
				$('.header-Main-allMenuBox-wrap>div>ul>li').eq(0).removeClass('addMainFixed');
				$('.allMenuBox-closeBtn-smoll-wrap').removeClass('addMainFixed');
			}
		}
	});
	
}); //header.js