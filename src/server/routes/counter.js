import React from 'react';
import nunjucks from 'nunjucks';
import Home from '../../shared/containers/Home';
import create from '../../shared/redux';
import { Provider } from 'redux/react';
import { loadCounter } from '../../shared/actions/counter';
import * as stores from '../../shared/stores';

nunjucks.configure('views', { autoescape: true });

export default function counter() {
  return function* () {
    const redux = create(stores);
    yield redux.dispatch(loadCounter());
    var state = redux.getState();

    const appString = React.renderToString(
      <Provider redux={redux}>
        {()=><Home {...state} />}
      </Provider>
    );

    this.body = nunjucks.render('index.html', {
      appString,
      initialState:JSON.stringify(state),
      env:process.env
    });
  };
}

