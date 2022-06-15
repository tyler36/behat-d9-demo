import {Then} from 'cypress-cucumber-preprocessor/steps';

Then( 'I should see {string}', cy.stringExist )
Then( '{string}が見えるはずです', cy.stringExist )

Then( 'I should not see {string}', cy.stringNotExist )
Then( '{string}は表示されません', cy.stringNotExist )