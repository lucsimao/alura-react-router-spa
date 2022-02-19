import './assets/css/base/base.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Cabecalho from './components/Cabecalho';
import Categoria from './paginas/Categoria';
import Home from './paginas/Home';
import Pagina404 from './paginas/Pagina404';
import Post from './paginas/Post';
import React from 'react';
import Sobre from './paginas/Sobre';

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>{' '}
        <Route path="/categoria/:id">
          <Categoria />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
