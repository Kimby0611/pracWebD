// slide menu
$(function () {
    $('.menu').hover(function () {
        $(this).find('.submenu').stop().fadeIn()
    }, 
        function () {
            $('.submenu').stop().fadeOut()
        })
})

//tab
$('#tab1').mouseover(function () {
    $(this).css("cursor", "pointer");
    $(this).css({
        "background-color" : "white",
        "color" : "black",
        "font-weight" : "bold",
        "font-size" : "12px"
    });
});
$('#tab1').mouseleave(function () {
    $(this).css("cursor", "none");
    $(this).css({
        "background-color" : "black",
        "color" : "white",
        "font-weight" : "normal",
        "font-size" : "12px"
    });
});
$('#tab1').click(function (e) {
    $('#info1').show();
    $('#info2').hide();
});
$('#tab2').click(function (e) {
    $('#info1').hide();
    $('#info2').show();
})
$('#tab2').on(
    {
        mouseover: function() {
            $(this).css({
                "cursor" : "pointer",
                "background-color" : "white",
                "color" : "black",
                "font-weight" : "bold",
                "font-size" : "12px"
            })
        },
        mouseleave: function () {
            $(this).css({
                "cursor" : "pointer",
                "background-color" : "black",
                "color" : "white",
                "font-weight" : "normal",
                "font-size" : "12px"
            })
        }
    }
)

//좌우 슬라이드
var slide = $('.imgslide > img');
var sno = 0;
var eno = slide.length - 1;
console.log(sno, eno)
var timer = setInterval('autoslide()', 3000);

function autoslide () {
    $(slide[sno]).stop().animate({
        right: '100%'
    }, 1000, function () {
        $(this).css({right: "-100%"});
    });
    sno ++;
    if (sno > eno) {
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        right: '0'
    }, 1000)
}

//페이드인
var slide2 = $('.con2 > img');
var sno2 = 0;
var eno2 = slide.length - 1;
var timer2 = setInterval('autoslide2()', 1000);

function autoslide2 () {
    $(slide2[sno2]).stop().animate({
        opacity: 1
    }, 1000);
    sno2 ++;
    if (sno2 > eno2) {
        sno2 = 0;
    }
    $(slide2[sno2]).stop().animate({
        opacity: 1
    }, 1000)
}