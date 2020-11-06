(function ($) {
    sct = $(this).scrollTop();
    // h1 클릭시 이벤트
    $(".main_s1_p1 > h1 > a").on("click", function(e) {
        e.preventDefault()
        $('.about_container').toggleClass('on')
        $(".main_s1_p1").toggleClass('on')
        if ( $('.main_s1_p1').hasClass('on') ) {
            $('.main_s1_p1').animate({
                width: '100%'
            }, 500, function() {
                $('.semi_intro').css({
                    display:'block',
                })
            })
            $('.semi_intro').animate({
                left: '150px'
            }, 500, function() {
                $('.down_arrow').css({
                    opacity: '1'
                })
            })

            $('#intro').css({
                paddingBottom:'0px'
            })
            

        } else {
            $('.main_s1_p1').animate({
                width:'50%'
            }, 500)
            $('.semi_intro').css({
                display:'none'
            })
            $('.semi_intro').animate({
                left: '50px'
            }, 500, function() {
                $('.down_arrow').css({
                    opacity: '0'
                })
            })


            $('#intro').css({
                paddingBottom:'70px'
            })
        }

        
       
    });

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