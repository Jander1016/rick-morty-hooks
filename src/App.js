import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';
import imgHome from "./img/rick-morty.png"

function App() {
  const [characters, setCharacters]= useState('')

  const reqApi= async()=>{
    const api= await fetch('https://rickandmortyapi.com/api/character')
    const characterApi=await api.json()
    setCharacters(characterApi.results)
  }
  
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='title'>Rick & Morty</h1>
       
       { characters ? 
        ( <Characters characters={characters} setCharacters={setCharacters}/>)
        :(<>
          <img src={imgHome} alt='Rick & Morty' className='img-home' />
          <button className='btn-search' onClick={reqApi}>Buscar Personajes</button>
        </>)
       }
      </header >
    </div>
  );
}

export default App;
