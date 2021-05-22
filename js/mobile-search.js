$(function(){ //mobile-search.js
	
	var winW = 0;
	
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function windowResizeFn(){
		winW = $(window).innerWidth();
		if( winW > 1210 ){
			$('.header-mobile-search-tab').hide();
			$('.header-mobile-search-tabMenuBtn').removeClass('addTabMenuBtn');
			$('.header-mobile-search-tabMenuBtn').eq(0).addClass('addTabMenuBtn');
		}
	}
	
	$('.header-mobile-search-tabCloseBtn').on({
		click: function(){
			$('.header-mobile-search-tab').hide();
		}
	});
	
	$('.header-mobile-search-tabMenuBtn').each(function(idx){
		$(this).on({
			click: function(){
				$('.header-mobile-search-tabMenuBtn').removeClass('addTabMenuBtn');
				$(this).addClass('addTabMenuBtn');
				if( idx==0 ){
					$('.header-mobile-tabSearch-content-1-wrap').stop().show();
					$('.header-mobile-tabSearch-content-2-wrap').stop().hide();
				}
				else if( idx==1 ){
					$('.header-mobile-tabSearch-content-1-wrap').stop().hide();
					$('.header-mobile-tabSearch-content-2-wrap').stop().show();
				}
			}
		});
	});
	
	$('.header-mobile-search-wrap').on({
		click: function(){
			$('.header-mobile-search-tab').stop().show();
		}
	});
	
	$('.header-mobile-search-wrap>a').on({
		click: function(){
			$('.header-mobile-search-wrap>input').focus();
		}
	});
	
}); //mobile-search.js