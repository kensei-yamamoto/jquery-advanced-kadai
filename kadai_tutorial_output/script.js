$(function () {
    /*
    アニメーションを適用する対象：.button-moreというclassを設定した2つの「もっとみる」ボタン
    アニメーションを再生するタイミング：mouseover（マウスオーバー時）
    アニメーションの内容
    marginLeft（左側の余白）：20pxを指定し、対象を20px右側に移動させる
    opacity（不透明度）：0.5を指定し、半透明にする（不透明度は0～1の間で指定する。0で完全な透明になり、1で完全な不透明になる）
    アニメーションの再生スピード：100を指定し、0.1秒間で再生する（再生スピードは1000分の1秒単位で設定する。1秒＝1000）
    */
    $('.button-more').on('mouseover', function () {
        $(this).animate({
            opacity: 0.5,
            marginLeft: 20,
        }, 100);
    });

    /*
    アニメーションを適用する対象：.button-moreというclassを設定した2つの「もっとみる」ボタン
    アニメーションを再生するタイミング：mouseout（マウスアウト時）
    アニメーションの内容
    marginLeft（左側の余白）：0を指定し、対象の位置を元に戻す
    opacity（不透明度）：1を指定し、不透明にする（元に戻す）
    アニメーションの再生スピード：100を指定し、0.1秒間で再生する
    */
    $('.button-more').on('mouseout', function () {
        $(this).animate({
            opacity: 1.0,
            marginLeft: 0
        }, 100);
    });

   /*
   カルーセル設定
    autoplay：true（自動的に切り替える）
    dots：true（表示する）
    infinite：true（ループさせる）
    autoplaySpeed：5000（5000ミリ秒＝5秒）
    arrows：false（非表示にする）
   */
   $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed:5000,
        arrows: false,
    });

   // 送信ボタンクリック時の処理
   $('#submit').on('click', function (event) {

        console.log('aaaa');
        // formタグによる送信を拒否
        event.preventDefault();
    
        // 入力チェックをした結果をresultに格納
        let result = inputCheck();

        // エラー判定とメッセージを取得
        let error = result.error;
        let message = result.message;

        // エラーが無かったらフォームを送信する
        if (error == false) {

            // フォーム送信は実際には行わず、送信成功メッセージのみ表示する
            alert('お問い合わせを送信しました。');

        } else {

            // エラーメッセージを表示する
            alert(message);
        }
    });

    // フォーカスが外れたとき（blur）にフォームの入力チェックをする
    $('#name').blur(function () {
        inputCheck();
    });

    $('#furigana').blur(function () {
        inputCheck();
    });

    $('#email').blur(function () {
        inputCheck();
    });

    $('#tel').blur(function () {
        inputCheck();
    });

    $('#message').blur(function () {
        inputCheck();
    });

    $('#agree').click(function () {
        inputCheck();
    });

    // お問い合わせフォームの入力チェック
    function inputCheck() {

        // エラーのチェック結果
        let result;
    
        // エラーメッセージのテキスト
        let message = '';
    
        // エラーがなければfalse、エラーがあればtrue
        let error = false;

        // お名前のチェック
        if ($('#name').val() == '') {

            // エラーあり
            $('#name').css('background-color', '#f79999');
            error = true;
            message += 'お名前を入力してください。\n';

        } else {

            // エラーなし
            $('#name').css('background-color', '#fafafa');
        }

        // フリガナのチェック
        if ($('#furigana').val() == '') {
            // エラーあり
            $('#furigana').css('background-color', '#f79999');
            error = true;
            message += 'フリガナを入力してください。\n';

        } else {

            // エラーなし
            $('#furigana').css('background-color', '#fafafa');
        }
    
        // お問い合わせのチェック
        if ($('#message').val() == '') {

            // エラーあり
            $('#message').css('background-color', '#f79999');
            error = true;
            message += 'お問い合わせ内容を入力してください。\n';

        } else {

            // エラーなし
            $('#message').css('background-color', '#fafafa');
        }

        // メールアドレスのチェック
        if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {

            // エラーあり
            $('#email').css('background-color', '#f79999');
            error = true;
            message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';

        } else {
            // エラーなし
            $('#email').css('background-color', '#fafafa');
        } 

        // 電話番号のチェック（未入力はOK、未入力でない場合は-が必要）
        if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1) {

            // エラーあり
            $('#tel').css('background-color', '#f79999');
            error = true;
            message += '電話番号に「-」が含まれていません。\n';

        } else {
            
            // エラーなし
            $('#tel').css('background-color', '#fafafa');
        }

        // 個人情報のチェックボックスのチェック
        if ($('#agree').prop('checked') == false) {
            error = true;
            message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
        }

        // エラーの有無で送信ボタンを切り替え
        if (error == true) {
            $('#submit').attr('src', 'images/button-submit.png');
        } else {
            $('#submit').attr('src', 'images/button-submit-blue.png');
        }

        // オブジェクトでエラー判定とメッセージを返す
        result = {
            error: error,
            message: message
        }
    
        // 戻り値としてエラーがあるかどうかを返す
        return result;
    } 
});