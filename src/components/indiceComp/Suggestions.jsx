import books from "../../books.json";
import { BooksCard } from "../indiceComp/BookCard";
import '../../style/inicio/CarouselSug.css'

export function Suggestions () {
  return (
<ul className="books-grid-container">
{books.map((book) => (

<BooksCard key = {book.id} book = {book} />

))
}
</ul>
  )
}
