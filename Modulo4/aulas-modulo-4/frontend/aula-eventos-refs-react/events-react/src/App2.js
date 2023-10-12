import { useRef } from "react";
import "./App.css";

export default function App2() {
  const inputRef = useRef(null);
  const ulRef = useRef(null);

  function handleAddTask() {
    if (!inputRef.current.value) {
      return;
    }

    const li = document.createElement("li");

    li.appendChild(document.createTextNode(inputRef.current.value));
    ulRef.current.appendChild(li);

    inputRef.current.value = "";
  }

  return (
    <div className="container">
      <input type="text" placeholder="Adicionar uma tarefa" ref={inputRef} />
      <button onClick={handleAddTask}>Clica em mim</button>
      <ul ref={ulRef}></ul>
    </div>
  );
}
