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
        "font-size" : "16px"
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
                "font-size" : "16px"
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