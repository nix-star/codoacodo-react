import React from "react";
//import Nav from "../components/indiceComp/Nav";
import Main from "../components/indiceComp/Main";
import CarouselHome from '../components/indiceComp/carHome'
import Aside from "../components/indiceComp/Aside";
import IconsBar from "../components/indiceComp/IconsBar";
import Suggestions from '../components/indiceComp/Suggestions'
import Footer from "../components/indiceComp/Footer";
import "../style/inicio.css";

export default function inicio() {
  return (
    <>
      
      <CarouselHome />
      <Main />
      <Suggestions />
      <Aside />
      <IconsBar />
      <Footer creator="©2022 -  Created by GROUP 8 with  ❤️" />
    </>
  );
}
