import { useRef } from "react";
import "./App.css";

export default function App2() {
  let count = 0;
  const countRef = useRef(0);
  const spanRef = useRef(null);
  const spanLetRef = useRef(null);

  function incrementRef() {
    countRef.current += 1;
    spanRef.current.textContent = countRef.current;
  }

  function incrementLet() {
    count += 1;
    spanLetRef.current.textContent = count;
  }

  return (
    <div className="container">
      <h1>Things</h1>
      <div>
        <button onClick={incrementRef}>Incrementar useRef</button>
        <strong>Valor do ref</strong>
        <span ref={spanRef}></span>
      </div>
      <div>
        <button onClick={incrementLet}>Incrementar Let</button>
        <strong>Valor do let</strong>
        <span ref={spanLetRef}></span>
      </div>
    </div>
  );
}
