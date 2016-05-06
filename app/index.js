import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('offline-plugin/runtime').install();
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const rootEl = document.getElementById('root');
let rootApp
(__DEV__) ? rootApp = <AppContainer component={App} /> : rootApp = <App />

ReactDOM.render(
  rootApp,
  rootEl
);

if(__DEV__) {
  if (module.hot) {
    module.hot.accept('./App', () => {
      ReactDOM.render(
        <AppContainer component={require('./App').default} />,
        rootEl
      );
    });
  }
}
