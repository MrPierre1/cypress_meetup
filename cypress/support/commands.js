// ***********************************************
Cypress.Commands.add('login', (userType, options = {}) => {
var apiRoute = "http://localhost:3001/"
  // this is an example of skipping your UI and logging in programmatically

  const users = {
    newUser: {
      username:  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      password:  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    },
    user1: {
      username: 'Jeannie',
      password: "passsword",
    }
  }

  // grab the user
  const user = users[userType]
  // create the user first in the DB
  cy.request(
    {
    url: "http://localhost:3001/users", // assuming you've exposed a seeds route
    method: 'POST',
    body: {
      username: user.username,
      password: user.password
    }
  }
)
})
