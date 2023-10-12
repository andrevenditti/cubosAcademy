import { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "O Miranha",
      active: true
    },
    {
      id: 2,
      name: "Omi for miga",
      active: false
    },
    {
      id: 3,
      name: "Ru qui",
      active: true
    },
    {
      id: 4,
      name: "Capitão a mé Rica",
      active: false
    },
    {
      id: 5,
      name: "Omide Ferro",
      active: true
    },
    {
      id: 6,
      name: "Scarlet",
      active: false
    },
  ])

  function filterOnlyActive() {
    const onlyActives = movies.filter((movie) => movie.active)
    console.log(onlyActives);
  }

  function handleChangeActive() {
    const localMovies = [...movies]
    localMovies.forEach((movie) => {
      movie.active = true
    })
    setMovies(localMovies)
  }

  return (
    <div className='container'>
      <ul>
        {movies.map((movie) => (movie.active && <li key={movie.id} >{movie.name}</li>))}
      </ul>
      <button onClick={filterOnlyActive}>Somente ativos</button>
      <button onClick={handleChangeActive}>Ativar todos</button>
    </div>
  )
}

export default App
