//자동실행
var slide = $('.slide > img');
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

//버튼 클릭시 자동실행
// var slide = $('.slide > img');
// var sno = 0;
// var eno = slide.length - 1;
// var timer = null;

// function autoslide() {
//     $(slide[sno]).stop().animate({
//         right: '100%'
//     }, 1000, function() {
//         $(this).css({right: "-100%"});
//     });
//     sno++;
//     if (sno > eno) {
//         sno = 0;
//     }
//     $(slide[sno]).stop().animate({
//         right: '0'
//     }, 1000);
// }

// function btn1() {
//     if (!timer) {
//         timer = setInterval(autoslide, 3000);
//     }
// }

// $('#startBtn').on('click', btn1);