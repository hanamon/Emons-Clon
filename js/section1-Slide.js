$(function(){ //section1-Slide.js
	
	var j = k = 0;
	var n = $('.section1-slide').length-1; 
	var s=[], a=[], b=[];
	var t = 0;
	var setId = 0;
	var t1 = t2 = 0;
	
	function sFn(){
		for(i=0;i<=n;i++){ s[i]=0; }
	}
	sFn();
	s[0]=1;
	navFn(0);
	
	autoPlay('_mouseleave');
	
	$('.section1-slide-wrap').on({
		swipeleft: function(){
			nextSlideFn();
		},
		swiperight: function(){
			prevSlideFn();
		}
	});
	
	function autoPlay(z){
		if( t2==0 ){
			if( z=='_mouseleave' || z=='_play' ){
				setId = setInterval(nextSlideFn, 4000);
			}
		}
	}
	
	$('.section1-stopBtn').on({
		click: function(){
			if( t1==0 ){
				$(this).find('img').attr('src', 'img/play_Btn.png');
				clearInterval(setId);
				t1=1;
				t2=1;
			}
			else{
				$(this).find('img').attr('src', 'img/stop_Btn.png');
				t1=0;
				autoPlay('_play');
			}
		}
	});
	
	$('.section1-nextBtn, .section1-prevBtn, .section1-stopBtn').on({
		mouseenter: function(){
			clearInterval(setId);
		},
		mouseleave: function(){
			if( t1==0 ){
				t2=0;
				autoPlay('_mouseleave');
			}
		}
	});
	
	function navFn(z){
		for(i=0;i<=n;i++){
			if( s[i]==1 ){
				$('.setion1NavBtn').css({background:'#7a7a7a'});
				$('.setion1NavBtn').eq(z).css({background:'#1b2265'});
			}
		}
	}
	
	$('.setion1NavBtn').each(function(index){
		$(this).on({
			click: function(){
				for(i=0;i<=n;i++){
					if( s[i]==1 ){
						if( index > i ){
							if( index-1 == i ){
								nextSlideFn();
							}
							else if( index-2 == i ){
								if( i == 0 ){
									a = [0,1,2,3,4];
								}
								else if( i == 1 ){
									a = [1,2,3,4,0];
								}
								else if( i == 2 ){
									a = [2,3,4,0,1];
								}
								for(i=0;i<=n;i++){
									$('.section1-slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-2))+'%'},1000);
								}
								sFn();
								s[index]=1;
								navFn(index);
							}
							else if( index-3 == i ){
								if( i == 0 ){
									a = [0,1,2,3,4];
								}
								else if( i == 1 ){
									a = [1,2,3,4,0];
								}
								for(i=0;i<=n;i++){
									$('.section1-slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-3))+'%'},1000);
								}
								sFn();
								s[index]=1;
								navFn(index);
							}
							else if( index-4 == i ){
								for(i=0;i<=n;i++){
									$('.section1-slide').eq(i).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-4))+'%'},1000);
								}
								sFn();
								s[index]=1;
								navFn(index);
							}
						}
						else if( index < i ){
							if( index+1 == i ){
								prevSlideFn();
							}
							else if( index+2 == i ){
								if( i == 4 ){
									b = [4,3,2,1,0];
								}
								else if( i == 3 ){
									b = [3,2,1,0,4];
								}
								else if( i == 2 ){
									b = [2,1,0,4,3];
								}
								j = 1;
								k = 3;
								for(i=0;i<=n;i++){
									j--;
									k--;
									$('.section1-slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},1000);
								}
								sFn();
								s[index]=1;
								navFn(index);
							}
							else if( index+3 == i ){
								if( i == 4 ){
									b = [4,3,2,1,0];
								}
								else if( i == 3 ){
									b = [3,2,1,0,4];
								}
								j = 1;
								k = 4;
								for(i=0;i<=n;i++){
									j--;
									k--;
									$('.section1-slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},1000);
								}
								sFn();
								s[index]=1;
								navFn(index);
							}
							else if( index+4 == i ){
								b = [4,3,2,1,0];
								j = 1;
								k = 5;
								for(i=0;i<=n;i++){
									j--;
									k--;
									$('.section1-slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},1000);
								}
								sFn();
								s[index]=1;
								navFn(index);
							}
						}
					}
				}
			},
			mouseenter: function(){
				$(this).css({background:'#1b2265'});
				if( $(window).innerWidth() > 760 ){
					$(this).parent().prev('a').show();
				}
			},
			focusin: function(){
				$(this).css({background:'#1b2265'});
				if( $(window).innerWidth() > 760 ){
					$(this).parent().prev('a').show();
				}
			},
			focusout: function(){
				for(i=0;i<=n;i++){
					if( s[i]==1 ){
						if( index == i ){
							$(this).css({background:'#1b2265'});
						}
						else{
							$(this).css({background:'#7a7a7a'});
						}
					}
				}
				$(this).parent().prev('a').hide();
			}
		});
	});
	
	$('.section1-nav-wrap>ul>li').each(function(index){
		$(this).on({
			mouseleave: function(){
				for(i=0;i<=n;i++){
					if( s[i]==1 ){
						if( index == i ){
							$(this).css({background:'#1b2265'});
						}
						else{
							$(this).find('.setion1NavBtn').css({background:'#7a7a7a'});
						}
					}
				}
				$(this).children('a').hide();
			}
		});
	});
	
	$('.section1-nextBtn').on({
		click: function(){
			nextSlideFn();
		}
	});
	
	$('.section1-prevBtn').on({
		click: function(){
			prevSlideFn();
		},
		focusin: function(){
			$('.header-Main-menu>li').children('span').removeClass('addMainMenuBtn');
			$('.header-Main-menu>li').find('div').hide();
		}
	});
	
	function nextSlideFn(){
		for(i=0;i<=n;i++){
			if( s[i] == 1 ){
				if( i == n ){
					nextSlide(0);
					break;
				}
				else if( i != n ){
					nextSlide(i+1);
					break;						
				}
			}
		}
	}
	
	function prevSlideFn(){
		for(i=0;i<=n;i++){
			if( s[i] == 1 ){
				if( i == 0 ){
					prevSlide(n);
					break;
				}
				else if( i != 0 ){
					prevSlide(i-1);
					break;						
				}
			}
		}
	}
	
	function nextSlide(z){
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
			$('.section1-slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-1))+'%'},1000);
		}
	}
	
	function prevSlide(z){
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
		j = 1;
		k = 2;
		for(i=0;i<=n;i++){
			j--;
			k--;
			$('.section1-slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},1000);
		}
	}
	
}); //section1-Slide.js

































