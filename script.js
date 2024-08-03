$(function(){

/*
 * リンクの遷移
 */
    $('a[href^="#"]').click(function () {
        // クリックしたaタグのリンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
        let target = $(href == "#" || href == "" ? "html" : href);
        // ページトップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
        // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        // urlが変化しないようにfalseを返す
        return false; 
    });

/*
 * ハンバーガーボタン
 */
    $('.hamburger').on('click', function() {
        // headerにopenクラスが存在する場合
        if ($('header').hasClass('open')) {
          // openクラスを削除
          // openクラスを削除すると、openクラスのCSSがはずれるため、
          // メニューが非表示になる
        $('header').removeClass('open');
    
        // headerにopenクラスが存在しない場合
        } else {
          // openクラスを追加
          // openクラスを追加すると、openクラスのCSSが適応されるため、
          // メニューが表示される
        $('header').addClass('open');
        }
    });

    $('#nav').on('click', function () {
        // openクラスを削除して、メニューを閉じる
        $('header').removeClass('open');
    });

    $('#nav a').on('click', function () {
        // openクラスを削除して、メニューを閉じる
        $('header').removeClass('open');
    });


/*
 * メニュータブ
 */
    function GethashID (hashIDName){
        if(hashIDName){
          //タブ設定
            $('.menu_flex li').find('a').each(function() { 
                var idName = $(this).attr('href'); 
                if(idName == hashIDName){ 
                    var parentElm = $(this).parent(); 
                    $('.menu_flex li').removeClass("active");
                    $(parentElm).addClass("active"); 
                    //表示させるエリア設定
                    $(".menu_list").removeClass("is_active"); 
                    $(hashIDName).addClass("is_active");
                }
            });
        }
    }

      //タブをクリックしたら
    $('.menu_flex a').on('click', function() {
        var idName = $(this).attr('href'); 
        GethashID (idName);
        return false;
    });
      // 上記の動きをページが読み込まれたらすぐに動かす
    $(window).on('load', function () {
        $('.menu_flex li:first-of-type').addClass("active");
        $('.menu_list:first-of-type').addClass("is_active"); 
        var hashName = location.hash; 
        GethashID (hashName);
    });

/*
 * トップページボタン
 */
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= 800){//上から800pxスクロールしたら
      $('#topPage').addClass('toTop');//#page-topについているUpMoveというクラス名を付与
      }else{
          $('#topPage').removeClass("toTop");//UpMoveというクラス名を除き
      }
    })

/*
 * フェードイン
 */
    $(window).scroll(function () {
        // fadeinクラスに対して順に処理を行う
        $(".fadein").each(function () {
          // スクロールした距離
        let scroll = $(window).scrollTop();
          // fadeinクラスの要素までの距離
        let target = $(this).offset().top;
          // 画面の高さ
        let windowHeight = $(window).height();
          // fadeinクラスの要素が画面下にきてから100px通過した
          // したタイミングで要素を表示
        if (scroll > target - windowHeight + 100) {
            $(this).css("opacity", "1");
            $(this).css("transform", "translateY(0)");
            $(this).css("z-index", "5");
            $(this).css("position", "relative");  
        }
        });
    });

});