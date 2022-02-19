import '../assets/css/blog.css';

import { Route, useParams, useRouteMatch } from 'react-router-dom';

import ListaCategorias from './ListaCategorias';
import ListaPost from './ListaPost';
import React from 'react';

const Categoria = () => {
  const { id } = useParams();
  console.log(id);
  const { path } = useRouteMatch();

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <Route exact path={`${path}/`}>
        <ListaPost url={`/posts?categoria=${id}`} />
      </Route>
    </>
  );
};

export default Categoria;
