import React from "react";
import '../../style/inicio/nav.css'
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <top>
        <h1>Librería Cervantes</h1>
        </top>
      
      <nav>
        <ul>
          <li>
            <a class="actual" href="indice.jsx" target="_blank">
              <Link to={"/"}> Inicio</Link>
            </a>
          </li>
          <li>
            <a href="destacados.jsx" target="_blank">
              <Link to={"/destacados"}>Destacados</Link>
            </a>
          </li>
          <li>
            <a href="novedades.jsx">
              <Link to={"/novedades"}>Novedades</Link>
            </a>
          </li>
          <li>
            <a href="categorias.jsx">
              <Link to={"/categorias"}>Categorías</Link>
            </a>
          </li>
          <li>
            <a href="busqueda.jsx">
              {" "}
              <Link to={"/busquedas"}>Búsquedas</Link>
            </a>
          </li>
        </ul>
      </nav>
      <h4 class="texto-alineado">Obras clásicas y contemporáneas</h4>
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Nav;
