import { useEffect, useState } from 'react';
import './styles.css';

export default function Counter({ handleChangeText }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    handleChangeText("Montei o componente")

    return () => {
      handleChangeText("Desmontei o componente")
    }
  }, [])

  useEffect(() => {
    console.log("Atualizando");
  }, [count])

  return(
    <div className='container-counter'>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {console.log("Montagem")}
    </div>
  )
}