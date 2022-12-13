import React from "react";
import "../../style/inicio/nav.css";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <top>
          <h1>BOOKS<spam>&</spam>MORE</h1>
          <div className="search">
            (desplegable)
            <div className="searchSpace">
            <li>
              
              <Link to={"/busquedas"}>About Us</Link>
            
          </li>
            </div>
            (lupa)
          </div>
          <div className="shop">
<img src="" alt="" />
          </div>
        </top>
      
        <nav>
          <ul>
            <li>
              <Link to={"/"} >
                {" "}
                Home
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
              
                <Link to={"/aboutUs"}>About Us</Link>
              
            </li>
          </ul>
        </nav>
        <div className="christmasBanner">
          <div className="giftInfo">
          <h2>SHIP IT AND GIFT IT IN TIME</h2>
          <p>Date</p>
          <Link to={"/gift"} >
          FIND A GIFT
              </Link>
         
          </div>
        </div>
        <h4 className="texto-alineado">Books and more</h4>
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Nav;
