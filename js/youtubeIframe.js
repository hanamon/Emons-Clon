$(function(){ //youtubeIframe.js
	
	// Video Box 높이 자동 설정
	var winW = 0;
	var videoBoxH = 0;
	
	resizeVideoBoxFn();
	setInterval(resizeVideoBoxFn, 100);
	
	$(window).resize(function(){
		resizeVideoBoxFn();
	});
	
	function resizeVideoBoxFn(){
		winW = $(window).innerWidth();
		
		if( winW > 1210 ){
			videoBoxH = 605*0.5625;
			$('#section6>div>ul'  ).css({height:videoBoxH});
			$('.section6-cf-video').css({height:videoBoxH});
		}
		else{
			videoBoxH = winW*0.5625;
			$('#section6>div>ul'  ).css({height:'auto'});
			$('.section6-cf-video').css({height:videoBoxH});
		}
	}	
	
}); //youtubeIframe.js
	
/*------------------------------------------------------------------------------------------*/
	youtubeOnloadFn(); //YouTube loading
	
	function youtubeOnloadFn(){
		if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vfl_QvS8o/www-widgetapi.js';a.async = true;var c = document.currentScript;if (c) {var n = c.nonce || c.getAttribute('nonce');if (n) {a.setAttribute('nonce', n);}}var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}
	}

	//YouTube 메인 함수 실행	
	window.onload = function(){	
		youtubeObj();	
	}

		function youtubeObj(){

			var videos = document.getElementsByClassName("youtub-wrap");
			for(var i=0; i < videos.length; i++){
			var player;
			var youtube = videos[i];
			var iframe = document.createElement("iframe");
			var geturl = youtube.getAttribute("data-url")
				iframe.setAttribute("src",
					  "https://www.youtube.com/embed/" + geturl
					+ "?&enablejsapi=1&html5-1");
				iframe.setAttribute('frameborder', 0);
				youtube.appendChild(iframe);
				youtube.onPlayerReady = function(event){
					event.target.mute();
				}
				player = new YT.Player(youtube, {
					playerVars: {
						'width' : '100%',
						'height' : '100%',
						'autoplay' : 1,
						'controls' : 0,
						'autohide' : 1,
						'wmode': 'opaque',
						'showinfo' : 0,
						'loop' : 1,
						'mute' : 0,
						'rel' : 0,
						'playlist' : geturl
					},
					videoId: geturl,
					events: {
						'onReady': youtube.onPlayerReady
					}
				});
				
			}
			
			t=1;
			//button 제어  /////////////////////////////////
			$('.youtub-bg').on({
				click:	function(){
					//player.playVideo();//재생
					//player.stopVideo();//정지
					if(t==0){	
						player.stopVideo();//일시정지
						player.pauseVideo();//일시정지
						$(this).css({opacity:1});
						t=1;
					}
					else{
						player.playVideo();//재생
						$(this).css({opacity:0});
						t=0;
					}
				}
			});
			
		} //youtubeObj() 메인함수 끝
/*------------------------------------------------------------------------------------------*/