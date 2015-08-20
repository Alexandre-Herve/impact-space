// app.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Route }   from 'react-router';
import { reduxRouteComponent } from 'redux-react-router';

import reducers from '../reducers';
import routes from '../routes';
import store from '../stores';

export default class ClientApp extends React.Component {
  static propTypes = {
    history      : React.PropTypes.object,
    initialState : React.PropTypes.object
  }

  constructor () {
    super();
  }

  renderRouter () {
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
    return (
      <Provider store={store}>
        {() => this.renderRouter()}
      </Provider>
    );
  }
}
