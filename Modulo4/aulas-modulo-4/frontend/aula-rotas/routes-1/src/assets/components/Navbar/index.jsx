import { Link } from "react-router-dom"
import "./styles.css"

export default function Navbar() {
  return(
    <nav>
      <h2>Dashboard</h2>
      <Link to='/sign-in' >Sair</Link>
    </nav>
  )
}