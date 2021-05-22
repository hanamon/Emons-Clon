$(function(){ //section5-Slide.js
	
	var s = [];
	var a = [];
	var b = [];
	var n = $('.section5-slide').length-1;
	var zNum = 1;
	var p = 0;
	var j = 0;
	var k = 0;
	var setId = 0;
	var winW = 0;
	var imgW =0;
	
	function sFn(){
		for( i=0;i<=n;i++ ){ s[i]=0; }
	}
	sFn();
	s[0]=1;
	
	autoPlay();
	
	$('.section5-slide-wrap').on({
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
		setId = setInterval(nextSlideFn, 5000);
	}
	
	windowResizeFn();
	setTimeout(windowResizeFn, 100);
	
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function windowResizeFn(){
		winW = $(window).innerWidth();
		
		if( winW > 1200 ){
			imgW = 25;
		}
		else if( winW <= 1200 && winW > 760 ){
			imgW = 33.33333;
		}
		else if( winW <= 760 && winW > 480 ){
			imgW = 50;
		}
		else if( winW <= 480 ){
			imgW = 100;
		}
		sFn();
		s[0]=1;
		
		$('.section5-slide').css({width:imgW+'%'});
		
		for(i=0;i<=n;i++){
			$('.section5-slide').eq(i).css({left:(imgW*i)+'%'});
		}
	}
	
	$('.section5-nextBtn').on({
		click: function(){
			nextSlideFn();
		}
	});
	
	$('.section5-prevBtn').on({
		click: function(){
			prevSlideFn();
		}
	});
	
	function nextSlideFn(){
		if( imgW == 50 ){
			zNum = 2;
		}
		if( imgW == 100 ){
			zNum = 5;
		}
		for(i=0;i<=zNum;i++){
			if( s[i]==1 ){
				if( i == zNum ){
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
		if( imgW == 50 ){
			zNum = 2;
		}
		if( imgW == 100 ){
			zNum = 5;
		}
		for(i=0;i<=zNum;i++){
			if( s[i]==1 ){
				if( i == 0 ){
					prevSlide(zNum);
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
		if( imgW == 25 ){
			if( z==0 ){
				a = [6,7,4,5,0,1,2,3];
				p = 4;
			}
			else if( z==1 ){
				a = [0,1,2,3,4,5,6,7];
				p = 2;
			}
		}
		else if( imgW == 33.33333 ){
			if( z==0 ){
				a = [3,4,5,0,1,2,6,7];
			}
			else if( z==1 ){
				a = [0,1,2,3,4,5,6,7];
			}
			p = 3;
		}
		else if( imgW == 50 ){
			if( z==0 ){
				a = [4,5,0,1,2,3,6,7];
			}
			else if( z==1 ){
				a = [0,1,2,3,4,5,6,7];
			}
			else if( z==2 ){
				a = [2,3,4,5,0,1,6,7];
			}
			p = 2;
		}
		else if( imgW == 100 ){
			if( z==0 ){
				a = [5,0,1,2,3,4,6,7];
			}
			else if( z==1 ){
				a = [0,1,2,3,4,5,6,7];
			}
			else if( z==2 ){
				a = [1,2,3,4,5,0,6,7];
			}
			else if( z==3 ){
				a = [2,3,4,5,0,1,6,7];
			}
			else if( z==4 ){
				a = [3,4,5,0,1,2,6,7];
			}
			else if( z==5 ){
				a = [4,5,0,1,2,3,6,7];
			}
			p = 1;
		}
		for(i=0;i<=n;i++){
			$('.section5-slide').eq(a[i]).stop().animate({left:(imgW*i)+'%'},0).animate({left:(imgW*(i-p))+'%'}, 1000);
		}
	}	

	function prevSlide(z){
		sFn();
		s[z]=1;
		if( imgW == 25 ){
			if( z==0 ){
				b = [5,4,7,6,1,0,2,3];
				j = 4;
				k = 6;
			}
			else if( z==1 ){
				b = [3,2,1,0,5,4,7,6];
				j = 4;
				k = 8;
			}
		}
		else if( imgW == 33.33333 ){
			if( z==1 ){
				b = [2,1,0,5,4,3,6,7];
			}
			else if( z==0 ){
				b = [5,4,3,2,1,0,6,7];
			}
			j = 3;
			k = 6;
		}
		else if( imgW == 50 ){
			if( z==2 ){
				b = [1,0,5,4,3,2,6,7];
			}
			else if( z==1 ){
				b = [5,4,3,2,1,0,6,7];
			}
			else if( z==0 ){
				b = [3,2,1,0,5,4,6,7];
			}
			j = 2;
			k = 4;
		}
		else if( imgW == 100 ){
			if( z==5 ){
				b = [0,5,4,3,2,1,6,7];
			}
			else if( z==4 ){
				b = [5,4,3,2,1,0,6,7];
			}
			else if( z==3 ){
				b = [4,3,2,1,0,5,6,7];
			}
			else if( z==2 ){
				b = [3,2,1,0,5,4,6,7];
			}
			else if( z==1 ){
				b = [2,1,0,5,4,3,6,7];
			}
			else if( z==0 ){
				b = [1,0,5,4,3,2,6,7];
			}
			j = 1;
			k = 2;
		}
		for(i=0;i<=n;i++){
			j--;
			k--;
			$('.section5-slide').eq(b[i]).stop().animate({left:(imgW*j)+'%'},0).animate({left:(imgW*k)+'%'}, 1000);
		}
	}	
	
}); //section5-Slide.js





























