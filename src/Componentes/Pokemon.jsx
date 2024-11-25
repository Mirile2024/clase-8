import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Pokemon() {
    const [poke, setPoke] = useState([])
    const {name} = useParams()
  
    useEffect(() => {
      axios(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res=> setPoke(res.data))
    
    }, [name])
  
  return (
        <>
    <h2>{poke?.name}</h2>
    <img src={poke?.sprites?.front_default} alt={poke.name} />
        </>
  )
}
