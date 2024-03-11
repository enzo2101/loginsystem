import { useState } from "react";
import "../Login/index.css";
import { useApi } from "../../hooks/useApi";

import { Link, useNavigate } from "react-router-dom";

export const Register = () => {

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const api = useApi();

  const handleRegister = async () => {
    if (email && password) {
      try {
        const response = await api.signup(/* name, email, password */);
        if(response) {
          navigate("/");
          setName("");
          setEmail("");
          setPassword("");
        }
        else {
          alert("Insira valores válidos!");
        }
      } catch (error) {
        console.error("Erro ao registrar:", error);
      }
    }
  }

  return (
    <div className="container">
      <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={handleRegister}>Registrar</button>
      <Link to="/">Ja tenho uma conta!</Link>
    </div>
  )
}