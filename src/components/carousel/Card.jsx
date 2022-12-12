import "../../style/carousel/Card.scss";

const Card = ({ newbook }) => {

    return(
        <div className="card">
            <img className="cardImg" src={`https://covers.openlibrary.org/b/id/${newbook?.cover_i}-M.jpg`} alt={newbook?.title}/>
            <div className="data">
                <p className="cardP">{newbook?.title}</p>
                <div className="author">
                    <p className="cardP">{newbook?.author_name}</p>
                    <p className="cardP">{newbook?.first_publish_year}</p>        
                </div>
            </div>
        </div>
    );
};

export default Card; 