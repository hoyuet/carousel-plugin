// JavaScript Document
;(function(){
	$.fn.myCarousel=function(w,h){
		w=w||640;
		h=h||270;
		var now=0;
		var timer=null;

		$('.myCarousel').css({
			width:w+'px',
			height:h+'px'
		});
		$('.myCarousel ul').css({
			width:w*$('.myCarousel ul li').length+'px'
		});
		$('.myCarousel ul li').css({
			width:w+'px'
		});
		$('.prev').css({
			lineHeight:h+'px'
		});
		$('.next').css({
			lineHeight:h+'px'
		});
		if($('.myCarousel ul li').length==1){
			$('.prev').hide();
			$('.next').hide();
			$('.myCarousel ol').hide();
		}
		//点击播放
		$('.myCarousel ol li').each(function(i,t){
			$(this).click(function(){
				now=i;
				$('.myCarousel ol li').removeClass('on');
				$(this).addClass('on');
				$('.myCarousel ul').css({
					left:-i*$('.myCarousel ul li').eq(0).width()+'px'
				});
			});
		});
		// 自动播放
		timer=setInterval(prev,1300);
		$('.myCarousel').mouseenter(function(){
			$('.prev').addClass('on');
			$('.next').addClass('on');
			clearInterval(timer);
		});
		$('.myCarousel').mouseleave(function(){
			$('.prev').removeClass('on');
			$('.next').removeClass('on');
			// 自动播放
			timer=setInterval(prev,1300);
		});
		// 向前播放
		$('.prev').click(prev);
		// 向后播放
		$('.next').click(next);
	// 自动播放函数
		function prev(){
			now--;
			if(now==-1){
				now=$('.myCarousel ol li').length-1;
			}
			$('.myCarousel ol li').removeClass('on');
			$('.myCarousel ol li').eq(now).addClass('on');
			$('.myCarousel ul').css({
				left:-now*$('.myCarousel ul li').eq(0).width()+'px'
			});

		};
		function next(){
			now++;
			if(now==$('.myCarousel ol li').length){
				now=0;
			}
			$('.myCarousel ol li').removeClass('on');
			$('.myCarousel ol li').eq(now).addClass('on');
			$('.myCarousel ul').css({
				left:-now*$('.myCarousel ul li').eq(0).width()+'px'
			});
		}
	}
})();