describe("Cypress Mock", function() {
  var myNewUser = {
    username: "Jim Bob",
    password: "password"
  }
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "POST",
      url: `${Cypress.env("api_server")}sessions/create`,
      status: 200,
      response: {
        id_token: "a token"
      }
    }).as('login')
  })


  it("Can mock the api response", () => {
    cy.visit('/login')
    cy.get('.btn-primary').click()
    cy.wait('@login')
    cy.url().should("eq", "http://localhost:8080/#!/secretquote");
  })

});
