import React from 'react'
import BooksContainer from '../components/carousel/BooksContainer'


const Categorias = () => {
  return (
    <>
    <BooksContainer entity= 'subjects/woman' title ='Woman'/>
    <BooksContainer entity= 'subjects/science' title ='Science'/>
    <BooksContainer entity= 'subjects/fantasy' title ='Fantasy'/>
    <BooksContainer entity= 'subjects/thriller' title ='Thriller'/>
    <BooksContainer entity= 'subjects/science_fiction' title ='Science fiction'/>
    </>

  )
}

export default Categorias