import React from "react";
import "../../style/inicio/nav.css";
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
              <Link to={"/"} target="_blank">
                {" "}
                Inicio
              </Link>
            </li>
            <li>
              <Link to={"/destacados"} target="_blank">
                Destacados
              </Link>
            </li>
            <li>
              <Link to={"/novedades"} target="_blank">
                Novedades
              </Link>
            </li>
            <li>
              <Link to={"/categorias"} target="_blank">
                Categorías
              </Link>
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
