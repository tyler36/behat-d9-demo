# language: ja
フィーチャ: お問い合わせフォーム
  サイト管理者へのメッセージを送信する場合
  訪問者として
  サイト全体のお問い合わせフォームを使用できるようにする必要があります。

    シナリオ: サイト全体のお問い合わせフォームをご利用いただけます。
        前提 "contact/feedback" を表示している
        もし "name" フィールドに "John Doe" と入力する
            かつ "mail" フィールドに "john@doe.com" と入力する
            かつ "subject[0][value]" フィールドに "Hello world" と入力する
            かつ "message[0][value]" フィールドに "Lorem Ipsum" と入力する
            かつ "Send message" ボタンをクリックする
        ならば "Your message has been sent." と表示されていること
