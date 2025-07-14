import { Wrapper } from "./style"
import { useState } from "react"
import axios from "axios";

export const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault()

    const body = {Username, Password}

    try {
        const response = await axios.post("http://localhost:4000/login",{body})
        console.log(response.data)
        console.log(body)
    } catch(error){
        console.log(error)
    }
  }
    return(
        <Wrapper>
        <form onSubmit={handleLogin}>
            <div className="details">
            <input type="text" placeholder="username" value={Username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="password" value={Password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="Submit" />
            </div>
        </form>
        </Wrapper>
    )
}