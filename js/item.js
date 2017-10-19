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


$(function(){  
 
  //判断浏览器是否支持placeholder属性
  supportPlaceholder='placeholder'in document.createElement('input'),
 
  placeholder=function(input){
 
    var text = input.attr('placeholder'),
    defaultValue = input.defaultValue;
 
    if(!defaultValue){
 
      input.val(text).addClass("phcolor");
    }
 
    input.focus(function(){
 
      if(input.val() == text){
   
        $(this).val("");
      }
    });
 
  

    input.blur(function(){
 
      if(input.val() == ""){
       
        $(this).val(text).addClass("phcolor");
      }
    });
 
    //输入的字符不为灰色
    input.keydown(function(){
  
      $(this).removeClass("phcolor");
    });
  };
 
  //当浏览器不支持placeholder属性时，调用placeholder函数
  if(!supportPlaceholder){
 
    $('input').each(function(){
 
      text = $(this).attr("placeholder");
 
      if($(this).attr("type") == "text"){
 
        placeholder($(this));
      }
    });
  }
 
});


// 鼠标移动出现淡黑色背景和白色的滚动条
$(function(){
	$(".item-do li .row2").hide();
	$(".item-do li").hover(function(){
		$(this).find(".row2").css("display","block")
		// $(this).find(".row2").stop().fadeTo(500,0.3);//fadeTo() 方法将被选元素的不透明度逐渐地改变为指定的值。
		$(this).find(".row2-text").stop().animate({left:'0'},{duration:500});
	},function(){
		$(this).find(".row2").css("display","none")
		// $(this).find(".row2").stop().fadeTo(500,0);
		$(this).find(".row2-text").stop().animate({left:'318'}, {duration: "fast"});
		$(this).find(".row2-text").animate({left:'-518'},{duration:0});
	})

})
