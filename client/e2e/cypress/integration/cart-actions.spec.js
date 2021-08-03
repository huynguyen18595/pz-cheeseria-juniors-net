/// <reference types="Cypress" />

context('Cart Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it("Test case 1: Show Dialog after clicking cheese card", () => {
    //click cart 2
    cy.get('[data-cy=card2]').click();
    // check if dialog visible
    cy.get('[data-cy=cheese-card-dialog]').should('be.visible');
    //check if description visible on dialog
    cy.get('[data-cy=description]').should('be.visible');
  })

  it('Test case 2: Add items to cart', () => {
    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-7]').click();
    cy.get('[data-cy=view-cart-btn]').click();
    cy.contains('2 Selected item').should('be.visible');
  })

  it('Test case 3: Add items to cart and purchase', () => {
    // Add items 
    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-7]').click();
    //click View cart
    cy.get('[data-cy=view-cart-btn]').click();
    // purchase ,
    cy.get('[data-cy=purchase-btn]').click();
    // expect 'nothing to see here'
    cy.contains('Nothing to see here!').should('be.visible');
  })

  it('Test case 4: View recent purchase', () => {
    // Add item 2 
    cy.get('[data-cy=add-to-cart-2]').click();
    //click View cart
    cy.get('[data-cy=view-cart-btn]').click();
    // click purchase,
    cy.get('[data-cy=purchase-btn]').click();
    // click recent purchase
    cy.get('[data-cy=recent-purchase-btn]').click();
    // expect showing dialog
    cy.get('[data-cy=recent-purchase]').should('be.visible');
    // expect id number 2  item to be visible
    cy.get('[data-cy=id2]').should('be.visible');
  })

})


