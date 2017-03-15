This is my custom width and height map carousel plugin
html:

"<div class="myCarousel">\
		<a href="javascript:;" class="prev">&lt;</a>\
		<a href="javascript:;" class="next">&gt;</a>\
		<ul class="myCarousel_content">
			<li class="on"><a href="#"><img src="img/1.jpg" /></a></li>\
			<li><a href="#"><img src="img/2.jpg" /></a></li>\
			<li><a href="#"><img src="img/3.jpg" /></a></li>\
		</ul>\
		<ol class="myCarousel_num">\
			<li class="on"><a href="javascript:;"></a></li>\
			<li><a href="javascript:;"></a></li>\
			<li><a href="javascript:;"></a></li>\
		</ol>/
	</div>\
	"

js:$('.myCarousel').myCarousel(w,h);
Note: the default value is 1 W 640px h; the default value is 270px; you can customize the carousel figure's width and height
2 should be written UL and ol
3 if you help, I hope you can look at star, grateful...	
