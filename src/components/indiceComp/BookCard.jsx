
import '../../style/inicio/BooksCard.css'

export function BooksCard({ book }) {
    const dbUrl = `https://image.tmdb.org/t/p/w300${book.poster_path}`;
  
    return (
      <li className="liStyle">
        <img className="bookImg" src={dbUrl} alt={book.title} />
        <div className="cardInfo">
          <p>{book.title}</p>
          <p>{book.release_date}</p>
        </div>
        <button className="btn">Click to see backdrop</button>
      </li>
    );
  }
  