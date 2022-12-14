
//import '../../style/inicio/BooksCard.css'

//import "../../style/carousel/Card.scss";
import '../../style/inicio/CarouselSug.css'

const Card = ({ newbook }) => {

    return(
        <div className="card">
            <img className="cardImage" src={`https://covers.openlibrary.org/b/id/${newbook?.cover_i}-M.jpg`} alt={newbook?.title}/> 
            {/* <img className="cardImage" src={`https://covers.openlibrary.org/b/id/${newbook?.cover_id}-M.jpg`} alt={newbook?.title}/> */}
            {/*
            <div className="data">
                <p className="dataP">{newbook?.title}</p>
                <div className="author">
                    <p className="authorP">{newbook?.author_name}</p>
                    <p className="authorP">{newbook?.first_publish_year}</p>        
    </div> 
            </div> */}
        </div>
    );
};

export default Card; 
  