import useUser from "../../hooks/useUser"
import "./style.css"

export default function UserProfile() {
  const {name, age, becks} = useUser()
  const localBecks = Number(becks)
  
  return (
    <div className="container-profile">
      <div>
        <strong>Nome:{" "}</strong>
        <span>{name}</span>
      </div>
      <div>
        <strong>Idade:{" "}</strong>
        <span>{age}</span>
      </div>
      <div>
        <strong>{localBecks * 4 > 20 ? `Você fuma ${localBecks * 4} por mês, seu maconheiro!` : `Você fuma ${localBecks * 4} por mês, ta faltando vontade!`}</strong>
      </div>
    </div>
  )
}