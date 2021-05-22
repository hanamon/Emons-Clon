$(function(){ //scroll.js
	
	var smooth = 0;
	
	$('.smoothBtn').each(function(idx){
		$(this).on({
			click: function(){
				smooth = $(this).attr('href');
				$('html, body').stop().animate({scrollTop:$(smooth).offset().top},500);
			}
		});
	});
	
}); //scroll.js