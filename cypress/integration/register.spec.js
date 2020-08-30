///<reference types = "cypress"/>

import Chance from 'chance';
let chance = new Chance();

describe('Register', () => {
    beforeEach(() => {
        cy.startServer();
        cy.routePostNewtabl();
        cy.routePostUsertable();
        cy.routeGetNewtable();
    });
    it('register user on website', () => {
        cy.register();
        cy.wait('@postNewtable').then((resPostNewtable) => {
            expect(resPostNewtable.status).to.eq(200);
        })
        cy.wait('@postUsertable').then((resUsertable) => {
            expect(resUsertable.status).to.eq(200);
        })
        cy.wait('@getNewtable').then((resGetNewtable) => {
            expect(resGetNewtable.status).to.eq(200);
        })
        cy.url().should('contain', 'WebTable');
    });
});