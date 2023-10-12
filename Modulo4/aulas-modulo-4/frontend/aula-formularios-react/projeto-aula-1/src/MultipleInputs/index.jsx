import { useState } from 'react';
import './styles.css';


export default function MultipleInputs() {

  const [form, setForm] = useState({
    name: "",
    address: "",
    age:0,
    password: ""
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  function clearForm() {
    setForm({
      name: "",
      address: "",
      age:0,
      password: ""
    })
    setError("")
    setSuccess("")
  }

  function handleSubmit(e) {
    e.preventDefault();

    setError("")

    console.log(selectedOption);

    if(!form.name) {
      setError("O nome é obrigatório")
      return
    }

    if(!form.address) {
      setError("O endereço é obrigatório")
      return
    }

    if(form.age <= 17) {
      setError("Voce precisa ser maior de idade")
      return
    }

    if(form.password.length < 8) {
      setError("A senha precisa ter no mínimo 8 caracteres")
      return
    }

    return setSuccess("Deu certo!")
  }

  function handleChangeForm(e) {
    const value = e.target.value
    
    setForm({...form, [e.target.name]: value})
  }


  return (
    <>
      <form onSubmit={handleSubmit}>

        <input 
          type="text" 
          placeholder='Digite seu nome'
          name='name'
          value={form.name}
          onChange={(e) => handleChangeForm(e)}
        />   

        <input 
          type="text" 
          placeholder='Digite endereço'
          name='address'
          value={form.address}
          onChange={(e) => handleChangeForm(e)}
        /> 

        <input 
          type="number" 
          placeholder='Digite sua idade'
          name='age'
          value={form.age}
          onChange={(e) => handleChangeForm(e)}
        />
        
        <input 
          type={showPassword ? "text" : "password"}
          placeholder='Digite sua senha'
          name='password'
          value={form.password}
          onChange={(e) => handleChangeForm(e)}
        />
        <div>
          <input 
            type="checkbox" 
            name="show-password" 
            checked={showPassword} 
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="">Mostrar senha</label>
        </div>
        
        <strong>qual periodo estudar?</strong>
        <div>
        <input 
            type="radio" 
            name="morning"
            value="morning"
            checked={selectedOption === "morning"} 
            onChange={() => setSelectedOption("morning")}
          />
          <label htmlFor="morning">Manhã</label>

          <input 
            type="radio" 
            name="night"
            value="night"
            checked={selectedOption === "night"} 
            onChange={() => setSelectedOption("night")}
          />
          <label htmlFor="night">Noite</label>
        </div>
        
        {error && <span className="error">{error}</span>}
        {success && <span className="success">{success}</span>}

        <button type='submit'>Salvar</button>
        <button type='button' onClick={clearForm}>Limpar</button>
      </form>
    </>
  )
}

