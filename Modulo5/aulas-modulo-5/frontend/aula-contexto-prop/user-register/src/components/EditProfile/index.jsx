import { useState } from "react";
import useUser from "../../hooks/useUser";
import "./style.css";

export default function EditProfile() {
  const { setName, setAge, setBecks} = useUser()

  const [localName, setLocalName] = useState("")
  const [localAge, setLocalAge] = useState("")
  const [localBeck, setLocalBeck] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    setName(localName)
    setAge(localAge)
    setBecks(localBeck) 
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome
          <input 
            name="name" 
            type="text" 
            placeholder="Nome"
            value={localName}
            onChange={(e) => setLocalName(e.target.value)}
            />
        </label>
        <label htmlFor="age">
          Idade
          <input 
            name="age" 
            type="text" 
            placeholder="Idade"
            value={localAge}
            onChange={(e) => setLocalAge(e.target.value)}
            />
        </label>
        <label htmlFor="count">
          Becks
          <input 
            name="count" 
            type="text" 
            placeholder="Quantos becks fumar por semana?"
            value={localBeck}
            onChange={(e) => setLocalBeck(e.target.value)}
            />
        </label>
        <button>Editar</button>
      </form>
    </>
  )
}