import React from "react";
import "../../style/inicio/nav.css";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <top>
          <h1>Cervantes BookStore</h1>
        </top>
      
        <nav>
          <ul>
            <li>
              <Link to={"/"} >
                {" "}
                Init
              </Link>
            </li>
            <li>
              <Link to={"/destacados"} >
              Featured
              </Link>
            </li>
            <li>
              <Link to={"/novedades"} >
                News
              </Link>
            </li>
            <li>
              <Link to={"/categorias"} >
              Categories
              </Link>
            </li>
            <li>
              
                <Link to={"/busquedas"}>Searches</Link>
              
            </li>
          </ul>
        </nav>
        <h4 className="texto-alineado">Classic and contemporary works</h4>
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Nav;
