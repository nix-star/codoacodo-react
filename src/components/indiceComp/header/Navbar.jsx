import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BurgerButton from "./BurguerButton"

const Navbar = () => {
  return (
    <>
    <NavBarStyle>
      <nav>
        <ul className="links">
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
      <div className="burger">
      <BurgerButton />
      </div>
      </NavBarStyle>
    </>
  );
};

export default Navbar;

const NavBarStyle = styled.nav`
.burger {
    @media(min-width: 768px) {
        display: none;
    }
}
`
