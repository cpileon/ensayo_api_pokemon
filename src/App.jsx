import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading';

function App() {
  const [poke, setPoke] = useState([])

  const url = "https://pokeapi.co/api/v2/pokemon/1/"

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
      </div >
      <div className={poke.types && poke.types[0].type.name}>
        {/*(if this part is true) && (this part will execute)*/}
        <p> {(poke.types && poke.types[0].type.name).toUpperCase()} </p>
      </div>
    </>
  )
}

export default App
