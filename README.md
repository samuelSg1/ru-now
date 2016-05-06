RUNow
=====================

An awesome app for hungry university people.

### Developing Front-End
Make sure you have [NodeJS](http://nodejs.org) and [nodemon](http://nodemon.io/) installed with `npm i -g nodemon`. You'll also need a `config.js` file with all the necessary variables, ask the team manager for it.

1. `git clone https://github.com/ufv-js/ru-now.git`
1. `cd ru-now` and `npm i`
1. `npm start` to start developing the front-end, with react-hot-loader

Now edit `app/App.js`.  
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Developing Back-End

1. Use `npm run api` to develop the back-end, with Nodemon running
1. `npm run build` will create a build for the Front-End
1. Finally use `npm run prod` to test how it would run in production

All the API, and authentication files are in the `server` folder.

### Deploy
The easiest way is to deploy to [Heroku](https://heroku.com/). Make sure you have created an account and have installed the [heroku toolbelt](https://toolbelt.heroku.com/).


1. Do a `heroku login` to enter your credentials
1. Use `heroku create <app name>` to create a new app.
1. Add your stuff to git using `git add .` and `git commit -m "a message"`
1. Finally do a `git push heroku master` which will push the changes to the Heroku repo and put your app online
1. You'll need to set all the variables in the `config.js` to Heroku using `heroku config:set MONGO=mongourl REDIS=redisurl ...`

A great alternative is [Dokku](https://github.com/dokku/dokku), which is a open-source version of Heroku which you can host in your own VM. [DigitalOcean](https://m.do.co/c/544f3f63da88) can deploy and configure Dokku automatically, for an easy and cheap self-hosted solution (US$5 a month).

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.


### Dependencies

* React
* React-Router
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources

* [Demo video](http://vimeo.com/100010922)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
* [Troubleshooting guide](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md)
* Ping dan_abramov on Twitter or #reactjs IRC
