// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('register', () => {
    cy.visit('Register.html')
        cy.get('input[placeholder="First Name"]').type(chance.first());
        cy.get('input[ng-model="LastName"]').type(chance.last());
        cy.get('input[ng-model="EmailAdress"]').type(chance.email());
        cy.get('input[ng-model="Phone"]').type(chance.phone({formatted: false}));
        cy.get('input[value="FeMale"]').check();
        cy.get('input[type="checkbox"]').check('Movies');
        cy.get('input[type="checkbox"]').check('Hockey');
        cy.get('select#Skills').select('Java');
        cy.get('select#countries').select('Brazil');
        cy.get('select#country').select('Australia', {force: true});
        cy.get('select#yearbox').select('1987');
        cy.get('select[ng-model="monthbox"]').select('June');
        cy.get('select#daybox').select('23');
        cy.get('input#firstpassword').type('Senha123@');
        cy.get('input#secondpassword').type('Senha123@');
        cy.get('input#imagesrc').attachFile('upload-image-register.png');
        cy.get('button#submitbtn').click();
    });

    Cypress.Commands.add('startServer', () => {
        cy.server();
    });

    Cypress.Commands.add('routePostNewtabl', () => {
        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**').as('postNewtable');
    });

    Cypress.Commands.add('routePostUsertable', () => {
        cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**').as('postUsertable');
        });

    Cypress.Commands.add('routeGetNewtable', () => {
        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewtable');
            });
