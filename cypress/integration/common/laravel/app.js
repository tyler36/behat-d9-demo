import {When} from 'cypress-cucumber-preprocessor/steps';

When( 'I run artisan {string}', cy.artisan );
When( 'I run php {string}', cy.php );
When( 'I refresh routes', cy.refreshRoutes );
