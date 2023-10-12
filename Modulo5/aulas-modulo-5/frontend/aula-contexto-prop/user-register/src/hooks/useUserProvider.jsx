
import { useState } from "react"

export default function useUserProvider() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [becks, setBecks] = useState("")

  return {
    name, 
    setName, 
    age, 
    setAge, 
    becks, 
    setBecks
  }
}
