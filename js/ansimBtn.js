$(function(){ //ansimBtn.js

	var winW = 0;
	var ansimH = 0;
	var t = 0;
	
	windowResizeFn();
	setInterval(windowResizeFn, 100);
	$('.ansimBtn').stop().hide();
	
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function windowResizeFn(){
		winW = $(window).innerWidth();
		ansimH = $('.footer-ansim-content-wrap').innerHeight();
		
		if( t==1 ){
			$('#footer-ansim-wrap').stop().animate({bottom:-(ansimH+1)},0);
		}
		
		$('.ansimCloseBtn').on({
			click: function(){
				$('.footer-ansimBtn-wrap').stop().animate({top:-30},500);
				$('.ansimBtn').stop().slideDown(500);
				$('#footer-ansim-wrap').stop().animate({bottom:-(ansimH+1)},500, function(){
					t = 1;
				});
			}
		});
		
		$('.ansimBtn').on({
			click: function(){
				t = 0;
				$('.footer-ansimBtn-wrap').stop().animate({top:0},500);
				$(this).stop().slideUp(500);
				$('#footer-ansim-wrap').stop().animate({bottom:-0},500);
			}
		});
	}
	
}); //ansimBtn.js