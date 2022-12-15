import React from "react";
import "../../style/inicio/nav.css";
import { Link, Outlet } from "react-router-dom";
import UpBar from "./header/UpBar";
import Top from "./header/Top";
import Navbar from "./header/Navbar";
//import BurguerButton from "../indiceComp/BurguerButton"
//import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <header>
        <UpBar />
        <Top />
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
