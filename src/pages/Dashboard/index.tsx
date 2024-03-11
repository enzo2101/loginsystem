import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Dashboard = () => {

  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Deslogar</button>
    </div>
    
  )
}
