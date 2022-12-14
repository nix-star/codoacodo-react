import React from "react";
import "../../style/inicio/nav.css";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <div className="upBar">
          <ul>
            <li>
              <i className="fa-solid fa-location-dot locationIcon"></i>
              <Link to={"/"}>STORES & EVENTS</Link>
            </li>
            <li>
              <Link to={"/destacados"}>HOLIDAY SHIPPING</Link>
            </li>
            <li>
              <Link to={"/novedades"}>MEMBERSHIP</Link>
            </li>
            <li>
              <Link to={"/categorias"}>COUPONS & DEALS</Link>
            </li>
            <li>
              <Link to={"/aboutUs"}>BESTSELLERS</Link>
            </li>
            <li className="lastNoBorder">
              <Link to={"/gifts"}>GIFT CARD</Link>
            </li>
          </ul>
          <div className="upBarRight">
            <div className="account">
            <i class="fa-regular fa-circle-user"></i>
            <h3>MY ACCOUNT</h3>
            </div>
            <div className="wishlist">
            <i class="fa-regular fa-heart"></i>
            <h3>WISHLIST</h3>
            </div>
          </div>
        </div>
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
                    Suspense
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
              <Link to={"/busquedas"} className="searchSpaceText">Search by Title, Author or Category</Link>
            </div>
            <div className="magnifingGlass">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="shop">
            <i className="fa-solid fa-cart-shopping shopIcon"></i>
          </div>
        </top>

        <nav>
          <ul>
            <li>
              <Link to={"/"}> Home</Link>
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
              <Link to={"/Music"}>Music & Movies</Link>
            </li>
          </ul>
        </nav>
        <div className="christmasBanner">
          <div className="giftInfo">
            <h2>SHIP IT AND GIFT IT IN TIME</h2>
            <p>Date</p>
            <Link to={"/gift"}>FIND A GIFT</Link>
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
