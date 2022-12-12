import books from '../../books.json'
import { BookCard } from '../indiceComp/BookCard'
import "../../style/inicio/CarouselSug.css";

export function CarouselSug () {
    return (
  <ul className="booksContainer">
  {books.map((book) => (
  
  <BookCard key = {book.id} movie = {book} />
  
  ))
  }
  </ul>
    )
  }
