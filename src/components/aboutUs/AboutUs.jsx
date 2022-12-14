import "../../style/aboutUs/aboutUs.css"
import "../../style/inicio.css"

const AboutUs = () => {
    return (
        <>
            <h1 className="tituloPrincipal">About Us</h1>
            <div className="containerAboutUs">
                Somos un grupo de estudiantes de React en Codo a Codo y este es nuestro TP, en el cual implementamos los conocimientos adquiridos durante la cursada
            </div>
            <div class="gallery">
                <img src="./img/BA.png" alt="BA" width="600" height="400"/>
            </div>
            <div class="gallery">
                <img src="./img/bsAsCiudad.png" alt="BACiudad" width="600" height="400"/>
            </div>
            <div class="gallery">
                <img src="./img/codoAcodo.png" alt="CodoACodo" width="600" height="400"/>
            </div>
            <div class="gallery">
                <img src="./img/items.png" alt="items" width="600" height="400"/>
            </div>        
        </>
      )

}

export default AboutUs;