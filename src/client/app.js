window.__CLIENT__ = true;
window.__SERVER__ = false;
window.__ANDROID__ = false;

import 'babel/polyfill';

import React from 'react';
import App from '../shared/containers/App';

const state = window.__initialState;
const redux = create(stores, state);

React.render(
  <App />,
  document.getElementById('App')
);
