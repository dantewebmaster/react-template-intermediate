import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import UsersPage from '../UsersPage';
import HomePage from '../HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import Header from '../../components/Header';
import { GlobalStyle } from '../../styles';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <GlobalStyle whiteColor />
      <Header title="React Template Intermediate" />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={UsersPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  )
}
