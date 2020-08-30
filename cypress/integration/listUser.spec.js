///<reference types = "cypress"/>
describe('list users', () => {

    beforeEach(() => {
        cy.server(); 
    });
    it('list with no register', () => {
       cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fx:webtable-get-empty'
        }).as('getNewtable');

        cy.visit('WebTable.html');
        cy.get('div[role=row]').should('have.length', 1);

    it('list with just one register', () => {
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fx:webtable-get-only-one-register'
        }).as('getNewtable');

        cy.visit('WebTable.html');
        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone');
        cy.get('@gridCellPhone').should('contain.text', '5408196723');
        
        });
    });
}); 

