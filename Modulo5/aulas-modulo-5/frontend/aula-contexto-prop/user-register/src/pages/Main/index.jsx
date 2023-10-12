import EditProfile from "../../components/EditProfile"
import UserProfile from "../../components/UserProfile"
import "./style.css"

export default function Main() {
  return (
  <main>
    <div className="main-content left">
      <EditProfile />
    </div>
    <div className="main-content">
      <UserProfile />
    </div>
  </main>
  )
}