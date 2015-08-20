window.__CLIENT__ = true;
window.__ANDROID__ = true;
window.__SERVER__ = false;

import injectTapEventPlugin from "react-tap-event-plugin";

import 'babel/polyfill';
import 'fetch-polyfill';

import React from 'react';
import App from '../shared/containers/App';
import stores from '../shared/stores';
import { history } from 'react-router/lib/BrowserHistory';

const state = window.__initialState;
React.render(<App history={history} state={state} />, document.getElementById('App'));
