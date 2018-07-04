describe("Cypress ui auth", function() {
  var myNewUser = {
    username: "JimBob",
    password: "password"
  }
//basic forms
  it(".should() - assert that a user can signup", function() {
    cy.visit("/signup");
    cy.get("a")
      .contains("Sign Up")
      .click();
    cy.get("input[type='text']").type(myNewUser.username);
    cy.get("input[type='password']").type(myNewUser.password);
    cy.get("button").click();
    cy.get(".btn-warning").should("be.visible");
  });

  it(".should() - assert that a user can login", function() {
    cy.visit("/login");
    cy.get("a")
      .contains("Login")
      .click();
    cy.get("input[type='text']").type(myNewUser.username);
    cy.get("input[type='password']").type(myNewUser.password);
    cy.get("button").click();
    cy.url().should("eq", "http://localhost:8080/#!/secretquote");
  });

});
