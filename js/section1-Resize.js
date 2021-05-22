$(function(){ //section1-Resize.js
	
	var imgH = 0;
	var imgSrc = '';
	var n = $('.section1-slide').length-1;
	var navBtnText = [];
	var navBtnTextNone = '';
	
	navBtnTextFn();
	windowResizeFn();
	setTimeout(windowResizeFn, 100);
	setInterval(downBtnFn, 1000);
	
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function navBtnTextFn(){
		for(i=0;i<=n;i++){
			navBtnText[i] = $('.setion1NavBtn').eq(i).text();
		}
	}
	
	function windowResizeFn(){
		if( $(window).innerWidth() <= 760 ){
			for(i=0;i<=n;i++){
				$('.section1-slide>a>img').eq(i).attr('src', 'img/intro-section1-respons-slide0' + (i) + '.jpg');
				$('.setion1NavBtn').text(navBtnTextNone);
			}
		}
		if( $(window).innerWidth() > 760 ){
			for(i=0;i<=n;i++){
				$('.section1-slide>a>img').eq(i).attr('src', 'img/intro-section1-slide0' + (i) + '.jpg');
				$('.setion1NavBtn').eq(i).text(navBtnText[i]);
			}
		}
		imgH = $('.section1-nav-wrap>ul>li>a').innerHeight();
			   $('.section1-nav-wrap>ul>li>a').css({ top:-imgH });
	}
	
	function downBtnFn(){
		$('.section1-downBtn-wrap>a>img').stop().animate({ paddingTop:0 },500).animate({ paddingTop:15 },500);
	}
	
}); //section1-Resize.js























