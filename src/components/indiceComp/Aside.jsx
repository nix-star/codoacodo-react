import "../../style/inicio/aside.css";

const Aside = () => {
  return (
    <>
      <div className="iframeLinks-container">
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
    </>
  );
};

export default Aside;
