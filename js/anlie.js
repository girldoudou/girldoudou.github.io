// 图片滚动
/* window.onload比 $(function(){}) 加载的更晚一些，*/
window.onload=function(){
	/*计算一个w的宽度w总宽度*/
	var w=0;
	/*先通过each遍历所有的li元素，计算出它们宽度之和*/
	$(".scroll-box .img-list").each(function(){
		w+=$(this).outerWidth(true);
	})
	/*拷贝一份图片到现有图片的后面*/
	$(".scroll-box .img-list").clone().appendTo($(".scroll-box .scroll-wapper"));
	/*设置10秒钟滚动完界面上面现有的图片，滚动完毕后，通过设置content的left值，将其整体拉回到初始状态。然后递归调用run方法，完成无限滚动。*/
	scrollRun(10000);
	function scrollRun(interval){
		$(".scroll-box .scroll-wapper").animate({"left":-w},interval,"linear",function(){
			$(".scroll-box .scroll-wapper").css("left",0);
			scrollRun(10000);
		})
	}
		/*当鼠标经过滚动区域的时候，动画立刻停止; 当鼠标离开的时候，动画继续执行*/
		$(".scroll-box").mouseenter(function(){
			$(".scroll-box .scroll-wapper").stop();
		}).mouseleave(function(){//passedCourse滚过的距离
			var passedCourse= -parseInt($(".scroll-box .scroll-wapper").css("left"));
			var time=10000*(1-passedCourse/w);
			scrollRun(time);
		})
}

// 动画
// 鼠标滚动时需要的特效，元素上升
$(window).scroll(function(){
	if($("body").scrollTop()>$(".header").offset().top){
		$(".text-group").addClass("up");
	}
})
// 九宫格
$(function(){
	//box1  点击box1时box1变大，高度变成两个box的高度，吧box4-6宽缩小,box2和box3宽度变小，它们的位置发生变化
	$(".box1").mouseover(function(event){
		//stop(true，true)），由于两个都是true，所以点击发生时，animater跳到当前动画（动画1）的最终末尾效果位置，然后，全部动画停止
		$(".box1").stop(true,true).animate({width:"500px",height:"471px"},200);
		$(".box2").stop(true,true).animate({width:"335px",height:"228px",left:"515px",top:"0px"},200);
		$(".box3").stop(true,true).animate({width:"335px",height:"228px",left:"865px",top:"0px"},200);
		$(".box4").stop(true,true).animate({width:"218px",height:"228px",left:"515px",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"218px",height:"228px",left:"748px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"218px",height:"228px",left:"981px",top:"243px"},200);
		event.stopPropagation();//阻止事件冒泡
	})
	$(".box1").mouseout(function(event){
		// 鼠标离开box位置回到初始值
		$(".box1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},200);
		$(".box2").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"0"},200);
		$(".box3").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"0"},200);
		$(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
	})

	//box2
	$(".box2").mouseover(function(event){
		$(".box1").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"0"},200);
		$(".box2").stop(true,true).animate({width:"500px",height:"471px"},200);
		$(".box3").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"0"},200);
		$(".box4").stop(true,true).animate({width:"187px",height:"228px",left:"0",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"188px",height:"228px",left:"203px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"243px"},200);
		event.stopPropagation();//阻止事件冒泡
	})
	$(".box2").mouseout(function(event){
		$(".box1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},200);
		$(".box2").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"0"},200);
		$(".box3").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"0"},200);
		$(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
	})

	//box3
	$(".box3").mouseover(function(event){
		$(".box3").stop(true,true).animate({width:"500px",height:"471px",left:"700px",top:"0"},200);
		$(".box1").stop(true,true).animate({width:"335px",height:"228px",left:"0",top:"0"},200);
		$(".box2").stop(true,true).animate({width:"335px",height:"228px",left:"350px",top:"0"},200);
		$(".box4").stop(true,true).animate({width:"218px",height:"228px",left:"0",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"218px",height:"228px",left:"233px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"218px",height:"228px",left:"466px",top:"243px"},200);
		event.stopPropagation();
	})
	$(".box3").mouseout(function(event){
		$(".box1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},200);
		$(".box2").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"0"},200);
		$(".box3").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"0"},200);
		$(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
	})

	//box4
	$(" .box4").mouseover(function(event){
		$(".box4").stop(true,true).animate({width:"500px",height:"471px"},200);
		$(".box5").stop(true,true).animate({width:"335px",height:"228px",left:"515px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"335px",height:"228px",left:"865px",top:"243px"},200);
		$(".box7").stop(true,true).animate({width:"218px",height:"228px",left:"515px",top:"486px"},200);
		$(".box8").stop(true,true).animate({width:"218px",height:"228px",left:"748px",top:"486px"},200);
		$(".box9").stop(true,true).animate({width:"218px",height:"228px",left:"981px",top:"486px"},200);
		event.stopPropagation();
	})
	$(".box4").mouseout(function(event){
		$(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
		$(".box7").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"486px"},200);
		$(".box8").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"486"},200);
		$(".box9").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"486px"},200);
	})
	//box5
	$(".box5").mouseover(function(){
		$(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"500px",height:"471px"},200);
		$(".box6").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"243px"},200);
		$(".box7").stop(true,true).animate({width:"187px",height:"228px",left:"0",top:"486px"},200);
		$(".box8").stop(true,true).animate({width:"188px",height:"228px",left:"203px",top:"486px"},200);
		$(".box9").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"486px"},200);
		event.stopPropagation();
	})
	$(".box5").mouseout(function(event){
		$(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
		$(".box7").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"486px"},200);
		$(".box8").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"486"},200);
		$(".box9").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"486px"},200);
	})

	//box6
	$(".box6").mouseover(function(event){
		$(".box6").stop(true,true).animate({width:"500px",height:"471px",left:"700px",top:"243px"},200);
		$(".box4").stop(true,true).animate({width:"335px",height:"228px",left:"0px",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"335px",height:"228px",left:"350px",top:"243px"},200);
		$(".box7").stop(true,true).animate({width:"218px",height:"228px",left:"0px",top:"486px"},200);
		$(".box8").stop(true,true).animate({width:"218px",height:"228px",left:"233px",top:"486px"},200);
		$(".box9").stop(true,true).animate({width:"218px",height:"228px",left:"466px",top:"486px"},200);
		event.stopPropagation();    //  阻止事件冒泡
		
		
	})
	$(".box6").mouseout(function(event){
		$(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
		$(".box7").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"486px"},200);
		$(".box8").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"486px"},200);
		$(".box9").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"486px"},200);
	})

	//box7
	$(" .box7").mouseover(function(event){
		$(".box7").stop(true,true).animate({width:"500px",height:"471px",left:"0",top:"243px"},200);
		$(".box8").stop(true,true).animate({width:"335px",height:"228px",left:"515px",top:"486px"},200);
		$(".box9").stop(true,true).animate({width:"335px",height:"228px",left:"865px",top:"486px"},200);
		$(".box4").stop(true,true).animate({width:"218px",height:"228px",left:"515px",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"218px",height:"228px",left:"748px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"218px",height:"228px",left:"981px",top:"243px"},200);
		event.stopPropagation();
	})
	$(".box7").mouseout(function(event){
		$(".box7").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"486px"},200);
		$(".box8").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"486px"},200);
		$(".box9").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"486px"},200);
		$(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
	})


	//box8
	$(".box8").mouseover(function(){
		$(".box7").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"486px"},200);
		$(".box8").stop(true,true).animate({width:"500px",height:"471px",left:"405px",top:"243px"},200);
		$(".box9").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"486px"},200);
		$(".box4").stop(true,true).animate({width:"187px",height:"228px",left:"0",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"188px",height:"228px",left:"203px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"243px"},200);
		event.stopPropagation();
	})
	$(".box8").mouseout(function(event){
		$(".box7").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"486px"},200);
		$(".box8").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"486px"},200);
		$(".box9").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"486px"},200);
		$(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
	})


	//box9
	$(".box9").mouseover(function(event){
		$(".box7").stop(true,true).animate({width:"335px",height:"228px",left:"0px",top:"486px"},200);
		$(".box8").stop(true,true).animate({width:"335px",height:"228px",left:"350px",top:"486px"},200);
		$(".box9").stop(true,true).animate({width:"500px",height:"471px",left:"700px",top:"243px"},200);
		$(".box4").stop(true,true).animate({width:"218px",height:"228px",left:"0px",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"218px",height:"228px",left:"233px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"218px",height:"228px",left:"466px",top:"243px"},200);
		event.stopPropagation();    //  阻止事件冒泡
		
		
	})
	$(".box9").mouseout(function(event){
		$(".box7").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"486px"},200);
		$(".box8").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"486px"},200);
		$(".box9").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"486px"},200);
		$(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0",top:"243px"},200);
		$(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
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



// 改变字体颜色
	// var colors=['rgb('+(Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256))+')'];
	var colors=["red","cyan","blue","yellow","purple","orange","green"]
	var a=0;
	var f=setInterval("changeColor(a)",2000);
	function changeColor(i){
		$(".text-group").css("color",colors[i]);  
        if(a == colors.length - 1){  
            a = 0;  
        }else{  
            a++;  
        }  
    }  

	

