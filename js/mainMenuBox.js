$(function(){ //mainMenuBox.js
	
	$(window).resize(function(){
		mainMenuBoxFn();
	});
	
	function mainMenuBoxFn(){
		if( $(window).innerWidth() <= 1210 ){
			$('.header-Main-menu>li').children('span').removeClass('addMainMenuBtn');
			$('.header-Main-menu>li').find('div').hide();
		}
	}
	
	$('.header-Main-menu>li').on({
		click: function(){
			$('.header-Main-menu>li').children('span').removeClass('addMainMenuBtn');
			$('.header-Main-menu>li').find('div').hide();
			
			$(this).children('span').addClass('addMainMenuBtn');
			$(this).find('div').show();
		},
		mouseenter: function(){
			$('.header-Main-menu>li').children('span').removeClass('addMainMenuBtn');
			$('.header-Main-menu>li').find('div').hide();
			
			$(this).children('span').addClass('addMainMenuBtn');
			$(this).find('div').show();
		}
	});
	
	$('.header-Main-menu').on({
		mouseleave: function(){
			$('.header-Main-menu>li').children('span').removeClass('addMainMenuBtn');
			$('.header-Main-menu>li').find('div').hide();
		}
	});
	
}); //mainMenuBox.js