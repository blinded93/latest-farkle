import React from 'react';
import './App.css';
import CurrentGame from './containers/CurrentGame'
import Rules from './containers/Rules'
import Games from './containers/Games'
import Nav from './containers/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={CurrentGame} />
        <Route path='/rules' component={Rules} />
        <Route path='/games' component={Games} />
      </Switch>
    </Router>
  );
}

export default App;
