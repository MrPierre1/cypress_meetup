describe('Anonymous API', () => {

  it('Can get an anonymous route ', () => {
    const randomId = Cypress._.random(0, 10000)
    cy.request({
      url: `${Cypress.env("api_server")}api/random-quote`,
      method: 'GET'
    }).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body).to.be.a('string')
    })
  })
})
