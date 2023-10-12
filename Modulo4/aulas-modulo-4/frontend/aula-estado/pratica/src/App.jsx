import { useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleChangeValue(value) {
    const newSum = count + value

    if(newSum < 0) {
      return
    }

    setCount(newSum)
  }

  return (
    <div className="container">
      <button className="decrement" onClick={() => handleChangeValue(-1)}>Decrementar</button>
      <p>{count}</p>
      <button className="increment" onClick={() => handleChangeValue(1)}>Incrementar</button>
    </div>
  )
}

export default App
