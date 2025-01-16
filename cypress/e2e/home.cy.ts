// https://on.cypress.io/api

describe('Home', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Hello world!')
  })
})
