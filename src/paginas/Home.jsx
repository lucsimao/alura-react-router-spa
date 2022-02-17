import ListaPost from '../components/ListaPost';
import React from 'react';

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaPost url="/posts"></ListaPost>
    </main>
  );
};

export default Home;
