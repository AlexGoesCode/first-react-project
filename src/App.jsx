import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CharacterGrid from './components/CharacterGrid';

function App() {
    const [charactersList, setCharactersList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("...Loading...");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    const fetchCharacters = async (searchTerm, page) => {
    let apiUrl = `https://rickandmortyapi.com/api/character?page=${page}`;
    if (searchTerm) {
    apiUrl += `&name=${encodeURIComponent(searchTerm)}`;
    }
        try {
        const response = await fetch(apiUrl);
        if (response.ok) {
        const data = await response.json();
        setCharactersList(data.results);
        setTotalPages(data.info.pages);
        filterCharacters(data.results, searchTerm); // moved filtering here
            } else {
        setErrorMessage("something went wrong");
        }
    } catch (error) {
        setErrorMessage("some network problem...");
    }
    };

    const filterCharacters = (characters, searchTerm) => {
    if (searchTerm) {
    const filtered = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
    console.log("Filtered characters:", filtered); // logs the filtered list
    } else {
    setFilteredCharacters(characters);
    }
    };

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

  // function handleButtonClickNext () {
  //   if (currentPage < totalPages) {
  //   setCurrentPage(currentPage + 1)
  //   console.log('currentPage :>> ', currentPage);
  //   }
  // }

  // function handleButtonClickPrev() {
  //   if (currentPage > 1) {
  //   setCurrentPage(currentPage - 1);
  //   console.log('currentPage :>> ', currentPage);
  //   }
  // }

    useEffect(() => {
    fetchCharacters(searchTerm, currentPage);
    }, [searchTerm, currentPage]); 
    return (
    <div className='abc'>
        <Navbar onSearch={(newSearchTerm) => {   
            console.log("Search input:", newSearchTerm); // See what user types
        setSearchTerm(newSearchTerm.trim().toLowerCase());
        }} />
        <div>
            <button onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
            Previous
            </button>
            <button onClick={() => handlePageChange("next")} disabled={currentPage === totalPages}>
            Next
            </button>
        </div>
        {filteredCharacters.length > 0 ? (
        <CharacterGrid characters={filteredCharacters} />
        ) : (
        <h1>{errorMessage}</h1>
        )}
    </div>
    );
}

export default App;
