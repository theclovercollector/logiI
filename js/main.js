$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 300){
            $('.gotop').fadeIn()
        }else{
            $('.gotop').fadeOut()
        }
    })

    $('.gotop').click(function(e){
        e.preventDefault()
        $('html, body').stop().animate({
            scrollTop : 0
        }, 500)
    })

    $('.CVS').mouseenter(function(){
        $('.reserve_icon_hover').show()
    })
    $('.CVS').mouseleave(function(){
        $('.reserve_icon_hover').hide()
    })

})