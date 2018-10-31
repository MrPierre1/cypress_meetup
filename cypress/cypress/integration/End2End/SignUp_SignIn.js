describe('Cypress ui auth', function () {
  var faker = require('faker')
  var user = {
    username: faker.internet.userName(),
    password: faker.internet.password()
  }
  it('.should() - assert that a user can signup', function () {
    cy.visit('/signup')
    cy.get('a')
      .contains('Sign Up')
      .click()
    cy.get("input[type='text']").type(user.username)
    cy.get("input[type='password']").type(user.password)
    cy.get('button').click()
    cy.get('.btn-warning').should('be.visible')
  })

  it('.should() - assert that a user can login', function () {
    cy.visit('/login')
    cy.get('a')
      .contains('Login')
      .click()
    cy.get("input[type='text']").type(user.username)
    cy.get("input[type='password']").type(user.password)
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:8080/#!/secretquote')
    cy.get('a')
      .contains('Logout')
      .click()
    cy.url().should('eq', 'http://localhost:8080/#!/login')
  })
})
