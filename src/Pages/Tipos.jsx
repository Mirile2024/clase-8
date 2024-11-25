import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Tipos() {
    const [tiposList, setTiposList] = useState([])
    const url ='https://pokeapi.co/api/v2/type/'
  
    useEffect(() => {
      axios(url).then(res=> setTiposList(res.data.results))
    
    }, [url])
  
  return (
    <div>
      <aside>
      <h1>Tipos de Pokemones</h1>
      <ol>
        {tiposList.map(tipos =>
          <li key={tipos.name}><Link to={tipos.name}>{tipos.name}</Link></li>
        )}
      </ol>
      </aside>
      <Outlet />
    </div>
  )
}
