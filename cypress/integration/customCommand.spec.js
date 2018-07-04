describe("Cypress backend auth", function() {
  //custom commands
  it(".should() - assert that a new user can login without the ui", function() {
    cy.login('newUser').then((user) => {
      var token = JSON.stringify(user.body)
      localStorage.setItem("id_token", token)
    })
    cy.visit("/secretquote");
    cy.url().should("eq", "http://localhost:8080/#!/secretquote");
  });
});
