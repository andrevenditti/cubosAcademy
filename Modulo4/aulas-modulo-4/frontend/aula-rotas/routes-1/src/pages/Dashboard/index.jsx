import "./styles.css"

export default function Dashboard({count, setCount}) {
  return(
    <div className="dashboard">
      <div className="container">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Contar</button>
      </div>
    </div>
  )
}