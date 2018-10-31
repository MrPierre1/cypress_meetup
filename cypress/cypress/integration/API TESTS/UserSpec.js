// var faker = require('faker')

import faker from 'faker'

describe('Users API', () => {

  var user = {
    username: faker.internet.userName(),
    password: faker.internet.password()
  }

  it('Can get all users', () => {
    cy.request('GET', `${Cypress.env("api_server")}users`)
      .then((resp) => {
        expect(resp.status).to.eq(201)
        expect(resp.body.length).to.eq(3)
        expect(resp.body[0]).to.have.all.keys('id', 'username', 'password')
      })
  })

  // add a user using object params
  it('Can signup a new user', () => {
    const randomId = Cypress._.random(0, 10000)
    cy.request({
      url: `${Cypress.env("api_server")}users`,
      method: 'POST',
      body: {
        username: user.username,
        password: user.password
      }
    }).then((resp) => {
      expect(resp.status).to.eq(201)
      expect(resp.body.id_token).to.exist
      expect(resp.body.id_token).to.not.be.empty
    })
  })

  it('Can login', () => {
    cy.request({
      url: `${Cypress.env("api_server")}sessions/create`,
      method: 'POST',
      body: {
        username: user.username,
        password: user.password
      }
    }).then((resp) => {
      expect(resp.status).to.eq(201)
      expect(resp.body.id_token).to.exist
      expect(resp.body.id_token).to.not.be.empty
    })
  })
})
