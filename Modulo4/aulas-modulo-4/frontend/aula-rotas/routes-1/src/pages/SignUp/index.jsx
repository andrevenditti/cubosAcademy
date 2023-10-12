import { Link } from "react-router-dom"

export default function SignUp() {
  return(
    <div className="container">
      <h1>Signup</h1>
      <div>
        <Link to="/sign-in">Login</Link>
      </div>
    </div>
  )
}