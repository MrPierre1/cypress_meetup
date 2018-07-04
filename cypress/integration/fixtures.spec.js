describe("Cypress auth with fixters", function() {
  beforeEach(() => {
    cy.fixture('users').as('users')
  })

  //fixtures
  it("Should be able to login with fixture data", function() {
    cy.visit("/login");
    cy
      .get('input[type="text"]')
      .type(this.users.username)
      .should("have.value", this.users.username);
    cy
      .get('input[type="password"]')
      .type(this.users.password)
      .should("have.value", this.users.password);
    cy.get("button").click();
    cy.url().should("eq", "http://localhost:8080/#!/secretquote");
  });
});
