import { Route }   from 'react-router';
import React       from 'react';
import Home        from '../views/Home';

export default (
  <Route>
    <Route name='home' path='/' component={Home} />
  </Route>
);

