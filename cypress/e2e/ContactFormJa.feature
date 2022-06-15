# language: ja
フィーチャ: Contact form

シナリオ: A visitor can use the site-wide contact form
前提 "contact/feedback" を表示している
もし "name" フィールドに "Joe Doe" と入力する
かつ "mail" フィールドに "john@doe.com" と入力する
かつ "subject[0][value]" フィールドに "Hello world" と入力する
かつ "message[0][value]" フィールドに "Lorem Ipsum" と入力する
かつ "Send message" をクリックする
# ならば "Your message has been sent." の成功メッセージが表示されるはずです
ならば "You cannot send more than 5 messages in 1 hour." を含むエラーメッセージが表示されるはずです
