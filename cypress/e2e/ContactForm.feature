Feature: Contact form

Scenario:
  Given I visit "contact/feedback"
  When I enter "Joe Doe" for "name"
  And I enter "john@doe.com" for "mail"
  And I enter "Hello world" for "subject[0][value]"
  And I enter "Lorem Ipsum" for "message[0][value]"
  And I press the "Send message" button
  Then I should see the text "Your message has been sent."
