import React from 'react'
import BooksContainer from '../components/carousel/BooksContainer'


const Categorias = () => {
  return (
    <>
    <BooksContainer entity= 'woman' title ='Woman'/>
    <BooksContainer entity= 'science' title ='Science'/>
    <BooksContainer entity= 'fantasy' title ='Fantasy'/>
    </>
    
    
  )
}

export default Categorias