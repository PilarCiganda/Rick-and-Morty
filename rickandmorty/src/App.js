import './App.css';
import Characters from "./Componentes/Characters";
import Main from "./Componentes/Main";
import Card from "./Componentes/Card"
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([])
  const [char, setChar] = useState([])

    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const response = await res.json();
      setCharacters(response.results)
      setChar(response.results)
    }
  
    useEffect(() => {
      fetchCharacters()
    }, [])

  return (
    <Routes>
      <Route path="/" element={<Main  />} />
      <Route path="characters" element={<Characters characters={characters} setCharacters={setCharacters} char={char} setChar={setChar} />} />
      <Route path="characters/:id" element={<Card  characters={characters} setCharacters={setCharacters} />} />
    </Routes>
  );
}

export default App;
