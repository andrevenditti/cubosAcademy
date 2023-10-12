import './App.css'
import Header from './components/Header'
import { UserProvider } from "./context/UserContext"
import Main from './pages/Main'

export default function App() {

  return (
    <UserProvider>
      <Header />
      <Main />
    </UserProvider>
  )
}

