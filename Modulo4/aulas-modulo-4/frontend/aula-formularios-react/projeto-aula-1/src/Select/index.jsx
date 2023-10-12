import { useState } from 'react';
import './styles.css';


export default function Select() {

  const [select, setSelect] = useState({id: "", name: ""})
  const [options, setOptions] = useState([
    {
      id: 1,
      name: "Maçã",
      value: 100 
    },
    {
      id: 2,
      name: "Banana",
      value: 200 
    },
    {
      id: 3,
      name: "Laranja",
      value: 300 
    },
    {
      id: 4,
      name: "Pera",
      value: 100 
    }
  ])


  function clearForm() {
    console.log("limpo");
  }

  function handleChangeSelect(e) {
    const localOption = [...options]

    const fruit = localOption.find((item) => item.id === parseInt(e.target.value))

    setSelect({id: fruit.id, name: fruit.name})
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        {select.name}
        
        <select 
          value={select.id} 
          onChange={(e) => handleChangeSelect(e)}
        >
          {options.map((item) => {
            return (
              <option 
                key={item.id} 
                value={item.id} 
              >
                {item.name}
              </option>
            )
          })}
        </select>

        <button type='submit'>Salvar</button>
        <button type='button' onClick={clearForm}>Limpar</button>
      </form>
    </>
  )
}

