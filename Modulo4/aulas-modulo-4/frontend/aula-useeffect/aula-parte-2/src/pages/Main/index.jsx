import { useState } from 'react';
import Counter from '../../components/Counter';
import './styles.css';

export default function Main() {
  const [showCount, setShowCount] = useState(false)
  const [text, setText] = useState("")

  function handleChangeText(newText) {
    setText(newText)
  }

  return (
    <>
      {text}
      {showCount && 
        <Counter handleChangeText={handleChangeText} />
      }
      <button onClick={() => setShowCount(!showCount)} >Exibir/Ocultar</button>
    </>
  )
}

