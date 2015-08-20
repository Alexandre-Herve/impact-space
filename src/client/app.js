window.__CLIENT__ = true;
window.__SERVER__ = false;
window.__ANDROID__ = false;

import 'babel/polyfill';

import React from 'react';
import App from '../shared/containers/App';
import stores from '../shared/stores';
import { history } from 'react-router/lib/BrowserHistory';

const state = window.__initialState;
const props = { history, state };

React.render(<App {...props} />, document.getElementById('App'));
