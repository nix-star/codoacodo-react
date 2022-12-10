import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Nav = () => {
    return (
      <>
      <header>
        <h1>Librería Cervantes</h1>
    </header>
        <nav>
          
        <ul>
          <li>
            <a class="actual" href="index.html">
            <Link to={"/"} > Inicio</Link>
            </a>
          </li>
          <li>
            <a href="destacados.html"><Link to={"/destacados"}>Destacados</Link></a>
          </li>
          <li>
            <a href="novedades.html"><Link to={"/novedades"}>Novedades</Link></a>
          </li>
          <li>
            <a href="novedades.html">
            <Link to={"/categorias"}>Categorías</Link></a>
          </li>
          <li>
            <a href="busqueda.html"> <Link to={"/busquedas"}>Búsquedas</Link></a>
          </li>
        </ul>
        </nav>
        <section>
            <Outlet />
        </section>
        </>
    )
}

export default Nav