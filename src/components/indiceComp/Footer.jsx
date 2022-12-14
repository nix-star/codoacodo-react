import { Link, Outlet } from "react-router-dom";
//import Members from "../indiceComp/Members";
import "../../style/inicio/footer.css";

const Footer = ({ creator }) => {
  return (
    <>
      <div className="footer-container">
        <div className="us no-border">
          <h3 className="us-title">About <spam>us</spam></h3>
          <div className="us-bottom">
          <p className="about">
            Somos un grupo de estudiantes de React en Codo a Codo y este es
            nuestro TP, en el cual implementamos los conocimientos adquiridos
            durante la cursada, a cargo del profesor Gabriel Muñoz.
          </p>
          </div>
        </div>


        <div className="us">
          <h3 className="us-title">Know <spam>us</spam></h3>
          <div className="us-bottom">
          
          <Link to={"/miembros"} className="members"> 
              Members
              </Link>
             

          </div>
        </div>


        <div className="us">
            <h3 className="us-title">Follow <spam>us</spam></h3>
          <div className="us-bottom">
            <a
              href="https://twitter.com"
              className="socialLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              className="socialLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="socialLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com"
              className="socialLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        
          <div className="us">
            <h3 className="us-title">Find <spam>us</spam></h3>
            <div className="us-bottom">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.152386527801!2d-80.2311184743735!3d25.765529731291355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7bc406abbc9%3A0xbfbf0481da743334!2sCervantes%20Book%20Store!5e0!3m2!1ses-419!2sar!4v1670613913760!5m2!1ses-419!2sar"
              width="200"
              height="200"
              title="Google Maps Direction"
              allowfullscreen=""
              frameborder="0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
          </div>
        
      </div>

      <h6 className="footer-team">{creator}</h6>

      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Footer;
