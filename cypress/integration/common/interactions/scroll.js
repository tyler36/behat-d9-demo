import {
    Given
} from 'cypress-cucumber-preprocessor/steps';

Given( 'I scroll {int} px', cy.scrollDistance );
Given( '{int}ピクセルスクロールします', cy.scrollDistance );
Given( 'I scroll to the {string} of {string}', cy.scrollToSelectorPosition );
Given( '{string}の{string}までスクロールします', cy.scrollToSelectorPosition );
