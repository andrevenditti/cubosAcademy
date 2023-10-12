import { Link, NavLink, Outlet } from "react-router-dom"
import "./styles.css"


export default function Navbar() {


  return(
    <div className="container-nav">
      <nav>
        <div className="content-links">

          <NavLink
            className={({isActive}) => isActive ? "link-selected" : ""}
            to="/dashboard"
          >
            <h2>Dashboard</h2>
          </NavLink>

          <div>
          <NavLink
            className={({isActive}) => isActive ? "link-selected" : ""}
            to="/users"
          >
            Users
          </NavLink>
            <Link to="/sign-in">Sair</Link> 
          </div>
        </div>
        <div className="content-page">
          <Outlet />
        </div>
      </nav>
    </div>
  )
}