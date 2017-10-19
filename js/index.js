// 设置轮播图样式

	//定义循环变量
	var m=1;
	//定时函数
	function runPlay(){
		if(m > 3){
			m=0;
		}
		controlImage(m);
		m++;
	}
	var timer=setInterval(runPlay,3000);
	//滑过轮播图，定时停止，离开定时继续
	$(".naver").mouseenter(function(){
		clearInterval(timer);
		//显示按钮
		prev.style.display="block";
		next.style.display="block";
	}).mouseleave(function(){
		timer=setInterval(runPlay,3000);
		//隐藏按钮
		prev.style.display="none";
		next.style.display="none";
	})

	//点击向下的按钮
	$("#next").click(function(){
		if(m > 3){
			m=0;
		}
		controlImage(m);
		m++;
	})

	//点击向上的按钮
	$("#prev").click(function(){
		m-=2;
		if(m < 0){
			m=3;
		}
		controlImage(m);
		m++;
	})

	$(".icon-list span").mouseenter(function(){
		controlImage($(this).index());
		// m = $(this).index() + 1;
	})

	//控制图片的变化
	function controlImage(n){
		$(".images img").removeClass("current").eq(n).addClass("current");
		$(".icon-list span").removeClass("current").eq(n).addClass("current");
	}



// 固定侧边栏
$(function(){
	// 打开在线服务
	$(".fix-box1 a").click(function(){
		$(this).siblings(".fix-help").show();
	})

	// 关闭在线服务
	$(".guan a").click(function(){
		$(this).parent().parent().hide();
	})

	// 随着鼠标移动热门咨询的里的div随着a标签而移动
	$(".wenti a").mouseover(function(){
		$(this).addClass("curr");
		$(this).parent(".wenti").siblings(".wen-li").children(".wen-li div").eq($(this).index()).css("display","block").siblings().css("display","none");

	}).mouseout(function(){
		$(this).removeClass("curr");
	})
})

//文字特效
//3d效果
$(document).ready(function() {
	$("#cs-text1").lettering().children('span').wrap('<span />');
});
// 可以上下打开的文字
$(document).ready(function() {
	$(".cs-cut").lettering('words');
});

// 公用样式
(function($){
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
			});	
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},
		
		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);