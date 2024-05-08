import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CharacterGrid from './components/CharacterGrid';
import { Pagination } from './components/Pagination';
// import MyVerticallyCenteredModal from './components/Modal';

function App() {
  const [charactersList, setCharactersList] = useState(null);
  const [errorMessage, setErrorMessage] = useState("...Loading...")


  const fetchCharacters = async (searchTerm = '') => {
    let apiUrl = 'https://rickandmortyapi.com/api/character';
    if (searchTerm) {
      apiUrl += `?name=${encodeURIComponent(searchTerm)}`;
    }
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setCharactersList(data.results);
      } else {
        setErrorMessage("something went wrong")
      }
    } catch (error) {
      console.log('error :>> ', error);
      setErrorMessage("some network problem...")
    }


  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleSearch = (searchTerm) => {
    fetchCharacters(searchTerm);
  };

  return (
    <div className='abc'>
      <Navbar onSearch={handleSearch} />

      {charactersList ?
        <CharacterGrid characters={charactersList} />
        : <h1>{errorMessage}</h1>
      }
    </div>
  );
}

export default App;