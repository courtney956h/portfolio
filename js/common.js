(function($){
    sct = $(this).scrollTop();
    // h1 클릭시 이벤트
    $('.main_s1_p1 > h1 > a').on('click', function(){
        $('.main_s1_p1').stop().animate({
            width: '100%'
        }, 1000)
        $('.main_s1_p2').hide()
    })


    // 마우스 휠
    $('.section').on('mousewheel', function(e, wh){
        prev = $(this).prev().offset().top
        next = $(this).next().offset().top
        if ( wh > 0 ) {
           $('html, body').stop().animate({
               scrollTop: prev
           }, 800, 'linear')
        } else if ( wh < 0 ) {
            $('html, body').stop().animate({
                scrollTop: next
            }, 800, 'linear')
        }

    })


})(jQuery)