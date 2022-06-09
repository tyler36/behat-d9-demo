import {When} from 'cypress-cucumber-preprocessor/steps';
import {stringToJson} from '../helpers/convert';

/**
 * Create a new 'model'
 *
 * @param {String} model  Type of model to create. Eg. 'App\\Models\\User'
 * @returns void
 */
let createModel = (model) => cy.create( model ).as(model.split('\\').pop());


/**
 * Create a new 'model' with specific attributes
 *
 * @param {String} model        Type of model to create. Eg. 'App\\Models\\User'
 * @param {String} attibutes    JSON string of attributes, should be compatible with 'stringToJson'
 * @returns void
 */
let createModelWith = (model, attributes = '{}') => {
    cy.create(model, 1, stringToJson(attributes))
        .as(model.split('\\').pop());
}

/**
 * Alias to create a generic user
 *
 * @returns void
 */
let createUser = (attributes) => cy.createModelWith( 'App\\Models\\User', attributes ).as('User');


/**
 * Alias to create a 'staff' User
 * 
 * @returns void
 */
let createStaffModelWith = (attributes) => {
    let updated = {'profile_type': 'App\\Models\\Staff', ...stringToJson(attributes)}
    createModelWith('App\\Models\\User', JSON.stringify(updated));
}

When( 'I run seed class {string}', cy.seed );
When( 'I refresh database', cy.refreshDatabase );
When( 'I create a user', createUser );
When( 'I create a {string} model', createModel );
When( 'I create a {string} model with {string}', createModelWith );
When( 'I create a staff model with {string}', createStaffModelWith );
