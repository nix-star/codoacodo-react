import React from "react";
import "../../style/inicio/nav.css";
import { Link, Outlet } from "react-router-dom";
import UpBar from "./header/UpBar";
import Navbar from "./header/Navbar";
//import BurguerButton from "../indiceComp/BurguerButton"
//import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <header>
        <UpBar />

        <top>
          <h1>
            BOOKS<spam>&</spam>MORE
          </h1>
          <div className="search">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="/">
                    Feminist
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Infantile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Thriller
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Fantasy
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Mystery
                  </a>
                </li>
              </ul>
            </div>
            <div className="searchSpace">
              <Link to={"/busquedas"} className="searchSpaceText">
                Search by Title, Author or Category
              </Link>
            </div>
            <div className="magnifingGlass">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="shop">
            <i className="fa-solid fa-cart-shopping shopIcon"></i>
          </div>
        </top>
        <Navbar />

        <div className="christmasBanner">
          <div className="giftInfo">
            <h2>SHIP IT AND GIFT IT IN TIME</h2>
            <p>Date</p>
            <Link to={"/gift"} className="giftLink">
              FIND A GIFT
            </Link>
          </div>
        </div>
        <div className="subtitle">
          <h4>Books, movies, gifts and much more</h4>
        </div>
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Nav;
