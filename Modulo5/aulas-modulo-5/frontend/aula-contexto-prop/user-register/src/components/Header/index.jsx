import useUser from "../../hooks/useUser"
import "./style.css"

export default function Header() {

  const {name} = useUser()

  return (
    <header>
      Salve salve {name}! Na paz de jáh?
    </header>
  )
}