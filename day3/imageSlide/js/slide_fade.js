var slide = $('.slide > img');
var sno = 0;
var eno = slide.length - 1;
console.log(sno, eno);
var timer = setInterval('autoslide()', 3000);

function autoslide () {
    $(slide[sno]).stop().animate({
        opacity: 1
    }, 1000);
    sno ++;
    if (sno > eno) {
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        opacity: 1
    }, 1000)
}