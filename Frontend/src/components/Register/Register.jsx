import { Wrapper } from "./style";
import { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const body = {Username, Password}

    try {
      const response = await axios.post("http://localhost:4000/register", {
       body
      });
      console.log(body)
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleRegister}>
        <div className="details">
          <input
            type="text"
            placeholder="username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Register" />
        </div>
      </form>
    </Wrapper>
  );
};
