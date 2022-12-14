import React from 'react'
import style from './libroCard.module.css'

const LibroCard = ({libro}) => {
  let imgURL= `https://covers.openlibrary.org/b/id/${libro?.cover_i}-M.jpg`;

  return (
    <li className={style.librosCard}>
      <img className={style.libroImage}
      width={230}
      height={345} src={imgURL} alt={libro.title} />
      <div>{libro.title}</div>
    </li>
  )
}

export default LibroCard
