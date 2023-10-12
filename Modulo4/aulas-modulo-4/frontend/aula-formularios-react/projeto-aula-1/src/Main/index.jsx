import { useState } from 'react';
import './styles.css';


export default function Main() {

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [age, setAge] = useState(0)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  function clearForm() {
    setName("")
    setAddress("")
    setAge("")
    setPassword("")
    setError("")
    setSuccess("")
  }

  function handleSubmit(e) {
    e.preventDefault();

    setError("")

    if(!name) {
      setError("O nome é obrigatório")
      return
    }

    if(!address) {
      setError("O endereço é obrigatório")
      return
    }

    if(age <= 17) {
      setError("Voce precisa ser maior de idade")
      return
    }

    if(password.length < 8) {
      setError("A senha precisa ter no mínimo 8 caracteres")
      return
    }

    return setSuccess("Deu certo!")
  }

  function handleChangeName(value) {
    setName(value)
  }

  function handleChangeAge(value) {
    setAge(value)
  }

  function handlSetPassword(value) {
    setPassword(value)
  }

  function handleChangeAddress(value) {
    setAddress(value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <input 
          type="text" 
          placeholder='Digite seu nome'
          value={name}
          onChange={(e) => handleChangeName(e.target.value)}
        />   

        <input 
          type="text" 
          placeholder='Digite endereço'
          value={address}
          onChange={(e) => handleChangeAddress(e.target.value)}
        /> 

        <input 
          type="number" 
          placeholder='Digite sua idade'
          value={age}
          onChange={(e) => handleChangeAge(e.target.valueAsNumber)}
        />
        

        <input 
          type="password" 
          placeholder='Digite sua senha'
          value={password}
          onChange={(e) => handlSetPassword(e.target.value)}
        />

       {error && <span className="error">{error}</span>}
       {success && <span className="success">{success}</span>}

        <button type='submit'>Salvar</button>
        <button type='button' onClick={clearForm}>Limpar</button>
      </form>
    </>
  )
}

