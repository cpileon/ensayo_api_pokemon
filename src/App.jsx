import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading';

function App() {
  const [poke, setPoke] = useState([])

  const url = "https://pokeapi.co/api/v2/pokemon/4/"

  const getBulbasaur = async() =>{
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setPoke(data)
 
  }

  useEffect(()=>{
    getBulbasaur()
  },[])



  return (
    <>
      <h1>{poke.name}</h1>
      <div>
        Peso: {poke.weight}
      </div>
      <p>tipo: {poke.types[0].type.name} </p>
    </>
  )
}

export default App
