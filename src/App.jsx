import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CharacterGrid from './components/CharacterGrid';
// import PaginationComponent from './components/Pagination';

function App() {
  console.log("%c component rendered ", "color:green");

  const [charactersList, setCharactersList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("...Loading...")
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
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
        console.log('data :>> ', data);
        setCharactersList(data.results);
        setTotalPages(data.info.pages)
      } else {
        setErrorMessage("something went wrong")
      }
    } catch (error) {
      console.log('error :>> ', error);
      setErrorMessage("some network problem...")
    }
  };

  
  const handleSearch = (newSearchTerm) => {
    console.log('searchTerm :>> ', newSearchTerm);
    if (newSearchTerm !== searchTerm) { // Check if the term actually changed
      setSearchTerm(newSearchTerm); // Update searchTerm state
      setCurrentPage(1); // Reset to first page

      // Immediately filter characters if the list is already fetched
      if (charactersList.length > 0) {
        const filtered = charactersList.filter(character =>
          character.name.toLowerCase().includes(newSearchTerm.toLowerCase())
        );
        setFilteredCharacters(filtered);
        console.log('Filtered characters:', filtered);
      }
    }
    // setUserSearch(searchTerm)
    // const words = ["one", "two", "thREe", "car", "plane", "red", "yellow"]

    // const filteredWords = words.filter((word) => {
    //   return word.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    // })
    // console.log('filteredWords :>> ', filteredWords);


    // fetchCharacters(searchTerm);
  };

  function handlePageChange(direction) {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      console.log("Attempting to go to the next page:");

    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log("Attempting to go to the previous page:");

    } else {
      console.log("No page change possible.");
    }
  }

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
    console.log("%c useEffect run", "color:orange");
    fetchCharacters(searchTerm, currentPage).then(() => {
      if (searchTerm && charactersList.length > 0) {
        const filtered = charactersList.filter(character =>
          character.name.toLowerCase(),includes(searchTerm.toLowerCase())
        );
        setFilteredCharacters(filtered);
      }
    });
  }, [searchTerm, currentPage]);


  return (
    <div className='abc'>
  
      {console.log("%c JSX rendered ", "color:purple")}
      <Navbar onSearch={handleSearch} />
      <div>
      <button onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={() => handlePageChange("next")} disabled={currentPage === totalPages}>
        Next
      </button>
      </div>

      {filteredCharacters.length > 0 ?
      <>
        <CharacterGrid characters={filteredCharacters} />
        
        </>
        : <h1>{errorMessage}</h1>
      }
      
    </div>
  );
}

export default App;

