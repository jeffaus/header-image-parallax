if($('#banner').length) {
    $(window).scroll(function(){
        var st = $(window).scrollTop();
        var pe = st * 0.5;
        var ww = $(window).width();
        console.log();
        if(ww > 1023) {
            $('#banner > img').css('top', pe)
        } else {
            $('#banner > img').css('top', '')
        }
    });
    $(window).resize(function(){
        var ww = $(window).width()
        if (ww < 1024){
            $('#banner > img').css('top', '')
        }
    });
}
