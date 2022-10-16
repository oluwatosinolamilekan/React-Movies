import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import './App.css';
const API_URL = ' http://www.omdbapi.com/?apikey=de625ec';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
    }
    useEffect(() => {
      searchMovies("Batman");
    }, []);

    const handleChange = (e) => {
      setSearchTerm(e.target.value);
      searchMovies(e.target.value)
    }
  return (
    <div className="app">
       <h1>Movies</h1>

       <div className='search'>
          <input
            placeholder='Search for movies'
            value={searchTerm}
            onChange={handleChange}
          />
          {/* <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
          />  */}
       </div>
        <MovieList movies={movies}/>
    </div>
  );
}

export default App;
