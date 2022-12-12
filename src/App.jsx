import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Layout from './components/layout/Layout'

import Inicio from './routes/Inicio'
import Descatados from './routes/Descatados'
import Novedades from './routes/Novedades'
import Categorias from './routes/Categorias'
import Busquedas from './routes/Busquedas'
import Carosel from './components/carousel/Carousel'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio />} >
        
        <Route path='destacados' element={<Descatados />} />
        <Route path='novedades' element={<Novedades />} />
        <Route path='categorias' element={<Categorias />} />
        <Route path='busquedas' element={<Busquedas />} />
        <Route path='carousel' element={<Carosel />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
