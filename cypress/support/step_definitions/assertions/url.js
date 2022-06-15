import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

When( 'I request {string}, I expect status code {int}', cy.expectStatus );

Then( 'I should be on {string}', cy.pathEqual )
Then( '{string}にいるはずです', cy.pathEqual )

Then( 'I should not be on {string}', cy.pathNotEqual )
Then( '{string}に乗ってはいけません', cy.pathNotEqual )

Then( 'the path should include {string}', cy.pathIncludes );
Then( 'the path should not include {string}', cy.pathNotIncludes );