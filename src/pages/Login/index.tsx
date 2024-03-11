import { ChangeEvent, useContext, useState } from "react";
import "./index.css";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleLogin = async () => {
      if (email && password) {
        const isLogged = await auth.signin(email, password);
        if(isLogged) {
          navigate("/dashboard");
        }
        else {
          alert("Usuário ou senha inválidos");
        }
      }
      setEmail("");
      setPassword("");
  }

  return (
    <div className="container">
      <input type="email" placeholder="Email" onChange={handleEmail} value={email} />
      <input type="password" placeholder="Senha" onChange={handlePassword} value={password} />
      <button onClick={handleLogin}>Entrar</button>
      <Link className="Link-Register" to="/register">Não tenho conta!</Link>
    </div>
  )
}