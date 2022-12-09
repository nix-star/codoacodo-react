import React from "react";
import Nav from "../components/indiceComp/Nav";
import Main from "../components/indiceComp/Main";
import Aside from "../components/indiceComp/Aside";
import IconsBar from "../components/indiceComp/IconsBar";
import Suggestions from "../components/indiceComp/Suggestions";
import Footer from "../components/indiceComp/Footer";
import "../style/inicio.css";
//import BackgroundBanner from "../../public/assets/img/banner-libros.jpg";
//import Cervantes from "../assets/img/el-amante-liberal-jpeg"

export default function inicio() {
  return (
    <>
      <Nav />
      <Main />
      <Aside />
      <IconsBar />
      <Suggestions />
      <Footer creator="©2022 -  Creado por GRUPO 8 con ❤️" />
    </>
  );
}
