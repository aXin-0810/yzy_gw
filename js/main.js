$(function(){
	// 手机端顶部导航按钮开关
    $('.nav-btn').click(function(){
        $('.aside').slideToggle();
        $(".gray1").click();
        $('.aside-cover').fadeToggle();
	});
	
	// 遮罩
    $('.aside-cover').click(function () {
        $('.aside').slideToggle();
        $(".gray1").click();
        $('.aside-cover').fadeToggle();
	});

    /*侧边栏*/
    $(".gray,.gray1").css({"height":$(document).height()});
    $(".navi li").on("click",function(){
        var index=$(this).index();
        var $this=$(this);
        var leng=$(".navi li").length;
		var docObj = $(".left-nav").eq(index-3);
        if(index>=3 && index<leng){
            if($(this).hasClass('activ')){
                $("body").removeClass('bodyH');
                $(this).removeClass('activ')
                $(this).find(".closes").css({"transform":"scale(0)","opacity":"0","-webkit-transform":"scale(0)"}).siblings('.icon').css({"transform":"scale(1)","opacity":"1","-webkit-transform":"scale(1)"})
                $(".left-nav-box").css({"transform":"translate(-160%,0)","-webkit-transform":"translate(-160%,0)"});
                docObj.css({"transform":"translate(-160%,0)","-webkit-transform":"translate(-160%,0)"});
                docObj.find("h2").css({"transform":"translate(-160%,0)","-webkit-transform":"translate(-160%,0)"});
                docObj.find("a").css({"transform":"translate(-160%,0)","-webkit-transform":"translate(-160%,0)"});
                $(".gray1").fadeOut();
            }else{
                $("body").addClass('bodyH');
                $(".gray1").fadeIn();
                $(this).addClass('activ')
                $(this).find(".closes").css({"transform":"scale(1)","opacity":"1","-webkit-transform":"scale(1)"}).siblings('.icon').css({"transform":"scale(0)","-webkit-transform":"scale(0)","opacity":"0"});
                $(this).siblings('li').removeClass('activ');
                $(this).siblings("li").find(".closes").css({"transform":"scale(0)","-webkit-transform":"scale(0)","opacity":"0"}).siblings('.icon').css({"transform":"scale(1)","-webkit-transform":"scale(1)","opacity":"1"});
                $(".left-nav-box").css({"transform":"translate(0,0)","-webkit-transform":"translate(0,0)"});
                docObj.siblings('.left-nav').css({"transform":"translate(-160%,0)","-webkit-transform":"translate(-160%,0)"});
                docObj.css({"transform":"translate(0,0)","-webkit-transform":"translate(0,0)"});
                docObj.find("h2").css({"transform":"translate(0,0)","-webkit-transform":"translate(0,0)","transition-delay":"0.1s","-webkit-transition-delay":"0.1s"});
                docObj.find("a").each(function(i, el) {
                    var num=i*0.1+0.2;
                    $(this).css({"transform":"translate(0,0)","-webkit-transform":"translate(0,0)","transition-delay":""+num+"s","-webkit-transition-delay":""+num+"s"});
                });
                if($(window).width()<650){
                    $(".left-nav-box").css({"transform":"translate(50%,0)","-webkit-transform":"translate(50%,0)"});
                    docObj.siblings('.left-nav').css({"transform":"translate(-160%,0)","-webkit-transform":"translate(-160%,0)"});
                    docObj.css({"transform":"translate(0,0)","-webkit-transform":"translate(0,0)"});
                    docObj.find("h2").css({"transform":"translate(0,0)","-webkit-transform":"translate(0,0)","transition-delay":"0.1s","-webkit-transition-delay":"0.1s"});
                    docObj.find("a").each(function(i, el) {
                        var num=i*0.1+0.2;
                        $(this).css({"transform":"translate(0,0)","-webkit-transform":"translate(0,0)","transition-delay":""+num+"s","-webkit-transition-delay":""+num+"s"});
                    });
                }
                docObj.siblings('.left-nav').find("h2").css({"transform":"translate(-160%,0)","-webkit-transform":"translate(-160%,0)"});
                docObj.siblings('.left-nav').find("a").css({"transform":"translate(-160%,0)","-webkit-transform":"translate(-160%,0)"});
            }
        }

        $(".gray1").click(function(){
            $("body").removeClass('bodyH');
            $this.removeClass('activ');
            $this.find(".closes").css({"transform":"scale(0)","-webkit-transform":"scale(0)","opacity":"0"}).siblings('.icon').css({"transform":"scale(1)","-webkit-transform":"scale(1)","opacity":"1"});
            $(".left-nav-box").css({"transform":"translate(-160%,0)","-webkit-transform":"translate(-160%,0)"});
            docObj.css({"transform":"translate(-160%,0)","-webkit-transform":"translate(-160%,0)"});
            docObj.find("h2").css({"transform":"translate(-160%,0)","-webkit-transform":"translate(-160%,0)"});
            docObj.find("a").css({"transform":"translate(-160%,0)","-webkit-transform":"translate(-160%,0)"});
            $(".gray1").hide();
        })

	})
});

// 首页执行
function homePage(){
	var size = 0;
	homra();
	Resize();
	toLeftNRight();

	$('.swiper-wrapper-news').on('touchend', function() {
		setTimeout(function() {
			$('.new-swiper .swiper-pagination-bullet')
			.removeClass('swiper-pagination-bullet-active')
			.eq($('.swiper-wrapper-news .swiper-slide')
			.index($('.swiper-wrapper-news .swiper-slide-active')))
			.addClass('swiper-pagination-bullet-active');
		}, 300);
	});

	$(window).resize(function() {
		setTimeout(function() {
			Resize();
			$('.swiper-wrapper-news').css({
				'transform': 'translate3d(0px, 0px, 0px)'
			});
		}, 100);
		return false;
	});

	// 首页展示轮播
	function Resize() {
		var w = $(window).width();
		if (w > 1400) {
			mySwiper = new Swiper('.new-swiper', {
				init: true,
				slidesPerView: 5,
				spaceBetween: 20,
				pagination: '.new-pagination',
				paginationClickable: true,
				prevButton: '.new-prev',
				nextButton: '.new-next',
			})
		} else if (960 < w && w <= 1400) {
			mySwiper = new Swiper('.new-swiper', {
				init: true,
				slidesPerView: 4,
				spaceBetween: 20,
				pagination: '.new-pagination',
				paginationClickable: true,
				prevButton: '.new-prev',
				nextButton: '.new-next',
			})
		} else if (960 >= w && w >= 780) {
			var a = Math.ceil(size / 4);
			mySwiper = new Swiper('.new-swiper', {
				slidesPerView: 3,
				spaceBetween: 20,
				pagination: '.new-pagination',
				paginationClickable: true,
				prevButton: '.new-prev',
				nextButton: '.new-next',
			})
		} else if (780 >= w && w >= 650) {
			var a = Math.ceil(size / 4);
			mySwiper = new Swiper('.new-swiper', {
				slidesPerView: 2,
				spaceBetween: 20,
				pagination: '.new-pagination',
				paginationClickable: true,
				prevButton: '.new-prev',
				nextButton: '.new-next',
			})
		} else if (w < 650) {
			mySwiper = new Swiper('.new-swiper', {
				slidesPerView: 1,
				spaceBetween: 20,
				pagination: '.new-pagination',
				paginationClickable: true,
				prevButton: '.new-prev',
				nextButton: '.new-next',
			})
		} else {
			mySwiper = new Swiper('.new-swiper', {
				slidesPerView: 4,
				spaceBetween: 20,
				pagination: '.new-pagination',
				paginationClickable: true,
				prevButton: '.new-prev',
				nextButton: '.new-next',
			})
		}
	}

	// 首页banner轮播
	function homra() {
		var swiper1 = new Swiper('.banner-swiper', {
			autoplay: 5000,
			loop: true,
			pagination: '.banner-pagination',
			paginationClickable: true,
			prevButton: '.banner-prev',
			nextButton: '.banner-next',
		});
	}

	// 
	function toLeftNRight(){
		var speed = 30 //速度数值越大速度越慢
		var colee_left2 = document.getElementById("colee_left2");
		var colee_left1 = document.getElementById("colee_left1");
		var colee_left = document.getElementById("colee_left");
		var colee_left_Table_width = $("#tenants-table").outerWidth();
		var colee_left_width = $("#colee_left").outerWidth();
		var isToLeft = true;
		var cloneElement=$( ".colee_leftWrapper:first-child" ).clone(true);
		colee_left2.innerHTML = colee_left1.innerHTML;
		function Marquee3() {
			if(colee_left_Table_width > colee_left_width){
				colee_left.scrollLeft++;
				isToLeft = true;
				if (colee_left.scrollLeft + colee_left_width >= 2*colee_left_Table_width){ //offsetWidth 是对象的可见宽度
					colee_left.scrollLeft = colee_left_Table_width - colee_left_width;
					$(".colee_leftTr").append(cloneElement);
				}
			}		

		};
		var toLeftTimer = setInterval(Marquee3, speed);
		colee_left.onmouseover = function () {
			clearInterval(toLeftTimer);
		}
		colee_left.onmouseout = function () {
			if(isToLeft){
				toLeftTimer = setInterval(Marquee3, speed);
			}else{
			toRightTimer = setInterval(Marquee4, speed);
			}
			
		}
	}
}

