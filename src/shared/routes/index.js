import { Route }   from 'react-router';
import React       from 'react';
import Home        from '../../containers/Home';

export default (
  <Route>
    <Route name='home' path='/' component={Home} />
  </Route>
);

