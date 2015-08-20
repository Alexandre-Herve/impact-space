import React from 'react';
import nunjucks from 'nunjucks';
import App from '../../shared/containers/App';
import { Provider } from 'react-redux';
import { loadCounter } from '../../shared/actions/counter';
import store from '../../shared/stores';
import Location from 'react-router';

nunjucks.configure('views', { autoescape: true });

export default function counter() {
  return function* () {
    var state = store.getState();

    /*const appString = React.renderToString(<App location={location}/>);*/
    const appString = 'lol';

    this.body = nunjucks.render('index.html', {
      appString,
      initialState: JSON.stringify(state),
      env:process.env
    });
  };
}

