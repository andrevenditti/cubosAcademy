import { useState } from 'react';
import './App.css';

function App() {
  const [car, setCar] = useState({
      id: 1,
      name: "Corolla",
      color: "black",
      year: 2021
    })

  function handleChangeYear(year) {
    setCar({
      ...car,
      year
    })
  }

  function handleChangeCar() {
    setCar({
      ...car,
      name: "Civic",
      color: "blue",
      year: 2022
    })
    console.log(car)
  }

  return (
    <div className='container'>
     <h1>{car.name}</h1>
     <h1>{car.color}</h1>
     <h1>{car.year}</h1>

     <button onClick={() => handleChangeYear(2020)} >2020</button>
     <button onClick={() => handleChangeYear(2021)} >2021</button>
     <button onClick={() => handleChangeYear(2022)} >2022</button>
     <button onClick={() => handleChangeYear(2023)} >2023</button>
     <button onClick={handleChangeCar} >Trocar carro</button>
    </div>
  )
}

export default App
