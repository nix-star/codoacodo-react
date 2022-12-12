import "../../style/carosel/Card.scss";

const Card = ({ newbook }) => {

    return(
        <div className="card">
            <img src={`https://covers.openlibrary.org/b/id/${newbook?.cover_i}-M.jpg`} alt={newbook?.title}/>
            <div className="data">
                <p>{newbook?.title}</p>
                <div className="author">
                    <p>{newbook?.author_name}</p>
                    <p>{newbook?.first_publish_year}</p>        
                </div>
            </div>
        </div>
    );
};

export default Card; 