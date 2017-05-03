# heroku-demo-react

It simple demo parser youtube video with config deployment to heroku.

It good point to use as React Starter Kit, it easy run localhost and prepare files for deploy.

## Functions

* Search video
* List video
* Detail video

## Features

* react
* redux
* recompose
* thunk middleware
* react-router-dom v4 (beta)
* axios
* reselect
* webpack
* postcss
* [css-modules](https://github.com/css-modules/css-modules)
* classnames
* react-addons-perf
* eslint with support react and ES7
* prepared structure less styles files with support css-modules
* fetch data before component rendering

## Routing

This is the new solution with react-router 4 beta 8, it use Switch component of react router [Read Docs](https://github.com/ReactTraining/react-router/tree/v4/packages/react-router/docs/api)

## Demo

https://heroku-demo-react.herokuapp.com

## Mock data

You can use mock data with 1000 items, add to url `mock`

http://localhost:8080/webpack-dev-server/?mock

## React perfomance tool

To enable react perfomance tool add to url `proftool`

http://localhost:8080/webpack-dev-server/?proftool

Also you can use `mock` data and `proftool`

http://localhost:8080/webpack-dev-server/?mock&proftool

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```bash
npm install           # install nodejs dependencies
```

```bash
npm run localhost     # running local server on http://localhost:8080/webpack-dev-server/
```

```bash
npm run postinstall   # prepare bundle.js for production server, used for heroku deployment
```

```bash
npm start             # start node server
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
