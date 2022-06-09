import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

// When('I am an anonymous user', )
When('I am not logged in', cy.asGuest)
When('I log out', cy.asGuest )
// When('I am logged in as a user with the :role role(s)', )
// When('I am logged in as a/an :role', )
// When('I am logged in as a user with the :role role(s) and I have the following fields:', )
// When('I am logged in as :name', )
// When('I am logged in as a user with the :permissions permission(s)', )
Then('I should see {string} in the {string} row', cy.selectorContainsString )
Then('I should not see {string} in the {string} row', cy.selectorNotContainsString)
// Then('I click :link in the :rowText row', )
// Then('I (should )see the :link in the :rowText row', )
// Then('the cache has been cleared', )
// Then('I run cron', )
// Then('I am viewing a/an :type (content )with the title :title', )
// Then('a/an :type (content )with the title :title', )
// Then('I am viewing my :type (content )with the title :title', )
// Then(':type content:', )
// Then('I am viewing a/an :type( content):', )
// Then('I should be able to edit a/an :type( content)', )
// Then('I am viewing a/an :vocabulary term with the name :name', )
// Then('a/an :vocabulary term with the name :name', )
// Then('users:', )
// Then(':vocabulary terms:', )
// Then('the/these (following )languages are available:', )
// Then('(I )break', )
When('I am at {string}', cy.visit)
// When('I visit {string}', cy.visit)
Then('I click {string}', cy.clickText)
Then('for {string} I enter {string}', (selector, value) => cy.typeStringInto(value, selector))
Then('I enter {string} for {string}', cy.typeStringInto)
// Then('I wait for AJAX to finish', )
Then('/^(?:|ユーザーが )"(?P<button>(?:[^"]|\\")*)" ボタンをクリックする$/u', cy.clickTextIn )
Then('I press the {string} button', (text) => cy.clickTextIn(text, 'button'))
// Then('I press the :char key in the :field field', )
Then('I should see the link {string}', cy.linkExist)
Then('I should not see the link {string}', cy.linkNotExist)
// Then('I should not visibly see the link {string}', )
// Then('I (should )see the heading :heading', )
// Then('I (should )not see the heading :heading', )
// Then('I (should ) see the button :button', )
// Then('I (should ) see the :button button', )
// Then('I should not see the button :button', )
// Then('I should not see the :button button', )
// Then('I follow/click {string} in the :region( region)', )
// Then('I press :button in the :region( region)', )
// Then('I fill in :value for :field in the :region( region)', )
// Then('I fill in :field with :value in the :region( region)', )
// Then('I should see the heading :heading in the :region( region)', )
// Then('I should see the :heading heading in the :region( region)', )
// Then('I should see the link :link in the :region( region)', )
// Then('I should not see the link :link in the :region( region)', )
// Then('I should see( the text) :text in the :region( region)', )
// Then('I should not see( the text) :text in the :region( region)', )
// Then('I (should )see the text :text', )
// Then('I should not see the text :text', )
// Then('I should get a :code HTTP response', )
// Then('I should not get a :code HTTP response', )
// Then('I check the box :checkbox', )
// Then('I uncheck the box :checkbox', )
// Then('I select the radio button :label with the id :id', )
// Then('I select the radio button :label', )
// Then('/^(?:|ユーザーは )ホームページを表示している$/', )
// Then('/^(?:|ユーザーは )ホームページへ移動する$/', )
// Then('/^(?:|ユーザーは )"(?P<page>[^\s]+)" を表示している$/u', )
// Then('/^(?:|ユーザーが )"(?P<page>[^\s]+)" へ移動する$/u', )
// Then('/^(?:|ユーザーが )ページをリロードする$/u', )
// Then('/^(?:|ユーザーが )履歴の前のページに戻る$/u', )
// Then('/^(?:|ユーザーが )履歴の次のページヘ進む$/u', )
// Then('/^(?:|ユーザーが )"(?P<link>(?:[^"]|\\")*)" のリンク先へ移動する$/u', )
// Then('/^(?:|ユーザーが )"(?P<field>(?:[^"]|\\")*)" フィールドに "(?P<value>(?:[^"]|\\")*)" と入力する$/u', )
// Then('/^(?:|ユーザーが )"(?P<field>(?:[^"]|\\")*)" フィールドに以下の値を入力する:$/u', )
// Then('/^(?:|ユーザーが )"(?P<value>(?:[^"]|\\")*)" という値を "(?P<field>(?:[^"]|\\")*)" に入力する$/u', )
// Then('/^(?:|ユーザーが)次のように入力する:$/u', )
// Then('/^(?:|ユーザーが )"(?P<option>(?:[^"]|\\")*)" という値を "(?P<select>(?:[^"]|\\")*)" から選択する$/u', )
// Then('/^(?:|ユーザーが )"(?P<option>(?:[^"]|\\")*)" という値を "(?P<select>(?:[^"]|\\")*)" から追加で選択する$/u', )
// Then('/^(?:|ユーザーが )"(?P<option>(?:[^"]|\\")*)" にチェックをつける$/u', )
// Then('/^(?:|ユーザーが )"(?P<option>(?:[^"]|\\")*)" のチェックをはずす$/u', )
// Then('/^(?:|ユーザーが)パス "(?P<path>[^"]*)" にあるファイルを "(?P<field>(?:[^"]|\\")*)" に添付する$/u', )
// Then('/^(?:|ユーザーが )(?P<page>[^\s]+) を表示していること$/u', )
// Then('/^(?:|ユーザーが )ホームページを表示していること$/u', )
// Then('/^(?i)url(?-i)が (?P<pattern>"(?:[^"]|\\")*") にマッチすること$/u', )
// Then('/^レスポンスコードが (?P<code>\d+) であること$/u', )
// Then('/^レスポンスコードが (?P<code>\d+) ではないこと$/u', )
// Then('/^(?:|画面に )"(?P<text>(?:[^"]|\\")*)" と表示されていること$/u', )
// Then('/^(?:|画面に )"(?P<text>(?:[^"]|\\")*)" と表示されていないこと$/u', )
// Then('/^(?:|画面に )"(?P<pattern>"(?:[^"]|\\")*")" にマッチするテキストが表示されていること$/u', )
// Then('/^(?:|画面に )"(?P<pattern>"(?:[^"]|\\")*")" にマッチするテキストが表示されていないこと$/u', )
// Then('/^レスポンスに "(?P<text>(?:[^"]|\\")*)" が含まれていること$/u', )
// Then('/^レスポンスに "(?P<text>(?:[^"]|\\")*)" が含まれていないこと$/u', )
// Then('/^"(?P<element>[^"]*)" エレメントに "(?P<text>(?:[^"]|\\")*)" と表示されていること$/u', )
// Then('/^"(?P<element>[^"]*)" エレメントに "(?P<text>(?:[^"]|\\")*)" と表示されていないこと$/u', )
// Then('/^"(?P<element>[^"]*)" エレメントに "(?P<value>(?:[^"]|\\")*)" という値が含まれていること$/u', )
// Then('/^"(?P<element>[^"]*)" エレメントに "(?P<value>(?:[^"]|\\")*)" という値が含まれていないこと$/u', )
// Then('/^(?:|画面に )"(?P<element>[^"]*)" エレメントが表示されていること$/u', )
// Then('/^(?:|画面に )"(?P<element>[^"]*)" エレメントが表示されていないこと$/u', )
// Then('/^"(?P<field>(?:[^"]|\\")*)" フィールドに "(?P<value>(?:[^"]|\\")*)" が含まれていること$/u', )
// Then('/^"(?P<field>(?:[^"]|\\")*)" フィールドに "(?P<value>(?:[^"]|\\")*)" が含まれていないこと$/u', )
// Then('/^(?:|画面に )(?P<num>\d+) 個の "(?P<element>[^"]*)" エレメントが表示されていること$/u', )
// Then('/^チェックボックス "(?P<checkbox>(?:[^"]|\\")*)" のチェックがついていること$/u', )
// Then('/^the "(?P<checkbox>(?:[^"]|\\")*)" checkbox is checked$/', )
// Then('/^the checkbox "(?P<checkbox>(?:[^"]|\\")*)" (?:is|should be) checked$/', )
// Then('/^the "(?P<checkbox>(?:[^"]|\\")*)" checkbox should (?:be unchecked|not be checked)$/', )
// Then('/^the "(?P<checkbox>(?:[^"]|\\")*)" checkbox is (?:unchecked|not checked)$/', )
// Then('/^the checkbox "(?P<checkbox>(?:[^"]|\\")*)" should (?:be unchecked|not be checked)$/', )
// Then('/^the checkbox "(?P<checkbox>(?:[^"]|\\")*)" is (?:unchecked|not checked)$/', )
// Then('/^現在のURLを表示$/', )
// Then('/^最後のレスポンスを表示$/u', )
// Then('/^最後のレスポンスをブラウザで表示$/u', )
// Then('I should see the error message( containing) :message', )
// Then('I should see the following error message(s):', )
// Then('I should not see the error message( containing) :message', )
// Then('I should not see the following error messages:', )
// Then('I should see the success message( containing) :message', )
// Then('I should see the following success messages:', )
// Then('I should not see the success message( containing) :message', )
// Then('I should not see the following success messages:', )
// Then('I should see the warning message( containing) :message', )
// Then('I should see the following warning messages:', )
// Then('I should not see the warning message( containing) :message', )
// Then('I should not see the following warning messages:', )
// Then('I should see the message( containing) :message', )
// Then('I should not see the message( containing) :message', )
// Then('I run drush :command', )
// Then('I run drush :command :arguments', )
// Then('drush output should contain :output', )
// Then('drush output should match :regex', )
// Then('drush output should not contain :output', )
// Then('print last drush output', )