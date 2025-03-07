$(function () {
    $('.menu').hover(function () {
        $(this).find('.submenu').stop().slideDown()
    },
        function() {
            $('.submenu').stop().slideUp()
        })
})