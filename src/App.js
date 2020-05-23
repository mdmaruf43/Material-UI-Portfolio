import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import NotFound from './Component/NotFound.js/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/home">
            <Dashboard />
          </Route> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="*">
              <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
