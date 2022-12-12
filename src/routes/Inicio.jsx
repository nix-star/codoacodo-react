import React from "react";
//import Nav from "../components/indiceComp/Nav";
import Main from "../components/indiceComp/Main";
import Aside from "../components/indiceComp/Aside";
import IconsBar from "../components/indiceComp/IconsBar";
import Suggestions from '../components/indiceComp/Suggestions'
import Footer from "../components/indiceComp/Footer";
import "../style/inicio.css";

export default function inicio() {
  return (
    <>
      
      <Main />
      <Aside />
      <IconsBar />
      <Suggestions />
      <Footer creator="©2022 -  Created by GROUP 8 with ❤️" />
    </>
  );
}
