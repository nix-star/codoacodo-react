import React from "react";
import { Link } from "react-router-dom";

const UpBar = () => {
    return (
        <>
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
        </>
    )
}

export default UpBar