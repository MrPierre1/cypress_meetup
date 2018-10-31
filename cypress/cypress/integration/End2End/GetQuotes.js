describe('Cypress backend auth', function () {
  it('.should() - assert that a new token can login without the ui', function () {
    cy.login().then((token) => {
      localStorage.setItem('id_token', token)
    })
    cy.visit('/secretquote')
    cy.url().should('eq', 'http://localhost:8080/#!/secretquote')
    cy.get('.btn').click()
    cy.get('.quote-area').should('be.visible')
  })
  it('.should() - assert that a new token can login without the ui', function () {
    cy.visit('/home')
    cy.get('.btn').click()
    cy.get('.quote-area').should('be.visible')
  })
})
