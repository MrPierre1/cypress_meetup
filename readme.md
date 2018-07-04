# Simple VueJS Auth app

Credit to and lukeoliff for putting this together. 

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


## Tests

### 
