$(function(){ //section4-Resize.js
	
	var imgH = 0;
	
	setInterval(windowResizeFn, 100);
	
	$(window).resize(function(){
		windowResizeFn();
	});
	function windowResizeFn(){
		imgH = $('.section4-content-height-2').innerHeight();
					 $('.section4-content-height-1').css({height:imgH});	
	}
	
}); //section4-Resize.js