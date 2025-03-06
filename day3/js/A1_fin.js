//변수 선언
var slide = $('.slide');
var sno = 0;
var eno = slide.length - 1;
var tiemr = setInterval('autoslide()', 3000);

//메뉴 슬라이드
$(function () {
    $('header > nav').hover(function () {
        $(this).find('.submenu').stop().slideDown(500)
    },
        function () {
            $('.submenu').stop().slideUp(500)
        })
});

//이미지 슬라이드
function autoslide () {
    $(slide[sno]).stop().animate({
        left: '-100%'
    }, 1000, function () {
        $(this).css({left: "100%"});
    });
    sno ++;
    if (sno > eno) {
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        left: '0'
    }, 1000)
}