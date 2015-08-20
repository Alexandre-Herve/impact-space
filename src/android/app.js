window.__CLIENT__ = true;
window.__ANDROID__ = true;
window.__SERVER__ = false;

import injectTapEventPlugin from "react-tap-event-plugin";

import 'babel/polyfill';
import 'fetch-polyfill';

import React from 'react';
import App from '../shared/containers/App';

const state = window.__initialState;
const redux = create(stores, state);

React.render(
  <App {...state} />,
  document.getElementById('App')
);

