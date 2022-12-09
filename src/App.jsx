import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Busquedas from './routes/Busquedas'
import Descatados from './routes/Descatados'
import Inicio from './routes/Inicio'
import Novedades from './routes/Novedades'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path='destacados' element={<Descatados />} />
        <Route path='novedades' element={<Novedades />} />
        <Route path='busquedas' element={<Busquedas />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
