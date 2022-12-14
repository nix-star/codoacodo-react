import "../../style/aboutUs/aboutUs.css";
import "../../style/inicio.css";
import codoAcodo from "./img/codoAcodo.png";
import bsAsCiudad from "./img/bsAsCiudad.png";
import BA from "./img/BA.png";
import items from "./img/items.png";
import "../../style/carousel/Card.scss";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="text">
          Somos un grupo de estudiantes de React en Codo a Codo.
          <br />
          Este sitio es nuestro Trabajo Práctico, en el cual implementamos los conocimientos
          adquiridos durante la cursada
        </div>
        <div className="containerGallery">
          <div className="gallery">
            <img src={BA} alt="BA" width="600" height="400" />
          </div>
          <div className="gallery">
            <img src={bsAsCiudad} alt="BACiudad" width="600" height="400" />
          </div>
          <div className="gallery">
            <img src={codoAcodo} alt="CodoACodo" width="600" height="400" />
          </div>
          <div className="gallery">
            <img src={items} alt="items" width="600" height="400" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
