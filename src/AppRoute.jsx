import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pokemons from './Pages/Pokemons'
import App from './App'
import { routes } from './Routes'
import Pokemon from './Componentes/Pokemon'
import Tipos from './Pages/Tipos'
import Tipo from './Componentes/Tipo'

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path={routes.app} element={<App />} >
          <Route path={routes.pokemons} element={<Pokemons />} >
            <Route path={routes.pokemon} element={<Pokemon />} />
          </Route>
          <Route path={routes.tipos} element={<Tipos />} >
            <Route path={routes.tipo} element={<Tipo />} >
            <Route path={routes.tipoPokemon} element={<Pokemon />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}
