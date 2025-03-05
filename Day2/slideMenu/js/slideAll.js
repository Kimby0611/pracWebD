$(function () {
    $('header > nav').hover(function () {
        $('.submenu, .navBg').stop().slideDown()
    },
        function () {
            $('.submenu, .navBg').stop().slideUp(  )
        })
})