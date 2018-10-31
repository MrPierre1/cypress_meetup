
describe('Users API', () => {
  it('Can get all users', () => {
    cy.request('GET', `${Cypress.env("api_server")}users`)
      .then((resp) => {
        console.log('------------------------------------');
        console.log("response", resp);
        console.log('------------------------------------');
        expect(resp.status).to.eq(201);
        expect(resp.body.users[0]).to.have.all.keys('id', 'username', 'password');
      });
  });

  // add a user using object params
  // it('Can create a new user', () => {
  //   const randomId = Cypress._.random(0, 10000);
  //   const user = {
  //     username: randomId,
  //     password: 'password'
  //   }
  //   cy.request({
  //     url: `${Cypress.env("api_server")}users`,
  //     method: 'POST',
  //     body: {
  //       username: user.username,
  //       password: user.password,
  //     }
  //   }).then( (resp) => {
  //       expect(resp.status).to.eq(201);
  //       expect(resp.body.id_token).to.exist;
  //       expect(resp.body.id_token).to.not.be.empty;
  //     });
  // });

});
