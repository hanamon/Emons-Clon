$(function(){ //section3-Slide.js
	
	var s = [];
	var a = [];
	var j = k = 0;
	var n = $('.section3-slide').length-1;
	var setId = ''; 
	
	function sFn(){
		for(i=0;i<=n;i++){ s[i]=0; }
	}
	sFn();
	s[0]=1;
	navFn(0);
	
	autoPlay();
	
	$('.section3-slide-wrap').on({
		swipeleft: function(){
			nextSlideFn();
		},
		swiperight: function(){
			prevSlideFn();
		}
	});
	
	function autoPlay(){
		setId = setInterval(nextSlideFn, 4000);
	}
	
	$('.section3-nextBtn-wrap, .section3-prevBtn-wrap, .section3-slide-navBtn, .section3-slide-arrow-1-wrap>li>div, .section3-slide-arrow-2-wrap>li>div').on({
		mouseenter: function(){
			clearInterval(setId);
		},
		mouseleave: function(){
			autoPlay();
		}
	});
	
	function navFn(z){
		for(i=0;i<=n;i++){
			if( s[i]==1 ){
				$('.section3-slide-navBtn').removeClass('addSec3NavBtn');
				$('.section3-slide-navBtn').eq(z).addClass('addSec3NavBtn');
			}
		}
	}
	
	$('.section3-slide-navBtn').each(function(index){
		$(this).on({
			click: function(){
				for(i=0;i<=n;i++){
					if( s[i]==1 ){
						if( index > i ){
							if( index-1 == i ){
								nextSlideFn();
							}
							else if( index-2 == i ){
								if( i==0 ){
									a = [0,1,2,3,4];
								}
								else if( i==1 ){
									a = [1,2,3,4,0];
								}
								else if( i==2 ){
									a = [2,3,4,0,1];
								}
								for(i=0;i<=n;i++){
									$('.section3-slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-2))+'%'},1000);
								}
								sFn();
								s[index]=1;
								navFn(index);
							}
							else if( index-3 == i ){
								if( i==0 ){
									a = [0,1,2,3,4];
								}
								else if( i==1 ){
									a = [1,2,3,4,0];
								}
								for(i=0;i<=n;i++){
									$('.section3-slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-3))+'%'},1000);
								}
								sFn();
								s[index]=1;
								navFn(index);
							}
							else if( index-4 == i ){
								a = [0,1,2,3,4];
								for(i=0;i<=n;i++){
									$('.section3-slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-4))+'%'},1000);
								}
								sFn();
								s[index]=1;
								navFn(index);
							}
						}
						else if( index < i ){
							if( index == i-1 ){
								prevSlideFn();
							}
							else if( index == i-2 ){
								if( i==4 ){
									b = [4,3,2,1,0];
								}
								else if( i==3 ){
									b = [3,2,1,0,4];
								}
								else if( i==2 ){
									b = [2,1,0,4,3];
								}
								j=1;
								k=3;
								sFn();
								s[index]=1;
								navFn(index);
								for(i=0;i<=n;i++){
									j--;
									k--;
									$('.section3-slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},1000);
								}
							}
							else if( index == i-3 ){
								if( i==4 ){
									b = [4,3,2,1,0];
								}
								else if( i==3 ){
									b = [3,2,1,0,4];
								}
								j=1;
								k=4;
								sFn();
								s[index]=1;
								navFn(index);
								for(i=0;i<=n;i++){
									j--;
									k--;
									$('.section3-slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},1000);
								}
							}
							else if( index == i-4 ){
								b = [4,3,2,1,0];
								j=1;
								k=4;
								sFn();
								s[index]=1;
								navFn(index);
								for(i=0;i<=n;i++){
									j--;
									k--;
									$('.section3-slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},1000);
								}
							}
						}
					}
				}
			}
		});
	});
	
	$('.section3-nextBtn-wrap').on({
		click: function(){
			nextSlideFn();
		}
	});
	
	$('.section3-prevBtn-wrap').on({
		click: function(){
			prevSlideFn();
		}
	});
	
	function nextSlideFn(){
		for(i=0;i<=n;i++){
			if( s[i]==1 ){
				if( i == n ){
					nextSide(0);
					break;
				}
				else{
					nextSide(i+1);
					break;
				}
			}
		}
	}
	
	function prevSlideFn(){
		for(i=0;i<=n;i++){
			if( s[i]==1 ){
				if( i == 0 ){
					prevSide(n);
					break;
				}
				else{
					prevSide(i-1);
					break;
				}
			}
		}
	}
	
	function nextSide(z){
		sFn();
		s[z]=1;
		navFn(z);
		if( z==0 ){
			a = [4,0,1,2,3];
		}
		else if( z==1 ){
			a = [0,1,2,3,4];
		}
		else if( z==2 ){
			a = [1,2,3,4,0];
		}
		else if( z==3 ){
			a = [2,3,4,0,1];
		}
		else if( z==4 ){
			a = [3,4,0,1,2];
		}
		for(i=0;i<=n;i++){
			$('.section3-slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-1))+'%'},1000);
		}
	}

	function prevSide(z){
		sFn();
		s[z]=1;
		navFn(z);
		if( z==4 ){
			b = [0,4,3,2,1];
		}
		else if( z==3 ){
			b = [4,3,2,1,0];
		}
		else if( z==2 ){
			b = [3,2,1,0,4];
		}
		else if( z==1 ){
			b = [2,1,0,4,3];
		}
		else if( z==0 ){
			b = [1,0,4,3,2];
		}
		j=1;
		k=2;
		for(i=0;i<=n;i++){
			j--;
			k--;
			$('.section3-slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},1000);
		}
	}
	
}); //section3-Slide.js