(function ($) {
    sct = $(this).scrollTop();
    // h1 클릭시 이벤트
    $(".main_s1_p1 > h1 > a").on("click", function(e) {
        e.preventDefault()
        $(".main_s1_p1").toggleClass('on')
        $('.about_container').toggleClass('on')
        $('.portfolio_container').toggleClass('on')
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

    // // 섹션에 마우스휠 이벤트 연결
    $(".section").on("mousewheel", function (event, delta) {
        // 마우스 휠 올릴때
        if (delta > 0) {
            var prev = $(this).prev().offset().top
            $('html, body').stop().animate({
                scrollTop: prev
            }, 1000)
        // 마우스 휠 내릴때
        } else if (delta < 0) {
            var next = $(this).next().offset().top
            $('html, body').stop().animate({
                scrollTop: next
            }, 1000)
        }
    });

    // nav 클릭시 current 유지
    $('#footer .nav li a').on('click', function() {
        $('#footer .nav li a.current').removeClass('current')
        $(this).addClass('current')
    })

})(jQuery)