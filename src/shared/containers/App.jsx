// app.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Route }   from 'react-router';
import { reduxRouteComponent } from 'redux-react-router';

import redux from '../redux';
import stores from '../stores';
import routes from '../routes';

console.log('App');

export default class ClientApp extends React.Component {
  static propTypes = {
    history      : React.PropTypes.object,
    initialState : React.PropTypes.object
  }

  constructor () {
    super();
  }

  renderRouter (store) {
    const RouteComponent = reduxRouteComponent(store);

    return (
      <Router history={this.props.history}>
        <Route component={RouteComponent}>
          {routes}
        </Route>
      </Router>
    );
  }

  render () {
    const store = redux(stores, this.props.initialState);
    console.log('store', store);

    return (
      <div>
        <Provider store={store}>
          {() => this.renderRouter(store)}
        </Provider>
      </div>
    );
  }
}
