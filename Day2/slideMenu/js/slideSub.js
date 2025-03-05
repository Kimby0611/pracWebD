$(function () {
    $('header > nav').hover(function () {
        $(this).find('.submenu').stop().slideDown(500)
    },
        function () {
            $('.submenu').stop().slideUp(500)
        })
})