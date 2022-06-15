import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I am a guest', cy.asGuest );
Given('ゲストです', cy.asGuest );

Given('I am logged in as {string}', cy.asUser);
Given('{string}としてログインしています', cy.asUser);

Given('{string} user exists', cy.userShouldExist);

Then( 'cancel user {string} and content', cy.userCancelContent);

Then( 'I enter login details for {string}', cy.enterLoginDetails );