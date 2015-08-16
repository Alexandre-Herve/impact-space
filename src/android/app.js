window.__CLIENT__ = true;
window.__ANDROID__ = true;
window.__SERVER__ = false;

import injectTapEventPlugin from "react-tap-event-plugin";

import 'babel/polyfill';
import 'fetch-polyfill';

import React from 'react';
import { Provider } from 'redux/react';
import Home from '../shared/containers/Home';
import create from '../shared/redux';
import * as stores from '../shared/stores';

const state = window.__initialState;
const redux = create(stores, state);

React.render(
  <Provider redux={redux}>
    {()=><Home />}
  </Provider>,
  document.getElementById('App')
);

