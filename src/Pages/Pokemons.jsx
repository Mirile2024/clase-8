import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Pokemons() {
  const [pokeList, setPokeList] = useState([])
  const url ='https://pokeapi.co/api/v2/pokemon/?limit=151'

  useEffect(() => {
    axios(url).then(res=> setPokeList(res.data.results))
  
  }, [url])
  
  return (
    <div>
      <aside>
      <h1>Mi Lista de Pokemones</h1>
      <ol>
        {pokeList.map(poke =>
          <li key={poke.name}><Link to={poke.name}>{poke.name}</Link></li>
        )}
      </ol>
      </aside>
      <Outlet />
    </div>
  )
}
