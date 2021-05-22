$(function(){ //section6-Slide.js

	var s = [];
	var a = [];
	var b = [];
	var j = 0;
	var k = 0;
	var n = $('.section6-slide').length-1;
	var setId = 0;
	
	function sFn(){
		for(i=0;i<=n;i++){ s[i]=0; }
	}
	sFn();
	s[0]=1;
	
	autoPlay();
	
	$('.section6-slide-wrap').on({
		swipeleft: function(){
			nextSlideFn();
		},
		swiperight: function(){
			prevSlideFn();
		},
		mouseenter: function(){
			clearInterval(setId);
		},
		mouseleave: function(){
			autoPlay();
		}
	});
	
	function autoPlay(){
		setId = setInterval(nextSlideFn, 3000);
	}
	
	$('.section6-prevBtn-wrap').on({
		click: function(){
			prevSlideFn();
		}
	});
	
	$('.section6-nextBtn-wrap').on({
		click: function(){
			nextSlideFn();
		}
	});
	
	function nextSlideFn(){
		for(i=0;i<=n;i++){
			if( s[i]==1 ){
				if( i==n ){
					nextSlide(0);
					break;
				}
				else{
					nextSlide(i+1);
					break;
				}
			}
		}
	}
	
	function prevSlideFn(){
		for(i=0;i<=n;i++){
			if( s[i]==1 ){
				if( i==0 ){
					prevSlide(n);
					break;
				}
				else{
					prevSlide(i-1);
					break;
				}
			}
		}
	}
	
	function nextSlide(z){
		sFn();
		s[z]=1;
		if( z == 0 ){
			a = [5,0,1,2,3,4];
		}
		else if( z == 1 ){
			a = [0,1,2,3,4,5];
		}
		else if( z == 2 ){
			a = [1,2,3,4,5,0];
		}
		else if( z == 3 ){
			a = [2,3,4,5,0,1];
		}
		else if( z == 4 ){
			a = [3,4,5,0,1,2];
		}
		else if( z == 5 ){
			a = [4,5,0,1,2,3];
		}
		$('.section6-slideTextNum').text('0'+(z+1));
		for(i=0;i<=n;i++){
			$('.section6-slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-1))+'%'},1000);
		}
	}

	function prevSlide(z){
		sFn();
		s[z]=1;
		if( z == 5 ){
			b = [0,5,4,3,2,1];
		}
		else if( z == 4 ){
			b = [5,4,3,2,1,0];
		}
		else if( z == 3 ){
			b = [4,3,2,1,0,5];
		}
		else if( z == 2 ){
			b = [3,2,1,0,5,4];
		}
		else if( z == 1 ){
			b = [2,1,0,5,4,3];
		}
		else if( z == 0 ){
			b = [1,0,5,4,3,2];
		}
		j = 1;
		k = 2;
		for(i=0;i<=n;i++){
			j--;
			k--;
			$('.section6-slideTextNum').text('0'+(z+1));
			$('.section6-slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},1000);
		}
	}

}); //section6-Slide.js
































