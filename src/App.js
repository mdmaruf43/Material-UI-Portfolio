import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch> 
          <Dashboard />
          <Route path="/home">
            <Dashboard />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
