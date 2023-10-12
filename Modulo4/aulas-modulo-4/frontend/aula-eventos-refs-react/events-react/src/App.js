import "./App.css";

export default function App() {
  function handleButton() {
    console.log("salve");
  }

  return (
    <div onClick={handleButton} className="container">
      <button>Clicar</button>
    </div>
  );
}
