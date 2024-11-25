import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

export default function Tipo() {
    const [pokeList, setPokeList] = useState([])
    const {tipo} = useParams()
  
    useEffect(() => {
      axios(`https://pokeapi.co/api/v2/type/${tipo}/`).then(res=> setPokeList(res.data.pokemon))
    
    }, [tipo])

  return (
    <div>
    <aside>
    <h1>Pokemones de tipo: {tipo}</h1>
    <ol>
      {pokeList.map(poke =>
        <li key={poke.pokemon.name}>
            <Link to={poke.pokemon.name}>{poke.pokemon.name}</Link>
        </li>
      )}
    </ol>
    </aside>
    <Outlet />
  </div>

  )
}
