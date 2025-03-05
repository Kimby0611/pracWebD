$(function () {
    $('.menu').hover(function () {
        $(this).find('.submenu').stop().fadeIn()
    },
        function() {
            $('.submenu').stop().fadeOut()
        })
})