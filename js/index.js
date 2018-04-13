/*
* @Author: Administrator
* @Date:   2018-03-14 10:46:53
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-18 08:35:41
*/
var i=0;
var timer;
$(function(){
	var hour=parseInt($(".time span").eq(0).html());
	var minute=parseInt($(".time span").eq(1).html());
	var second=parseInt($(".time span").eq(2).html());

	setInterval(function(){
		second--;
		if(second>=0){
			$(".time span").eq(2).html(second>=10?second:'0'+second);
		}else if(second<0&&minute>0){
			minute--
			second=59;
			$(".time span").eq(1).html(minute);
			$(".time span").eq(2).html(second);
		}else if(minute==0&&second<0){
			hour--;
			minute=59;
			second=59;
			$(".time span").eq(0).html('0'+hour);
			$(".time span").eq(1).html(minute);
			$(".time span").eq(2).html(second);
		}
		
	},1000);
	$(".img .items li").hover(function(){clearInterval(timer)},function(){showtimer()});
	show();
	showtimer();
	$(".prev").click(function(){
		clearInterval(timer);
		if(i==0){
			i=5;
		}
		i--;
		show();
		showtimer();
	});
	$(".next").click(function(){
		clearInterval(timer);
		if(i==5){
			i=0;
		}
		i++;
		show();
		showtimer();
	})
	$(".btn_list ul li").hover(function(){
			// $(this).addClass('active').siblings().removeClass();
			i=$(this).index();
			
			show();
			clearInterval(timer);
	},function(){
			
			showtimer();
	});
});
function show(){
	$(".img .items li").eq(i).fadeIn(200).siblings().fadeOut(200);
	$(".btn_list ul li").eq(i).addClass('active').siblings().removeClass("active");

}
function showtimer(){
	timer=setInterval(function(){
		i++;
		if(5==i){
			i=0
		}
		show();
	},2000);

}