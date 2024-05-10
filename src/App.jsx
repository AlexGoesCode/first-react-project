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
// const [userSearch, setUserSearch] = useState("")

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
  
  const handleSearch = (searchTerm) => {
    // console.log('searchTerm :>> ', searchTerm);
    // setUserSearch(searchTerm)
    // const words = ["one", "two", "thREe", "car", "plane", "red", "yellow"]

    // const filteredWords = words.filter((word) => {
    //   return word.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    // })
    // console.log('filteredWords :>> ', filteredWords);


    // fetchCharacters(searchTerm);
  };
  function handleButtonClickNext () {
  
    console.log("dasdadadasdaknlkn");
    setCurrentPage(currentPage + 1)
    console.log('currentPage :>> ', currentPage);
  }

  function handleButtonClickPrev() {
    setCurrentPage(currentPage - 1)
    console.log('currentPage :>> ', currentPage);

  }


  useEffect(() => {
    console.log("%c useEffect run", "color:orange");
    fetchCharacters('', currentPage);
  }, [currentPage]);


  return (
    <div className='abc'>
  
      {console.log("%c JSX rendered ", "color:purple")}
      <Navbar onSearch={handleSearch} />
      <div>
      <button onClick={handleButtonClickPrev}>
        Previous
      </button>
      <button onClick={handleButtonClickNext}  value="next">
        Next
      </button>
      </div>

      {charactersList ?
      <>
      
        <CharacterGrid characters={charactersList} />
        {/* {<PaginationBasic
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />} */}
        </>
        : <h1>{errorMessage}</h1>
      }
      
    </div>
  );
}

export default App;

