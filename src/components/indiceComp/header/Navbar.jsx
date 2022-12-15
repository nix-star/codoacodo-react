import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
<nav>
          
          <ul  className="links">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/destacados"}>Featured</Link>
            </li>
            <li>
              <Link to={"/novedades"}>News</Link>
            </li>
            <li>
              <Link to={"/categorias"}>Categories</Link>
            </li>
            <li>
              <Link to={"/aboutUs"}>About Us</Link>
            </li>
            <li>
              <Link to={"/gifts"}>Stationery & Gifts</Link>
            </li>
            <li className="lastNoBorder">
              <Link to={"/music"}>Music & Movies</Link>
            </li>
          </ul>
          
        </nav>
    )
}

export default Navbar