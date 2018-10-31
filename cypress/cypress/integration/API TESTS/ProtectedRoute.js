describe('Protected API', () => {
  var token

  it('Can create a token', () => {
    const randomId = Cypress._.random(0, 10000)
    cy.request({
      url: `${Cypress.env("api_server")}users`,
      method: 'POST',
      body: {
        username: 'gonto7',
        password: 'gonto3'
      }
    }).then((resp) => {
      token = resp.body.id_token
      expect(resp.status).to.eq(201)
      expect(resp.body.id_token).to.exist
      expect(resp.body.id_token).to.not.be.empty
    })
  })

  it('Can get a protected quote', () => {
    cy.request({
      url: `${Cypress.env("api_server")}api/protected/random-quote`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })
})
