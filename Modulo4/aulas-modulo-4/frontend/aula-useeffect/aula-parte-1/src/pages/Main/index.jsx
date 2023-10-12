import { useEffect, useState } from 'react';
import './styles.css';

export default function Main() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("effequitei só no momento");
    console.log("effequito toda vez que count atualiza");
  }, [count])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Incremento</button>
    </>
  )
}
