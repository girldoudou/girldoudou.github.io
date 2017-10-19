// 鼠标移动显示照片底下的文字离开时消失
$(function(){
	$(".do-zp1").mouseover(function(){
		$(".do-zp1").children("span").css("display","block");
		
	}).mouseout(function(){
		$(".do-zp1").children("span").css("display","none");
	})

	$(".do-zp2").mouseover(function(){
		$(".do-zp2").children("span").css("display","block");
		
	}).mouseout(function(){
		$(".do-zp2").children("span").css("display","none");
	})


	$(".do-zp3").mouseover(function(){
		$(".do-zp3").children("span").css("display","block");
	
	}).mouseout(function(){
		$(".do-zp3").children("span").css("display","none");
	})
})
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