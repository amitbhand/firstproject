import React from 'react';
import './css/global.scss';

// import {Router,Route,Switch} from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/home';
import Why from './components/why';
import ParentComp from './components/parentComp';
import CommentsSec from './components/comments';
// import history from './history';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/why">
          <Why />
        </Route>
        <Route path="/pass">
          <ParentComp />
        </Route>
        <Route path="/comments">
          <CommentsSec />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
