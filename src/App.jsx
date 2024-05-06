import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CharacterGrid from './components/CharacterGrid';

function App() {
  console.log("%c component rendered", "color:green");
  const [charactersList, setCharactersList] = useState(null);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log('data :>> ', data);
    const characters = data.results;
    console.log('characters :>> ', characters);
    setCharactersList(characters);
  };

  useEffect(() => {
    console.log("%c useEffect run ", "color:orange");
    fetchCharacters();
  }, []);

  return (
    <div>
      {console.log("%c JSX rendered ", "color:red")}
      <Navbar />
      <h1>Hello</h1>
      {charactersList ?
        <CharacterGrid characters={charactersList} />  // Uses CharacterGrid here
        : <h1>Loading characters...</h1>  // Displays while characters are fetched
      }
    </div>
  );
}

export default App;
