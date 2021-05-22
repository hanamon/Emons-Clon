$(function(){ //allMenuBox.js
	
	$(window).resize(function(){
		allMenuBoxFn();
	});
	
	function allMenuBoxFn(){
		if( $(window).innerWidth() <= 1210 ){
			$('.header-Main-allMenuBox-wrap').hide();
		}
	}
	
	$('.allMenuBtn').on({
		click: function(){
			$('.header-Main-allMenuBox-wrap').show();
		}
	});
	
	$('.allMenuCloseBtn').on({
		click: function(){
			$('.header-Main-allMenuBox-wrap').hide();
		}
	});

}); //allMenuBox.js