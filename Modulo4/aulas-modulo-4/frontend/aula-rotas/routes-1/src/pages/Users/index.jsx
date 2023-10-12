import { useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

export default function Users() {
  const {id} = useParams();
  const [users, setUsers] = useState([
    {id: 1, name: "João"},
    {id: 2, name: "Lemuel"}
  ])

  function handleReturnCurrentUser(){
    const currentUser = users.find((user) => user.id === Number(id))
    return currentUser.name
  }

  return(
    <div className="container">
      <h1>Users</h1>
      {!id 
      ?<div className="content-users">
        {users.map((user) => 
          (
            <strong key={user.id}>{user.name}</strong>
          )
        )}
      </div>
      : <h1>{handleReturnCurrentUser()}</h1>
      }
    </div>
  )
}