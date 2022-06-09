import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given( 'I visit {string}', cy.visit );
Given( '{string}にアクセスします', cy.visit );

Given('disable fixed header', cy.disableHeader)
