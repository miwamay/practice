$(function(){
    // headerの高さ分の調節
    const headerHeight = $('#header').height();
    $('#MV').css('padding-top', headerHeight + 'px');

    // formへ飛ぶheader__Btnボタン
    $('a[href="#form"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHeight;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    // topボタン
    $('a[href="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    //  top資料請求ボタンの高さ調節
    //  失敗した方 / スクロールバー分のズレが生じる
    // $(window).resize(function() {
    //     var windowWidth = $(window).width();
    //     if (windowWidth >= 768) {
    //         $('#header__Btn').css('height', '');
    //     } else {
    //         $('#header__Btn').css('height', headerHeight);
    //     }
    // })
    
    //  上手くいった方
    $(window).resize(function() {
        var windowWidth = $(window).width();
        if (wndowWidth >= 768) {
            $('#header__Btn').css('height', '');
        }
        if (windowWidth < 768) {
            $('#header__Btn').css('height', headerHeight);
        }
    })

    // アコーディオン
    $('.qa__q').on('click', function () {
        /*クリックでコンテンツを開閉*/
        $(this).next().slideToggle(200);
        /*矢印の向きを変更*/
        $(this).toggleClass('open');
    });
});
