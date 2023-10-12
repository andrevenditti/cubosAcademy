import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard")
    }, 1500)
  }, [])

  return(
    <div className="container">
      <h1>Sign-in</h1>
      <div>
        <Link to="/dashboard">Entar</Link>
        <Link to="/sign-up">Cadastre-se</Link>
      </div>
    </div>
  )
}