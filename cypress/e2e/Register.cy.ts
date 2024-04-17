///  <reference types="Cypress" />

// import { Faker } from "@faker-js/faker";
describe('template spec', () => {
  it('it should be able to register', () => {
    cy.visit('http://localhost:5173/');
    cy.get('#firstName').type('Afolabi');
    cy.get('#lastName').type('Samuel');
    cy.get('#email').type('doubleasam92@gmail.com');
    cy.get(':nth-child(3) > .chakra-input__group > #password').type('Test1234$$$');
    cy.get(':nth-child(5) > .chakra-input__group > #password').type('Test1234$$$');
    cy.get('.css-1lggxi8 > .chakra-button').click
  })
})