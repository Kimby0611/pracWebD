var slide = $('.slide > img');
var sno = 0;
var eno = slide.length - 1;
console.log(sno, eno);
var timer = setInterval('autoslide()', 3000);

function autoslide () {
    $(slide[sno]).stop().animate({
        opacity: 0,
        left: '100%'
    }, 1000, function () {
        $(this).css({left: "-100%"})
    });
    sno ++;
    if (sno > eno) {    
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        opacity: 1,
        left: 0
    }, 1000)
}