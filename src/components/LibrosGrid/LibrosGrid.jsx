import axios from 'axios'

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import LibroCard from '../LibroCard/LibroCard'
import style from './librosGrid.module.css'

const LibrosGrid = () => {

    const [libros, setLibros] = useState([])
  

    const jsonLibros = async()=>{
        
        const url = 'https://openlibrary.org/trending/daily.json?limit=20'
        return await axios 
        .get(url)
        .then(({data}) => setLibros(data.works))
        .catch((error) => console.error(error));
    
    };

    useEffect(()=>{
        jsonLibros()
        
    },[]);
  return (
    <ul className={style.librosGrid}>
        {libros.map(libro =>
             <LibroCard key={libro.id} libro={libro} />
        )}
    </ul>
  )
}

export default LibrosGrid
