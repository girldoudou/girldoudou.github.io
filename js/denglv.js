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


function checkUser(){
    if($("#user").val().search(/^\w{4,12}$/)==-1){
     $("#userInfo").text("用户名格式必须是4~12位的数字、字母、下划线");
     $("#userInfo").css({"color":"red"});
     return false;
    }else{
        $("#userInfo").text("用户名可用");
        $("#userInfo").css({"color":"green"});
        return true;
    }
  }


    function checkPwd(){
    if($("#pwd").val().search(/^[a-zA-Z0-9]{4,10}$/)==-1){
     $("#pwdInfo").text("密码不能含有非法字符，长度在4-10之间");
     $("#pwdInfo").css({"color":"red"});
     return false;
    }else{
        $("#pwdInfo").text("用户名可用");
        $("#pwdInfo").css({"color":"green"});
        return true;
    }
  }
//验证整个表单
  function checkForm(){
      return checkUser() && checkPwd();
  }