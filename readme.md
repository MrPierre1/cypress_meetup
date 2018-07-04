# cypress_meetup

# Vue.js JWT Authentication

This example shows how to do JWT authentication in Vue.js apps. It uses Auth0's [nodejs-jwt-authentication-sample](https://github.com/auth0/nodejs-jwt-authentication-sample), a NodeJS backend that serves Chuck Norris quotes.

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
