Feature: Contact form

  Scenario:
    Given I visit "contact/feedback"
    When I enter "Joe Doe" for "name"
    And I enter "john@doe.com" for "mail"
    And I enter "Hello world" for "subject[0][value]"
    And I enter "Lorem Ipsum" for "message[0][value]"
    And I click "Send message"
    # Then I should see the following success messages: "Your message has been sent."
    Then I should see the following error messages: "You cannot send more than 5 messages in 1 hour."
