$(function(){ //section4-Slide.js

	var s = [];
	var n = $('.section4-slide-wrap>li').length-1;
	var p = -1;
	var slideText = '';
	var setId = 0;
	
	function sFn(){
		for(i=0;i<=n;i++){ s[i]=0; }
	}
	sFn();
	s[0]=1;
	
	autoPlay();
	
	$('.section4-slide-wrap').on({
		swipeleft: function(){
			nextSlideFn();
		},
		swiperight: function(){
			prevSlideFn();
		}
	});
	
	function autoPlay(){
		setId = setInterval(nextSlideFn, 6000);
	}
	
	$('.section4-slide-wrap').on({
		mouseenter: function(){
			clearInterval(setId);
		},
		mouseleave: function(){
			autoPlay();
		}
	});
	
	$('.section4-nextBtn').on({
		click: function(){
			nextSlideFn();
			$('.nextBtn1').hide();
			$('.nextBtn2').show();
			setTimeout(nextOffFn, 1550);
			function nextOffFn(){
				$('.nextBtn1').show();
				$('.nextBtn2').hide();
			}
		}
	});
	
	$('.section4-prevBtn').on({
		click: function(){
			prevSlideFn();
			$('.prevBtn1').hide();
			$('.prevBtn2').show();
			setTimeout(prevOffFn, 1550);
			function prevOffFn(){
				$('.prevBtn1').show();
				$('.prevBtn2').hide();
			}
		}
	});
	
	function nextSlideFn(){
		for(i=0;i<=n;i++){
			if( s[i]==1 ){
				if( i == n ){
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
				if( i == 0 ){
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
		
		$('.section4-slideTextNum').text( '0'+(z+1) );
		
		if( z == 0 ){
			p = +4; 
		}
		else{
			p = -1; 	
		}
		
		for(i=0;i<=n;i++){
			$('.section4-slide-wrap>li').eq(i).animate({opacity:1},0).animate({opacity:0},0);
		}
		$('.section4-slide-wrap>li').eq(z+p).animate({opacity:1},0).animate({opacity:0.6},300);
		$('.section4-slide-wrap>li').eq(z).animate({opacity:0},0).animate({opacity:1},1550);
		
		$('.section4-slide-wrap>li').eq(z+p).find('.section4-slide-content-wrap>li').eq(0).stop().delay(300).animate({left:0},0).animate({left:'100%'},1000);
		$('.section4-slide-wrap>li').eq(z+p).find('.section4-slide-content-wrap>li').eq(1).stop().delay(300).animate({left:0, marginTop:0},0).animate({left:'-100%', marginTop:-500},1400);
		$('.section4-slide-wrap>li').eq(z+p).find('.section4-slide-content-wrap>li').eq(2).stop().delay(300).animate({left:0, marginTop:0},0).animate({left:'-100%', marginTop: 500},1200);
		
		$('.section4-slide-wrap>li').eq(z).find('.section4-slide-content-wrap>li').eq(0).stop().animate({left:     0, marginLeft:-500},0).animate({left:0, marginLeft:0},1200);
		$('.section4-slide-wrap>li').eq(z).find('.section4-slide-content-wrap>li').eq(1).stop().animate({left:'100%', marginTop:  500},0).animate({left:0, marginTop: 0},1550);
		$('.section4-slide-wrap>li').eq(z).find('.section4-slide-content-wrap>li').eq(2).stop().animate({left:'100%', marginTop: -500},0).animate({left:0, marginTop: 0},1500);
	
		$('.section4-nextBtn').on();
	}
	
	function prevSlide(z){
		sFn();
		s[z]=1;
		
		$('.section4-slideTextNum').text( '0'+(z+1) );
		
		if( z == 4 ){
			p = -4; 
		}
		else{
			p = 1; 	
		}
		
		for(i=0;i<=n;i++){
			$('.section4-slide-wrap>li').eq(i).animate({opacity:1},0).animate({opacity:0},0);
		}
		$('.section4-slide-wrap>li').eq(z+p).animate({opacity:1},0).animate({opacity:0.6},300);
		$('.section4-slide-wrap>li').eq(z).animate({opacity:0},0).animate({opacity:1},1550);
		
		$('.section4-slide-wrap>li').eq(z+p).find('.section4-slide-content-wrap>li').eq(0).stop().delay(300).animate({left:0},0).animate({left:'100%'},1000);
		$('.section4-slide-wrap>li').eq(z+p).find('.section4-slide-content-wrap>li').eq(1).stop().delay(300).animate({left:0, marginTop:0},0).animate({left:'-100%', marginTop:-500},1400);
		$('.section4-slide-wrap>li').eq(z+p).find('.section4-slide-content-wrap>li').eq(2).stop().delay(300).animate({left:0, marginTop:0},0).animate({left:'-100%', marginTop: 500},1200);
		
		$('.section4-slide-wrap>li').eq(z).find('.section4-slide-content-wrap>li').eq(0).stop().animate({left:     0, marginLeft:-500},0).animate({left:0, marginLeft:0},1200);
		$('.section4-slide-wrap>li').eq(z).find('.section4-slide-content-wrap>li').eq(1).stop().animate({left:'100%', marginTop:  500},0).animate({left:0, marginTop: 0},1550);
		$('.section4-slide-wrap>li').eq(z).find('.section4-slide-content-wrap>li').eq(2).stop().animate({left:'100%', marginTop: -500},0).animate({left:0, marginTop: 0},1500);
	
		$('.section4-nextBtn').on();
	}

}); //section4-Slide.js