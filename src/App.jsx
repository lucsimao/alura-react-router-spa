import './assets/css/base/base.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './paginas/Home';
import Pagina404 from './paginas/Pagina404';
import React from 'react';
import Sobre from './paginas/Sobre';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
