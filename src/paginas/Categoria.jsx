import '../assets/css/blog.css';

import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';
import SubCategoria from './SubCategoria';
import { busca } from '../api/api';

const Categoria = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();

  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => {
          return (
            <li
              className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
              key={subcategoria}
            >
              <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
            </li>
          );
        })}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        <Route exact path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  );
};

export default Categoria;
