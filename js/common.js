(function($){
    sct = $(this).scrollTop();
    // h1 클릭시 이벤트
    $(".main_s1_p1 > h1 > a").on("click", function () {
        for (var i = 1; i < 52; i++) {
          $(".main_s1_p2").animate({ width: "-=" + 1 + "%" }, 1);
          $(".main_s1_p1").animate({ width: "+=" + 1 + "%" }, 1);
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