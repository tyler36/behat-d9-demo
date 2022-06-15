import {Then} from 'cypress-cucumber-preprocessor/steps';

Then( 'I type {string} into {string}', cy.typeStringInto );
Then( '{string}に{string}と入力します', cy.typeStringInto );

Then( 'I cktype {string} into {string}', cy.typeStringIntoCkeditor );
Then( '{string}エディターに{string}と入力します', cy.typeStringIntoCkeditor );
