import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import About from './Component/About/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Dashboard />
          </Route> 
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
