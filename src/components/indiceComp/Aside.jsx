import "../../style/inicio/aside.css";

const Aside = () => {
  return (
    <>
      <div className="asideContainer">
        <div className="asideSubContainer">
          <div className="logo">
            <p>&</p>
            <div className="logoText">
              <h2>
                BOOKS<span>&</span>MORE{" "}
              </h2>
            </div>
          </div>
          
            <div className="bottomAside">
              <div className="film">
                <h3>The new Books & More Film</h3>
              </div>
              <div class="iframe">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/CndQ-CxwnNY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
         
        </div>

        <div className="asideSubContainer sub2">
            <div className="logo logo2">
              <p>&</p>
              <div className="logoText">
                <h2>
                  BOOKS<span>&</span>MORE{" "}
                </h2>
              </div>
            </div>
            <div className="bottomAside">
              <div className="film">
                <h3>The new Books & More suggested links</h3>
              </div>
              <aside class="sites">
                <strong>External links</strong>
                <ul>
                  <li>
                    <a
                      href="https://www.ebookelo.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ebookelo
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://lectulandia.to/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lectulandia
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ebiblioteca.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      e-Biblioteca
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.cervantesvirtual.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Biblioteca Virtual Miguel de Cervantes
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Aside;
