import { useState } from "react"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Users from "./pages/Users"


function ProtectedRoutes( redirectTo ) {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

export default function AllRoutes() {
  const [count, setCount] = useState(0)
  // const currentPath = window.location.pathname

  return(
      <Routes>
        <Route path="/">
          <Route path="/" element={<SignIn />}/>
          <Route path="/sign-in" element={<SignIn />}/>
        </Route>

        <Route element={<ProtectedRoutes redirectTo={"/sign-in"} />}>            
          <Route path="/dashboard" element={<Navbar />}>
            <Route path="" element={<Dashboard 
              count={count} 
              setCount={setCount}
              />}
            />
          </Route> 

          <Route path="/users" element={<Navbar />}>
            <Route path="" element={<Users />} />
            <Route path=":id" element={<Users />} />
          </Route>
        </Route>
        
        <Route path="/sign-up" element={<SignUp />}/>

        <Route path="*" element={<h1>Quatrocentros e quatro</h1>} />
      </Routes>
  )
}