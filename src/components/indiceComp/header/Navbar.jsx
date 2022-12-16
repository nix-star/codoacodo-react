import React from "react";
import { Link } from "react-router-dom";
//import styled from "styled-components";
import BurgerButton from "./BurguerButton"

const Navbar = () => {
  return (
    <>
    
      <nav>
        <ul className="links active">
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
      {/*
      <div className="burger">
      <BurgerButton />
  </div> */}
      
    </>
  );
};

export default Navbar;

/*

const NavBarStyle = styled.nav`

.links {
   position: absolute;
   top: -700px;
   left: -2000px;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
    @media(min-width: 768px) {
        position: initial;
    }
}

.links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center
}

.burger {
    @media(min-width: 768px) {
        display: none;
    }
}
`
*/