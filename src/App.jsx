import React from 'react'
import Nav from './components/indiceComp/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Layout from './components/layout/Layout'

import Inicio from './routes/Inicio'
import Descatados from './routes/Descatados'
import Novedades from './routes/Novedades'
import Categorias from './routes/Categorias'
import Busquedas from './routes/Busquedas'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Nav />} >
        <Route index element={<Inicio />} />
        <Route path='destacados' element={<Descatados />} />
        <Route path='novedades' element={<Novedades />} />
        <Route path='categorias' element={<Categorias />} />
        <Route path='busquedas' element={<Busquedas />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
