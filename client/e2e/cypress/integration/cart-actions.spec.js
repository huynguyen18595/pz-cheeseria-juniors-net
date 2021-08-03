/// <reference types="Cypress" />

context('Cart Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it.only('Add items to cart', () => {
    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-7]').click();

    cy.get('[data-cy=view-cart-btn]').click();
    cy.contains('2 Selected item')
    cy.get('[data-cy=purchase-btn]').click();
    cy.get('[data-cy=recent-purchase-btn]').click();
  })

})
//1. Add 2 seperate items to the cart

//2. Click on purchase 

