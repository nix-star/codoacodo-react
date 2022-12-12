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
              <Link to={"/"} >
                {" "}
                Inicio
              </Link>
            </li>
            <li>
              <Link to={"/destacados"} >
                Destacados
              </Link>
            </li>
            <li>
              <Link to={"/novedades"} >
                Novedades
              </Link>
            </li>
            <li>
              <Link to={"/categorias"} >
                Categorías
              </Link>
            </li>
            <li>
              
                <Link to={"/busquedas"}>Búsquedas</Link>
              
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
