import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
    return (
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
    )
}
export default Top