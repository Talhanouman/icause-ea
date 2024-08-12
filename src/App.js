import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, useHistory } from 'react-router-dom';

import AppRoute from './routes/AppRoute';
import AuthenticationRoute from './routes/AuthenticationRoute';
import ProtectedRoutes from './routes/ProtectedRoutes';

import { Provider } from 'react-redux';

import store from './store';

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <ProtectedRoutes path="/user" />
          <AuthenticationRoute path="/auth" />
          <AppRoute path="/" />
        </Switch>
      </Router>
    </Provider>
  );
};


export default App;
