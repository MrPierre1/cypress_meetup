# cypress_meetup

Big thank you to Chenkie and Lukeoliff for puting this together.
Orignal code can be found here.[nodejs-jwt-authentication-sample](https://github.com/auth0/nodejs-jwt-authentication-sample),

### Application: A NodeJS app that serves Chuck Norris quotes.

## Installation

Clone the repo and then install the server submodule and dependencies.

```bash
git submodule update --init
cd server
npm install
cd ..
npm install
```

Once the application scripts are in place, start the server (which will provide the quotes) using:

```bash
node server/server.js
```

Afterwards, open a second Terminal window and run the [webpack development server](http://webpack.github.io/docs/webpack-dev-server.html). It will watch for changes with **hot reloading**:

```bash
npm run dev
```

## Testing

##### Cypress.io

### Run tests from Desktop app

```bash
./node_modules/.bin/cypress open
```
### Run tests from command line

```bash
cypress run --spec 'cypress/integration/<testname>'
```
