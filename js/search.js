$(function(){ //search.js

	var winW = 0;
	
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function windowResizeFn(){
		winW = $(window).innerWidth();
		if( winW <= 1210 ){
			$('.header-search-tab').hide();
			$('.header-search-tabMenuBtn').removeClass('addTabMenuBtn');
			$('.header-search-tabMenuBtn').eq(0).addClass('addTabMenuBtn');
		}
	}
	
	$('.header-search-tabCloseBtn').on({
		click: function(){
			$('.header-search-tab').hide();
		}
	});
	
	$('.header-search-tabMenuBtn').each(function(idx){
		$(this).on({
			click: function(){
				$('.header-search-tabMenuBtn').removeClass('addTabMenuBtn');
				$(this).addClass('addTabMenuBtn');
				if( idx==0 ){
					$('.header-tabSearch-content-1-wrap').stop().show();
					$('.header-tabSearch-content-2-wrap').stop().hide();
				}
				else if( idx==1 ){
					$('.header-tabSearch-content-1-wrap').stop().hide();
					$('.header-tabSearch-content-2-wrap').stop().show();
				}
			}
		});
	});
	
	$('.header-search-wrap').on({
		click: function(){
			$('.header-search-tab').stop().show();
		}
	});
	
	$('.header-search-wrap>a').on({
		click: function(){
			$('.header-search-wrap>input').focus();
		}
	});
	
}); //search.js