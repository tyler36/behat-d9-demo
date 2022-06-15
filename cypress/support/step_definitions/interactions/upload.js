import { Then } from 'cypress-cucumber-preprocessor/steps';

Then( 'I add test image', cy.uploadFile );
Then( 'I upload {string} file', cy.uploadFile );
