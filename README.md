# Heroku React Starter Kit

It simple React Starter Kit with latest features and application demo with API Youtube, config deployment to heroku.

Easy run localhost and prepare files for deploy.

## Functions

* Search video
* List video
* Detail video
* 404 for page not found, and 500 for error.
* Loader for fetch data

## Features

* react v16.1.1
* redux
* recompose
* thunk middleware
* react-router v4
* axios
* mock data with [json-server](https://github.com/typicode/json-server)
* reselect
* webpack
* postcss
* [css-modules](https://github.com/css-modules/css-modules)
* eslint with support react and ES7
* ES7 async function and await expression
* fetch data before component rendering
* [Material Design UI Components for the Web](https://material.io/components/web/)
* prepared structure less styles files with support css-modules
* [classnames](https://github.com/JedWatson/classnames)
* CSS resets [normalize.css](https://github.com/necolas/normalize.css/) and uniforming the default look across different browsers

## Routing

Routing with react-router version 4, it use Switch component of react router [Read Docs](https://github.com/ReactTraining/react-router/tree/master/packages/react-router/docs/api)

## Demo

https://heroku-demo-react.herokuapp.com

## Service API

Folder `src/services/api.js` easy create you own API services to connect real data with [axios](https://github.com/mzabriskie/axios)

## Mock data

Easy create mock data in folder `/mock` connected with [json-server](https://github.com/typicode/json-server)

You can use mock data with 1000 items, add to url `mock` parametr

http://localhost:8080/webpack-dev-server/?mock

## Running Locally

Make sure you have [Node.js](http://nodejs.org/)
Also for Heroku can be helpfull [Heroku Toolbelt](https://toolbelt.heroku.com/).

```bash
npm install           # install nodejs dependencies
```

```bash
npm run localhost     # running local server on http://localhost:8080/webpack-dev-server/ and json-server with mock data on port 3000
```

```bash
npm run postinstall   # prepare bundle.js for production server, used for heroku deployment
```

```bash
npm start             # start node server, starting Node.js Express application in index.js
```

```bash
npm run lint          # run lint
```

## Author

[Vitalijs Karpusa](http://www.karpusa.lv)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
