
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
        <nav>
            <Link to={"/"} > Inicio</Link>
            <Link to={"/destacados"}>Destacados</Link>
            <Link to={"/novedades"}>Novedades</Link>
            <Link to={"/busquedas"}>Busquedas</Link>
        </nav>
        <section>
            <Outlet />
        </section>
    </main>
  )
}

export default Layout

