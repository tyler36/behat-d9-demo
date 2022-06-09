import { Given } from 'cypress-cucumber-preprocessor/steps';

Given( 'screen is {int}x{int}', cy.viewport )
Given( '画面は{int}x{int}です', cy.viewport )

Given( 'device is {string}', cy.viewport );
Given( 'デバイスは{string}です', cy.viewport );
