import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import NotFound from './Component/NotFound.js/NotFound';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <Router>
      <div>
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
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
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
