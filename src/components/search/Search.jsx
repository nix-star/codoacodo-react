import "../../style/search/search.css"
import "../../style/inicio.css"

const Search = () => {
    return (
        <>
            <h1 className="tituloPrincipal">Buscador</h1>
            <div className="containerSearch">
                <form className="formSearch">
                    <input
                        type="Text"
                        name="search"
                        id="search"
                        width="500px"
                        color="secondary"
                        labelPlaceholder="Buscar Cursos"
                    />
                    <button
                        color="secondary"
                        ghost
                        shadow
                        type="submit"
                        >
                        &nbsp;Buscar&nbsp;
                    </button>
                </form>

            </div>
        </>
      )

}

export default Search;