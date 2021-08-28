$(function(){ //section3-Resize.js
	
	var txt  = [];
	var txt2 = [];
	
	txtFn();
	windowResizeFn();
	setTimeout(windowResizeFn, 100);
	
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function txtFn(){
		txt2[0] = $('.section3-slide-arrow-2-wrap').eq(0).find('li').eq(2).find('div>p>a').text();
		txt2[1] = $('.section3-slide-arrow-2-wrap').eq(1).find('li').eq(0).find('div>p>a').text();
		txt2[2] = $('.section3-slide-arrow-2-wrap').eq(1).find('li').eq(2).find('div>p>a').text();
		txt2[3] = $('.section3-slide-arrow-2-wrap').eq(3).find('li').eq(0).find('div>p>a').text();
		txt2[4] = $('.section3-slide-arrow-2-wrap').eq(3).find('li').eq(1).find('div>p>a').text();
	}
	
	function windowResizeFn(){
		if( $(window).innerWidth() <= 990 ){
			txt[0] = '블리스'+'<br>'+'3단서랍장세트';
			txt[1] = '루쏘전동'+'<br>'+'리클라이너';
			txt[2] = '블리스'+'<br>'+'리프트업 티테이블';
			txt[3] = '프리미엄갤러리'+'<br>'+'낮은책장';
			txt[4] = '미엘'+'<br>'+'바테이블세트';
			$('.section3-slide-arrow-2-wrap').eq(0).find('li').eq(2).find('div>p>a').html(txt[0]);
			$('.section3-slide-arrow-2-wrap').eq(1).find('li').eq(0).find('div>p>a').html(txt[1]);
			$('.section3-slide-arrow-2-wrap').eq(1).find('li').eq(2).find('div>p>a').html(txt[2]);
			$('.section3-slide-arrow-2-wrap').eq(3).find('li').eq(0).find('div>p>a').html(txt[3]);
			$('.section3-slide-arrow-2-wrap').eq(3).find('li').eq(1).find('div>p>a').html(txt[4]);
		}
		if( $(window).innerWidth() <= 760 ){
			$('.section3-slide-arrow-2-wrap').eq(0).find('li').eq(2).find('div>p>a').html(txt2[0]);
			$('.section3-slide-arrow-2-wrap').eq(1).find('li').eq(0).find('div>p>a').html(txt2[1]);
			$('.section3-slide-arrow-2-wrap').eq(1).find('li').eq(2).find('div>p>a').html(txt2[2]);
			$('.section3-slide-arrow-2-wrap').eq(3).find('li').eq(0).find('div>p>a').html(txt2[3]);
			$('.section3-slide-arrow-2-wrap').eq(3).find('li').eq(1).find('div>p>a').html(txt2[4]);
		}
		if( $(window).innerWidth() <= 360 ){
			txt[0] = '블리스'+'<br>'+'3단서랍장세트';
			txt[1] = '루쏘전동'+'<br>'+'리클라이너';
			txt[2] = '블리스'+'<br>'+'리프트업 티테이블';
			txt[3] = '프리미엄갤러리'+'<br>'+'낮은책장';
			txt[4] = '미엘'+'<br>'+'바테이블세트';
			$('.section3-slide-arrow-2-wrap').eq(0).find('li').eq(2).find('div>p>a').html(txt[0]);
			$('.section3-slide-arrow-2-wrap').eq(1).find('li').eq(0).find('div>p>a').html(txt[1]);
			$('.section3-slide-arrow-2-wrap').eq(1).find('li').eq(2).find('div>p>a').html(txt[2]);
			$('.section3-slide-arrow-2-wrap').eq(3).find('li').eq(0).find('div>p>a').html(txt[3]);
			$('.section3-slide-arrow-2-wrap').eq(3).find('li').eq(1).find('div>p>a').html(txt[4]);
		}
		else if( $(window).innerWidth() > 990 ){
			$('.section3-slide-arrow-2-wrap').eq(0).find('li').eq(2).find('div>p>a').html(txt2[0]);
			$('.section3-slide-arrow-2-wrap').eq(1).find('li').eq(0).find('div>p>a').html(txt2[1]);
			$('.section3-slide-arrow-2-wrap').eq(1).find('li').eq(2).find('div>p>a').html(txt2[2]);
			$('.section3-slide-arrow-2-wrap').eq(3).find('li').eq(0).find('div>p>a').html(txt2[3]);
			$('.section3-slide-arrow-2-wrap').eq(3).find('li').eq(1).find('div>p>a').html(txt2[4]);
		}
	}
	
}); //section3-Resize.js